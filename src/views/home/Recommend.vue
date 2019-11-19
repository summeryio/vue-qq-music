<template>
    <div class="card card-recommend mod_slider_box">
        <h3 class="types-title">
            <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags" @select="changeTag" :mark="mark">
            <swiperSlide v-for="(slide, i) in playlists" :key="i">
                <ul class="mod_playlist_box">
                    <li v-for="item in slide" :key="item.id">
                        <div class="wrapper">
                            <a href="/" class="pic mod_cover">
                                <img v-lazy="item.coverImgUrl + '?param=300y300'" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;" alt="谢谢你们，NICO Touches the Walls">
                                <i class="mask mod_mask"></i>
                                <i class="play mod_icon_play"></i>
                            </a>
                            <div class="intro">
                                <a href="/" class="name">{{item.name}}</a>
                                <p class="count">播放量：{{formatCount(item.playCount)}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </swiperSlide>
        </Slider>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getHomePlaylist, getHomePlaylistTag} from '@/assets/js/api'
import {spliceArray, formatCount} from '@/assets/js/util'
import Slider from './Slider'

export default {
    components: {
        swiper,
        swiperSlide,
        Slider
    },
    data () {
        return {
            playlists: [],
            tags: [],
            mark: 'recommend'
        }
    },
    mounted() {
        getHomePlaylistTag().then(res => {
            this.tags = res.tags.slice(0, 5)
            this.tags.unshift({name: '全部'})
        })

        this.getPlaylist('全部', 0)
    },
    methods: {
        getPlaylist(tag, index, swiper) {
            getHomePlaylist(tag).then(res => {
                this.playlists = spliceArray(res.playlists, 5)
            })
        },
        formatCount(count) {
            return formatCount(count)
        },
        changeTag(tag, index) { // 切换tag
            this.getPlaylist(tag, index)
        }
    }
}
</script>
