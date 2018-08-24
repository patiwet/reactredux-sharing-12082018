const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
}
