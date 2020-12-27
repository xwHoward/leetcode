function rotate(matrix: number[][]): void {
  // LC解答： 先水平中线反转，再主对角线翻转
  const n = matrix.length;
  //   上下翻转
  for (let ri = 0; ri < Math.floor(n / 2); ri++) {
    const tempRow = matrix[ri];
    matrix[ri] = matrix[n - 1 - ri];
    matrix[n - 1 - ri] = tempRow;
  }
  //   主对角线翻转
  for (let ri = 0; ri < n; ri++) {
    for (let ci = 0; ci < ri; ci++) {
      const temp = matrix[ri][ci];
      matrix[ri][ci] = matrix[ci][ri];
      matrix[ci][ri] = temp;
    }
  }
}
