let comments = {
    insert: 'INSERT INTO comments(cid, pid, cperson, ccontent, ccreated_at) VALUES(?,?,?,?,?)',
    update: 'UPDATE comments SET pid=?, cperson=?, ccontent=?, ccreated_at=? WHERE cid=?',
    delete: 'DELETE FROM comments where cid=?',
    queryByPid: 'SELECT * FROM comments WHERE pid=?',
    queryAll: 'SELECT * FROM comments'
};

module.exports = comments;