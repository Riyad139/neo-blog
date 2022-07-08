const articleModel = require("./../Models/Model");

exports.getAllBlogs = async (req, res) => {
  const articles = await articleModel.find();
  try {
    res.status(200).json({
      totalArticles: articles.length,
      data: {
        articles,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.createArticle = async (req, res) => {
  try {
    console.log(req.body);
    const article = await articleModel.create(req.body);

    res.status(200).json({
      article,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.getBlogById = async (req, res) => {
  const id = req.params.Id;
  try {
    const article = await articleModel.findById(id);
    res.status(200).json({
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.updateBlog = async (req, res) => {
  const id = req.params.Id;
  try {
    const article = await articleModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.Id;
  try {
    const article = await articleModel.findByIdAndDelete(id);
    res.status(200).json({
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
