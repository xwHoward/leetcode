/**
 * Return the length of the shortest path between root and target node.
 */
function BFS<T extends { neighbors: T[] }>(root: T, target: T) {
  const queue: T[] = []; // store all nodes which are waiting to be processed
  let step = 0; // number of steps neeeded from root to current node
  // initialize
  queue.push(root);
  // BFS
  while (queue.length > 0) {
    step++;
    // iterate the nodes which are already in the queue
    for (let i = 0, length = queue.length; i < length; i++) {
      const cur = queue[0];
      if (cur === target) {
        return step;
      }
      cur.neighbors.forEach((c) => queue.push(c));
      queue.shift();
    }
  }
  return -1; // there is no path from root to target
}

/**
 * Return the length of the shortest path between root and target node.
 */
function BFSWithHash<T extends { neighbors: T[] }>(root: T, target: T): number {
  const queue: T[] = []; // store all nodes which are waiting to be processed
  const used = new Set<T>(); // store all the used nodes
  let step = 0; // number of steps neeeded from root to current node
  // initialize
  queue.push(root); // add root to queue;
  used.add(root); // add root to used;
  // BFS
  while (queue.length > 0) {
    step = step + 1;
    // iterate the nodes which are already in the queue
    for (let i = 0, size = queue.length; i < size; ++i) {
      const cur = queue[0];
      if (cur === target) {
        return step;
      }
      for (let next of cur.neighbors) {
        if (!used.has(next)) {
          queue.push(next);
          used.add(next);
        }
      }
      queue.shift();
    }
  }
  return -1; // there is no path from root to target
}

module.exports = { BFS, BFSWithHash };
