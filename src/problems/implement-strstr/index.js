/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 双指针
  if (needle === "") {
    return 0;
  }
  let i = 0,
    j = 0;
  while (i < haystack.length + 1) {
    if (haystack.charAt(i + j) === needle.charAt(j)) {
      j++;
      if (j === needle.length) {
        return i;
      }
    } else {
      j = 0;
      i++;
    }
  }

  return -1;
};

module.exports = strStr;
