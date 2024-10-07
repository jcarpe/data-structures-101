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

    expect(tree.root?.value).toBe(10)
    expect(tree.root?.left?.value).toBe(5)
    expect(tree.root?.right?.value).toBe(15)
  })

  test('should find a value in the tree', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    const node = tree.find(5)
    expect(node).not.toBeNull()
    expect(node?.value).toBe(5)
  })

  test('should return null when finding a non-existent value', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    const node = tree.find(20)
    expect(node).toBeNull()
  })

  test('should remove a value from the tree', () => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(15)

    tree.remove(5)
    expect(tree.root?.left).toBeNull()

    // TODO: more complex removal assertions here
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
