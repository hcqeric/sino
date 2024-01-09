<template>
  <div>
    <!-- <AppAlert>
      这是一个自动导入的组件。
    </AppAlert> -->
    <!-- <NuxtLink class="nav" to="/">首页</NuxtLink>
    <NuxtLink class="nav" to="/about">关于</NuxtLink>
    <NuxtLink class="nav" to="/posts/1">Post 1</NuxtLink> -->
    <NuxtLayout >
      <NuxtLoadingIndicator /> <!-- here -->
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtPage /> -->
  </div>
</template>

<script>
  import '~/assets/css/index.less';
</script>

<style lang="less" scoped>

@import "~/assets/css/common.less";

.nav{
  padding: 10px;
  color: @secondary;
}
</style>
