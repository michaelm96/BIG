"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 9;
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store.hasMany(models.Transaction);
    }
  }
  Store.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Store Name should not be empty",
          },
          notEmpty: {
            msg: "Store Name should not be empty",
          },
        },
      },
      email:  {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email should not be empty",
          },
          notEmpty: {
            msg: "Email should not be empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password should not be empty",
          },
          notEmpty: {
            msg: "Password should not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Store",
      hooks: {
        beforeCreate(user) {
          user.password = bcrypt.hashSync(user.password, saltRounds);
        },
      },
    }
  );
  return Store;
};
