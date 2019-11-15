import {get, post} from './http'

export const getBanner = () => get('/banner')


// 顶部导航搜索框
export const getSearchHot = () => get('/search/hot/detail')
export const getSearchSuggest = (val) => get(`/search/suggest?keywords=${val}`)