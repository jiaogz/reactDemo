
//  React核心库 ReactDOM DOM对象
import React from 'react';
import ReactDOM from 'react-dom';
//样式可以注释
// import './assets/css/index.css';
//引入组件
import App from './App';
//加快react的运行速度
import * as serviceWorker from './serviceWorker';

//将App组件渲染到root节点
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
