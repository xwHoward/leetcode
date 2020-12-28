"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function numSquares(n) {
    var e_1, _a;
    var queue = [n];
    var level = 0;
    var squares = [];
    var i = 1;
    while (i * i <= n) {
        squares.push(i * i);
        i++;
    }
    while (queue.length > 0) {
        var nextLevel = new Set();
        level++;
        try {
            for (var queue_1 = __values(queue), queue_1_1 = queue_1.next(); !queue_1_1.done; queue_1_1 = queue_1.next()) {
                var m = queue_1_1.value;
                for (var k = squares.length - 1; k >= 0; k--) {
                    var squareNum = squares[k];
                    if (squareNum === m) {
                        return level;
                    }
                    else if (squareNum > m) {
                        continue;
                    }
                    else {
                        nextLevel.add(m - squareNum);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (queue_1_1 && !queue_1_1.done && (_a = queue_1.return)) _a.call(queue_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        queue = Array.from(nextLevel.values());
    }
    return -1;
}
