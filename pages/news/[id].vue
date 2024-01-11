<template>
    <div class="new-cont-wrap">
        <div class="news-detail w-1200">
            <div class="title-w">
                <h3>{{newsDetail.detailInfo.newsTitle}}</h3>
                <p>{{newsDetail.detailInfo.newsDate}}</p>
            </div>
            <div class="content-w">
                {{newsDetail.detailInfo.content}}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const route = useRoute()
    const { id } = route.params
    let newsDetail = reactive({
        detailInfo: {}
    })
    console.log(' new id  = ', id)
    const fetchNewsDetail = async () => {
        const { data:detailInfo , pending, error, refresh } = await useFetch(`http://yapi.sinosafe.com.cn/mock/1367/newsDetail/${id}`)
        newsDetail.detailInfo = detailInfo.value
        console.log('fetchNewsDetail = ', newsDetail)
    }
    fetchNewsDetail()
</script>
<style lang="less" scoped>
    .new-cont-wrap{
        background-color: #efefef;
        padding-top: 20px;
        .news-detail{
            background-color: #fff;
            padding: 36px 36px 136px;
            .title-w{
                padding: 10px;
                text-align: center;
                border-bottom: 1px dashed #333;
                p{
                    padding-top: 5px;
                }
            }
            .content-w{
                padding: 10px;
                text-indent: 2em;
                color: #666;
                line-height: 22px;
            }
        }
    }
</style>