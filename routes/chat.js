var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/join', function(req, res, next) {
  var params = req.body
  console.log('params', params);
  res.send('successfully joined');
});

module.exports = router;
