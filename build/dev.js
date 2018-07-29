const args = require('yargs').argv
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const packup = require('./build')

console.log(`${(new Date()).toTimeString()} args: `, args._)

const buildDir = args._

if (!buildDir || !Array.isArray(buildDir) || !buildDir.length) {
  throw new Error(`
    dev 模式请指定 page 目录:
    npm run dev [pageName]
    `)
}

// webpack common config
const commonConfig = common({
  entry: buildDir
})

packup(merge(commonConfig, require('./webpack.dev')))
