var nodemailer = require('nodemailer');

exports.contactEmail = (name, email, phone, quantity, message, option1, option2, option3) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "jraygoodall@gmail.com" || process.env.MAIL_USER,
        pass: "Honolulu13" || process.env.MAIL_PASS
      }
    });
    var mailOptions = {
      from: email,
      to: 'jraygoodall@gmail.com', //hr@overturepromo.com 
      subject: 'You have a new contact request',
      html: `<h4>name:</h4> ${name} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>Quantity</h4> ${quantity} <h4>message:</h4> ${message} <h4>Option 1:</h4> ${option1} <h4>Option 2:</h4> ${option2} <h4>Option 3:</h4> ${option3}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };
