const path = require('path')

const loaders = require('./webpack-config/loaders')
const plugins = require('./webpack-config/plugins')

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development'

const devtool = __DEV__ ? 'eval-source-map' : 'cheap-module-source-map'
// const devtool = __DEV__ ? 'eval-source-map' : 'cheap-eval-source-map'

const enviroment = process.env.NODE_ENV
const host = '0.0.0.0'
// const host = 'localhost'
const port = 9955
const apiProxy = 'http://34.64.197.155:5000/'
// const apiProxy = 'http://97.64.24.247:5000/'

let entry = './src/index.js'

if (!__DEV__) {
  entry = {
    app: './src/index.js',
    common: [ 'axios' ],
    vendor: [
      'react-dom',
      'react',
      'redux',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'react-intl',
      'redux-thunk',
      'prop-types',
      'classnames',
    ]
  }
}

const devOutput = {
  path: path.join(__dirname, '/dist'),
  publicPath: '/',
  filename: 'bundle.js',
}
const prodOutput = {
  path: path.join(__dirname, '/dist/assets'),
  publicPath: '/assets/',
  filename: 'js/[name].[hash:16].js',
  chunkFilename: '[name].[id].js'
}
const output = __DEV__ ? devOutput : prodOutput

const resolve = {
  alias: {
    Src: path.join(__dirname, 'src'),
    Maps: path.join(__dirname, 'maps'),
    Components: path.join(__dirname, 'src/components'),
    Constants: path.join(__dirname, 'src/constants'),
    Containers: path.join(__dirname, 'src/containers'),
    Images: path.join(__dirname, 'src/images'),
    Styles: path.join(__dirname, 'src/styles'),
    Utils: path.join(__dirname, 'src/utils')
  },
  extensions: [ '.js', '.jsx' ],
}

const devServer = {
  contentBase: 'src',
  port,
  host,
  overlay: true,
  compress: true,
  historyApiFallback: true, // 解决刷新404问题
  // 公共文件，浏览器可直接访问，HMR必须
  publicPath: '/',
  proxy: {
    '/api': {
      target: apiProxy,
      pathRewrite: { '^/': '' },
      changeOrigin: true,
    },
  },
  stats: 'errors-only',
  // open: true,
}

console.info(`

 ▄▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌ ▐░░░░░░░░░▌ ▐░░░░░░░░░░░▌ ▐░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀█░▌▐░█░█▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░█░█▀▀▀▀▀█░▌
          ▐░▌▐░▌▐░▌    ▐░▌          ▐░▌▐░▌▐░▌    ▐░▌
          ▐░▌▐░▌ ▐░▌   ▐░▌          ▐░▌▐░▌ ▐░▌   ▐░▌
 ▄▄▄▄▄▄▄▄▄█░▌▐░▌  ▐░▌  ▐░▌ ▄▄▄▄▄▄▄▄▄█░▌▐░▌  ▐░▌  ▐░▌
▐░░░░░░░░░░░▌▐░▌   ▐░▌ ▐░▌▐░░░░░░░░░░░▌▐░▌   ▐░▌ ▐░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░▌    ▐░▌▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌    ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄█░█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄█░█░▌
▐░░░░░░░░░░░▌ ▐░░░░░░░░░▌ ▐░░░░░░░░░░░▌ ▐░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀

`)
console.info('---------- configurations ----------')
console.info(`enviroment: ${enviroment}`)
console.info(`host: ${host}`)
console.info(`port: ${port}`)
console.info(`apiProxy: ${apiProxy}`)
console.info('---------- configurations ----------')
console.info()

module.exports = {
  devtool,
  entry,
  output,
  resolve,
  module: loaders,
  devServer,
  plugins: __DEV__
    ? [].concat(plugins.commonPlugins).concat(plugins.devPlugins)
    : [].concat(plugins.commonPlugins).concat(plugins.prodPlugins),
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'js/common-chunks',
      minChunks: 1,
    }
  },
  // externals,
}
