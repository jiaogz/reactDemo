import React, { Component } from 'react';

class Footer extends Component{

    constructor(props){
            super(props);   //国定写法

            this.state={

                msg:'我是一个底部组件'
            }
    }

    run=()=>{

        alert('我是底部组件的run方法')
    }

    render(){


        return(

            <div>

                <h2>我是一个底部组件</h2>

             
            </div>
        )
    }
}

export default Footer;