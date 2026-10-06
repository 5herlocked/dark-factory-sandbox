const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

assert.equal(m.isEven(4), true);
assert.equal(m.isEven(7), false);
assert.equal(m.isEven(0), true);
assert.equal(m.isEven(-2), true);

assert.equal(m.isOdd(-3), true);
assert.equal(m.isOdd(4), false);
assert.equal(m.isOdd(7), true);
assert.equal(m.isOdd(0), false);

console.log("ok");
