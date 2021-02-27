const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

//////Admin Login/////////

router.post("/api/admin/login", async (req, res) => {
  console.log(req.body)

  const data = await db.Admin.findOne({
    where: {
      username: req.body.username,
    },
  }).catch((err) => {
    res.status(500).send(err).end()
    
  });
  console.log("this is", data);
  if (data === null || !data) {
    return res.status(401).json(false);
  }

  const match = await bcrypt
    .compare(req.body.password, data.password)
    .catch((err) => res.status(403).json(err));
  if (match) {
      //////////need to set private key///////////////
      console.log(data.dataValues)
    jwt.sign({email: data.dataValues.email, id: data.dataValues.id, admin: data.dataValues.admin}, "privatekey", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        console.log(err);
      }
      console.log("this is ", match);
      console.log(token)
      res.json({token, guest: data.dataValues.admin});
      
    });
  } else {
    res.json("Password or Username did not match");
  }
});

//////Create Admin/////

router.post("/api/admin", async (req, res) => {
  const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds);
  const data = await db.Admin.create({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
    admin: req.body.admin
  }).catch((err) => {
    return res.status(500).json("Try another username");
    
  });
  res.json(data).status(200).end();
  console.log(data);
});

/////Delete Admin//////
router.delete("/api/admin/delete", async (req, res) => {
  let token = false;
  if(!req.headers){
    token=false;
  }else if(!req.headers.authorization){
    token = false;
  }
  else{
    token = req.headers.authorization.split(" ")[1]
  }
  if(!token){
    res.status(403).send("Please Login")
  }
  else{
    let tokenMatch = jwt.verify(token, "privatekey", (err, verify)=>{
      if(err){
        return false
      }else{
        return verify
      }
    })
    if(tokenMatch){
      res.send("authorized")
      
    }else{
      res.status(403).send('auth fail')
    }
  }
  
  const data = await db.Admin.findOne({
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
  console.log("this is ", match);
  if (match === true) {
    db.Admin.destroy({
      where: {
        password: data.password,
      },
    }).catch((err) => res.status(403).json(err));
  }
  res.json(data).status(200).end();
});
// Update Admin
router.put("/api/admin/:AdminId", async (req, res) => {
  if (!req.body.password) {
    req.body.password === req.body.password;
    const data = await db.Admin.update(req.body, {
      where: { id: req.body.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  } else {
    const newPwd = (req.body.password = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10),
      null
    ));
    // update the password that comes from req.body to be the new hashed password
    req.body.password = newPwd;

    // update the database with that hashed password
    const data = await db.Admin.update(req.body, {
      where: { id: req.body.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });

    res.status(200).json(data);
  }
});

module.exports = router;
