const e=JSON.parse('{"key":"v-3c0f9080","path":"/front_end/front_end_framework/vue2/15.html","title":"15 【Vue-Router】","lang":"zh-CN","frontmatter":{"description":"15 【Vue-Router】 1.相关理解 1.1 vue-router 的理解 vue的一个插件库，专门用来实现SPA应用 1.2 对SPA应用的理解 1.单页Web应用（single page web application，SPA） 2.整个应用只有一个完整的页面 3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新 4.数据需要通过ajax请求获取 1.3 路由的理解 1.什么是路由? 一个路由就是一组映射关系（key - value） key为路径，value可能是function或component","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/front_end/front_end_framework/vue2/15.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"15 【Vue-Router】"}],["meta",{"property":"og:description","content":"15 【Vue-Router】 1.相关理解 1.1 vue-router 的理解 vue的一个插件库，专门用来实现SPA应用 1.2 对SPA应用的理解 1.单页Web应用（single page web application，SPA） 2.整个应用只有一个完整的页面 3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新 4.数据需要通过ajax请求获取 1.3 路由的理解 1.什么是路由? 一个路由就是一组映射关系（key - value） key为路径，value可能是function或component"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"15 【Vue-Router】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.相关理解","slug":"_1-相关理解","link":"#_1-相关理解","children":[{"level":3,"title":"1.1 vue-router 的理解","slug":"_1-1-vue-router-的理解","link":"#_1-1-vue-router-的理解","children":[]},{"level":3,"title":"1.2 对SPA应用的理解","slug":"_1-2-对spa应用的理解","link":"#_1-2-对spa应用的理解","children":[]},{"level":3,"title":"1.3 路由的理解","slug":"_1-3-路由的理解","link":"#_1-3-路由的理解","children":[]}]},{"level":2,"title":"2.基本路由","slug":"_2-基本路由","link":"#_2-基本路由","children":[{"level":3,"title":"2.1基本使用","slug":"_2-1基本使用","link":"#_2-1基本使用","children":[]},{"level":3,"title":"2.2实际使用","slug":"_2-2实际使用","link":"#_2-2实际使用","children":[]}]},{"level":2,"title":"3.几个注意点","slug":"_3-几个注意点","link":"#_3-几个注意点","children":[]},{"level":2,"title":"4.多级路由","slug":"_4-多级路由","link":"#_4-多级路由","children":[]},{"level":2,"title":"5.vue中路由重定向redirect","slug":"_5-vue中路由重定向redirect","link":"#_5-vue中路由重定向redirect","children":[{"level":3,"title":"5.1 重定向到平级的路径上去","slug":"_5-1-重定向到平级的路径上去","link":"#_5-1-重定向到平级的路径上去","children":[]},{"level":3,"title":"5.2 重定向到子路由路径上面去","slug":"_5-2-重定向到子路由路径上面去","link":"#_5-2-重定向到子路由路径上面去","children":[]}]},{"level":2,"title":"6.命名路由","slug":"_6-命名路由","link":"#_6-命名路由","children":[]},{"level":2,"title":"7.路由的query参数","slug":"_7-路由的query参数","link":"#_7-路由的query参数","children":[]},{"level":2,"title":"8.路由的params参数","slug":"_8-路由的params参数","link":"#_8-路由的params参数","children":[{"level":3,"title":"8.1 基本使用","slug":"_8-1-基本使用","link":"#_8-1-基本使用","children":[]},{"level":3,"title":"8.2 params传参问题","slug":"_8-2-params传参问题","link":"#_8-2-params传参问题","children":[]}]},{"level":2,"title":"9.路由的props配置","slug":"_9-路由的props配置","link":"#_9-路由的props配置","children":[]},{"level":2,"title":"10.replace","slug":"_10-replace","link":"#_10-replace","children":[]},{"level":2,"title":"11.编程式路由导航","slug":"_11-编程式路由导航","link":"#_11-编程式路由导航","children":[{"level":3,"title":"11.1 基本使用","slug":"_11-1-基本使用","link":"#_11-1-基本使用","children":[]},{"level":3,"title":"11.2 多次执行相同的push问题","slug":"_11-2-多次执行相同的push问题","link":"#_11-2-多次执行相同的push问题","children":[]}]},{"level":2,"title":"12.缓存路由组件","slug":"_12-缓存路由组件","link":"#_12-缓存路由组件","children":[]},{"level":2,"title":"13.两个新的生命周期钩子","slug":"_13-两个新的生命周期钩子","link":"#_13-两个新的生命周期钩子","children":[]},{"level":2,"title":"14.路由守卫","slug":"_14-路由守卫","link":"#_14-路由守卫","children":[{"level":3,"title":"14.1 全局路由守卫","slug":"_14-1-全局路由守卫","link":"#_14-1-全局路由守卫","children":[]},{"level":3,"title":"14.2 独享路由守卫","slug":"_14-2-独享路由守卫","link":"#_14-2-独享路由守卫","children":[]},{"level":3,"title":"14.3 组件内路由守卫","slug":"_14-3-组件内路由守卫","link":"#_14-3-组件内路由守卫","children":[]},{"level":3,"title":"14.4 总结","slug":"_14-4-总结","link":"#_14-4-总结","children":[]}]},{"level":2,"title":"15.路由懒加载","slug":"_15-路由懒加载","link":"#_15-路由懒加载","children":[]},{"level":2,"title":"16.路由器的两种工作模式","slug":"_16-路由器的两种工作模式","link":"#_16-路由器的两种工作模式","children":[]},{"level":2,"title":"17.监听路由","slug":"_17-监听路由","link":"#_17-监听路由","children":[]},{"level":2,"title":"18.滚动行为","slug":"_18-滚动行为","link":"#_18-滚动行为","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":19.11,"words":5733},"filePathRelative":"front_end/front_end_framework/vue2/15.md","localizedDate":"2024年12月2日","excerpt":"<h1> 15 【Vue-Router】</h1>\\n<h2> 1.相关理解</h2>\\n<h3> 1.1 vue-router 的理解</h3>\\n<p><code>vue</code>的一个插件库，专门用来实现SPA应用</p>\\n<h3> 1.2 对SPA应用的理解</h3>\\n<p>1.单页Web应用（single page web application，SPA）\\n2.整个应用只有一个完整的页面\\n3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新\\n4.数据需要通过ajax请求获取</p>\\n<h3> 1.3 路由的理解</h3>\\n<p>1.什么是路由?\\n一个路由就是一组映射关系（key - value）\\n<code>key</code>为<strong>路径</strong>，<code>value</code>可能是<code>function</code>或<code>component</code></p>","autoDesc":true}');export{e as data};
