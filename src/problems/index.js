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
  directories.forEach((d) => {
    htmlContent += generateHTML(path.resolve(__dirname, d.name), d.name);
  });
  htmlContent += `</body>
    </html>
    `;
  fs.writeFileSync(path.resolve(__dirname, "../index.html"), htmlContent);
  console.log(`success(${directories.length})`);
}

generate();
