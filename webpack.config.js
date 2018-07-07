const path = require('path');
const fs = require('fs')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  node: false,  // 关闭 webpack 对 node api接口的 polyfill
  mode: 'none',
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
        // options: {
        //   shadowMode: true
        // }
        // loader: 'weex-vue-loader'
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
    alias: {
      'viola-vue': path.resolve(__dirname, 'viola-vue/index.js')
    }
  },
  plugins: [
    // new WrapperPlugin({
    //   header: wrap.start,
    //   footer: wrap.end
    // })
    // new webpack.BannerPlugin({
    //   banner: viola,
    //   raw: true,
    //   entryOnly: true
    // })
    // 请确保引入这个插件！
    // new VueLoaderPlugin()
  ]
};