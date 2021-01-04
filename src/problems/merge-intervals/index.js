function merge(intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  var res = [];
  for (var _i = 0, intervals_1 = intervals; _i < intervals_1.length; _i++) {
    var intv = intervals_1[_i];
    if (res.length === 0) {
      res.push(intv);
    } else {
      var top_1 = res[res.length - 1];
      if (intv[0] > top_1[1]) {
        res.push(intv);
      } else {
        top_1[1] = top_1[1] < intv[1] ? intv[1] : top_1[1];
      }
    }
  }
  return res;
}

module.exports = merge;
