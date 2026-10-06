// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function fibonacci(n) {
  if (n < 0) {
    throw new RangeError("n must be non-negative");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function factorial(n) {
  if (n < 0) {
    throw new RangeError("n must be non-negative");
  }
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = { add, fibonacci, factorial };
