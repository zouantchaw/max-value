const maxValue = (nums) => {
  if (nums.length === 1) return nums[0]
  let max = Number.NEGATIVE_INFINITY;
  nums.forEach((current, index) => {
    if (current > max) max = current
  })
  console.log('max:', max)
  return max
};


maxValue([4, 7, 2, 8, 10, 9]); // -> 10

maxValue([10, 5, 40, 40.3]); // -> 40.3

maxValue([-5, -2, -1, -11]); // -> -1

maxValue([42]); // -> 42

maxValue([1000, 8]); // -> 1000

maxValue([1000, 8, 9000]); // -> 9000

maxValue([2, 5, 1, 1, 4]); // -> 5
