import { describe, it, expect } from 'bun:test'

describe('Fibonacci Value Retrieval', () => {
  it('should return 0 for the first index (0) in the Fibonacci sequence', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('should return 1 for the second index (1) in the Fibonacci sequence', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('should return 1 for the third index (2) in the Fibonacci sequence, as it is the sum of the two preceding numbers (0 and 1)', () => {
    expect(fibonacci(2)).toBe(1)
  })

  it('should return 2 for the fourth index (3) in the Fibonacci sequence, as it is the sum of the two preceding numbers (1 and 1)', () => {
    expect(fibonacci(3)).toBe(2)
  })

  it('should return 3 for the fifth index (4) in the Fibonacci sequence, as it is the sum of the two preceding numbers (1 and 2)', () => {
    expect(fibonacci(4)).toBe(3)
  })

  it('should return 5 for the sixth index (5) in the Fibonacci sequence, as it is the sum of the two preceding numbers (2 and 3)', () => {
    expect(fibonacci(5)).toBe(5)
  })

  it('should throw an error for negative indices, as the Fibonacci sequence is not defined for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Index cannot be negative')
  })

  it('should return 55 for the eleventh index (10) in the Fibonacci sequence, as it is the sum of the two preceding numbers (21 and 34)', () => {
    expect(fibonacci(10)).toBe(55)
  })
})
