# Stack Module

This module provides a simple implementation of a Stack data structure in TypeScript. The Stack follows the Last In First Out (LIFO) principle, where the last element added is the first one to be removed.

## Overview

A Stack is a linear data structure that allows adding and removing elements in a particular order. This implementation restricts functionality to only what is needed for a Stack, making it a good example of this data structure.

## Features

- **Push**: Adds a value to the top of the stack.
- **Pop**: Removes the value at the top of the stack.
- **Top**: Retrieves the value at the top of the stack without removing it.
- **Length**: Returns the number of values in the stack.

## Usage

### Creating a Stack

```typescript
import Stack from './index'

const stack = new Stack<number>()
```

### Adding Values

```typescript
stack.push(1)
stack.push(2)
```

### Removing Values

```typescript
const value = stack.pop() // 2
```

### Retrieving the Top Value

```typescript
const topValue = stack.top // 1
```

### Getting the Length

```typescript
const length = stack.length // 1
```

## API

### `Stack<T>`

#### Methods

- `push(value: T): void`: Adds a value to the top of the stack.
- `pop(): T | undefined`: Removes the value at the top of the stack and returns it.

#### Properties

- `top: T`: Returns the value at the top of the stack without removing it.
- `length: number`: Returns the number of values in the stack.

## Example

```typescript
import Stack from './index'

const stack = new Stack<number>()

stack.push(1)
stack.push(2)

console.log(stack.top) // Output: 2
console.log(stack.length) // Output: 2

const value = stack.pop()
console.log(value) // Output: 2
console.log(stack.top) // Output: 1
console.log(stack.length) // Output: 1
```

## Notes

- This implementation is for educational purposes and may not be suitable for production use.
