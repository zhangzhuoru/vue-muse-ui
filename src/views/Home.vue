<template>
  <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Header msg="Welcome to Your Vue.js App"></Header>
    <Main msg="Welcome to Your Vue.js App"></Main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
    Main
  }
}
</script>
