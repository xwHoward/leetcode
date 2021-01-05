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
  let i = 0;
  console.log("s", s);
  const groups = [];
  while (i < s.length) {
    let j = 1;
    let group = s.charAt(i);
    while (s.charAt(i) === s.charAt(i + j)) {
      group += s.charAt(i + j);
      j++;
    }
    groups.push(group);
    i += j;
  }
  console.log("groups", groups);
  return groups.map((g) => `${g.length}${g.charAt(0)}`).join("");
}
module.exports = countAndSay;
