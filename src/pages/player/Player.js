import React from "react";
import {connect} from "react-redux";
import "../../styles/player.less";
import Disc from "./Disc";
import LinkBar from './LinkBar'
import PlayCtrl from './PlayCtrl'
import PlayerHeader from './PlayerHeader'
import ProgressBar from './ProgressBar'
import {setShowPlayBar} from '../../redux/actions'
import {history} from '../../redux/index'
import common from '../../common'



class Player extends React.Component {
    componentWillMount(){
        console.log('init')
        this.props.dispatch(setShowPlayBar(false));
    }
    back(){
        history.go(-1);
        this.props.dispatch(setShowPlayBar(true));
    }
    render() {
        let albumImg =common.spliceAlbumUrl(this.props.albumid);
        let bgImg = {
            backgroundImage: `url("${albumImg}")`
        }
        return (
            <div className="player-page">
                <div className="bg-filter" style={bgImg}></div>
                {/*<Header bgColor="transparent" title={this.props.name}/>*/}
                <PlayerHeader name={this.props.songname} author={this.props.singer} back={this.back.bind(this)}/>
                <div className="tab-page">
                    <Disc isPlaying={this.props.isPlaying} albumImg={albumImg}/>
                </div>
                <LinkBar/>
                <ProgressBar percent={this.props.percent} interval={this.props.interval}/>
                <PlayCtrl/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return state.currentSong
})(Player);