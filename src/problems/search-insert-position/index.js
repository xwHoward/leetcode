function searchInsert(nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

module.exports = searchInsert;
