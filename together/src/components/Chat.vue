<template>
    <div v-show="isInside === true" v-bind="referToRampUp(isInside)">
        <home-nav>
        </home-nav>
        <br><br>
        <ul>
            <li class="design"  v-on:click="privateArea">
                <a href="" v-on:click="privateArea">  <strong>לאזור ההודעות הפרטיות</strong> </a>
                <br>
                <img src="/static/private_messages.png" class="privateArea"
                     v-on:click="privateArea">
            </li>
            <li class="design" style="color:blue;">
                <br>
                <br>
                <a href="" v-on:click="forum"> <strong>לפורום </strong></a>
                <br>
                <img src="/static/forum.png" class="forum" v-on:click="forum">
            </li>
        </ul>

         <br>
        <h2> {{chat.title}} </h2>

        <div class="container chat">
                <div v-for="message in chat.content">
                    <strong> {{message.userNickname}} </strong>
                    {{': ' + message.content}}
                    <br> <br>
                    {{"תאריך: " + message.date}}
                    <hr>
                </div>
                <button v-on:click="showTextBox(chat._id)"
                        v-show="chat.isLocked === false">הוספת תגובה</button>
            </div>
        <br><br><br>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import swal from 'sweetalert2'
    import HomeNav from '../components/HomeNav.vue'

    export default {
        name: 'chat',
        components: {
            HomeNav
        },
        data () {
            return {
                chat: this.getCurrentChat(),
                isInside: store.state.user ? true : false
            }
        },
        methods: {
            getCurrentChat () {
                let id = this.getChatIdFromUrl();
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/data/chat/' + String(id),
                    type:"GET",
                    contentType:"application/json; charset=utf-8",
                    dataType:"json"
                }).then(res => {this.chat = res});
                return {}
            },
            getChatIdFromUrl() {
                let index = (location.hash).indexOf('id=') + 3;
                return location.hash.substring(index);
            },
            date() {
                let date = new Date();
                let fix = '';
                let fix2 = '';
                let minutes = date.getMinutes();
                if (minutes === 0) {
                    fix = '0';
                } else {
                    if (minutes < 10) {
                        fix2 = '0';
                    }
                }
                date =
                    String(date.getDate()) + '/' +
                    String(date.getMonth() + 1) + '/' +
                    String(date.getFullYear()) + '\n' +
                    String(date.getHours()) + ':' +
                    fix2 + String(date.getMinutes()) + fix;
                return date.toString();
            },
            showTextBox(id) {
                this.callText = '';
                this.chatId = id;
                let self = this;
                swal({
                    title: 'שלח תגובה חדשה',
                    input: 'textarea',
                    showCancelButton: true,
                    confirmButtonText: 'שליחה',
                    cancelButtonText: 'ביטול',
                    reverseButtons: true,
                    showLoaderOnConfirm: true,
                    preConfirm: function (text) {
                        return new Promise(function (resolve, reject) {
                            setTimeout(function() {
                                if (text === '') {
                                    reject('אי אפשר לשלוח פנייה ריקה')
                                } else {
                                    resolve()
                                }
                            }, 1000)
                        })
                    },
                    allowOutsideClick: false
                }).then(function (text) {
                    self.sendCall(self.afterPost, text);
                })
            },
            sendCall (callback, callText) {
                let isPsychologist = store.state.user.isPsychologist;
                let nickName = '';
                if (isPsychologist) {
                    nickName = 'הפסיכולוג/ית ' + store.state.user.nickname;
                } else {
                    nickName = store.state.user.nickname;
                }
                let message = {userName: store.state.user.name,
                    userNickname: nickName,
                    content: callText,
                    date: this.date()};
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/addMessage/'
                    + String(this.chatId),
                    type:"PATCH",
                    method: 'patch',
                    data: JSON.stringify
                    ({message: message, _method: "PATCH"}),
                    contentType:"application/json; charset=utf-8",
                    dataType:"json"
                }).done(function (){
                    callback(true);
                }).fail(function () {
                    callback(false)
                });
            },
            afterPost(flag) {
                if (flag) {
                    swal({
                        title: 'התגובה נשלחה בהצלחה',
                        text: '',
                        type: 'success',
                        timer: 2000
                    });
                    this.getCurrentChat();
                } else {
                    swal({
                        title: 'שליחת התגובה לא הצליחה, יש לנסות שוב',
                        text: '',
                        type: 'error',
                        timer: 2000
                    });
                }
            },
            forum () {
                location.href = '#/forum'
            },
            privateArea () {
                location.href = '#/privateMessages'
            },
        }}
</script>

<style scoped>
    h2 {
        color: green;
        font-style: italic;
        display: inline-block;
        text-align: center;
    }

    div.chat {
        margin: auto;
        background-color: white;
        max-width:700px;
    }

    div.forum {
        display:inline-block;
    }

    img.forum {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    img.privateArea {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    ul {
        display: flex;
        padding: 0;
        justify-content: center;
    }

    li {
        display: block;
        margin-right: 40px;
        width: 50px;
    }
</style>

