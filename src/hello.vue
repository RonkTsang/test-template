<template>
  <div>
    <div :style="style" @click="handler" class="viola">
      <text
        style="
          background-color: red
        "
        class="text"
      > 
      {{ text }}
      </text>
  
      <text class="text"> {{ dynamic ? '' : 'false' }} </text>

      <div>
        new div
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        style: {
          width: '500px',
          height: '500px',
          backgroundColor: 'red'
        },
        text: 'viola',
        dynamic: true
      }
    },
    methods: {
      handler () {
        this.text = 'Tom'
      }
    }
  }
</script>
<style scoped lang="scss">
  .viola {
    background-color: rgb(77, 69, 190);

    .p {
      color: blue;
    }

    &[type=oj] {
      background-color: red;
    }
  }

  .text {
    color: 'red'
  }
  
  .viola:hover {
    width: 300px;
  }

  @font-face {
    font-family: "Bitstream Vera Serif Bold";
    src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
  }
</style>
