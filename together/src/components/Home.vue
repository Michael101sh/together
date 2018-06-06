<template>
  <div v-show="isInside === true" v-bind="referToRampUp(isInside)">
      <img :src=icon class="icon">
      <button class="buttonStyle" v-on:click="logout">
      {{logoutButtonMessage}}</button>
      <br>
      <h2> {{feelMessage}} </h2>

      <div class="feelingNow">
          <label class="worst">
          <input type="radio" name="feeling"
                 v-on:click="setFeeling(1)"> 1 - הכי גרוע </label>
          <label class="medium">
          <input type="radio" name="feeling"
                 v-on:click="setFeeling(2)">  2 - בינוני  </label>
          <label class="regular"> <input type="radio" name="feeling"
                 v-on:click="setFeeling(3)"> 3 - רגיל  </label>
          <label class="nice">
          <input type="radio" name="feeling"
                 v-on:click="setFeeling(4)"> 4 - נחמד </label>
          <label class="best">
          <input type="radio" name="feeling"
                 v-on:click="setFeeling(5)">  5 - סבבה </label>
        </div>

      <div v-show="this.feel === 1 || this.feel === 2" class="worstTreat">
        <p>
          כאב הוא תחושה אישית. כל אדם מרגיש אותו בעוצמות שונות וזקוק למשהו מרגיע בהתאם לעוצמה.
          <br> <br>
           <p class="urgency" id="urgency">
{{urgencyCheckMessage}}
      </p>
      <button class="notUrgentButton" id="not_urgent_button"
              v-on:click="notUrgentTreat">לא דחוף</button>

      <button class="urgentButton" id="urgent_button"
              v-on:click="urgentTreat">דחוף</button>
      <br><br>
      <div class="moveToTell" v-on:click="tell"
         v-show="notUrgent === 'on'">
        <img src="/static/speaking.png" class="tell"
             v-on:click="tell"> {{makeCallMessage}}
          <br>
          <br>
      </div>

      <p class="urgentTreat" id="urgent_treat" v-show="urgent === 'on'">
{{urgencyMessage}}
      </p>
      </div>

      <div class="goodTreat"
           v-show="this.feel === 3 || this.feel === 4 || this.feel === 5">
          <ul>
              <li class="design"  v-on:click="tell">
                  <a href="" v-on:click="tell"> <strong> רוצה לספר </strong></a>
                  <img src="/static/speaking.png" class="tell" v-on:click="tell">
              </li>
              <li class="design">
                  <br>
                  <a href="" v-on:click="forum"> <strong> פורום *</strong></a>
                  <img src="/static/forum.png" class="forum" v-on:click="forum">
              </li>
          </ul>

        <p>
          * בפורום מופיעות פניות ושאלות של תלמידים אחרים וגם הפניות שלך, אם כתבת.
        </p>
      </div>
      <br>
      <ul>
          <li class="design">
              <a href="" v-on:click="privateArea"> <strong> לאזור ההודעות הפרטיות </strong></a>
              <br>
              <img src="/static/private_messages.png" class="tell" v-on:click="privateArea">
          </li>
          <li class="design">
              <br>
              <br>
              <a href="" v-on:click="forum"> <strong> פורום</strong></a>
              <br>
              <img src="/static/forum.png" class="forum" v-on:click="forum">
          </li>
      </ul>

  </div>
</template>

<script>
    import { store } from '../store.js';

    export default {
      name: 'home',
      data () {
        return {
          treatType: '',
          urgent: '',
          notUrgent: '',
          feel: store.state.feel,
          store: store,
          isInside: store.state.user ? true : false,
          feelMessage: this.setFeelingMessage(),
          urgencyCheckMessage : this.setUrgencyCheckMessage(),
          urgencyMessage: this.setUrgencyMessage(),
          makeCallMessage: this.setMakeCallMessage(),
          logoutButtonMessage: this.setLogoutMessage(),
          icon: store.state.user.icon
        }
  },
  methods: {
        setFeelingMessage () {
            let gender = store.state.user.gender;
            if (gender === 'בן') {
              return 'איך אתה מרגיש עכשיו?'
            } else {
              return 'איך את מרגישה עכשיו?'
          }
        },
        setUrgencyMessage() {
            let gender = store.state.user.gender;
            if (gender === 'בן') {
              return '        פנה באופן מיידי למבוגר הקרוב אליך: אמא, אבא, מחנכ/ת, יועצת, או התקשר 050-9519559 ל"ביחד"'
            } else {
              return '        פני באופן מיידי למבוגר הקרוב אלייך: אמא, אבא, מחנכ/ת, יועצת, או התקשרי 050-9519559 ל"ביחד"'
            }
         },
        setUrgencyCheckMessage() {
          let gender = store.state.user.gender;
          if (gender === 'בן') {
              return 'לפני שתמשיך, אנא בחר את רמת הדחיפות בה אתה זקוק לעזרה.'
          } else {
              return 'לפני שתמשיכי, אנא בחרי את רמת הדחיפות בה את זקוקה לעזרה.'
          }
        },
        setMakeCallMessage() {
            let gender = store.state.user.gender;
            if (gender === 'בן') {
                return 'לחץ כאן כדי לכתוב פנייה לפסיכולוג/ית'
            } else {
                return 'לחצי כאן כדי לכתוב פנייה לפסיכולוג/ית'
            }
        },
        setLogoutMessage() {
            let gender = store.state.user.gender;
            if (gender === 'בן') {
                return 'התנתק מהחשבון שלך'
            } else {
                return 'התנתקי מהחשבון שלך'
            }
        },
        setFeeling(feel) {
            store.commit('setFeeling', feel);
            this.feel = feel;
        },
        tell () {
            location.href = '#/telling'
        },
        forum () {
            location.href = '#/forum'
        },
        urgentTreat () {
            this.urgent = 'on';
            this.notUrgent = 'off'
        },
        notUrgentTreat () {
          this.notUrgent = 'on';
          this.urgent = 'off'
        },
        logout () {
            store.commit('reset');
            location.href = '#/';
        },
        privateArea () {
            location.href = '#/privateMessages'
        }
  }
}
</script>

<style scoped>

    h2 {
      font-weight: bold;
      color: green;
      font-family: "Times New Roman", Timehiddens, serif;
      font-style: oblique;
    }

    label {
      font-size:14px;
    }

    label.worst {
      color:red;
      font-weight: bold;
    }

    label.medium {
      color:brown;
      font-weight: bold;
      margin-right: 10px;
    }

    label.regular {
      margin-right: 10px;
    }

    label.nice {
      color:#DAA520;
      margin-right: 10px;
    }

    label.best {
      color:green;
      font-style: italic;
      margin-right: 10px;
    }

    button.urgentButton {
        background-color: red;
        color: white;
        padding: 4px 10px;
        border: none;
        cursor: pointer;
    }

    button.notUrgentButton {
        background-color: #4CAF50;
        color: white;
        padding: 4px 10px;
        border: none;
        cursor: pointer;
    }

    div.feelingNow {
      text-align:center;
    }

    div.worstTreat {
      color: #968fad;
      font-weight: bold;
      margin-top: 25px;
    }

    p.urgency {
      color: blue;
      font-weight: bold;
    }

    div.moveToTell {
      cursor: pointer;
      font-weight: bold;
      display:inline-block;
    }

    p.urgentTreat {
      color:red;
      font-weight: bold;
      font-size: 24px;
    }

    div.goodTreat {
      margin-top: 25px;
    }

    div.forum {
      display:inline-block;
      margin-right: 100px;
    }

    img.forum {
      width: 70px;
      height: 70px;
      cursor: pointer;
    }

    img.tell {
      width: 60px;
      height: 60px;
      cursor: pointer;
    }

    img.icon {
        width: 120px;
        height: 120px;
    }

    .buttonStyle {
        font-size: 16px;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        border: none;
        cursor: pointer;
    }

    ul {
        display: flex;
        padding: 0;
        justify-content: center;
        font-size: 16px;
        margin-left: 90px;
    }

    li {
        display: block;
        width: 50px;
    }

    .design {
        display:inline-block;
        margin-right: 100px;
    }
</style>
