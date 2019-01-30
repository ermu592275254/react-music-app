import React from 'react'

class LinkBar extends React.Component {

    render() {
        return (
            <div className="link-bar">
                <span className="link-like"></span>
                <span className="link-download"></span>
                <span className="link-comment"></span>
                <span className="link-more"></span>
            </div>
        )
    }
}

export default LinkBar