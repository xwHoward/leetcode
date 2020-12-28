function canVisitAllRooms(rooms: number[][]): boolean {
  const res = rooms.map((r) => false);
  const stack: number[] = [];
  const visited = new Set<number>();
  stack.push(0);
  while (stack.length > 0) {
    for (let i = 0, length = stack.length; i < length; i++) {
      const roomIndex = stack.pop() as number;
      visited.add(roomIndex);
      res[roomIndex] = true;
      for (const key of rooms[roomIndex]) {
        if (!visited.has(key)) {
          stack.push(key);
        }
      }
    }
  }
  return res.every((r) => r === true);
}

console.log(canVisitAllRooms([[1], [2], [3], []]));
