const express = require('express');
const router = express.Router();

//导入控制器模块
// const post_controller = require('../controllers/postController');
// const tag_controller = require('../controllers/tagController');
const admin_controller = require('../controllers/adminController');

// //首页路由
// router.get()

// //posts路由
// router.get('/posts', post_controller.post_list);
// router.get('/posts/:pid', post_controller.post_show);

// //tags路由
// router.get('/tags', tag_controller.tag_list);
// router.get('/tags/:tid', tag_controller.tag_rela);

//admin路由
router.post('/admin/login', admin_controller.admin_login);
//admin/posts
router.get('/admin/posts', admin_controller.admin_post);
router.post('/admin/posts/add', admin_controller.admin_post_add);
router.post('/admin/posts/:pid/delete', admin_controller.admin_post_delete);
router.post('/admin/posts/:pid/alter', admin_controller.admin_post_alter);
router.post('/admin/posts/:pid/tags_add', admin_controller.admin_post_addtag);
router.post('/admin/posts/:pid/tags_delete/:tid', admin_controller.admin_tag_delete);
//admin/tags
router.get('/admin/tags', admin_controller.admin_tag);
router.post('/admin/tags/:tid/add', admin_controller.admin_tag_add);
router.post('/admin/tags/:tid/delete', admin_controller.admin_tag_delete);
router.post('/admin/tags/:tid/alter', admin_controller.admin_tag_alter);
//admin/comments
router.get('/admin/comments', admin_controller.admin_comment);

module.exports = router;