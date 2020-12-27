function canVisitAllRooms(rooms) {
    var res = rooms.map(function (r) { return false; });
    var stack = [];
    var visited = new Set();
    stack.push(0);
    while (stack.length > 0) {
        for (var i = 0, length_1 = stack.length; i < length_1; i++) {
            var roomIndex = stack.pop();
            visited.add(roomIndex);
            res[roomIndex] = true;
            for (var _i = 0, _a = rooms[roomIndex]; _i < _a.length; _i++) {
                var key = _a[_i];
                if (!visited.has(key)) {
                    stack.push(key);
                }
            }
        }
    }
    return res.every(function (r) { return r === true; });
}
console.log(canVisitAllRooms([[1], [2], [3], []]));
