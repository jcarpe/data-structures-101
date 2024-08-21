import { describe, expect, test } from 'bun:test'
import LinkedList from '.'

describe('Linked List', () => {
  test('is able to accept an added node to the head', () => {
    const linkedList = new LinkedList<object>()

    linkedList.addToHead({ value: 0 })
    linkedList.addToHead({ value: 1 })
    linkedList.addToHead({ value: 2 })

    expect(linkedList.head).toEqual({ value: 2 })
    expect(linkedList.tail).toEqual({ value: 0 })
  })

  test('is able to provide the head and tail (first and last elements)', () => {
    const linkedList = new LinkedList<object>()

    linkedList.addToHead({ value: 0 })
    linkedList.addToHead({ value: 1 })
    linkedList.addToHead({ value: 2 })

    expect(linkedList.head).toEqual({ value: 2 })
    expect(linkedList.tail).toEqual({ value: 0 })
  })

  test('is able to append a node to the tail', () => {
    const linkedList = new LinkedList<object>()

    linkedList.addToHead({ value: 0 })
    linkedList.addToHead({ value: 1 })
    linkedList.addToHead({ value: 2 })

    linkedList.addToTail({ value: 3 })

    expect(linkedList.head).toEqual({ value: 2 })
    expect(linkedList.tail).toEqual({ value: 3 })
  })

  test('is able to provide a query for the list size', () => {
    const linkedList = new LinkedList<object>()

    expect(linkedList.size).toEqual(0)

    linkedList.addToHead({ value: 0 })
    linkedList.addToHead({ value: 1 })
    linkedList.addToHead({ value: 2 })

    expect(linkedList.size).toEqual(3)
  })

  test('is able to clear the list', () => {
    const linkedList = new LinkedList<object>()

    linkedList.addToHead({ value: 0 })
    linkedList.addToHead({ value: 1 })
    linkedList.addToHead({ value: 2 })

    linkedList.clear()

    expect(linkedList.size).toEqual(0)
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
  })

  test('is able to delete a node by its value', () => {
    const linkedList = new LinkedList<object>()

    linkedList.addToHead({ value: 0 })
    linkedList.addToHead({ value: 1 })
    linkedList.addToHead({ value: 2 })

    linkedList.deleteNode({ value: 1 })

    expect(linkedList.size).toEqual(2)
    expect(linkedList.head).toEqual({ value: 2 })
    expect(linkedList.tail).toEqual({ value: 0 })

    linkedList.deleteNode({ value: 0 })

    expect(linkedList.size).toEqual(1)
  })
})
