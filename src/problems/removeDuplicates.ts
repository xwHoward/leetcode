// remove-duplicates-from-sorted-array

export function removeDuplicates(nums: number[]): number {
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    const next = nums[i];
    // 在长度为res的子数组中查找next
    for (let j = 0; j < res; j++) {
      // 如果查找到，跳过next
      if (nums[j] === next) {
        break;
      }
      if (j === res - 1) {
        // 否则更新长度为res+1的数组
        nums[res] = next;
        res++;
      }
    }
  }
  return res;
}
