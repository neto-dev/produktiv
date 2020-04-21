import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// Importamos e indicamos a vue implemente libreria UI Kit de interfaz Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// Configuración de Firebase

import firebase from 'firebase' // Importamos la libreria firebase

var firebaseConfig = {
  apiKey: process.env.VUE_apiKey,
  authDomain: process.env.VUE_authDomain,
  databaseURL: process.env.VUE_databaseURL,
  projectId: process.env.VUE_projectId,
  storageBucket: process.env.VUE_storageBucket,
  messagingSenderId: process.env.VUE_messagingSenderId,
  appId: process.env.VUE_appId,
  measurementId: process.env.VUE_measurementId,
};

firebase.initializeApp(config)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
