---
{
  "name": "反转字符串",
  "useCases":
    [
      {
        "input": [["h", "e", "l", "l", "o"]],
        "output": ["o", "l", "l", "e", "h"],
      },
      {
        "input": [["H", "a", "n", "n", "a", "h"]],
        "output": ["h", "a", "n", "n", "a", "H"],
      },
    ],
  "validator": "equalArray",
}
---

# content

写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

相关标签
双指针
字符串