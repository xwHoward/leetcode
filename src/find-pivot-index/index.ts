function pivotIndex(nums: number[]): number {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let left_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left_sum === (sum - nums[i]) / 2) {
      return i;
    }
    left_sum += nums[i];
  }
  return -1;
}
