const express = require("express");
const blog = express.Router();
const blogController = require("./../controllers/blogController");
const userController = require("./../controllers/userController");
blog.route("/login").post(userController.logIn);
blog.route("/login/:token").post(userController.verifyLogin);

blog.route("/signup").post(userController.signUp);

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
