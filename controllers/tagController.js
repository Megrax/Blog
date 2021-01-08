const tag = require('../database/tagsSqlMapping');
const tag_post = require('../database/tag_postSqlMapping');
const tagDao = require('../database/tagsDao');

//展示标签页
exports.tag_list = (req, res) => { 
    tagDao.send_tags()
        .then(function (result) {
            return result;
        })
        .then(function (result) {
            res.json(result);
        });
};

//展示标签对应的博文
exports.tag_rela = (req, res) => { 
    tagDao.send_single_tag(req)
    .then(function (result) {
        return result;
    })
    .then(function (result) {
        res.render('../views/tag', {
            tag_info: result[0],
            post_info: result[1]
        });
    });
};