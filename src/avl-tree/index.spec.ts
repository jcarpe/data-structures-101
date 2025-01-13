import { beforeEach, describe, expect, test } from 'bun:test'
import AVLTree from '.'

const populateTree = (tree: AVLTree<Number>, values: number[]) => {
  for (const value of values) {
    tree.insert(value)
  }
}

describe('AVL tree', () => {
  let avlTree: AVLTree<Number>

  beforeEach(() => {
    avlTree = new AVLTree()
  })

  test('should create a binary tree that is balanced', () => {
    populateTree(avlTree, [30, 20, 10])

    expect(avlTree.root?.value).toBe(20)
    expect(avlTree.root?.left?.value).toBe(10)
    expect(avlTree.root?.right?.value).toBe(30)
  })

  test('should insert multiple values into the tree', () => {
    populateTree(
      avlTree,
      [30, 40, 50, 20, 10, 5, 15, 25, 35, 45, 55, 60, 70, 65, 75, 80, 90, 95]
    )

    expect(avlTree.root?.value).toBe(40)
    expect(avlTree.root?.left?.value).toBe(20)
    expect(avlTree.root?.right?.value).toBe(60)
    expect(avlTree.root?.left?.left?.left?.value).toBe(5)
    expect(avlTree.root?.right?.right?.right?.right?.value).toBe(95)
  })

  test('should remove nodes from the tree and successfully rebalance', () => {
    populateTree(avlTree, [30, 20, 10])

    avlTree.remove(30)

    expect(avlTree.root?.value).toBe(20)
    expect(avlTree.root?.left?.value).toBe(10)

    avlTree.clear()

    populateTree(avlTree, [80, 70, 60, 50, 40, 30, 20, 10])

    avlTree.remove(30)

    expect(avlTree.root?.value).toBe(50)
    expect(avlTree.root?.left?.value).toBe(20)
    expect(avlTree.root?.left?.left?.value).toBe(10)
  })
})
