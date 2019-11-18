import {get, post} from './http'

export const getBanner = () => get('/banner')


// 顶部导航搜索框
export const getSearchHot = () => get('/search/hot/detail')
export const getSearchSuggest = (val) => get(`/search/suggest?keywords=${val}`)


// 首页
export const getHomePlaylist = (tag) => get(`/top/playlist/highquality?limit=15&cat=${tag}`)
export const getHomePlaylistTag = () => get('/playlist/hot')