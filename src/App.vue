<template>
  <div id="app">
    <div class="flex justify-center mt-3 mx-3"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scoped>
#app {
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
 max-width: 1350px;
  height: auto;
}

</style>
