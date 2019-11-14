<template>
    <div class="home">
        home
    </div>
</template>

<script>
import MHeader from '@/components/m-header/MHeader'
import {getBanner} from '@/assets/js/api'

export default {
    components: {
    },
    data () {
        return {
        }
    },
    mounted() {
        getBanner().then((res) => {
            console.log(res);
        })
    },
    methods: {},
}
</script>
