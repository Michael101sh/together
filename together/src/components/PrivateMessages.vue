<template>
    <div class="container" v-show="isInside === true"
         v-bind="referToRampUp(isInside)">
        <div class="forumBackground"> </div>
        <home-nav></home-nav>
        <br><br>

        <h2> הודעות פרטיות </h2>
        <br><br>
        <label> חיפוש:</label>
        <input type="text" v-model="searchQuery"
               v-on:input="showRelevantChats">
        <div class="row chat-container">
            <div v-for="element in relevantChats" :key="`${element._id}`"
                 class="col-6 col-sm-4 col-md-3 chatWrap">
                <div class="chat">
                    <div class="chatBody">
                        <strong class="title">
                            {{element.title}} </strong>
                        <br>
                        <div v-for="(message, index) in element.content" :key="`${index}`">
                            <strong> {{message.userNickname + ': '}} </strong>
                            {{message.content}}
                            <br> <br>
                            {{"תאריך: " + message.date}}
                            <hr>
                        </div>
                    </div>
                    <button v-on:click="onChatClick(element._id)">
                        {{contReadMessage}}
                    </button>
                    <button v-on:click="showTextBox(element._id)"
                            v-show="element.isLocked === false">הוספת תגובה</button>

                </div>
            </div>
        </div>
        <br><br><br>
    </div>
</template>

<script>
    import * as $ from "jquery";
    import { store } from '../store.js';
    import Chat from '../components/Chat.vue';
    import HomeNav from '../components/HomeNav.vue'
    import swal from 'sweetalert2'
    import {date} from "../utilities/date.js";
    import {getChats, sendReply} from "../services/chat.service.js";

    export default {
        name: 'privateMessages',
        components: {
            HomeNav
        },
        data () {
            return {
                chats: getChats(this.setChats, false),
                searchQuery: '',
                relevantChats: [],
                store: store,
                isInside: store.state.user ? true : false,
                isPsyc: store.state.user.isPsychologist ? true : false,
                sendingStatus: true,
                chatId: '',
                sendMessage: '',
                contReadMessage: this.setContReadMessage()
            }
        },
        methods: {
            onChatClick(chatId) {
                location.href = '#/chat?id=' + String(chatId);
            },
            setChats(data) {
                if (!this.isPsyc) {
                    let filteredChats = data.filter(function (entry) {
                        return entry.content[0].userNickname
                            === store.state.user.nickname;
                    });
                    this.initChats(filteredChats);
                } else {
                        this.initChats(data);
                }
            },
            initChats(chats) {
                this.relevantChats = chats;
                this.chats = chats;
                for (let i = 0; i < this.chats.length; i++) {
                    this.chats[i].fullContent = '';
                    for (let j = 0; j < this.chats[i].content.length; ++j) {
                        this.chats[i].fullContent +=
                            this.chats[i].content[j].content + '\n';
                    }
                }
            },
            showRelevantChats () {
                this.relevantChats = [];
                for (let i = 0; i < this.chats.length; i++) {
                    if (this.chats[i].fullContent.
                        indexOf(this.searchQuery) !== -1) {
                            this.relevantChats.push(this.chats[i]);
                    }
                }
            },
            showTextBox(id) {
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
                    allowOutsideClick: false,
                    preConfirm: (text) => {
                        return new Promise(function (resolve, reject) {
                            setTimeout(function() {
                                if (text === '') {
                                    reject('אי אפשר לשלוח פנייה ריקה')
                                } else {
                                    resolve()
                                }
                            }, 1000)
                        })
                        .catch((err) =>{
                          swal.showValidationMessage(
                                `${err}`
                            )
                        })
                    }
                }).then((res) => {
                    if (res.value) {
                        self.sendCall(self.afterPost, res.value);
                    } else if(res.dismiss == 'cancel'){
                        console.log('cancel');
                    }
                })
            },
            sendCall (callback, callText) {
                let isPsychologist = store.state.user.isPsychologist;
                let nickName = '';
                let gender = store.state.user.gender;
                if (isPsychologist) {
                    nickName = 'הפסיכולוג/ית ' + store.state.user.nickname;
                } else {
                    nickName = store.state.user.nickname;
                }
                let message = {userName: store.state.user.name,
                    userNickname: nickName,
                    content: callText,
                    date: date()
                };
                sendReply(this.chatId, message, callback);
            },
            afterPost(flag) {
                if (flag) {
                    swal({
                        title: 'התגובה נשלחה בהצלחה',
                        text: '',
                        type: 'success',
                        timer: 2000
                    });
                    getChats(this.setChats, false);
                } else {
                    swal({
                        title: 'שליחת התגובה לא הצליחה, יש לנסות שוב',
                        text: '',
                        type: 'error',
                        timer: 2000
                    });
                }
            },
            setContReadMessage () {
                let gender = store.state.user.gender;
                if (gender === 'בן') {
                    return 'המשך לקרוא'
                } else {
                    return 'המשיכי לקרוא'
                }
            }
        }
    }

</script>

<style scoped>

    h2 {
        color: green;
        font-style: italic;
        display: inline-block;
        text-align: center;
        margin:auto;
    }

    label {
        font-weight: bold;
        text-decoration: underline;
        color: blue;
    }

    strong.title {
        font-size: 19px;
        color:green;
    }

    div.chatWrap {
        padding: 0;
        cursor: pointer;
    }

    div.chat {
        position: relative;
        margin: 5px;
        background-color: white;
    }

    div.chatBody {
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        max-height: 18em;
        line-height: 1.5em
    }

    div.forumBackground {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #EEEEEE;
        z-index: -1;
    }

</style>
