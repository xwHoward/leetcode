function match(stack) {
  var temp = stack.pop();
  var tempStr = "";
  while (typeof temp !== "number") {
    if (temp !== "[") {
      tempStr = temp + tempStr;
    }
    temp = stack.pop();
  }
  return { temp: temp, tempStr: tempStr };
}
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var sArray = s.split("");
  var stack = [];
  var count = "";
  var string = "";
  while (sArray.length) {
    var el = sArray.shift();
    if (el === "[") {
      if (string) {
        stack.push(string);
        string = "";
      }
      if (count) {
        stack.push(parseInt(count, 10));
        count = "";
      }
      stack.push(el);
    } else if (el === "]") {
      if (string) {
        stack.push(string);
        string = "";
      }
      if (count) {
        stack.push(parseInt(count, 10));
        count = "";
      }
      // 出栈元素，直到遇到数字
      var _a = match(stack),
        n = _a.temp,
        tempStr = _a.tempStr;
      stack.push(tempStr.repeat(n));
    } else if (/\d/.test(el)) {
      if (string) {
        stack.push(string);
        string = "";
      }
      count += el;
    } else {
      if (count) {
        stack.push(parseInt(count, 10));
        count = "";
      }
      string += el;
    }
  }
  return stack.join("") + string;
};

module.exports = decodeString;
