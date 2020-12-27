function dailyTemperatures(T) {
    var stack = [];
    var res = [];
    for (var i = 0; i < T.length; i++) {
        if (stack.length === 0) {
            stack.push(i);
            continue;
        }
        var v = T[i];
        while (T[stack[stack.length - 1]] < v) {
            var idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i);
        console.log(stack);
    }
    while (stack.length) {
        res[stack.pop()] = 0;
    }
    return res;
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
