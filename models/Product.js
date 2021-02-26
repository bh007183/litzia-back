module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
<<<<<<< HEAD
=======
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

>>>>>>> 0a3b13b6cbc8b83e2f96329159303b29d2433a46
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    image: DataTypes.STRING,

    customerDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    InventoryItem: {
      type: DataTypes.BOOLEAN,
    },

    category: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
    },
    cost: {
      type: DataTypes.INTEGER,
    },

    QuantityInStock: {
      type: DataTypes.INTEGER,
    },

    tier: {
      type: DataTypes.STRING,
    },
    featured: {
      type: DataTypes.BOOLEAN,
    },

    updatedBy: {
      type: DataTypes.STRING,
    },
<<<<<<< HEAD
=======

    tax: { type: DataTypes.STRING },

    shipping: { type: DataTypes.STRING },
>>>>>>> 0a3b13b6cbc8b83e2f96329159303b29d2433a46
  });
  Product.associate = function (models) {
    Product.belongsTo(models.Admin);
  };
  return Product;
};
