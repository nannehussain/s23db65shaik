var express = require('express');
const egg_controlers = require('../controllers/egg');
var router = express.Router();
var passport = require('passport');

/* GET eggs */
router.get('/', egg_controlers.egg_view_all_Page);

/* GET detail egg page */
router.get('/detail', egg_controlers.egg_view_one_Page);

/* GET create egg page */
router.get('/create', egg_controlers.egg_create_Page);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};

/* GET update egg page */
router.get('/update', secured, egg_controlers.egg_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

/* GET delete egg page */
router.get('/delete', egg_controlers.egg_delete_Page);

module.exports = router;
