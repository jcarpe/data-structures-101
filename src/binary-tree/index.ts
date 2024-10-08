export class Node<Number> {
  value: Number
  left: Node<Number> | null
  right: Node<Number> | null

  constructor(value: Number) {
    this.value = value
    this.left = null
    this.right = null
  }

  findMin(): Node<Number> {
    if (!this.left) {
      return this
    } else {
      return this.left.findMin()
    }
  }
}

export default class BinaryTree<Number> {
  _root: Node<Number> | null

  get root(): Node<Number> | null {
    return this._root
  }

  constructor(initialValue?: Number) {
    this._root = initialValue ? new Node(initialValue) : null
  }

  visualize(): void {
    const recurseNodes = (node: Node<Number> | null, depth: number): void => {
      if (!node) {
        return
      }

      recurseNodes(node.right, depth + 1)

      console.log('  '.repeat(depth) + node.value)

      recurseNodes(node.left, depth + 1)
    }

    recurseNodes(this._root, 0)
  }

  clear(): void {
    this._root = null
  }

  insert(value: Number): void {
    if (!this._root) {
      this._root = new Node(value)
      return
    }

    const recurseNodes = (node: Node<Number>): void => {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value)
          return
        }

        recurseNodes(node.left)
        return
      }

      if (!node.right) {
        node.right = new Node(value)
        return
      }

      recurseNodes(node.right)
    }

    recurseNodes(this._root)
  }

  find(value: Number): Node<Number> | null {
    const recurseNodes = (node: Node<Number> | null): Node<Number> | null => {
      if (!node) {
        return null
      }

      if (node.value === value) {
        return node
      }

      if (value < node.value) {
        return recurseNodes(node.left)
      }

      return recurseNodes(node.right)
    }

    return recurseNodes(this._root)
  }

  remove(value: Number): void {
    const recurseNodes = (node: Node<Number> | null): Node<Number> | null => {
      if (!node) {
        return null
      }

      if (value < node.value) {
        node.left = recurseNodes(node.left)
      } else if (value > node.value) {
        node.right = recurseNodes(node.right)
      } else {
        if (node.left === null && node.right === null) {
          node = null
        } else if (node.left == null) {
          node = node.right
        } else if (node.right == null) {
          node = node.left
        } else {
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
