<template>
    <div class="news-list-wrap">
        <div class="banner"></div>
        <div class="news-wrap">
            <div class="list-wrap w-1200">
                <div class="news-menu">
                    <span class="menu-item active">华安新闻</span>
                </div>
                <div class="news-content-wrap">
                    {{newsListData}}
                    <div v-for="(item, index) in newsListData" :key="index">
                        {{item}}
                    </div>
                    <div class="content-list-w">
                        <div class="content-item">
                            <span class="date">2023-07-08</span>
                            <span class="title">7.8全国保险公众宣传日，华安保险为奋斗者加油</span>
                        </div>
                    </div>
                    <a-pagination v-model:current="current" :total="500" />
                </div>
            </div>
           
        </div>
    </div>
</template>
<script setup lang="ts">
    const current = ref(6);
    const fetchNewsList = async () => {
        const { data: newsListData, pending, error, refresh } = await useFetch('http://yapi.sinosafe.com.cn/mock/1367/news/list')
       
    }
    onMounted(() => {
        fetchNewsList()
    })

    



</script>
<style lang="less" scoped>
    .banner{
        height: 300px;
        background: url(https://s.sinosafe.com.cn/iplatform/tplresource/cms/www/shop/images/subpage/yetop_02.jpg) no-repeat center;
    }
    .news-wrap{
        background-color: #efefef;
        padding-top: 20px;
        .news-menu{
            background: #e2e2e2;
            .menu-item{
                height: 58px;
                display: inline-block;
                width: 117px;
                line-height: 58px;
                text-align: center;
                &.active{
                    border-top: 6px solid #ba2002;
                    background-color: #fff;
                }
            }
        }
        .news-content-wrap{
            background-color: #fff;
            padding: 36px 36px 136px;
            .content-list-w{
                height: 440px;
                .content-item{
                    height: 54px;
                    border-bottom: dashed 1px;
                    line-height: 54px;
                    font-size: 16px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    .date{
                        padding-right: 20px;
                    }
                }
            }
        }
    }
</style>