const assert = require("node:assert/strict");
const m = require("../app/index.js");

// Test add function
assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

// Test A* algorithm
// Simple graph: A -> B -> D
//              |    |
//              v    v
//              C -> D
const graph = {
  A: [
    { node: "B", cost: 1 },
    { node: "C", cost: 4 },
  ],
  B: [
    { node: "D", cost: 2 },
    { node: "C", cost: 1 },
  ],
  C: [{ node: "D", cost: 1 }],
  D: [],
};

// Manhattan distance heuristic (always returns 0 for simplicity)
const heuristic = (node, goal) => 0;

// Test 1: Basic path finding
const path1 = m.astar(graph, "A", "D", heuristic);
assert.deepEqual(path1, ["A", "B", "D"]);

// Test 2: Single node path
const path2 = m.astar(graph, "A", "A", heuristic);
assert.deepEqual(path2, ["A"]);

// Test 3: Adjacent nodes
const path3 = m.astar(graph, "A", "B", heuristic);
assert.deepEqual(path3, ["A", "B"]);

// Test 4: Non-existent start node
const path4 = m.astar(graph, "Z", "D", heuristic);
assert.equal(path4, null);

// Test 5: Non-existent goal node
const path5 = m.astar(graph, "A", "Z", heuristic);
assert.equal(path5, null);

// Test 6: No path exists
const disconnectedGraph = {
  A: [{ node: "B", cost: 1 }],
  B: [],
  C: [{ node: "D", cost: 1 }],
  D: [],
};
const path6 = m.astar(disconnectedGraph, "A", "D", heuristic);
assert.equal(path6, null);

// Test 7: With actual heuristic
const graph2 = {
  A: [
    { node: "B", cost: 1 },
    { node: "C", cost: 10 },
  ],
  B: [{ node: "C", cost: 1 }],
  C: [],
};

const distances = {
  A: 2,
  B: 1,
  C: 0,
};

const betterHeuristic = (node, goal) => distances[node] || 0;
const path7 = m.astar(graph2, "A", "C", betterHeuristic);
assert.deepEqual(path7, ["A", "B", "C"]);

console.log("ok");
