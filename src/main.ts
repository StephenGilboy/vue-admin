import Vue from 'vue';
import 'bootstrap/scss/bootstrap.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import {ActionTypes} from "@/store/types";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch(ActionTypes.LOAD_TODOS);
  },
}).$mount('#app');
