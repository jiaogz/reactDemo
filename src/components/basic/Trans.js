/**
 * reacte绑定事件
 */
import React, { Component } from 'react';

class Trans extends Component{

    constructor(props){
        super(props);

        this.state={

            title:"reacte的绑定事件",
            name:"张三",
            age:"18",
            adrr:"bj"

        }

        this.getName=this.getName.bind(this);
    }

    //获取数据
    getState(){
        alert(this.state.title)
    }

    getName(){
        alert(this.state.name)
    }

    getAge=()=>{
        alert(this.state.age)
    }

    setTitl=()=>{

        this.setState({
            title:"改变"
        })
    }

    //设置值
    setName=(newName)=>{
        this.setState({
            name:newName
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <h2>{this.state.name}</h2>

                <button onClick={this.getState.bind(this)}>获取state的值</button><br/><br/>
                <button onClick={this.getName}>获取Name值</button><br/><br/>
                <button onClick={this.getAge}>获取age值</button><br/><br/>

                <button onClick={this.setTitl}>设置title值</button><br/><br/>
                <button onClick={this.setName.bind(this,"李四")}>设置Name值</button><br/><br/>

            </div>
        )
    }
}

export default Trans;