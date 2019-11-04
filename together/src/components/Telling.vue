<template>
    <div v-show="isInside === true" v-bind="referToRampUp(isInside)">

    <home-nav></home-nav>
    <br><br>
      <h2> {{title}} </h2>
      <br>
      <div class="container">
          <h4 class="container" v-show="sendingStatus != true"> רציתי להגיד ש:</h4>
          <br>
          <form class="textBox container" v-on:submit.prevent
              v-show="sendingStatus != true">
             <!--match the size of the textbox to the screen -->
               <input placeholder="כותרת" class="publishTitle" v-model="publishTitle"
                      v-show="isPsychologist===true">
               <textarea v-model="callText" rows="8" cols="50"
                        :placeholder="holderMessage" required></textarea>
                <br>
                <label>
                <input type="checkbox" v-on:click="privacy">
                     </label>
                <p>&nbsp הפנייה שלי פרטית </p>

                <button class="sendPostButton" v-on:click="sendCall(afterPost)">שליחה</button>
            </form>
            <label v-bind:class="{'okMessage container': sendingStatus,
                 'failedMessage container': !sendingStatus}"> {{sendMessage}} </label>
              <p class="container" v-show="sendingStatus != true"
                 style="color:red; white-space: pre;">
                {{privacyMessage}}
             </p>
             <p class="cursor container" v-on:click="tell" style="color:green;"
                v-show="sendingStatus === true">
                 {{anotherCallMessage}}
                <img src="/static/speaking.png" class="forum">

             </p>
            <div class="afterPost"
                 v-show="sendingStatus === true && isPsychologist === false">
               <p class="container">
          פסיכולוג/ית מקצועי/ת יענה/תענה על פנייתך תוך 3 שעות.
               </p>
                <br>

                      <p class="advice container">

                {{untilResponseMessage}}    </p>

              <ul class="suggestions list-centered">
                    <li>
                        <strong>

                        לעשות דברים שמרגיעים אותך
                        </strong>

                    </li>
            <li>

             <strong>  {{adultsYouTrustMessage}}</strong>

            </li>
                    <li>
                        <strong>לשתף את ההורים</strong>
                    </li>
                      <li>
                          <strong>לשתף חבר</strong>
                      </li>
                      <li>
                          <strong> להתייעץ, בדיוק כמו שעשית</strong>
                      </li>
              </ul>
         </div>
              <p v-on:click="forumRef" class="cursor container"
                 style="color:blue; margin-top:6px;" v-show="sendingStatus === true">
                  {{forumRedirectMessage}}
                  <img src="/static/forum.png" class="forum">

              </p>
       </div>
  </div>
</template>

<script>
    import { store } from '../store.js';
    import HomeNav from '../components/HomeNav.vue'
    import {date} from "../utilities/date.js";
    import {sendMessage} from "../services/chat.service.js"

    export default {
      name: 'telling',
        components: {
            HomeNav
        },
      data () {
        return {
          title: this.setTitle(),
          callText: '',
          sendingStatus: false,
          sendMessage: '',
          store: store,
          feel: store.state.feel,
          isPublic: true,
          isInside: store.state.user ? true : false,
          publishTitle: '',
          privacyMessage: this.setPrivacyMessage(),
          holderMessage: this.setHolderMessage(),
          forumRedirectMessage: this.setForumRedirectMessage(),
          anotherCallMessage: this.setAnotherCallMessage(),
          untilResponseMessage: this.setUntilResponseMessage(),
          adultsYouTrustMessage: this.setAdultsYouTrustMessage(),
          isPsychologist: store.state.user.isPsychologist? true : false
        }
      },
      methods: {
        setTitle () {
          if (store.state.user.isPsychologist) {
              return 'הוספת הודעה בפורום'
          } else{
              return 'אנחנו רוצים לשמוע אותך';
          }
        },
        home() {
              location.href = '#/home'
        },
        forumRef () {
              location.href = '#/forum'
        },
        textBoxValidation () {
            if (this.callText !== '') {
                return true;
            }
            return false;
        },
        afterPost(flag) {
            if (flag) {
                this.publishTitle = '';
                this.callText = '';
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
            let userNickname = store.state.user.nickname;
            let wasTreated = false;
            let gender = store.state.user.gender;
            if (store.state.user.isPsychologist) {
                isLocked = true;
                userNickname = 'מערכת';
                wasTreated = true;
                if (this.publishTitle === '') {
                    title = 'הודעה מהמערכת';
                } else {
                    title = this.publishTitle;
                }
            }
            else if (gender === 'בן') {
                title = 'פנייה מהמשתמש ' +
                    String(store.state.user.nickname);
            } else {
                title = 'פנייה מהמשתמשת ' +
                    String(store.state.user.nickname);
            }

            let message = {userName: store.state.user.name,
                userNickname: userNickname,
                content: this.callText,
                date: date()
            };
            const data  = {title: title,
                    content: [message], feel: this.feel, isPublic: this.isPublic,
                    isLocked: isLocked, wasTreated: wasTreated
            };
            sendMessage(data, callback, store);
          },
          privacy(){
            this.isPublic = !this.isPublic;
          },
          tell () {
              this.sendMessage = '';
              this.callText = '';
              this.sendingStatus = false;
          },
          setPrivacyMessage() {
            let isPsychologist = store.state.user.isPsychologist;
            if (isPsychologist) {
                return   'שימי לב: \n מה שתרשמי יופיע לכל התלמידים שמשתמשים \n באפליקציה.'
            }
            let gender = store.state.user.gender;
            if (gender === 'בן') {
                return 'שים לב: \n מה שתרשום יופיע לכל התלמידים שמשתמשים \nבאפליקציה.\n אם זו פנייה פרטית, תסמן את זה בבקשה.'
            } else {
                return   'שימי לב: \n מה שתרשמי יופיע לכל התלמידים שמשתמשים \nאפליקציה.\n אם זו פנייה פרטית, תסמני את זה בבקשה.'
            }
          },
          setHolderMessage() {
              let gender = store.state.user.gender;
              if (gender === 'בן') {
                  return 'רשום כאן את תוכן ההודעה/הפנייה'
              } else {
                  return 'רשמי כאן את תוכן ההודעה/הפנייה'
              }
          },
          setForumRedirectMessage() {
              let gender = store.state.user.gender;
              if (gender === 'בן') {
                  return 'לחץ כאן כדי לעבור לפורום'
              } else {
                  return 'לחצי כאן כדי לעבור לפורום'
              }
          },
          setAnotherCallMessage() {
              let gender = store.state.user.gender;
              if (gender === 'בן') {
                  return 'אם ברצונך לשלוח פנייה נוספת (אחרת) לחץ כאן'
              } else {
                  return 'אם ברצונך לשלוח פנייה נוספת (אחרת) לחצי כאן'
              }
          },
          setUntilResponseMessage (){
              let gender = store.state.user.gender;
              if (gender === 'בן') {
                  return 'עד שהפסיכולוג יחזור אליך, בינתיים מה אתה יכול לעשות כשאתה מוטרד?'
              } else {
                  return 'עד שהפסיכולוג יחזור אלייך, בינתיים מה את יכולה לעשות כשאת מוטרדת?'
              }
          },
          setAdultsYouTrustMessage (){
              let gender = store.state.user.gender;
              if (gender === 'בן') {
                  return 'לדבר עם מבוגרים שאתה סומך עליהם'
              } else {
                  return 'לדבר עם מבוגרים שאת סומכת עליהם'
              }
          }
      },
    }

</script>

<style scoped>
    h2{
        color: green;
        font-style: italic;
        display: inline-block;
    }

    div{
        margin: auto;
    }

    form {
        max-width: 400px;
    }
    h4,p{
      direction: rtl;
      float:right;
    }

    div.afterPost{
      float: right;
      font-size: large;
      font-weight: bold;
      color:brown;
    }

    textarea{
      width: 100%;
      direction: rtl;
    }

    label{
        font-weight: bold;
        float:right;
    }

    label.okMessage{
      color:blue;
    }

    label.failedMessage{
        color:red;
    }

    input{
      margin-top: 10px;
      float: right;
      font-size: 14px;
      color: red;
      direction: rtl;
    }

    input.publishTitle{
        width: 100%;
        margin-bottom: 10px;
        color: green;
    }

    button.sendPostButton {
      font-size: 18px;
      color:blue;
      float:left;
      margin-top: 10px;

    }

    p.advice{
      color: blue;
    }

    ul.suggestions {
        color: orange;
        list-style-position: inside;
        font-weight: normal;
        font-size: 16px;
        direction:rtl;
        margin: 0;
        padding: 0;
    }

    img.forum {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    p.cursor {
        cursor: pointer;
    }

</style>