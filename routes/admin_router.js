const express = require('express');
const router = express.Router();

//导入控制器模块
const admin_controller = require('../controllers/adminController');

//admin登录路由
router.post('/login', admin_controller.admin_login);

//admin/posts
router.get('/posts', admin_controller.admin_post);
router.post('/posts/add', admin_controller.admin_post_add);
router.post('/posts/:pid/delete', admin_controller.admin_post_delete);
router.post('/posts/:pid/alter', admin_controller.admin_post_alter);
router.post('/posts/:pid/tags_add', admin_controller.admin_post_addtag);
router.post('/posts/:pid/tags_delete/:tid', admin_controller.admin_tag_delete);

//admin/tags
router.get('/tags', admin_controller.admin_tag);
router.post('/tags/:tid/add', admin_controller.admin_tag_add);
router.post('/tags/:tid/delete', admin_controller.admin_tag_delete);
router.post('/tags/:tid/alter', admin_controller.admin_tag_alter);

//admin/comments
router.get('/comments', admin_controller.admin_comment);

module.exports = router;