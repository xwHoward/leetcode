---
{
  "name": "有效的括号",
  "useCases":
    [
      { "input": ["()"], "output": true },
      { "input": ["()[]{}"], "output": true },
      { "input": ["(]"], "output": false },
      { "input": ["([)]"], "output": false },
      { "input": ["{[]}"], "output": true },
    ],
  "validator": "equal",
}
---

# content

给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
