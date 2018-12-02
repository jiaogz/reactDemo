/**
 * 创建一个组件：组件名首字母大写
 */
//引入react核心库（两种方式）
//方式一：
import React, { Component } from 'react';
//方式二：
// import Reacte from 'react';

//引入样式
import '../../assets/css/index.css';

//引入图片
import img from '../assets/images/322612.jpg';

//需要继承Component父类,使用方式二引入核心库时，继承Reacte.Component
class Basic1 extends Component{
    /**
     * 构造函数
     * @param props:传递父类的值
     */
    constructor(props){
        super(props);

        // 定义数据
        this.state={

            //绑定变量
            name:"Basic1",

            //对象
            use:{
                name:"李四",
                age:18
            },

            //数组
            list1:["语文","数学","英语"],
            list2:[<h2 key='1'>语文</h2>,<h2 key='2'>数学</h2>],
            list3:[
                {title:'语文'},
                {title:'数学'},
                {title:'英语'}
            ],

            //绑定属性
            title:"属性标题",

            //绑定样式：
            color:"red",
            style:{
                fontSize:"40px"
            }
        }
    }
    /**
     * 模板信息：
     * JSX语法
     */
    render(){
        //JSX语法：1.必须包含一个根节点  2.所有的必须都在标签里面

        let listResurt=this.state.list1.map(function (value,key) {

            return(<li key={key}>{value}</li>);
        });

        return(
            /**
             * 属性绑定的注意事项：
             * 1.className
             * 2.for换成htmlfor
             * 3.style
             *
             */
            <div>
                {/*绑定数据*/}
                <div title={this.state.title} style={{"color":"red"}}>绑定变量Name：{this.state.name}</div>
                <hr/>

                {/*绑定对象*/}
                <div className='red' style={this.state.style}>绑定对象：{this.state.use.name}</div>
                <hr/>

                {/*遍历数组*/}
                <div>遍历数组

                    <div className={this.state.color}>方式一：{this.state.list2}</div><br/>

                    <div>方式二：
                        <ul>{listResurt}</ul>
                    </div><br/>

                    <div>方式三：直接书写js脚本
                        <ul>
                            {this.state.list3.map(function (value, key) {
                               return(<li key={key}>{value.title}</li>);
                            })}
                        </ul>
                    </div>
                </div>
                <hr/>

                {/*图片引入*/}
                <div className='home'>
                    <div>方式一：
                        <img src={img} />
                    </div><br/>

                    {/*<div>方式二：*/}
                        {/*<img src={require('../assets/images/322612.jpg')}/>*/}
                    {/*</div>*/}

                    <div>引入外部图片：
                        <img src="https://pcsdata.baidu.com/thumbnail/9f375a458731b3a482c38a91d811092b?fid=2073169351-250528-925022601715914&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-FSBnayMe0dsZma%2Bi%2Fue81EPcbE0%3D&expires=2h&chkv=0&chkbd=0&chkpc=&dp-logid=1680243424&dp-callid=0&time=1543626000&size=c450_u450&quality=100&vuk=-&ft=video"/>
                    </div>
                </div>
                <hr/>

            </div>
        )
    }
}
//需要将组件暴露出去
export default Basic1;