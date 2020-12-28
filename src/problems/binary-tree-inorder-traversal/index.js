//   Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
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
var tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
console.log(inorderTraversal(tree));
module.exports = inorderTraversal;
