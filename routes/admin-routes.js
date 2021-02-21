const router = require("express").Router()
const db = require("../models")



router.post("/api/admin", (req,res) => {
db.Admin.create(req.body).then(data => console.log(res.json(data)))
})





module.exports = router