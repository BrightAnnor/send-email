"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "b1132bf2db5c4d",
    pass: "94a3f0a13ae590",
  },
});

const sendMail = async()=>{
        // send mail with defined transport object
     await transporter.sendMail({
    from: '', // sender address
    to: "annor170bright@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body

})};

sendMail();