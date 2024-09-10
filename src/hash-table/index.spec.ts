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

    hashTable.insert('abc', 'framed by Judge Doom')
    hashTable.insert('acb', 'married to Roger Rabbit')
    hashTable.remove('abc')
    expect(hashTable.lookup('abc')).toBeUndefined()
    expect(hashTable.lookup('acb')).toBe('married to Roger Rabbit')
  })

  test('should handle hash collisions', () => {
    const hashTable = new HashTable<string, string>(10)
    hashTable.insert('abc', 'framed by Judge Doom')
    hashTable.insert('acb', 'married to Roger Rabbit')
    expect(hashTable.lookup('abc')).toBe('framed by Judge Doom')
    expect(hashTable.lookup('acb')).toBe('married to Roger Rabbit')
  })

  test('should be capable of handling multiple key/value types', () => {
    const hashTable = new HashTable<number | string, string>(10)
    hashTable.insert(123, 'framed by Judge Doom')
    hashTable.insert('abc', 'married to Roger Rabbit')
    expect(hashTable.lookup(123)).toBe('framed by Judge Doom')
    expect(hashTable.lookup('abc')).toBe('married to Roger Rabbit')

    const hashTable2 = new HashTable<number | string, {name: string, toon: boolean}>(10)
    hashTable2.insert('Roger Rabbit', { name: 'Roger Rabbit', toon: true })
    hashTable2.insert('Jessica Rabbit', { name: 'Jessica Rabbit', toon: true })
    expect(hashTable2.lookup('Roger Rabbit')).toEqual({ name: 'Roger Rabbit', toon: true })
    expect(hashTable2.lookup('Jessica Rabbit')).toEqual({ name: 'Jessica Rabbit', toon: true })
  })
})
