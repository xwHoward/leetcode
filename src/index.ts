import { removeDuplicates } from "./leetcode";

function callFnWithParams(fn: (args: any) => any, groups: any[][]) {
  let res = "";
  groups.forEach((g) => {
    res += "<p>" + fn.call(null, ...g) + "</p>";
  });
  return res;
}

function component() {
  const element = document.createElement("div");
  element.innerHTML = callFnWithParams(containsDuplicate, [
    [[1, 2, 3, 1]],
    [[1, 2, 3, 4]],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
  ]);
  return element;
}

document.body.appendChild(component());

// contains-duplicate
function containsDuplicate(nums: number[]): boolean {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

// single-number
