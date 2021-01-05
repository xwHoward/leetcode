/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .split("")
    .filter((char) => /[a-z0-9A-Z]/.test(char))
    .map((char) => char.toLowerCase());
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
