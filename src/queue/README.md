# Queue Module

This module provides a simple implementation of a Queue data structure in TypeScript. The Queue follows the First In First Out (FIFO) principle, where the first element added is the first one to be removed.

## Overview

A Queue is a linear data structure that allows adding and removing elements in a particular order. This implementation restricts functionality to only what is needed for a Queue, making it a good example of this data structure.

## Features

- **Enqueue**: Adds an item to the back of the queue.
- **Dequeue**: Removes the item at the front of the queue.
- **Front**: Retrieves the item at the front of the queue without removing it.
- **Size**: Returns the number of items in the queue.

## Usage

### Creating a Queue

```typescript
import Queue from './index';

const queue = new Queue<number>();
```

### Adding Items

```typescript
queue.enqueue(1);
queue.enqueue(2);
```

### Removing Items

```typescript
const item = queue.dequeue(); // 1
```

### Retrieving the Front Item

```typescript
const frontItem = queue.front; // 2
```

### Getting the Size

```typescript
const size = queue.size; // 1
```

## API

### `Queue<T>`

#### Methods

- `enqueue(item: T): void`: Adds an item to the back of the queue.
- `dequeue(): T | undefined`: Removes the item at the front of the queue and returns it.

#### Properties

- `front: T`: Returns the item at the front of the queue without removing it.
- `size: number`: Returns the number of items in the queue.

## Example

```typescript
import Queue from './index';

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.front); // Output: 1
console.log(queue.size); // Output: 2

const item = queue.dequeue();
console.log(item); // Output: 1
console.log(queue.front); // Output: 2
console.log(queue.size); // Output: 1
```

## Notes

- This implementation is for educational purposes and may not be suitable for production use.
