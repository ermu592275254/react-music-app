// let url = 'http://i.y.qq.com/s.music/fcgi-bin/search_for_qq_cp?g_tk=938407465&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E4%BD%A0%E8%A6%81%E7%9A%84%E7%88%B1&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1459991037831&jsonpCallback=jsonp4'
// export default function getList(){
//     return fetch(url,{
//         headers:{
//             referrer: 'http://y.qq.com/'
//         }
//     })
// }
import fetchs from '../apis/fetchs'
import {setSearchList,setFailArmy,setFailArmySongList,setSongUrl} from './actions'
import common from '../common'

export const getList = (param)=>{
    return(dispatch,getState) =>{
        fetchs.searchSong(param).then(res=>{
            let data = JSON.parse(res.substring(9,res.length-1))
            dispatch(setSearchList(data.data.song.list))
        }).catch((e)=>{
            console.log(e)
        })
    }
}

export const getFailArmy = (param)=>{
    return(dispatch,getState) =>{
        fetchs.getFailArmy(param).then(res =>{
            let data = JSON.parse(res.substring(18,res.length-1))
            dispatch(setFailArmy(data.data.list));
        })
    }
}
//{disstid: '6509314639'}
export const getFailArmySongList = (param)=>{
    return(dispatch,getState) =>{
        fetchs.getFailArmyInfo(param).then(res =>{
            let data = JSON.parse(res.substring(13,res.length-1))
            console.log(data);
            dispatch(setFailArmySongList(data.cdlist[0].songlist));
        })
    }
}

export const getSongToken =(songmid)=>{
    return(dispatch,getState) =>{
        fetchs.getSongToken({songmid}).then(res =>{
            let token = JSON.parse(res).data.items[0].vkey,
                songUrl = common.spliceSongUrl(songmid,token)
            dispatch(setSongUrl(songUrl))
        })
    }
}



