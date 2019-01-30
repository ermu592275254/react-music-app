// 获取列表
let apis = {
    searchSong: 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp',
    getFailArmy:'http://i.y.qq.com/s.plcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
    getFailArmyInfo:'http://i.y.qq.com/qzone-music/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    getSongInfo:'',
    getTop100:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923',
    getSongRandom:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472',
    getSongToken:'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg',
}
export default apis;