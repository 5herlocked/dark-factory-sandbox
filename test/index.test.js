const assert = require("node:assert/strict");
const m = require("../app/index.js");

assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

assert.equal(m.gcd(12, 18), 6);
assert.equal(m.gcd(7, 0), 7);
assert.equal(m.gcd(0, 0), 0);
assert.equal(m.gcd(0, 7), 7);
assert.equal(m.gcd(48, 18), 6);
assert.equal(m.gcd(100, 50), 50);
assert.equal(m.gcd(17, 19), 1);

assert.throws(() => m.gcd(-1, 5), RangeError);
assert.throws(() => m.gcd(5, -1), RangeError);
assert.throws(() => m.gcd(-1, -1), RangeError);

console.log("ok");
