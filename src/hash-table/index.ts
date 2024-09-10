class HashTable<K, V> {
  private size: number
  private table: Array<V | undefined>

  get tableSize(): number {
    return this.size
  }

  constructor(size: number) {
    this.size = size
    this.table = new Array(size)
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
    this.table[index] = value
  }

  lookup(key: K) {
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key: K) {
    const index = this.hash(key)
    this.table[index] = undefined
  }
}

export default HashTable
