# Fibonacci Function

This module provides a function to compute the nth Fibonacci number using memoization to optimize performance.

## Function

### `fibonacci(position: number): number`

#### Description

Computes the nth Fibonacci number using memoization to optimize performance.

#### Parameters

- `position` (number): The position in the Fibonacci sequence to compute. If a non-negative integer is provided, it will default to 0.

#### Returns

- `number`: The nth Fibonacci number.

#### Example

```typescript
import { fibonacci } from './index'

console.log(fibonacci(0)) // returns 0
console.log(fibonacci(1)) // returns 1
console.log(fibonacci(5)) // returns 5
console.log(fibonacci(10)) // returns 55
```

## Usage

1. Import the `fibonacci` function from the module.
2. Call the function with the desired position in the Fibonacci sequence.

## Notes

- The function uses memoization to store previously computed Fibonacci numbers, which significantly improves performance for large values of `n`. Retrieving a value in the nth position for the first time is `O(2^n)` (expensive), whereas after the initial compute it is memoized and becomes a simple array access for `O(1)` (fast).
