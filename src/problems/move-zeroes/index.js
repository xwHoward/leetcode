/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  let i = 0;
  while (i < nums.length - count) {
    const num = nums[i];
    if (num === 0) {
      count++;
      nums.push(nums.splice(i, 1)[0]);
    } else {
      i++;
    }
  }
};

module.exports = moveZeroes;
