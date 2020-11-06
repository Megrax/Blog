let mysql = require('mysql');
let $conf = require('../conf/mysql');
let $sql = require('./postsSqlMapping');

let pool = mysql.createPool($conf);

module.exports = {
    pass_posts_asJson: function (res) {
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject("there is a mistake");
                }
                let promise = new Promise(function (resolve, reject) {
                    connection.query($sql.queryAll, function (err, queryResult) {
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
    },
    pass_single_asJson: function (req, res) {
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject("there is a mistake");
                }
                let promise = new Promise(function (resolve, reject) {
                    connection.query($sql.queryById, req.params.pid, function (err, queryResult) {
                        if (err) {
                            reject("there is a mistake");
                        }
                        let result = JSON.parse(JSON.stringify(queryResult));
                        connection.release();
                        console.log(result[0].pcontent);
                        resolve(result);
                    });
                }).catch(new Function());
                resolve(promise);
            });
        }).catch(new Function());
    }
};