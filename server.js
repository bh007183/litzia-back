const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

<<<<<<< HEAD
=======
require("dotenv").config();

>>>>>>> 0a3b13b6cbc8b83e2f96329159303b29d2433a46
var PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const adminRoutes = require("./routes/admin-routes");
const productRoutes = require("./routes/product-routes");
const customerRoutes = require("./routes/customer-routes");

app.use(adminRoutes);
app.use(productRoutes);
app.use(customerRoutes);

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
