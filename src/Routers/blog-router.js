const express = require("express");
const blog = express.Router();
const blogController = require("./../controllers/blogController");

blog
  .route("/blog")
  .get(blogController.getAll)
  .post(blogController.createArticle);

module.exports = blog;
