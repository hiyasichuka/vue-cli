import Vue from 'vue'
//import App from './App.vue'
import App from './Test.vue'

// お助けヘルプ。trueにした場合、デベロッパーツールで確認できる。
Vue.config.productionTip = false

// インポートしているApp.vueの中身。
console.log(App);

new Vue({
  render: h => h(App),
  // render: function(h){ return h(App)} でもOK
}).$mount('#app')
// appはpublic/index.htmlにマウントされている。