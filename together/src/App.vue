<template>
  <div id="app">
      <br>
  <router-view></router-view>
  </div>

</template>

<script>
    import Rampup from './components/Rampup.vue'
    import Home from './components/Home.vue'
    import PsyHome from './components/PsyHome.vue'
    import Telling from './components/Telling.vue'
    import Forum from './components/Forum.vue'
    import PrivateMessages from './components/PrivateMessages.vue'
    import Chat from './components/Chat.vue'
    import { store } from './store.js';

    export default {
      name: 'app',
      components: {
        Rampup, Home, PsyHome, Telling, Forum, PrivateMessages, Chat
        },
        data () {
            return {
                store: store,
            }
        }
    }
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

</style>
