const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

assert.equal(m.subtract(5, 3), 2);
assert.equal(m.subtract(3, 5), -2);
assert.equal(m.subtract(0, 0), 0);

assert.equal(m.multiply(2, 3), 6);
assert.equal(m.multiply(-2, 3), -6);
assert.equal(m.multiply(0, 5), 0);
assert.equal(m.multiply(-2, -3), 6);

console.log("ok");
