class Node<Number> {
  value: Number
  left: Node<Number> | null
  right: Node<Number> | null

  constructor(value: Number) {
    this.value = value
    this.left = null
    this.right = null
  }

  /**
   * Finds the minimum value in the binary tree
   * @returns {Node<Number>} The node containing the minimum value in the binary tree
   */
  findMin(): Node<Number> {
    // we know that the minimum value in a binary search tree is the leftmost node
    // so we recurse to the left until we find a node that has no left child
    if (!this.left) {
      return this
    } else {
      return this.left.findMin()
    }
  }
}

export default class BinaryTree<Number> {
  _root: Node<Number> | null

  /**
   * Returns the root node of the binary tree
   * @returns {Node<Number> | null} The root node of the binary tree
   */
  get root(): Node<Number> | null {
    return this._root
  }

  /**
   * Creates a new binary tree
   * @param {Number} initialValue The initial value of the binary tree
   */
  constructor(initialValue?: Number) {
    this._root = initialValue ? new Node(initialValue) : null
  }

  /**
   * Clears the binary tree
   */
  clear(): void {
    this._root = null
  }

  /**
   * Inserts a value into the binary tree
   * @param {Number} value The value to insert into the binary tree
   */
  insert(value: Number): void {
    if (!this._root) {
      this._root = new Node(value)
      return
    }

    const recurseNodes = (node: Node<Number>): void => {
      if (value <= node.value) {
        if (!node.left) {
          // if the value we want to insert is less than the current node's value and
          // the left child is null, we insert the value as the left child
          node.left = new Node(value)
        } else {
          // if the left child is not null, we recurse to the left
          recurseNodes(node.left)
        }
      }

      if (value > node.value) {
        if (!node.right) {
          // if the value we want to insert is greater than the current node's value and
          // the right child is null, we insert the value as the right child
          node.right = new Node(value)
        } else {
          // if the right child is not null, we recurse to the right
          recurseNodes(node.right)
        }
      }
    }

    recurseNodes(this._root)
  }

  /**
   * Finds a value in the binary tree
   * @param {Number} value The value to find in the binary tree
   * @returns {Node<Number> | null} The node containing the value or null if the value is not found
   */
  find(value: Number): Node<Number> | null {
    const recurseNodes = (node: Node<Number> | null): Node<Number> | null => {
      if (!node) {
        return null
      } else if (node.value === value) {
        // we found the node with the value we are looking for
        return node
      } else if (value < node.value) {
        // traverse left
        return recurseNodes(node.left)
      }

      // traverse right
      return recurseNodes(node.right)
    }

    return recurseNodes(this._root)
  }

  /**
   * Removes a value from the binary tree
   * @param {Number} value The value to remove from the binary tree
   */
  remove(value: Number): void {
    const recurseNodes = (node: Node<Number> | null): Node<Number> | null => {
      if (!node) {
        return null
      } else if (value < node.value) {
        // if the value we want to remove is less than the current node's value,
        // we recurse to the left
        node.left = recurseNodes(node.left)
      } else if (value > node.value) {
        // if the value we want to remove is greater than the current node's value,
        // we recurse to the right
        node.right = recurseNodes(node.right)
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
          node.right = recurseNodes(node.right)
        }
      }

      return node
    }

    recurseNodes(this._root)
  }
}
