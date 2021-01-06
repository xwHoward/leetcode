/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // 递归
  if (n === 1) {
    return "1";
  }
  return desc(countAndSay(n - 1));
};

function desc(s) {
  // 双指针
  let res = "";
  let i = 0;
  while (i < s.length) {
    let j = 1;
    let group = s.charAt(i);
    while (s.charAt(i) === s.charAt(i + j)) {
      group += s.charAt(i + j);
      j++;
    }
    res += `${group.length}${group.charAt(0)}`;
    i += j;
  }
  return res;
}
module.exports = countAndSay;
