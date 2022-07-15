const zod = require("zod");
const jwt = require("jsonwebtoken");
const users = require("./../Models/userModel");
const sendEmail = require("./../utils/sendMail");

const createTokenAndSend = async (id, email) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });

  console.log(token);
  const url = `http://192.168.0.105:3000/login/${token}`;
  const text = `use this link to login ${url} (:`;
  const subject = "authentication";
  await sendEmail({
    email,
    text,
    subject,
  });
};

exports.verifyLogin = async (req, res, next) => {
  const token = req.params.token;
  let id;
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      id = decoded.id;
    });
    const user = await users.findById(id);
    if (!user) return next(new Error("No user found! fuck off"));
    res.status(200).json({
      user,
      token,
    });
  } catch (err) {
    res.status(404).json({
      message: "fail",
    });
  }
};

exports.isLogin = async (req, res, next) => {
  const token = req.body.token;
  let id;
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      id = decoded.id;
    });
    const user = await users.findById(id);
    if (!user) throw new Error("No user found! fuck off");
    req.user = user;
    next();
  } catch (err) {
    next(new Error("error"));
  }
};

exports.logIn = async (req, res, next) => {
  const { email } = req.body;

  try {
    zod.string().email().parse(email);
    const currUser = await users.findOne({ email });
    if (!currUser) throw new Error("hmmm..,,.");

    await createTokenAndSend(currUser._id, currUser.email);

    res.status(200).json({
      message: "sucess",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "email not found",
    });
    console.log(err);
  }
};

exports.signUp = async (req, res, next) => {
  const { email, name, role } = req.body;

  try {
    const user = await users.create({
      email,
      name,
      role,
    });
    console.log(user);
    await createTokenAndSend(user._id, user.email);

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    res.status(404).json({
      message: "hmmmm......",
    });
    console.log(err);
  }
};

exports.strictTo = (role) => {
  return (req, res, next) => {
    if (req.user.role.includes(role)) return next();
    return next(new Error("bad request"));
  };
};
