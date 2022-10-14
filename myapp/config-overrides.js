const webpack = require('webpack')
const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addDecoratorsLegacy,
  addWebpackAlias,
  addPostcssPlugins
} = require('customize-cra')
const postcssrc = require('./postcss.config')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 分析插件，打包后在build/static/report.html中展示各模块所占的大小
// const analyze = process.env.REACT_APP_ENV === 'production' //是否分析打包数据

module.exports = override(
  // antd-mobile 按需加载
  fixBabelImports('import', { libraryName: 'antd-mobile', style: 'css' }),
  addWebpackAlias({
    '@/': resolve('src')
  }),
  addDecoratorsLegacy()
  // 包分析插件
  // process.argv[2] === 'analysis' &&
  //   addWebpackPlugin(new BundleAnalyzerPlugin()),
  // 设置自定义环境变量
  // addWebpackPlugin(
  //   new webpack.DefinePlugin({
  //     'process.env.CUSTOM_ENV': JSON.stringify(process.env.CUSTOM_ENV)
  //   })
  // )
  // addPostcssPlugins([
  //   require('postcss-flexbugs-fixes'),
  //   require('postcss-px-to-viewport')(postcssrc, true)
  // ])
)
