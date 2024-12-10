const e=JSON.parse('{"key":"v-4682afd4","path":"/front_end/front_end_framework/react/16.html","title":"16 【react-router 6】","lang":"zh-CN","frontmatter":{"description":"16 【react-router 6】 关于路由的知识已在11 【react-router 5】中进行说明，这里主要是对于5版本的api的变换说明 1.概述 官方文档：Home v6.4.1 | React RouterReact Router 以三个不同的包发布到 npm 上，它们分别为：","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/front_end/front_end_framework/react/16.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"16 【react-router 6】"}],["meta",{"property":"og:description","content":"16 【react-router 6】 关于路由的知识已在11 【react-router 5】中进行说明，这里主要是对于5版本的api的变换说明 1.概述 官方文档：Home v6.4.1 | React RouterReact Router 以三个不同的包发布到 npm 上，它们分别为："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16 【react-router 6】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2.BrowserRouter和HashRouter","slug":"_2-browserrouter和hashrouter","link":"#_2-browserrouter和hashrouter","children":[]},{"level":2,"title":"3.Routes 与 Route","slug":"_3-routes-与-route","link":"#_3-routes-与-route","children":[]},{"level":2,"title":"4.React Router 实操案例","slug":"_4-react-router-实操案例","link":"#_4-react-router-实操案例","children":[]},{"level":2,"title":"5.如何设置默认页路径(如 404 页)","slug":"_5-如何设置默认页路径-如-404-页","link":"#_5-如何设置默认页路径-如-404-页","children":[]},{"level":2,"title":"6.Link","slug":"_6-link","link":"#_6-link","children":[]},{"level":2,"title":"7.NavLink","slug":"_7-navlink","link":"#_7-navlink","children":[]},{"level":2,"title":"8.Navigate","slug":"_8-navigate","link":"#_8-navigate","children":[]},{"level":2,"title":"9.使用useRoutes注册路由","slug":"_9-使用useroutes注册路由","link":"#_9-使用useroutes注册路由","children":[{"level":3,"title":"9.1 使用useRoutes注册路由表-第一次改进","slug":"_9-1-使用useroutes注册路由表-第一次改进","link":"#_9-1-使用useroutes注册路由表-第一次改进","children":[]},{"level":3,"title":"9.2 第二次改进","slug":"_9-2-第二次改进","link":"#_9-2-第二次改进","children":[]}]},{"level":2,"title":"10.嵌套路由的实现","slug":"_10-嵌套路由的实现","link":"#_10-嵌套路由的实现","children":[]},{"level":2,"title":"11.路由传递参数","slug":"_11-路由传递参数","link":"#_11-路由传递参数","children":[{"level":3,"title":"11.1 传递 params 参数","slug":"_11-1-传递-params-参数","link":"#_11-1-传递-params-参数","children":[]},{"level":3,"title":"11.2 传递 search 参数","slug":"_11-2-传递-search-参数","link":"#_11-2-传递-search-参数","children":[]},{"level":3,"title":"11.3 传递 state 参数","slug":"_11-3-传递-state-参数","link":"#_11-3-传递-state-参数","children":[]}]},{"level":2,"title":"12.编程式路由导航","slug":"_12-编程式路由导航","link":"#_12-编程式路由导航","children":[{"level":3,"title":"12.1 编程式导航下，路由传递params参数","slug":"_12-1-编程式导航下-路由传递params参数","link":"#_12-1-编程式导航下-路由传递params参数","children":[]},{"level":3,"title":"12.2 编程式导航下，路由传递search参数","slug":"_12-2-编程式导航下-路由传递search参数","link":"#_12-2-编程式导航下-路由传递search参数","children":[]},{"level":3,"title":"12.3 编程式导航下，路由传递state参数","slug":"_12-3-编程式导航下-路由传递state参数","link":"#_12-3-编程式导航下-路由传递state参数","children":[]},{"level":3,"title":"12.4 withRouter的替换者","slug":"_12-4-withrouter的替换者","link":"#_12-4-withrouter的替换者","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":13.12,"words":3935},"filePathRelative":"front_end/front_end_framework/react/16.md","localizedDate":"2024年12月2日","excerpt":"<h1> 16 【react-router 6】</h1>\\n<blockquote>\\n<p>关于路由的知识已在<code>11 【react-router 5】</code>中进行说明，这里主要是对于5版本的api的变换说明</p>\\n</blockquote>\\n<h2> 1.概述</h2>\\n<p>官方文档：<a href=\\"https://reactrouter.com/en/main\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Home v6.4.1 | React Router</a>React Router 以三个不同的包发布到 npm 上，它们分别为：</p>","autoDesc":true}');export{e as data};