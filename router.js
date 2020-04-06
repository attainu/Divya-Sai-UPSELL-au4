const express = require("express");
const router = express.Router();

// user related routes
router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
