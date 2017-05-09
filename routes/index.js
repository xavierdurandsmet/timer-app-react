const express = require('express');

const router = express.Router();

router.get('/countdown/:id', function (req, res) {
  console.log(req.params)
  const mockData = { count: 3 }
  res.json(mockData)
})

router.get('/tweets', function (req, res) {
  const tweets = [
    {
      title: 'first tweet'
    },
    {
      title: 'second tweet'
    },
    {
      title: 'third tweet'
    }
  ]
  res.json(tweets);
})

module.exports = router;