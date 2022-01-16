const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist", "modern"),
    filename: "modern.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          configFile: path.resolve(__dirname, "babelModern.config.js"),
        },
      },
    ],
  },
};
