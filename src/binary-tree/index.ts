class Node<Number> {
  value: Number
  left: Node<Number> | null
  right: Node<Number> | null

  constructor(value: Number) {
    this.value = value
    this.left = null
    this.right = null
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

  remove(value: Number): void {}
}
