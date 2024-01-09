// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ],
  antd:{
    // Options
  },
  runtimeConfig: {
    // 仅在服务器端可用的私钥
    apiSecret: '123',
    // public 中的密钥也暴露在客户端
    public: {
      apiBase: '/api'
    }
  },
  css:['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  vite: {
    server: {
      proxy: {
        '^/mock': {
          target: 'http://yapi.sinosafe.com.cn'
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@use "@/assets/styles/common.less" as *;'
        }
      }
    }
  }
})
