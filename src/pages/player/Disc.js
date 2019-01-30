import React from 'react'
import {connect} from 'react-redux'

class Disc extends React.Component {
    componentWillReceiveProps(){
        if(this.props.isPlaying){
            this.refs.songImg.style.animationPlayState = 'running';
        } else {
            this.refs.songImg.style.animationPlayState = 'paused';
        }
    }
    render() {
        return (
            <div className="disc">
                <img ref="songImg" src={this.props.albumImg} alt=""/>
            </div>
        )
    }
}

export default Disc