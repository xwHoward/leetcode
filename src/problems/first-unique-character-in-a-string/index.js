/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s === "") {
    return -1;
  }
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (typeof hash[s.charAt(i)] === "undefined") {
      hash[s.charAt(i)] = [i];
    } else {
      hash[s.charAt(i)].push(i);
    }
  }
  let min = s.length;
  for (const key in hash) {
    if (Object.hasOwnProperty.call(hash, key)) {
      const pos = hash[key];
      if (pos.length === 1 && min > pos[0]) {
        min = pos[0];
      }
    }
  }
  return min === s.length ? -1 : min;
};
module.exports = firstUniqChar;
