import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faMapMarkerAlt, faPhoneAlt, faUserSecret, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faFacebookSquare, faInstagramSquare, faPinterestSquare, faTiktok,  faWhatsapp,  faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueRouter from 'vue-router';
import router from "./router";
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

library.add(faUserSecret)
library.add(faFacebookSquare)
library.add(faInstagramSquare)
library.add(faPinterestSquare)
library.add(faTiktok)
library.add(faEnvelope)
library.add(faPhoneAlt)
library.add(faMapMarkerAlt)
library.add(faFacebookSquare)
library.add(faFacebook)
library.add(faFacebookF)
library.add(faYoutubeSquare)
library.add(faWhatsapp)
library.add(faHome)
library.add(faMapMarkedAlt)



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCarousel);
Vue.use(VueScrollTo);


Vue.config.productionTip = false;


Vue.use(VueMoment, {
  moment,
}) 

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')