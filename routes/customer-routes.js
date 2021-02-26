const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

router.post("/api/customer", async (req, res) => {
  const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds);
  const data = await db.Customer.create({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
    phone: req.body.phone,
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data).status(200).end();
  console.log(data);
});

router.post("/api/customer/login", async (req, res) => {
  const data = await db.Customer.findOne({
    where: {
      username: req.body.username,
    },
  }).catch((err) => {
    res.status(500).end();
  });
  console.log("this is", data);
  if (!data) {
    res.send("No Known Username");
  }
  const match = await bcrypt
    .compare(req.body.password, data.password)
    .catch((err) => res.status(403).json(err));
  if (match) {
    //////////need to set private key///////////////
    console.log(data.dataValues);
    const token = jwt.sign(
      { email: data.dataValues.email, id: data.dataValues.id },
      "privatekey",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
        }
        console.log("this is ", match);
        res.json({ auth: token }).status(200).end();
      }
    );
  } else {
    res.send("Password or Username did not match");
  }
});

module.exports = router;
