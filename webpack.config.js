const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: ["./scripts/index.js"],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
  },
  watch: true,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'sass-loader',
      ]
    },  {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
              limit: 8192
          }
        }
      ]
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {

        }
      }
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./index.html", inject: true,}),
    new MiniCssExtractPlugin(),
  ],
};