// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function clamp(x, lo, hi) {
  if (lo > hi) {
    throw new RangeError('lo must be less than or equal to hi');
  }
  if (x < lo) {
    return lo;
  }
  if (x > hi) {
    return hi;
  }
  return x;
}

module.exports = { add, isPrime, clamp };
