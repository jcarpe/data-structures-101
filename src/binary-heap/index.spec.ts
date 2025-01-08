import { beforeEach, describe, expect, test } from 'bun:test'
import { BinaryHeapMin } from './index'

describe('BinaryHeap', () => {
  let heap: BinaryHeapMin

  beforeEach(() => {
    heap = new BinaryHeapMin()
  })

  test('should insert elements and maintain heap property', () => {
    heap.insert(10)
    heap.insert(20)
    heap.insert(5)
    heap.insert(15)

    expect(heap.peek()).toBe(5)
  })

  test('should remove the minimum element and maintain heap property', () => {
    heap.insert(10)
    heap.insert(20)
    heap.insert(5)
    heap.insert(15)

    expect(heap.remove()).toBe(5)
    expect(heap.peek()).toBe(10)
  })

  test('should handle removing from an empty heap', () => {
    expect(heap.remove()).toBeUndefined()
  })

  test('should handle peeking into an empty heap', () => {
    expect(heap.peek()).toBeUndefined()
  })

  test('should maintain heap property after multiple insertions and removals', () => {
    heap.insert(10)
    heap.insert(20)
    heap.insert(5)
    heap.insert(15)
    heap.insert(1)

    expect(heap.remove()).toBe(1)
    expect(heap.remove()).toBe(5)
    expect(heap.remove()).toBe(10)
    expect(heap.remove()).toBe(15)
    expect(heap.remove()).toBe(20)
  })
})
