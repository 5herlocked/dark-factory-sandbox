const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);
console.log("ok");
