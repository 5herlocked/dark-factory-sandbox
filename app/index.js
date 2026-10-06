// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function gcd(a, b) {
  if (a < 0 || b < 0) {
    throw new RangeError("gcd requires non-negative integers");
  }
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

module.exports = { add, gcd };
