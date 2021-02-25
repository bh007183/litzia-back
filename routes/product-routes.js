const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

//////Creates Product///////
///////////////////////////////////
///////////////PROTECT//////////////
router.post("/api/product", async (req, res) => {
  const data = await db.Product.create(req.body).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);
});
///////////////////////////////////

//////Returns  all Products ///////
router.get("/api/product", async (req, res) => {
    
  axios
    .get(
      "https://api-na.myconnectwise.net/v4_6_release/apis/3.0/procurement/catalog/?pageSize=300",
      {
        headers: {
          Authorization:
            "this",
          clientId: "this",
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
router.get("/api/product/:fetured", async (req, res) => {
  const data = await db.Product.findAll({
    where: {
      fetured: req.params.fetured,
    },
  }).catch((err) => {
    res.status(500);
    console.error(err);
  });
  res.json(data);
});

module.exports = router;
