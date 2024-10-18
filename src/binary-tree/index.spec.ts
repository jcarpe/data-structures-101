import { beforeEach, describe, expect, test } from 'bun:test'
import BinaryTree from '.'

describe('BinaryTree', () => {
  let tree: BinaryTree<Number>

  beforeEach(() => {
    tree = new BinaryTree<Number>()
  })

  test('should initialize an empty tree', () => {
    expect(tree.root).toBeNull()
  })

  test('should insert a value into the tree', () => {
    tree.insert(10)
    expect(tree.root).not.toBeNull()
    expect(tree.root?.value).toBe(10)
  })

  test('should insert multiple values into the tree', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)
    tree.insert(20)
    tree.insert(12)
    tree.insert(11)

    expect(tree.root?.value).toBe(10)
    expect(tree.root?.left?.value).toBe(5)
    expect(tree.root?.right?.value).toBe(15)
    expect(tree.root?.right?.right?.value).toBe(20)
    expect(tree.root?.right?.left?.value).toBe(12)
    expect(tree.root?.right?.left?.left?.value).toBe(11)
  })

  test('should find a value in the tree', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    const node = tree.find(5)
    expect(node).not.toBeNull()
    expect(node?.value).toBe(5)
  })

  test('should find a minimum value in the tree from the root', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    const minNode = tree.root?.findMin()
    expect(minNode).not.toBeNull()
    expect(minNode?.value).toBe(5)
  })

  test('should return null when finding a non-existent value', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    const node = tree.find(20)
    expect(node).toBeNull()
  })

  test('should clear the tree', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)
    tree.clear()

    expect(tree.root).toBeNull()
  })

  test('should remove a value from the tree', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    tree.remove(5)
    expect(tree.root?.left).toBeNull()

    tree.clear()

    // assert deeply nested min in tree
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)
    tree.insert(12)
    tree.insert(20)
    tree.insert(18)
    tree.insert(25)

    tree.remove(15)

    expect(tree.root?.right?.value).toBe(18)
  })

  test('should handle removing a non-existent value gracefully', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    tree.remove(20)
    expect(tree.root?.left?.value).toBe(5)
    expect(tree.root?.right?.value).toBe(15)
  })
})
