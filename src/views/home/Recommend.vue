<template>
    <div class="card card-recommend">
        <div class="section-inner">
            <h3 class="types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <ul class="index-tab">
                <li class="active">为你推荐</li>
                <li>为你推荐</li>
                <li>为你推荐</li>
                <li>为你推荐</li>
                <li>为你推荐</li>
                <li>为你推荐</li>
            </ul>
            <swiper :options="swiperOption">
                <swiperSlide>
                    <ul class="playlist-box">
                        <li>
                            <a href="/" class="wrapper">
                                <div class="pic">
                                    <img src="//qpic.y.qq.com/music_cover/ibntviciboJuwCoCNK8ibZkjep7ibAibmOb7FEdoTiarWEIIrkSTulAVACEuA/300?n=1" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;" alt="谢谢你们，NICO Touches the Walls">
                                    <i class="mask"></i>
                                    <i class="iconfont icon-play"></i>
                                </div>
                                <div class="intro">
                                    <p class="name">谢谢你们，NICO Touches the Walls</p>
                                    <p class="count">播放量：2.1万</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    
                </swiperSlide>
                <swiperSlide>111</swiperSlide>
                <swiperSlide>111</swiperSlide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
                speed:600, //config参数同swiper4,与官网一致
            }
        }
    },
    mounted() {
        
    },
    methods: {},
}
</script>
