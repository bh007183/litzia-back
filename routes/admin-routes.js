const router = require("express").Router()
const db = require("../models")
const bcrypt = require('bcrypt');
const saltRounds = 10;

//////

router.post("/api/admin/login", async (req,res) => {

        
   
    const data = await db.Admin.findOne(
        {
            where: {
                
                username: req.body.username
            }
        
        }).catch(err => {
        res.status(500).end();
        
    })
        if(password){
        const match = await bcrypt.compare(req.body.password, data.password);
        if(match) {
            res.json(data).status(200).end()
        }else{
            throw error
        }
    }else{console.log("error .///////////")}
    })



    router.post("/api/admin", async (req,res) => {
        const hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds)
        const data = await db.Admin.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        }).catch(err => {
            res.status(500);
            console.error(err)
        })
             res.json(data).status(200).end();
             console.log(data)
        })







// router.put("/api/admin", (req,res) => {
// db.Admin.create(req.body, {
//     where: password = req.body.password
// }).then(data => console.log(res.json(data)))
// })





module.exports = router