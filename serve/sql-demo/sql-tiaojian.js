var sqlMap = {
    user: {
        add: 'insert into users (username, email, password) values (?,?,?)',
        select: 'select * from users'
    }
}

module.exports = sqlMap;