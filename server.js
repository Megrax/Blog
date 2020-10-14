let http = require('http');
let fs = require('fs');
let path = require('path');
let mime = require('mime');

http.createServer(function (req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        fs.readFile('./public/index.html', 'utf-8', function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
    else {
        let publicName = path.join(__dirname, 'public');
        let fileName = path.join(publicName, req.url);
        fs.readFile(fileName, function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf8');
                res.end('文件不存在');
            }
            else {
                res.setHeader('Content-Type', mime.getType(fileName));
                res.end(data);
            }
        })
    }
}).listen(7777, function () {
    console.log('http://localhost:7777');
});