<template>
    <div v-show="isInside === true && isPsyc === true"
         v-bind="referToRampUp(isInside)">
        <img :src=icon class="icon">
        <button class="buttonStyle" v-on:click="logout">  {{logoutButtonMessage}}
        </button>
        <br><br>
            <ul>
                <li class="design"  v-on:click="privateArea">
                    <a href="" v-on:click="privateArea">
                        <strong>לאזור ההודעות הפרטיות</strong> </a>
                    <br>
                    <img src="/static/private_messages.png" class="privateArea"
                         v-on:click="privateArea">
                </li>
                <li class="design" style="color:blue;">
                    <br>
                    <br>
                    <a href="" v-on:click="forum"> <strong>פורום</strong></a>
                    <br>
                    <img src="/static/forum.png" class="forum" v-on:click="forum">
                </li>
                <li class="design"  v-on:click="tell">
                    <a href="" v-on:click="tell">
                        <strong> להוספת הודעה בפורום </strong></a>
                    <br>
                    <img src="/static/speaking.png" class="tell" v-on:click="tell">
                </li>
            </ul>

        <h2> ניהול משתמשים ופניות </h2>

        <div class="table-responsive">
            <table class="table table-striped table-bordered">

            <caption>משתמשים</caption>
                <tr>
                    <th>שם</th><th>כינוי</th><th>אימייל</th><th>טלפון/פלאפון</th>
                    <th>אישור/ביטול אישור משתמש</th>
                    <th> סימון כפסיכולוג </th>
                    <th>מחיקת משתמש</th>
                </tr>
                <tr v-for="user in users" :key="`${user.nickname}`">
                    <td> {{user.name}} </td>
                    <td> {{user.nickname}} </td>
                    <td> {{user.email}} </td>
                    <td> {{user.phone}} </td>
                    <td> 
                        <!-- <click-confirm> -->
                            <input type="checkbox"
                                v-on:click="isConfirmed(user._id,
                                 user.isVerified)"
                                :checked="user.isVerified === true">
                        <!-- </click-confirm> -->
                         </td>
                    <td> 
                        <!-- <click-confirm> -->
                        <input type="checkbox" v-on:click="isPsy(user._id,
                                 user.isPsychologist)"
                                 :checked="user.isPsychologist === true">
                    <!-- </click-confirm> -->
                     </td>
                    <td>
                         <!-- <click-confirm> -->
                        <button v-on:click="deleteUser(user._id)">
                        {{deleteMessage}}
                        </button>
                         <!-- </click-confirm> -->
                          </td>
                </tr>
            </table>
        </div>

        <br>
        <br>
        <div class="table-responsive">
            <table class="table table-striped table-bordered">
                <caption>פניות</caption>
                <tr>
                    <th>דחיפות</th><th>שם</th><th>כינוי</th><th>קישור</th>
                    <th>תאריך</th><th>איך מרגיש/ה</th>
                    <th>האם טופל</th>
                    <th> מחיקת פנייה</th>
                </tr>
                <tr v-for="chat in chats" :key="`${chat._id}`"
                    v-bind:class="{'critical': chat.critical}">
                    <td> <strong> {{chat.priority}} </strong> </td>
                    <td> {{chat.content[0].userName}} </td>
                    <td> {{chat.content[0].userNickname}} </td>
                    <td> <a v-bind:href="'#/chat?id=' + String(chat._id)"> קישור
                    </a> </td>
                    <td> {{chat.content[0].date}} </td>
                    <td> {{chat.feel}} </td>
                    <td>
                         <!-- <click-confirm> -->
                        <input type="checkbox"
                                v-on:click="setTreat(chat._id,
                                 chat.wasTreated)"
                                :checked="chat.wasTreated === true">
                        <!-- </click-confirm> -->
                         </td>
                    <td>
                         <!-- <click-confirm> -->
                        <button v-on:click="deleteChat(chat._id)">
                        {{deleteMessage}}
                        </button> 
                        <!-- </click-confirm>  -->
                        </td>
                </tr>
            </table>
        </div>
    </div>


</template>

<script>
    import * as $ from "jquery";
    import { store } from '../store.js';
    import swal from 'sweetalert2';
    import {getUsers} from "../services/user.service.js";
    import {getChats} from "../services/chat.service.js";

    export default {
        name: 'psyHome',

        data () {
            return {
                chats: this.getAllChats(),
                users: getUsers(this.setUsers),
                store: store,
                isInside: store.state.user ? true : false,
                isPsyc: store.state.user.isPsychologist ? true : false,
                logoutButtonMessage: this.setLogoutMessage(),
                deleteMessage: this.setDeleteMessage(),
                icon: store.state.user.icon
            }
        },
        methods: {
            getAllChats () {
                getChats(this.applyFilteredPriority, true);
                getChats(this.applyFilteredPriority, false);
            },
            filterChats(data) {
                if (!this.chats) {
                    this.chats = [];
                }
                return this.chats.concat(data.filter(function (entry) {
                        return entry.content[0].userNickname !== 'מערכת';
                }));
            },
            applyFilteredPriority(data) {
                this.addPriority(this.filterChats(data));
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
                for (let i = 0; i < list.length; i++){
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
                            list[i].waitingTime +=
                                now.getHours() - todayStartTime.getHours();
                            list[i].waitingTime +=
                                now.getMinutes() / 60;
                        }

                        /* if elementDate > yesEndTime, the user contact
                           out of works hours */
                        /* if elementDate <= yesEndTime so the user contact
                            not only before today, but in work hours of
                            -> past days <-
                         */
                        if (elementDate <= yesEndTime) {
                            list[i].waitingTime += yesEndTime.getHours()
                                 - elementDate.getHours();
                            list[i].waitingTime -=
                                elementDate.getMinutes() / 60;
                      }
                      /* the user contact today so add the time he waited
                         until now */
                    } else {
                        list[i].waitingTime =
                            now.getHours() - elementDate.getHours();
                        list[i].waitingTime +=
                            now.getMinutes() / 60 -
                            elementDate.getMinutes() / 60;

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
                list.sort(function(first, second){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    let firstDate = new Date(first.content[0].date);
                    let secondDate = new Date(second.content[0].date);
                    if (firstDate.getDay() === secondDate.getDay()&&
                        firstDate.getMonth() === secondDate.getMonth() &&
                        firstDate.getFullYear() === secondDate.getFullYear()) {
                        let firstDiff = first.waitingTime;
                        let secondDiff = second.waitingTime;
                        let firstMinutes = firstDiff * 60;
                        let secondMinutes = secondDiff * 60;
                        if (Math.abs(firstMinutes - secondMinutes) <= 15
                            && first.feel !== second.feel) {
                            return first.feel - second.feel
                        } else {
                            return secondDiff - firstDiff;
                        }
                    }
                });
                for (let i = 0, len = list.length; i < len; i++) {
                    list[i].priority = i + 1;
                }
                this.chats = list;
                // return list;
            },
            setUsers(users) {
                this.users=users;
            },
            isConfirmed(id, isVerified){
                console.log("isConfirmed called")
                isVerified = (null !== isVerified) ? !isVerified : true;
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/users/setConfirmation/'
                     + String(id),
                    type:"PATCH",
                    method: 'patch',
                    data: JSON.stringify
                        ({isVerified: isVerified, _method: "PATCH"}),
                    contentType:"application/json; charset=utf-8",
                    dataType:"json"
                }).then(res => {
                    let self = this;
                    if (isVerified) {
                        swal(
                            'המשתמש/ת אושרה/ה בהצלחה',
                            '',
                            'success'
                        ).then(function (){
                                self.getUsers();
                            }
                        );
                    } else {
                        swal(
                            'ביטול אישור המשתמש/ת בוצע בהצלחה',
                            '',
                            'success'
                        ).then(function (){
                            self.getUsers();
                          }
                        );
                    }
                });
            },
            isPsy(id, isPsychologist){
                isPsychologist = (null !== isPsychologist) ? !isPsychologist : true;
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/users/setPsyc/'
                    + String(id),
                    type:"PATCH",
                    method: 'patch',
                    data: JSON.stringify
                    ({isPsychologist: isPsychologist, _method: "PATCH"}),
                    contentType:"application/json; charset=utf-8",
                    dataType:"json"
                }).then(res => {
                    let self = this;
                    if (isPsychologist) {
                        swal(
                            'המשתמש/ת סומן כפסיכולוג/ית בהצלחה',
                            '',
                            'success'
                        ).then(function (){
                                self.getUsers();
                            }
                        );
                    } else {
                        swal(
                            'ביטול סימן כפסיכולוג/ית בוצע בהצלחה',
                            '',
                            'success'
                        ).then(function (){
                                self.getUsers();
                            }
                        );
                    }
                });
            },
            deleteUser(id) {
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/users/'
                    + String(id),
                    type:"DELETE",
                    dataType:"json"
                })
            },
            deleteChat(id) {
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/chats/'
                    + String(id),
                    type: "DELETE",
                    dataType: "json"
                }).then(res => {
                    let self = this;
                        swal(
                            'הפנייה נמחקה בהצלחה',
                            '',
                            'success'
                        ).then(function (){
                                self.getAllChats();
                            }
                        );
                    })
            },
            forum () {
                location.href = '#/forum'
            },
            tell () {
                location.href = '#/telling'
            },
            privateArea () {
                location.href = '#/privateMessages'
            },
            logout () {
                store.commit('reset');
                location.href = '#/';
            },
            setLogoutMessage() {
                let gender = store.state.user.gender;
                if (gender === 'בן') {
                    return 'התנתק מהחשבון שלך'
                } else {
                    return 'התנתקי מהחשבון שלך'
                }
            },
            setDeleteMessage() {
                let gender = store.state.user.gender;
                if (gender === 'בן') {
                    return 'מחק'
                } else {
                    return 'מחקי'
                }
            },
            setTreat(id, wasTreated) {
                wasTreated = (null !== wasTreated) ? !wasTreated : true;
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/chats/setTreatStatus/'
                    + String(id),
                    type: "PATCH",
                    method: 'patch',
                    data: JSON.stringify
                    ({wasTreated: wasTreated, _method: "PATCH"}),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json"
                }).then(res => {
                    let self = this;
                    if (wasTreated) {
                        swal(
                            'הפנייה סומנה כטופלה',
                            '',
                            'success'
                        ).then(function () {
                            self.getAllChats();
                        }
                        );
                    } else {
                        swal(
                            'הפנייה סומנה כעדיין דרושה טיפול',
                            '',
                            'success'
                        ).then(function () {
                                self.getAllChats();
                            }
                        );
                    }
                });
            }
        }
    }

</script>



<style scoped>

  h2{
    color: green;
    font-style: italic;
  }

 table {
     direction: rtl;
     border-collapse: separate;
     margin: auto;
 }

  .table-responsive {
      direction: rtl;
  }
  .table-responsive > table {
      direction: rtl;
  }
  table.table-bordered {
      border: 1px solid green;
  }
  table.table tr th{
      border: green solid 1px;
  }

  .table td, th {
     border: green solid 1px;
     text-align: center;
 }
  caption{
      caption-side: top;
      text-align: center;
      font-weight: bold;
      text-decoration: underline;
      color: blue;
      font-size:20px;
  }
  .critical {
     background-color: rgba(255,0,0,0.4);
  }

  div.forum{
      display:inline-block;
      margin-right: 50px;
  }

  .design{
      display:inline-block;
      margin-right: 50px;
  }
  img.icon {
        width: 120px;
        height: 120px;
  }

  img.forum {
      width: 50px;
      height: 50px;
      cursor: pointer;
   }
  img.tell {
      width: 50px;
      height: 50px;
      cursor: pointer;
  }

  img.privateArea {
      width: 50px;
      height: 50px;
      cursor: pointer;
  }
  .buttonStyle{
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      border: none;
      cursor: pointer;
  }

  ul{
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
