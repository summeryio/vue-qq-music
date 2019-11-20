<template>
    <div class="qq_music" id="home">
        <Recommend></Recommend>
        <NewSong></NewSong>
        <Album></Album>
    </div>
</template>

<script>
import MHeader from '@/components/m-header/MHeader'
import Recommend from './Recommend'
import Album from './Album'
import NewSong from './NewSong'

export default {
    components: {
        Recommend,
        Album,
        NewSong
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
