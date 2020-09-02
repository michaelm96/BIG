const router = require('express').Router()
const productController = require('../controllers/productController');
const { authentication, authorization } = require("../middlewares/auth");

router.get("/", productController.getProducts)
router.use(authentication);
router.get("/productByUserId", productController.getProductsByUserId)
router.post("/", productController.postProduct)
router.put("/:id", authorization, productController.putProduct)
router.delete("/:id", authorization, productController.deleteProduct)

module.exports = router;