const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  dummyProfile: {
    userName: {
      type: String,
      default: "neo",
    },
    userTitle: {
      type: String,
      default: "Programmer",
    },
    ProfilePic: String,
  },

  title: {
    type: String,
    required: [true, "A blog must have a name"],
    trim: true,
  },
  articleBody: {
    type: String,
    trim: true,
  },
  tag: {
    type: String,
    default: "product",
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const articleModel = mongoose.model("articles", schema);
module.exports = articleModel;
