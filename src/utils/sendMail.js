const mailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = mailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "09b671590211a7",
      pass: "f96ec0908d0b5f",
    },
  });

  const option = {
    from: "neomatters<neo@matters.io>",
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(option);
  console.log("sent succesfully");
};

module.exports = sendEmail;
