const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const {
  isSignedIn,
  isAdmin,
  isAuthenticated,
} = require("../controllers/authController");
const { getUserById } = require("../controllers/userController");
//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//routes
//Create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);
//Read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategories);
//Update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

//Delete
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteCategory
);
module.exports = router;
