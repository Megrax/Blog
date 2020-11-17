let comments = {
    insert: 'INSERT INTO comments(pid, cperson, ccontent, ccreated_at, cemail) VALUES(?,?,?,?,?)',
    update: 'UPDATE comments SET pid=?, cperson=?, ccontent=?, ccreated_at=?,cemail=? WHERE cid=?',
    delete: 'DELETE FROM comments where cid=?',
    queryByPid: 'SELECT * FROM comments WHERE pid=?',
    queryAll: 'SELECT * FROM comments'
};

module.exports = comments;