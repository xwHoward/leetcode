---
{ "name": "最小栈", "useCases":
    # {
    #   "input":
    #     [
    #       [
    #         "MinStack",
    #         "push",
    #         "push",
    #         "push",
    #         "getMin",
    #         "pop",
    #         "top",
    #         "getMin",
    #       ],
    #       [[], [-2], [0], [-3], [], [], [], []],
    #     ],
    #   "output": [null, null, null, null, -3, null, 0, -2],
    # },
    [], "validator": "equalArray" }
---

# content

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
提示：

pop、top 和 getMin 操作总是在 非空栈 上调用。
