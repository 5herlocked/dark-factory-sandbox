const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

assert.equal(m.clamp(15, 0, 10), 10);
assert.equal(m.clamp(-3, 0, 10), 0);
assert.equal(m.clamp(5, 0, 10), 5);

assert.equal(m.average([2, 4, 6]), 4);
assert.equal(m.average([1, 2, 3, 4, 5]), 3);
assert.equal(m.average([10]), 10);
assert.throws(() => m.average([]), RangeError);

console.log("ok");
