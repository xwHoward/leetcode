function numIslands(grid: string[][]): number {
  let res = 0;
  const DFS = ([y, x]: [number, number]) => {
    grid[y][x] = '0';
    // 上
    if (y > 0 && grid[y - 1][x] === '1') {
      DFS([y - 1, x]);
    }
    // 下
    if (y < grid.length - 1 && grid[y + 1][x] === '1') {
      DFS([y + 1, x]);
    }
    // 左
    if (x > 0 && grid[y][x - 1] === '1') {
      DFS([y, x - 1]);
    }
    // 右
    if (x < grid[y].length - 1 && grid[y][x + 1] === '1') {
      DFS([y, x + 1]);
    }
  };

  for (let y = 0; y < grid.length; y++) {
    //   y: 列序号
    const col = grid[y];
    for (let x = 0; x < col.length; x++) {
      // x: 行序号
      const el = col[x];
      if (el === '1') {
        res++;
        DFS([y, x]);
      }
    }
  }
  return res;
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
);

console.log(numIslands([['1'], ['1']]));
