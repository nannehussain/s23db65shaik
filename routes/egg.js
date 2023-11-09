var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('egg', { title: 'Search Results  egg' });
});
var express = require('express');
const egg_controlers= require('../controllers/egg');
var router = express.Router();
/* GET costumes */
router.get('/', egg_controlers.egg_view_all_Page );
module.exports = router;

module.exports = router;