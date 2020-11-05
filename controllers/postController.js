const post = require('../database/postsSqlMapping');
const postDao = require('../database/postsDao');

//显示博文列表
exports.post_list = (req, res) => {
    postDao.pass_posts_asJson().then(function (result) {
        return result;
    })
        .then(function (result) {
            res.render('../views/lists', { posts_list: result });
            return result;
        });
};

//显示具体博文
exports.post_show = (req, res) => { res.send('未实现：一篇博文页 GET' + req.params.pid); };
