import React, { Component } from 'react';


import Header from './Header';

class Home extends Component {

    constructor(props){
        super(props);        
        this.state={
          msg:'我是一个首页组件',
          title:'首页组件'
        }
    }
    render() {
      return (
        <div>        
          

            <Header title={this.state.title} />
          <br />

          <hr />

            <br />

            这是首页组件的内容
            
       
        </div>
      );
    }
  }
  
  export default Home;
  