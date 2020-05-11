const express = require("express");
const router = express.Router();

const {
  makePayment,
  capturePaymentResponse,
} = require("../controllers/paymentController");
router.post("/payment", makePayment);
router.get("/callback/", capturePaymentResponse);
module.exports = router;
