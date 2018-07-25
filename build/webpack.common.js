const path = require('path')

const __root = path.resolve(__dirname, '../')

module.exports = {
  entry: path.resolve(__root, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__root, 'dist')
  },
  node: false,  // 关闭 webpack 对 node api接口的 polyfill
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
        include: path.join(__root, 'src'),
        options: {
          objectAssign: 'Object.assign'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@component': path.resolve(__root, 'src/component/')
    }
  }
};