
module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
      username: { 
         type: DataTypes.STRING,
         allowNull: false,
         unique: true },

      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
    });
    
   return Customer
}