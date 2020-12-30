/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //   暴力解法
  // 行
  // let hash;
  // for (let i = 0; i < 9; i++) {
  //   hash = {};
  //   for (let j = 0; j < 9; j++) {
  //     const num = board[i][j];
  //     if (num === ".") continue;
  //     if (hash[num]) {
  //       return false;
  //     }
  //     hash[num] = true;
  //   }
  // }
  // // 列
  // for (let i = 0; i < 9; i++) {
  //   hash = {};
  //   for (let j = 0; j < 9; j++) {
  //     const num = board[j][i];
  //     if (num === ".") continue;
  //     if (hash[num]) {
  //       return false;
  //     }
  //     hash[num] = true;
  //   }
  // }
  // // 3x3宫
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     hash = {};
  //     for (let k = i * 3; k < i * 3 + 3; k++) {
  //       for (let v = j * 3; v < j * 3 + 3; v++) {
  //         const num = board[k][v];
  //         if (num === ".") continue;
  //         if (hash[num]) {
  //           return false;
  //         }
  //         hash[num] = true;
  //       }
  //     }
  //   }
  // }
  // return true;

  // 一次迭代
  const rows = [],
    columns = [];
  subBoards = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === ".") {
        continue;
      }
      // 行
      if (rows[i]) {
        if (rows[i][num] === true) {
          return false;
        } else {
          rows[i][num] = true;
        }
      } else {
        rows[i] = { [num]: true };
      }
      // 列
      if (columns[j]) {
        if (columns[j][num] === true) {
          return false;
        } else {
          columns[j][num] = true;
        }
      } else {
        columns[j] = { [num]: true };
      }
      // 宫
      if (subBoards[Math.floor(i / 3) * 3 + Math.floor(j / 3)]) {
        if (
          subBoards[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] === true
        ) {
          return false;
        } else {
          subBoards[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true;
        }
      } else {
        subBoards[Math.floor(i / 3) * 3 + Math.floor(j / 3)] = { [num]: true };
      }
    }
  }
  return true;
};

module.exports = isValidSudoku;
