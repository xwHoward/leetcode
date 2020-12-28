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
function isValid(s) {
    var e_1, _a;
    var chars = s.split('');
    var stack = [];
    try {
        for (var chars_1 = __values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
            var char = chars_1_1.value;
            switch (char) {
                case ')':
                    if (stack.pop() !== '(') {
                        return false;
                    }
                    break;
                case '}':
                    if (stack.pop() !== '{') {
                        return false;
                    }
                    break;
                case ']':
                    if (stack.pop() !== '[') {
                        return false;
                    }
                    break;
                default:
                    stack.push(char);
                    break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return stack.length === 0;
}
