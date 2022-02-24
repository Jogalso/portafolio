export default function (req, res) {
  console.log(
    req.body,
    process.env.emailDelQueEnviamos,
    process.env.emailAlQueEnviar,
    process.env.contraseña
  )
  let mailer = require("nodemailer")
  const transporter = mailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.emailDelQueEnviamos,
      pass: process.env.contraseña,
    },
    secure: true,
  })

  const mailData = {
    from: process.env.emailDelQueEnviamos,
    to: process.env.emailAlQueEnviar,
    subject: `Mensaje de contacto de ${req.body.nombre}`,
    text: `Contacta  ${req.body.nombre}, con el motivo: ${req.body.motivo}, solicita informacion al email: ${req.body.email} o al telefono ${req.body.telefono}`,
  }

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log("error: ", err)
    else console.log("Informacion del envio: ", info)
  })
  res.status(200)
}
