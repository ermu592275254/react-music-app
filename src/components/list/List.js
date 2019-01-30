import React from 'react'
import './list.less'
import {connect} from 'react-redux'

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    play = (item)=>{
        this.props.clickSong(item)
    }
    render() {
        let list = this.props.searchList;
        return (
            <ul className="list-grid">
                {list.map((item,index)=>{
                    return (<li key={index} className="list-item" onClick={this.play.bind(this,item)}>
                        <div className="content">
                            <p className="name">{item.songname}</p>
                            <span>{item.singer.map(item=>{return item.name})}-{item.songname}</span>
                        </div>
                        <div className="player-button"></div>
                        <div className="more"></div>
                    </li>)
                })}
            </ul>
        )
    }
}

export default connect((state,props)=>{
    return Object.assign(state,props)
})(List)