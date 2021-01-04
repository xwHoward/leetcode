function inorderTraversal(root) {
  var res = [];
  var stack = [];
  while (root || stack.length > 0) {
    // 只要存在左子树，就一直向下遍历，并压栈
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}

module.exports = inorderTraversal;
