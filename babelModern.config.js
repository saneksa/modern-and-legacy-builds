const browserslist = require("./browserslistrc.js");

module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.20",
        targets: browserslist.modern,
      },
    ],
  ],
};
