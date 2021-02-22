const router = require("express").Router()
const db = require("../models")


//////Creates Product///////
router.post("/api/product", async (req,res) => {
const data = await db.Product.create(req.body).catch(err => {

    res.status(500);
    console.error(err)
})
     res.json(data)
})

//////Returns  all Products ///////
router.get("/api/product", async (req,res) => {
const data = await db.Product.findAll().catch(err => {

    res.status(500);
    console.error(err)
})
     res.json(data)
})

//////Returns Product by Category///////

router.get("/api/product/:category", async (req,res) => {
const data = await db.Product.findAll({
    where: {
        category: req.params.category
    }
}).catch(err => {

    res.status(500);
    console.error(err)
})
     res.json(data)
})

////////Returns Fetured Products/////////
router.get("/api/product/:fetured", async (req,res) => {

const data = await db.Product.findAll(
    {
    where: {
        fetured: req.params.fetured
    }
}).catch(err => {

    res.status(500);
    console.error(err)
})
     res.json(data)
    
})







module.exports = router