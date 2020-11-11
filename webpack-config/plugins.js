const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development'
const __DEBUG__ = (process.env.DEPLOY_ENV || 'development') !== 'production'

exports.commonPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(__DEV__ ? 'development' : 'production')
    },
    __DEBUG__: JSON.stringify(__DEBUG__),
    __DEV__: JSON.stringify(__DEV__)
  }),
  new webpack.ProvidePlugin({
    _: 'lodash',
  }),
]

/**
 * dev plugin
 */
exports.devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true,
    options: {
      context: '/'
    }
  }),
  // new HtmlWebpackPlugin({
  //   template: 'src/index.dev.html'
  // }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: `${process.cwd()}/src/index.dev.html`,
    favicon: `${process.cwd()}/src/favicon.ico`,
  }),
  // new BundleAnalyzerPlugin()
]

/**
 * prod plugin
 */
const prodPlugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
      context: '/'
    }
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'css/app.[name].css',
    chunkFilename: 'css/app.[contenthash:12].css',
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  // new HtmlWebpackPlugin({
  //   template: 'src/index.html',
  //   filename: '../index.html'
  // }),
  // new CopyWebpackPlugin([ // src下其他的文件直接复制到dist目录下
  //   { from: 'src/favicon.ico', to: 'images/favicon.ico' }
  // ]),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: `${process.cwd()}/src/index.html`,
    favicon: `${process.cwd()}/src/favicon.ico`,
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      ie8: false,
      mangle: true,
      output: { comments: false },
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        unused: false,
      }
    },
    sourceMap: true,
    cache: true,
  }),
  // new BundleAnalyzerPlugin({
  //   analyzerMode: 'server',
  //   analyzerHost: '127.0.0.1',
  //   analyzerPort: 8889,
  //   reportFilename: 'report.html',
  //   defaultSizes: 'parsed',
  //   openAnalyzer: true,
  //   generateStatsFile: false,
  //   statsFilename: 'stats.json',
  //   statsOptions: null,
  //   logLevel: 'info'
  // }),
]

exports.prodPlugins = prodPlugins
