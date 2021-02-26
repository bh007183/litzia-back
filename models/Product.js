module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    image: DataTypes.STRING,

    description: {
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
    price: {
      type: DataTypes.INTEGER,
    },

    quantity: {
      type: DataTypes.INTEGER,
    },

    tier: {
      type: DataTypes.STRING,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      default: false,
    },

    updatedBy: {
      type: DataTypes.STRING,
    },

    tax: { type: DataTypes.STRING },

    shipping: { type: DataTypes.STRING },
  });
  Product.associate = function (models) {
    Product.belongsTo(models.Admin);
  };
  return Product;
};
