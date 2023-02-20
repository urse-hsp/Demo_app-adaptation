import React, { Component } from "react";
import Test1 from "../Test1";
import {userContext} from '@/utils/context'
const { Provider } = userContext;

export default class User extends Component {
  state = {
    name: "小刘",
  };
  increment = () => {
    const { value } = this.numberNode;
    this.props.increment(value * 1);
  };
  changeName = () => {
    this.setState({ name: "小张" });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h2>当前求和为:{this.props.sum}</h2>
        <select ref={(c) => (this.numberNode = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.changeName}>改名</button>
        <hr />
        <Provider value={name}>
          <Test1></Test1>
        </Provider>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(User)
