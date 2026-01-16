const path = require("path");

module.exports = {
  entry: {
    index: "./src/scripts/index.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
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
