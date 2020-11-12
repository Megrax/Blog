let tag_post = {
    insert: 'INSERT INTO tag_post(tid, pid) VALUES(?,?)',
    update: 'UPDATE tag_post SET tid=?, pid=? WHERE tid=?',
    delete: 'DELETE FROM tag_post where tid=?',
    queryByPid: 'SELECT tid FROM tag_post WHERE pid=?',
    queryAll: 'SELECT * FROM tag_post'
};

module.exports = tag_post;