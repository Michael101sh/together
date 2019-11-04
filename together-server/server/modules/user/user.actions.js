function sendEmailAboutUser(user) {
  "use strict";
  let emailAddress = user.email;
  let phone = user.phone;
  let childName = user.name;
  let age = user.age;
  let gender = user.gender;
  let nickname = user.nickname;
  let pass = user.psw;
  const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: "togetherpsyapp@gmail.com",
      pass: "avivitandsarit101"
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Together App" <togetherpsyapp@gmail.com>', // sender address
    to: "togetherpsyapp@gmail.com", // list of receivers
    subject: 'משתמש חדש לאפליקציית "ביחד"', // Subject line
    html:
      '<p dir="rtl"> שלום, תלמיד/ה חדש/ה מעוניינ/ת להירשם לאפליקציית "ביחד".' +
      "<br>" +
      "<br>" +
      "להלן הפרטים שהתלמיד/ה מילא/ה בטופס ההרשמה:" +
      "<br>" +
      "אימייל: " +
      emailAddress +
      "<br>" +
      "פלאפון: " +
      phone +
      "<br>" +
      "שם: " +
      childName +
      "<br>" +
      "גיל: " +
      age +
      "<br>" +
      "מגדר: " +
      gender +
      "<br>" +
      "כינוי: " +
      nickname +
      "<br>" +
      "סיסמא: " +
      pass +
      "<br>" +
      "</p>" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
}

function sendEmailWithPass(email, pass) {
  "use strict";
  const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: "togetherpsyapp@gmail.com",
      pass: "avivitandsarit101"
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Together App" <togetherpsyapp@gmail.com>', // sender address
    to: email, // list of receivers
    subject: 'סיסמא לאפליקציית "ביחד"', // Subject line
    text: "שלום, הסיסמא למשתמש שלך היא " + pass + ". " // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
}

module.exports = {
  sendEmailAboutUser,
  sendEmailWithPass
};
