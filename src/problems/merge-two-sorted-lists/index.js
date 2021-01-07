/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const dummyNode = new ListNode(-1, null);
  let p0 = dummyNode,
    p1 = l1,
    p2 = l2;
  while (p1) {
    if (p2 === null) {
      p0.next = p1;
      break;
    }
    if (p1.val <= p2.val) {
      p0.next = p1;
      p1 = p1.next;
    } else {
      p0.next = p2;
      p2 = p2.next;
    }
    p0 = p0.next;
  }
  if (p2) {
    p0.next = p2;
  }
  return dummyNode.next;
};

module.exports = mergeTwoLists;
