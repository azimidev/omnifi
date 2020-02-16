import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBHTFWKKWvYfxs9rP0fEgLlPo8K2V1MsoM',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'

    // v: '3.26',
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
