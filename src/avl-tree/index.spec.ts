import { beforeEach, describe, expect, test } from 'bun:test'
import AVLTree from '.'

describe('AVL tree', () => {
  let avlTree: AVLTree<Number>

  beforeEach(() => {
    avlTree = new AVLTree()
  })

  test('should create a binary tree that is balanced', () => {
    avlTree.insert(30)
    avlTree.insert(20)
    avlTree.insert(10)

    expect(avlTree.root?.value).toBe(20)
    expect(avlTree.root?.left?.value).toBe(10)
    expect(avlTree.root?.right?.value).toBe(30)
  })

  test('should insert multiple values into the tree', () => {
    avlTree.insert(30)
    avlTree.insert(40)
    avlTree.insert(50)
    avlTree.insert(20)
    avlTree.insert(10)
    avlTree.insert(5)
    avlTree.insert(15)
    avlTree.insert(25)
    avlTree.insert(35)
    avlTree.insert(45)
    avlTree.insert(55)
    avlTree.insert(60)
    avlTree.insert(70)
    avlTree.insert(65)
    avlTree.insert(75)
    avlTree.insert(80)
    avlTree.insert(90)
    avlTree.insert(95)

    expect(avlTree.root?.value).toBe(40)
    expect(avlTree.root?.left?.value).toBe(20)
    expect(avlTree.root?.right?.value).toBe(60)
    expect(avlTree.root?.left?.left?.left?.value).toBe(5)
    expect(avlTree.root?.right?.right?.right?.right?.value).toBe(95)
  })
})
