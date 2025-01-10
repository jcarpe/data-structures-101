export class AVLNode<Number> {
  public height: number = 1
  public value: Number
  public left: AVLNode<Number> | null
  public right: AVLNode<Number> | null

  constructor(value: Number) {
    this.value = value
    this.left = null
    this.right = null
  }

  /**
   * Finds the minimum value in the binary tree
   * @returns {Node<Number>} The node containing the minimum value in the binary tree
   */
  findMin(): AVLNode<Number> {
    // we know that the minimum value in a binary search tree is the leftmost node
    // so we recurse to the left until we find a node that has no left child
    if (!this.left) {
      return this
    } else {
      return this.left.findMin()
    }
  }
}

class AVLTree<Number> {
  private _root: AVLNode<Number> | null = null

  private insertRecursion = (
    node: AVLNode<Number> | null,
    value: Number
  ): AVLNode<Number> => {
    if (node === null) {
      return new AVLNode(value)
    }

    if (value < node.value) {
      node.left = this.insertRecursion(node.left, value)
    } else if (value > node.value) {
      node.right = this.insertRecursion(node.right, value)
    } else {
      return node
    }

    node.height = Math.max(node.left?.height ?? 0, node.right?.height ?? 0) + 1

    const balance = (node.left?.height ?? 0) - (node.right?.height ?? 0)

    if (balance > 1 && node.left && node.value > node.left.value) {
      return this.rotateRight(node)
    }

    if (balance < -1 && node.right && node.value < node.right.value) {
      return this.rotateLeft(node)
    }

    if (balance > 1 && node.left && value < node.left.value) {
      node.left = this.rotateLeft(node.left)
      return this.rotateRight(node)
    }

    if (balance < -1 && node.right && value > node.right.value) {
      node.right = this.rotateRight(node.right)
      return this.rotateLeft(node)
    }

    return node
  }

  private findRecursion = (
    node: AVLNode<Number> | null,
    value: Number
  ): AVLNode<Number> | null => {
    if (!node) {
      return null
    } else if (node.value === value) {
      // we found the node with the value we are looking for
      return node
    } else if (value < node.value) {
      // traverse left
      return this.findRecursion(node.left, value)
    }

    // traverse right
    return this.findRecursion(node.right, value)
  }

  private removeRecursion = (
    node: AVLNode<Number> | null,
    value: Number
  ): AVLNode<Number> | null => {
    if (!node) {
      return null
    } else if (value < node.value) {
      // if the value we want to remove is less than the current node's value,
      // we recurse to the left
      node.left = this.removeRecursion(node.left, value)
    } else if (value > node.value) {
      // if the value we want to remove is greater than the current node's value,
      // we recurse to the right
      node.right = this.removeRecursion(node.right, value)
    } else {
      if (node.left === null && node.right === null) {
        // if the node has no children, we can just remove it
        node = null
      } else if (node.left == null) {
        // if the node has only a right child, we can replace the node with its right child
        node = node.right
      } else if (node.right == null) {
        // if the node has only a left child, we can replace the node with its left child
        node = node.left
      } else {
        // if the node has two children, we find the minimum value in the right subtree
        const minRight = node.right.findMin()

        node.value = minRight.value
        node.right = this.removeRecursion(node.right, value)
      }
    }

    return node
  }

  private rotateRight(x: AVLNode<Number>): AVLNode<Number> {
    const y = x.left as AVLNode<Number>
    const T2 = y.right as AVLNode<Number>

    // perform rotation
    y.right = x
    x.left = T2

    // update heights
    x.height = Math.max(x.left?.height ?? 0, x.right?.height ?? 0) + 1
    y.height = Math.max(y.left?.height ?? 0, y.right?.height ?? 0) + 1

    return y
  }

  private rotateLeft(x: AVLNode<Number>): AVLNode<Number> {
    const y = x.right as AVLNode<Number>
    const T2 = y.left as AVLNode<Number>

    // perform rotation
    y.left = x
    x.right = T2

    // update heights
    x.height = Math.max(x.left?.height ?? 0, x.right?.height ?? 0) + 1
    y.height = Math.max(y.left?.height ?? 0, y.right?.height ?? 0) + 1

    return y
  }

  /**
   * Returns the root node of the binary tree
   * @returns {AVLNode<Number> | null} The root node of the binary tree
   */
  get root(): AVLNode<Number> | null {
    return this._root
  }

  /**
   * Prints the binary tree in a console-friendly format that clearly illustrates the tree structure.
   * @returns {void}
   */
  public print(): void {
    const printNode = (
      node: AVLNode<Number> | null,
      prefix: string = '',
      isLeft: boolean = true
    ) => {
      if (node !== null) {
        console.log(prefix + (isLeft ? '├── ' : '└── ') + node.value)
        printNode(node.left, prefix + (isLeft ? '│   ' : '    '), true)
        printNode(node.right, prefix + (isLeft ? '│   ' : '    '), false)
      }
    }

    if (this._root === null) {
      console.log('Tree is empty')
    } else {
      printNode(this._root, '', true)
    }
  }

  /**
   * Clears the binary tree
   */
  public clear(): void {
    this._root = null
  }

  /**
   * Inserts a value into the binary tree
   * @param {Number} value The value to insert into the binary tree
   */
  public insert(value: Number): void {
    if (!this._root) {
      this._root = new AVLNode(value)
      return
    }

    this._root = this.insertRecursion(this._root, value)
  }

  /**
   * Finds a value in the binary tree
   * @param {Number} value The value to find in the binary tree
   * @returns {Node<Number> | null} The node containing the value or null if the value is not found
   */
  public find(value: Number): AVLNode<Number> | null {
    return this.findRecursion(this._root, value)
  }

  /**
   * Removes a value from the binary tree
   * @param {Number} value The value to remove from the binary tree
   */
  public remove(value: Number): void {
    this.removeRecursion(this._root, value)
  }
}

export default AVLTree
