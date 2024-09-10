import { describe, expect, test } from 'bun:test'
import HashTable from '.'

describe('HashTable', () => {
  test('should create a hash table with a specified size and entry type', () => {
    const hashTable = new HashTable<string, string>(10)
    expect(hashTable.tableSize).toBe(10)
  })

  test('should insert a key-value pair into the hash table', () => {
    const hashTable = new HashTable<string, string>(10)
    hashTable.insert('Roger Rabbit', 'framed by Judge Doom')
    expect(hashTable.lookup('Roger Rabbit')).toBe('framed by Judge Doom')
  })

  test('should remove a key-value pair from the hash table', () => {
    const hashTable = new HashTable<string, string>(10)
    hashTable.insert('Roger Rabbit', 'framed by Judge Doom')
    hashTable.remove('Roger Rabbit')
    expect(hashTable.lookup('Roger Rabbit')).toBeUndefined()
  })

  test('should handle hash collisions', () => {
    const hashTable = new HashTable<string, string>(10)
    hashTable.insert('Roger Rabbit', 'framed by Judge Doom')
    hashTable.insert('Jessica Rabbit', 'married to Roger Rabbit')
    expect(hashTable.lookup('Roger Rabbit')).toBe('framed by Judge Doom')
    expect(hashTable.lookup('Jessica Rabbit')).toBe('married to Roger Rabbit')
  })
})
