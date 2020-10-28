let mysql = require('mysql');
let $conf = require('../conf/mysql');
let $sql = require('./adminSqlMapping');

// 使用连接池，提升性能
let pool = mysql.createPool($conf);

// 向前台返回JSON方法的简单封装
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
    check: function (req, res, next) {
        pool.getConnection(function (err, connection) {

            // 获取前台页面传过来的参数
            let req_uname = req.query.username;
            let req_pwd = req.query.password;

            // 建立连接，在表中查询管理员用户名与密码，进行登录验证
            // 'SELECT * FROM admin WHERE username="admin"'
            connection.query($sql.test, function (err, queryResult) {

                if (queryResult[0].username === req_uname && queryResult[0].passwd === req_pwd) {
                    result = {
                        code: 200,
                        msg: '登录成功'
                    };
                }
                else {
                    result = {
                        code: 0,
                        msg: '登录失败'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    }
};