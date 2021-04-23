/*
var mysql  = require('mysql');
//1.创建连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'users'//数据库名字
});
//2.连接数据库
/!*connection.connect();*!/
//3.执行数据库操作
/!*connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error;
    console.log('结果是: ', results);
});*!/
/!*connection.query('INSERT INTO users VALUES(null,"admin","123456")', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});*!/
module.exports = connection*/
module.exports = {
    mysql: {
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'users',//数据库名字
        port: '3306',
    }
}
