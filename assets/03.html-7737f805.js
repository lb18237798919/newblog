const e=JSON.parse('{"key":"v-04bdfbe1","path":"/front_end/js_advanced/ajax/03.html","title":"03 【Fetch的概述和基本使用】","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.XMLHttpRequest缺点","slug":"_1-xmlhttprequest缺点","link":"#_1-xmlhttprequest缺点","children":[]},{"level":2,"title":"2.Fetch 的优点","slug":"_2-fetch-的优点","link":"#_2-fetch-的优点","children":[]},{"level":2,"title":"3.Fetch 基本用法","slug":"_3-fetch-基本用法","link":"#_3-fetch-基本用法","children":[]},{"level":2,"title":"4.Fetch 的请求对象","slug":"_4-fetch-的请求对象","link":"#_4-fetch-的请求对象","children":[]},{"level":2,"title":"5.Fetch 的响应对象","slug":"_5-fetch-的响应对象","link":"#_5-fetch-的响应对象","children":[{"level":3,"title":"5.1 Response 对象的同步属性","slug":"_5-1-response-对象的同步属性","link":"#_5-1-response-对象的同步属性","children":[]},{"level":3,"title":"5.2 判断请求是否成功","slug":"_5-2-判断请求是否成功","link":"#_5-2-判断请求是否成功","children":[]},{"level":3,"title":"5.3 Response.headers 属性","slug":"_5-3-response-headers-属性","link":"#_5-3-response-headers-属性","children":[]},{"level":3,"title":"5.4 读取内容的方法","slug":"_5-4-读取内容的方法","link":"#_5-4-读取内容的方法","children":[]},{"level":3,"title":"5.5 Response.clone()","slug":"_5-5-response-clone","link":"#_5-5-response-clone","children":[]},{"level":3,"title":"5.6 Response.body 属性","slug":"_5-6-response-body-属性","link":"#_5-6-response-body-属性","children":[]}]},{"level":2,"title":"6.fetch()的第二个参数：定制 HTTP 请求","slug":"_6-fetch-的第二个参数-定制-http-请求","link":"#_6-fetch-的第二个参数-定制-http-请求","children":[]},{"level":2,"title":"7.fetch()配置对象的完整 API","slug":"_7-fetch-配置对象的完整-api","link":"#_7-fetch-配置对象的完整-api","children":[]},{"level":2,"title":"8.取消fetch()请求","slug":"_8-取消fetch-请求","link":"#_8-取消fetch-请求","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":16.13,"words":4839},"filePathRelative":"front_end/js_advanced/ajax/03.md","localizedDate":"2024年12月2日","excerpt":"<h1> 03 【Fetch的概述和基本使用】</h1>\\n<h2> 1.XMLHttpRequest缺点</h2>\\n<p>浏览器提供了原生的AJAX实现类XMLHttpRequest，基于该类实例，我们可以实现在网页上发送AJAX请求到服务端。</p>\\n<p>但是XMLHttpRequest的设计并不完美，主要体现在以下几个方面：</p>\\n<p>HTTP请求，响应都被耦合在XMLHttpRequest实例上，结构不够简单明了\\n采用事件回调的方式获取HTTP响应，可能会产生回调地狱\\n如果HTTP响应数据过大，则会占用大量内存\\n最后一点就是，XMLHttpRequest实现AJAX的步骤太零碎了</p>"}');export{e as data};
