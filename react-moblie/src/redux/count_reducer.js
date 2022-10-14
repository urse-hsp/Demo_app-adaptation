// reducer是一个函数，包含一些对变量操作的判断，返回处理后的公用变量；
// 这里不涉及异步操作，就是简单的变量处理
// 供redux使用
export default function countReducer(preState = 0, action) {
  const { type, data } = action;
  console.log('我是第一个容器组建的的reducer');
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
