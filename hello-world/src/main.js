import Vue from 'vue'
//import App from './App.vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber'
import vuetify from './plugins/vuetify'
// お助けヘルプ。trueにした場合、デベロッパーツールで確認できる。
Vue.config.productionTip = false
// component グローバル登録
Vue.component('LikeNumber', LikeNumber)

// インポートしているApp.vueの中身。
console.log(App);

new Vue({
  vuetify,

  // render: function(h){ return h(App)} でもOK
  render: h => h(App)
}).$mount('#app')
// appはpublic/index.htmlにマウントされている。