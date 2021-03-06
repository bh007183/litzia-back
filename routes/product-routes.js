const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const dotenv = require("dotenv")

const jwt = require("jsonwebtoken")
dotenv.config()
const Sequelize = require('sequelize');
const op = Sequelize.Op;



//////Creates Product///////
///////////////////////////////////
///////////////PROTECT//////////////
router.post("/api/product", async (req, res) => {
  
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
  const varify = jwt.verify(token, process.env.JSON_TOKIO, (err,data)=>{
    if(err){
      return false
    }else {
      return data
    }
  })
  if(varify.admin === true){
    const data = await db.Product.create({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      InventoryItem: req.body.InventoryItem,
      category: req.body.category,
      subCategory: req.body.subCategory,
      price: req.body.price,
      quantity: req.body.quantity,
      tier: req.body.tier,
      featured: req.body.featured,
      updatedBy: req.body.updatedBy,
      tax: req.body.tax,
      shipping: req.body.shipping
      
       }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.json(data);
  }else{
    return res.status(403).send("auth failed")
  }
}

});




////////PUT PRODUCTS//////////////
router.put("/api/product/update", async (req, res) => {
  console.log(req.headers)
  console.log(req.body)
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
  const varify = jwt.verify(token, process.env.JSON_TOKIO, (err,data)=>{
    if(err){
      return false
    }else {
      return data
    }
  })
  if(varify.admin === true){
    const data = await db.Product.update(req.body, {
      where: {
        id: req.body.id
      }
    }
    ).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.json(data);
  }else{
    return res.status(403).send("auth failed")
  }
}
});

//////Returns  all Products ///////
router.get("/api/product", async (req, res) => {
  console.log(req)
  const data = await db.Product.findAll().catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);


});

router.get("/api/product/featured", async (req, res) => {
  const data = await db.Product.findAll({
    where: {
      featured: 1
    }
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);


});





////////////API GET ONE EXACT MATCH/////////////////
router.get("/api/product/:title", async (req, res) => {
  const data = await db.Product.findOne({
    where:{
      title: req.params.title
    }
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);
});


router.get("/api/product/singleItemPage/:id", async (req, res) => {
  console.log(req.params.id)
  const data = await db.Product.findOne({
    
    where:{
      id: req.params.id
    }
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  
  res.json(data);
});




/////////////API GET ALL CONTAINS SEARCH////////////////
router.get("/api/product/search/:title", async (req, res) => {
  console.log(req.params.title)
  const data = await db.Product.findAll({
    where:{
      title: {
        [op.like]: "%" + req.params.title + "%"
    }
  }}).catch((err) => {
    res.status(500);
    console.error(err);
  });
  console.log(data)
  res.json(data);
});

/////////Admin Protected/////////////
////////DELETE PRODUCTS//////////////
router.delete("/api/product/delete/:id", async (req, res) => {
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
  const varify = jwt.verify(token, process.env.JSON_TOKIO, (err,data)=>{
    if(err){
      return false
    }else {
      return data
    }
  })
  if(varify.admin === true){
    const data = await db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).catch((err) => {
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
///////future development
// router.get("/api/product", async (req, res) => {
//   axios
//     .get(
//       "https://api-na.myconnectwise.net/v4_6_release/apis/3.0/procurement/catalog/?pageSize=100",
//       {
//         headers: {
//           Authorization: process.env.Key_one,
//           clientId: process.env.Key_two,
//         },
//       }
//     )
//     .then((response) => res.send(response.data))
//     .catch((err) => res.send(err));
// });
// router.get("/api/subcategory", async (req, res) => {
//   axios
//     .get(
//       "https://api-na.myconnectwise.net/v4_6_release/apis/3.0/procurement/subcategories?pageSize=100",
//       {
//         headers: {
//           Authorization: process.env.Key_one,
//           clientId: process.env.Key_two,
//         },
//       }
//     )
//     .then((response) => res.send(response.data))
//     .catch((err) => res.send(err));
// });

//////Returns Product by Category///////

router.get("/api/product/category/:category", async (req, res) => {
  const data = await db.Product.findAll({
    where: {
      category: req.params.category,
    },
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  console.log(data)
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
  console.log(data)
  res.json(data);
});

module.exports = router;
