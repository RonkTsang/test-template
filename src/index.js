
import hello from './hello.vue'

var app = new Vue({
  el: '#app',
  components: { hello },
  render: (h) => h(hello)
})