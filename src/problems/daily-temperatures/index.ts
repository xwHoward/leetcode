function dailyTemperatures(T: number[]): number[] {
  const stack: number[] = [];
  const res: number[] = [];
  for (let i = 0; i < T.length; i++) {
    if (stack.length === 0) {
      stack.push(i);
      continue;
    }
    const v = T[i];
    while (T[stack[stack.length - 1]] < v) {
      const idx = stack.pop() as number;
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  while (stack.length) {
    res[stack.pop() as number] = 0;
  }
  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
