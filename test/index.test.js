const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

// isEven tests
assert.equal(m.isEven(4), true);
assert.equal(m.isEven(7), false);
assert.equal(m.isEven(0), true);
assert.equal(m.isEven(-2), true);
assert.equal(m.isEven(-1), false);

// isOdd tests
assert.equal(m.isOdd(-3), true);
assert.equal(m.isOdd(3), true);
assert.equal(m.isOdd(4), false);
assert.equal(m.isOdd(0), false);
assert.equal(m.isOdd(-2), false);

// TypeError tests for non-integers
assert.throws(() => m.isEven(3.5), TypeError);
assert.throws(() => m.isEven("4"), TypeError);
assert.throws(() => m.isEven(null), TypeError);
assert.throws(() => m.isOdd(2.5), TypeError);
assert.throws(() => m.isOdd("3"), TypeError);
assert.throws(() => m.isOdd(undefined), TypeError);

console.log("ok");
