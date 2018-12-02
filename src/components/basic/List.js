import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            username:''
         };
    }

    inputChange=()=>{
        /*
            获取dom节点
                1、给元素定义ref属性
                    <input ref="username" />
                2、通过this.refs.username 获取dom节点
        */
        let val=this.refs.username.value;
        this.setState({
            username:val
        })
    }

    getInput=()=>{

        alert(this.state.username);
    }

    //键盘事件
    inputKeyUp=(e)=>{

        console.log(e.keyCode);


        if(e.keyCode==13){

            alert(e.target.value);
        }

    }
    inputonKeyDown=(e)=>{

        console.log(e.keyCode);

        if(e.keyCode==13){

            alert(e.target.value);
        }
    }
    render() {
        return (
            <div>
                

                  {/* 获取表单的值

                1、监听表单的改变事件                        onChange
                2、在改变的事件里面获取表单输入的值            ref获取 
                3、把表单输入的值赋值给username              this.setState({})
                4、点击按钮的时候获取 state里面的username     this.state.username
                 */}

                <input ref="username" onChange={this.inputChange}/> <button onClick={this.getInput}>获取input的值</button>



                <br /><br /> <hr />
                

                <h2>键盘事件</h2>

                <input onKeyUp={this.inputKeyUp}/>
                <br /><br />

                <input onKeyDown={this.inputonKeyDown}/>

            </div>
        );
    }
}

export default List;