import React from 'react'
import {connect} from 'react-redux'
import './playList.less'
import {deleteAll,setShowPlayList,deleteSongFromPlayList,playSong} from '../../redux/actions'

class PlayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noDataMsg:'╮(╯3╰)╭列表空空如也，快去添加喜欢的歌曲吧~'
        }
    }
    componentDidMount(){
        this.refs.scroll.addEventListener('touchmove',this.touchMove,{passive: false, capture: false})
    }
    deleteAll =()=>{
        this.props.dispatch(deleteAll())
    }
    hidden=()=>{
        console.log('hidden')
        this.props.dispatch(setShowPlayList(false))
    }
    deleteOne=(item)=>{
        console.log(item);
        this.props.dispatch(deleteSongFromPlayList(item.id))
    }
    play=(song)=>{
        this.props.dispatch(playSong(song));
        this.hidden()
    }
    // todo 阻止滚动 目前无效需要找一下解决方案
    touchMove=(event)=>{
        console.log(event);
        event.preventDefault();
        event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
    }
    render() {
        let list = this.props.songList;
        let currentSong = this.props.currentSong;
        return (
            <div className='play-list-model' style={!this.props.showPlayList?{display:'none'}:{}} ref="scroll">
                <div className="masker" onClick={this.hidden}></div>
                <div className="play-list">
                    <div className="list-title">
                        <div className="title">这是标题</div>
                        <div className="delete" onClick={this.deleteAll}></div>
                    </div>
                    <div className="list-box" onTouchMove={this.touchMove} >
                        {list.length === 0?<div className="no-song">{this.state.noDataMsg}</div>:list.map((item,index)=>{
                                return <div  className="list-item" key={'play-item' + index} onClick={this.play.bind(this,item)}>
                                    {currentSong.songid == item.songid?<div className="playing"></div>:''}
                                    <div className="content">
                                        <span className="song-name">{item.songname}</span>
                                        <span className="singer-name">{item.singer.map(i=>{return i.name + ' '})}-{item.songorig}</span>
                                    </div>
                                    <span className="delete" onClick={this.deleteOne.bind(this,item)}>X</span>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state,props)=>{
    return Object.assign(state,props)
})(PlayList)