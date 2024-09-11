type HashTableEntry<K, V> = {
  key: K
  value: V
}

/**
 * HashTable --
 * Note that this is for academic purposes and a Javascript Map() likely suits the same needs.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */
class HashTable<K, V> {
  private size: number
  private table: Array<Array<HashTableEntry<K, V>>>

  /**
   * Get the size of the hash table
   * @returns {number} The size of the hash table
   */
  get tableSize(): number {
    return this.size
  }

  /**
   * Create a new HashTable
   * @param size The size of the hash table
   */
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
      // bit shift 5 positions to the left and subtract the hash value
      // to help in spreading out the bits of the hash value, making
      // the hash more uniformly distributed & decrease likelihood of
      // collisions
      hash = (hash << 5) - hash + keyString.charCodeAt(i)

      // Convert to 32bit integer
      hash |= 0
    }

    return Math.abs(hash) % this.size
  }

  /**
   * Insert a new key-value pair into the hash table
   * @param key The key of the entry
   * @param value The value of the entry
   */
  public insert(key: K, value: V) {
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

  /**
   * Look up a value in the hash table
   * @param key The key to look up
   * @returns {any | undefined} The value of the key, or undefined if the key is not found
   */
  public lookup(key: K) {
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

  /**
   * Remove a key-value pair from the hash table
   * @param key The key to remove
   */
  public remove(key: K) {
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
