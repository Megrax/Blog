const admin = require('../database/adminSqlMapping');
const post = require('../database/postsSqlMapping');
const tag = require('../database/tagsSqlMapping');
const post_tag = require('../database/tag_postSqlMapping');

//登录验证页面
exports.admin_login = (req, res) => { res.send('未实现：登录页面 POST'); };

//后台博文管理页面
exports.admin_post = (req, res) => { res.send('未实现：后台博文管理 GET'); };

//后台标签管理页面
exports.admin_tag = (req, res) => { res.send('未实现：后台标签管理 GET'); };

//后台评论管理页面
exports.admin_comment = (req, res) => { res.send('未实现：后台评论管理 GET'); };

//退出登录
exports.admin_logout = (req, res) => { res.send('未实现：退出登录 POST'); };

//新增博文
exports.admin_post_add = (req, res) => { res.send('未实现：新增博文 POST'); };

//删除博文
exports.admin_post_delete = (req, res) => { res.send('未实现：删除博文 POST' + req.params.pid); };

//修改博文
exports.admin_post_alter = (req, res) => { res.send('未实现：修改博文 POST' + req.params.pid); };

//新增博文对应标签
exports.admin_post_addtag = (req, res) => { res.send('未实现：新增博文标签 POST'); };

//删除博文对应标签
exports.admin_post_deletetag = (req, res) => { res.send('未实现：删除博文标签 POST' + req.params.pid + "的" + req.params.tid); };

//后台删除标签
exports.admin_tag_delete = (req, res) => { res.send('未实现：后台删除标签 POST' + req.params.tid); };

//后台添加标签
exports.admin_tag_add = (req, res) => { res.send('未实现：后台添加标签 POST' + req.params.tid); };

//后台修改标签
exports.admin_tag_alter = (req, res) => { res.send('未实现：后台修改标签 POST' + req.params.tid); };

//后台删除评论
exports.admin_comment_delete = (req, res) => { res.send('未实现：后台删除评论 POST' + req.params.cid); };