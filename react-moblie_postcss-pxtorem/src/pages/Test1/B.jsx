import React from "react";
import { userContext } from "@/utils/context";
const { Consumer } = userContext;

export default function B() {
  return (
    <div>
      我是B函数组件，要接受User组件的值如下：
      <Consumer>
        {(value) => {
          console.log(value);
          return <h2>{value}</h2>;
        }}
      </Consumer>
    </div>
  );
}
