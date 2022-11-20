import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { RadioGroup, Radio, Form, Field, CellGroup, DatetimePicker, Popup, NavBar, IndexBar, IndexAnchor, Cell, PullRefresh, Checkbox, CheckboxGroup } from 'vant'
import 'reset-css'
import 'normalize.css'
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(NavBar)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
Vue.use(PullRefresh)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
