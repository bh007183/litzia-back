const { request } = require("express");
const nodemailer = require("nodemailer");
const router = require("express").Router();

router.post("/nodemailer", async (req, res) => {
  console.log(req);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "monkeyboi330", // generated ethereal user
      pass: "0FB3DACB60", // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: req.body.emailAddress, // sender address
    to: "khsiehdumps@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text:
      "ahfkjahfkjashfkhiuaeiufhqifhaiuvhaiuvhaihvaiuhvjkadhvkjalshkjlvkjbnvkjadsnbvkjasbvkjavb ka vkl kl", // plain text body
    html:
      "Dear Ben, I dont know exactly why this is working. But here is an email for you my dear friend.", // html body
  });
  console.log(req.body.emailAddress);
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = router;
// async..await is not allowed in global scope, must use a wrapper

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// send mail with defined transport object
