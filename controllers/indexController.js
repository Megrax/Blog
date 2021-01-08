const postDao = require('../database/postsDao');

exports.index = (req, res) => {
    postDao.pass_posts_asJson().then(function (result) {
        return result;
    })
        .then(function (result) {
            res.json(result);
        });
};
