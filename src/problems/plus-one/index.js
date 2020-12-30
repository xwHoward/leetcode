/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const res = [...digits];
  let index = res.length - 1;
  res[index]++;
  while (res[index] === 10) {
    res[index] = 0;
    index--;
    if (index === -1) {
      res.unshift(1);
      break;
    } else {
      res[index]++;
    }
  }
  return res;
};

module.exports = plusOne;
