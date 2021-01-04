function rotate(matrix) {
  // LC解答： 先水平中线反转，再主对角线翻转
  var n = matrix.length;
  //   上下翻转
  for (var ri = 0; ri < Math.floor(n / 2); ri++) {
    var tempRow = matrix[ri];
    matrix[ri] = matrix[n - 1 - ri];
    matrix[n - 1 - ri] = tempRow;
  }
  //   主对角线翻转
  for (var ri = 0; ri < n; ri++) {
    for (var ci = 0; ci < ri; ci++) {
      var temp = matrix[ri][ci];
      matrix[ri][ci] = matrix[ci][ri];
      matrix[ci][ri] = temp;
    }
  }
}

module.exports = rotate;
