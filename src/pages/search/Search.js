import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import List from "../../components/list/List";
import "../../styles/search.less";
import common from "../../common";
import SearchHistory from "./SearchHistory";
import {connect} from "react-redux";
import {playSong} from '../../redux/actions'
import {getList} from "../../redux/asyncAction";


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            historyList: common.storage.get('searchHistory') || [],
            searchTimeOut: null
        }
    }
    chooseHistory = (value)=>{
        console.log(value);
        this.setState({
            inputValue: value
        });
        this.props.dispatch(getList({w: value}))
    }

    // 将搜索内容存在storage，最多存20个
    saveSearchValue=(value) =>{
        let sHistory = common.storage.get('searchHistory') || [];
        if(sHistory.indexOf(value)>-1)return;
        if (sHistory.length > 20) {
            //去掉第一个，在末尾增加一个
            sHistory.shift();
            sHistory.unshift(value)
        } else {
            sHistory.unshift(value);
        }
        common.storage.set('searchHistory', sHistory);
        this.setState({
            historyList: common.storage.get('searchHistory')
        })
    }

    handleChange =(e)=> {
        this.setState({
            inputValue: e.target.value,
        });
        if (this.state.inputValue == '')return;
        clearTimeout(this.state.searchTimeOut);
        this.setState({
            searchTimeOut: setTimeout(() => {
                this.saveSearchValue(this.state.inputValue);
                this.props.dispatch(getList({w: this.state.inputValue}))
            }, 2000)
        });
    }

    clean = () => {
        this.setState({
            inputValue: ''
        })
    }
    // 点击歌曲
    clickSong = (item) => {
        console.log(item);
        this.props.dispatch(playSong(item));
        // 加入到播放列表
        // 获取歌曲信息并播放
        // 跳转到播放页面
    }
    render() {
        return (
            <div className="search-page">
                <SearchBar value={this.state.inputValue} handleChange={this.handleChange} clean={this.clean}/>
                {!this.state.inputValue ?
                    <SearchHistory list={this.state.historyList} chooseHistory={this.chooseHistory}/> : null}
                <div className="result-title">
                    <span>单曲</span>
                    <button>播放全部</button>
                </div>
                <List clickSong={this.clickSong}/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return Object.assign(state, props)
})(Search)