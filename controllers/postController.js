const postDao = require('../database/postsDao');
const commentsDao = require('../database/commentsDao');

//显示博文列表
exports.post_list = (req, res) => {
    postDao.pass_posts_asJson()
        .then(function (result) {
            return result;
        })
        .then(function (result) {
            res.json(result);
        });
};

//显示具体博文
exports.post_show = (req, res) => {
    postDao.pass_single_asJson(req)
        .then(function (result) {
            return result;
        })
        .then(function (result) {
            res.json(result);
        });
};

//访客添加评论
exports.add_comment = (req,res) => {
    commentsDao.add_comm(req);
};