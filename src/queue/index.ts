/**
 * Queue data structure that follows the First In First Out (FIFO) principle.
 */
class Queue<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  /**
   * Adds an item to the queue.
   * @param {T} item - The item to add to the back of the queue.
   * @returns {void}
   */
  enqueue(item: T): void {
    this.items.push(item)
  }

  /**
   * Removes an item from the queue.
   * @returns {T | undefined} - The item at the front of the queue.
   */
  dequeue(): T | undefined {
    return this.items.shift()
  }

  /**
   * Returns the item at the front of the queue without removing it.
   * @returns {T} - The item at the front of the queue.
   */
  get front(): T {
    return this.items[0]
  }

  /**
   * Returns the number of items in the queue.
   * @returns {number} - The number of items in the queue.
   */
  get size(): number {
    return this.items.length
  }
}

export default Queue
