function evalRPN(tokens) {
    var stack = [];
    var evalExp = function (num1, op, num2) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return parseInt((num1 / num2).toString());
            default:
                return 0;
        }
    };
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var v = tokens_1[_i];
        switch (v) {
            case '+':
            case '-':
            case '*':
            case '/':
                var num2 = parseInt(stack.pop()), num1 = parseInt(stack.pop());
                stack.push(evalExp(num1, v, num2).toString());
                break;
            default:
                stack.push(v);
                break;
        }
    }
    return parseInt(stack[0]);
}

module.exports = evalRPN;