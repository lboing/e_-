import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
Vue.prototype.$qingqiu=Axios;
import Vuex from 'vuex'
Vue.config.productionTip = false;
Axios.defaults.withCredentials=true;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
