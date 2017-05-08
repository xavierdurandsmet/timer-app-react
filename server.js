var express = require('express');

// Create our app
var app = express();
// const routes = require('./routes');
const PORT = process.env.PORT || 3000;


app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/public'));

app.get('/timer', function (req, res) {
  const mockData = {count: 3}
  res.json(mockData)
})

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
