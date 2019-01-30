import React from "react";
import {history} from "../../redux/index";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {getFailArmySongList} from '../../redux/asyncAction'
import {setFailArmyInfo} from '../../redux/actions'

class GardItem extends React.Component {
    // fixme 这里地址改了 但是页面并没有跳转
    goInfo = () => {
        this.props.dispatch(setFailArmyInfo(this.props.data))
        this.props.dispatch(getFailArmySongList({disstid:this.props.data.dissid}))
        // history.push('/dissInfo', {...this.props.data})
    }

    render() {
        return (
            <div className="gard-item" onClick={this.goInfo}>
                <Link to={{pathname: '/dissInfo', ...this.props.data}}>
                    <div className="pic-box">
                        <img src={this.props.data.imgurl} alt=""/>
                    </div>
                    <p className="pic-message">{this.props.data.dissname}</p>
                </Link>
            </div>
        )
    }
}

export default connect((state,props)=>{
    return Object.assign(state,props)
})(GardItem)