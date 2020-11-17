const postDao = require('../database/postsDao');
const commentsDao = require('../database/commentsDao');

//显示博文列表
exports.post_list = (req, res) => {
    postDao.pass_posts_asJson()
        .then(function (result) {
            return result;
        })
        .then(function (result) {
            res.render('../views/lists', { posts_list: result });
        });
};

//显示具体博文
exports.post_show = (req, res) => {
    postDao.pass_single_asJson(req)
        .then(function (result) {
            return result;
        })
        .then(function (result) {
            res.render('../views/post', {
                post_info: result[0],
                comment_info: result[1]
            });
        });
};

exports.add_comment = (req) => {
    commentsDao.add_comm(req);
};