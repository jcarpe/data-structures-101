class LinkedNode<T> {
  private _data: T | null = null
  private _pointer: LinkedNode<T> | null = null

  constructor(data: T, pointer?: LinkedNode<T>) {
    this._data = data
    this._pointer = pointer ?? null
  }

  get data(): T | null {
    return this._data
  }

  set data(newData: T) {
    this._data = newData
  }

  get pointer(): LinkedNode<T> | null {
    return this._pointer
  }

  set pointer(newPointer: LinkedNode<T> | null) {
    this._pointer = newPointer
  }
}

/**
 * Linked list data structure that consists of nodes where each node
 * contains a data field and a pointer field.
 */
class LinkedList<T> {
  private _head: LinkedNode<T> | null = null
  private _size: number = 0

  /**
   * Returns the first element in the linked list.
   * @returns {T | null} - The first element in the linked list.
   */
  get head(): T | null {
    return this._head?.data ?? null
  }

  /**
   * Returns the number of elements in the linked list.
   * @returns {number} - The number of elements in the linked list.
   */
  get size(): number {
    return this._size
  }

  /**
   * Returns the last element in the linked list.
   * @returns {T | null} - The last element in the linked list.
   */
  get tail(): T | null {
    const getTail = (currNode: LinkedNode<T> | null) => {
      if (currNode?.pointer) return getTail(currNode.pointer)
      return currNode?.data
    }

    return getTail(this._head) ?? null
  }

  /**
   * Adds a node to the end of the linked list.
   * @param {T} data - The data to add to the end of the linked list.
   */
  public addToTail = (data: T): void => {
    const addedNode = new LinkedNode<T>(data)

    if (this._head === null) {
      this._head = addedNode
      this._size++
      return
    }

    let currentNode = this._head

    while (currentNode.pointer) {
      currentNode = currentNode.pointer
    }

    currentNode.pointer = addedNode
    this._size++
  }

  /**
   * Adds a node to the beginning of the linked list.
   * @param {T} data - The data to add to the beginning of the linked list.
   */
  public addToHead = (data: T): void => {
    const addedNode = new LinkedNode<T>(data)

    if (this._head === null) {
      this._head = addedNode
      this._size++
      return
    }

    addedNode.pointer = this._head
    this._head = addedNode
    this._size++
  }

  /**
   * Deletes a node from the linked list.
   * @param {T} data - The data to delete from the linked list.
   */
  public deleteNode = (data: T): void => {
    if (this._head === null) return

    if (this._head.data === data) {
      this._head = this._head.pointer
      this._size--
      return
    }

    let currentNode = this._head

    while (currentNode.pointer) {
      if (JSON.stringify(currentNode.pointer.data) === JSON.stringify(data)) {
        currentNode.pointer = currentNode.pointer.pointer
        this._size--
        return
      }

      currentNode = currentNode.pointer
    }
  }

  /**
   * Clears the linked list.
   */
  public clear = (): void => {
    this._head = null
    this._size = 0
  }
}

export default LinkedList
