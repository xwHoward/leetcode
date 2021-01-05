const path = require("path");
const fs = require("fs");
const generateHTML = require("../../scripts/generateHTML.js");

function generate() {
  const paths = fs.readdirSync(__dirname, {
    withFileTypes: true,
  });
  let htmlContent = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
    <h1>Leetcode Playground</h1>`;
  const directories = paths.filter((r) => r.isDirectory());
  const valids = [],
    invalids = [];
  directories.forEach((d) => {
    const res = generateHTML(path.resolve(__dirname, d.name), d.name);
    if (/(invalid)|(not-pass)/g.test(res)) {
      invalids.push(res);
    } else {
      valids.push(res);
    }
  });
  htmlContent += invalids.join("") + valids.join("");
  htmlContent += `</body>
    </html>
    `;
  fs.writeFileSync(path.resolve(__dirname, "../index.html"), htmlContent);
  console.log(`success(${directories.length})`);
}

generate();
