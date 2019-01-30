import React from 'react'

class PlayerHeader extends React.Component {
    render() {
        return (
            <div className="player-header">
                <div className="point"></div>
                <div className="needle"
                     style={!this.props.isPlaying?{ transform: 'rotate(-20deg)'}:{}}
                ></div>
                <div className="back-icon" onClick={this.props.back}></div>
                <div className="content">
                    <p className="title">{this.props.name}</p>
                    <span className="text">{this.props.author.map(item=>{return item.name + ' '})}</span>
                </div>
                <div className="share"></div>
            </div>
        )
    }
}

export default PlayerHeader