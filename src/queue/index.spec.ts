import { describe, expect, test } from 'bun:test'
import Queue from './index'

describe('Queue', () => {
  test('should enqueue values to the queue', () => {
    const queue = new Queue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.size).toBe(3)
  })

  test('should dequeue values from the queue', () => {
    const queue = new Queue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const dequeuedValue = queue.dequeue()

    expect(dequeuedValue).toBe(1)
    expect(queue.size).toBe(2)
  })

  test('should return the front value of the queue without removing it', () => {
    const queue = new Queue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const frontValue = queue.front

    expect(frontValue).toBe(1)
    expect(queue.size).toBe(3)
  })

  test('should return the number of values in the queue', () => {
    const queue = new Queue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.size).toBe(3)
  })
})
