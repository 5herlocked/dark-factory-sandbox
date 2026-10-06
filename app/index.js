// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

module.exports = { add, isEven, isOdd };
