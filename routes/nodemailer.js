const { request } = require("express");
const nodemailer = require("nodemailer");
const router = require("express").Router();

router.post("/nodemailer", async (req, res) => {
  let counter = 0 
  for(let i = 0; i < req.body.order.length; i++){
    if(req.body.order[i].totalCost){
      counter = counter + parseFloat(req.body.order[i].totalCost)
    }else{
      counter = counter + parseFloat(req.body.order[i].price)
    }
    
  }
console.log(counter)

   let reciept = req.body.order.map(item => item.totalCost ? `<h3>${item.title}</h3> <br> Quantity Ordered: ${item.quantity} <br> Price Per Peace: $${item.price} <br> Combined Item Cost: $${item.totalCost} <br> Cost does not including shipping or tax. <hr>` : `<h3>${item.title}</h3> <br> Quantity Ordered: ${item.quantity} <br> Cost: $${item.price} <br> Cost does not including shipping or tax. <hr>`)

  
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
    html: `${req.body.firstName} , thank you for your order! Here is a summery of your order. ${reciept.toString()} Your estimated grand total not including shipping or tax is: $${counter} <br> Please feel free to contact a Litzia representative if there are any questions or concerns.` // html body
  }).catch(err => res.send("Message Failed"));
  console.log("Message sent: true", );

  res.json(customer)
});

module.exports = router;
// async..await is not allowed in global scope, must use a wrapper

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// send mail with defined transport object
