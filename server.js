const express = require('express');
const tweets = require('./routes/index.js');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const nodemailer = require('./nodemailer.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Create our app
var app = express();
// const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// secret key for jwt
process.env.SECRET_KEY = 'secret key';

app.use(express.static(__dirname + '/public'));
// Middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});


// // validation middleware
// app.use((req, res, next) => {
//   const token = req.body.token || req.headers.token;
//   if (token) {
//     jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
//       if (err) {
//         res.status(500).send("Invalid token");
//       } else {
//         next();
//       }
//     } )
//   } else {
//     res.send("please send a token")
//   }
// })

app.post('/authenticate', (req, res) => {
  res.status(200).json('showModal');
  const receiverInfo = { mailAddress: req.body.mailAddress };
  // mock user
  const user = {
    username: 'test',
    email: req.body.mailAddress
  }
  const token = jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: 4000
  });
  nodemailer.sendMail(receiverInfo, token);
  res.json({
    success: true,
    token: token
  })
})


app.get('/authenticate', (req, res) => {
  console.log('authenticate hit', req.query.token)
  
})

// Routes 
app.get('/timer', function (req, res) {
  const mockData = { count: 3 }
  res.json(mockData)
})

app.use(tweets);

var url = 'mongodb://localhost:27017/tester';
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  // db.close();
});

const server = app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});


const io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('room', function (msg) {
    // setInterval(function () {
    //   const newTweet = { title: 'this is a new tweet' }
    //   io.emit('new Tweet', newTweet);
    // }, 1000);
  });
});

    // socket.on('new Tweet', (payload) => {
    //     const newTweetsList = [...this.state.tweets, payload]
    //     this.setState({tweets: newTweetsList})
    // }),
