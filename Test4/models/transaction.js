'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Store)
    }
  };
  Transaction.init({
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product Name should not be empty",
        },
        notEmpty: {
          msg: "Product Name should not be empty",
        },
      },
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Date should not be empty",
        },
        notEmpty: {
          msg: "Date should not be empty",
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price should not be empty",
        },
        notEmpty: {
          msg: "Price should not be empty",
        },
      },
    },
    StoreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Store Id should not be empty",
        },
        notEmpty: {
          msg: "Store Id should not be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};