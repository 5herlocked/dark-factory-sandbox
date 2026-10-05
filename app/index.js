// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function power(base, exponent) {
  return base ** exponent;
}

module.exports = { add, subtract, multiply, power };
