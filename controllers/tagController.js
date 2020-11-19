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
            res.render('../views/tag', { tags_list: result });
        });
};

//展示标签对应的博文
exports.tag_rela = (req, res) => { res.send('未实现：标签对应的博文 GET'); };