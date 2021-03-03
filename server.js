const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

require("dotenv").config();

var PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'https://litzia-front.herokuapp.com/'
// }
// corsOptions
app.use(cors());

const adminRoutes = require("./routes/admin-routes");
const productRoutes = require("./routes/product-routes");

const cartRoutes = require("./routes/cart-routes");
const nodemailer = require("./routes/nodemailer");

app.use(adminRoutes);
app.use(productRoutes);

app.use(cartRoutes);

app.use(nodemailer);

db.sequelize.sync({ force: false}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
