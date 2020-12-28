// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例:

// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

function match(stack: any[]) {
  var temp = stack.pop();
  var tempStr = '';
  while (typeof temp !== 'number') {
    if (temp !== '[') {
      tempStr = temp + tempStr;
    }
    temp = stack.pop();
  }
  return { temp, tempStr };
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s: string) {
  const sArray = s.split('');
  const stack: any[] = [];
  let count = '';
  let string = '';
  while (sArray.length) {
    const el = sArray.shift() as string;
    if (el === '[') {
      if (string) {
        stack.push(string);
        string = '';
      }
      if (count) {
        stack.push(parseInt(count, 10));
        count = '';
      }
      stack.push(el);
    } else if (el === ']') {
      if (string) {
        stack.push(string);
        string = '';
      }
      if (count) {
        stack.push(parseInt(count, 10));
        count = '';
      }
      // 出栈元素，直到遇到数字
      var { temp: n, tempStr } = match(stack);
      stack.push(tempStr.repeat(n));
    } else if (/\d/.test(el)) {
      if (string) {
        stack.push(string);
        string = '';
      }
      count += el;
    } else {
      if (count) {
        stack.push(parseInt(count, 10));
        count = '';
      }
      string += el;
    }
  }
  return stack.join('') + string;
};

function decodeString2(s: string): string {
  const stack: Array<string | number> = [''];
  const s_array = s.split('');
  while (s_array.length) {
    const c = s_array.shift() as string;
    if (/\d/.test(c)) {
      if (typeof stack[stack.length - 1] === 'number') {
        stack.push(parseInt(stack.pop() + c));
      } else {
        stack.push(parseInt(c));
      }
    } else if (c === '[') {
      stack.push('');
    } else if (c === ']') {
      const str = stack.pop() as string;
      const num = stack.pop() as number;
      let repeatedStr = '';
      for (let i = 0; i < num; i++) {
        repeatedStr += str;
      }
      s_array.unshift(repeatedStr);
    } else {
      stack.push(stack.pop() + c);
    }
  }
  return stack.join('');
}
