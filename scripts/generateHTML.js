const YAML = require("yaml-front-matter");
const fs = require("fs-extra");
const path = require("path");

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

  htmlContent = htmlContent.replace(
    /{{\s*inputs\s*}}/,
    meta.useCases
      .map((uc) => {
        const res = fn(uc.input);
        const klass = res === uc.output ? "pass" : "not-pass";
        return `<li class="${klass}">输入：${transformJSON(
          uc.input
        )}<br />预期结果：${transformJSON(uc.output)}<br />输出：${res}</li>`;
      })
      .join("\n")
  );
  function transformJSON(json) {
    return JSON.stringify(
      json,
      (key, value) => {
        if (Array.isArray(value)) {
          return value.join(", ");
        }
        return value;
      },
      2
    );
  }
  return htmlContent;
}

module.exports = generateHTML;
