import React from "react";
import "./playerBar.less";
import "../../styles/icons.less";
import {connect} from "react-redux";
import {changeSongStatus,setShowPlayList} from "../../redux/actions";
import common from '../../common'

class PlayerBar extends React.Component {
    play() {
        console.log('init',this.props.audio.error);
        if (this.props.currentSong.isPlaying) {
            this.props.audio.pause();
            this.props.dispatch(changeSongStatus(false))
        } else {
            this.props.audio.play();
            this.props.dispatch(changeSongStatus(true))
        }
    }
    openMenu=()=> {
        console.log('openMenu')
        this.props.dispatch(setShowPlayList(true));
    }

    goPage() {
        this.props.history.push('/player');
    }

    render() {
        let song = this.props.currentSong,
            albumImg = common.spliceAlbumUrl(song.albumid)
        return (
            <div className="player-bar" style={{display:this.props.showPlayBar?'flex':'none'}}>
                <img className="song-img" src={albumImg} alt="" onClick={() => {
                    this.goPage()
                }}/>
                <div className="song-info">
                    <span className="song-name">{song.songname}</span>
                    <span className="song-author">{song.singer.map(item=>{return item.name + ' '})}</span>
                </div>
                <div className={`player-button ${this.props.currentSong.isPlaying ? 'pause' : 'play'}`} onClick={() => {
                    this.play()
                }}></div>
                <div className="menu-icon" onClick={this.openMenu}></div>
            </div>
        )
    }
}

export default connect((state, props) => {
    return Object.assign(state, props)
})(PlayerBar)