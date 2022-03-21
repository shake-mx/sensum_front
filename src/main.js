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
import { faEnvelope, faHome, faMapMarkerAlt, faPhoneAlt, faUserSecret, faMapMarkedAlt, faBed, faCubes, faBath, faCar, faPaw, faQuoteLeft, faQuoteRight, faExclamationCircle, faTimes, faUserCheck, faUser, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faAngellist, faFacebook, faFacebookF, faFacebookSquare, faInstagramSquare, faPagelines, faPinterestSquare, faTiktok,  faWhatsapp,  faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueRouter from 'vue-router';
import router from "./router";
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

library.add( faClipboardCheck,faUser,faUserCheck,faTimes,faEnvelope, faHome, faMapMarkerAlt, faPhoneAlt, faUserSecret, faMapMarkedAlt, faBed, faFacebook, faFacebookF, faFacebookSquare, faInstagramSquare, faPinterestSquare, faTiktok,  faWhatsapp,  faYoutubeSquare,faCubes,faBath,faCar,faPagelines,faPaw,faQuoteLeft,faQuoteRight,faExclamationCircle, faAngellist);




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