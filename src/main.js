import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vueScrollto from 'vue-scrollto'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.use(vueScrollto)

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);
library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
      primary: "#000000",
      secondary: "#1AB20C",
      accent: "#1AB20C",
      error: "#FF5722",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
  }
})



new Vue({
  render: h => h(App),
}).$mount('#app')
