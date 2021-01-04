/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  s = s.split("");
  const queue = [];
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (typeof hash[s[i] === "undefined"]) {
      queue.push(i);
    } else {
      hash[s[i]] = i;
    }
  }
  return -1;
};
module.exports = firstUniqChar;
