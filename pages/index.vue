<template>
  <Title>{{appConfig.title}}</Title>
  <div class="index-page-w">
    <div class="page-banner">
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="/imgs/slide1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/slide2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/slide3.png" />
        </swiper-slide>    
      </swiper>
    </div>
    <div class="mall-hot w-1200">
      <div class="h-8 text-center py-12 text-2xl text-brown-600">在线商城-热门产品</div>
      <div class="hot-goods-list flex justify-between">
        <div class="goods-left">
          <div class="left-goods goods-item">
            <div class="goods-name">车辆保险</div>
            <div class="des">
              <div class="desc">一爱一责任   一保一华安</div>
              <div class="desc-brief"></div>
            </div>
            <div class="detail">查看更多>></div>
            <img class="bg-img" src="https://www.sinosafe.com.cn/upload/cms/shop/201804/26105601vmjx.png" alt="">
          </div>
        </div>
        <div class="goods-right flex justify-between flex-wrap">
          <div class="goods-item">
            <div class="goods-name">满堂福家庭财产保险</div>
            <div class="des">
              <div class="desc">| 财产责任 |</div>
              <div class="desc-brief">小小投入，托起一个家</div>
            </div>
            <div class="detail">查看更多>></div>
            <img class="bg-img" src="https://www.sinosafe.com.cn/upload/cms/shop/202207/07155658jwoa.png" alt="">
          </div>
          <div class="goods-item">
            <div class="goods-name">居民燃气综合保险</div>
            <div class="des">
              <div class="desc">| 财产责任 |</div>
              <div class="desc-brief">安全防范于未“燃”</div>
            </div>
            <div class="detail">查看更多>></div>
            <img class="bg-img" src="https://www.sinosafe.com.cn/upload/cms/shop/202207/07172620m82t.png" alt="">
          </div>
          <div class="goods-item">
            <div class="goods-name">万贯家财家庭财产险</div>
            <div class="des">
              <div class="desc">| 财产责任 |</div>
              <div class="desc-brief">房好家在，10元团团圆圆</div>
            </div>
            <div class="detail">查看更多>></div>
            <img class="bg-img" src="https://www.sinosafe.com.cn/upload/cms/shop/202207/07162521bseo.png" alt="">
          </div>
          <div class="goods-item">
            <div class="goods-name">个人资金账户险</div>
            <div class="des">
              <div class="desc">| 财产责任 |</div>
              <div class="desc-brief">黑手无处不在<br/>13元尽享“资金”保险箱</div>
            </div>
            <div class="detail">查看更多>></div>
            <img class="bg-img" src="https://www.sinosafe.com.cn/upload/cms/shop/201804/26105952x4ml.png" alt="">
          </div>
        </div>
       
      </div>
    </div>
    <div class="service-wrap">
      <div class=" w-940">
        <div class="h-8 text-center py-12 text-2xl text-white">贴心服务</div>
        <div class="service-list flex justify-between flex-wrap">
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="~/assets/images/sv_08.png" alt="">
            </div>
            <div class="service-name">违章查询</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_10.png" alt="">
            </div>
            <div class="service-name">自助报案查勘</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_03.png" alt="">
            </div>
            <div class="service-name">车辆报价</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_05.png" alt="">
            </div>
            <div class="service-name">保单查询</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_17.png" alt="">
            </div>
            <div class="service-name">理赔查询</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_19.png" alt="">
            </div>
            <div class="service-name">激活卡投保</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_21.png" alt="">
            </div>
            <div class="service-name">学贷自助服务</div>
          </div>
          <div class="service-item flex flex-col justify-center items-center">
            <div class="img-w">
              <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/sv_23.png" alt="">
            </div>
            <div class="service-name">更多服务</div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner-wrap bg-white">
      <div class="h-8 text-center py-12 text-2xl text-brown-600">合作伙伴</div>
      <div class="partner-list w-1200 flex justify-around">
        <div class="partner-item">
          <img src="https://www.sinosafe.com.cn/upload/cms/shop/201510/29114357q3q1.jpg" alt="">
        </div>
        <div class="partner-item">
          <img src="https://www.sinosafe.com.cn/upload/cms/shop/201510/28111842htcu.jpg" alt="">
        </div>
        <div class="partner-item">
          <img src="https://www.sinosafe.com.cn/upload/cms/shop/201510/2911101002m4.jpg" alt="">
        </div>
        <div class="partner-item">
          <img src="https://www.sinosafe.com.cn/upload/cms/shop/201510/29111325iwje.jpg" alt="">
        </div>
        <div class="partner-item">
          <img src="https://www.sinosafe.com.cn/upload/cms/shop/201510/2911083031xa.jpg" alt="">
        </div>
        <div class="partner-item">
          <img src="https://www.sinosafe.com.cn/upload/cms/shop/202209/05092519iti1.png" alt="">
        </div>
      </div>
      <a class="more-partner text-center" href="https://www.sinosafe.com.cn/shop/about/hzgy/">更多合作伙伴>></a>
    </div>
  </div>
  <a-back-top />
  
</template>

<script setup>
    const appConfig = useAppConfig()
    import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

    const modules = [Autoplay, EffectFade, Navigation, Pagination];
    console.log(appConfig.title)
</script>

<style lang="less" scoped>
.index-page-w{
  .page-banner{
    height: 500px;
  }
  .hot-goods-list{
    height: 420px;
    padding-bottom: 28px;
    .goods-right{
      margin-left: 14px;
      .goods-item{
        margin-bottom: 14px;
      }
    }
    .goods-item{
      position: relative;
      padding: 35px 10px 0px 50px;
      width: 320px;
      height: 165px;
      display: block;
      background-color: #fff;
      box-shadow: 0px 4px 10px #ddd;
      border-radius: 8px;
      z-index: 1;
      zoom: 1;
      .detail{
        font-size: 14px;
        color: #ff5079;
        position: absolute;
        left: 50px;
        bottom: 20px;
      }
      .goods-name{
        font-size: 22px;
        color: #444;
      }
      .des {
        margin: 15px 0 20px;
        .desc-brief{
          color: #919191;
          font-size: 12px;
        }
      }
      &:hover{
        box-shadow: 0px 5px 15px #999;
      }
      &.left-goods{
        height: 379px;
        .detail{
          position: relative;
          left: 0;
          top: 0;
        }
       
      }
      .bg-img{
        width: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
      }
    }
  }
  .service-wrap{
    height: 500px;
    background: url(https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/s_16.png) no-repeat center top;
    text-align: center;
    .service-item{
      width: 235px;
      flex-shrink: 0;
      margin-bottom: 35px;
      .service-name{
        margin-top: 15px;
        color: #fff;
      }
      &:hover{
        .img-w{
          border-radius: 50%;
          background-color: #f26a69;
        }
        .service-name{
          color: #ef3e50;
        }
      }
    }
  }
  .partner-wrap{
    padding-bottom: 140px;
    .more-partner{
      color: #ff5079;
      font-size: 14px;
      &:hover{
        color: #000;
      }
    }
    .partner-list{
      padding-bottom: 50px;
    }
    .partner-item{
      width: 144px;
    }
  }
}
</style>