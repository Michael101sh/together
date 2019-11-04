function sendEmailAboutMessage(message, subject) {
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
    to: "togetherpsyapp@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: message + "." // plain text body
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
  sendEmailAboutMessage
};
