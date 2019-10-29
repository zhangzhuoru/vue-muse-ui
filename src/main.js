import Vue from 'vue'
import App from './App.vue'
import router from './router'
// To import the whole library
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import "@/assets/styles/reset.css";
Vue.use(VueMaterial)

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.config.productionTip = false

import theme from 'muse-ui/lib/theme';
theme.add('teal', {
  primary: '#2196f3',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#bdbdbd',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'gba(0, 0, 0, 0.54)',
    alternate: '#fff',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    chip: '#e0e0e0',
    default: '#fafafa'
  }
}, 'light');

theme.use('teal');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render (h) {
//     return h('mu-button', {}, 'Hello World');
//   }
// });