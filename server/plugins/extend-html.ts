export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => { 
        // 这将是 html 模板的对象表示。
        // console.log(html)
        html.head.push(`<meta name="description" content="My custom description" />`)
    })
    // 您还可以在此处拦截响应。
    // nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})