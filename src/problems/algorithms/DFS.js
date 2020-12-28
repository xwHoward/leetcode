function DFS(root, target) {
    var step = 0;
    var stack = [];
    stack.push(root);
    while (stack.length) {
        step++;
        var curr = stack.shift();
        if (curr === target) {
            return step;
        }
        for (var _i = 0, _a = curr.children; _i < _a.length; _i++) {
            var child = _a[_i];
            stack.push(child);
        }
    }
    return -1;
}
module.exports = DFS;
