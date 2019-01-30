import React from 'react'

class DissList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let list = this.props.list;
        return (
            <div className="diss-list">
                <div className="list-title">
                    <div className="play-all" onClick={this.props.playAll}>播放全部</div>
                    <div className="collect">+ 收藏（181.9万）</div>
                </div>
                {list.map((item,index)=>{
                    return <div className="list-item" key={'listItem' + index}>
                        <div className="content" onClick={this.props.playSong.bind(this,item)}>
                            <p>{item.songname}</p>
                            <span>{item.singer.map(i=>{return i.name + ' '})} - {item.songorig}</span>
                        </div>
                        <div className="play-btn" onClick={this.props.playSong}></div>
                        <div className="more"></div>
                    </div>
                })}
            </div>
        )
    }
}

export default DissList