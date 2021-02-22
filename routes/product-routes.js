const router = require("express").Router()
const db = require("../models")



router.post("/api/product", async (req,res) => {
const data = await db.Product.create(req.body).catch(err => {

    res.status(500);
    console.error(err)
})
     res.json(data)
})





module.exports = router