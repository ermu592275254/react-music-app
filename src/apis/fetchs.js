import apis from "./apis";


const domain = 'http://y.qq.com/';

// 封装get post请求
function fetchGet(url, params, option = {}) {
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    option.headers = {
        ...option.headers,
        referrer: domain
    };
    return fetch(url, {
        methods: 'GET',
        ...option,
    }).then(res => {
        return res.text()
    })
}
function fetchPost(url, params, option = {}) {
    option.headers = {
        ...option.headers,
        referrer: domain
    };
    return fetch(url, {
        methods: 'POST',
        ...option,
    })
}
//
let fetchs = {
    /**
     * 获取歌单列表
     * @param param  ｛categoryId：‘’｝
     * @param option
     * @returns {*}
     */
    getFailArmy: (param, option) => {
        param = {
            ...param,
            categoryId: '10000000',
            sortId: '1',
            sin: '0',
            ein: '49',
            format: 'jsonp',
            g_tk: '5381',
            loginUin: '0',
            format: 'jsonp',
            hostUin: '0',
            inCharset: 'GB2312',
            outCharset: 'utf-8',
            notice: '0',
            platform: 'yqq',
            jsonpCallback: 'MusicJsonCallback',
            needNewCode: '0'
        }
        return fetchGet(apis.getFailArmy, param, option)
    },
    /**
     * 获取歌单详情
     * @param param  { dissId:''}
     * @param option
     */
    getFailArmyInfo: (param, option) => {
        param = {
            ...param,
            type: '1',
            json: '1',
            utf8: '1',
            onlysong: '0',
            nosign: '1',
            // disstid: '6509314639',
            g_tk: '5381',
            loginUin: '0',
            hostUin: '0',
            format: 'jsonp',
            inCharset: 'GB2312',
            outCharset: 'utf-8',
            notice: '0',
            platform: 'yqq',
            needNewCode: '0',
            jsonpCallback: 'jsonCallback'
        }
        return fetchGet(apis.getFailArmyInfo, param, option)
    },
    /**
     * 搜索歌曲
     * @param param  {w="你要的爱"}
     * @param option
     * @returns {*}
     */
    searchSong: (param, option) => {
        param = {
            ...param,
            aggr: '1',
            cr: '1',
            flag_qc: '0',
            p: '1',
            n: '30'
        }
        return fetchGet(apis.searchSong, param, option)
    },
    /**
     * 获取歌曲播放token
     * @param param  {songmid:''}
     * @param option
     */
    getSongToken:(param, option) =>{
        param = {
            ...param,
            format: 'json205361747',
            platform: 'yqq',
            cid: '205361747',
            // songmid: '003lghpv0jfFXG',
            filename: `C400${param.songmid}.m4a`,
            guid: '126548448'
        }
        return fetchGet(apis.getSongToken,param,option);
    }
}
export default fetchs;