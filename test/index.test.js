const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

assert.equal(m.sum([1, 2, 3]), 6);
assert.equal(m.sum([-1, 1]), 0);
assert.equal(m.sum([]), 0);

assert.equal(m.average([2, 4, 6]), 4);
assert.equal(m.average([1, 2, 3, 4]), 2.5);
assert.equal(m.average([]), 0);

console.log("ok");
