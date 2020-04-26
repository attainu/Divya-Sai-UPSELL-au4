const Category = require("../models/Category");
exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cat) => {
    if (err) {
      return res.status(400).json({
        error: "Category is not found.",
      });
    }
    req.category = cat;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, cat) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save category in DB",
      });
    }
    res.json({ cat });
  });
};

exports.getCategory = (req, res) => {
  return res.json(req.category);
  //
};
exports.getAllCategories = (req, res) => {
  Category.find().exec((err, cats) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to find categories in DB",
      });
    }
    res.json(cats);
  });
};

exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, updatedCat) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to update category in DB",
      });
    }
    res.json(updatedCat);
  });
};

exports.deleteCategory = (req, res) => {
  const category = req.category;

  category.remove((err, cat) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to remove category in DB",
      });
    }
    res.json({
      message: `removal of ${cat.name} was Successful`,
    });
  });
};
