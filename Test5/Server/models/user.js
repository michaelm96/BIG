"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 9
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product);
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First Name should not be empty",
          },
          notEmpty: {
            msg: "First Name should not be empty",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Last Name should not be empty",
          },
          notEmpty: {
            msg: "Last Name should not be empty",
          },
        },
      },
      email: {
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
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role should not be empty",
          },
          notEmpty: {
            msg: "Role should not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate(user) {
          user.password = bcrypt.hashSync(user.password, saltRounds);
        },
      },
    }
  );
  return User;
};
