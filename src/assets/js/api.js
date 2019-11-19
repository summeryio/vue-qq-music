import {get, post} from './http'
import {getRandomNum} from './util'

export const getBanner = () => get('/banner')


// 顶部导航搜索框
export const getSearchHot = () => get('/search/hot/detail')
export const getSearchSuggest = (val) => get(`/search/suggest?keywords=${val}`)


// 首页
/* export const getHomePlaylist = (tag) => {
    let arr = [10, 15, 20]
    let n = arr[getRandomNum(0, arr.length - 1)]
    
    return get(`/top/playlist?limit=${n}&cat=${tag}`)
} */
export const getHomePlaylist = (tag) => get(`/top/playlist?limit=${15}&cat=${tag}`)
export const getHomePlaylistTag = () => get('/playlist/hot')