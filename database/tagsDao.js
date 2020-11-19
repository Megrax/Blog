let mysql = require('mysql');
let $sql = require('./tagsSqlMapping');

const pool = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "Blog",
        port: 3306
    }
);

module.exports = {
    send_tags: function (req,res) {
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
                        connection.release();
                        resolve(result);
                        console.log(result);
                    });
                }).catch(new Function());
                resolve(promise);
            });
        }).catch(new Function());
    }
}