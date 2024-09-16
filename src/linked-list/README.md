Sure! Here is a README for the Linked List implementation:

# LinkedList Module

This module provides a simple implementation of a Linked List in TypeScript. It includes a `LinkedNode` class to represent each node in the list and a `LinkedList` class to manage the list.

## Overview

A Linked List is a data structure that consists of nodes where each node contains a data field and a pointer to the next node in the sequence. This implementation supports basic operations such as adding, removing, and retrieving elements.

## Features

- **Node Management**: Each node is represented by the `LinkedNode` class.
- **Linked List Operations**: The `LinkedList` class provides methods to manage the list, including adding and removing nodes, and retrieving the head and size of the list.

## Usage

### Creating a Linked List

```typescript
// initialize with a type defining the data contents of the list
const linkedList = new LinkedList<number>();
```

### Adding Nodes

```typescript
linkedList.add(1);
linkedList.add(2);
```

### Retrieving the Head

```typescript
const head = linkedList.head; // 1
```

### Retrieving the Size

```typescript
const size = linkedList.size; // 2
```

## API

### `LinkedList<T>`

#### Properties

- `head: T | null`: Returns the first element in the linked list.
- `size: number`: Returns the number of elements in the linked list.
- `tail: T | null`: Returns the last element in the linked list.

#### Methods

- `addToHead(value: T): void`: Adds a node to the beginning of the linked list.
- `addToTail(value: T): void`: Adds a node to the end of the linked list.
- `deleteNode(data: T): void`: Deletes a node from the linked list.


## Example

```typescript
const linkedList = new LinkedList<number>();

linkedList.add(1);
linkedList.add(2);

console.log(linkedList.head); // Output: 1
console.log(linkedList.size); // Output: 2

linkedList.remove(1);
console.log(linkedList.head); // Output: 2
console.log(linkedList.size); // Output: 1
```

## Notes

- This implementation is for educational purposes and may not be suitable for production use.
