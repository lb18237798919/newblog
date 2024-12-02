const e=JSON.parse('{"key":"v-15c05499","path":"/front_end/front_end_base/javascript/10.html","title":"10 【标准库之RegExp对象】","lang":"zh-CN","frontmatter":{"description":"10 【标准库之RegExp对象】 1.什么是正则表达式 正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。 比如：验证手机号、验证邮箱、验证身份证…… 1.1 快速感知正则表达式 用一个例子快速演示正则表达式基本使用方法：检查某个字符串是否是 6 位数字。","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_base/javascript/10.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"10 【标准库之RegExp对象】"}],["meta",{"property":"og:description","content":"10 【标准库之RegExp对象】 1.什么是正则表达式 正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。 比如：验证手机号、验证邮箱、验证身份证…… 1.1 快速感知正则表达式 用一个例子快速演示正则表达式基本使用方法：检查某个字符串是否是 6 位数字。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"lb"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 【标准库之RegExp对象】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lb\\",\\"url\\":\\"https://lb18237798919.github.io/newblog\\"}]}"]]},"headers":[{"level":2,"title":"1.什么是正则表达式","slug":"_1-什么是正则表达式","link":"#_1-什么是正则表达式","children":[{"level":3,"title":"1.1 快速感知正则表达式","slug":"_1-1-快速感知正则表达式","link":"#_1-1-快速感知正则表达式","children":[]},{"level":3,"title":"1.2 正则表达式“按位”描述规则","slug":"_1-2-正则表达式-按位-描述规则","link":"#_1-2-正则表达式-按位-描述规则","children":[]}]},{"level":2,"title":"2.正则表达式的创建","slug":"_2-正则表达式的创建","link":"#_2-正则表达式的创建","children":[]},{"level":2,"title":"3.正则对象的实例方法","slug":"_3-正则对象的实例方法","link":"#_3-正则对象的实例方法","children":[{"level":3,"title":"3.1 RegExp.prototype.test()","slug":"_3-1-regexp-prototype-test","link":"#_3-1-regexp-prototype-test","children":[]},{"level":3,"title":"3.2 RegExp.prototype.exec()","slug":"_3-2-regexp-prototype-exec","link":"#_3-2-regexp-prototype-exec","children":[]}]},{"level":2,"title":"4.字符串的实例方法","slug":"_4-字符串的实例方法","link":"#_4-字符串的实例方法","children":[{"level":3,"title":"4.1 String.prototype.match()","slug":"_4-1-string-prototype-match","link":"#_4-1-string-prototype-match","children":[]},{"level":3,"title":"4.2 String.prototype.search()","slug":"_4-2-string-prototype-search","link":"#_4-2-string-prototype-search","children":[]},{"level":3,"title":"4.3 String.prototype.replace()","slug":"_4-3-string-prototype-replace","link":"#_4-3-string-prototype-replace","children":[]},{"level":3,"title":"4.4 String.prototype.split()","slug":"_4-4-string-prototype-split","link":"#_4-4-string-prototype-split","children":[]}]},{"level":2,"title":"5.匹配规则","slug":"_5-匹配规则","link":"#_5-匹配规则","children":[{"level":3,"title":"5.1 字面量字符","slug":"_5-1-字面量字符","link":"#_5-1-字面量字符","children":[]},{"level":3,"title":"5.2 元字符","slug":"_5-2-元字符","link":"#_5-2-元字符","children":[]},{"level":3,"title":"5.3 字符的转义","slug":"_5-3-字符的转义","link":"#_5-3-字符的转义","children":[]},{"level":3,"title":"5.4 特殊字符","slug":"_5-4-特殊字符","link":"#_5-4-特殊字符","children":[]},{"level":3,"title":"5.5 字符类","slug":"_5-5-字符类","link":"#_5-5-字符类","children":[]},{"level":3,"title":"5.6 预定义模式","slug":"_5-6-预定义模式","link":"#_5-6-预定义模式","children":[]},{"level":3,"title":"5.7 量词","slug":"_5-7-量词","link":"#_5-7-量词","children":[]},{"level":3,"title":"5.8 贪婪模式","slug":"_5-8-贪婪模式","link":"#_5-8-贪婪模式","children":[]},{"level":3,"title":"5.9 修饰符","slug":"_5-9-修饰符","link":"#_5-9-修饰符","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":24.91,"words":7474},"filePathRelative":"front_end/front_end_base/javascript/10.md","localizedDate":"2024年12月2日","excerpt":"<h1> 10 【标准库之RegExp对象】</h1>\\n<h2> 1.什么是正则表达式</h2>\\n<p>正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。</p>\\n<blockquote>\\n<p>比如：验证手机号、验证邮箱、验证身份证……</p>\\n</blockquote>\\n<h3> 1.1 快速感知正则表达式</h3>\\n<p>用一个例子快速演示正则表达式基本使用方法：检查某个字符串是否是 6 位数字。</p>\\n<figure><img src=\\"https://i0.hdslb.com/bfs/album/8078abc7f846e58388c282220840b6950b34f7a2.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
