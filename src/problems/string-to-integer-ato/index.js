/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  //   s = s.replace(/^\s*/, "");
  //   if (s === "") {
  //     // 字符串为空或字符串仅包含空白字符
  //     return 0;
  //   }
  //   const reg = /^(\+[0-9]|-[0-9]|[0-9])[0-9]*/;
  //   const num = reg.exec(s);
  //   if (num) {
  //     const res = parseInt(num[0]);
  //     if (res > Math.pow(2, 31) - 1) {
  //       return Math.pow(2, 31) - 1;
  //     } else if (res < -Math.pow(2, 31)) {
  //       return -Math.pow(2, 31);
  //     }
  //     return res;
  //   }
  //   return 0;

  // 自动机解法
  const auto = new Automaton();
  for (let i = 0; i < s.length; i++) {
    auto.get(s.charAt(i));
  }
  return auto.negative ? -auto.ans : auto.ans;
};

const MAX_INTEGER = Math.pow(2, 31);
class Automaton {
  constructor() {
    this.negative = false;
    this.ans = 0;
    this.table = new Map();
    this.state = "start";
    this.table.set("start", ["start", "signed", "number", "end"]);
    this.table.set("signed", ["end", "end", "number", "end"]);
    this.table.set("number", ["end", "end", "number", "end"]);
    this.table.set("end", ["end", "end", "end", "end"]);
  }

  get(c) {
    this.state = this.table.get(this.state)[this.getColIndex(c)];
    if (this.state === "signed") {
      this.negative = c === "-";
    } else if (this.state === "number") {
      this.ans = this.ans * 10 + (c - 0);
      this.ans = this.negative
        ? Math.min(this.ans, MAX_INTEGER)
        : Math.min(this.ans, MAX_INTEGER - 1);
    }
  }

  getColIndex(c) {
    if (c === " ") {
      return 0;
    }
    if (c === "+" || c === "-") {
      return 1;
    }
    if (/\d/.test(c)) {
      return 2;
    }
    return 3;
  }
}

module.exports = myAtoi;
