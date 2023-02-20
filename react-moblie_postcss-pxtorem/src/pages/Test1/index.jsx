import React, { Component } from "react";
import B from "./B";
export default class index extends Component {
  render() {
    return (
      <div>
        <h3>我是父组件</h3>
        <B></B>
      </div>
    );
  }
}
