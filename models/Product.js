module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
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
  });
  Product.associate = function (models) {
    Product.belongsTo(models.Admin);
  };
  return Product;
};
