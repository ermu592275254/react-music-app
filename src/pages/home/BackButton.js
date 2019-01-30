import React from 'react'

class BackButton extends React.Component{
    render() {
        return (
            <div className="back-button" onClick={this.props.backFun()}></div>
        )
    }
}

export  default BackButton;