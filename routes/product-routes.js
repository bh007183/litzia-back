const router = require("express").Router()
const db = require("../models")



router.post("/api/product", (req,res) => {
db.Product.create(req.body).then(data => console.log(res.json(data).catch(err=> console.log(err))))
})





module.exports = router