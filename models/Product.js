// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    
    },
    product_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
      }
    },
    price : {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    stock :{
      type : DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isInt: true,
      }
    },
    category_id :{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key:'id',
      },
      validate: {
        isInt: true,
      }

    },    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
