const router = require('express').Router()
const storeController = require('../controllers/storeController')

router.post("/register", storeController.register);
router.post("/login", storeController.login);

module.exports = router;