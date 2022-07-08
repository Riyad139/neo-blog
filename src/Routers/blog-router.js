const express = require("express");
const blog = express.Router();
const blogController = require("./../controllers/blogController");

blog
  .route("/blog")
  .get(blogController.getAllBlogs)
  .post(blogController.createArticle);

blog
  .route("/blog/:Id")
  .get(blogController.getBlogById)
  .put(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = blog;
