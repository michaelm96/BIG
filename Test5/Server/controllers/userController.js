const { User } = require("../models");
const bcrypt = require("bcrypt");
const generateToken = require("../helpers/generateToken");

class UserController {
  static register(req, res, next) {
    const { firstName, lastName, email, password, role } = req.body;

    User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
          console.log(err);
        let errObj = {};
        if (err.name === "SequelizeValidationError") {
          for (let error of err.errors) {
            errObj[error.path] = error.message;
          }
          next({ name: "SequelizeValidationError", errObj });
        } else {
          next(err);
        }
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    const error = { status: 404, name: "Invalid Email/Password" };

    User.findOne({
      where: { email },
    })
      .then((user) => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
          next(error);
          return;
        } else {
          const access_token = generateToken(user);
          req.headers = access_token;
          res.status(200).json({ access_token, role:user.role });
        }
      })
      .catch((err) => next(err));
  }
}

module.exports = UserController;
