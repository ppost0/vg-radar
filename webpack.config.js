const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  devServer: {
    port: "8080",
    static: ["./public"],
    open: true,
    hot: true ,
    liveReload: true
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
          exclude: /node_modules/, //folder to be excluded
          use:  'babel-loader' //loader which we are going to use
      }
    ]
  }
}