const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
dotenv.config()
//////Creates Product///////
///////////////////////////////////
///////////////PROTECT//////////////
router.post("/api/product", async (req, res) => {
  console.log(req.headers)
  let token = false
if(!req.headers){
  token = false
}else if (!req.headers.authorization){
  token = false
}else{
  token = req.headers.authorization.split(" ")[1]
  console.log(token)
}

if(!token){
  res.status(403).send("Please Login")
}else {
  const varify = jwt.verify(token, "privatekey", (err,data)=>{
    if(err){
      return false
    }else {
      return data
    }
  })
  if(varify){
    const data = await db.Product.create(req.body).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.json(data);
  }else{
    return res.status(403).send("auth failed")
  }
}

});

///////////////////////////////////

//////Returns  all Products ///////
router.get("/api/product", async (req, res) => {
  const data = await db.Product.findAll().catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);

  // axios
  // .get(
  // "https://api-na.myconnectwise.net/v4_6_release/apis/3.0/procurement/catalog/?pageSize=100",
  // {
  //   headers: {
  //     Authorization: process.env.Key_one,
  //     clientId: process.env.Key_two,
  //   },
  // }
  // )
});
router.get("/api/subcategory", async (req, res) => {
  axios
    .get(
      "https://api-na.myconnectwise.net/v4_6_release/apis/3.0/procurement/subcategories?pageSize=100",
      {
        headers: {
          Authorization: process.env.Key_one,
          clientId: process.env.Key_two,
        },
      }
    )
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

//////Returns Product by Category///////

router.get("/api/product/:category", async (req, res) => {
  const data = await db.Product.findAll({
    where: {
      category: req.params.category,
    },
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);
});

////////Returns Fetured Products/////////
router.get("/api/product/:featured", async (req, res) => {
  const data = await db.Product.findAll({
    where: {
      featured: req.params.featured,
    },
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);
});

module.exports = router;
