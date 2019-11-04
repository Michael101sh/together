webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persist__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_persist__);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const vuexLocal = new __WEBPACK_IMPORTED_MODULE_2_vuex_persist___default.a({
    storage: window.localStorage
});

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        user: null,
        feel: 999
    },
    mutations: {
        setStoredNumber(state, newNumber) {
            state.count = newNumber;
        },
        setUser(state, user) {
            state.user = user;
        },
        setFeeling(state, value) {
            state.feel = value;
        },
        reset(state) {
            state.user = null;
            state.feel = 999;
        }
    },
    plugins: [vuexLocal.plugin]
});
/* harmony export (immutable) */ __webpack_exports__["a"] = store;


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-1dcbd142",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-37ab648d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  "data-v-4e7437aa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  "data-v-7e725d66",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  "data-v-630bd238",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-783bcdc4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  "data-v-4dede018",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  "data-v-d7e5f64c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Rampup_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Rampup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Rampup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Telling_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Telling_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Telling_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forum_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Forum_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Forum_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PsyHome_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PsyHome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_PsyHome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PrivateMessages_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PrivateMessages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_PrivateMessages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Chat_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Chat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Chat_vue__);










__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        name: 'Rampup',
        component: __WEBPACK_IMPORTED_MODULE_2__components_Rampup_vue___default.a
    }, {
        path: '/home',
        name: 'Home',
        component: __WEBPACK_IMPORTED_MODULE_3__components_Home_vue___default.a
    }, {
        path: '/psyHome',
        name: 'PsyHome',
        component: __WEBPACK_IMPORTED_MODULE_6__components_PsyHome_vue___default.a
    }, {
        path: '/telling',
        name: 'Telling',
        component: __WEBPACK_IMPORTED_MODULE_4__components_Telling_vue___default.a
    }, {
        path: '/forum',
        name: 'Forum',
        component: __WEBPACK_IMPORTED_MODULE_5__components_Forum_vue___default.a
    }, {
        path: '/privateMessages',
        name: 'PrivateMessages',
        component: __WEBPACK_IMPORTED_MODULE_7__components_PrivateMessages_vue___default.a
    }, {
        path: '/chat',
        name: 'Chat',
        component: __WEBPACK_IMPORTED_MODULE_8__components_Chat_vue___default.a
    }]
}));

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rampup_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rampup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Rampup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Home_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PsyHome_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PsyHome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_PsyHome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Telling_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Telling_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Telling_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forum_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Forum_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Forum_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PrivateMessages_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PrivateMessages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_PrivateMessages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Chat_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Chat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Chat_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        Rampup: __WEBPACK_IMPORTED_MODULE_0__components_Rampup_vue___default.a, Home: __WEBPACK_IMPORTED_MODULE_1__components_Home_vue___default.a, PsyHome: __WEBPACK_IMPORTED_MODULE_2__components_PsyHome_vue___default.a, Telling: __WEBPACK_IMPORTED_MODULE_3__components_Telling_vue___default.a, Forum: __WEBPACK_IMPORTED_MODULE_4__components_Forum_vue___default.a, PrivateMessages: __WEBPACK_IMPORTED_MODULE_5__components_PrivateMessages_vue___default.a, Chat: __WEBPACK_IMPORTED_MODULE_6__components_Chat_vue___default.a
    },
    data() {
        return {
            store: __WEBPACK_IMPORTED_MODULE_7__store_js__["a" /* store */]
        };
    }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomeNav_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomeNav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_HomeNav_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'chat',
    components: {
        HomeNav: __WEBPACK_IMPORTED_MODULE_2__components_HomeNav_vue___default.a
    },
    data() {
        return {
            chat: this.getCurrentChat(),
            isInside: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user ? true : false
        };
    },
    methods: {
        getCurrentChat() {
            let id = this.getChatIdFromUrl();
            $.ajax({
                url: 'http://' + location.hostname + ':3003/data/chat/' + String(id),
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                this.chat = res;
            });
            return {};
        },
        getChatIdFromUrl() {
            let index = location.hash.indexOf('id=') + 3;
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
            date = String(date.getDate()) + '/' + String(date.getMonth() + 1) + '/' + String(date.getFullYear()) + '\n' + String(date.getHours()) + ':' + fix2 + String(date.getMinutes()) + fix;
            return date.toString();
        },
        showTextBox(id) {
            this.callText = '';
            this.chatId = id;
            let self = this;
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'שלח תגובה חדשה',
                input: 'textarea',
                showCancelButton: true,
                confirmButtonText: 'שליחה',
                cancelButtonText: 'ביטול',
                reverseButtons: true,
                showLoaderOnConfirm: true,
                preConfirm: function (text) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (text === '') {
                                reject('אי אפשר לשלוח פנייה ריקה');
                            } else {
                                resolve();
                            }
                        }, 1000);
                    });
                },
                allowOutsideClick: false
            }).then(function (text) {
                self.sendCall(self.afterPost, text);
            });
        },
        sendCall(callback, callText) {
            let isPsychologist = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.isPsychologist;
            let nickName = '';
            if (isPsychologist) {
                nickName = 'הפסיכולוג/ית ' + __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.nickname;
            } else {
                nickName = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.nickname;
            }
            let message = { userName: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.name,
                userNickname: nickName,
                content: callText,
                date: this.date() };
            $.ajax({
                url: 'http://' + location.hostname + ':3003/api/addMessage/' + String(this.chatId),
                type: "PATCH",
                method: 'patch',
                data: JSON.stringify({ message: message, _method: "PATCH" }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function () {
                callback(true);
            }).fail(function () {
                callback(false);
            });
        },
        afterPost(flag) {
            if (flag) {
                __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                    title: 'התגובה נשלחה בהצלחה',
                    text: '',
                    type: 'success',
                    timer: 2000
                });
                this.getCurrentChat();
            } else {
                __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                    title: 'שליחת התגובה לא הצליחה, יש לנסות שוב',
                    text: '',
                    type: 'error',
                    timer: 2000
                });
            }
        },
        forum() {
            location.href = '#/forum';
        },
        privateArea() {
            location.href = '#/privateMessages';
        }
    } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Chat_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Chat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Chat_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'forum',
    components: {
        HomeNav: __WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue___default.a
    },
    data() {
        return {
            chats: this.getChats(),
            searchQuery: '',
            relevantChats: [],
            store: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */],
            isInside: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user ? true : false,
            sendingStatus: true,
            chatId: '',
            contReadMessage: this.setContReadMessage()
        };
    },
    methods: {
        onChatClick(chatId) {
            location.href = '#/chat?id=' + String(chatId);
        },
        getChats() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/data/chat',
                type: "GET",
                data: 'query=' + JSON.stringify({ isPublic: true }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                this.initChats(res);
            });
            return [];
        },
        initChats(chats) {
            this.relevantChats = chats;
            this.chats = chats;
            for (let i = 0; i < this.chats.length; i++) {
                this.chats[i].fullContent = '';
                for (let j = 0; j < this.chats[i].content.length; ++j) {
                    this.chats[i].fullContent += this.chats[i].content[j].content + '\n';
                }
            }
        },
        showRelevantChats() {
            this.relevantChats = [];
            for (let i = 0; i < this.chats.length; i++) {
                if (this.chats[i].fullContent.indexOf(this.searchQuery) !== -1) {
                    this.relevantChats.push(this.chats[i]);
                }
            }
        },
        showTextBox(id) {
            this.chatId = id;
            let self = this;
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                title: 'שלח תגובה חדשה',
                input: 'textarea',
                showCancelButton: true,
                confirmButtonText: 'שליחה',
                cancelButtonText: 'ביטול',
                reverseButtons: true,
                showLoaderOnConfirm: true,
                preConfirm: function (text) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (text === '') {
                                reject('אי אפשר לשלוח פנייה ריקה');
                            } else {
                                resolve();
                            }
                        }, 1000);
                    });
                },
                allowOutsideClick: false
            }).then(function (text) {
                self.sendCall(self.afterPost, text);
            });
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
            date = String(date.getDate()) + '/' + String(date.getMonth() + 1) + '/' + String(date.getFullYear()) + '\n' + String(date.getHours()) + ':' + fix2 + String(date.getMinutes()) + fix;
            return date.toString();
        },
        sendCall(callback, callText) {
            let isPsychologist = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.isPsychologist;
            let nickName = '';
            let gender = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.gender;
            if (isPsychologist) {
                if (gender === 'בן') {
                    nickName = 'הפסיכולוג ' + __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
                } else {
                    nickName = 'הפסיכולוגית ' + __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
                }
            } else {
                nickName = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
            }
            let message = { userName: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.name,
                userNickname: nickName,
                content: callText,
                date: this.date() };
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/addMessage/' + String(this.chatId),
                type: "PATCH",
                method: 'patch',
                data: JSON.stringify({ message: message, _method: "PATCH" }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function () {
                callback(true);
            }).fail(function () {
                callback(false);
            });
        },
        afterPost(flag) {
            if (flag) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'התגובה נשלחה בהצלחה',
                    text: '',
                    type: 'success',
                    timer: 2000
                });
                this.getChats();
            } else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'שליחת התגובה לא הצליחה, יש לנסות שוב',
                    text: '',
                    type: 'error',
                    timer: 2000
                });
            }
        },
        setContReadMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'המשך לקרוא';
            } else {
                return 'המשיכי לקרוא';
            }
        }
    }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'home',
    data() {
        return {
            treatType: '',
            urgent: '',
            notUrgent: '',
            feel: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.feel,
            store: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */],
            isInside: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user ? true : false,
            feelMessage: this.setFeelingMessage(),
            urgencyCheckMessage: this.setUrgencyCheckMessage(),
            urgencyMessage: this.setUrgencyMessage(),
            makeCallMessage: this.setMakeCallMessage(),
            logoutButtonMessage: this.setLogoutMessage(),
            icon: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.icon
        };
    },
    methods: {
        setFeelingMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'איך אתה מרגיש עכשיו?';
            } else {
                return 'איך את מרגישה עכשיו?';
            }
        },
        setUrgencyMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return '        פנה באופן מיידי למבוגר הקרוב אליך: אמא, אבא, מחנכ/ת, יועצת, או התקשר 050-9519559 ל"ביחד"';
            } else {
                return '        פני באופן מיידי למבוגר הקרוב אלייך: אמא, אבא, מחנכ/ת, יועצת, או התקשרי 050-9519559 ל"ביחד"';
            }
        },
        setUrgencyCheckMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'לפני שתמשיך, אנא בחר את רמת הדחיפות בה אתה זקוק לעזרה.';
            } else {
                return 'לפני שתמשיכי, אנא בחרי את רמת הדחיפות בה את זקוקה לעזרה.';
            }
        },
        setMakeCallMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'לחץ כאן כדי לכתוב פנייה לפסיכולוג/ית';
            } else {
                return 'לחצי כאן כדי לכתוב פנייה לפסיכולוג/ית';
            }
        },
        setLogoutMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'התנתק מהחשבון שלך';
            } else {
                return 'התנתקי מהחשבון שלך';
            }
        },
        setFeeling(feel) {
            __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].commit('setFeeling', feel);
            this.feel = feel;
        },
        tell() {
            location.href = '#/telling';
        },
        forum() {
            location.href = '#/forum';
        },
        urgentTreat() {
            this.urgent = 'on';
            this.notUrgent = 'off';
        },
        notUrgentTreat() {
            this.notUrgent = 'on';
            this.urgent = 'off';
        },
        logout() {
            __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].commit('reset');
            location.href = '#/';
        },
        privateArea() {
            location.href = '#/privateMessages';
        }
    }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'home-nav',
    data() {
        return {
            isPsyc: false
        };
    },
    methods: {
        userType() {
            let type = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.isPsychologist;
            if (type) {
                this.isPsyc = type;
            }
        },
        home() {
            this.userType();
            if (this.isPsyc) {
                location.href = '#/psyHome';
            } else {
                location.href = '#/home';
            }
        }
    }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Chat_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Chat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Chat_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'privateMessages',
    components: {
        HomeNav: __WEBPACK_IMPORTED_MODULE_3__components_HomeNav_vue___default.a
    },
    data() {
        return {
            chats: this.getChats(),
            searchQuery: '',
            relevantChats: [],
            store: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */],
            isInside: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user ? true : false,
            isPsyc: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.isPsychologist ? true : false,
            sendingStatus: true,
            chatId: '',
            sendMessage: '',
            contReadMessage: this.setContReadMessage()
        };
    },
    methods: {
        onChatClick(chatId) {
            location.href = '#/chat?id=' + String(chatId);
        },
        getChats() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/data/chat',
                type: "GET",
                data: 'query=' + JSON.stringify({ isPublic: false }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                res.forEach(function (element) {
                    element.content.forEach(function (message) {
                        let date = new Date(message.date);
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
                        message.date = String(date.getDate()) + '/' + String(date.getMonth() + 1) + '/' + String(date.getFullYear()) + '\n' + String(date.getHours()) + ':' + fix2 + String(date.getMinutes()) + fix;
                    });
                });
                if (!this.isPsyc) {
                    let filteredChats = res.filter(function (entry) {
                        return entry.content[0].userNickname === __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
                    });
                    this.initChats(filteredChats);
                } else {
                    this.initChats(res);
                }
            });
            return [];
        },
        initChats(chats) {
            this.relevantChats = chats;
            this.chats = chats;
            for (let i = 0; i < this.chats.length; i++) {
                this.chats[i].fullContent = '';
                for (let j = 0; j < this.chats[i].content.length; ++j) {
                    this.chats[i].fullContent += this.chats[i].content[j].content + '\n';
                }
            }
        },
        showRelevantChats() {
            this.relevantChats = [];
            for (let i = 0; i < this.chats.length; i++) {
                if (this.chats[i].fullContent.indexOf(this.searchQuery) !== -1) {
                    this.relevantChats.push(this.chats[i]);
                }
            }
        },
        showTextBox(id) {
            this.chatId = id;
            let self = this;
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                title: 'שלח תגובה חדשה',
                input: 'textarea',
                showCancelButton: true,
                confirmButtonText: 'שליחה',
                cancelButtonText: 'ביטול',
                reverseButtons: true,
                showLoaderOnConfirm: true,
                preConfirm: function (text) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (text === '') {
                                reject('אי אפשר לשלוח פנייה ריקה');
                            } else {
                                resolve();
                            }
                        }, 1000);
                    });
                },
                allowOutsideClick: false
            }).then(function (text) {
                self.sendCall(self.afterPost, text);
            });
        },
        date() {
            let today = new Date();
            return today.toString();
        },
        sendCall(callback, callText) {
            let isPsychologist = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.isPsychologist;
            let nickName = '';
            let gender = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.gender;
            if (isPsychologist) {
                if (gender === 'בן') {
                    nickName = 'הפסיכולוג ' + __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
                } else {
                    nickName = 'הפסיכולוגית ' + __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
                }
            } else {
                nickName = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.nickname;
            }
            let message = { userName: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.name,
                userNickname: nickName,
                content: callText,
                date: this.date() };
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/addMessage/' + String(this.chatId),
                type: "PATCH",
                method: 'patch',
                data: JSON.stringify({ message: message, _method: "PATCH" }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function () {
                callback(true);
            }).fail(function () {
                callback(false);
            });
        },
        afterPost(flag) {
            if (flag) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'התגובה נשלחה בהצלחה',
                    text: '',
                    type: 'success',
                    timer: 2000
                });
                this.getChats();
            } else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'שליחת התגובה לא הצליחה, יש לנסות שוב',
                    text: '',
                    type: 'error',
                    timer: 2000
                });
            }
        },
        setContReadMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'המשך לקרוא';
            } else {
                return 'המשיכי לקרוא';
            }
        }
    }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'psyHome',

    data() {
        return {
            chats: this.getChats(),
            users: this.getUsers(),
            store: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */],
            isInside: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user ? true : false,
            isPsyc: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.isPsychologist ? true : false,
            logoutButtonMessage: this.setLogoutMessage(),
            deleteMessage: this.setDeleteMessage(),
            icon: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.icon
        };
    },
    methods: {
        getChats() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/data/chat',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                this.chats = this.addPriority(res.filter(function (entry) {
                    return entry.content[0].userNickname !== 'מערכת';
                }));
            });
            return [];
        },
        stringToDate(str) {
            let index = str.indexOf('/');
            let day = Number(str.slice(0, index));
            str = str.substring(index + 1);
            index = str.indexOf('/');
            let month = Number(str.slice(0, index)) - 1;
            str = str.substring(index + 1);
            index = str.indexOf('\n');
            let year = Number(str.slice(0, index));
            str = str.substring(index + 1);
            index = str.indexOf(':');
            let hours = Number(str.slice(0, index));
            str = str.substring(index + 1);
            let minutes = Number(str);
            return new Date(year, month, day, hours, minutes, 0, 0);
        },
        addPriority(list) {
            let now = new Date();
            /* todayStartTime and yesEndTime is defining the
             the working hours.
             Note: we care only about today and yesterday,
             before that is the same as yesterday */
            let todayStartTime = new Date();
            todayStartTime.setHours(8, 0, 0, 0);
            let yesEndTime = new Date();
            yesEndTime.setDate(yesEndTime.getDate() - 1);
            yesEndTime.setHours(22, 0, 0, 0);
            /* Saturday - go to Thursday
               (Saturday is outside of the working hours) */
            if (yesEndTime.getDay() === 6) {
                yesEndTime.setDate(yesEndTime.getDate() - 2);
                /* Friday - go to Thursday
                   (Friday is outside of the working hours) */
            } else if (yesEndTime.getDay() === 5) {
                yesEndTime.setDate(yesEndTime.getDate() - 1);
            }
            for (let i = 0; i < list.length; i++) {
                let elementDate = list[i].content[0].date;
                elementDate = this.stringToDate(elementDate);
                /* Saturday - go to Thursday
                 (Saturday is outside of the working hours) */
                if (elementDate.getDay() === 6) {
                    elementDate.setDate(elementDate.getDate() - 2);
                    /* Friday - go to Thursday
                     (Friday is outside of the working hours) */
                } else if (elementDate.getDay() === 5) {
                    elementDate.setDate(elementDate.getDate() - 1);
                }
                /* if elementDate and yesEndTime both was in
                   Saturday or Friday, fix the ratio between them   */
                if (elementDate.getDate() === yesEndTime.getDate()) {
                    yesEndTime.setDate(yesEndTime.getDate() - 1);
                }
                list[i].waitingTime = 0;
                // the user contact before today and wait until now
                if (elementDate < todayStartTime) {
                    /* add the time he waited ->today<- within waiting hours.
                       In this part, we add the difference between
                       that beginning of the working hours and elementDate */
                    if (now.getHours() >= 8) {
                        list[i].waitingTime += now.getHours() - todayStartTime.getHours();
                        list[i].waitingTime += now.getMinutes() / 60;
                    }

                    /* if elementDate > yesEndTime, the user contact
                       out of works hours */
                    /* if elementDate <= yesEndTime so the user contact
                        not only before today, but in work hours of
                        -> past days <-
                     */
                    if (elementDate <= yesEndTime) {
                        list[i].waitingTime += yesEndTime.getHours() - elementDate.getHours();
                        list[i].waitingTime -= elementDate.getMinutes() / 60;
                    }
                    /* the user contact today so add the time he waited
                       until now */
                } else {
                    list[i].waitingTime = now.getHours() - elementDate.getHours();
                    list[i].waitingTime += now.getMinutes() / 60 - elementDate.getMinutes() / 60;
                }
                // if was not treated
                if (!list[i].wasTreated) {
                    // if more than two hours passed, mark it in red.
                    list[i].critical = list[i].waitingTime > 2;
                }
            }
            // divide to parts of 15 minutes, and sort by date
            // between the parts of the 15 minutes, and by feel
            // inside of the 15 minutes (in each part)
            list.sort(function (first, second) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                let firstDate = new Date(first.content[0].date);
                let secondDate = new Date(second.content[0].date);
                if (firstDate.getDay() === secondDate.getDay() && firstDate.getMonth() === secondDate.getMonth() && firstDate.getFullYear() === secondDate.getFullYear()) {
                    let firstDiff = first.waitingTime;
                    let secondDiff = second.waitingTime;
                    let firstMinutes = firstDiff * 60;
                    let secondMinutes = secondDiff * 60;
                    if (Math.abs(firstMinutes - secondMinutes) <= 15 && first.feel !== second.feel) {
                        return first.feel - second.feel;
                    } else {
                        return secondDiff - firstDiff;
                    }
                }
            });
            for (let i = 0, len = list.length; i < len; i++) {
                list[i].priority = i + 1;
            }
            return list;
        },
        getUsers() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/data/user',
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                this.users = res;
            });
            return [];
        },
        isConfirmed(id, isVerified) {
            isVerified = null !== isVerified ? !isVerified : true;
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/setConfirmation/' + String(id),
                type: "PATCH",
                method: 'patch',
                data: JSON.stringify({ isVerified: isVerified, _method: "PATCH" }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                let self = this;
                if (isVerified) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('המשתמש/ת אושרה/ה בהצלחה', '', 'success').then(function () {
                        self.getUsers();
                    });
                } else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('ביטול אישור המשתמש/ת בוצע בהצלחה', '', 'success').then(function () {
                        self.getUsers();
                    });
                }
            });
        },
        isPsy(id, isPsychologist) {
            isPsychologist = null !== isPsychologist ? !isPsychologist : true;
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/setPsyc/' + String(id),
                type: "PATCH",
                method: 'patch',
                data: JSON.stringify({ isPsychologist: isPsychologist, _method: "PATCH" }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                let self = this;
                if (isPsychologist) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('המשתמש/ת סומן כפסיכולוג/ית בהצלחה', '', 'success').then(function () {
                        self.getUsers();
                    });
                } else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('ביטול סימן כפסיכולוג/ית בוצע בהצלחה', '', 'success').then(function () {
                        self.getUsers();
                    });
                }
            });
        },
        deleteUser(id) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/data/user/' + String(id),
                type: "DELETE",
                dataType: "json"
            });
        },
        deleteChat(id) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/data/chat/' + String(id),
                type: "DELETE",
                dataType: "json"
            }).then(res => {
                let self = this;
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('הפנייה נמחקה בהצלחה', '', 'success').then(function () {
                    self.getChats();
                });
            });
        },
        forum() {
            location.href = '#/forum';
        },
        tell() {
            location.href = '#/telling';
        },
        privateArea() {
            location.href = '#/privateMessages';
        },
        logout() {
            __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].commit('reset');
            location.href = '#/';
        },
        setLogoutMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'התנתק מהחשבון שלך';
            } else {
                return 'התנתקי מהחשבון שלך';
            }
        },
        setDeleteMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'מחק';
            } else {
                return 'מחקי';
            }
        },
        setTreat(id, wasTreated) {
            wasTreated = null !== wasTreated ? !wasTreated : true;
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/setTreatStatus/' + String(id),
                type: "PATCH",
                method: 'patch',
                data: JSON.stringify({ wasTreated: wasTreated, _method: "PATCH" }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(res => {
                let self = this;
                if (wasTreated) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('הפנייה סומנה כטופלה', '', 'success').then(function () {
                        self.getChats();
                    });
                } else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('הפנייה סומנה כעדיין דרושה טיפול', '', 'success').then(function () {
                        self.getChats();
                    });
                }
            });
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'rampup',
    data() {
        return {
            emailErrorMessage: '',
            phoneErrorMessage: '',
            nameErrorMessage: '',
            ageErrorMessage: '',
            nicknameErrorMessage: '',
            genderErrorMessage: '',
            passErrorMessage: '',
            emailGreenOn: false,
            phoneGreenOn: false,
            nameGreenOn: false,
            ageGreenOn: false,
            nicknameGreenOn: false,
            genderGreenOn: false,
            passGreenOn: false,
            rampUp: '',
            user: {
                email: '',
                phone: '',
                name: '',
                age: '',
                gender: '',
                nickname: '',
                psw: '',
                icon: '',
                isVerified: false
            },
            existUser: {
                nickname: '',
                psw: ''
            },
            selectedIcon: null,
            store: __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */],
            showPassRecover: false,
            emailForRecover: '',
            nicknameForRecover: ''
        };
    },
    methods: {
        signUpFormOn() {
            this.showPassRecover = false;
            this.rampUp = 'register';
        },

        signInFormOn() {
            this.showPassRecover = false;
            this.rampUp = 'login';
        },
        addUser() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/registerUser',
                type: "POST",
                data: JSON.stringify(this.user),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function () {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('!נרשמת בהצלחה', 'המתן/המתיני לאישור הורים', 'success');
            }).fail(function () {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('...אופס', '.ההרשמה לא הצליחה, נסה/י שוב', 'error');
            });
        },
        emailValidate() {
            let email = this.user.email;
            let regex1 = /^\w+@[a-zA-Z]+\.com$/;
            let regex2 = /^\w+@[a-zA-Z]+\.co.il$/;
            let match1 = regex1.exec(email);
            let match2 = regex2.exec(email);
            this.emailGreenOn = match1 || match2;
            if (this.user.email !== '') {
                this.emailErrorMessage = this.emailGreenOn ? '' : "כתובת המייל לא תקינה, היא צריכה להיות בצורה הבאה:" + " user@domain.co.il / user@domain.com.";
            } else {
                this.emailErrorMessage = '';
            }
            return this.emailGreenOn;
        },
        phoneValidate() {
            let regex = /^0[0-9]{1,2}-?[0-9]{7}$/;
            this.phoneGreenOn = regex.exec(this.user.phone);
            if (this.user.phone !== '') {
                this.phoneErrorMessage = this.phoneGreenOn ? '' : "מספר הפלאפון/הטלפון לא תקין, הוא צריך להיות להתחיל " + "ב-3 ספרות (פלאפון) או ב-2 ספרות (טלפון) ולהסתיים ב-7 ספרות";
            } else {
                this.phoneErrorMessage = '';
            }
            return this.phoneGreenOn;
        },
        nameValidate() {
            this.nameGreenOn = !!this.user.name;
            this.nameErrorMessage = this.nameGreenOn ? '' : "נא רשמ/י את שמך";
            return this.nameGreenOn;
        },
        ageValidate() {
            let regex = /^([5-9]|([1-9][0-9])){1}$/;
            this.ageGreenOn = regex.exec(this.user.age);
            if (this.user.age !== '') {
                this.ageErrorMessage = this.ageGreenOn ? '' : "נא מלא/י גיל בין 5 ל-99";
            } else {
                this.ageErrorMessage = 'נא רשמ/י את גילך';
            }
            return this.ageGreenOn;
        },
        genderValidate() {
            this.genderGreenOn = !!this.user.gender;
            this.genderErrorMessage = this.genderGreenOn ? '' : "נא מלא/י מגדר";
            return this.genderGreenOn;
        },
        nicknameValidate() {
            this.nicknameGreenOn = !!this.user.nickname;
            this.nicknameErrorMessage = this.nicknameGreenOn ? '' : "נא מלא/י כינוי. הכינוי ישמש אותך באפליקציה";
            if (this.nicknameGreenOn) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                    url: 'http://' + location.hostname + ':3003/api/isExist',
                    type: "POST",
                    data: JSON.stringify(this.user),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json"
                }).then(res => {
                    if (res !== 'Ok') {
                        this.nicknameErrorMessage = "הכינוי תפוס. נסה/י כינוי אחר";
                        this.nicknameGreenOn = false;
                    }
                });
            }
            return this.nicknameGreenOn;
        },
        passValidate() {
            this.passGreenOn = !!this.user.psw;
            this.passErrorMessage = this.passGreenOn ? '' : 'נא מלא/י סיסמא. הסיסמא תשמש אותך באפליקציה';
            return this.passGreenOn;
        },
        imageSelector(event) {
            if (this.selectedIcon !== null) {
                this.selectedIcon.classList.remove("highlighted");
            }
            this.selectedIcon = event.srcElement.parentElement;
            this.selectedIcon.classList.add("highlighted");
            let path = event.srcElement.currentSrc;
            let index = path.indexOf("static");
            this.user.icon = path.substring(index);
        },
        login() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/login',
                type: "POST",
                data: JSON.stringify(this.existUser),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function (data) {
                if (data.error) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('...אופס', '.כינוי או סיסמא לא נכונים', 'error');
                } else if (data.isVerified) {
                    __WEBPACK_IMPORTED_MODULE_1__store_js__["a" /* store */].commit('setUser', data);
                    if (data.isPsychologist) {
                        location.href = '#/psyHome';
                    } else {
                        location.href = '#/home';
                    }
                } else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('...אופס', '.עוד לא קיבלת אישור הורים.', 'error');
                }
            }).fail(function () {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('...אופס', '.הכניסה לא הצליחה, נסה/י שוב.', 'error');
            });
        },
        registerFormValidation() {
            if (this.user.email === '' && this.user.phone === '') {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('נא מלא/י אימייל או פלאפון / טלפון');
                return false;
            }
            if (this.user.email !== '' && !this.emailGreenOn) {
                return false;
            }
            if (this.user.phone !== '' && !this.phoneGreenOn) {
                return false;
            }
            if (this.user.name === '') {
                this.nameErrorMessage = "נא רשמ/י את שמך";
                return false;
            }
            if (this.user.age === '') {
                this.ageErrorMessage = "נא רשמ/י את גילך";
                return false;
            }
            if (!this.ageGreenOn) {
                return false;
            }
            if (this.user.gender === '') {
                this.genderErrorMessage = "נא מלא/י מגדר";
                return false;
            }
            if (this.user.nickname === '') {
                this.nicknameErrorMessage = "נא מלא/י כינוי. הכינוי ישמש אותך באפליקציה";
                return false;
            }
            if (!this.nicknameGreenOn) {
                return false;
            }
            if (this.user.psw === '') {
                this.passErrorMessage = 'נא מלא/י סיסמא. הסיסמא תשמש אותך באפליקציה';
                return false;
            }
            this.addUser();
            this.rampUp = '';
        },
        loginFormValidation() {
            if (this.existUser.nickname === '') {
                return false;
            }
            if (this.existUser.psw === '') {
                return false;
            }
            return this.login();
        },
        showPassRecoverArea() {
            this.showPassRecover = !this.showPassRecover;
        },
        sendPass() {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]({
                url: 'http://' + location.hostname + ':3003/api/sendPass',
                type: "POST",
                data: JSON.stringify({
                    email: this.emailForRecover,
                    nickname: this.nicknameForRecover
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function (res) {
                if (res === 'Ok') {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('הסיסמא נשלחה למייל שלך', '', 'success');
                } else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('...אופס', 'הכינוי או כתובת המייל לא קיימים במערכת', 'error');
                }
            }).fail(function () {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('...אופס', 'השחזור לא הצליח, נסה/י שוב מאוחר יותר', 'error');
            });
        }
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HomeNav_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HomeNav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_HomeNav_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'telling',
    components: {
        HomeNav: __WEBPACK_IMPORTED_MODULE_1__components_HomeNav_vue___default.a
    },
    data() {
        return {
            title: this.setTitle(),
            callText: '',
            sendingStatus: false,
            sendMessage: '',
            store: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */],
            feel: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.feel,
            isPublic: true,
            isInside: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user ? true : false,
            publishTitle: '',
            privacyMessage: this.setPrivacyMessage(),
            holderMessage: this.setHolderMessage(),
            forumRedirectMessage: this.setForumRedirectMessage(),
            anotherCallMessage: this.setAnotherCallMessage(),
            untilResponseMessage: this.setUntilResponseMessage(),
            adultsYouTrustMessage: this.setAdultsYouTrustMessage(),
            isPsychologist: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.isPsychologist ? true : false
        };
    },
    methods: {
        setTitle() {
            if (__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.isPsychologist) {
                return 'הוספת הודעה בפורום';
            } else {
                return 'אנחנו רוצים לשמוע אותך';
            }
        },
        home() {
            location.href = '#/home';
        },
        forumRef() {
            location.href = '#/forum';
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
            date = String(date.getDate()) + '/' + String(date.getMonth() + 1) + '/' + String(date.getFullYear()) + '\n' + String(date.getHours()) + ':' + fix2 + String(date.getMinutes()) + fix;
            return date.toString();
        },
        textBoxValidation() {
            if (this.callText !== '') {
                return true;
            }
            return false;
        },
        afterPost(flag) {
            if (flag) {
                this.sendingStatus = true;
                this.sendMessage = 'הפנייה נשלחה בהצלחה.';
            } else {
                this.sendMessage = 'שליחת הפנייה לא הצליחה, נסה שוב.';
            }
        },
        sendCall(callback) {
            if (!this.textBoxValidation()) {
                return false;
            }

            let isLocked = false;
            let title = '';
            let userNickname = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.nickname;
            let wasTreated = false;
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.isPsychologist) {
                isLocked = true;
                userNickname = 'מערכת';
                wasTreated = true;
                if (this.publishTitle === '') {
                    title = 'הודעה מהמערכת';
                } else {
                    title = this.publishTitle;
                }
            } else if (gender === 'בן') {
                title = 'פנייה מהמשתמש ' + String(__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.nickname);
            } else {
                title = 'פנייה מהמשתמשת ' + String(__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.nickname);
            }

            let message = { userName: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.name,
                userNickname: userNickname,
                content: this.callText,
                date: this.date() };
            $.ajax({
                url: 'http://' + location.hostname + ':3003/api/sendMessage',
                type: "POST",
                data: JSON.stringify({ title: title,
                    content: [message], isPublic: this.isPublic, feel: this.feel,
                    isLocked: isLocked, wasTreated: wasTreated }),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(function () {
                __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].commit('setFeeling', 999);
                callback(true);
            }).fail(function () {
                callback(false);
            });
        },
        privacy() {
            this.isPublic = !this.isPublic;
        },
        tell() {
            this.sendMessage = '';
            this.callText = '';
            this.sendingStatus = false;
        },
        setPrivacyMessage() {
            let isPsychologist = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.isPsychologist;
            if (isPsychologist) {
                return 'שימי לב: \n מה שתרשמי יופיע לכל התלמידים שמשתמשים \n באפליקציה.';
            }
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'שים לב: \n מה שתרשום יופיע לכל התלמידים שמשתמשים \nבאפליקציה.\n אם זו פנייה פרטית, תסמן את זה בבקשה.';
            } else {
                return 'שימי לב: \n מה שתרשמי יופיע לכל התלמידים שמשתמשים \nאפליקציה.\n אם זו פנייה פרטית, תסמני את זה בבקשה.';
            }
        },
        setHolderMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'רשום כאן את תוכן ההודעה/הפנייה';
            } else {
                return 'רשמי כאן את תוכן ההודעה/הפנייה';
            }
        },
        setForumRedirectMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'לחץ כאן כדי לעבור לפורום';
            } else {
                return 'לחצי כאן כדי לעבור לפורום';
            }
        },
        setAnotherCallMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'אם ברצונך לשלוח פנייה נוספת (אחרת) לחץ כאן';
            } else {
                return 'אם ברצונך לשלוח פנייה נוספת (אחרת) לחצי כאן';
            }
        },
        setUntilResponseMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'עד שהפסיכולוג יחזור אליך, בינתיים מה אתה יכול לעשות כשאתה מוטרד?';
            } else {
                return 'עד שהפסיכולוג יחזור אלייך, בינתיים מה את יכולה לעשות כשאת מוטרדת?';
            }
        },
        setAdultsYouTrustMessage() {
            let gender = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].state.user.gender;
            if (gender === 'בן') {
                return 'לדבר עם מבוגרים שאתה סומך עליהם';
            } else {
                return 'לדבר עם מבוגרים שאת סומכת עליהם';
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_sweetalert2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_click_confirm__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_click_confirm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_click_confirm__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.













__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_10_vue_sweetalert2__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_bootstrap_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vee_validate__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('clickConfirm', __WEBPACK_IMPORTED_MODULE_12_click_confirm___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].mixin({
    methods: {
        referToRampUp(isInside) {
            if (!isInside) {
                __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()('.נא היכנס/י למערכת', '', 'error').then(function () {
                    __WEBPACK_IMPORTED_MODULE_9__store_js__["a" /* store */].state.user = null;
                    location.href = '#/';
                });
            }
        }
    }
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    store: __WEBPACK_IMPORTED_MODULE_9__store_js__["a" /* store */],
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_2__App_vue___default.a }
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isInside === true),
      expression: "isInside === true"
    }]
  }, 'div', _vm.referToRampUp(_vm.isInside), false), [_c('home-nav'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "design",
    on: {
      "click": _vm.privateArea
    }
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.privateArea
    }
  }, [_c('strong', [_vm._v("לאזור ההודעות הפרטיות")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "privateArea",
    attrs: {
      "src": "/static/private_messages.png"
    },
    on: {
      "click": _vm.privateArea
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "design",
    staticStyle: {
      "color": "blue"
    }
  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.forum
    }
  }, [_c('strong', [_vm._v("לפורום ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "forum",
    attrs: {
      "src": "/static/forum.png"
    },
    on: {
      "click": _vm.forum
    }
  })])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h2', [_vm._v(" " + _vm._s(_vm.chat.title) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "container chat"
  }, [_vm._l((_vm.chat.content), function(message) {
    return _c('div', [_c('strong', [_vm._v(" " + _vm._s(message.userNickname) + " ")]), _vm._v("\n                " + _vm._s(': ' + message.content) + "\n                "), _c('br'), _vm._v(" "), _c('br'), _vm._v("\n                " + _vm._s("תאריך: " + message.date) + "\n                "), _c('hr')])
  }), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.chat.isLocked === false),
      expression: "chat.isLocked === false"
    }],
    on: {
      "click": function($event) {
        return _vm.showTextBox(_vm.chat._id)
      }
    }
  }, [_vm._v("הוספת תגובה")])], 2), _vm._v(" "), _c('br'), _c('br'), _c('br')], 1)
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "click": _vm.home
    }
  }, [_c('p', {
    staticClass: "cursor container",
    staticStyle: {
      "color": "blue"
    },
    on: {
      "click": _vm.home
    }
  }, [_vm._v("לדף הבית")]), _vm._v(" "), _c('img', {
    staticClass: "homeImg",
    attrs: {
      "src": "/static/home.png"
    },
    on: {
      "click": _vm.home
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rampup"
  }, [_c('h2', [_vm._v("אפליקציית ביחד - מתייעצים בקלות")]), _vm._v(" "), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": "/static/logo.png"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("\n        ברוכ/ה הבא/ה לאפליקציית \"ביחד\"!\n    ")]), _vm._v(" "), _c('p', [_vm._v("\n        באפליקציה הזו תוכל/י לשתף בדברים שמטרידים אותך,\n        ולקבל ייעוץ ועזרה מאיתנו - צוות פסיכולוגים שבדיוק כאן בשבילך.\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "buttonsText"
  }, [_vm._v("\n        פעם ראשונה שלך? לחצ/י להירשם. אחרת, היכנס/י.\n    ")]), _vm._v(" "), _c('button', {
    staticClass: "signUpButton",
    on: {
      "click": _vm.signUpFormOn
    }
  }, [_vm._v("הירשמ/י")]), _vm._v(" "), _c('button', {
    staticClass: "signInButton",
    on: {
      "click": _vm.signInFormOn
    }
  }, [_vm._v("היכנס/י")]), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rampUp === 'register'),
      expression: "rampUp === 'register'"
    }],
    staticClass: "signInForm",
    attrs: {
      "name": "signUpForm",
      "method": "post"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('h4', [_vm._v("רישום לאפליקציה")]), _vm._v(" "), _c('p', {
    staticClass: "registerIntro"
  }, [_vm._v("\n            רגע לפני שתוכל/י להשתמש באפליקציה, אנו צריכים אישור מההורים לכך.\n            לכן, רשום/רשמי את כתובת האימייל של אחד מהוריך/מהורייך,\n            ואם הם יסכימו - תוכל/י ליצור חשבון ולהשתמש באפליקציה.\n        ")]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.emailGreenOn,
      'form-group has-danger': !_vm.emailGreenOn
    }
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.email),
      expression: "user.email"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "placeholder": "Email",
      "name": "Email",
      "aria-describedby": "emailHelp"
    },
    domProps: {
      "value": (_vm.user.email)
    },
    on: {
      "change": _vm.emailValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "email", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.emailErrorMessage))]), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted",
    attrs: {
      "id": "emailHelp"
    }
  }, [_vm._v("\n                אנחנו לעולם לא נשתף את האימייל עם מישהו אחר")])]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.phoneGreenOn,
      'form-group has-danger': !_vm.phoneGreenOn
    }
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.phone),
      expression: "user.phone"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "type": "text",
      "name": "Tel",
      "placeholder": "פלאפון / טלפון",
      "aria-describedby": "phoneHelp"
    },
    domProps: {
      "value": (_vm.user.phone)
    },
    on: {
      "change": _vm.phoneValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "phone", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.phoneErrorMessage))]), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted",
    attrs: {
      "id": "phoneHelp"
    }
  }, [_vm._v("\n                אנחנו לעולם לא נשתף את המספר עם מישהו אחר")])]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.nameGreenOn,
      'form-group has-danger': !_vm.nameGreenOn
    }
  }, [_vm._m(4), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.name),
      expression: "user.name"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "type": "text",
      "placeholder": "רשמ/י את שמך"
    },
    domProps: {
      "value": (_vm.user.name)
    },
    on: {
      "change": _vm.nameValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "name", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.nameErrorMessage))])]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.ageGreenOn,
      'form-group has-danger': !_vm.ageGreenOn
    }
  }, [_vm._m(5), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.age),
      expression: "user.age"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "type": "number",
      "placeholder": "רשמ/י את גילך"
    },
    domProps: {
      "value": (_vm.user.age)
    },
    on: {
      "change": _vm.ageValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "age", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.ageErrorMessage))])]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.genderGreenOn,
      'form-group has-danger': !_vm.genderGreenOn
    }
  }, [_vm._m(6), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.gender),
      expression: "user.gender"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "oninvalid": "this.setCustomValidity('נא בחר/י מגדר')"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.$set(_vm.user, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
      }, _vm.genderValidate]
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("האם את/ה בן או בת?")]), _vm._v(" "), _c('option', {
    attrs: {
      "Value": "בן"
    }
  }, [_vm._v("בן")]), _vm._v(" "), _c('option', {
    attrs: {
      "Value": "בת"
    }
  }, [_vm._v("בת")])]), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.genderErrorMessage))])]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.nicknameGreenOn,
      'form-group has-danger': !_vm.nicknameGreenOn
    }
  }, [_vm._m(7), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.nickname),
      expression: "user.nickname"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "type": "text",
      "placeholder": "בחר/י כינוי",
      "oninvalid": "this.setCustomValidity('נא בחר/י כינוי')"
    },
    domProps: {
      "value": (_vm.user.nickname)
    },
    on: {
      "change": _vm.nicknameValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "nickname", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.nicknameErrorMessage))])]), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.passGreenOn,
      'form-group has-danger': !_vm.passGreenOn
    }
  }, [_vm._m(8), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.psw),
      expression: "user.psw"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "type": "password",
      "placeholder": "בחר/י סיסמא",
      "oninvalid": "this.setCustomValidity('נא בחר/י סיסמא')"
    },
    domProps: {
      "value": (_vm.user.psw)
    },
    on: {
      "change": _vm.passValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "psw", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.passErrorMessage))])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "icon",
    attrs: {
      "id": "icons"
    }
  }, [_c('div', {
    on: {
      "click": _vm.imageSelector
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/happy_boy_preview_2.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tickmark"
  }, [_vm._v("✔")])]), _vm._v(" "), _c('div', {
    on: {
      "click": _vm.imageSelector
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/happy_girl_preview_2.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tickmark"
  }, [_vm._v("✔")])]), _vm._v(" "), _c('div', {
    on: {
      "click": _vm.imageSelector
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/sad_girl_preview_1.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tickmark"
  }, [_vm._v("✔")])]), _vm._v(" "), _c('div', {
    on: {
      "click": _vm.imageSelector
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/sad_boy_preview_1.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tickmark"
  }, [_vm._v("✔")])])]), _vm._v(" "), _c('input', {
    staticClass: "submitForm",
    attrs: {
      "type": "submit",
      "value": "הירשמ/י"
    },
    on: {
      "click": _vm.registerFormValidation
    }
  })]), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rampUp === 'login'),
      expression: "rampUp === 'login'"
    }],
    on: {
      "submit": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('h4', [_vm._v("כניסה לחשבונך")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(10), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.existUser.nickname),
      expression: "existUser.nickname"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "כינוי",
      "oninvalid": "this.setCustomValidity('נא מלא/י את הכינוי שלך')",
      "required": ""
    },
    domProps: {
      "value": (_vm.existUser.nickname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.existUser, "nickname", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(12), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.existUser.psw),
      expression: "existUser.psw"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "סיסמא",
      "oninvalid": "this.setCustomValidity('נא מלא/י הסיסמא שלך')",
      "required": ""
    },
    domProps: {
      "value": (_vm.existUser.psw)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.existUser, "psw", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('input', {
    staticClass: "submitForm container",
    attrs: {
      "type": "submit",
      "value": "היכנס/י"
    },
    on: {
      "click": _vm.loginFormValidation
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "psw",
    on: {
      "click": _vm.showPassRecoverArea
    }
  }, [_vm._v("\n            שכחת את הסיסמא שלך?\n            "), _c('u', [_vm._v("לחצ/י כאן")])])]), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPassRecover === true),
      expression: "showPassRecover === true"
    }],
    on: {
      "submit": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('h4', [_vm._v("שחזור סיסמא")]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    class: {
      'form-group has-success': _vm.emailGreenOn,
      'form-group has-danger': !_vm.emailGreenOn
    }
  }, [_vm._m(14), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.emailForRecover),
      expression: "emailForRecover"
    }],
    staticClass: "form-control form-control-success",
    attrs: {
      "placeholder": "Email",
      "name": "Email",
      "aria-describedby": "emailHelp"
    },
    domProps: {
      "value": (_vm.emailForRecover)
    },
    on: {
      "change": _vm.emailValidate,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.emailForRecover = $event.target.value
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.emailErrorMessage))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(15), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nicknameForRecover),
      expression: "nicknameForRecover"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "כינוי",
      "oninvalid": "this.setCustomValidity('נא מלא/י את הכינוי שלך')",
      "required": ""
    },
    domProps: {
      "value": (_vm.nicknameForRecover)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nicknameForRecover = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('input', {
    staticClass: "submitForm required-field",
    attrs: {
      "type": "submit",
      "value": "שלח/י"
    },
    on: {
      "click": _vm.sendPass
    }
  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("\n        שעות הפעילות של הצוות: 8:00-22:00, בימים א-ה.\n    ")]), _vm._v(" "), _vm._m(16)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n\n        היי לך!"), _c('img', {
    staticClass: "smiley",
    attrs: {
      "src": "/static/hey_smiley.jpg"
    }
  }), _vm._v("  מה נשמע?\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "emailOrPhone"
  }, [_vm._v("רשמ/י אימייל\n                "), _c('span', {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("או")]), _vm._v("\n                פלאפון של אבא או אמא. "), _c('br'), _vm._v(" בשאר השדות חובה למלא את כולם. ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('strong', [_vm._v("אימייל הורה")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('strong', [_vm._v(" פלאפון הורה / טלפון בבית")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("שם")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("גיל")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("מגדר")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("כינוי")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("סיסמא")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('b', [_vm._v("       לבסוף, בחר/י דמות שתשמש אותך באפליקציה:      ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field2"
  }, [_c('strong', [_vm._v("מידע דרוש")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("כינוי")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("סיסמא")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field2"
  }, [_c('strong', [_vm._v("מידע דרוש")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "form-group required-field"
  }, [_c('strong', [_vm._v("אימייל הורה")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "required-field"
  }, [_c('strong', [_vm._v("כינוי")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "copyRights"
  }, [_vm._v("\n        © האפליקציה נבנתה ע\"י מיכאל שחר\n        "), _c('br'), _vm._v("\n        michael101sh@gmail.com\n    ")])
}]}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isInside === true),
      expression: "isInside === true"
    }],
    staticClass: "container"
  }, 'div', _vm.referToRampUp(_vm.isInside), false), [_c('div', {
    staticClass: "forumBackground"
  }), _vm._v(" "), _c('home-nav'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h2', [_vm._v(" פורום התייעצות ")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('label', [_vm._v(" חיפוש:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchQuery),
      expression: "searchQuery"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.searchQuery)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchQuery = $event.target.value
      }, _vm.showRelevantChats]
    }
  }), _vm._v(" "), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row chat-container"
  }, _vm._l((_vm.relevantChats), function(element) {
    return _c('div', {
      key: element._id,
      staticClass: "col-6 col-sm-4 col-md-3 chatWrap"
    }, [_c('div', {
      staticClass: "chat"
    }, [_c('div', {
      staticClass: "chatBody"
    }, [_c('strong', {
      staticClass: "title"
    }, [_vm._v("\n                        " + _vm._s(element.title) + " ")]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._l((element.content), function(message) {
      return _c('div', {
        key: message
      }, [_c('strong', [_vm._v(" " + _vm._s(message.userNickname + ': ') + " ")]), _vm._v("\n                         " + _vm._s(message.content) + "\n                     "), _c('br'), _vm._v(" "), _c('br'), _vm._v("\n                         " + _vm._s("תאריך: " + message.date) + "\n                            "), _c('hr')])
    })], 2), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          return _vm.onChatClick(element._id)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.contReadMessage) + "\n                ")]), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (element.isLocked === false),
        expression: "element.isLocked === false"
      }],
      on: {
        "click": function($event) {
          return _vm.showTextBox(element._id)
        }
      }
    }, [_vm._v("הוספת תגובה")])])])
  }), 0)], 1)
},staticRenderFns: []}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('br'), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isInside === true),
      expression: "isInside === true"
    }],
    staticClass: "container"
  }, 'div', _vm.referToRampUp(_vm.isInside), false), [_c('div', {
    staticClass: "forumBackground"
  }), _vm._v(" "), _c('home-nav'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h2', [_vm._v(" הודעות פרטיות ")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('label', [_vm._v(" חיפוש:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchQuery),
      expression: "searchQuery"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.searchQuery)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchQuery = $event.target.value
      }, _vm.showRelevantChats]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row chat-container"
  }, _vm._l((_vm.relevantChats), function(element) {
    return _c('div', {
      key: element,
      staticClass: "col-6 col-sm-4 col-md-3 chatWrap"
    }, [_c('div', {
      staticClass: "chat"
    }, [_c('div', {
      staticClass: "chatBody"
    }, [_c('strong', {
      staticClass: "title"
    }, [_vm._v("\n                        " + _vm._s(element.title) + " ")]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._l((element.content), function(message) {
      return _c('div', {
        key: message
      }, [_c('strong', [_vm._v(" " + _vm._s(message.userNickname + ': ') + " ")]), _vm._v("\n                        " + _vm._s(message.content) + "\n                        "), _c('br'), _vm._v(" "), _c('br'), _vm._v("\n                        " + _vm._s("תאריך: " + message.date) + "\n                        "), _c('hr')])
    })], 2), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          return _vm.onChatClick(element._id)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.contReadMessage) + "\n                ")]), _vm._v(" "), _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (element.isLocked === false),
        expression: "element.isLocked === false"
      }],
      on: {
        "click": function($event) {
          return _vm.showTextBox(element._id)
        }
      }
    }, [_vm._v("הוספת תגובה")])])])
  }), 0), _vm._v(" "), _c('br'), _c('br'), _c('br')], 1)
},staticRenderFns: []}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isInside === true && _vm.isPsyc === true),
      expression: "isInside === true && isPsyc === true"
    }]
  }, 'div', _vm.referToRampUp(_vm.isInside), false), [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": _vm.icon
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "buttonStyle",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("  " + _vm._s(_vm.logoutButtonMessage) + "\n    ")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "design",
    on: {
      "click": _vm.privateArea
    }
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.privateArea
    }
  }, [_c('strong', [_vm._v("לאזור ההודעות הפרטיות")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "privateArea",
    attrs: {
      "src": "/static/private_messages.png"
    },
    on: {
      "click": _vm.privateArea
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "design",
    staticStyle: {
      "color": "blue"
    }
  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.forum
    }
  }, [_c('strong', [_vm._v("פורום")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "forum",
    attrs: {
      "src": "/static/forum.png"
    },
    on: {
      "click": _vm.forum
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "design",
    on: {
      "click": _vm.tell
    }
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.tell
    }
  }, [_c('strong', [_vm._v(" להוספת הודעה בפורום ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "tell",
    attrs: {
      "src": "/static/speaking.png"
    },
    on: {
      "click": _vm.tell
    }
  })])]), _vm._v(" "), _c('h2', [_vm._v(" ניהול משתמשים ופניות ")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped table-bordered"
  }, [_c('caption', [_vm._v("משתמשים")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l((_vm.users), function(element) {
    return _c('tr', [_c('td', [_vm._v(" " + _vm._s(element.name) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.nickname) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.email) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.phone) + " ")]), _vm._v(" "), _c('td', [_c('click-confirm', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": element.isVerified === true
      },
      on: {
        "click": function($event) {
          return _vm.isConfirmed(element._id,
            element.isVerified)
        }
      }
    })])], 1), _vm._v(" "), _c('td', [_c('click-confirm', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": element.isPsychologist === true
      },
      on: {
        "click": function($event) {
          return _vm.isPsy(element._id,
            element.isPsychologist)
        }
      }
    })])], 1), _vm._v(" "), _c('td', [_c('click-confirm', [_c('button', {
      on: {
        "click": function($event) {
          return _vm.deleteUser(element._id)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.deleteMessage) + "\n                    ")])])], 1)])
  })], 2)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped table-bordered"
  }, [_c('caption', [_vm._v("פניות")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l((_vm.chats), function(element) {
    return _c('tr', {
      class: {
        'critical': element.critical
      }
    }, [_c('td', [_c('strong', [_vm._v(" " + _vm._s(element.priority) + " ")])]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.content[0].userName) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.content[0].userNickname) + " ")]), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": '#/chat?id=' + String(element._id)
      }
    }, [_vm._v(" קישור\n                ")])]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.content[0].date) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(element.feel) + " ")]), _vm._v(" "), _c('td', [_c('click-confirm', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": element.wasTreated === true
      },
      on: {
        "click": function($event) {
          return _vm.setTreat(element._id,
            element.wasTreated)
        }
      }
    })])], 1), _vm._v(" "), _c('td', [_c('click-confirm', [_c('button', {
      on: {
        "click": function($event) {
          return _vm.deleteChat(element._id)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.deleteMessage) + "\n                    ")])])], 1)])
  })], 2)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("שם")]), _c('th', [_vm._v("כינוי")]), _c('th', [_vm._v("אימייל")]), _c('th', [_vm._v("טלפון/פלאפון")]), _vm._v(" "), _c('th', [_vm._v("אישור/ביטול אישור משתמש")]), _vm._v(" "), _c('th', [_vm._v(" סימון כפסיכולוג ")]), _vm._v(" "), _c('th', [_vm._v("מחיקת משתמש")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("דחיפות")]), _c('th', [_vm._v("שם")]), _c('th', [_vm._v("כינוי")]), _c('th', [_vm._v("קישור")]), _vm._v(" "), _c('th', [_vm._v("תאריך")]), _c('th', [_vm._v("איך מרגיש/ה")]), _vm._v(" "), _c('th', [_vm._v("האם טופל")]), _vm._v(" "), _c('th', [_vm._v(" מחיקת פנייה")])])
}]}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isInside === true),
      expression: "isInside === true"
    }]
  }, 'div', _vm.referToRampUp(_vm.isInside), false), [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": _vm.icon
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "buttonStyle",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("\n      " + _vm._s(_vm.logoutButtonMessage))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h2', [_vm._v(" " + _vm._s(_vm.feelMessage) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "feelingNow"
  }, [_c('label', {
    staticClass: "worst"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "feeling"
    },
    on: {
      "click": function($event) {
        return _vm.setFeeling(1)
      }
    }
  }), _vm._v(" 1 - הכי גרוע ")]), _vm._v(" "), _c('label', {
    staticClass: "medium"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "feeling"
    },
    on: {
      "click": function($event) {
        return _vm.setFeeling(2)
      }
    }
  }), _vm._v("  2 - בינוני  ")]), _vm._v(" "), _c('label', {
    staticClass: "regular"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "feeling"
    },
    on: {
      "click": function($event) {
        return _vm.setFeeling(3)
      }
    }
  }), _vm._v(" 3 - רגיל  ")]), _vm._v(" "), _c('label', {
    staticClass: "nice"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "feeling"
    },
    on: {
      "click": function($event) {
        return _vm.setFeeling(4)
      }
    }
  }), _vm._v(" 4 - נחמד ")]), _vm._v(" "), _c('label', {
    staticClass: "best"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "feeling"
    },
    on: {
      "click": function($event) {
        return _vm.setFeeling(5)
      }
    }
  }), _vm._v("  5 - סבבה ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.feel === 1 || this.feel === 2),
      expression: "this.feel === 1 || this.feel === 2"
    }],
    staticClass: "worstTreat"
  }, [_vm._m(0), _c('p', {
    staticClass: "urgency",
    attrs: {
      "id": "urgency"
    }
  }, [_vm._v("\n" + _vm._s(_vm.urgencyCheckMessage) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "notUrgentButton",
    attrs: {
      "id": "not_urgent_button"
    },
    on: {
      "click": _vm.notUrgentTreat
    }
  }, [_vm._v("לא דחוף")]), _vm._v(" "), _c('button', {
    staticClass: "urgentButton",
    attrs: {
      "id": "urgent_button"
    },
    on: {
      "click": _vm.urgentTreat
    }
  }, [_vm._v("דחוף")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.notUrgent === 'on'),
      expression: "notUrgent === 'on'"
    }],
    staticClass: "moveToTell",
    on: {
      "click": _vm.tell
    }
  }, [_c('img', {
    staticClass: "tell",
    attrs: {
      "src": "/static/speaking.png"
    },
    on: {
      "click": _vm.tell
    }
  }), _vm._v(" " + _vm._s(_vm.makeCallMessage) + "\n          "), _c('br'), _vm._v(" "), _c('br')]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.urgent === 'on'),
      expression: "urgent === 'on'"
    }],
    staticClass: "urgentTreat",
    attrs: {
      "id": "urgent_treat"
    }
  }, [_vm._v("\n" + _vm._s(_vm.urgencyMessage) + "\n      ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (this.feel === 3 || this.feel === 4 || this.feel === 5),
      expression: "this.feel === 3 || this.feel === 4 || this.feel === 5"
    }],
    staticClass: "goodTreat"
  }, [_c('ul', [_c('li', {
    staticClass: "design",
    on: {
      "click": _vm.tell
    }
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.tell
    }
  }, [_c('strong', [_vm._v(" רוצה לספר ")])]), _vm._v(" "), _c('img', {
    staticClass: "tell",
    attrs: {
      "src": "/static/speaking.png"
    },
    on: {
      "click": _vm.tell
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "design"
  }, [_c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.forum
    }
  }, [_c('strong', [_vm._v(" פורום *")])]), _vm._v(" "), _c('img', {
    staticClass: "forum",
    attrs: {
      "src": "/static/forum.png"
    },
    on: {
      "click": _vm.forum
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("\n          * בפורום מופיעות פניות ושאלות של תלמידים אחרים וגם הפניות שלך, אם כתבת.\n        ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "design"
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.privateArea
    }
  }, [_c('strong', [_vm._v(" לאזור ההודעות הפרטיות ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "tell",
    attrs: {
      "src": "/static/private_messages.png"
    },
    on: {
      "click": _vm.privateArea
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "design"
  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": _vm.forum
    }
  }, [_c('strong', [_vm._v(" פורום")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    staticClass: "forum",
    attrs: {
      "src": "/static/forum.png"
    },
    on: {
      "click": _vm.forum
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n          כאב הוא תחושה אישית. כל אדם מרגיש אותו בעוצמות שונות וזקוק למשהו מרגיע בהתאם לעוצמה.\n          "), _c('br'), _vm._v(" "), _c('br')])
}]}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isInside === true),
      expression: "isInside === true"
    }]
  }, 'div', _vm.referToRampUp(_vm.isInside), false), [_c('home-nav'), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h2', [_vm._v(" " + _vm._s(_vm.title) + " ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sendingStatus != true),
      expression: "sendingStatus != true"
    }],
    staticClass: "container"
  }, [_vm._v(" רציתי להגיד ש:")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sendingStatus != true),
      expression: "sendingStatus != true"
    }],
    staticClass: "textBox container",
    on: {
      "submit": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.publishTitle),
      expression: "publishTitle"
    }, {
      name: "show",
      rawName: "v-show",
      value: (_vm.isPsychologist === true),
      expression: "isPsychologist===true"
    }],
    staticClass: "publishTitle",
    attrs: {
      "placeholder": "כותרת"
    },
    domProps: {
      "value": (_vm.publishTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.publishTitle = $event.target.value
      }
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.callText),
      expression: "callText"
    }],
    attrs: {
      "rows": "8",
      "cols": "50",
      "placeholder": _vm.holderMessage,
      "required": ""
    },
    domProps: {
      "value": (_vm.callText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.callText = $event.target.value
      }
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', [_c('input', {
    attrs: {
      "type": "checkbox"
    },
    on: {
      "click": _vm.privacy
    }
  })]), _vm._v(" "), _c('p', [_vm._v("  הפנייה שלי פרטית ")]), _vm._v(" "), _c('button', {
    staticClass: "sendPostButton",
    on: {
      "click": function($event) {
        return _vm.sendCall(_vm.afterPost)
      }
    }
  }, [_vm._v("שליחה")])]), _vm._v(" "), _c('label', {
    class: {
      'okMessage container': _vm.sendingStatus,
      'failedMessage container': !_vm.sendingStatus
    }
  }, [_vm._v(" " + _vm._s(_vm.sendMessage) + " ")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sendingStatus != true),
      expression: "sendingStatus != true"
    }],
    staticClass: "container",
    staticStyle: {
      "color": "red",
      "white-space": "pre"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.privacyMessage) + "\n           ")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sendingStatus === true),
      expression: "sendingStatus === true"
    }],
    staticClass: "cursor container",
    staticStyle: {
      "color": "green"
    },
    on: {
      "click": _vm.tell
    }
  }, [_vm._v("\n               " + _vm._s(_vm.anotherCallMessage) + "\n              "), _c('img', {
    staticClass: "forum",
    attrs: {
      "src": "/static/speaking.png"
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sendingStatus === true && _vm.isPsychologist === false),
      expression: "sendingStatus === true && isPsychologist === false"
    }],
    staticClass: "afterPost"
  }, [_c('p', {
    staticClass: "container"
  }, [_vm._v("\n        פסיכולוג/ית מקצועי/ת יענה/תענה על פנייתך תוך 3 שעות.\n             ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "advice container"
  }, [_vm._v("\n\n              " + _vm._s(_vm.untilResponseMessage) + "    ")]), _vm._v(" "), _c('ul', {
    staticClass: "suggestions list-centered"
  }, [_vm._m(0), _vm._v(" "), _c('li', [_c('strong', [_vm._v("  " + _vm._s(_vm.adultsYouTrustMessage))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sendingStatus === true),
      expression: "sendingStatus === true"
    }],
    staticClass: "cursor container",
    staticStyle: {
      "color": "blue",
      "margin-top": "6px"
    },
    on: {
      "click": _vm.forumRef
    }
  }, [_vm._v("\n                " + _vm._s(_vm.forumRedirectMessage) + "\n                "), _c('img', {
    staticClass: "forum",
    attrs: {
      "src": "/static/forum.png"
    }
  })])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('strong', [_vm._v("\n\n                      לעשות דברים שמרגיעים אותך\n                      ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('strong', [_vm._v("לשתף את ההורים")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('strong', [_vm._v("לשתף חבר")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('strong', [_vm._v(" להתייעץ, בדיוק כמו שעשית")])])
}]}

/***/ })
],[33]);
//# sourceMappingURL=app.39b556f233998856a4e3.js.map