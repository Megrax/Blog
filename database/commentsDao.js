let mysql = require('mysql');
let $conf = require('../conf/mysql');
let $sql = require('./commentsSqlMapping');

let pool = mysql.createPool($conf);

module.exports = {
    add_comm: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            let pid = parseInt(req.body.pid);
            connection.query($sql.insert, [ pid, req.body.cperson, req.body.ccontent, null, req.body.cemail], function (err) {
                if (err) {
                    console.log(err);
                }   
            });
        });
    }
}