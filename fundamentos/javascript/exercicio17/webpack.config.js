const path = require("path");

const DIR_PATH = path.resolve(__dirname, "public");

module.exports = {
  devServer: {
    static: {
      directory: DIR_PATH,
    },
  },
  entry: {
    index: "./src/scripts/index.js",
  },
  mode: "production",
  output: {
    path: DIR_PATH,
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
};
