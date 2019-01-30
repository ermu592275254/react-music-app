/**
 * 定义action对应的事件
 */



//audio组件
let audio = (state = {}, action) => {
    switch (action.type) {
        case'INIT_AUDIO':
            return action.audio
        default:
            return state
    }
}

//currentSong
let currentSong = (state = {}, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'PLAY_SONG':
            if(state.songid == action.song.songid){
                console.log('id is both')
                return state;
            }
            stateCopy = action.song;
            return stateCopy;
        case 'PROGRESS_MOVE':
            stateCopy.percent = action.percent;
            return stateCopy;
        case 'CHANGE_SONG_STATUS':
            stateCopy.isPlaying = action.status;
            return stateCopy;
        case 'CHANGE_PERCENT':
            stateCopy.percent = action.percent;
            return stateCopy;
        case'SET_SONG_URL':
            stateCopy.songUrl = action.songUrl;
            return stateCopy;
        default:
            return state;
    }
}

//songList
let songList = (state = [], action) => {
    let tempState = [...state];
    switch (action.type) {
        // todo 添加歌曲的位置、添加之后当前歌曲改为添加的歌曲
        case'ADD_SONG_TO_PLAY_LIST':
            return [
                ...state,
                action.song
            ]
        case'REPLACE_PLAY_LIST':
            return action.list;
        case'DELETE_SONG_FROM_PLAY_LIST':
            let deleteIndex = state.findIndex(function (item, index) {
                return item.id === action.id
            });
            tempState.splice(deleteIndex, 1);
            return tempState;
        case'DELETE_ALL':
            return [];
        default:
            return state;
    }
}


//playMode
let playMode = (state = '', action) => {
    switch (action.type) {
        case'CHANGE_PLAY_MODE':
            return action.mode;
        default:
            return state;
    }
}

//searchList
let searchList = (state = [], action) => {
    switch (action.type) {
        case'SET_SEARCH_list':
            return action.list;
        default:
            return state;
    }
}


let failArmy = (state = [], action) => {
    switch (action.type) {
        case'SET_FAIL_ARMY':
            return action.list
        default:
            return state;
    }
}

let failArmyInfo = (state = [], action) => {
    let tempState = {...state}
    switch (action.type) {
        case'SET_FAIL_ARMY_INFO':
            return action.info
        case'SET_FAIL_ARMY_SONG_LIST':
            tempState.songList = action.list;
            console.log(tempState);
            return tempState;
        default:
            return state;
    }
}

let showPlayList = (state = false, action) => {
    switch (action.type) {
        case'SET_SHOW_PLAY_LIST':
            console.log(action.isShow)
            return action.isShow;
        default:
            return state;
    }
}

let showPlayBar = (state = true, action) => {
    switch (action.type) {
        case'SET_SHOW_PLAY_BAR':
            console.log(action.isShow);
            return action.isShow;
        default:
            return state
    }
}

// let songListTitle = (state, action) => {
//     switch (action.type) {
//         case'SET_SONG_LIST_TITLE':
//             return action.text;
//         default:
//             return state;
//     }
// }


export default {
    audio,
    currentSong,
    songList,
    playMode,
    searchList,
    failArmy,
    failArmyInfo,
    showPlayList,
    showPlayBar,
}