var nodemailer = require('nodemailer');

exports.contactEmail = (name, email, phone, quantity, message, option1, option2, option3) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: "jakesclients@gmail.com" || process.env.MAIL_USER,
        pass: "X13Bilxzs" || process.env.MAIL_PASS
      }
    });
    var mailOptions = {
      from: 'fusionsens@gener8.net',
      to: 'jraygoodall@gmail.com', //jakesclients@gmail.com
      subject: `You have a new contact request from ${email}`,
      html: `<h4>name:</h4> ${name} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>quantity:</h4> ${quantity} <h4>message:</h4> ${message} <h4>Option 1:</h4> ${option1} <h4>Option 2:</h4> ${option2} <h4>Option 3:</h4> ${option3}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };
