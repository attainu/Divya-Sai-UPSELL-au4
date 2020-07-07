const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList,
  passwordReset,
} = require("../controllers/userController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../controllers/authController");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.put("/resetpassword", passwordReset);
router.get(
  "/user/orders/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);
module.exports = router;
