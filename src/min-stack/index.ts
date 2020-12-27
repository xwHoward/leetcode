class MinStack {
  private stack: number[] = [];
  constructor() {}

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.stack.reduce((min, el) => (min > el ? el : min), Infinity);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
