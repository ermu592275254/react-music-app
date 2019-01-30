## 一个简单的音乐播放App

### keyword
**react**
[https://react.docschina.org/docs/](https://react.docschina.org/docs/)
**create-react-app**
[https://facebook.github.io/create-react-app](https://facebook.github.io/create-react-app)

### 初始化
**create-react-app**
```npx create-react-app``` npx临时安装对应的包来执行命令，结束后将删除此包。

```npm start```  启动服务

```npm test``` 启动测试服务

```npm run build``` 打包项目

```npm run eject``` 将webpack配置变为可见，是不可逆的操作

**source-map-explorer**

此包用于分析打包后的bundle size。更好的对代码进行优化，使项目更小，更轻量。

```npm install --save source-map-explorer```

```js
 "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     ...
```
```npm run analyze```

**react-router-dom**
推荐的路由组件，使用方法可参考[https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start)

```npm install --save react-router-dom```

路由跳转只使用了<Link>标签，本项目使用history管理路由

**history**

```npm install history --save```

参考：[https://blog.csdn.net/qq_34645412/article/details/80087372](https://blog.csdn.net/qq_34645412/article/details/80087372)


**redux**

react推荐的状态管理插件，其基于flux但比flux更轻，功能更简洁。

```npm install --save redux```


```npm install --save redux```
**react-redux**

redux官方提供的react绑定库。

```npm install react-redux --save```

参考：[http://cn.redux.js.org/docs/react-redux/](http://cn.redux.js.org/docs/react-redux/)

需要注意对组件进行更好的职能拆分。此项目没有做好这方面的工作，暂时当作一个后续优化项。

可分为数据处理组件和视图组件，视图组件只负责显示。数据处理，事件回调都放在数据组件中,参考慕课网视频：[https://www.imooc.com/learn/744](https://www.imooc.com/learn/744)


**css preprocessors**
使用less

```npm install less less-loader --save-dev```

修改webpack配置增加less

```
// 将/\.css$/替换为/\.(css|less)$/
// const cssRegex = /\.css$/;
const cssRegex = /\.(css|less)$/;

//修改css的loader配置
{
    test: cssRegex,
    exclude: cssModuleRegex,
    use: getStyleLoaders({
        importLoaders: 1,
        sourceMap: isEnvProduction && shouldUseSourceMap,
    },
        'less-loader' // 这里添加less-loader
    ),
    // Don't consider CSS imports dead code even if the
    // containing package claims to have no side effects.
    // Remove this when webpack adds a warning or an error for this.
    // See https://github.com/webpack/webpack/issues/6571
    sideEffects: true,
    },
```

### 踩过的坑

#### 事件绑定

事件绑定，为了避免this的指向问题，官方给出了三种写法：

```js
 /*
        hint 需要注意的是JSX的回调函数中的this,默认是不会绑定的 需要手动绑定this.或者使用箭头函数来避免this指向undefined
     */
    // 方法一  属性初始化器语法  推荐使用
    class EventOne extends React.Component{
        btnClick =()=>{
            console.log(this);
            console.log(event);
        }
//        btnClickTemp = function(){
//            return {
//
//            }
//        }
        render(){
            return (
                <div>
                    <button onClick={this.btnClick}>方法一</button>
                    <button onClick={this.btnClick.bind(this,param)}>传参写法</button>
                </div>
            )
        }
    }
    /* 方法二   回调函数中使用箭头函数  有弊端——>每次button渲染的时候创建一个不同的回调函数，如果这个回调函数被传入低阶组件，会导致组件也触发
        额外进行不必要的渲染，并且event要放在参数最后面
    */
    class EventTwo extends React.Component{
        btnClick (params){
            console.log(this);
            console.log(params);
            console.log(event);
        }
        render(){
            return <button onClick={(e)=>this.btnClick('params',e)}>方法二</button>
        }
    }
    // 方法三  初始化bind 每个函数都要bind很烦  传参和方法一一样的写法
    class EventThree extends React.Component{
        constructor(props){
            super(props);
            this.btnClick = this.btnClick.bind(this);
        }
        btnClick(){
            console.log(this);
            console.log(event);
        }
        render(){
            return <button onClick={this.btnClick}>方法三</button>
        }
    }

```

#### 阻止滚动

```js
touchMove=(event)=>{
        // event.stopPropagation();
        event.preventDefault();
        // event.nativeEvent.stopImmediatePropagation();
    }
    
<div className={`play-list-model ${!this.props.showPlayList?'hidden-play-list-model':''}`} onTouchMove={this.touchMove}>
```
这样设置并不能阻止滚动冒泡，并且浏览器报警告:

    Unable to preventDefault inside passive event listener due to target being treated as passive

    由于目标被视为被动事件侦听器，无法在被动事件侦听器中预防默认值

