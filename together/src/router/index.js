import Vue from 'vue'
import Router from 'vue-router'
import Rampup from '../components/Rampup.vue'
import Home from '../components/Home.vue'
import Telling from '../components/Telling.vue'
import Forum from '../components/Forum.vue'
import PsyHome from '../components/PsyHome.vue'
import PrivateMessages from '../components/PrivateMessages.vue'
import Chat from '../components/Chat.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rampup',
      component: Rampup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
        path: '/psyHome',
        name: 'PsyHome',
        component: PsyHome
    },
    {
        path: '/telling',
        name: 'Telling',
        component: Telling
    },
    {
        path: '/forum',
        name: 'Forum',
        component: Forum
    },
    {
        path: '/privateMessages',
        name: 'PrivateMessages',
         component: PrivateMessages
     },
     {
         path: '/chat',
         name: 'Chat',
         component: Chat
     }
  ]
})
