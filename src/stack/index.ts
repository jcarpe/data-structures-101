/**
 * Stack data structure that follows the Last In First Out (LIFO) principle.
 *
 * Note: his does not really do anything more than an array, but it is a good
 * example of a simple Stack data structure and restricts functionality to only
 * what is needed.
 */
class Stack<T> {
  private _stack: T[] = []

  /**
   * Adds (pushes) a value to the top of the stack
   * @param {T} value - The value to add to the top of the stack
   */
  push(value: T): void {
    this._stack.push(value)
  }

  /**
   * Removes (pops) the value at the top of the stack
   * @returns {T | undefined} - The value at the top of the stack
   */
  pop(): T | undefined {
    return this._stack.pop()
  }

  /**
   * Returns the value at the top of the stack without removing it
   * @returns {T} - The value at the top of the stack
   */
  get top(): T {
    return this._stack[this.length - 1]
  }

  /**
   * Returns the number of values in the stack
   * @returns {number} - The number of values in the stack
   */
  get length(): number {
    return this._stack.length
  }
}

export default Stack
