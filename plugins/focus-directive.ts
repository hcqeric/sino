export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
      mounted (el) {
        el.focus()
      },
      getSSRProps (binding, vnode) {
        // 你可以在这里提供SSR专用道具
        return {}
      }
    })
  })