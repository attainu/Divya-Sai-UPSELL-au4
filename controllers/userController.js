const User = require("../models/User");
const { Order, ProductCart } = require("../models/Order");
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  //TODO: get back here for password
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You're not authorized to update this information.",
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      user.createdAt = undefined;
      user.updatedAt = undefined;
      res.json(user);
    }
  );
};

exports.passwordReset = (req, res) => {
  console.log("hello");
  User.findOne({ email: req.body.email }, function (err, user) {
    if (user) {
      if (req.body.password.length) {
        user.password = req.body.password;
      }
      user.save(function (err) {
        if (err) throw err;
        res.status(200).json(user);
      });
      return;
    } else {
      res.status(400).json({
        error: "No user found",
      });
    }
  });
};

exports.userPurchaseList = (req, res) => {
  Order.find({ user: req.profile._id })
    .populate("user", "_id name")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found in the account",
        });
      }
      return res.json(order);
    });
};

exports.pushOrderInPurchaseList = (req, res, next) => {
  let purchases = [];
  req.body.products.forEach((product) => {
    purchases.push({
      _id: product.productid,
      name: product.producttitle,
      quantity: product.quantity,
      amount: product.productprice,
      transaction_id: req.body.txnId,
    });
  });

  //store in DB
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { purchases: purchases } },
    { new: true },
    (err, purchases) => {
      if (err) {
        return res.status(400).json({
          error: "Unable to save purchase list",
        });
      }
      next();
    }
  );
};

// exports.getAllUsers = (req, res) => {
//   User.find().exec((err, users) => {
//     if (err || !users) {
//       return res.status(400).json({
//         error: "No users found",
//       });
//     }
//     res.json(users);
//   });
// };
