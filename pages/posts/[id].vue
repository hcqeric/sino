<template>
    <div>
        post : {{ id }}

      
            <h1 class="text-3xl font-bold underline">
                Hello tailwind!
            </h1>
            <input placeholder="sdfasdfasfd" />
    </div>
</template>
<script setup>
    definePageMeta({
        validate: async (route) => {
            // 检查id是否由数字组成
            return /^\d+$/.test(route.params.id)
        }
    })
    const route = useRoute()
    let {id} = route.params
    console.log(route.params.id)
</script>
<style lang="less" scoped>
   
</style>