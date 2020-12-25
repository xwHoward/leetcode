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
