// css-loader用来处理css中url的路径
// style-loader可以把css文件变成style标签插入head中
// 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development'

// css-module
const moduleCSSLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: __DEV__,
    importLoaders: 1,
    localIdentName: __DEV__ ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
  }
}

// post-css
const postCSSLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss',
    plugins: () => [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9' // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009'
      })
    ]
  }
}

// css-loader
const cssLoader = {
  test: /\.css$/,
  use: __DEV__
    ? [ 'style-loader', moduleCSSLoader, postCSSLoader ]
    : [ MiniCssExtractPlugin.loader, moduleCSSLoader, postCSSLoader ],
  exclude: path.resolve(__dirname, '../node_modules')
}

// sass-loader
const sassLoader = {
  test: /\.(sass|scss)$/,
  use: __DEV__
    ? [ 'style-loader', moduleCSSLoader, postCSSLoader, 'sass-loader' ]
    : [ MiniCssExtractPlugin.loader, moduleCSSLoader, postCSSLoader, 'sass-loader' ],
}

// url-loader
const urlLoader = {
  test: /\.(png|jpg|jpeg|gif|svg)/,
  use: {
    loader: 'url-loader',
    options: {
      outputPath: 'images/',
      limit: 5 * 1024,
    },
  },
}

// less-loader
const lessLoader = {
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader', // translates CSS into CommonJS
    },
    {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        modifyVars: {
          // antd theme
          // 'primary-color': '#f93',
          'border-radius-base': '0',
          'primary-color': '#5a97f4',
          'link-color': '#5a97f4',
        },
        javascriptEnabled: true,
      },
    },
  ],
}

module.exports = {
  rules: [
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
      },
    },
    cssLoader,
    sassLoader,
    urlLoader,
    lessLoader,
  ],
}
