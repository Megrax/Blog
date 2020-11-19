let mysql = require('mysql');
let $sql = require('./postsSqlMapping');
//sqls是查询博文内容、博文评论、博文标签的一系列语句
let sqls = `
SELECT * FROM posts WHERE pid=?;
SELECT cid,pid,cperson,ccontent,ccreated_at FROM comments WHERE pid=?;
SELECT tid,ttitle FROM tags WHERE tid = ANY(SELECT tid FROM tag_post WHERE pid = ?);
`;

const pool1 = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "Blog",
        port: 3306
    }
);

const pool2 = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "Blog",
        port: 3306,
        multipleStatements: true //开启多语句查询
    }
);

module.exports = {
    pass_posts_asJson: function (res) {
        return new Promise(function (resolve, reject) {
            pool1.getConnection(function (err, connection) {
                if (err) {
                    reject("there is a mistake");
                }
                let promise = new Promise(function (resolve, reject) {
                    connection.query($sql.queryAll, function (err, queryResult) {
                        if (err) {
                            reject("there is a mistake");
                        }
                        let result = JSON.parse(JSON.stringify(queryResult));
                        connection.release();
                        resolve(result);
                    });
                }).catch(new Function());
                resolve(promise);
            });
        }).catch(new Function());
    },
    pass_single_asJson: function (req, res) {
        return new Promise(function (resolve, reject) {
            pool2.getConnection(function (err, connection) {
                if (err) {
                    reject("there is a mistake");
                }
                let promise = new Promise(function (resolve, reject) {
                    connection.query(sqls, [req.params.pid, req.params.pid, req.params.pid], function (err, queryResult) {
                        if (err) {
                            reject("there is a mistake");
                        }
                        let result = JSON.parse(JSON.stringify(queryResult));
                        console.log(result);
                        connection.release();
                        resolve(result);
                    });
                }).catch(new Function());
                resolve(promise);
            });
        }).catch(new Function());
    }
};