class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const DFS = (n: Node, neighbors: Node[], copied: Map<number, Node>) => {
  //   n:拷贝的父节点，neighbors: 原始子节点
  neighbors.forEach((_) => {
    if (copied.has(_.val)) {
      // 子节点已拷贝
      n.neighbors.push(copied.get(_.val) as Node);
    } else {
      const newNode = new Node(_.val, []);
      copied.set(_.val, newNode);
      DFS(newNode, _.neighbors, copied);
      n.neighbors.push(newNode);
    }
  });
};

function cloneGraph(node: Node | null): Node | null {
  if (node === null) {
    return null;
  }
  const res = new Node(node.val, []);
  const copied = new Map<number, Node>([[res.val, res]]);
  DFS(res, node.neighbors, copied);
  return res;
}

module.exports = cloneGraph;
