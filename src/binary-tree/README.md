# BinaryTree Module

This module provides a simple implementation of a Binary Tree in TypeScript. It includes a Node class to represent each node in the tree and a BinaryTree class to manage the tree.

## Overview

A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. This implementation supports basic operations such as inserting values, finding the minimum value, and clearing the tree.

## Usage

### Creating a Binary Tree

```typescript
const tree: BinaryTree<Number> = new BinaryTree<Number>()
```

### Inserting Values

```typescript
tree.insert(10)
tree.insert(5)
tree.insert(15)
```

### Removing Values

```typescript
tree.remove(5)
```

### Finding the Minimum Value

```typescript
const minNode = tree.root?.findMin()
```

### Clearing the Tree

```typescript
tree.clear()
```

## API

### Constructor

- `constructor(value: Number)`: Creates a new node with the specified value.

### Properties

- `root: Node<Number>`: The root node of the Binary Tree

### Methods

- `clear(): void`: Clear the entire tree
- `insert(value: Number): void`: Insert a value into the tree
- `find(value: Number): Node<Number> | null`: Find a value in the tree
- `remove(value: Number): void`: Remove a value from the tree

## Example

```typescript
const tree: BinaryTree<Number> = new BinaryTree<Number>()

tree.insert(10)
tree.insert(5)
tree.insert(15)

console.log(`The lowest value in the tree is: ${tree.root?.findMin()?.value}`)
```

## Notes

- This implementation is for educational purposes and may not be suitable for production use.
