const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service you prefer
  auth: {
    user: 'rileyglander@gmail.com', // Your email
    pass: 'your-email-password' // Your email password
  }
});

app.post('/send', (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  let mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: subject,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
