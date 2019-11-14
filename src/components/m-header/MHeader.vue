<template>
    <div id="m_header">
        <div class="section-inner">
            <el-row>
                <el-col :span="4">
                    <h1 id="logo">
                        <router-link to="/"><img src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1" alt="QQ音乐"></router-link>
                    </h1>
                </el-col>
                <el-col :span="14" :offset="1">
                    <ul class="nav">
                        <li><router-link to="/">音乐馆</router-link></li>
                        <li><router-link to="/singer">歌手</router-link></li>
                        <li><router-link to="/album">新碟</router-link></li>
                        <li><router-link to="/rank">排行榜</router-link></li>
                        <li><router-link to="/playlist">分类歌单</router-link></li>
                        <li><router-link to="/radio">电台</router-link></li>
                        <li><router-link to="/mv">MV</router-link></li>
                    </ul>
                </el-col>
                <el-col :span="5">
                    <div class="search">
                        <el-input
                            placeholder="搜索音乐、MV、歌单、用户"
                            suffix-icon="el-icon-search"
                            v-model="headerInput"
                        >
                        </el-input>
                        <SearchRecommend></SearchRecommend>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

import SearchRecommend from './SearchRecomment'

export default {
    components: {
        SearchRecommend
    },
    data () {
        return {
        }
    },
    mounted() {
    },
    methods: {},
}
</script>