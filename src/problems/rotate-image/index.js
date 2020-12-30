/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 规律：
  // 1. x,y交换
  // 2. x = l - 1 - x
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] = temp;
    }
  }
  return matrix;
};

module.exports = rotate;
