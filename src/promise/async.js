setTimeout(function () {
    console.log('你好吗')
},5000)
setTimeout(function () {
    console.log('你好吗2')
},2000)
async function async1() {
    console.log('async1 stanrt');
    await  async2();
    /*await setTimeout(function () {
        async2();
    },1000)*/
    console.log('async1 end')
}
async function async2() {
    console.log('async2 start')
}
console.log('不好')
async1();