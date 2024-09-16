# HashTable

This module provides a simple implementation of a Hash Table in TypeScript. Note that this implementation is for academic purposes and a JavaScript `Map()` object likely suits the same needs. Notably, a Javascript `Set()` also implements a Hash Table under the hood.

## Overview

A Hash Table is a data structure that maps keys to values for highly efficient lookup. This implementation uses separate chaining to handle collisions.

## Features

- Customizable Size: Initialize the hash table with a specific size.
- Hash Function: Uses a custom hash function to convert keys into hash values.
- Separate Chaining: Handles collisions using separate chaining with linked lists.

## Usage

### Creating a Hash Table

```typescript
// defines the key and value types
const hashTable = new HashTable<string, number>(10)
```

### Adding Entries

```typescript
hashTable.set('key1', 100)
hashTable.set('key2', 200)
```

### Retrieving Entries

```typescript
const value = hashTable.get('key1') // 100
```

### Removing Entries

```typescript
hashTable.remove('key1')
```

### Getting the Size

```typescript
const size = hashTable.tableSize // 10
```

## API

```typescript
HashTable<K, V>
```

### Constructor

- `constructor(size: number)`: Creates a new HashTable with the specified size.

### Methods

- `set(key: K, value: V): void`: Adds a key-value pair to the hash table.
- `get(key: K): V | undefined`: Retrieves the value associated with the given key.
- `remove(key: K): void`: Removes the key-value pair associated with the given key.
- `tableSize: number`: Returns the size of the hash table.

## Example

```typescript
const hashTable = new HashTable<string, number>(10)

hashTable.set('apple', 1)
hashTable.set('banana', 2)

console.log(hashTable.get('apple')) // Output: 1
console.log(hashTable.get('banana')) // Output: 2

hashTable.remove('apple')
console.log(hashTable.get('apple')) // Output: undefined
```

## Notes

- This implementation is for educational purposes and may not be suitable for production use.
- For more robust and feature-rich hash table implementations, consider using JavaScript's built-in Map object.

## References

- [MDN Web Docs: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN Web Docs: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
