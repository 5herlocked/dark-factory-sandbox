const assert = require("node:assert/strict");
const m = require("../app/index.js");

// Test add
assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

// Test fibonacci
assert.equal(m.fibonacci(0), 0);
assert.equal(m.fibonacci(1), 1);
assert.equal(m.fibonacci(10), 55);
assert.equal(m.fibonacci(2), 1);
assert.equal(m.fibonacci(5), 5);
assert.throws(() => m.fibonacci(-1), RangeError);
assert.throws(() => m.fibonacci(-5), RangeError);

// Test factorial
assert.equal(m.factorial(0), 1);
assert.equal(m.factorial(5), 120);
assert.equal(m.factorial(1), 1);
assert.equal(m.factorial(3), 6);
assert.equal(m.factorial(4), 24);
assert.throws(() => m.factorial(-1), RangeError);
assert.throws(() => m.factorial(-10), RangeError);

console.log("ok");
