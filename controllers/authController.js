const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
dotenv.config({ path: "./config/config.env" });

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save user in DB",
      });
    }
    return res.status(200).json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User email doesn't exist",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and Password doesn't match",
      });
    }
    const secret = process.env.SECRET;
    console.log(secret);
    const token = jwt.sign({ _id: user._id }, secret);
    res.cookie("token", token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: {
        _id,
        name,
        email,
        role,
      },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User signout successfully",
  });
};
//Protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});
//Custom middlewares
exports.isAuthenticated = (req, res, next) => {
  console.log(req.profile);
  console.log(req.auth);
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You're not Admin to access this part of the site",
    });
  }
  next();
};
