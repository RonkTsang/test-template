<template>
  <div class="error-page">

    <!-- error logo -->
    <image
      resize="cover"
      src="http://sqimg.qq.com/qq_product_operations/kan/images/error_7_5.png"
      class="error-logo"/>

    <!-- error wording -->
    <text
      class="error-wording">
      {{ text }}
    </text>

  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: '网络异常，稍后再试_(:3」∠)_'
    }
  }
}

</script>

<style scoped>
.error-page {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-logo {
  width: 100dp;
  height: 100dp;
}
.error-wording {
  margin-top: 20dp;
  color: #BBB;
  font-size: 16dp;
  text-align: center;
}
</style>
