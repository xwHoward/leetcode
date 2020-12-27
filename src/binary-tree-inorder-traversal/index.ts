//   Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: Array<TreeNode> = [];
  while (root || stack.length > 0) {
    // 只要存在左子树，就一直向下遍历，并压栈
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop() as TreeNode;
    res.push(root!.val);
    root = root!.right;
  }
  return res;
}

const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(inorderTraversal(tree));

module.exports = inorderTraversal;
