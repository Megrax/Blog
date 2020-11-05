let mysql = require('mysql');
let $conf = require('../conf/mysql');
let $sql = require('./postsSqlMapping');

let pool = mysql.createPool($conf);

let jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    pass_posts_asJson: function (res) {
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject("there is a mistake");
                }
                // 建立连接，在表中查询管理员用户名与密码，进行登录验证
                let promise = new Promise(function (resolve, reject) {
                    connection.query($sql.queryPtitleAndTime, function (err, queryResult) {
                        if (err) {
                            reject("there is a mistake");
                        }
                        let result = JSON.parse(JSON.stringify(queryResult));
                        // console.log(result);
                        connection.release();
                        resolve(result);
                    });
                }).catch(new Function());
                resolve(promise);
            });
        }).catch(new Function());
    }
};