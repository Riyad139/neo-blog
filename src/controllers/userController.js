const zod = require("zod");
const jwt = require("jsonwebtoken");
const users = require("./../Models/userModel");
const sendEmail = require("./../utils/sendMail");

const createTokenAndSend = async (id, email) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });

  console.log(token);
  const url = `http://127.0.1:6565/admin/${token}`;
  const text = `use this link to login ${url} (:`;
  const subject = "authentication";
  await sendEmail({
    email,
    text,
    subject,
  });
};

exports.logIn = async (req, res, next) => {
  const { email } = req.body;

  try {
    zod.string().email().parse(email);
    const currUser = await users.findOne({ email });

    const token = jwt.sign({ id: email }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    console.log(token);
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
