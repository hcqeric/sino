<template>
   <h2>About Page</h2>
   <img src="~/assets/images/wx_03.png" />
</template>
<script setup lang="ts">
    useHead({
      title: 'My About',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>