const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

router.get('/', post_controller.post_list);
router.get('/:pid', post_controller.post_show);
router.post('/add_comment', post_controller.add_comment);

module.exports = router;