import React from 'react'
import {connect} from 'react-redux'
import {initAudio,changePercent,changeSongStatus,nextSongAuto} from '../../redux/actions'
import {getSongToken} from '../../redux/asyncAction'
import observer from '../../redux/observer'

class AudioMode extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let self = this;
        this.refs.audio.$play =  function(){
            if(self.refs.audio.error){
                return false;
            }
            self.setState({
                playCtrl: true
            })
            self.refs.audio.play();
            self.props.dispatch(changeSongStatus(true))
        }
        this.refs.audio.$pause = function(){
            if(self.refs.audio.error){
                return false;
            }
            self.refs.audio.pause();
            self.props.dispatch(changeSongStatus(false))
        }
        this.props.dispatch(initAudio(this.refs.audio));
        observer.$on('audioPercent',function (data) {
            self.refs.audio.currentTime =  data.percent;
        })
        this.props.dispatch(getSongToken(self.props.songmid))
    }
    //播放结束搞起来
    ended(){
        console.log('is end')
        // this.props.dispatch(changeSongStatus(false));
        // this.props.dispatch(nextSongAuto(this.props.playMode))
    }
    canPlay =()=>{
        console.log('is canplay');
        this.refs.audio.$play();
    }
    error=(e)=>{
        console.error(e)
        this.refs.audio.pause();
        this.props.dispatch(changeSongStatus(false));
    }
    updateTime(event){
        this.props.dispatch(changePercent(event.target.currentTime.toFixed(1)))
    }
    getSongUrl=()=>{
        if(!this.props.songUrl){
            this.props.dispatch(getSongToken(this.props.songmid))
        }
    }
    componentWillUpdate(){
        this.getSongUrl();
    }
    render() {
        return (
            <audio ref="audio"  className="common-audio" volume="50" src={this.props.songUrl}
                   onError={this.error}  onCanPlay={this.canPlay}
                   onTimeUpdate={(e)=>{this.updateTime(e)}} onEnded={(e)=>{this.ended(e)}}></audio>
        )
    }
}
export default connect((state,props)=>{return state.currentSong})(AudioMode)