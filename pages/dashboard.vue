
    
    <template>
      <h1>Dashboard Page</h1>
    </template>
    <script setup>
        definePageMeta({
          middleware: 'auth'
        })

        const title = ref('网站标题')
        useSeoMeta({
            title,
            description: () => `description: ${title.value}`
        })
    </script>