<template>
    <div>
        <ul class="index-tab" v-if="tags.length > 0">
            <li 
                v-for="(tag, i) in tags" 
                :class="{active: i === curTag}" 
                @click="changeTag(tag.name, i)"
                :key="i"
            >{{tag.name}}</li>
        </ul>

        <div class="mod_swiper_container">
            <!-- v-if 解决数据加载效果不对的问题 -->
            <swiper :options="swiperOption"  ref="mySwiper">
                <slot></slot>
            </swiper>
            <div class="swiper-pagination mod_swiper_pagination"  slot="pagination"></div>
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
    props: {
        tags: {
            type: Array,
            default: []
        }
    },
    data() {
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
            curTag: 0
        }
    },
    methods: {
        changeTag(tag, index) {
            this.curTag = index
            this.$emit('select', tag, index)
        }
    }
}
</script>