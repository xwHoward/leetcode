function updateMatrix(matrix) {
    var BFS = function (root) {
        var depth = 0;
        var queue = [];
        // const visited = new Set();
        queue.push(root);
        while (queue.length > 0) {
            for (var i = 0, length_1 = queue.length; i < length_1; i++) {
                var _a = queue[0], ri = _a[0], ci = _a[1];
                if (matrix[ri][ci] === 0) {
                    return depth;
                }
                console.log(ri, ci, 'not 0');
                // 上
                if (ri > 0) {
                    console.log('up', [ri - 1, ci]);
                    queue.push([ri - 1, ci]);
                }
                // 下
                if (ri < matrix.length - 1) {
                    console.log('down', [ri + 1, ci]);
                    queue.push([ri + 1, ci]);
                }
                // 左
                if (ci > 0) {
                    console.log('left', [ri, ci - 1]);
                    queue.push([ri, ci - 1]);
                }
                // 右
                if (ci < matrix[ri].length - 1) {
                    console.log('right', [ri, ci + 1]);
                    queue.push([ri, ci + 1]);
                }
                queue.shift();
                console.log(queue);
            }
            depth++;
        }
        return depth;
    };
    var res = [];
    for (var i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        res[i] = res[i] || [];
        for (var j = 0; j < row.length; j++) {
            res[i][j] = BFS([i, j]);
            console.log('res', res);
        }
    }
    return res;
}
// console.log(
//   updateMatrix([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0]
//   ])
// );
console.log(updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
]));
module.exports = updateMatrix;
