import CountUI from "../../pages/Count";
import { connect } from "react-redux";
import { increment } from "../../redux/count_action";

const mapStateToProps = (state) => {
  return { sum: state.count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(increment(value));
    },
  };
};
// 如果mapDispatchToProps对象中值执行后返回是{}，connect可以自动dispatch
// connect({a},{b})(UI组件)
// a:返回普通状态对象的函数
// b:返回普通操作对象方法的函数
// export default connect(mapStateToProps, {
//   increment: increment,
// })(CountUI);
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
