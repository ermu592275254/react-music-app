import React from "react";
import "../../styles/home.less";
import {getFailArmy} from '../../redux/asyncAction'

import Header from "../../components/header/Header";
import ComSwiper from "../../components/swiper/ComSwiper";
import GardsBox from './GardsBox'

//导入banner图
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";

import {connect} from 'react-redux'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: [banner1, banner2, banner3],
            recommendTitle: '推荐歌单',
            newMusicTitle:'最新音乐',
        }
    }
    componentWillMount(){
        this.props.dispatch(getFailArmy())
    }
    render() {
        return (
            <div className="home-page">
                <Header left={<div></div>}/>
                <ComSwiper list={this.state.bannerList}/>
                <GardsBox list={this.props.failArmy} title={this.state.recommendTitle}/>
                {/*<h1 className="title">home page</h1>*/}
                {/*<button onClick={()=>this.props.history.push('/mine')}>跳转到我的</button>*/}
            </div>
        )
    }
}

export  default connect((state,props)=>{
    return Object.assign(state,props)
})(Home);