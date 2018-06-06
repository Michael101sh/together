<template>
    <div v-on:click="home">
        <p class="cursor container" v-on:click="home" style="color:blue;">לדף הבית</p>
        <img src="/static/home.png" class="homeImg" v-on:click="home">
    </div>
</template>

<script>
    import { store } from '../store.js';

    export default {
        name: 'home-nav',
        data () {
            return {
                isPsyc: false
            }
        },
        methods:{
            userType() {
                let type = store.state.user.isPsychologist;
                if(type) {
                    this.isPsyc = type;
                }
            },
            home() {
                this.userType();
                if (this.isPsyc) {
                    location.href = '#/psyHome'
                } else {
                    location.href = '#/home'
                }
            },
        }
    }
</script>

<style scoped>
    div {
        width: 70px;
        height: 70px;
        margin: auto;
    }

    p.cursor {
        cursor: pointer;
    }

    img.homeImg {
        width: 45px;
        height: 45px;
        cursor: pointer;
    }
</style>

