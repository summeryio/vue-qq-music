<template>
    <div class="qq_music" id="home">
        <Recommend></Recommend>
        <Album></Album>
    </div>
</template>

<script>
import MHeader from '@/components/m-header/MHeader'
import Recommend from './Recommend'
import Album from './Album'

export default {
    components: {
        Recommend,
        Album
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
