const fs = require("fs");
const filePath = process.argv.slice(2)[0];
const svgFile = fs
  .readFileSync(filePath, "utf-8")
  .replace(/strokeMiterlimit/g, "strokeMiterlimit")
  .replace(/stroke-width/g, "strokeWidth")
  .replace(/enable-background/g, "enableBackground");

const template = `
import React from "react"

export default () => (${svgFile})
`;

fs.writeFileSync(filePath.replace(".svg", ".js"), template);
fs.unlinkSync(filePath);
