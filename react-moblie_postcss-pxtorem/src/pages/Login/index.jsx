import React, { Component } from "react";
import { Toast, NavBar, InputItem, Button } from "antd-mobile";
import { codeReg, phoneReg } from "@/config/reg";
import { CODETIME } from "@/config/constant";
import "./index.less";

export default class Login extends Component {
  state = {
    phone: "",
    code: "",
    canClick: true,
    time: CODETIME,
  };
  // 获取验证码按钮
  getCode = () => {
    const { canClick, phone } = this.state;
    if (!canClick) return;
    if (!phone) return Toast.fail("请输入合法的手机号", 1);
    this.setState({ canClick: false });
    // 开启定时器,改变时间
    let timeId = setInterval(() => {
      const { time } = this.state;
      this.setState({ time: time - 1 });
      if (time <= 0) {
        clearInterval(timeId);
        this.setState({ canClick: true, time: CODETIME });
      }
    }, 1000);
    console.log("发送请求");
  };
  // 登录按钮
  login = () => {
    const { phone, code } = this.state;
    let phoneErr = false;
    let codeErr = false;
    if (!phone) phoneErr = true;
    if (!code) codeErr = true;
    let errMsg = "";
    errMsg += phoneErr ? " 手机号" : "";
    errMsg += codeErr ? " 验证码" : "";
    if (errMsg) return Toast.fail("请输入合法的" + errMsg, 1);
  };
  /**
   * 验证输入框内容合法性
   * @param {String} type
   * @returns
   */
  saveData = (type) => {
    return (value) => {
      if (type === "phone" && !phoneReg.test(value)) value = "";
      else if (type === "code" && !codeReg.test(value)) value = "";
      this.setState({ [type]: value });
    };
  };
  render() {
    const { canClick, time } = this.state;
    return (
      <div>
        <div className="box"></div>123
        {/* 顶部导航区 */}
        <NavBar mode="light">手机验证码登录</NavBar>
        {/* 内容区域 */}
        <div className="login-wrap">
          <InputItem
            clear
            placeholder="请输入手机号"
            onChange={this.saveData("phone")}
          />
          <div className="code-group">
            <InputItem
              clear
              placeholder="6位验证码"
              onChange={this.saveData("code")}
            />
            <button
              className={
                canClick ? "get-code-btn active" : "get-code-btn disabled"
              }
              onTouchEnd={this.getCode}
            >
              获取验证码{canClick ? "" : `(${time})`}
            </button>
          </div>
          <Button type="primary" onTouchEnd={this.login}>
            登录
          </Button>
          {/* 底部说明区域 */}
          <div className="footer">
            未注册的手机号，验证后会自动创建京东账号，登录即代表您同意
            <a href="https://www.baidu.com">《隐私协议》</a>
          </div>
        </div>
      </div>
    );
  }
}
