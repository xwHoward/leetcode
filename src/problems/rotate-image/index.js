/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  // x轴翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = temp;
    }
  }
  // 主对角线翻转
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

module.exports = rotate;
