module.exports = (err, req, res, next) => {
  let statusCode = 500;
  let errorCode = "INTERNAL SERVER ERROR";
  let message = "Internal Server Error";

  if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    errorCode = "VALIDATION_ERROR";
    message = err.errObj;
  } else if (err.name === "Invalid Email/Password") {
    statusCode = 404;
    errorCode = "INVALID_EMAIL_OR_PASSWORD";
    message = "Invalid Email/Password";
  } else if (err.name === "Data not found" || err.name === "Token not found") {
    statusCode = 404;
    errorCode = "DATA_NOT_FOUND";
    message = err.name;
  }

  res.status(statusCode).json({ errorCode, message });
};
