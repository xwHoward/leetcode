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

export function getMinCommonStr(str1: string, str2: string) {
  // 两者中最短的做子串
  let short = "",
    long = "";
  if (str1.length < str2.length) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }

  while (!long.startsWith(short)) {
    short = short.substr(0, short.length - 1);
  }
  return short;
}

// remove-duplicates-from-sorted-array
export function removeDuplicates(nums: number[]): number {
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    const next = nums[i];
    // 在长度为res的子数组中查找next
    for (let j = 0; j < res; j++) {
      // 如果查找到，跳过next
      if (nums[j] === next) {
        break;
      }
      if (j === res - 1) {
        // 否则更新长度为res+1的数组
        nums[res] = next;
        res++;
      }
    }
  }
  return res;
}
