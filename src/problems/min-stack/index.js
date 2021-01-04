function MinStack() {
  this.stack = [];
}
MinStack.prototype.push = function (x) {
  this.stack.push(x);
};
MinStack.prototype.pop = function () {
  this.stack.pop();
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};
MinStack.prototype.getMin = function () {
  return this.stack.reduce(function (min, el) {
    return min > el ? el : min;
  }, Infinity);
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;
