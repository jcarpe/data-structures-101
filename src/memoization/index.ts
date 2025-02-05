const memo: { [key: number]: number } = {}

function fibonacci(n: number): number {
  if (n <= 1) return n
  if (memo[n]) return memo[n]

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return memo[n]
}

// Example usage:
console.log(fibonacci(10)) // Output: 55
