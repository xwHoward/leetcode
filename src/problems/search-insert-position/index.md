---
{
  "name": "搜索插入位置",
  "useCases":
    [
      { "input": [[1, 3, 5, 6], 5], "output": 2 },
      { "input": [[1, 3, 5, 6], 2], "output": 1 },
      { "input": [[1, 3, 5, 6], 7], "output": 4 },
      { "input": [[1, 3, 5, 6], 0], "output": 0 },
    ],
  "validator": "equal",
}
---

# content

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。
