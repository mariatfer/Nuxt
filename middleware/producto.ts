export default defineNuxtRouteMiddleware((to) => {
    const productosPath = '/productos'
    if (to.path === productosPath) {
        return navigateTo('/')
    }
})