"use strict";
function openLock(deadends, target) {
  var tried = new Set();
  var queue = [];
  var depth = 0;
  queue.push("0000");
  var prevMap = {
      0: "9",
      1: "0",
      2: "1",
      3: "2",
      4: "3",
      5: "4",
      6: "5",
      7: "6",
      8: "7",
      9: "8",
    },
    nextMap = {
      0: "1",
      1: "2",
      2: "3",
      3: "4",
      4: "5",
      5: "6",
      6: "7",
      7: "8",
      8: "9",
      9: "0",
    };
  while (queue.length > 0) {
    for (var i = 0, length_1 = queue.length; i < length_1; i++) {
      var code = queue[0];
      if (code === target) {
        return depth;
      }
      if (deadends.indexOf(code) < 0 && !tried.has(code)) {
        // 未锁定，未试
        tried.add(code);
        // 计算当前密码相邻的8种密码
        var bits = code.split("");
        for (var i_1 = 0; i_1 < bits.length; i_1++) {
          var bit = bits[i_1];
          var bits_copy = JSON.parse(JSON.stringify(bits));
          bits_copy[i_1] = prevMap[bit];
          queue.push(bits_copy.join(""));
          bits_copy[i_1] = nextMap[bit];
          queue.push(bits_copy.join(""));
        }
      }
      queue.shift();
    }
    depth++;
  }
  return -1;
}
module.exports = openLock;
