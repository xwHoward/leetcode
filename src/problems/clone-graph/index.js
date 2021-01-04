function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var DFS = function (n, neighbors, copied) {
  //   n:拷贝的父节点，neighbors: 原始子节点
  neighbors.forEach(function (_) {
    if (copied.has(_.val)) {
      // 子节点已拷贝
      n.neighbors.push(copied.get(_.val));
    } else {
      var newNode = new Node(_.val, []);
      copied.set(_.val, newNode);
      DFS(newNode, _.neighbors, copied);
      n.neighbors.push(newNode);
    }
  });
};
function cloneGraph(node) {
  if (node === null) {
    return null;
  }
  var res = new Node(node.val, []);
  var copied = new Map([[res.val, res]]);
  DFS(res, node.neighbors, copied);
  return res;
}
module.exports = cloneGraph;
