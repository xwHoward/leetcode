import { getMinCommonStr } from "./getMinCommonStr";

// longest-common-prefix

export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  } else if (strs.length === 1) {
    return strs[0];
  } else {
    let res = strs[0];
    // 依次遍历所有元素，计算最大前缀
    for (let i = 1; i < strs.length; i++) {
      const next = strs[i];
      res = getMinCommonStr(res, next);
      if (res === "") {
        return res;
      }
    }
    return res;
  }
}
