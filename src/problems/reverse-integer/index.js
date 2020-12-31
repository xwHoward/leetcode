/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  }
  let stack;
  const res = [];
  x = x.toString();
  if (x.startsWith("-")) {
    stack = x.substr(1).split("");
    stack.push("-");
  } else {
    stack = x.split("");
  }
  while (stack.length) {
    const num = stack.pop();
    if (res.length === 0 && num === "0") {
      continue;
    } else {
      res.push(num);
    }
    if (
      parseInt(res.join("")) > Math.pow(2, 31) - 1 ||
      parseInt(res.join("")) < -Math.pow(2, 31)
    ) {
      return 0;
    }
  }
  return parseInt(res.join(""));
};

module.exports = reverse;
