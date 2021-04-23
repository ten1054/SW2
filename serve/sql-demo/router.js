const models = require('./db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('./sql-tiaojian');

const conn = mysql.createConnection(models.mysql);
conn.connect();
// 登录接口
router.post('/login',(req,res)=>{
    const user = req.body;
    const sel_user = $sql.user.select + " where username = '" + user.user+ "'";
    console.log(sel_user);
    conn.query(sel_user, user.user, (error, results)=>{
        if (error) {
            throw error;
        }
        console.log(results)
        if (results[0] === undefined) {
            console.log(results)
            res.send("-1");  // -1 表示查询不到，用户不存在，即username填写错误
        } else{
            if (results[0].username == user.user && results[0].password == user.pow) {
                console.log(results)
                res.send("0");  // 0 表示用户存在并且邮箱密码正确
            } else{
                res.send("1");  // 1 表示用户存在，但密码不正确
            }
        }
    })
});

// 查询接口
router.post('/home',(req,res)=>{
    const user = req.body;
    const sel_user = $sql.user.select + " where username = '" + user.us+ "'";
    console.log(sel_user);
    conn.query(sel_user, (error, results)=>{
        if (error) {
            throw error;
        }
        else{
            res.send(results);
            console.log(results)
        }
    })
});
module.exports = router;