const n=JSON.parse('{"key":"v-63a169a3","path":"/back_end/nodeJs/16.html","title":"16 【跨域】","lang":"zh-CN","frontmatter":{"description":"16 【跨域】 1.什么是跨域 跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。浏览器从一个域名的网页去请求另一个域名的资源时，出现域名、端口、协议任一不同，都属于跨域。 同源策略限制了一下行为： Cookie、LocalStorage 和 IndexDB 无法读取 DOM 和 JS 对象无法获取 Ajax请求发送不出去 下面举个例子： http://www.yyy.cn/index.html 调用 http://www.xxxyyy.cn/server.php 非跨域 http://**www.xxxyyy.cn**/index.html 调用 http://**www.xxx.cn**/server.php 跨域,主域不同 http://**abc**.xxxyyy.cn/index.html 调用 http://**def**.xxx.cn/server.php 跨域,子域名不同 http://www.xxx.cn:**8080**/index.html 调用 http://www.xxx.cn/server.php 跨域,端口不同 **https**://www.xxx.cn/index.html 调用 **http**://www.xxx.cn/server.php 跨域,协议不同","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/nodeJs/16.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"16 【跨域】"}],["meta",{"property":"og:description","content":"16 【跨域】 1.什么是跨域 跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。浏览器从一个域名的网页去请求另一个域名的资源时，出现域名、端口、协议任一不同，都属于跨域。 同源策略限制了一下行为： Cookie、LocalStorage 和 IndexDB 无法读取 DOM 和 JS 对象无法获取 Ajax请求发送不出去 下面举个例子： http://www.yyy.cn/index.html 调用 http://www.xxxyyy.cn/server.php 非跨域 http://**www.xxxyyy.cn**/index.html 调用 http://**www.xxx.cn**/server.php 跨域,主域不同 http://**abc**.xxxyyy.cn/index.html 调用 http://**def**.xxx.cn/server.php 跨域,子域名不同 http://www.xxx.cn:**8080**/index.html 调用 http://www.xxx.cn/server.php 跨域,端口不同 **https**://www.xxx.cn/index.html 调用 **http**://www.xxx.cn/server.php 跨域,协议不同"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"dselegent"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16 【跨域】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.什么是跨域","slug":"_1-什么是跨域","link":"#_1-什么是跨域","children":[]},{"level":2,"title":"2.跨域资源共享CORS","slug":"_2-跨域资源共享cors","link":"#_2-跨域资源共享cors","children":[{"level":3,"title":"2.1 简单请求","slug":"_2-1-简单请求","link":"#_2-1-简单请求","children":[]},{"level":3,"title":"2.2 非简单请求","slug":"_2-2-非简单请求","link":"#_2-2-非简单请求","children":[]}]},{"level":2,"title":"3.Nodejs 跨域处理","slug":"_3-nodejs-跨域处理","link":"#_3-nodejs-跨域处理","children":[{"level":3,"title":"3.1 设置允许域名跨域","slug":"_3-1-设置允许域名跨域","link":"#_3-1-设置允许域名跨域","children":[]},{"level":3,"title":"3.2 利用中间件 cors","slug":"_3-2-利用中间件-cors","link":"#_3-2-利用中间件-cors","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":9.78,"words":2933},"filePathRelative":"back_end/nodeJs/16.md","localizedDate":"2024年12月2日","excerpt":"<h1> 16 【跨域】</h1>\\n<h2> 1.什么是跨域</h2>\\n<p>跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。浏览器从一个域名的网页去请求另一个域名的资源时，出现域名、端口、协议任一不同，都属于跨域。</p>\\n<p>同源策略限制了一下行为：</p>\\n<p>Cookie、LocalStorage 和 IndexDB 无法读取</p>\\n<p>DOM 和 JS 对象无法获取</p>\\n<p>Ajax请求发送不出去</p>\\n<p>下面举个例子：</p>\\n<div class=\\"language-ruby line-numbers-mode\\" data-ext=\\"rb\\"><pre class=\\"language-ruby\\"><code>http<span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>www<span class=\\"token punctuation\\">.</span>yyy<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>html 调用 http<span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>www<span class=\\"token punctuation\\">.</span>xxxyyy<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>server<span class=\\"token punctuation\\">.</span>php 非跨域\\n\\n<span class=\\"token symbol\\">http</span><span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">**</span>www<span class=\\"token punctuation\\">.</span>xxxyyy<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">**</span><span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>html 调用  http<span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">**</span>www<span class=\\"token punctuation\\">.</span>xxx<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">**</span><span class=\\"token operator\\">/</span>server<span class=\\"token punctuation\\">.</span>php  跨域<span class=\\"token punctuation\\">,</span>主域不同\\n\\n<span class=\\"token symbol\\">http</span><span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">**</span>abc<span class=\\"token operator\\">**</span><span class=\\"token punctuation\\">.</span>xxxyyy<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>html 调用  http<span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">**</span><span class=\\"token keyword\\">def</span><span class=\\"token operator\\">**</span><span class=\\"token punctuation\\">.</span>xxx<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>server<span class=\\"token punctuation\\">.</span>php  跨域<span class=\\"token punctuation\\">,</span>子域名不同\\n\\n<span class=\\"token symbol\\">http</span><span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>www<span class=\\"token punctuation\\">.</span>xxx<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">:</span><span class=\\"token operator\\">**</span><span class=\\"token number\\">8080</span><span class=\\"token operator\\">**</span><span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>html 调用  http<span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>www<span class=\\"token punctuation\\">.</span>xxx<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>server<span class=\\"token punctuation\\">.</span>php  跨域<span class=\\"token punctuation\\">,</span>端口不同\\n\\n<span class=\\"token operator\\">**</span>https<span class=\\"token operator\\">**</span><span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>www<span class=\\"token punctuation\\">.</span>xxx<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>html 调用  <span class=\\"token operator\\">**</span>http<span class=\\"token operator\\">**</span><span class=\\"token operator\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>www<span class=\\"token punctuation\\">.</span>xxx<span class=\\"token punctuation\\">.</span>cn<span class=\\"token operator\\">/</span>server<span class=\\"token punctuation\\">.</span>php  跨域<span class=\\"token punctuation\\">,</span>协议不同\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
