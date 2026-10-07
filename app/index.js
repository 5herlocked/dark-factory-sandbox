// Tiny calculator module. The Dark Factory agent extends it from GitHub issues.
function add(a, b) {
  return a + b;
}

function clamp(x, lo, hi) {
  if (x < lo) return lo;
  if (x > hi) return hi;
  return x;
}

function average(nums) {
  if (nums.length === 0) {
    throw new RangeError("Cannot calculate average of empty array");
  }
  const sum = nums.reduce((acc, val) => acc + val, 0);
  return sum / nums.length;
}

module.exports = { add, clamp, average };
