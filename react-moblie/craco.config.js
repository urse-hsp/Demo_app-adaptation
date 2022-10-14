const CracoLessPlugin = require("craco-less");
const pxtorem = require("postcss-pxtorem");
const path = require('path')
module.exports = {
  //做antd-mobile样式按需加载
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd-mobile",
          libraryDirectory: "es",
          style: true, //设置为true即是less 这里用的是css
        },
      ],
    ],
  },
  // 配置less支持
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@brand-primary": "#E1251B",
              "@brand-primary-tap": "#D24747",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 移动端适配
  style: {
    postcss: {
      mode: "extends",
      plugins: [
        pxtorem({
          rootValue: 37.5, // 设计稿宽度/100，即分成多少份
          unitPrecision: 5, // 小数精度
          propList: ["*"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          // exclude: /node_modules/i, 
          //不对这些文件中样式做转换，开启后，按需引入的antd样式就不能转换rem了
        }),
      ],
    },
  },
  // 配置别名
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
