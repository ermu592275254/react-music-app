import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../styles/base.less";
import {history,store} from '../redux/index'
//导入页面
import Home from "../pages/home/Home";
import Mine from "../pages/mine/Mine";
import Player from "../pages/player/Player";
import Search from '../pages/search/Search'
import AudioMode from '../components/audioMode/AudioMode'
import PlayList from '../components/playList/PlayList'
import DissInfo from '../pages/dissInfo/DissInfo'
import PlayerBar from '../components/playerBar/PlayerBar'


export default () => {
    return (
        <Router>
            <div className="route-view">
                {/*<div className="link-tab">*/}
                    {/*<Link to="/">Home</Link>*/}
                    {/*<Link to="/mine">Mine</Link>*/}
                    {/*<Link to="/player">Player</Link>*/}
                {/*</div>*/}
                <Route path="/" exact component={Home}></Route>
                <Route path="/mine" component={Mine}></Route>
                <Route path="/player" component={Player}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/dissInfo" component={DissInfo}></Route>
                <PlayerBar/>
                <AudioMode />
                <PlayList/>
            </div>
        </Router>
    )
};