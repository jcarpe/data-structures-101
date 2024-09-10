type HashTableEntry<K, V> = {
  key: K
  value: V
}

class HashTable<K, V> {
  private size: number
  private table: Array<Array<HashTableEntry<K, V>>>

  get tableSize(): number {
    return this.size
  }

  constructor(size: number) {
    this.size = size
    this.table = []
  }

  private hash(key: K): number {
    let keyString: string

    if (typeof key === 'string') {
      keyString = key
    } else if (typeof key === 'number') {
      keyString = key.toString()
    } else {
      keyString = JSON.stringify(key)
    }

    let hash = 0
    for (let i = 0; i < keyString.length; i++) {
      hash = (hash << 5) - hash + keyString.charCodeAt(i)
      hash |= 0 // Convert to 32bit integer
    }

    return Math.abs(hash) % this.size
  }

  insert(key: K, value: V) {
    const index = this.hash(key)

    if (!this.table[index]) {
      this.table[index] = []
    }

    for (let entry of this.table[index]) {
      if (entry.key === key) {
        entry.value = value
        return
      }
    }

    this.table[index]!.push({ key, value })
  }

  lookup(key: K) {
    const index = this.hash(key)
    const entries = this.table[index]

    if (entries) {
      for (let entry of entries) {
        if (entry.key === key) {
          return entry.value
        }
      }
    }

    return undefined
  }

  remove(key: K) {
    const index = this.hash(key)
    const entries = this.table[index]

    if (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].key === key) {
          entries.splice(i, 1)
          return
        }
      }
    }
  }
}

export default HashTable
