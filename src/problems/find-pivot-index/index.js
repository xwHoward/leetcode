function pivotIndex(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  var sum = nums.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  var left_sum = 0;
  for (var i = 0; i < nums.length; i++) {
    if (left_sum === (sum - nums[i]) / 2) {
      return i;
    }
    left_sum += nums[i];
  }
  return -1;
}

module.exports = pivotIndex;
