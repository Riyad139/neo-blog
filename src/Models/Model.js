const mongoose = require("mongoose");

const schema = new mongoose.schema({
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
    required: [true, "A blog must have a desc"],
    trim: true,
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
