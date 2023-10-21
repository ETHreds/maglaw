import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import '@/assets/styles.css'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;



createApp(App).use(store).use(router).mount('#app')
