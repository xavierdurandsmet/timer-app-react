const express = require('express');
const tweets = require('./routes/index.js');

// Create our app
var app = express();
// const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/public'));

// Routes 
app.get('/timer', function (req, res) {
  const mockData = { count: 3 }
  res.json(mockData)
})

app.use(tweets);


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
