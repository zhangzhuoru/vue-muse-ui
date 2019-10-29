<template>
  <div class="main">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: 'send'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    padding: 64px 0 0 280px ;
  }
.demo-list-wrap {
  width: 100%;
  height: 100%;
  max-width: 280px;
}
</style>
