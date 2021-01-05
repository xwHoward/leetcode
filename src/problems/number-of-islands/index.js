function numIslands(grid) {
  var res = 0;
  var DFS = function (_a) {
    var y = _a[0],
      x = _a[1];
    grid[y][x] = "0";
    // 上
    if (y > 0 && grid[y - 1][x] === "1") {
      DFS([y - 1, x]);
    }
    // 下
    if (y < grid.length - 1 && grid[y + 1][x] === "1") {
      DFS([y + 1, x]);
    }
    // 左
    if (x > 0 && grid[y][x - 1] === "1") {
      DFS([y, x - 1]);
    }
    // 右
    if (x < grid[y].length - 1 && grid[y][x + 1] === "1") {
      DFS([y, x + 1]);
    }
  };
  for (var y = 0; y < grid.length; y++) {
    //   y: 列序号
    var col = grid[y];
    for (var x = 0; x < col.length; x++) {
      // x: 行序号
      var el = col[x];
      if (el === "1") {
        console.log("loop", x, y, el);
        res++;
        DFS([y, x]);
      }
    }
  }
  return res;
}
module.exports = numIslands;
