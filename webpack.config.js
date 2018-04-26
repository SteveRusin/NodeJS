
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./scripts/main.js",
  output: {
    path: __dirname + "/build",
    publicPath: '/build',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: [
        __dirname,
        'styles'
    ],
    watchContentBase: true,
    compress: true,
    port: 8080
  }
};
