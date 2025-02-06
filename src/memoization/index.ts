const memo: number[] = []

/**
 * Computes the nth Fibonacci number using memoization to optimize performance.
 *
 * @param {number} n - The position in the Fibonacci sequence to compute. If a non-negative integer is provided, it will default to 0.
 * @returns {number} - The nth Fibonacci number.
 *
 * @example
 * ```typescript
 * fibonacci(0); // returns 0
 * fibonacci(1); // returns 1
 * fibonacci(5); // returns 5
 * fibonacci(10); // returns 55
 * ```
 */
export const fibonacci = (position: number): number => {
  if (position <= 0) return 0
  if (position === 1) return 1
  if (memo[position]) return memo[position]

  memo[position] = fibonacci(position - 1) + fibonacci(position - 2)
  return memo[position]
}
