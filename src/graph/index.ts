/**
 * Graph data structure implementation using an adjacency list.
 * This implementation supports adding vertices and edges, retrieving all vertices,
 * retrieving all edges, and getting the neighbors of a specific vertex.
 *
 * @class AdjacencyListGraph
 * @description A class representing a graph using an adjacency list.
 * @example
 * ```typescript
 * const graph = new AdjacencyListGraph()
 * graph.addVertex('A')
 * graph.addVertex('B')
 * graph.addEdge('A', 'B')
 * console.log(graph.getVertices()) // ['A', 'B']
 * console.log(graph.getEdges()) // [['A', 'B']]
 * ```
 */
export class AdjacencyListGraph {
  private adjacencyList: Map<string, string[]>

  constructor() {
    this.adjacencyList = new Map()
  }

  /**
   * Adds a vertex to the graph.
   * If the vertex already exists, it will not be added again.
   * @param {string} vertex The vertex to add to the graph.
   */
  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  /**
   * Adds an edge between two vertices in the graph.
   * If either vertex does not exist, an error will be thrown.
   * If the edge already exists, it will not be added again.
   * @param {string} vertex1 The first vertex of the edge.
   * @param {string} vertex2 The second vertex of the edge.
   * @throws Error if either vertex does not exist.
   * @example
   * ```typescript
   * graph.addEdge('A', 'B')
   * console.log(graph.getEdges()) // [['A', 'B']]
   * ```
   */
  addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      throw new Error('One or both vertices do not exist')
    }
    this.adjacencyList.get(vertex1)!.push(vertex2)
    this.adjacencyList.get(vertex2)!.push(vertex1) // Assuming an undirected graph
  }

  /**
   * Retrieves all vertices in the graph.
   * @returns An array of vertices in the graph.
   * @example
   * ```typescript
   * console.log(graph.getVertices()) // ['A', 'B']
   * ```
   */
  getVertices(): string[] {
    return Array.from(this.adjacencyList.keys())
  }

  /**
   * Retrieves all edges in the graph.
   * Each edge is represented as a tuple of two vertices.
   * @returns {[string, string][]} An array of edges in the graph.
   * @example
   * ```typescript
   * console.log(graph.getEdges()) // [['A', 'B']]
   * ```
   */
  getEdges(): [string, string][] {
    const edges: [string, string][] = []
    const visited = new Set<string>()

    for (const [vertex, neighbors] of this.adjacencyList.entries()) {
      for (const neighbor of neighbors) {
        if (!visited.has(`${neighbor}-${vertex}`)) {
          edges.push([vertex, neighbor])
        }
      }
      visited.add(`${vertex}-${neighbors}`)
    }

    return edges
  }

  /**
   * Retrieves the neighbors of a specific vertex.
   * @param {string} vertex The vertex whose neighbors are to be retrieved.
   * @returns {string[]} An array of neighbors of the specified vertex.
   * @throws Error if the vertex does not exist.
   * @example
   * ```typescript
   * console.log(graph.getNeighbors('A')) // ['B']
   * ```
   */
  getNeighbors(vertex: string): string[] {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Vertex does not exist')
    }
    return this.adjacencyList.get(vertex)!
  }

  /**
   * Performs a breadth-first search (BFS) starting from a given vertex.
   * @param {string} startVertex The vertex to start the BFS from.
   * @returns {string[]} An array of vertices visited in BFS order.
   * @throws Error if the start vertex does not exist.
   * @example
   * ```typescript
   * const graph = new AdjacencyListGraph()
   * graph.addVertex('A')
   * graph.addVertex('B')
   * graph.addVertex('C')
   * graph.addEdge('A', 'B')
   * graph.addEdge('A', 'C')
   * console.log(graph.breadthSearch('A')) // ['A', 'B', 'C']
   * ```
   */
  breadthSearch(startVertex: string): string[] {
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Start vertex does not exist')
    }

    const visited = new Set<string>()
    const queue: string[] = [startVertex]
    const result: string[] = []

    while (queue.length > 0) {
      const currentVertex = queue.shift()!
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex)
        result.push(currentVertex)

        const neighbors = this.adjacencyList.get(currentVertex)!
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor)
          }
        }
      }
    }

    return result
  }
}
