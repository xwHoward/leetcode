function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const originColor = image[sr][sc];
  if (originColor === newColor) {
    return image;
  }
  const queue = [[sr, sc]];
  while (queue.length > 0) {
    const [ri, ci] = queue.shift() as number[];
    if (image[ri][ci] === originColor) {
      image[ri][ci] = newColor;
      // 上
      if (ri > 0 && image[ri - 1][ci] === originColor) {
        queue.push([ri - 1, ci]);
      }
      // 下
      if (ri < image.length - 1 && image[ri + 1][ci] === originColor) {
        queue.push([ri + 1, ci]);
      }
      // 左
      if (ci - 1 >= 0 && image[ri][ci - 1] === originColor) {
        queue.push([ri, ci - 1]);
      }
      // 右
      if (ci + 1 < image[ri].length && image[ri][ci + 1] === originColor) {
        queue.push([ri, ci + 1]);
      }
    }
  }
  return image;
}
