<template>
  <div class="hello">
    <h3>vuex mutations:</h3>
    <p>count: {{$store.state.count}}</p>
    <button @click="handleAdd(100)">+++</button>
    <button @click="handleReduce(100)">---</button>

    <h3>vuex action 异步操作</h3>
    <button @click="handleActionAdd(1000)">异步++</button>

    <h3>vuex getter:</h3>
    <p>{{$store.getters.getterCount}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data: function () {
    return {}
  },
  methods: {
    handleAdd(n) {
      this.$store.commit('mutationAddCount', n)
    },
    handleReduce(n) {
      this.$store.commit('mutationReduceCount', n)
    },

    // action
    handleActionAdd(n) {
      this.$store.dispatch('actionAddCount', n)
    },

    // getter
    /* getterCount() {
      return this.$store.getters.getterCount
    } */
  },
  computed: {},
  mounted() {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
