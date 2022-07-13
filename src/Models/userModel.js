const mongoose = require("mongoose");
const zod = require("zod");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const users = mongoose.model("Users", userSchema);

module.exports = users;
