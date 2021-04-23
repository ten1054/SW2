<template>
    <div class="boy">
        <div class="twxt">请登录</div>
        <div class="foot">毕设:石灏</div>
    <div id="cpd">
        <div class="formlogin">
            <form action="" method="post" id="loginForm">
                <div class="pic"><i class="el-icon-s-grid"></i>
                </div>
                <div class="username"><span class="i1"><i class="el-icon-s-custom"></i></span> <input type ='text' id="uname" class="us" placeholder="Username" v-model="use"></div>
                <div class="password"><i class="el-icon-key"></i><input type="password" id="upwd" class="ps" placeholder="Password" v-model="pwd"></div>
                <div class="btn1"><button type="button" id="loginBtn" value="Login" @click="enterMain()">Login</button></div>
                <div class="btn2"><button type="button" id="loginBtn2" value="Signup"  @click="can()">SingUp</button></div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>

    export default {

        name: "login",
        data(){
            return{
                use:'',
                pwd:''
        };
        },
        mounted:function(){

        },
        methods:{
            enterMain() {
                this.$axios({
                    method:'post',
                    url:'http://127.0.0.1:4000/api/user/login',
                    data:{
                        user:this.use,
                        pow:this.pwd
                    }
                }).then(res =>{
                    console.log(res.data);
                    switch(res.data){
                        case 0:
                            alert("登陆成功！");
                            this.$router.push({path:'/home'});
                            break;
                        case -1:
                            alert("用户名错误");
                            break;
                        case 1:
                            alert("密码错误！");
                            break;
                    }
                    console.log(res)
                })
                /*//一个页面发送多个请求(并发请求)，只有当两个请求都完成后才会继续then
                this.$axios.all([this.$axios({
                        url:'http'
                }
                ),this.$axios({
                    url:'http'
                })]).then(res =>{
                    console.log(res)
                })*/
            },
        }
    }
</script>

<style scoped lang="scss">
    .boy:hover{
        box-shadow:0px 100vh 20px 10px rgba(52, 52, 52, .5) inset;
    }
.boy{
    font-family: 'FZYaoti';
    background: url('../assets/bg-1.jpg') no-repeat center center fixed;
    width:100vw;
    height:100vh;
    display: flex;
    justify-content:center;
    position: relative;
    box-shadow:0px 5px 20px 10px  #706c6d inset;
    transition: 2s;
    .twxt{
        position: absolute;
        top:10vh;
        font-size: 5vw;
    }
}

    #cpd{
        position: absolute;
        top:30%;
        width:30vw;
        height:55vh;
        background-color: #46a6ff;
        opacity: 0.8;
        box-shadow: 0px 5px 20px 10px #706c6d;
    }
    #cpd:hover{
        box-shadow: 0px 5px 30px 15px #0f81cd;
    }
    .formlogin{
        width: 30vw;
        height:58vh;
        display: flex;
        background-image: linear-gradient(to bottom, #ffffff, #f5f5f5, #ececec, #e2e2e2, #d9d9d9, #cfcfcf, #c6c6c6, #bdbcbc, #b1b0b0, #a5a5a5, #999999, #8e8e8e);
        .pic{
            font-size: 7vw;
            color: #57bcff;
            text-align: center;
            line-height: 20vh;
            flex-wrap: wrap;
            width:30vw;
            height:20vh;
        }
        .username{
            flex-wrap: wrap;
            font-size: 3vh;
            width:26vw;
            height:10vh;
            margin-left: 2vw;
            text-align: center;
            line-height: 10vh;
            .us{
                font-size: 3vh;
                opacity: 0.9;
                border:none;
                color: #57bcff;
                border-radius: 4px;
                border-bottom: 1px solid #77b4ff;
                outline: 0;
                box-shadow: 5px 3px 1px 1px #3c5470;
                margin-left: 10px;
                padding-left: 12px;
                width:20vw;
                height:6vh;
            }
            .us:hover{
                border:2px solid #007aff;
            }
        }
        .password{
            flex-wrap: wrap;
            font-size: 3vh;
            width:26vw;
            height:10vh;
            margin-left: 2vw;
            text-align: center;
            line-height: 10vh;
            .ps{
                font-size: 3vh;
                opacity: 0.9;
                border:none;
                color: #57bcff;
                border-radius: 4px;
                border-bottom: 1px solid #77b4ff;
                outline: 0;
                box-shadow: 5px 3px 1px 1px #3c5470;
                margin-left: 10px;
                padding-left: 12px;
                width:20vw;
                height:6vh;
            }
            .ps:hover{
                border:2px solid #007aff;
                box-shadow: 5px 3px 1px 1px #167ebb;
            }
        }
        .btn1{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width:30vw;
            height:7vh;
            margin-bottom: 1vh;
            #loginBtn{
                border: none;
                margin-left: 2vw;
                background-color: #005dff;
                width:20vw;
                height:7vh;
                transition: 0.5s;
                color: #f9fdff;
            }
            #loginBtn:hover{
                background-color: #fffbff;
                letter-spacing: 5px;
                color:#007aff;
                border:1px solid #007aff;
            }
        }
        .btn2{
            flex-wrap: wrap;
            width:30vw;
            height:7vh;
            #loginBtn2{
                margin-left: 2vw;
                border: none;
                background-color: #44bcff;
                width:20vw;
                height:7vh;
                transition: 0.5s;
                color: #f9fdff;
            }
            #loginBtn2:hover{
                background-color: #fffbff;
                letter-spacing: 5px;
                color:#007aff;
                border:1px solid #007aff;
            }
        }
    }
</style>