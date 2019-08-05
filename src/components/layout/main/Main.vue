<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Main",
    mounted() {
      $(".main").height($('body').height() - $(".sidebar-top").height());
    }
  };
</script>
<style lang="less" >
  @import "_Main";
</style>
