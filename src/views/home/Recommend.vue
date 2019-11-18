<template>
    <div class="card card-recommend mod_slider_box">
        <div class="section-inner">
            <h3 class="types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <ul class="index-tab">
                <li v-for="(tag, i) in tags" :class="{active: i === curTag}" @click="getPlaylist(tag.name, i)">{{tag.name}}</li>
            </ul>
            <div class="mod_swiper_container">
                <!-- v-if 解决数据加载效果不对的问题 -->
                <swiper :options="swiperOption"  ref="mySwiper">
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
                </swiper>
                <div class="swiper-pagination mod_swiper_pagination"  slot="pagination"></div>
            </div>
        </div>
        <div class="mod_swiper_action">
            <div class="item left">
                <a href="javascript: void(0);" class="swiper_action-prev"><i></i></a>
            </div>
            <div class="item right">
                <a href="javascript: void(0);" class="swiper_action-next"><i></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getHomePlaylist, getHomePlaylistTag} from '@/assets/js/api'
import {spliceArray, formatCount} from '@/assets/js/util'

export default {
    components: {
        swiper,
        swiperSlide
    },
    data () {
        return {
            swiperOption:{
                slidesPerView: 'auto',
                centeredSlides:true,
                spaceBetween: 0,
                loop:false,
                speed:600,
                navigation: {
                    nextEl: '.swiper_action-next',
                    prevEl: '.swiper_action-prev',
                },
                pagination: {
                    el: '.mod_swiper_pagination',
                    clickable: true,
                    bulletClass: 'bullet',
                    bulletActiveClass: 'bullet-active',
                    renderBullet: function (index, className) {
                        return '<span class="'+className+'"><i></i></span>';
                    },
                },
                //修改swiper自己或子元素时，自动初始化swiper
                observer:true,
                observeParents:true,
            },
            playlists: [],
            tags: [],
            curTag: 0
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
        getPlaylist(tag, index) {
            this.curTag = index

            getHomePlaylist(tag).then(res => {
                this.playlists = spliceArray(res.playlists, 5)
                this.swiper.slideTo(0, false) // 切换tag后，跳到第一个slide
            })
        },
        formatCount(count) {
            return formatCount(count)
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
}
</script>
