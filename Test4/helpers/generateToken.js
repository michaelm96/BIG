require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

module.exports = generateToken = (user) => {
  const { id, name, email } = user;

  return jwt.sign({ id, name, email}, secretKey);
};
