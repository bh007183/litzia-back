const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// function setAdminId() {
//   router.get("/api/cart", (req, res) => {
//     let token = false;
//     if (!req.headers) {
//       token = false;
//     } else if (!req.headers.authorization) {
//       token = false;
//     } else {
//       token = req.headers.authorization.split(" ")[1];
//     }
//     if (!token) {
//       res.status(403).send("log in to see your cart");
//     } else {
//       const data = jwt.verify(token, "privatekey", (err, data) => {
//         if (err) {
//           return false;
//         } else {
//           return data;
//         }
//       });
//       if (data) {
//         console.log(data);
//         res.send("authorized");
//       } else {
//         res.status(403).send("auth fail");
//       }
//     }
//   });
// }

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

router.post("/api/admin/login", async (req, res) => {
  const data = await db.Admin.findOne({
    where: {
      username: req.body.username,
    },
  }).catch((err) => {
    console.error(err);
    res.status(500).end();
  });
  console.log("this is", data);
  if (!data) {
    res.send("No Known Username");
  }
  const match = await bcrypt
    .compare(req.body.password, data.password)
    .catch((err) => res.status(403).json(err));
  if (match) {
    //////////need to set private key///////////////
    console.log(data.dataValues);
    const token = jwt.sign(
      { email: data.dataValues.email, id: data.dataValues.id },
      process.env.JSON_TOKIO,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
        }
        console.log("this is ", match);
        res.json({ auth: token }).status(200).end();
      }
    );
  } else {
    res.send("Password or Username did not match");
  }
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<POST TO SHOPPING CART >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post("/api/cart", async (req, res) => {
  console.log(req.headers.authorization);

  if (!req.headers) {
    token = false;
  } else if (!req.headers.authorization) {
    token = false;
  } else {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    res.status(401).json("log in to see your cart");
  } else {
    const data = jwt.verify(token, process.env.JSON_TOKIO, (err, data) => {
      if (err) {
        return false;
      } else {
        return data;
      }
    });
    if (data) {
      const addtodatabase = await db.Cart.create({
        AdminId: data.id,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
      }).catch((err) => {
        console.error(err);
        res.status(500);
      });
      res.json(addtodatabase).status(200).end();
    } else {
      res.status(401).json("auth fail");
    }
  }
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<UPDATE TO SHOPPING CART>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.put("/api/cart/", async (req, res) => {
  console.log(req.body.id + "blummer");
  let test = []
  for (let i = 0; i < req.body.length; i++) {
    console.log(req.body[i]);
    const data = await db.Cart.update(req.body[i], {
      where: { id: req.body[i].id },
    }).catch((err) => {
      console.error(err);
      res.status(500);
    })
    test.push(req.body[i].totalCost)
  }
  // let realdata = await db.Cart.findAll({where: test})
  res.send(test).status(200).end();
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Get Route>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post("/api/cart/items", async (req, res) => {
  console.log(req.body.headers);
  let token = false;
  if (!req.body.headers) {
    token = false;
  } else if (!req.body.headers.authorization) {
    token = false;
  } else {
    token = req.body.headers.authorization.split(" ")[1];
  }
  if (!token) {
    res.status(403).send("log in to see your cart");
  } else {
    const data = jwt.verify(token, process.env.JSON_TOKIO, (err, data) => {
      if (err) {
        return false;
      } else {
        return data;
      }
    });
    if (data) {
      const resData = await db.Cart.findAll({
        where: {
          AdminId: data.id,
        },
      }).catch((err) => {
        console.error(err);
        res.status(500);
      });
      res.json(resData).status(200).end();
      console.log(resData);
    } else {
      res.status(403).send("auth fail");
    }
  }
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DELETE ROUTE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.delete("/api/cart/items/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await db.Cart.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => {
    console.error(err);
    res.status(500);
  });
  res.json(data).status(200).end();
  console.log(data);
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.delete("/api/emptycart", async (req, res) => {
  console.log(req.headers);
  let token = false;
  if (!req.headers) {
    token = false;
  } else if (!req.headers.authorization) {
    token = false;
  } else {
    token = req.headers.authorization.split(" ")[1];
    console.log(token)
  }
  if (!token) {
    res.status(403).send("log in to see your cart");
  } else {
    const data = jwt.verify(token, process.env.JSON_TOKIO, (err, data) => {
      if (err) {
        return false;
      } else {
        return data;
      }
    });
    if (data) {
      console.log(data)
      const resData = await db.Cart.destroy({
        where: {
          AdminId: data.id,
        },
      }).catch((err) => {
        console.error(err);
        res.status(500);
      });
      res.json(resData).status(200).end();
      console.log(resData);
    } else {
      res.status(403).send("auth fail");
    }
  }
});

module.exports = router;
