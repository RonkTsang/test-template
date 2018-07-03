const path = require('path');
const fs = require('fs')
const webpack = require('webpack')
// const WrapperPlugin = require('wrapper-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

// var simNativeCode = `
//   var ENV = 'web'

//   window.callNative = function (id, tasks) {
//       console.log('i got it')
//       console.log('id: ' + id)
//       console.log('task', tasks)
//   };
// `

// var viola = fs.readFileSync(path.resolve(__dirname, 'viola/viola.js'), 'UTF-8')

// simNativeCode += viola

// var wrap = {
//   start() {
//     return simNativeCode + '\n' + viola + `
//       Viola.instanceId = parseInt(Math.random() * 100)
//       createInstance(String(instanceId), \`
//     `
//   },
//   end() {
//     return '`)'
//   }
// }

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
        // options: {
        //   shadowMode: true
        // }
        // loader: 'weex-vue-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // }
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