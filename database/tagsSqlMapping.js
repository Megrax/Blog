let tags = {
    insert: 'INSERT INTO tags(tid, ttitle) VALUES(?,?)',
    update: 'UPDATE tags SET tid=?, ttitle=? WHERE tid=?',
    delete: 'DELETE FROM tags where tid=?',
    queryByid: 'SELECT ttitle FROM tags WHERE tid=?',
    queryAll: 'SELECT * FROM tags'
};

module.exports = tags;