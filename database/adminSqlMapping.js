let admin = {
    insert: 'INSERT INTO admin(username, passwd) VALUES(?,?)',
    update: 'UPDATE admin SET passwd=? WHERE username=?',
    delete: 'DELETE FROM admin where username=?',
    queryByName: 'SELECT passwd FROM admin WHERE username=?',
    queryAll: 'SELECT * FROM admin',
    test: 'SELECT * FROM admin WHERE username="admin"'
};

module.exports = admin;