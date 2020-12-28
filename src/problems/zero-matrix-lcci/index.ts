function setZeroes(matrix: number[][]): void {
  const zeros: number[][] = [];
  for (let ri = 0; ri < matrix.length; ri++) {
    const row = matrix[ri];
    for (let ci = 0; ci < row.length; ci++) {
      const el = row[ci];
      if (el === 0) {
        zeros.push([ri, ci]);
      }
    }
  }
  console.log(zeros);

  for (const [ri, ci] of zeros) {
    //   行不变
    for (let i = 0; i < matrix[ri].length; i++) {
      matrix[ri][i] = 0;
    }
    // 列不变
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][ci] = 0;
    }
  }
}
