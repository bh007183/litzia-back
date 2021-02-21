
module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
      title: { type: DataTypes.STRING,
         allowNull: false,
         unique: true },

      image: DataTypes.STRING,

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
      },

      price: {
        type: DataTypes.INTEGER,
      },

      quantity: {
        type: DataTypes.INTEGER,
      },
      tier: {
        type: DataTypes.STRING
      }


      
    });
    Product.associate = function (models) {
      Product.belongsTo(models.Admin)
    }
   return Product
}