const post = require('../database/postsSqlMapping');

//显示博文列表
exports.post_list = (req, res) => { res.send('未实现：博文列表 GET'); };

//显示具体博文
exports.post_show = (req, res) => { res.send('未实现：一篇博文页 GET' + req.params.pid); };
