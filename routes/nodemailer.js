const { request } = require("express");
const nodemailer = require("nodemailer");
const router = require("express").Router();

router.post("/nodemailer", async (req, res) => {
   let reciept = req.body.order.map(item => item.title + "----- total quantity = " + item.quantity + "----$" +(item.totalCost ? item.totalCost + "not including shipping or tax." : item.price + "not including shipping or tax.")+ "  ----- " )
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "thisisarandomtest123", // generated ethereal user
      pass: "testingpassword1", // generated ethereal password
    },
  });
  let litzia = await transporter.sendMail({
    from: req.body.emailAddress, // sender address
    to: "thisisarandomtest123@gmail.com", // list of receivers. FOR LITZIA EMPLOYEES
    subject: "Litzia Order✔", // Subject line
    text: "", // plain text body
    html: `${req.body.firstName}  ${req.body.lastName} has placed an order. ${req.body.address}, ${req.body.apartment}, ${req.body.city}, ${req.body.zipcode}, ${req.body.state}, ==================${req.body.email}, ${req.body.phoneNumber}, ${req.body.address}, ===========================${reciept}`, // html body
  });
  let customer = await transporter.sendMail({
    from: req.body.emailAddress, // sender address
    to: req.body.email, // list of receivers
    subject: "Litzia Order✔", // Subject line
    text: "", // plain text body
    html: `${req.body.firstName} , thank you for your order! Here is a summery of your order. ${reciept.toString()} Please feel free to contact a Litzia representative if there are any questions or concerns.`, // html body
  });
  console.log(req.body.emailAddress);
  console.log("Message sent: %s", );
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(customer));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  res.json(customer)
});

module.exports = router;
// async..await is not allowed in global scope, must use a wrapper

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// send mail with defined transport object
