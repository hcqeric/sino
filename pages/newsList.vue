<template>
    <div class="news-list-wrap">
        <div class="banner"></div>
        <div class="news-wrap">
            <div class="list-wrap w-1200">
                <div class="news-menu">
                    <span class="menu-item active">华安新闻</span>
                </div>
                <div class="news-content-wrap">
                    <div class="content-list-w" v-if="newsListData.length">
                        <div v-for="(item, index) in newsListData" :key="item.nid">
                            <NuxtLink :to="`/news/${item.nid}`">
                                <div class="content-item">
                                    <span class="date">{{item && item.newsDate || ''}}</span>
                                    <span class="title">{{item && item.newsTitle}}</span>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <a-pagination v-model:current="current" :total="500" @change="fetchNewsList" />
                </div>
            </div>
           
        </div>
    </div>
</template>
<script setup lang="ts">
    const current = ref(6);
    let newsListData = ref([])
    const fetchNewsList = async () => {
        const { data:listData , pending, error, refresh } = await useFetch('http://yapi.sinosafe.com.cn/mock/1367/news/list')
        newsListData.value = []
        newsListData.value.push(...(listData.value))
    }
    fetchNewsList()
    

    



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
                height: 439px;
                overflow: hidden;
                .content-item{
                    height: 54px;
                    border-bottom: #333 dashed 1px;
                    line-height: 54px;
                    font-size: 16px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    cursor: pointer;
                    color: #333;
                    &:hover{
                        background: #e9e9e9;
                    }
                    .date{
                        padding-right: 20px;
                        color: #666;
                    }
                }
            }
        }
    }
</style>