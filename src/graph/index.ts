export class AdjacencyListGraph {
  private adjacencyList: Map<string, string[]>

  constructor() {
    this.adjacencyList = new Map()
  }

  // Add a vertex to the graph
  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      throw new Error('One or both vertices do not exist')
    }
    this.adjacencyList.get(vertex1)!.push(vertex2)
    this.adjacencyList.get(vertex2)!.push(vertex1) // Assuming an undirected graph
  }

  // Get all vertices in the graph
  getVertices(): string[] {
    return Array.from(this.adjacencyList.keys())
  }

  // Get all edges in the graph
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

  // Get neighbors of a specific vertex
  getNeighbors(vertex: string): string[] {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Vertex does not exist')
    }
    return this.adjacencyList.get(vertex)!
  }
}
