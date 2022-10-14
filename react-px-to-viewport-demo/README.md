# create-react-app + react-app-rewired 搭建px to viewport 移动端适配方案

## 前置知识
`react-app-rewired`: 一个CRA再配置的工具，源自react社区，可以在不eject的情况下自定义配置CRA脚手架创建的app。原理很简单，在项目根目录下新建一个配置文件（config-overrides.js），把webpack的配置作为一个config对象传入react-app-rewired，再用config-overrides中的配置对其做修改，然后用修改后的config对象对项目打包。  

`customize-cra`: 提供了一组用于自定义利用react-app-rewired核心功能的Create React App v2配置, 可以通过config-overrides.js文件来对webpack配置进行扩展 

`react-app-rewire-postcss`: 一个react-app-rewired中使用的postcss-loader。通过在config-overrides.js中加载这个loader并自定义配置，从而实现修改CRA默认配置的目的。

除此之外还要用到几个常规插件：  
`cssnano-preset-advanced`  
`postcss-aspect-ratio-mini`  
`postcss-px-to-viewport`  
`postcss-write-svg`  
`cssnano`  
`postcss-viewport-units`  
`postcss-flexbugs-fixes`  
`postcss-preset-env`

## 开始
### 创建项目
```
npx create-react-app react-px-to-viewport-demo
```
### 安装依赖
```
npm install react-app-rewired customize-cra cssnano cssnano-preset-advanced postcss-aspect-ratio-mini postcss-flexbugs-fixes postcss-preset-env postcss-px-to-viewport postcss-viewport-units postcss-write-svg react-app-rewire-postcss --save-dev
```
### 修改npm脚本
将`package.json`中的script脚本修改如下：
```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```
### 配置
根目录下新建配置文件`config-overrides.js`，配置如下:
```
const {
  override
} = require('customize-cra')


const pxToViewport = () => config => {
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
  pxToViewport()
)
```