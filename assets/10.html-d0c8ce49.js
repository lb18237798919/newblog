const e=JSON.parse('{"key":"v-596455e9","path":"/back_end/nodeJs/10.html","title":"10 【Express基本使用】","lang":"zh-CN","frontmatter":{"description":"10 【Express基本使用】 https://www.expressjs.com.cn/ 基于 Node.js 平台，快速、开放、极简的 web 开发框架。 1.Express的安装方式 Express的安装可直接使用npm包管理器上的项目，在安装npm之前可先安装淘宝镜像： npm install -g cnpm --registry=https://registry.npmmirror.com/","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/nodeJs/10.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"10 【Express基本使用】"}],["meta",{"property":"og:description","content":"10 【Express基本使用】 https://www.expressjs.com.cn/ 基于 Node.js 平台，快速、开放、极简的 web 开发框架。 1.Express的安装方式 Express的安装可直接使用npm包管理器上的项目，在安装npm之前可先安装淘宝镜像： npm install -g cnpm --registry=https://registry.npmmirror.com/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"dselegent"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 【Express基本使用】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.Express的安装方式","slug":"_1-express的安装方式","link":"#_1-express的安装方式","children":[]},{"level":2,"title":"2.运行原理","slug":"_2-运行原理","link":"#_2-运行原理","children":[]},{"level":2,"title":"3.Express 方法","slug":"_3-express-方法","link":"#_3-express-方法","children":[]},{"level":2,"title":"4.路径匹配","slug":"_4-路径匹配","link":"#_4-路径匹配","children":[{"level":3,"title":"4.1 字符串路径","slug":"_4-1-字符串路径","link":"#_4-1-字符串路径","children":[]},{"level":3,"title":"4.2 字符串模式路径","slug":"_4-2-字符串模式路径","link":"#_4-2-字符串模式路径","children":[]},{"level":3,"title":"4.3 正则表达式路径","slug":"_4-3-正则表达式路径","link":"#_4-3-正则表达式路径","children":[]}]},{"level":2,"title":"5.response对象","slug":"_5-response对象","link":"#_5-response对象","children":[]},{"level":2,"title":"6.路线处理程序","slug":"_6-路线处理程序","link":"#_6-路线处理程序","children":[]},{"level":2,"title":"7.中间件","slug":"_7-中间件","link":"#_7-中间件","children":[{"level":3,"title":"7.1 应用级中间件","slug":"_7-1-应用级中间件","link":"#_7-1-应用级中间件","children":[]},{"level":3,"title":"7.2 路由级中间件","slug":"_7-2-路由级中间件","link":"#_7-2-路由级中间件","children":[]},{"level":3,"title":"7.3 错误处理中间件","slug":"_7-3-错误处理中间件","link":"#_7-3-错误处理中间件","children":[]},{"level":3,"title":"7.4 内置的中间件","slug":"_7-4-内置的中间件","link":"#_7-4-内置的中间件","children":[]},{"level":3,"title":"7.5 第三方中间件","slug":"_7-5-第三方中间件","link":"#_7-5-第三方中间件","children":[]}]},{"level":2,"title":"8.获取参数","slug":"_8-获取参数","link":"#_8-获取参数","children":[{"level":3,"title":"8.1 req.query","slug":"_8-1-req-query","link":"#_8-1-req-query","children":[]},{"level":3,"title":"8.2 req.params","slug":"_8-2-req-params","link":"#_8-2-req-params","children":[]},{"level":3,"title":"8.3 req.body","slug":"_8-3-req-body","link":"#_8-3-req-body","children":[]}]},{"level":2,"title":"9.利用 Express 托管静态文件","slug":"_9-利用-express-托管静态文件","link":"#_9-利用-express-托管静态文件","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":14.19,"words":4256},"filePathRelative":"back_end/nodeJs/10.md","localizedDate":"2024年12月2日","excerpt":"<h1> 10 【Express基本使用】</h1>\\n<blockquote>\\n<p><a href=\\"https://www.expressjs.com.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.expressjs.com.cn/</a></p>\\n</blockquote>\\n<p>基于 Node.js 平台，快速、开放、极简的 web 开发框架。</p>\\n<h2> 1.Express的安装方式</h2>\\n<p>Express的安装可直接使用npm包管理器上的项目，在安装npm之前可先安装淘宝镜像：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> <span class=\\"token parameter variable\\">-g</span> cnpm <span class=\\"token parameter variable\\">--registry</span><span class=\\"token operator\\">=</span>https://registry.npmmirror.com/\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
