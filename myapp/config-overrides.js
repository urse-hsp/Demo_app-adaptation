const webpack = require('webpack')
const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addDecoratorsLegacy,
  addWebpackAlias,
  addPostcssPlugins
} = require('customize-cra')
// const postcssrc = require('./postcss.config')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 分析插件，打包后在build/static/report.html中展示各模块所占的大小
// const analyze = process.env.REACT_APP_ENV === 'production' //是否分析打包数据

const viewport = () => config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3
      }),
      require('postcss-aspect-ratio-mini')({}),
      require('postcss-px-to-viewport')({
        unitToConvert: 'px', // 需要转换的单位，默认为"px"
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
        viewportHeight: 1334, // 视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
        unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        propList: ['*'], // 能转化为vw的属性列表
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // 允许在媒体查询中转换`px`
        replace: true, // 是否直接更换属性值，而不添加备用属性
        exclude: [], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: 'vw', // 横屏时使用的单位
        landscapeWidth: 1134 // 横屏时使用的视口宽度
      }),
      require('postcss-viewport-units')({}),
      require('cssnano')({
        preset: 'advanced',
        autoprefixer: false,
        'postcss-zindex': false
      })
    ]
  })
  return config
}

module.exports = override(
  // antd-mobile 按需加载
  fixBabelImports('import', { libraryName: 'antd-mobile', style: 'css' }),
  addWebpackAlias({
    '@/': resolve('src')
  }),
  addDecoratorsLegacy(),
  // 包分析插件
  // process.argv[2] === 'analysis' &&
  //   addWebpackPlugin(new BundleAnalyzerPlugin()),
  // 设置自定义环境变量
  // addWebpackPlugin(
  //   new webpack.DefinePlugin({
  //     'process.env.CUSTOM_ENV': JSON.stringify(process.env.CUSTOM_ENV)
  //   })
  // )
  viewport()
)
