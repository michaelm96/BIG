const router = require('express').Router()
const userRoutes = require('./userRoutes.js');
const productRoutes = require('./productRoutes.js');

router.use("/user", userRoutes);
router.use("/product", productRoutes);

module.exports = router;