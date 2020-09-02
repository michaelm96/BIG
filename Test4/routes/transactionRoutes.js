const router = require('express').Router()
const transactionController = require('../controllers/transactionController');
const { authentication } = require("../middlewares/auth");

router.use(authentication);
router.get("/lastHourTransaction", transactionController.lastHourTransaction)
router.get("/lastSixteenHoursTransaction", transactionController.lastSixteenHoursTransaction)
router.get("/lastTwentyFourHoursTransaction", transactionController.lastTwentyFourHoursTransaction)
router.get("/lastThreeDaysTransaction", transactionController.lastThreeDaysTransaction)
router.get("/lastWeekTransaction", transactionController.lastWeekTransaction)
router.get("/lastTwoWeeksTransaction", transactionController.lastTwoWeeksTransaction)
router.get("/lastMonthTransaction", transactionController.lastMonthTransaction)
router.get("/lastThreeMonthsTransaction", transactionController.lastThreeMonthsTransaction)
router.get("/lastSixMonthsTransaction", transactionController.lastSixMonthsTransaction)
router.get("/lastYearTransaction", transactionController.lastYearTransaction)
router.get("/lastShiftTransaction", transactionController.lastShiftTransaction)

module.exports = router;