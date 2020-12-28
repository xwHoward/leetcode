function BFS(root, target) {
    var queue = [];
    var step = 0;
    queue.push(root);
    while (queue.length > 0) {
        step++;
        for (var i = 0, length_1 = queue.length; i < length_1; i++) {
            var node = queue[0];
            if (node === target) {
                return step;
            }
            node.children.forEach(function (c) { return queue.push(c); });
            queue.shift();
        }
    }
    return -1;
}
module.exports = BFS;
