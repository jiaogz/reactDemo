
//项目的根组件
import React, { Component } from 'react';
// import './assets/css/App.css';

import Todolist from './components/todolist/Todolist'


//react基于组件化、模块化开发，JSX语法（html+js）
class App extends Component {
  render() {
    return (
      //  相当于引入HTML片段
      <div className="App">

          {/*引入Home组件*/}
          {/*<Home/>*/}
          {/*<Trans/>*/}
          <Todolist/>
      </div>
    );
  }
}

export default App;
