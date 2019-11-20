import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'babel-polyfill'
import VueLazyload from 'vue-lazyload'

// element-ui
import 'element-ui/lib/theme-chalk/base.css';
import { Button, Select, Message, Row, Col, Input, Loading, MessageBox } from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Loading.directive);

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
import '@/assets/style/element-variables.scss'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

import '@/assets/style/style.scss'


Vue.use(VueLazyload, {
  loading: require('@/assets/images/1.png'),
  error: 'http://y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000',
})

Vue.config.productionTip = false


// 打印变量
Vue.prototype.print = (obj,type) => {
  type = type || "log";
  const log = JSON.parse(JSON.stringify(obj));
  console[type](log)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
