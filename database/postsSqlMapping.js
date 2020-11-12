let posts = {
    insert: 'INSERT INTO posts(pid, ptitle, pcontent, psummary, ppic, pcategory, pcreated_at) VALUES(?,?,?,?,?,?,?)',
    update: 'UPDATE posts SET ptitle=?, pcontent=?, psummary=?, ppic=?, pcategory=?,pcreated_at=? WHERE pid=?',
    delete: 'DELETE FROM posts where pid=?',
    queryById: 'SELECT * FROM posts WHERE pid=?',
    queryPtitleAndTime: 'SELECT ptitle, pcreated_at FROM posts',
    queryAll: 'SELECT * FROM posts'
};

module.exports = posts;