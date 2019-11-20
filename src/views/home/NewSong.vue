<template>
    <div class="card card-newsong mod_slider_box">
        <h3 class="types-title">
            <span class="tit-icon icon-skill-l tit-icon-l"></span><em>新</em>／<em>歌</em>／<em>首</em>／<em>发</em><span class="tit-icon icon-skill-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags"  :mark="mark">
            <swiperSlide v-for="(slide, i) in newsongs" :key="i">
                <el-row class="newsong-list">
                    <el-col class="item" :span="8" v-for="item in slide" :key="item.id">
                        <div class="wrapper">
                            <a href="/" class="pic mod_cover">
                                <img v-lazy="item.album.blurPicUrl + '?param=150y150'" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;" alt="">
                                <i class="mask mod_mask"></i>
                                <i class="play mod_icon_play"></i>
                            </a>
                            <h6 class="name"><a href="/">{{item.name}}</a></h6>
                            <SingerName :artists="item.artists"></SingerName>
                            <p class="time">02:58</p>
                        </div>
                    </el-col>
                </el-row>
            </swiperSlide>
        </Slider>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getNewSong} from '@/assets/js/api'
import {formatCount, spliceArray} from '@/assets/js/util'
import SingerName from '@/components/SingerName'
import Slider from './Slider'

export default {
    components: {
        swiper,
        swiperSlide,
        Slider,
        SingerName
    },
    data () {
        return {
            newsongs: [],
            tags: [],
            mark: 'newsong'
        }
    },
    mounted() {
        getNewSong().then(res => {
            // console.log(res.data.splice(0, 20));
            this.newsongs = spliceArray(res.data.splice(0, 36), 9)
        })
    },
    methods: {
    }
}
</script>
