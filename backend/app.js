const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');

const app = express();  
app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir,'../','views', 'index.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(rootDir,'../','views', 'contactMe.html'));
});

app.post('/contact-me', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.redirect('/contact-me');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});