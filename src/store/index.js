import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store =  new Vuex.Store({
    state:{
        user:{
            name:'dc',
            isLogin:false,
        }
    },
    mutations:{
        loginchange(state,p){
            state.user.isLogin = p
        }
    }
})
export default  store;
