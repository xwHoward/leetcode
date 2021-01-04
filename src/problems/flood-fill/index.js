function floodFill(image, sr, sc, newColor) {
  var originColor = image[sr][sc];
  if (originColor === newColor) {
    return image;
  }
  var queue = [[sr, sc]];
  while (queue.length > 0) {
    var _a = queue.shift(),
      ri = _a[0],
      ci = _a[1];
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

module.exports = floodFill;
