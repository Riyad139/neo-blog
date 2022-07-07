const express = require("express");
const app = express();
const port = 6565;
const blog = require("./Routers/blog-router");

app.use(blog);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
