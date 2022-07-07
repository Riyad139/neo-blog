const env = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 6565;
const blog = require("./Routers/blog-router");
app.use(express.json());
app.use(blog);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((ms) => {
    console.log("success");
  });
