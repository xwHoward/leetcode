function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  for (const intv of intervals) {
    if (res.length === 0) {
      res.push(intv);
    } else {
      const top = res[res.length - 1];
      if (intv[0] > top[1]) {
        res.push(intv);
      } else {
        top[1] = top[1] < intv[1] ? intv[1] : top[1];
      }
    }
  }
  return res;
}
