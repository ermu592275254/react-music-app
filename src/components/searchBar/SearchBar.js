import React from 'react'
import './searchbar.less'
import {history} from '../../redux/index'
import {getList} from '../../redux/asyncAction'
import {connect} from 'react-redux'
import common from '../../common'

class SearchBar extends React.Component {
    back(){
        history.go(-1);
    }
    clean(){
        this.props.clean()
    }
    render() {
        return (
            <div className="com-search">
                <div className="back" onClick={(e)=>{this.back(e)}}></div>
                <input className="search-input" type="text" value={this.props.value} onChange={(e)=>{this.props.handleChange(e)}}/>
                <div className="clean" onClick={(e)=>{this.clean(e)}}>X</div>
            </div>
        )
    }
}

export default connect((state,props)=>{
    return Object.assign(state,props)
})(SearchBar)