const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//////

router.post("/api/admin/login", async (req, res) => {
    console.log(req.body)
  const data = await db.Admin.findOne({
    where: {
      username: req.body.username,
    },
  }).catch((err) => {
    res.status(500).end();
  });
 console.log("this is" , data)
 if(!data){
     res.send("No Known Username")
 }
    const match = await bcrypt.compare(req.body.password, data.password).catch(err => res.status(403).json(err));
    console.log("this is " , match)
    res.json(data).status(200).end();

});

//////

router.post("/api/admin", async (req, res) => {
  const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds);
  const data = await db.Admin.create({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data).status(200).end();
  console.log(data);
});

// router.put("/api/admin", (req,res) => {
// db.Admin.create(req.body, {
//     where: password = req.body.password
// }).then(data => console.log(res.json(data)))
// })

module.exports = router;
