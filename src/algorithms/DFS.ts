/*
 * Return true if there is a path from cur to target.
 */
function DFSStack<T extends { neighbors: T[] }>(root: T, target: T): boolean {
  const visited = new Set<T>();
  const s: Array<T> = [];
  s.push(root); // add root to s;
  while (s.length > 0) {
    const cur: T = s[s.length - 1]; // the top element in s;
    if (cur === target) return true;
    for (let next of cur.neighbors) {
      if (!visited.has(next)) {
        s.push(next); // add next to s;
        visited.add(next); // add next to visited;
      }
    }
    s.pop();
  }
  return false;
}

/*
 * Return true if there is a path from cur to target.
 */
function DFSRecursion<T extends { neighbors: T[] }>(
  cur: T,
  target: T,
  visited: Set<T>
): boolean {
  if (cur === target) return true;
  for (let next of cur.neighbors) {
    if (!visited.has(next)) {
      visited.add(next);
      if (DFSRecursion(next, target, visited) == true) return true;
    }
  }
  return false;
}

module.exports = { DFSStack, DFSRecursion };
