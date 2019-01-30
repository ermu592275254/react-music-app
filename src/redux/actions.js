/**
 * 此处定义用户动作
 */
export const initAudio = (audio) =>{
    return {
        type:'INIT_AUDIO',
        audio
    }
}

export const changeSongStatus = (status)=>{
    return {
        type:'CHANGE_SONG_STATUS',
        status
    }
}

export const changePercent = (percent) =>{
    return {
        type: 'CHANGE_PERCENT',
        percent
    }
}

export const playSong = (song) => {
    song.percent = song.percent || 0;
    return {
        type: 'PLAY_SONG',
        song
    }
}

export const progressMove = (percent) => {
    return {
        type:'PROGRESS_MOVE',
        percent
    }
}

export const replacePlayList = (list) =>{
    return{
        type:'REPLACE_PLAY_LIST',
        list
    }
}

export const addSongToPlayList = (song) => {
    return {
        type: 'ADD_SONG_TO_PLAY_LIST',
        song
    }
}

export const deleteSongFromPlayList = (id) => {
    return {
        type: 'DELETE_SONG_FROM_PLAY_LIST',
        id
    }
}

export const deleteAll = ()=>{
    return {
        type:'DELETE_ALL',
    }
}

export const changePlayMode = (mode) => {
    return {
        type: 'CHANGE_PLAY_MODE',
        mode
    }
}

export const nextSong = (playMode,id) =>{
    return {
        type:'NEXT_SONG',
        playMode,
        id
    }
}

export const lastSong = (playMode,id) =>{
    return {
        type:'LAST_SONG',
        playMode,
        id
    }
}

export const nextSongAuto = (playMode,id) =>{
    return {
        type:'NEXT_SONG_AOTU',
        playMode,
        id
    }
}


export const setSearchList= (list) =>{
    return {
        type:'SET_SEARCH_list',
        list
    }
}

export const setFailArmy= (list) =>{
    return {
        type:'SET_FAIL_ARMY',
        list
    }
}


export const setFailArmyInfo= (info) =>{
    info.songList = info.songList || []
    return {
        type:'SET_FAIL_ARMY_INFO',
        info
    }
}

export const setFailArmySongList= (list) =>{
    return {
        type:'SET_FAIL_ARMY_SONG_LIST',
        list
    }
}



export const setShowPlayList= (isShow) =>{
    return {
        type:'SET_SHOW_PLAY_LIST',
        isShow
    }
}


export const setShowPlayBar= (isShow) =>{
    return {
        type:'SET_SHOW_PLAY_BAR',
        isShow
    }
}


export const setSongListTitle = (text)=>{
    return {
        type:'SET_SONG_LIST_TITLE',
        text
    }
}

export const setSongUrl =(songUrl)=>{
    return {
        type:'SET_SONG_URL',
        songUrl
    }
}
