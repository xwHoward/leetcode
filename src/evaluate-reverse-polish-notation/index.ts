function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  const evalExp = (num1: number, op: string, num2: number): number => {
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
  for (const v of tokens) {
    switch (v) {
      case '+':
      case '-':
      case '*':
      case '/':
        const num2 = parseInt(stack.pop() as string),
          num1 = parseInt(stack.pop() as string);
        stack.push(evalExp(num1, v, num2).toString());
        break;
      default:
        stack.push(v);
        break;
    }
  }
  return parseInt(stack[0]);
}

// console.log(evalRPN(['4', '13', '5', '/', '+']) === 6);
// console.log(evalRPN(['2', '1', '+', '3', '*']) === 9);
console.log(
  evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+'
  ]) === 22
);

console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']) === -7);
