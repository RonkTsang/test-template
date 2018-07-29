const path = require('path');
const fs = require('fs')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.weishiLeadTo.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'source-map',
  node: false,  // 关闭 webpack 对 node api接口的 polyfill
  // mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: '@tencent/viola-vue-loader',
        options: {
          buble: {
            objectAssign: 'Object.assign'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        include: path.join(__dirname, 'src'),
        options: {
          objectAssign: 'Object.assign'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@component': path.resolve(__dirname, 'src/component/')
    }
  },
  plugins: []
};