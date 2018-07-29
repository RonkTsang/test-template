<template>
  <div class="container" @click="comeErr">
    <div class="body">
      <text> 💫 </text>
      <text class="title"> {{ hello }} </text>
    </div>
    <error-page :text="joke" v-if="err" />
  </div>
  
</template>

<script>

  import errorPage from '@component/Error/errorPage.vue'

  export default {
    components: {
      errorPage,
    },
    data() {
      return {
        hello: 'Hello Viola',
        err: false,
        joke: "OH MY GOD 😩 "
      }
    },
    mounted () {
      setTimeout(() => {
        this.err = true
      }, 2000)
    },
    methods: {
      comeErr () {
        this.hello = "A Joke ! Welcome to Viola ~ "
        this.err = false
      }
    }
  }

</script>

<style lang="scss" scoped>

  @import "@scss/_function";

  $backgroundColor: (
    body: #ffffff
  );

  $colors: (
    title: #414141
  );

  @function bgc($color){
    @return get($backgroundColor, $color); 
  }

  @function color($color){
    @return get($colors, $color); 
  }

  .body {
    background-color: bgc(body);
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: color(title);
    margin-top: 10dp;
    font-size: 30dp;
  }

</style>