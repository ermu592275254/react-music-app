/**
 *  一些可复用的公共函数
 */

/**
 * 封装storage
 * @type {{get: ((key?, isLocalStorage?)), set: ((key?, value?, isLocalStorage?)), remove: ((key?, isLocalStorage?)), clear: ((isLocalStorage?))}}
 */
let storage = {
    get(key, isLocalStorage = false) {
        if (!key) return null
        let _storage = isLocalStorage ? localStorage : sessionStorage,
            props = key.split('.'),
            k = props.shift(),
            itemStr = _storage.getItem(k),
            itemObj = null
        try {
            itemObj = JSON.parse(itemStr)
            if (typeof itemObj != 'object')
                throw ('Not an object!')
        } catch (e) {
            return props.length ? null : itemStr
        }
        while (props.length && itemObj) {
            itemObj = itemObj[props.shift()]
        }
        return itemObj
    },
    set(key, value, isLocalStorage = false) {
        if (!key) return
        let _storage = isLocalStorage ? localStorage : sessionStorage,
            props = key.split('.'),
            k = props.shift()
        if (!props.length) {
            if (typeof value === 'object') value = JSON.stringify(value)
            _storage.setItem(k, value)
            return
        }
        let itemStr = _storage.getItem(k),
            itemObj = null
        if (itemStr) {
            try {
                itemObj = JSON.parse(itemStr)
                if (typeof itemObj != 'object')
                    throw ('Not an object!')
            } catch (e) {
                throw ('storage.set: key ' + k + ' 已被占用并且不是一个对象，无法为其设置属性值')
            }
        }
        let copy = itemObj = itemObj || {}
        while (props.length > 1) {
            let p = props.shift()
            copy[p] = copy[p] || {}
            copy = copy[p]
        }
        copy[props[0]] = value
        _storage.setItem(k, JSON.stringify(itemObj))
    },
    remove(key, isLocalStorage = false) {
        if (!key) return
        let _storage = isLocalStorage ? localStorage : sessionStorage
        _storage.removeItem(key)
    },
    clear(isLocalStorage = false) {
        let _storage = isLocalStorage ? localStorage : sessionStorage
        _storage.clear()
    }
}

/**
 *  用于计算返回下一首要播放的歌曲
 * @param list
 * @param id
 * @param playMode 列表循环 LIST_CYCLE，随机RANDOM，单曲循环SINGLE_CYCLE
 * @param isNext
 * @param isAuto
 * @returns {{}}
 */
let changeSong = (list, id, playMode, isNext, isAuto) => {
    let currentIndex = list.findIndex(item => {
        return item.id === id
    })
    let newSong = {};

    function listCycle() {
        if (isNext) {
            newSong = list[Number(currentIndex) + 1] || list[0];
        } else {
            newSong = list[Number(currentIndex) - 1] || list[list.length - 1];
        }
    }

    switch (playMode) {
        case'RANDOM':
            let index = parseInt(Math.random() * list.length)
        // function random(length) {
        //     return parseInt(Math.random() * length);
        // }
            newSong = list[index];
            break;
        case'SINGLE_CYCLE':
            if (isAuto) {
                newSong = list[currentIndex];
            } else {
                listCycle()
            }
            break;
        case'LIST_CYCLE':
        default:
            listCycle()
            break;
    }
    return newSong;
}

/**
 * 拼接歌曲封面url
 * @param id  封面id
 * @returns {string}
 */
let spliceAlbumUrl = (id) => {
    id = id.toString();
    let subId = id.substring(id.length - 2, id.length).replace(/^0/, '');
    return `http://imgcache.qq.com/music/photo/album_300/${subId}/300_albumpic_${id}_0.jpg`
}

/**
 * 拼接播放地址
 * @param id  歌曲id
 * @param vkey 获取到的token
 * @returns {string}
 */
let spliceSongUrl = (id, vkey) => {
    return `http://ws.stream.qqmusic.qq.com/C400${id}.m4a?fromtag=0&guid=126548448&vkey=${vkey}`
}

let common = {
    storage,
    changeSong,
    spliceAlbumUrl,
    spliceSongUrl
}
export default common
