/* import Vue from 'vue' */
import App from './App'
import router from './router'
import store from './store';
Vue.config.productionTip = false
import '@/assets/js/rem.js'
import '@/assets/css/flex.css'
import '@/assets/css/minireset.css'
import MessageBox from '@/components/messageBox';
import Shade from '@/components/shade';
Vue.use(Shade);
Vue.use(MessageBox);
import {
  popup,
  Button,
  NavBar,
  Icon
} from 'vant';
Vue.use(popup)
  .use(Button)
  .use(NavBar)
  .use(Icon);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
