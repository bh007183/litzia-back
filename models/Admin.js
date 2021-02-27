
module.exports = function (sequelize, DataTypes) {
    const Admin = sequelize.define("Admin", {
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
        validate: { isEmail: true },
      },

      phone: {
        type: DataTypes.STRING,
      },

      admin: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
      
    });
    Admin.associate = function (models) {
     Admin.hasMany(models.Product)
    }
   return Admin
}