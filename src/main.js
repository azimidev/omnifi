import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    /*
     * Usually I put this Google API key in env variables
     * But this time I didn't because you won't have access to
     * .env file in version control system like GitHub
     */
    key: 'AIzaSyBHTFWKKWvYfxs9rP0fEgLlPo8K2V1MsoM',
    libraries: 'places',
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
