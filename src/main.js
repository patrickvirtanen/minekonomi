import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

// import { MdButton, MdIcon, MdInput, MdField } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(MdButton)
// Vue.use(MdIcon)
// Vue.use(MdInput)
// Vue.use(MdField)


new Vue({
  render: h => h(App),
}).$mount('#app')
