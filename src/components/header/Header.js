/**
 * 头部组件
 * ====props====
 * leftFun: function
 * rightFun: function
 *
 * */
import React from "react";
import "./header.less";
import {history} from '../../redux/index'
import {Link} from 'react-router-dom'


class DefaultLeft extends React.Component {
    back() {
        console.log(history);
        // browserHistory.back();
        history.go(-1);
    }

    render() {
        return (
            <div className="header-left">
                <button onClick={() => this.back()}></button>
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:1
        }
    }
    active(index){
        this.setState({
            activeIndex:index
        });
    }
    render() {
        return (
            <div className="com-header" style={{backgroundColor: this.props.bgColor}}>
                {this.props.left ? this.props.left : <DefaultLeft/>}
                <div className="tab-row">
                    <div className={`item list ${this.state.activeIndex !=0?'no-active':''}`} onClick={()=>{this.active(0)}}></div>
                    <div className={`item main ${this.state.activeIndex !=1?'no-active':''}`}  onClick={()=>{this.active(1)}}></div>
                    {/*<div className={`item search ${this.state.activeIndex !=2?'no-active':''}`}  onClick={()=>{this.active(2)}}></div>*/}
                    <Link className={`item search ${this.state.activeIndex !=2?'no-active':''}`} onClick={()=>{this.active(2)}} to="/search"></Link>
                </div>
                {this.props.right}
            </div>
        )
    }
}

export default Header


