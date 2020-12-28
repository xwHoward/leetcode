function isValid(s: string): boolean {
  const chars = s.split('');
  const stack: string[] = [];
  for (const char of chars) {
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
  return stack.length === 0;
}
