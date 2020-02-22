import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueScrollTo from 'vue-scrollto'
import VueParticles from 'vue-particles'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueParticles)

Vue.use(Vuetify)

Vue.use(VueScrollTo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created() {
    AOS.init()
  },
  el: '#app',
  render: h => h(App)
})
