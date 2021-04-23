import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import axios from 'axios';
Vue.use(ElementUI);
Vue.prototype.$axios = axios
/*//axios的全局配置
this.$axios.defaults.baseURL=''
this.$axios.defaults.timeout='5000'*/
new Vue({
  render: h => h(App),
  router,
  store:store,
}).$mount('#app')
