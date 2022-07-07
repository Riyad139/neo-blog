const express = require("express");
const { route } = require("../app");
const blog = express.Router();

blog.route("/:blogId").get((req, res) => {
  const id = req.params.blogId;
  res.json({
    massage: "success",
    id,
  });
});

module.exports = blog;
