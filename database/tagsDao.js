let mysql = require('mysql');
let $sql = require('./tagsSqlMapping');
let sqls = `
SELECT tid, ttitle FROM tags WHERE tid=?;
SELECT pid, ptitle, pcreated_at FROM posts WHERE pid = ANY(SELECT pid FROM tag_post WHERE tid = ?);
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
    send_tags: function (req,res) {
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
    send_single_tag: function (req, res) {
        return new Promise(function (resolve, reject) {
            pool2.getConnection(function (err, connection) {
                if (err) {
                    reject("there is a mistake");
                }
                let promise = new Promise(function (resolve, reject) {
                    connection.query(sqls, [req.params.tid, req.params.tid], function (err, queryResult) {
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
    }
}