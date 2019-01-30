import React from "react";
import {changeSongStatus, changePlayMode, nextSong, lastSong,playSong,setShowPlayList} from "../../redux/actions";
import {connect} from "react-redux";
import common from '../../common'

class PlayCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modeList: ['LIST_CYCLE', 'RANDOM', 'SINGLE_CYCLE'],
            showMenu: false
        }
    }

    play() {
        console.log(this.props.audio.error)
        if (this.props.currentSong.isPlaying) {
            this.props.audio.$pause();
        } else {
            this.props.audio.$play();
        }
    }

    changeMode() {
        let index = this.state.modeList.indexOf(this.props.playMode),
            newMode = this.state.modeList[Number(index) + 1] || this.state.modeList[0];
        this.props.dispatch(changePlayMode(newMode));
    }

    lastSong() {
        let song = common.changeSong(this.props.songList,this.props.currentSong.songid,this.props.playMode,false,false);
        this.props.dispatch(playSong(song));
    }

    nextSong() {
        let song = common.changeSong(this.props.songList,this.props.currentSong.songid,this.props.playMode,true,false);
        this.props.dispatch(playSong(song));
    }

    openMenu =()=> {
        this.props.dispatch(setShowPlayList(true))
    }

    render() {
        let modeClass = `base play-mode `;
        switch (this.props.playMode) {
            case'LIST_CYCLE':
                modeClass += 'loop-list';
                break;
            case'SINGLE_CYCLE':
                modeClass += 'loop-one';
                break;
            default:
                modeClass += 'random';
        }
        return (
            <div className="play-ctrl">
                <span className={modeClass} onClick={() => {
                    this.changeMode()
                }}></span>
                <span className="base last-icon" onClick={() => {
                    this.lastSong()
                }}></span>
                <span className={`base play-icon ${this.props.currentSong.isPlaying ? 'pause' : 'play'}`} onClick={() => {
                    this.play()
                }}></span>
                <span className="base next-icon" onClick={() => {
                    this.nextSong()
                }}></span>
                <span className="base menu-icon" onClick={this.openMenu}></span>
            </div>
        )
    }
}

export default connect((state, props) => {
    return Object.assign(state, props)
})(PlayCtrl)