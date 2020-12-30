/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let short, long;
  if (nums1.length <= nums2.length) {
    short = nums1;
    long = nums2;
  } else {
    short = nums2;
    long = nums1;
  }
  const hash = {};
  for (const num1 of short) {
    if (typeof hash[num1] === "undefined") {
      hash[num1] = 1;
    } else {
      hash[num1]++;
    }
  }
  const res = [];
  for (const num2 of long) {
    if (hash[num2] && hash[num2] > 0) {
      hash[num2]--;
      res.push(parseInt(num2));
    }
  }
  return res;
};

module.exports = intersect;
