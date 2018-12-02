## react使用
### 定义

* 可以开发单页面应用

* 组件化、模块化的开发模式

* 通过对DOM的模拟(虚拟dom)，最大限度地减少与DOM的交互  （数据绑定）

* React可以与已知的库或框架很好地配合（cntd）

* 基于jsx的语法，JSX是React的核心组成部分，它使用XML标记的方式去直接声明界面，html 、js混写模式

* React中的组件: 解决html 标签构建应用的不足。
  
  使用组件的好处：把公共的功能单独抽离成一个文件作为一个组件，哪里里使用哪里引入。


### 环境搭建

* 安装nodeJs
    
     `node -v` 查看版本
* 安装cnpm（代替npm）
    
    `npm install -g cnpm --registry=https://registry.npm.taobao.org`
    
    `cnpm -v` 查看版本
* 安装yarn

    `cnpm install -g yarn  或者 npm install -g yarn`
    
    `yarn -v ` 查看版本

### 构建项目

* 方式一：

    1、安装脚手架
    
    `npm install -g create-react-app   /  cnpm install -g create-react-app`
    
    2、创建项目,项目名称小写
    
    `create-react-app reactdemo`
    
    3、运行项目
    
    `cd reactdemo`
    
    `npm start`
    
    `npm run build` 打包部署，将生产的build问价下内容复制到webapp
    
* 方式二：

    1、安装脚手架并创建项目
    
    `npx create-react-app reactdemo`
    
    2、运行项目
        
    `cd reactdemo`
    
    `npm start`
    
    `npm run build` 打包部署，将生产的build问价下内容复制到webapp

### 项目结构

    |-build：                             --编译后生成的文件
    |-node_modules：                      --引入的lib库
    |-public   
    |-src
        |-assets                          --静态资源
            |-css
            |images
        |-components                      --自定义组件
            |-mode
            |-user
        App.js                            --根组件
        index.js
        serviceWorker.js
    package-json
   
### 创建组件

    /**
     * 创建一个组件：组件名首字母大写
     */
    //引入react核心库（两种方式）
    //方式一：
    import React, { Component } from 'react';
    //方式二：
    // import Reacte from 'react';
    
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
            
            }
        }
        /**
         * 模板信息：
         * JSX语法
         */
        render(){
            //JSX语法：1.必须包含一个根节点  2.所有的必须都在标签里面
            return(
                <div>
    
                </div>
            )
        }
    }
    //需要将组件暴露出去
    export default Basic1;
    
### 数据绑定
    
* 绑定属性注意：
                
    class 要变成 className   
    
    for 要变成  htmlFor
    
    style属性和以前的写法有些不一样
    	
       <div style={{'color':'blue'}}>{this.state.title}</div>
       <div style={{'color':this.state.color}}>{this.state.title}</div>

* 绑定事件处理函数this的几种方法：

    第一种方法：
    
      	run(){
            	alert(this.state.name)
      	}
      	
      	<button onClick={this.run.bind(this)}>按钮</button>
    
    第二种方法：
    
    	构造函数中改变
    
    	this.run = this.run.bind(this);
    
     	run(){
    
            	alert(this.state.name)
     	 }
     	 
     	<button onClick={this.run>按钮</button>
    
    第三种方法：
    
    	 run=()=> {
        	alert(this.state.name)
     	 }
    
    	<button onClick={this.run>按钮</button>
    	
* 获取表单的值

    方式一：
  
      1、监听表单的改变事件                        onChange
      
      2、在改变的事件里面获取表单输入的值           事件对象
      
      3、把表单输入的值赋值给username              this.setState({})
      
      4、点击按钮的时候获取 state里面的username     this.state.username
    
      `<input onChange={this.inputChange}/> <button onClick={this.getInput}>获取input的值</button>`
      
      inputChange=(e)=>{
      
          console.log(e.target.value);
  
          this.setState({
  
              username:e.target.value
          })
       }
      
   方式二：
        
        1、监听表单的改变事件                        onChange
        
        2、在改变的事件里面获取表单输入的值            ref获取 
        
        3、把表单输入的值赋值给username              this.setState({})
        
        4、点击按钮的时候获取 state里面的username     this.state.username
        
        <input ref="username" onChange={this.inputChange}/> <button onClick={this.getInput}>获取input的值</button>
        
        inputChange=()=>{
        
          let val=this.refs.username.value;
          
          this.setState({
              username:val
          })
         }
         
* 约束性和非约束性组件:

     非约束性组:
     
        <input type="text" defaultValue="a" />   这个 defaultValue 其实就是原生DOM中的 value 属性。
      
         这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程。

     约束性组件：
     
        <input value={this.state.username} type="text" onChange={this.handleUsername}  /> 

        这里，value属性不再是一个写死的值，this.state.username 是由 this.handleChange 负责管理的。
        
        是onChange 事件触发之后，由于 this.setState 导致了一次重新渲染点类似双休数据绑定
        
     `<input type="text" value={this.state.username} onChange={this.handleUsername} />`
     
      `handleUsername=(e)=>{
        this.setState({
          username:e.target.value
        })
      }`
      
### 父子组件传值
    
* 父子组件：

    组件的相互调用中，我们把调用者称为父组件，被调用者称为子组件
    
* 父组件给子组件传值 
    
    1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>
        
        <Header title={this.state.title}  run={this.run}  news={this} />

    2.子组件里面获取值： this.props.msg 
    
        <h2>{this.props.title}</h2>
        
        <button onClick={this.props.run}>调用父组件的run方法</button>

        <button onClick={this.props.news.getData}>获取父组件的getData方法</button>

        <button onClick={this.getNews}>获取整个父组件实例</button>         
    
    说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件。
    
    
* 父组件主动获取子组件的数据
    
    1、调用子组件的时候指定ref的值   
        
        <Header ref='header'></Header>      
    
    2、通过this.refs.header  获取整个子组件实例
    
       //父组件主动调用子组件的数据和方法
        getFooter=()=>{
    
          this.refs.footer.run();
    
        }
        
    3、子组件给父组件传值
    
        <button onClick={this.props.news.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
        
* defaultProps、propTypes

    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    
        Header.defaultProps={
        
            title:'标题'
        }

    propTypes：验证父组件传值的类型合法性

    1、引入import PropTypes from 'prop-types';

    2、Header.propTypes = {
        name: PropTypes.string
    };


   注：都是定义在子组件里面  

### react获取服务器APi接口的数据：

   react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据

* axios          

    https://github.com/axios/axios   axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净（后端运行跨域）

    1、安装axios模块npm install axios  --save   /  npm install axios  --save
    
    2、在哪里使用就在哪里引入import axios from 'axios'
    
    3、看文档使用
    
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
    
        axios.get(api)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

* fetch-jsonp    
    
     https://github.com/camsong/fetch-jsonp

    1、安装 npm install fetch-jsonp  --save

    2、import fetchJsonp from 'fetch-jsonp'

    3、看文档使用

        fetchJsonp('/users.jsonp')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          console.log('parsed json', json)
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })

### React生命周期函数：

   组件加载之前，组件加载完成，以及组件更新数据，组件销毁，触发的一系列的方法 ，这就是组件的生命周期函数

* 组件加载的时候触发的函数： 

    constructor 、componentWillMount、 render 、componentDidMount

* 组件数据更新的时候触发的生命周期函数：

    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate


* 在父组件里面改变props传值的时候触发的：

    shouldComponentUpdate、componentWillReceiveProps


* 组件销毁的时候触发的：

    componentWillUnmount

### react路由的配置：
   
   1、找到官方文档 https://reacttraining.com/react-router/web/example/basic

   2、安装  
   
    cnpm install react-router-dom --save

   3、找到项目的根组件引入react-router-dom

    import { BrowserRouter as Router, Route, Link } from "react-router-dom";

   4、复制官网文档根组件里面的内容进行修改  （加载的组件要提前引入）

     <Router>
            
            <Link to="/">首页</Link>

            <Link to="/news">新闻</Link>

            <Link to="/product">商品</Link>

           <Route exact path="/" component={Home} />
           <Route path="/news" component={News} />    
           <Route path="/product" component={Product} />   
     </Router>

     * exact表示严格匹配
     
###react动态路由传值
   
 1、动态路由配置

     <Route path="/content/:aid" component={Content} />   

 2、对应的动态路由加载的组件里面获取传值

       this.props.match.params


 跳转：<Link to={`/content/${value.aid}`}>{value.title}</Link>
 
 3、 在react里面使用url模块需要安装url模块    
    
    安装 cnpm install url --save
   
    import url from 'url';
    
    var query=url.parse(this.props.location.search,true).query;

### 路由模块化

* 方法一：

        let routes = [
          {
            path: "/",
            component: Home,
            exact:true
          },
          {
            path: "/shop",
            component: Shop
          },
          {
            path: "/user",
            component: User
          },
          {
            path: "/news",
            component: News
          }
        ];
        
        
        <Router>
            <div>
                <header className="title">
                    <Link to="/">首页组件</Link>
                    <Link to="/user">用户页面</Link>
                    <Link to="/shop">商户</Link>
                    <Link to="/news">新闻</Link>
                </header> 
    
                {
                  routes.map((route,key)=>{
                      if(route.exact){
                        return <Route key={key} exact path={route.path} component={route.component}/>
                      }else{
                        return <Route  key={key}  path={route.path} component={route.component}/>
                      }
                  })
                }            
             
            </div>
         </Router>
         
* 方式二：

        import routes from './model/router.js';
        
        <Router>
                <div>
                    <header className="title">
                        <Link to="/">首页组件</Link>
                        <Link to="/user">用户页面</Link>
                        <Link to="/shop">商户</Link>
                        <Link to="/news">新闻</Link>
                    </header> 
        
                    {
                      routes.map((route,key)=>{
        
                          if(route.exact){
                            return <Route key={key} exact path={route.path} component={route.component}/>
                          }else{
                            return <Route  key={key}  path={route.path} component={route.component}/>
                          }
                      })
                    }            
                </div>
        </Router>   
     
###嵌套路由
    
    import routes from './model/router.js';
    
    <Router>
            <div>
                <header className="title">
                    <Link to="/">首页组件</Link>
                    <Link to="/user">用户页面</Link>
                    <Link to="/shop">商户</Link>
                    <Link to="/news">新闻</Link>
                </header> 
    
                {
                  routes.map((route,key)=>{
    
                      if(route.exact){
                        return <Route key={key} exact path={route.path}                     
    
                        // route.component     value.component   <User  {...props}  routes={route.routes} />
    
                        render={props => (
                          // pass the sub-routes down to keep nesting
                          <route.component {...props} routes={route.routes} />
                        )}
    
                        />
                      }else{
                        return <Route  key={key}  path={route.path} 
                        render={props => (
                          // pass the sub-routes down to keep nesting
                          <route.component {...props} routes={route.routes} />
                        )}
                        />
    
                      }
                  })
                }            
              
            </div>
    </Router>
 
### React中使用Antd        

* antd官网：
  
  https://ant.design/docs/react/introduce-cn
  
* React中使用Antd

	1、安装antd   
	
	    npm install antd --save    /   yarn add antd     /  cnpm install antd --save
 
	2、在您的react项目的css文件中引入 Antd的css

		@import '~antd/dist/antd.css';

	3、看文档使用：

		如使用Button： 

			1、在对应的组件中引入Antd        
			
			    import { Button } from 'antd';

			2、<Button type="primary">Primary</Button>


* React中使用Antd高级配置，按需引入css样式

    我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。

	1、安装antd         
	    
	    npm install antd --save

	2、安装（react-app-rewired）一个对 create-react-app 进行自定义配置的社区解决方案 
	   
	   yarn add react-app-rewired    /  cnpm install  react-app-rewired --save

	3、修改 package.json，react-scripts 需改为react-app-rewired

        "scripts": {
                "start": "react-app-rewired start",
                "build": "react-app-rewired build",
                "test": "react-app-rewired test --env=jsdom",
                "eject": "react-app-rewired eject"
         }

	4、在项目根目录创建一个 config-overrides.js 用于修改默认配置

        module.exports = function override(config, env) {
             // do stuff with the webpack config...
         return config;
        };

	5、安装babel-plugin-import   babel-plugin-import是一个用于按需加载组件代码和样式的 babel 插件

		yarn add babel-plugin-import   /  cnpm install babel-plugin-import --save

	6、修改 config-overrides.js

        const { injectBabelPlugin } = require('react-app-rewired');
    
        module.exports = function override(config, env) {
         config = injectBabelPlugin(
                   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
                   config,
          );
         return config;
         };

	7、然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 直接引入组件使用就会有对应的css
		
		import { Button } from 'antd';

		<Button type="primary">Primary</Button>
     
    
