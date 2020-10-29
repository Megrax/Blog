const post = require('../database/postsSqlMapping');

exports.index = (req, res) => {
    res.render("index.ejs", { title: "<h4>express</h4>" });
};
