const router = require('express').Router()
const storeRoutes = require('./storeRoutes.js');
const transactionRoutes = require('./transactionRoutes.js');

router.use("/store", storeRoutes);
router.use("/transaction", transactionRoutes);

module.exports = router;