function setZeroes(matrix) {
  var zeros = [];
  for (var ri = 0; ri < matrix.length; ri++) {
    var row = matrix[ri];
    for (var ci = 0; ci < row.length; ci++) {
      var el = row[ci];
      if (el === 0) {
        zeros.push([ri, ci]);
      }
    }
  }
  for (var _i = 0, zeros_1 = zeros; _i < zeros_1.length; _i++) {
    var _a = zeros_1[_i],
      ri = _a[0],
      ci = _a[1];
    //   行不变
    for (var i = 0; i < matrix[ri].length; i++) {
      matrix[ri][i] = 0;
    }
    // 列不变
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][ci] = 0;
    }
  }
}

module.exports = setZeroes;
