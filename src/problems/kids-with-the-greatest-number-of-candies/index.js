/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  var max = candies.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  }, 0);
  return candies.map(function (c) {
    return max - c <= extraCandies;
  });
};

module.exports = kidsWithCandies;
