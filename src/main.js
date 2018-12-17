import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
      primary: "#000000",
      secondary: "#64DD17",
      accent: "#64DD17",
      error: "#FF5722",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
  }
})



new Vue({
  render: h => h(App),
}).$mount('#app')
