// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

/**
 * A* pathfinding algorithm implementation
 * @param {Object} graph - Graph represented as adjacency list {node: [{node, cost}, ...]}
 * @param {string} start - Start node
 * @param {string} goal - Goal node
 * @param {Function} heuristic - Heuristic function h(node, goal) estimating cost to goal
 * @returns {Array|null} - Path from start to goal, or null if no path exists
 */
function astar(graph, start, goal, heuristic) {
  if (!graph[start] || !graph[goal]) {
    return null;
  }

  const openSet = new Set([start]);
  const cameFrom = new Map();
  const gScore = new Map();
  const fScore = new Map();

  gScore.set(start, 0);
  fScore.set(start, heuristic(start, goal));

  while (openSet.size > 0) {
    // Find node in openSet with lowest fScore
    let current = null;
    let lowestF = Infinity;
    for (const node of openSet) {
      const f = fScore.get(node) ?? Infinity;
      if (f < lowestF) {
        lowestF = f;
        current = node;
      }
    }

    if (current === goal) {
      // Reconstruct path
      const path = [current];
      while (cameFrom.has(current)) {
        current = cameFrom.get(current);
        path.unshift(current);
      }
      return path;
    }

    openSet.delete(current);
    const currentG = gScore.get(current);

    const neighbors = graph[current] || [];
    for (const neighbor of neighbors) {
      const neighborNode = neighbor.node;
      const edgeCost = neighbor.cost;
      const tentativeG = currentG + edgeCost;

      if (tentativeG < (gScore.get(neighborNode) ?? Infinity)) {
        cameFrom.set(neighborNode, current);
        gScore.set(neighborNode, tentativeG);
        fScore.set(neighborNode, tentativeG + heuristic(neighborNode, goal));
        openSet.add(neighborNode);
      }
    }
  }

  return null;
}

module.exports = { add, astar };
