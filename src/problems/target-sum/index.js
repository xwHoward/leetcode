function findTargetSumWays(nums, S) {
  var res = 0;
  var DFS = function (acc, rest) {
    if (rest.length > 0) {
      var num = rest[0];
      var _num = -num;
      var next = rest.slice(1);
      DFS(acc + num, next);
      DFS(acc + _num, next);
    } else {
      if (acc === S) {
        res++;
      }
    }
  };
  DFS(0, nums);
  return res;
}
module.exports = findTargetSumWays;
