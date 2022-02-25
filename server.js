const path = require("path");
const emoji = require('node-emoji');
const express = require("express");
const app = express(); // create express app
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const PORT = process.env.PORT || 8080;


const generate = (email) => {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  return jwt.sign({ email, expiration }, process.env.JWT_SECRET);
}
// add middlewares
app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/create', async (req, res) => {
  const email = 'raj22kesh@gmail.com';
  const token = generate(email);
  const verification = jwt.verify(token, process.env.JWT_SECRET);
  return res.send({ token, verification });
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// start express server on port 3001
app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT} ${emoji.get('coffee')}`);
});