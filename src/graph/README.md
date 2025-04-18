# AdjacencyListGraph

The `AdjacencyListGraph` class is a TypeScript implementation of a graph data structure using an adjacency list. This implementation supports adding vertices and edges, retrieving all vertices, retrieving all edges, and getting the neighbors of a specific vertex.

## Features

- Add vertices to the graph.
- Add edges between vertices.
- Retrieve all vertices in the graph.
- Retrieve all edges in the graph.
- Get the neighbors of a specific vertex.
- Handles errors for invalid operations, such as adding edges for non-existent vertices or retrieving neighbors of a non-existent vertex.

## Usage

Here is an example of how to use the `AdjacencyListGraph` class:

```typescript
import { AdjacencyListGraph } from './index'

const graph = new AdjacencyListGraph()

// Add vertices
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

// Add edges
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')

// Retrieve vertices
console.log(graph.getVertices()) // Output: ['A', 'B', 'C']

// Retrieve edges
console.log(graph.getEdges()) // Output: [['A', 'B'], ['A', 'C']]

// Get neighbors of a vertex
console.log(graph.getNeighbors('A')) // Output: ['B', 'C']
```

## API Reference

`addVertex(vertex: string): void`

Adds a vertex to the graph. If the vertex already exists, it will not be added again.

- **Parameters:**
  - `vertex`: The name of the vertex to add.

`addEdge(vertex1: string, vertex2: string): void`

Adds an edge between two vertices in the graph. If either vertex does not exist, an error will be thrown.

- **Parameters:**
  - `vertex1`: The first vertex of the edge.
  - `vertex2`: The second vertex of the edge.
- **Throws:**
  - `Error`: If one or both vertices do not exist.

`getVertices(): string[]`

Retrieves all vertices in the graph.

- **Returns:** An array of vertex names.

`getEdges(): [string, string][]`

Retrieves all edges in the graph. Each edge is represented as a tuple of two vertices.

- **\*Returns:** An array of edges.

`getNeighbors(vertex: string): string[]`

Retrieves the neighbors of a specific vertex.

- **Parameters:**
  - `vertex`: The name of the vertex.
- **Returns:** An array of neighbors of the specified vertex.
- **Throws:**
  - `Error`: If the vertex does not exist.
