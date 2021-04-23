var fs = require('fs')
var Promise = require('promise')
function readfile(path) {
    return new Promise(function (resolve,reject) { //封装
        fs.readFile(path,'utf8',function (err,data) {//异步任务
            if(err){
                reject(err)//失败调用
            }
            else{
                resolve(data)//成功调用
            }
        })
    })
}
readfile('hello.txt')
    .then(function (data) {
        return readfile('hello.txt')
    })
    .then(function (data) {
        console.log(data)
    })