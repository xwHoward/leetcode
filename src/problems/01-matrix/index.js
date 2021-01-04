function updateMatrix(matrix) {
  var BFS = function (root) {
    var depth = 0;
    var queue = [];
    // const visited = new Set();
    queue.push(root);
    while (queue.length > 0) {
      for (var i = 0, length_1 = queue.length; i < length_1; i++) {
        var _a = queue[0],
          ri = _a[0],
          ci = _a[1];
        if (matrix[ri][ci] === 0) {
          return depth;
        }
        // 上
        if (ri > 0) {
          queue.push([ri - 1, ci]);
        }
        // 下
        if (ri < matrix.length - 1) {
          queue.push([ri + 1, ci]);
        }
        // 左
        if (ci > 0) {
          queue.push([ri, ci - 1]);
        }
        // 右
        if (ci < matrix[ri].length - 1) {
          queue.push([ri, ci + 1]);
        }
        queue.shift();
      }
      depth++;
    }
    return depth;
  };
  var res = [];
  for (var i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    res[i] = res[i] || [];
    for (var j = 0; j < row.length; j++) {
      res[i][j] = BFS([i, j]);
    }
  }
  return res;
}

module.exports = updateMatrix;
