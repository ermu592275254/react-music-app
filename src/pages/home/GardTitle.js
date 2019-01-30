import React from 'react'

class GardTitle extends React.Component{
    render(){
        return(
            <div className="gard-title">
                <p>{this.props.title}</p>
                <span className="read-more">更多>></span>
            </div>
        )
    }
}

export default GardTitle