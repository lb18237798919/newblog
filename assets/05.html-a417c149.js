const e=JSON.parse('{"key":"v-2d0655c3","path":"/back_end/nodeJs/05.html","title":"05 【nodejs内置模块（上）】","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.nodejs 的官方API文档","slug":"_1-nodejs-的官方api文档","link":"#_1-nodejs-的官方api文档","children":[]},{"level":2,"title":"2.nodejs 中模块的分类","slug":"_2-nodejs-中模块的分类","link":"#_2-nodejs-中模块的分类","children":[{"level":3,"title":"2.1 内置模块","slug":"_2-1-内置模块","link":"#_2-1-内置模块","children":[]},{"level":3,"title":"2.2 require 加载第三方包的机制","slug":"_2-2-require-加载第三方包的机制","link":"#_2-2-require-加载第三方包的机制","children":[]},{"level":3,"title":"2.3 自定义模块（module）","slug":"_2-3-自定义模块-module","link":"#_2-3-自定义模块-module","children":[]}]},{"level":2,"title":"3.网络服务 http","slug":"_3-网络服务-http","link":"#_3-网络服务-http","children":[{"level":3,"title":"3.1 http模块概览","slug":"_3-1-http模块概览","link":"#_3-1-http模块概览","children":[]},{"level":3,"title":"3.2 一个简单的例子","slug":"_3-2-一个简单的例子","link":"#_3-2-一个简单的例子","children":[]},{"level":3,"title":"3.3 例子解释","slug":"_3-3-例子解释","link":"#_3-3-例子解释","children":[]},{"level":3,"title":"3.4 关于http.IncomingMessage、http.ServerResponse","slug":"_3-4-关于http-incomingmessage、http-serverresponse","link":"#_3-4-关于http-incomingmessage、http-serverresponse","children":[]}]},{"level":2,"title":"4.网络服务 http res","slug":"_4-网络服务-http-res","link":"#_4-网络服务-http-res","children":[{"level":3,"title":"4.1 概览","slug":"_4-1-概览","link":"#_4-1-概览","children":[]},{"level":3,"title":"4.2 例子","slug":"_4-2-例子","link":"#_4-2-例子","children":[]},{"level":3,"title":"4.3 设置状态代码、状态描述信息","slug":"_4-3-设置状态代码、状态描述信息","link":"#_4-3-设置状态代码、状态描述信息","children":[]},{"level":3,"title":"4.4 设置响应头部","slug":"_4-4-设置响应头部","link":"#_4-4-设置响应头部","children":[]},{"level":3,"title":"4.5 其他响应头部操作","slug":"_4-5-其他响应头部操作","link":"#_4-5-其他响应头部操作","children":[]},{"level":3,"title":"4.6 设置响应主体","slug":"_4-6-设置响应主体","link":"#_4-6-设置响应主体","children":[]},{"level":3,"title":"4.7 超时处理","slug":"_4-7-超时处理","link":"#_4-7-超时处理","children":[]},{"level":3,"title":"4.8 事件 close/finish","slug":"_4-8-事件-close-finish","link":"#_4-8-事件-close-finish","children":[]},{"level":3,"title":"4.9 其他不常用属性/方法","slug":"_4-9-其他不常用属性-方法","link":"#_4-9-其他不常用属性-方法","children":[]}]},{"level":2,"title":"5.网络服务 http req","slug":"_5-网络服务-http-req","link":"#_5-网络服务-http-req","children":[{"level":3,"title":"5.1 概览","slug":"_5-1-概览","link":"#_5-1-概览","children":[]},{"level":3,"title":"5.2 属性/方法/事件 分类","slug":"_5-2-属性-方法-事件-分类","link":"#_5-2-属性-方法-事件-分类","children":[]},{"level":3,"title":"5.3 服务端的例子","slug":"_5-3-服务端的例子","link":"#_5-3-服务端的例子","children":[]}]},{"level":2,"title":"6.网络服务 https","slug":"_6-网络服务-https","link":"#_6-网络服务-https","children":[{"level":3,"title":"6.1 模块概览","slug":"_6-1-模块概览","link":"#_6-1-模块概览","children":[]},{"level":3,"title":"6.2 客户端例子","slug":"_6-2-客户端例子","link":"#_6-2-客户端例子","children":[]},{"level":3,"title":"6.3 服务端例子","slug":"_6-3-服务端例子","link":"#_6-3-服务端例子","children":[]}]},{"level":2,"title":"7.URL 接口(代替内置模块url使用)","slug":"_7-url-接口-代替内置模块url使用","link":"#_7-url-接口-代替内置模块url使用","children":[{"level":3,"title":"7.1 对比url模块和URL类","slug":"_7-1-对比url模块和url类","link":"#_7-1-对比url模块和url类","children":[]},{"level":3,"title":"7.2 构造函数","slug":"_7-2-构造函数","link":"#_7-2-构造函数","children":[]},{"level":3,"title":"7.3 实例属性","slug":"_7-3-实例属性","link":"#_7-3-实例属性","children":[]}]},{"level":2,"title":"8.URLSearchParams 对象(代替内置模块querystring使用)","slug":"_8-urlsearchparams-对象-代替内置模块querystring使用","link":"#_8-urlsearchparams-对象-代替内置模块querystring使用","children":[{"level":3,"title":"8.1 概述","slug":"_8-1-概述","link":"#_8-1-概述","children":[]},{"level":3,"title":"8.2 URLSearchParams.toString()","slug":"_8-2-urlsearchparams-tostring","link":"#_8-2-urlsearchparams-tostring","children":[]},{"level":3,"title":"8.3 URLSearchParams.has()","slug":"_8-3-urlsearchparams-has","link":"#_8-3-urlsearchparams-has","children":[]},{"level":3,"title":"8.4 URLSearchParams.get()，URLSearchParams.getAll()","slug":"_8-4-urlsearchparams-get-urlsearchparams-getall","link":"#_8-4-urlsearchparams-get-urlsearchparams-getall","children":[]},{"level":3,"title":"8.5 URLSearchParams.keys()，URLSearchParams.values()，URLSearchParams.entries()","slug":"_8-5-urlsearchparams-keys-urlsearchparams-values-urlsearchparams-entries","link":"#_8-5-urlsearchparams-keys-urlsearchparams-values-urlsearchparams-entries","children":[]}]},{"level":2,"title":"9.qs模块","slug":"_9-qs模块","link":"#_9-qs模块","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":19.4,"words":5819},"filePathRelative":"back_end/nodeJs/05.md","localizedDate":"2024年12月2日","excerpt":"<h1> 05 【nodejs内置模块（上）】</h1>\\n<h2> 1.nodejs 的官方API文档</h2>\\n<ul>\\n<li>Node.js 的API文档（英文）： <a href=\\"https://nodejs.org/docs/latest-v8.x/api/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://nodejs.org/docs/latest-v8.x/api/index.html</a></li>\\n<li>Node.js 的API文档（中文）：<a href=\\"http://nodejs.cn/api/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://nodejs.cn/api/</a></li>\\n</ul>"}');export{e as data};
