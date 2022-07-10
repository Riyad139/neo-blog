module.exports = async (req, res, next) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
  } catch (error) {}
  next();
};
