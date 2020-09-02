require('dotenv').config()
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const { access_token } = req.headers;
  if (!access_token) {
    next({ name: "Token not found" });
    return;
  }
  try {
    req.userData = jwt.verify(access_token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication };
