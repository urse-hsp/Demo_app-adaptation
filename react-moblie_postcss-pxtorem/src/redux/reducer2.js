export default function reducer2(preState = 0, action) {
  const { type, data } = action;
  console.log('我是第二个容器组建的的reducer');
  switch (type) {
    case "increment1":
      return preState + data;
    case "decrement1":
      return preState - data;
    default:
      return preState;
  }
}
