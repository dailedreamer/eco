import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

import { BootstrapVue,BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/template/assets/sass/views/custom-tabs.scss";
import "../src/template/assets/sass/views/custom-cards.scss";
import VuePapaParse from 'vue-papa-parse'
import VueConfirmDialog from 'vue-confirm-dialog'
import ToggleButton from "vue-js-toggle-button";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.use(VuePapaParse)
Vue.use(VueConfirmDialog)
Vue.use(ToggleButton);


import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";
Vue.use(Multiselect);

import "./template/alpha.js";
import "./assets/icons.js";

/*TEMPORARY*/
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import axios from "axios";
axios.defaults.baseURL  = 'http://10.164.58.65/eco-cms-v2/server/public/api/';
// axios.defaults.baseURL  = 'http://10.164.58.93/eco-cms-v2/server/public/api/';
// axios.defaults.baseURL  = 'http://10.164.58.43/tms/server/public/api/';

const options = {
	// You can set your default options here
};

Vue.use(Toast, options);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
