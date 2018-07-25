
import hello from '@component/hotTopic/'

var app = new Vue({
  el: '#app',
  components: { hello },
  render: (h) => h(hello)
})