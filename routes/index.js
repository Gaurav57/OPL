var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OPL',logo: 'OP',copyyear:'2015' });
});

module.exports = router;
