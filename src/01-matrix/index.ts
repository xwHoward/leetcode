function updateMatrix(matrix: number[][]): number[][] {
  const BFS = (root: number[]) => {
    let depth = 0;
    const queue: number[][] = [];
    queue.push(root);
    while (queue.length > 0) {
      for (let i = 0, length = queue.length; i < length; i++) {
        const [ri, ci] = queue[0];
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
  const res: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    res[i] = res[i] || [];
    for (let j = 0; j < row.length; j++) {
      res[i][j] = BFS([i, j]);
    }
  }
  return res;
}

module.exports = updateMatrix;
