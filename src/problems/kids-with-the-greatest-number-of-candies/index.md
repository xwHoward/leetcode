---
{
  "name": "拥有最多糖果的孩子",
  "useCases":
    [
      {
        "input": [[2, 3, 5, 1, 3], 3],
        "output": [true, true, true, false, true],
      },
      {
        "input": [[4, 2, 1, 1, 2], 1],
        "output": [true, false, false, false, false],
      },
      { "input": [[12, 1, 12], 10], "output": [true, false, true] },
    ],
  "validator": "equalArray",
}
---

# content

给你一个数组  candies  和一个整数  extraCandies ，其中  candies[i]  代表第 i 个孩子拥有的糖果数目。

对每一个孩子，检查是否存在一种方案，将额外的  extraCandies  个糖果分配给孩子们之后，此孩子有 最多   的糖果。注意，允许有多个孩子同时拥有 最多   的糖果数目。

提示：

2 <= candies.length <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50
