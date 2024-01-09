<template>
  <div class="header-nav-wrap">
    <div class="main-nav h-full w-1200 flex items-center">
      <img src="/imgs/logo.jpg" />
      <div class="main-nav-list flex items-center">
        <NuxtLink to="/"><span class="nav-item" :class="route.name === 'index' && 'current'">首页</span></NuxtLink>
        <a href="https://www.sinosafe.com.cn/%20/shop/mall/index/"><span class="nav-item">在线商城</span></a>
        <a href="https://www.sinosafe.com.cn/%20/shop/product/index/"><span class="nav-item">产品大全</span></a>
        <a href="https://www.sinosafe.com.cn/%20/shop/khfw/wdcx"><span class="nav-item">客户服务</span></a>
        <NuxtLink to="/newsList"><span class="nav-item" :class="route.name === 'newsList' && 'current'">华安新闻</span></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const route = useRoute();
  console.log(route)

</script>

<style lang="less" scoped>
 
  .header-nav-wrap{
    height: 84px;
    .main-nav{
      .main-nav-list{
        margin-left: 10px;
        .nav-item{
          margin: 0px 15px;
          color: #000;
          &.current{
            font-weight: bold;
          }
          &:hover{
            color: #ba2002;
          }
        }
      }
    }
  }
</style>