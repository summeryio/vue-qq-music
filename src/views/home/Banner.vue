<template>
    <div class="card card-banner mod_slider_box">
        <h3 class="types-title">
            <span class="tit-icon icon-art-l tit-icon-l"></span><em>精</em>／<em>彩</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-art-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags" :mark="mark">
            <swiperSlide v-for="(slide, i) in banners" :key="i">
                <el-row class="banner-list">
                    <el-col class="item" :span="12" v-for="item in slide" :key="item.id">
                        <div class="wrapper">
                            <a href="/" class="pic">
                                <img v-lazy="item.imageUrl">
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </swiperSlide>
        </Slider>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getHomeBanner} from '@/assets/js/api'
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
            banners: [],
            tags: [],
            mark: 'banner'
        }
    },
    mounted() {
        this._getHomeBanner()
    },
    methods: {
        _getHomeBanner() {
            getHomeBanner().then(res => {
                this.banners = spliceArray(res.banners, 2)
            })
        }
    }
}
</script>
