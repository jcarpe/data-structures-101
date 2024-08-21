import { describe, expect, test } from 'bun:test'
import Stack from '.'

describe('Stack', () => {
  test('allows adding nodes to the top of the stack', () => {
    const testStack = new Stack<number>()

    testStack.push(0)
    testStack.push(1)
    testStack.push(2)

    expect(testStack.length).toEqual(3)
    expect(testStack.top).toEqual(2)
  })

  test('allows removing nodes from the top of the stack', () => {
    const testStack = new Stack<number>()

    testStack.push(0)
    testStack.push(1)
    testStack.push(2)

    testStack.pop()

    expect(testStack.length).toEqual(2)
    expect(testStack.top).toEqual(1)

    testStack.pop()

    expect(testStack.length).toEqual(1)
    expect(testStack.top).toEqual(0)
  })
})
