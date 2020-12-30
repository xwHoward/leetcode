const YAML = require("yaml-front-matter");
const fs = require("fs-extra");
const path = require("path");

const validators = {
  /**
   * 两个引用不同但排序后等值的数组
   *
   * @param {*} a
   * @param {*} b
   * @return {*}
   */
  equalSortedArray: function (a, b) {
    return a.sort().toString() === b.sort().toString();
  },
  /**
   * 两个引用不同但等值的数组
   *
   * @param {*} a
   * @param {*} b
   * @return {*}
   */
  equalArray: function (a, b) {
    return a.toString() === b.toString();
  },
  equal: function (a, b) {
    return a === b;
  },
};

function generateHTML(problemPath, problemName) {
  let content;
  try {
    content = fs.readFileSync(path.join(problemPath, "index.md"));
  } catch (error) {
    return `<h2 class="invalid">invalid problem: ${problemName}</h2>`;
  }
  const fn = require(path.join(problemPath, "index.js"));
  const template = fs.readFileSync(
    path.resolve(__dirname, "./template.html"),
    "utf-8"
  );
  const meta = YAML.loadFront(content);
  let htmlContent = template;
  htmlContent = htmlContent.replace(/{{\s*name\s*}}/, meta.name);
  htmlContent = htmlContent.replace(/{{\s*code\s*}}/, fn.toString());

  htmlContent = htmlContent.replace(
    /{{\s*inputs\s*}}/,
    meta.useCases
      .map((uc) => {
        const returnValue = fn(...uc.input);
        const res =
          typeof returnValue === "undefined" ? uc.input[0] : returnValue;
        const validator =
          validators[meta.validator] ||
          function (a, b) {
            return a === b;
          };
        const klass = validator(res, uc.output) ? "pass" : "not-pass";
        return `<li class="${klass}">输入：<code>${uc.input
          .map((i) => JSON.stringify(i, null, 2))
          .join(",  ")}</code><br />预期结果：<code>${JSON.stringify(
          uc.output
        )}</code><br />输出：<code>${JSON.stringify(res)}</code></li>`;
      })
      .join("\n")
  );
  return htmlContent;
}

module.exports = generateHTML;
