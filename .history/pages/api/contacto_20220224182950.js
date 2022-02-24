export default function (req, res) {
  console.log(req.body)
  let mailer = require("nodemailer")
  const transporter = mailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "eduardoenviameelcorreo@gmail.com",
      pass: "EduardoMiCorreo123/",
    },
    secure: true,
  })
}
