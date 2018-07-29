const path = require('path')

const __root = path.resolve(__dirname, '../')

const mkBuildDir = require('./setup')

// const entry = mkBuildDir()

// console.log(` ${(new Date).toTimeString()} entry: `, entry)

// module.exports = {
//   // entry: path.resolve(__root, 'src/index.js'),
//   entry,
//   output: {
//     filename: 'bundle_[name].js',
//     path: path.resolve(__root, 'dist')
//   },
//   node: false,  // 关闭 webpack 对 node api接口的 polyfill
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: '@tencent/viola-vue-loader',
//         options: {
//           buble: {
//             objectAssign: 'Object.assign'
//           }
//         }
//       },
//       {
//         test: /\.js$/,
//         loader: 'buble-loader',
//         include: path.join(__root, 'src'),
//         options: {
//           objectAssign: 'Object.assign'
//         }
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.vue', '.js', '.scss'],
//     modules: [
//       path.resolve(__root, 'src/style'),
//       'node_modules'
//     ],
//     alias: {
//       '@': path.resolve(__root, 'src/'),
//       '@component': path.resolve(__root, 'src/component/'),
//       '@scss': path.resolve(__root, 'src/style/'),
//       '@pages': path.resolve(__root, 'src/pages/'),
//     }
//   }
// };

function isEmptyObj (obj) {
  for (const key in obj) {
    return false
  }
  return true
}

module.exports = (config) => {
  const entry = mkBuildDir(config.entry)
  console.log(` ${(new Date).toTimeString()} webpack entries: `, entry)
  if (isEmptyObj(entry)) {
    throw new Error(`
      没有入口 ！请检查工程目录！
    `)
  }
  return {
    entry,
    output: {
      filename: 'bundle_[name].js',
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
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.vue', '.js', '.scss'],
      modules: [
        path.resolve(__root, 'src/style'),
        'node_modules'
      ],
      alias: {
        '@': path.resolve(__root, 'src/'),
        '@component': path.resolve(__root, 'src/component/'),
        '@scss': path.resolve(__root, 'src/style/'),
        '@pages': path.resolve(__root, 'src/pages/'),
      }
    }
  }
}