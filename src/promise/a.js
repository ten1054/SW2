var fs = require('fs')
var Promise = require('promise')
var p1 = new Promise(function (resolve,reject) {
    fs.readFile('./hello.txt','utf8',function (err,data) {//异步任务
        if(err){
            reject(err)//失败调用
        }
        else{
            resolve(data)//成功调用
        }
    })
})

var p2 = new Promise(function (resolve,reject) {
    fs.readFile('./hello2.txt','utf8',function (err,data) {//异步任务
        if(err){
            reject(err)//失败调用
        }
        else{
            resolve(data)//成功调用
        }
    })
})

var p3 = new Promise(function (resolve,reject) {
    fs.readFile('./hello3.txt','utf8',function (err,data) {//异步任务
        if(err){
            reject(err)//失败调用
        }
        else{
            resolve(data)//成功调用
        }
    })
})
p1
    .then(function (data) {
    console.log(data)
    //当p1读取成功时
    //当前函数的return结果就可以在后面的function接收到
    // 如 retur 123 后面就是123
    //真正有用的是：可以return一个promise对象
    //当p1 return一个promise对象时，后续的then中方法的第一个参数会最为p2的resolve
    return p2
    },function (err) {
        console.log('读取文件错误',err)
        }
    )

    .then(function (data) {
           return p3
        },function (err) {
            console.log('读取文件错误',err)
        }
    )
    .then(function (data) {
        console.log(data + 1)
        },function (err) {
            console.log('读取文件错误',err)
        }
    )