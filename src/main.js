// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'

// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import store from './store'
import Vuetify from 'vuetify'
// import VueSession from 'vue-session'
// import vueEasyPrint from "vue-easy-print";
import 'vuetify/dist/vuetify.min.css'
// import VueGAPI from "vue-gapi";

Vue.use(Vuetify,{
  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4',
  theme: {
    primary: '#0277BD',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    main: '#1e272e',
  }
},
);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
