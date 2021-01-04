---
{
  "name": "合并区间",
  "useCases":
    [
      {
        "input": [[[1, 3], [2, 6], [8, 10], [15, 18]]],
        "output": [[1, 6], [8, 10], [15, 18]],
      },
      { "input": [[[1, 4], [4, 5]]], "output": [[1, 5]] },
    ],
  "validator": "equalArray",
}
---

# content

给出一个区间的集合，请合并所有重叠的区间。
提示：

intervals[i][0] <= intervals[i][1]
