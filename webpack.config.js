const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modernWebpack = require("./webpack.modern.config");
const legacyWebpack = require("./webpack.legacy.config");

/**  @type {import("webpack").Configuration} */
const htmlConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "assets", "index.html"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".html"],
  },
  module: {
    rules: [
      {
        test: /\.html/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext][query]",
        },
      },
    ],
  },
};

module.exports = [htmlConfig, modernWebpack, legacyWebpack];
