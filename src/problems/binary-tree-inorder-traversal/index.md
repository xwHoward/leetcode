---
{
  "name": "二叉树的中序遍历",
  #   { "input": [[1, null, 2, 3]], "output": [1, 3, 2] },
  #   { "input": [[]], "output": [] },
  #   { "input": [[1]], "output": [1] },
  #   { "input": [[1, 2]], "output": [1, 2] },
  "useCases": [],
  "validator": "equalArray",
}
---

# content

给定一个二叉树的根节点 root ，返回它的 中序 遍历。
提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100

进阶: 递归算法很简单，你可以通过迭代算法完成吗？
