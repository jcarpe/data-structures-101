import { describe, it, expect } from 'bun:test'
import { AdjacencyListGraph } from './index'

describe('AdjacencyListGraph', () => {
  it('should initialize an empty graph', () => {
    const graph = new AdjacencyListGraph()
    expect(graph.getVertices()).toEqual([])
    expect(graph.getEdges()).toEqual([])
  })

  it('should add vertices to the graph', () => {
    const graph = new AdjacencyListGraph()
    graph.addVertex('A')
    graph.addVertex('B')
    expect(graph.getVertices()).toEqual(['A', 'B'])
  })

  it('should add edges to the graph', () => {
    const graph = new AdjacencyListGraph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addEdge('A', 'B')
    expect(graph.getEdges()).toEqual([['A', 'B']])
  })

  it('should not add duplicate vertices', () => {
    const graph = new AdjacencyListGraph()
    graph.addVertex('A')
    graph.addVertex('A')
    expect(graph.getVertices()).toEqual(['A'])
  })

  it('should handle edges for non-existent vertices gracefully', () => {
    const graph = new AdjacencyListGraph()
    expect(() => graph.addEdge('A', 'B')).toThrowError(
      'One or both vertices do not exist'
    )
  })

  it('should retrieve neighbors of a vertex', () => {
    const graph = new AdjacencyListGraph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    expect(graph.getNeighbors('A')).toEqual(['B', 'C'])
  })

  it('should throw an error when retrieving neighbors of a non-existent vertex', () => {
    const graph = new AdjacencyListGraph()
    expect(() => graph.getNeighbors('A')).toThrowError('Vertex does not exist')
  })

  it('should perform a breadth-first search from a given node (vertex)', () => {
    const graph = new AdjacencyListGraph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('C', 'D')
    expect(graph.breadthSearch('A')).toEqual(['A', 'B', 'C', 'D'])
    expect(graph.breadthSearch('C')).toEqual(['C', 'A', 'D', 'B'])

    expect(() => graph.breadthSearch('E')).toThrowError(
      'Start vertex does not exist'
    )
  })

  it('should perform a depth-first search from a given node (vertex)', () => {
    const graph = new AdjacencyListGraph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('C', 'D')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    expect(graph.depthSearch('A')).toEqual(['A', 'B', 'C', 'D'])
    expect(graph.depthSearch('C')).toEqual(['C', 'D', 'A', 'B'])

    expect(() => graph.breadthSearch('E')).toThrowError(
      'Start vertex does not exist'
    )
  })
})
