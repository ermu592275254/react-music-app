import React from 'react'
import '../../styles/search.less'
import common from '../../common'

class SearchHistory extends React.Component {
    constructor(props){
        super(props);
        // this.chooseHistory = this.chooseHistory.bind(this)
    }
    // chooseHistory(value){
    //     console.log(value)
    //     // this.props.chooseHistory(value)
    // }
    chooseHistory =(value)=>{
        console.log(value);
        this.props.chooseHistory(value)
    }
    render() {
        return (
            <div className="search-history">
                <p className="title">搜索历史</p>
                {this.props.list.map((item,index)=>{
                    return <button className="history-btn" key={'historyBtn' + index}
                                   onClick={this.chooseHistory.bind(this,item)}>{item}</button>
                })}
            </div>
        )
    }
}

export default SearchHistory