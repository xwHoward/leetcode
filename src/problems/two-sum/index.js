/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (typeof hash[target - num] !== "undefined") {
      return [hash[target - num], i];
    }
    hash[num] = i;
  }
};

module.exports = twoSum;
