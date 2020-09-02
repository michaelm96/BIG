const { Transaction } = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

class TransactionController {
  static lastHourTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(1, "hour").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  // End of Shift
  static lastShiftTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(8, "hour").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastSixteenHoursTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(16, "hour").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastTwentyFourHoursTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(24, "hour").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastThreeDaysTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(3, "days").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastWeekTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(7, "days").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastTwoWeeksTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(14, "days").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastMonthTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }
  
  static lastThreeMonthsTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(3, "months").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastSixMonthsTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(6, "months").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static lastYearTransaction(req, res, next) {
    const { id } = req.userData;
    Transaction.findAll({
      where: {
        date: {
          [Op.gte]: moment().subtract(1, "years").toDate(),
        },
        StoreId: id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

}

module.exports = TransactionController;
