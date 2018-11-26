const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const fn = require("./functions.js");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
  const port = process.env.PORT || 5000;

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express I guess' });
  });

  app.get('/test', (req, res) => {
      res.send('testing completed')
  })

  app.post('/contact', (req, res) => {
    res.send();
    fn.contactEmail(req.body.name, req.body.email, req.body.phone, req.body.quantity, req.body.message, req.body.selectedOption, req.body.selectedOption2, req.body.selectedOption3)
      //Right here we will want to be able to send an email to me of what the actual error was via nodmailer with my email
  })

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
  app.listen(port, () => console.log(`Listening on port ${port}`));