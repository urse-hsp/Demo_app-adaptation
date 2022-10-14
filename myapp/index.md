npx create-react-app myapp --template typescript

antd-mobile axios react-router-dom redux reset.css


node-sass // react框架默认知识scss，所以只需要下载sass-loader和node-sass即可
eslint
npm install customize-cra react-app-rewired --dev 拉取webpack配置
prettier

适配：
https://blog.csdn.net/zcs425171513/article/details/90234670
3：https://www.cnblogs.com/zhangnan35/p/12682925.html
https://segmentfault.com/a/1190000019901881
对比：https://github.com/mirai027/miari-adaptive
1 只做移动端: postcss-px-to-viewport -- vw方法 一把梭，什么都不用考虑。且是最真实的按照屏幕大小的比例来放大缩小
2 小屏设计图向上兼容自适应大屏幕: 当需要从移动端设计图适配到平板、PC屏幕 postcss-px-to-viewport -- rem
3 大屏设计图向下兼容自适应小屏幕: postcss-px-to-viewport -- rem


postcss-pxtorem：https://github.com/zak-opus/react-moblie
postcss-px-to-
1 https://github.com/hellowillian21/react-px-to-viewport-demo
2 https://github.com/chendishen/react-base-mobile

vw做法： 
postcss-aspect-ratio-mini  主要用来处理固定宽高比；
postcss-write-svg 主要用来处理1像素边框问题（该方法对圆角处理还未实现）；
postcss-px-to-viewport 将px单位自动转换成viewport单位；
postcss-flexbugs-fixes： flex
postcss-viewport-units
postcss-preset-env 兼容
react-app-rewire-postcss 重写
cssnano 能为你的 CSS 文件做多方面的的优化， 以确保最终生成的文件 对生产环境cssnano 来说体积是最小的
cssnano-preset-advanced



babel-eslint 需要使用到 ES2015 的语言规范，因此需要安装  ：
eslint ： 不必要介绍了。可以直接到官网上查看
eslint-config-airbnb : 配置一些 eslint rules 的规范
eslint-plugin-import ：在使用 import 的时候，一些 rules 规范
eslint-plugin-react ： 一些 react 的 eslint 的 rules 规范
eslint-plugin-jsx-a11y： 一些 jsx 的 rules 规范

.添加eslint支持，提交前检查安装依赖：
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
eslint-config-react-app
eslint-config-standard
eslint-plugin-flowtype
eslint-plugin-jest
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-react-hooks
eslint-plugin-standard
eslint-plugin-testing-library
添加eslint配置文件.eslintrc.js，如





React 之 config-overrides文件配置 
https://www.jianshu.com/p/65b1f2cdcf76
重点：http://www.qb5200.com/article/323319.html
https://blog.csdn.net/Cmomoa/article/details/114580957


覆盖webkack https://blog.csdn.net/muge1161105403/article/details/124853861