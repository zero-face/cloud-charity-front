import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import wybButton from '@/components/wyb-button/wyb-button.vue' // 引入
import uView from "uview-ui";
Vue.use(uView);
Vue.component('wyb-button', wybButton) // 全局注册，即所有.vue页面都可以不用声明直接使用
App.mpType = 'app'
Vue.config.productionTip = false
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif