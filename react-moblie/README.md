### 一、概述

本项目基于 `react@17.0.2、react-router-dom@6.3.0、react-scripts@4.0.3` ，移动端 web 适配练习项目。

### 二、步骤

- 选择社区解决方案`craco`，配置组件库和移动端适配；
- 重置样式，直接放在`public/css`中；
- 安装路由`react-router-dom`，并配置`/config/routes.js`
- `rcc`：普通类组件快捷键；`rrc`:react-redux容器组件快捷键

### 三、常用命令

### `npm start`or `yarn start`

### `npm test`

### `npm run build`

### `npm run eject`

**注意:react 社区方案如`@craco/craco`,只能使用 yarn 安装,所以本项目使用 yarn**

### 四、笔记
> state：类似vue中data,存放组件的数据；
#### 1、redux

redux 就是用于存放一些公用的变量，让组件们可以访问与操作；
action、reducer:都用于操作公共变量，前者用于组件进行操作，后者用于对操作进行执行；一个 reducer 维护一个公共变量；
reducer:redux的reducer必须是一个纯函数：参数(`preState、action`)本身不能被修改，只能被使用，因为例如`preState=[],直接更改它，redux底层发现返回值也是preState相同的引用地址,导致误以为数据没有发生变化，页面不刷新`。

```js
//action.js
export const createIncrementAction =(value)=>{return {type:data}}
//reducer.js
export default function countReducer(preState = 0, action){return ...}
//store.js
const store = createStore(countReducer, applyMiddleware(thunk));
```
```js
// 多个reducer时,以对象形式传入
import { createStore, applyMiddleware,combineReducers } from "redux";
const allReducer = combineReducers({count:countReducer})
const store = createStore(allReducer, applyMiddleware(thunk));
```
> 正常使用：组件自身引入`store`,通过`store.getState().count、store.dispatch({})`来获取与修改状态；
> react-redux使用：容器组件获取状态时通过对应的`reducer`键名；
> 修改状态时，redux会遍历所有`reducer`中`type`，所以一般不同容器对应的`action`也应不同；

#### 2、react-redux

react-redux：用于让 redux 脱离组件本身，通过容器组件做连接，`connect(mapStateToProps,mapDispatchToProps)(UI组件)`，连接UI组件与 redux;
`import { connect } from "react-redux";`
`import { Provider } from "react-redux";`

- mapStateToProps 函数:参数`state`，返回对象，键名供组件使用来使用 state；

```js
(state) => ({ sum: state });
```

- mapDispatchToProps 函数：参数`dispatch`,返回对象，键名供组件使用来操作 state；

```js
(dispatch) => {
   return {
     jia: (value) => {
       dispatch(createIncrementAction(value));
     },
   };
```
#### 3、hooks
> 为函数组件提供一些扩展功能，使其也能像类组件；
+ useState:用于函数组件能使用`state`
+ useEffect：使函数组件可以使用生命周期钩子；
+ useRef：使函数组件可以使用`ref`，准确说是第三种ref使用方式：容器`createRef`；
