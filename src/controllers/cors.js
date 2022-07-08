module.exports = async (req, res, next) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
  } catch (error) {}
  next();
};
