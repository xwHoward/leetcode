import { removeDuplicates } from "./removeDuplicates";
import { singleNumber } from "./singleNumber";

function callFnWithParams(fn: any, groups: any[][]) {
  let res = "<h2>" + fn.problemName + "</h2>";
  groups.forEach((g) => {
    res += "<p>" + fn.call(fn, ...g) + "</p>";
  });
  return res;
}

function component(innerHtml: string) {
  const element = document.createElement("div");
  element.innerHTML = innerHtml;
  return element;
}

const executeResults = [];

executeResults.unshift(
  callFnWithParams(singleNumber, [
    [[2, 2, 1]],
    [[4, 1, 2, 1, 2]],
    [[1, 3, 1, -1, 3]],
    [
      [
        -336,
        513,
        -560,
        -481,
        -174,
        101,
        -997,
        40,
        -527,
        -784,
        -283,
        -336,
        513,
        -560,
        -481,
        -174,
        101,
        -997,
        40,
        -527,
        -784,
        -283,
        354,
      ],
    ],
  ])
);

executeResults.map(component).forEach((node) => {
  document.body.appendChild(node);
});
