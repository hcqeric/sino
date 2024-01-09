<template>
    <div class="footer-box">
        <div class="footer-top">
            <div class="w-940 flex justify-between items-center h-full">
                <div class="footer-top-left">
                    <img src="https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/index/s_23.png" alt="">
                </div>
                <div class="footer-top-content flex">
                    <div class="btnv footer-wxbuy-box">
                        <img class="wxer" src="~/assets/images/wx_03.png" alt="">
                        华安微商城
                    </div>
                    <div class="btnv footer-wx-box">
                        <img class="wxer" src="~/assets/images/wx_03.png" alt="">
                    </div>
                </div>
                <div class="footer-top-right text-right text-white">
                    <p>全国统一服务及维权热线：95556</p>
                    <p>全国车险投保热线：10100111</p>
                </div>
            </div>
        </div>
        <div class="footer-wrap w-1200">
            <div class="footer-list flex">
                <div class="footer-dls flex-1">
                    <div class="dls-dt text-base font-bold text-black h-8">投保指南</div>
                    <div class="dls-dd"><a class="text-sm" href="https://www.sinosafe.com.cn/shop/member/registration/">新用户注册</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/khfw/tbfw">网上投保流程</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/usercenter/member/insertValue">纸质保单配送</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/eb-web/vue/e-policy-query-sys/#/">电子保单下载</a></div>
                </div>
                <div class="footer-dls flex-1">
                    <div class="dls-dt text-base font-bold text-black h-8">客户服务</div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/member/registration/">保单查询</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/khfw/tbfw">服务网点查询</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/usercenter/member/insertValue">保险条款查询</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/eb-web/vue/e-policy-query-sys/#/">消费者权益保护专栏</a></div>
                </div>
                <div class="footer-dls flex-1">
                    <div class="dls-dt text-base font-bold text-black h-8">理赔指南</div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/member/registration/">理赔进度查询</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/khfw/tbfw">理赔流程介绍</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/usercenter/member/insertValue">理赔资料清单</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/eb-web/vue/e-policy-query-sys/#/">理赔服务承诺</a></div>
                </div>
                <div class="footer-dls flex-1">
                    <div class="dls-dt text-base font-bold text-black h-8">友情链接</div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/member/registration/">国家金融监督管理总局</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/khfw/tbfw">中国保险行业协会</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/usercenter/member/insertValue">中国保险学会</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/eb-web/vue/e-policy-query-sys/#/">深圳保险学会</a></div>
                </div>
                <div class="footer-dls flex-1">
                    <div class="dls-dt text-base font-bold text-black h-8"></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/member/registration/">中国银行保险报</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/shop/khfw/tbfw">金融时报</a></div>
                    <div class="dls-dd"><a href="https://www.sinosafe.com.cn/usercenter/member/insertValue">华民慈善基金会</a></div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.footer-box{
    width: 100%;
    height: auto;
    .footer-top{
        width: 100%;
        height: 100px;
        background: url(~/assets/images/s_26.png) no-repeat center top;
        .wxer{
            position: absolute;
            bottom: 42px;
            width: 132px;
            left: 50%;
            margin-left: -66px;
            display: none;
        }
        .btnv:hover .wxer {
            display: block;
        }
        .footer-top-left{
            width: 430px;
            height: 100px;
            position: relative;
            img{
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        .footer-wxbuy-box{
            position: relative;
            z-index: 1;
            zoom: 1;
            display: inline-block;
            color: #fff;
            border: 1px solid #fff;
            height: 32px;
            line-height: 32px;
            padding: 0px 20px;
            border-radius: 16px;
            font-size: 16px;
            vertical-align: middle;
            margin: 0 15px;
            cursor: pointer;
            &:hover{
                background: #fff;
                color: #d0264f;
            }
        }
        .footer-wx-box{
            position: relative;
            width: 36px;
            height: 36px;
            background: url(~/assets/images/wx1_07.png) no-repeat center top;
            &:hover{
                background: url(~/assets/images/wx_07.png) no-repeat center top;
            }
        }
        .footer-top-right{
            font-size: 15px;
        }
    }
    .footer-wrap{
        .footer-list{
            padding: 50px 85px 40px;
            zoom: 1;
            overflow: hidden;
            .dls-dd{
                a{
                    color: #999;
                    font-size: 14px;
                    line-height: 28px;
                    text-decoration: none;
                    outline: none;
                }
            }
        }
    } 
}

</style>