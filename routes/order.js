const express = require("express");
const router = express.Router();

const {
  isSignedIn,
  isAdmin,
  isAuthenticated,
} = require("../controllers/authController");
const {
  getUserById,
  pushOrderInPurchaseList,
} = require("../controllers/userController");
const { updateStock } = require("../controllers/productController");
const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
} = require("../controllers/orderController");

//Params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//Routes
//create
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateStock,
  createOrder
);
//read
router.get(
  "/order/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

//status of order router
router.get(
  "/order/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getOrderStatus
);
router.put(
  "/order/:orderId/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateStatus
);
module.exports = router;
