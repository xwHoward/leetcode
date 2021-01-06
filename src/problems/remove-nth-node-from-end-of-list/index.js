/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 一趟遍历
  // const dummyNode = new ListNode(-1, head);
  // let p = dummyNode;
  // while (p.next !== null) {
  //     let nthNode = p;
  //     for (let i = 0; i < n; i++) {
  //         nthNode = nthNode.next
  //     }
  //     if (nthNode.next === null) {
  //         const toRemove = p.next;
  //         p.next = toRemove.next;
  //         toRemove.next = null;
  //         return dummyNode.next;
  //     }
  //     p = p.next;
  // }

  // 堆栈
  const dummyNode = new ListNode(-1, head);
  let p = dummyNode;
  const stack = [];
  while (p) {
    stack.push(p);
    p = p.next;
  }
  let toRemove;
  for (let i = 0; i < n; i++) {
    toRemove = stack.pop();
  }
  stack.pop().next = toRemove.next;
  toRemove.next = null;
  return dummyNode.next;
};

module.exports = removeNthFromEnd;
