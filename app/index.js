// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}

module.exports = { add, sum, average };
