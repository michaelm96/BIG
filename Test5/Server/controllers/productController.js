const { Product } = require("../models");

class ProductController {
  static getProducts(req, res, next) {
    Product.findAll({
      order: [["id", "asc"]],
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static getProductsByUserId(req, res, next) {
    const UserId = req.userData.id;

    Product.findAll({
      where: { UserId },
      order: [["id", "asc"]],
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static postProduct(req, res, next) {
    const { title, description, imageUrl, price, date } = req.body;
    const UserId = req.userData.id;

    Product.create({
      title,
      description,
      imageUrl,
      status: "pending",
      price,
      date,
      UserId,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
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

  static putProduct(req, res, next) {
    const { id } = req.params;
    const { title, description, imageUrl, status, price, date } = req.body;

    Product.update(
      {
        title,
        description,
        imageUrl,
        status,
        price,
        date,
      },
      {
        where: { id },
      }
    )
      .then((data) => {
        if (!data) {
          return next({ name: "Data not found" });
        }
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static deleteProduct(req, res, next) {
    const { id } = req.params;

    Product.destroy({
      where: { id },
    })
      .then((data) => {
        if (!data) {
          return next({ name: "Data not found" });
        }
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = ProductController;
