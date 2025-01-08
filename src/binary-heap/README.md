# BinaryHeap

This module provides a sample implementation of a binary heap data structure in TypeScript. The `BinaryHeapMin` class provides methods to insert elements, remove the minimum element, and peek at the minimum element while maintaining the heap property.

## Overview

Binary heaps are commonly used to implement priority queues, where the highest (or lowest) priority element is always at the root and can be accessed in constant time. They are represented as a tree structure, but since they use a simpler sorting method than a Binary Tree, they can be represented as an array, and therefore are very fast and efficient for the key operation if finding the min or max (peek: 0(1)) while maintaining priority ordering.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)

## Installation

To use the `BinaryHeapMin` class in your project, you can simply copy the `index.ts` file into your project directory.

## Usage

Import the `BinaryHeapMin` class and use it to create a new binary heap instance.

```typescript
import BinaryHeapMin from './path/to/index.ts'

const heap = new BinaryHeapMin()
heap.insert(10)
heap.insert(5)
heap.insert(20)

console.log(heap.peek()) // Output: 5
console.log(heap.remove()) // Output: 5
console.log(heap.peek()) // Output: 10
```

## API

`insert(value: number): void`
Inserts a value into the heap and maintains the heap property.

- `value`: The value to insert into the heap.

`remove(): number | undefined`
Removes the minimum element from the heap and maintains the heap property.

- Returns: The minimum element in the heap, or `undefined` if the heap is empty.

`peek(): number | undefined`
Returns the minimum element in the heap without removing it.

- Returns: The minimum element in the heap, or `undefined` if the heap is empty.
