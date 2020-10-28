var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function (req, res, next) {
//   res.redirect('/main_router');
// });

router.get('/', index_controller.index);

module.exports = router;
