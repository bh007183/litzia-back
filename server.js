const express = require('express')
const app = express()
const cors = require("cors")
const db = require("./models")

var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())


const adminRoutes = require("./routes/admin-routes")
const productRoutes = require("./routes/product-routes")


app.use(adminRoutes)
app.use(productRoutes)




db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT http://localhost:" + PORT);
    });
  });