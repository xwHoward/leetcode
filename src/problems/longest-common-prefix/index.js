function longestCommonPrefix(strs) {
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

function getMinCommonStr(str1, str2) {
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

module.exports = longestCommonPrefix;
