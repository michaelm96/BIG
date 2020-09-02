'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User)
    }
  };
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product title should not be empty",
        },
        notEmpty: {
          msg: "Product title should not be empty",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description should not be empty",
        },
        notEmpty: {
          msg: "Description should not be empty",
        },
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image Url should not be empty",
        },
        notEmpty: {
          msg: "Image Url should not be empty",
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Status should not be empty",
        },
        notEmpty: {
          msg: "Status should not be empty",
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
    date: {
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
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User ID should not be empty",
        },
        notEmpty: {
          msg: "User ID should not be empty",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};