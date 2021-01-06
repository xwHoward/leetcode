/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 堆栈
  //   if (head === null) {
  //     return head;
  //   }
  //   let p = head;
  //   const stack = [];
  //   while (p) {
  //     stack.push(p);
  //     p = p.next;
  //   }
  //   let curr = stack.pop();
  //   const newHead = curr;
  //   while (stack.length) {
  //     const next = stack.pop();
  //     curr.next = next;
  //     curr = next;
  //   }
  //   curr.next = null;
  //   return newHead;

  // 递归
  if (head.next === null) {
    //   结束递归，返回新链表末尾元素
    return head;
  }
  const next = head.next;
  const tail = reverseList(next);
  tail.next = head;
  return head;
};

module.exports = reverseList;
