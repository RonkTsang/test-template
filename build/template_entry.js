import cmp from '@pages/<% entry %>'

new Vue({
  el: '#app',
  components: { cmp },
  render: (h) => h(cmp)
})