import reducer from './reducer'
import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {getList,getFailArmy,getFailArmyInfo} from './asyncAction'

import createHistory  from 'history/createBrowserHistory'

import albumImg from '../images/album/2.jpg'
import again from '../static/YUI-again.mp3'
import GLORIA from '../static/YUI-GLORIA.mp3'
import albumImg2 from '../images/album/1.jpg'


const defaultStore = {
    currentSong:{
        songname:'霍元甲',
        author:'周杰伦',
        singer:[{
            name:'周杰伦'
        }],
        albumid:14536,
        albumImg:albumImg2,
        songUrl:'',
        lyrics:'',
        id:0,
        interval:278,
        percent:0,
        isPlaying: false,
        songorig:'霍元甲',
        songmid:'002HeqcH2GMiOL'
    },
    // currentSongIndex:0,
    songList:[{
        songname:'again',
        singer:[{
            name:'YUI'
        }],
        albumid:10386,
        author:'YUI',
        albumImg:albumImg,
        songUrl:again,
        lyrics:'',
        id:1,
        interval:257,
        percent:0,
        isPlaying: false,
        songorig:'《钢之炼金术师》主题曲',
        songmid:'001myQ3z0O0lyT'
    },{
        songname:'GLORIA',
        singer:[{
            name:'YUI'
        }],
        albumid:10386,
        author:'YUI',
        albumImg:albumImg,
        songUrl:GLORIA,
        lyrics:'',
        id:2,
        interval:257,
        percent:0,
        isPlaying: false,
        songorig:'GLORIA',
        songmid:'001myQ3z0O0lyT'
    }],
    // songListTitle:'歌单标题',
    // FailArmy:[],
    failArmyInfo:{},
    searchList:[],
    showPlayList: false,
    showPlayBar:true,
    playMode:'LIST_CYCLE'//列表循环 LIST_CYCLE，随机RANDOM，单曲循环SINGLE_CYCLE
};
defaultStore.songList.unshift(defaultStore.currentSong);

let combine = combineReducers(reducer);

const store = createStore(combine,defaultStore,applyMiddleware(thunk));

let unlistenstore = store.subscribe(()=>{
    console.log(store.getStates())
})
unlistenstore();

// store.dispatch(getList());
// store.dispatch(getFailArmy());
// store.dispatch(getFailArmyInfo());
console.log(store.getState())

//用这玩意儿来管理路由更好哦
const history = createHistory();

const location = history.location;

const unlisten = history.listen((location,action)=>{
    //这里应该是拿来做路由钩子的差不多的作用
    console.log(action,location.pathname,location.state);
})

unlisten();
export {store,history};