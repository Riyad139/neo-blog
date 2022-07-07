const articleModel = require("./../Models/Model");

exports.getAll = async (req, res) => {
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
