<template>
    <div class="rampup">

        <h2>אפליקציית ביחד - מתייעצים בקלות</h2>
        <img class="logo" src="/static/logo.png">
        <p>

            היי לך!<img class="smiley" src="/static/hey_smiley.jpg">  מה נשמע?
        </p>
        <h3>
            ברוכ/ה הבא/ה לאפליקציית "ביחד"!
        </h3>
        <p>
            באפליקציה הזו תוכל/י לשתף בדברים שמטרידים אותך,
            ולקבל ייעוץ ועזרה מאיתנו - צוות פסיכולוגים שבדיוק כאן בשבילך.
        </p>
        <p class="buttonsText">
            פעם ראשונה שלך? לחצ/י להירשם. אחרת, היכנס/י.
        </p>

          <button class="signUpButton" v-on:click="signUpFormOn">הירשמ/י</button>
        <button class="signInButton" @click="signInFormOn">היכנס/י</button>
     <form name="signUpForm" v-on:submit.prevent
              method="post" class="signInForm" v-show="rampUp === 'register'">

            <h4>רישום לאפליקציה</h4>
            <p class="registerIntro">
                רגע לפני שתוכל/י להשתמש באפליקציה, אנו צריכים אישור מההורים לכך.
                לכן, רשום/רשמי את כתובת האימייל של אחד מהוריך/מהורייך,
                ואם הם יסכימו - תוכל/י ליצור חשבון ולהשתמש באפליקציה.
            </p>
            <div v-bind:class="{'form-group has-success': emailGreenOn,
             'form-group has-danger': !emailGreenOn}">
                <p class="emailOrPhone">רשמ/י אימייל
                    <span style="text-decoration: underline;">או</span>
                    פלאפון של אבא או אמא. <br> בשאר השדות חובה למלא את כולם. </p>
                <label><strong>אימייל הורה</strong></label>
                <input class="form-control form-control-success"
                       v-model="user.email"
                       placeholder="Email" name="Email"
                       aria-describedby="emailHelp"
                       v-on:change="emailValidate">
                <small class="form-text" style="color:red;">
                    {{emailErrorMessage}}</small>
                <small id="emailHelp" class="form-text text-muted">
                    אנחנו לעולם לא נשתף את האימייל עם מישהו אחר</small>
            </div>

            <div v-bind:class="{'form-group has-success': phoneGreenOn,
             'form-group has-danger': !phoneGreenOn}">
                <label><strong> פלאפון הורה / טלפון בבית</strong></label>
                <input type="text" name="Tel"
                       class="form-control form-control-success"
                       v-model="user.phone"
                       placeholder="פלאפון / טלפון"
                       aria-describedby="phoneHelp"
                       v-on:change="phoneValidate">
                <small class="form-text" style="color:red;">
                    {{phoneErrorMessage}}</small>
                <small id="phoneHelp"
                       class="form-text text-muted">
                    אנחנו לעולם לא נשתף את המספר עם מישהו אחר</small>
            </div>
            <div v-bind:class="{'form-group has-success': nameGreenOn,
             'form-group has-danger': !nameGreenOn}">
                <label class="required-field"><strong>שם</strong></label>
                <input type="text"
                       class="form-control form-control-success"
                       v-model="user.name"
                       placeholder="רשמ/י את שמך"
                       v-on:change="nameValidate">
                <small class="form-text" style="color:red;">
                    {{nameErrorMessage}}</small>
            </div>
            <div v-bind:class="{'form-group has-success': ageGreenOn,
             'form-group has-danger': !ageGreenOn}">
                <label class="required-field"><strong>גיל</strong></label>
                <input type="number" class="form-control form-control-success"
                       v-model="user.age"
                       placeholder="רשמ/י את גילך"
                       v-on:change="ageValidate">
                <small class="form-text" style="color:red;">
                    {{ageErrorMessage}}</small>
            </div>

            <div v-bind:class="{'form-group has-success': genderGreenOn,
             'form-group has-danger': !genderGreenOn}">
                <label class="required-field"><strong>מגדר</strong></label>
                <select class="form-control form-control-success"
                        v-model="user.gender"
                        oninvalid="this.setCustomValidity('נא בחר/י מגדר')"
                        v-on:change="genderValidate">
                    <option value="" disabled selected>האם את/ה בן או בת?</option>
                    <option Value="בן">בן</option>
                    <option Value="בת">בת</option>
                </select>
                <small class="form-text" style="color:red;">
                    {{genderErrorMessage}}</small>
            </div>

            <div v-bind:class="{'form-group has-success': nicknameGreenOn,
             'form-group has-danger': !nicknameGreenOn}">
                <label class="required-field"><strong>כינוי</strong></label>
                <input type="text" class="form-control form-control-success"
                       v-model="user.nickname"
                       placeholder="בחר/י כינוי"
                       oninvalid="this.setCustomValidity('נא בחר/י כינוי')"
                       v-on:change="nicknameValidate">
                <small class="form-text" style="color:red;">
                    {{nicknameErrorMessage}}</small>
            </div>

            <div v-bind:class="{'form-group has-success': passGreenOn,
             'form-group has-danger': !passGreenOn}">
                <label class="required-field"><strong>סיסמא</strong></label>
                <input type="password" class="form-control form-control-success"
                       v-model="user.psw"
                       placeholder="בחר/י סיסמא"
                       oninvalid="this.setCustomValidity('נא בחר/י סיסמא')"
                       v-on:change="passValidate">
                <small class="form-text" style="color:red;">
                    {{passErrorMessage}}</small>
            </div>
            <label><b>       לבסוף, בחר/י דמות שתשמש אותך באפליקציה:      </b></label>
            <div id="icons" class="icon">
                <div v-on:click="imageSelector">
                    <img src="/static/happy_boy_preview_2.png">
                    <span class="tickmark">&#10004;</span>
                </div>
                <div v-on:click="imageSelector">
                    <img src="/static/happy_girl_preview_2.png">
                    <span class="tickmark">&#10004;</span>
                </div>
                <div v-on:click="imageSelector">
                    <img src="/static/sad_girl_preview_1.png">
                    <span class="tickmark">&#10004;</span>
                </div>
                <div v-on:click="imageSelector">
                    <img src="/static/sad_boy_preview_1.png">
                    <span class="tickmark">&#10004;</span>
                </div>
            </div>
              <input class="submitForm" type="submit" value="הירשמ/י"
                   v-on:click="registerFormValidation">
        </form>
        <form v-on:submit.prevent
              v-show="rampUp === 'login'">
            <h4>כניסה לחשבונך</h4>
            <div class="form-group">
                <label class="required-field2"><strong>מידע דרוש</strong></label>
                <br>
                <label class="required-field"><strong>כינוי</strong></label>
                <input type="text" class="form-control" placeholder="כינוי"
                       oninvalid="this.setCustomValidity('נא מלא/י את הכינוי שלך')"
                       v-model="existUser.nickname"
                       required>
            </div>
            <div class="form-group">
                <label class="required-field"><strong>סיסמא</strong></label>
                <input type="password" class="form-control" placeholder="סיסמא"
                       oninvalid="this.setCustomValidity('נא מלא/י הסיסמא שלך')"
                       v-model="existUser.psw"
                       required>
            </div>
            <input class="submitForm required-field" type="submit" value="היכנס/י"
                   v-on:click="loginFormValidation">

            <div class="container">
                <br>
                <span class="psw" v-on:click="showPassRecoverArea">
                    שכחת את הסיסמא שלך?
                    <u>לחצ/י כאן</u>
                </span>
            </div>
        </form>
        <form v-on:submit.prevent
              v-show="showPassRecover === true">
            <h4>שחזור סיסמא</h4>
            <label class="required-field2"><strong>מידע דרוש</strong></label>
            <br>
            <div v-bind:class="{'form-group has-success': emailGreenOn,
                 'form-group has-danger': !emailGreenOn}">
                <label class="form-group required-field">
                    <strong>אימייל הורה</strong></label>
                <input class="form-control form-control-success"
                       v-model="emailForRecover"
                       placeholder="Email" name="Email"
                       aria-describedby="emailHelp"
                       v-on:change="emailValidate">
                <small class="form-text" style="color:red;">
                    {{emailErrorMessage}}</small>
            </div>
            <div class="form-group">
                <label class="required-field"><strong>כינוי</strong></label>
                <input type="text" class="form-control" placeholder="כינוי"
                       oninvalid="this.setCustomValidity('נא מלא/י את הכינוי שלך')"
                       v-model="nicknameForRecover"
                       required>
            </div>
            <input class="submitForm required-field" type="submit" value="שלח/י"
                   v-on:click="sendPass">
        </form>
        <br>
        <p>
            שעות הפעילות של הצוות: 8:00-22:00, בימים א-ה.
        </p>
        <p class="copyRights">
            &copy; האפליקציה נבנתה ע"י מיכאל שחר
            <br>
            michael101sh@gmail.com
        </p>
    </div>
</template>

<script>
    import * as $ from "jquery";
    import { store } from '../store.js';
    import swal from 'sweetalert2'

    export default {

        name: 'rampup',
        data () {
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
                store: store,
                showPassRecover: false,
                emailForRecover: '',
                nicknameForRecover: ''
            }
        },
        methods: {
            signUpFormOn () {
                this.showPassRecover = false;
                this.rampUp = 'register'
            },

            signInFormOn () {
                this.showPassRecover = false;
                this.rampUp = 'login'
            },
            addUser () {
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/registerUser',
                    type:"POST",
                    data:JSON.stringify(this.user),
                    contentType:"application/json; charset=utf-8",
                    dataType:"json"
                }).done(function (){
                    swal(
                        '!נרשמת בהצלחה',
                        'המתן/המתיני לאישור הורים',
                        'success'
                    )
                }).fail(function () {
                    swal(
                        '...אופס',
                        '.ההרשמה לא הצליחה, נסה/י שוב',
                        'error'
                    )
                });
            },
            emailValidate () {
                let email = this.user.email;
                let regex1 = /^\w+@[a-zA-Z]+\.com$/;
                let regex2 = /^\w+@[a-zA-Z]+\.co.il$/;
                let match1 = regex1.exec(email);
                let match2 = regex2.exec(email);
                this.emailGreenOn = match1 || match2;
                if (this.user.email !== '') {
                    this.emailErrorMessage = this.emailGreenOn ? '' :
                        "כתובת המייל לא תקינה, היא צריכה להיות בצורה הבאה:" +
                        " user@domain.co.il / user@domain.com.";
                } else {
                    this.emailErrorMessage = '';
                }
                return this.emailGreenOn;
            },
            phoneValidate () {
                let regex = /^0[0-9]{1,2}-?[0-9]{7}$/;
                this.phoneGreenOn = regex.exec(this.user.phone);
                if (this.user.phone !== '') {
                    this.phoneErrorMessage = this.phoneGreenOn ? '' :
                        "מספר הפלאפון/הטלפון לא תקין, הוא צריך להיות להתחיל " +
                        "ב-3 ספרות (פלאפון) או ב-2 ספרות (טלפון) ולהסתיים ב-7 ספרות";
                } else {
                    this.phoneErrorMessage = '';
                }
                return this.phoneGreenOn;
            },
            nameValidate () {
                this.nameGreenOn = !!this.user.name;
                this.nameErrorMessage = this.nameGreenOn ? '' :
                    "נא רשמ/י את שמך";
                return this.nameGreenOn;
            },
            ageValidate () {
                let regex = /^([5-9]|([1-9][0-9])){1}$/;
                this.ageGreenOn = regex.exec(this.user.age);
                if (this.user.age !== '') {
                    this.ageErrorMessage = this.ageGreenOn ? '' :
                        "נא מלא/י גיל בין 5 ל-99";
                } else {
                    this.ageErrorMessage = 'נא רשמ/י את גילך';
                }
                return this.ageGreenOn;
            },
            genderValidate() {
                this.genderGreenOn = !!this.user.gender;
                this.genderErrorMessage = this.genderGreenOn ? '' :
                    "נא מלא/י מגדר";
                return this.genderGreenOn;
            },
            nicknameValidate() {
                this.nicknameGreenOn = !! this.user.nickname;
                this.nicknameErrorMessage = this.nicknameGreenOn ? '' :
                    "נא מלא/י כינוי. הכינוי ישמש אותך באפליקציה";
                if (this.nicknameGreenOn) {
                    $.ajax({
                        url: 'http://' +
                        location.hostname + ':3003/api/isExist',
                        type: "POST",
                        data: JSON.stringify(this.user),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json"
                    }).then(res => {
                        if (res !== 'Ok') {
                            this.nicknameErrorMessage = "הכינוי תפוס. נסה/י כינוי אחר";
                            this.nicknameGreenOn = false
                        }})
                }
                return this.nicknameGreenOn;
            },
            passValidate() {
                this.passGreenOn = !! this.user.psw;
                this.passErrorMessage = this.passGreenOn ? '' :
                    'נא מלא/י סיסמא. הסיסמא תשמש אותך באפליקציה';
                return this.passGreenOn;
            },
            imageSelector(event) {
                if (this.selectedIcon !== null) {
                    this.selectedIcon.classList.remove("highlighted")
                }
                this.selectedIcon = event.srcElement.parentElement;
                this.selectedIcon.classList.add("highlighted");
                let path = event.srcElement.currentSrc;
                let index = path.indexOf("static");
                this.user.icon = path.substring(index);
            },
            login() {
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/login',
                    type:"POST",
                    data:JSON.stringify(this.existUser),
                    contentType:"application/json; charset=utf-8",
                    dataType:"json"
                }).done(function (data){
                    if(data.error) {
                        swal(
                            '...אופס',
                            '.כינוי או סיסמא לא נכונים',
                            'error'
                        )
                    } else if(data.isVerified) {
                        store.commit('setUser', data);
                        if (data.isPsychologist) {
                            location.href = '#/psyHome'
                        } else {
                            location.href = '#/home'
                        }
                    } else {
                        swal(
                            '...אופס',
                            '.עוד לא קיבלת אישור הורים.',
                            'error'
                        )
                    }
                }).fail(function () {
                    swal(
                        '...אופס',
                        '.הכניסה לא הצליחה, נסה/י שוב.',
                        'error'
                    );
                });
            },
            registerFormValidation () {
                if (this.user.email === '' && this.user.phone === '') {
                    swal('נא מלא/י אימייל או פלאפון / טלפון');
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
                    this.nicknameErrorMessage =
                        "נא מלא/י כינוי. הכינוי ישמש אותך באפליקציה";
                    return false;
                }
                if (!this.nicknameGreenOn) {
                    return false;
                }
                if (this.user.psw === '') {
                    this.passErrorMessage =
                        'נא מלא/י סיסמא. הסיסמא תשמש אותך באפליקציה';
                    return false;
                }
                this.addUser();
                this.rampUp = '';
            },
            loginFormValidation () {
                if (this.existUser.nickname === '') {
                    return false
                }
                if (this.existUser.psw === '') {
                    return false
                }
                return this.login();
            },
            showPassRecoverArea () {
              this.showPassRecover = true;
            },
            sendPass() {
                $.ajax({
                    url: 'http://' +
                    location.hostname + ':3003/api/sendPass',
                    type: "POST",
                    data: JSON.stringify(
                        {
                            email: this.emailForRecover,
                            nickname: this.nicknameForRecover
                        }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json"
                }).done(function (res) {
                    if (res === 'Ok') {
                        swal(
                            'הסיסמא נשלחה למייל שלך',
                            '',
                            'success'
                        );
                    } else {
                        swal(
                            '...אופס',
                            'הכינוי או כתובת המייל לא קיימים במערכת',
                            'error'
                        );
                    }
                }).fail(function () {
                    swal(
                        '...אופס',
                        'השחזור לא הצליח, נסה/י שוב מאוחר יותר',
                        'error'
                    );
                });
            }
        }
    }

</script>

<style scoped>
    img {
        width: 84px;
        height: 84px;
    }

    img.logo {
        width: 120px;
        height: 70px;
    }

    img.smiley {
        width: 37px;
        height: 37px;
    }

    .highlighted {
        border:2px solid #b404ae;
        background-image: url("/static/tick.png");
    }

    #icons div {
        height: 84px;
        width: 84px;
        display: inline-flex;
    }

    #icons span {
        position: relative;
        right: -84px;
        top: 31px;
        color: #0f0;
        display:none;
        border:none;
    }

    #icons .highlighted span {
        display: inline;
    }

    div.icon:active {
        cursor: pointer;
    }

    p {
        font-size: 100%;
        color: green;
        font-weight: bold;
        line-height: 175%;
    }

    p.registerIntro {
        color: #3fb0ac;
    }

    p.buttonsText {
        color: black;
        font-size: 90%;
    }

    p.emailOrPhone {
        color: #fae596;
    }

    p.copyRights{
        color: #00cccc;
    }

    h2 {
        color: blue;
        text-decoration: underline;
    }

    h3 {
        font-weight: bold;
        color: #e6af4b;
        font-family: "Times New Roman", Timehiddens, serif;
        font-style: oblique;
    }

    h4 {
        font-weight: bold;
        color: #342aa5;
        font-family: "Times New Roman", Timehiddens, serif;
        font-style: oblique;
    }

    form {
        background-color: white;
        width: 350px;
        margin: 15px auto auto;
    }

    button.signUpButton {
        font-size: 24px;
        color: cadetblue;
    }

    input.submitForm {
        margin-top: 7px;
        font-size: 16px;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        border: none;
        cursor: pointer;
        width: 40%;
    }

    button.signInButton {
        font-size: 24px;
        color: #bf385a;
        position: relative;
    }

    label.required-field2 {
        color: blue;
    }

    label.required-field::before, label.required-field2::before {
        content: "*";
        float: left;
        color: red;
    }

    input:required:focus {
        border: 1px solid red;
        outline: none;
    }

    input:required:hover {
        opacity: 1;
    }

    ::-webkit-input-placeholder {
        text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
        text-align: center;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
        text-align: center;
    }

    :-ms-input-placeholder {
        text-align: center;
    }
</style>