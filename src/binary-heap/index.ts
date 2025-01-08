interface BinaryHeap {
  insert(value: number): void
  remove(): number | undefined
  peek(): number | undefined
}

class BinaryHeapMin implements BinaryHeap {
  private heap: number[] = []

  private leftChildIndex(index: number): number {
    return 2 * index + 1
  }
  private rightChildIndex(index: number): number {
    return 2 * index + 2
  }
  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private hasLeftChild(index: number): boolean {
    return this.leftChildIndex(index) < this.heap.length
  }
  private hasRightChild(index: number): boolean {
    return this.rightChildIndex(index) < this.heap.length
  }
  private hasParent(index: number): boolean {
    return this.parentIndex(index) >= 0
  }

  private leftChild(index: number): number {
    return this.heap[this.leftChildIndex(index)]
  }
  private rightChild(index: number): number {
    return this.heap[this.rightChildIndex(index)]
  }
  private parent(index: number): number {
    return this.heap[this.parentIndex(index)]
  }

  private heapUp(): void {
    let index = this.heap.length - 1

    // `this.parent(index) > this.heap[index]` is the condition for a min heap
    // this would be reversed for a max heap
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      // swap the child and parent
      const parentIndex = this.parentIndex(index)
      ;[this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index]
      ]

      // move up the heap by assigning the parent index to the current index
      index = parentIndex
    }
  }

  private heapDown(): void {
    let index = 0

    while (this.hasLeftChild(index)) {
      // in a min heap, we want to work with the smaller child, so we figure out
      // if that is the left or right child
      let smallerChildIndex = this.leftChildIndex(index)
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.rightChildIndex(index)
      }

      // if the current index is smaller than the smallest child, break out of the loop
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break
      }

      // swap the parent and the smaller child
      ;[this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index]
      ]

      // move down the heap by assigning the smaller child index to the current index
      index = smallerChildIndex
    }
  }

  // PUBLIC INTERFACE

  /**
   * Inserts a value into the heap and maintains the heap property
   * @param value The value to insert into the heap
   */
  public insert(value: number): void {
    this.heap.push(value)
    this.heapUp()
  }

  /**
   * Removes the minimum element from the heap and maintains the heap property
   * @returns {number | undefined} The minimum element in the heap
   */
  public remove(): number | undefined {
    if (this.heap.length === 0) {
      return undefined
    }

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.heapDown()

    return min
  }

  /**
   * Returns the minimum element in the heap without removing it
   * @returns {number | undefined} The minimum element in the heap
   */
  public peek(): number | undefined {
    return this.heap[0]
  }
}

export { BinaryHeapMin }
