const assert = require("node:assert/strict");
const m = require("../app/index.js");

// Tests for add
assert.equal(m.add(2, 3), 5);
assert.equal(m.add(-1, 1), 0);

// Tests for isPrime - basic cases
assert.equal(m.isPrime(2), true);
assert.equal(m.isPrime(3), true);
assert.equal(m.isPrime(5), true);
assert.equal(m.isPrime(7), true);
assert.equal(m.isPrime(11), true);
assert.equal(m.isPrime(13), true);

// Tests for isPrime - non-primes
assert.equal(m.isPrime(0), false);
assert.equal(m.isPrime(1), false);
assert.equal(m.isPrime(4), false);
assert.equal(m.isPrime(6), false);
assert.equal(m.isPrime(8), false);
assert.equal(m.isPrime(9), false);
assert.equal(m.isPrime(10), false);
assert.equal(m.isPrime(12), false);

// Tests for isPrime - negative numbers
assert.equal(m.isPrime(-1), false);
assert.equal(m.isPrime(-2), false);
assert.equal(m.isPrime(-5), false);

// Tests for isPrime - larger primes
assert.equal(m.isPrime(17), true);
assert.equal(m.isPrime(97), true);

// Tests for isPrime - larger non-primes
assert.equal(m.isPrime(100), false);

// Tests for clamp - basic cases
assert.equal(m.clamp(5, 0, 10), 5);
assert.equal(m.clamp(-5, 0, 10), 0);
assert.equal(m.clamp(15, 0, 10), 10);

// Tests for clamp - edge cases
assert.equal(m.clamp(0, 0, 10), 0);
assert.equal(m.clamp(10, 0, 10), 10);
assert.equal(m.clamp(5, 5, 5), 5);

// Tests for clamp - negative ranges
assert.equal(m.clamp(-5, -10, 0), -5);
assert.equal(m.clamp(-15, -10, 0), -10);
assert.equal(m.clamp(5, -10, 0), 0);

// Tests for clamp - RangeError when lo > hi
assert.throws(() => m.clamp(5, 10, 0), RangeError);
assert.throws(() => m.clamp(0, 5, 3), RangeError);

console.log("ok");
