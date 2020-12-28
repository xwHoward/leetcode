function singleNumber(nums) {
  nums.sort((a, b) => a - b);
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 3) {
    return nums[0] === nums[1] ? nums[2] : nums[0];
  }
  for (let i = 1; i < nums.length - 2; i++) {
    if (nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[0] === nums[1] ? nums[nums.length - 1] : nums[0];
}
module.exports = singleNumber;
