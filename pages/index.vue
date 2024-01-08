<template>
  <Title>{{appConfig.title}}</Title>
  <div>
   <h2 class="pageName">Index Page</h2>
   <img src="/imgs/logo.jpg" />
  </div>
</template>

<script setup>
    const appConfig = useAppConfig()

    console.log(appConfig.title)
</script>

<style lang="less" scoped>

</style>