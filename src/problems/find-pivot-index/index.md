---
{
  "name": "寻找数组的中心索引",
  "useCases":
    [
      { "input": [[1, 7, 3, 6, 5, 6]], "output": 3 },
      { "input": [[1, 2, 3]], "output": -1 },
    ],
  "validator": "equal",
}
---

# content

给定一个整数类型的数组  nums，请编写一个能够返回数组 “中心索引” 的方法。

我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

说明：

nums 的长度范围为 [0, 10000]。
任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。
