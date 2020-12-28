function findTargetSumWays(nums: number[], S: number): number {
  let res = 0;
  const DFS = (acc: number, rest: number[]) => {
    if (rest.length > 0) {
      const num = rest[0];
      const _num = -num;
      const next = rest.slice(1);
      DFS(acc + num, next);
      DFS(acc + _num, next);
    } else {
      if (acc === S) {
        res++;
      }
    }
  };

  DFS(0, nums);
  return res;
}

module.exports = findTargetSumWays;
