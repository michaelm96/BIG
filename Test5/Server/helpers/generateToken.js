require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

module.exports = generateToken = (user) => {
  const { id, firstName, lastName, email, role  } = user;

  return jwt.sign({ id, firstName, lastName, email, role }, secretKey);
};
