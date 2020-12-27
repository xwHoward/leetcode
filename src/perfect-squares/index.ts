function numSquares(n: number): number {
  let queue = [n];
  let level = 0;
  const squares = [];
  let i = 1;
  while (i * i <= n) {
    squares.push(i * i);
    i++;
  }
  while (queue.length > 0) {
    const nextLevel = new Set<number>();
    level++;
    for (const m of queue) {
      for (let k = squares.length - 1; k >= 0; k--) {
        const squareNum = squares[k];
        if (squareNum === m) {
          return level;
        } else if (squareNum > m) {
          continue;
        } else {
          nextLevel.add(m - squareNum);
        }
      }
    }
    queue = Array.from(nextLevel.values());
  }
  return -1;
}
