
const isAuthenticated = () => {
    return Math.random() > 0.5
}
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() 是验证用户是否通过身份验证的示例方法
    if (isAuthenticated() === false) {
        return navigateTo('/login')
    }
})