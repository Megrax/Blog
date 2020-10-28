const express = require('express');
const router = express.Router();

const tag_controller = require('../controllers/tagController');

router.get('/', tag_controller.tag_list);
router.get('/tags/:tid', tag_controller.tag_rela);

module.exports = router;