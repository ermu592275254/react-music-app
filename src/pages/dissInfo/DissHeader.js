import React from 'react'
import {history} from '../../redux/index'

class DissHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    // todo 这里应该是按照歌单搜索内容。先跳转到公共搜索页
    goSearch =()=>{
        history.push('/search');
    }
    back=()=>{
        history.go(-1)
    }
    render() {
        return (
            <div className="diss-header" style={this.props.style}>
                <div className="back" onClick={this.back}></div>
                <div className="title">{this.props.title}</div>
                <div className="search" onClick={this.goSearch}></div>
            </div>
        )
    }
}

export default DissHeader