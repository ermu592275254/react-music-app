import React from 'react'

class DissCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="diss-card">
                <div className="diss-img">
                    <div className="listen-count">{this.props.listennum}</div>
                    <img src={this.props.imgurl} alt=""/>
                </div>
                <div className="diss-content">
                    <p className="diss-title">{this.props.dissname}</p>
                    <p className="diss-author">{this.props.creator &&this.props.creator.name}</p>
                </div>
            </div>
        )
    }
}

export default DissCard