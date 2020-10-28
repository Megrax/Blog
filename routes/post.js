const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

router.get('/', post_controller.post_list);
router.get('/posts/:pid', post_controller.post_show);

module.exports = router;