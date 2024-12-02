const t=JSON.parse('{"key":"v-762218b5","path":"/front_end/front_end_base/html_css/05.html","title":"05 【CSS引入方式 CSS的元素显示模式】","lang":"zh-CN","frontmatter":{"description":"05 【CSS引入方式 CSS的元素显示模式】 1.CSS的引入方式 1.1 CSS的三种引入方式 按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类： 行内样式表（行内式） 内部样式表（嵌入式） 外部样式表（外链式） 1.2 行内样式表 行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式，适合于修改简单样式。 &lt;div style=\\"color: red; font-size: 12px;\\"&gt; 青春不常在，抓紧谈恋爱 &lt;/div&gt;","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_base/html_css/05.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"05 【CSS引入方式 CSS的元素显示模式】"}],["meta",{"property":"og:description","content":"05 【CSS引入方式 CSS的元素显示模式】 1.CSS的引入方式 1.1 CSS的三种引入方式 按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类： 行内样式表（行内式） 内部样式表（嵌入式） 外部样式表（外链式） 1.2 行内样式表 行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式，适合于修改简单样式。 &lt;div style=\\"color: red; font-size: 12px;\\"&gt; 青春不常在，抓紧谈恋爱 &lt;/div&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05 【CSS引入方式 CSS的元素显示模式】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.CSS的引入方式","slug":"_1-css的引入方式","link":"#_1-css的引入方式","children":[{"level":3,"title":"1.1 CSS的三种引入方式","slug":"_1-1-css的三种引入方式","link":"#_1-1-css的三种引入方式","children":[]},{"level":3,"title":"1.2 行内样式表","slug":"_1-2-行内样式表","link":"#_1-2-行内样式表","children":[]},{"level":3,"title":"1.3 内部样式表","slug":"_1-3-内部样式表","link":"#_1-3-内部样式表","children":[]},{"level":3,"title":"1.4 外部样式表","slug":"_1-4-外部样式表","link":"#_1-4-外部样式表","children":[]},{"level":3,"title":"1.5 CSS引入方式总结","slug":"_1-5-css引入方式总结","link":"#_1-5-css引入方式总结","children":[]}]},{"level":2,"title":"2.CSS 的元素显示模式","slug":"_2-css-的元素显示模式","link":"#_2-css-的元素显示模式","children":[{"level":3,"title":"2.1 什么是元素显示模式","slug":"_2-1-什么是元素显示模式","link":"#_2-1-什么是元素显示模式","children":[]},{"level":3,"title":"2.2 块、行内、行内块","slug":"_2-2-块、行内、行内块","link":"#_2-2-块、行内、行内块","children":[]},{"level":3,"title":"2.3 元素显示模式转换","slug":"_2-3-元素显示模式转换","link":"#_2-3-元素显示模式转换","children":[]},{"level":3,"title":"2.4 元素显示模式总结","slug":"_2-4-元素显示模式总结","link":"#_2-4-元素显示模式总结","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":6.77,"words":2031},"filePathRelative":"front_end/front_end_base/html_css/05.md","localizedDate":"2024年12月2日","excerpt":"<h1> 05 【CSS引入方式 CSS的元素显示模式】</h1>\\n<h2> 1.CSS的引入方式</h2>\\n<h3> 1.1 CSS的三种引入方式</h3>\\n<p>按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类：</p>\\n<ul>\\n<li>行内样式表（行内式）</li>\\n<li>内部样式表（嵌入式）</li>\\n<li>外部样式表（外链式）</li>\\n</ul>\\n<h3> 1.2 行内样式表</h3>\\n<p>行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式，适合于修改简单样式。</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token special-attr\\"><span class=\\"token attr-name\\">style</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span><span class=\\"token value css language-css\\"><span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> red<span class=\\"token punctuation\\">;</span> <span class=\\"token property\\">font-size</span><span class=\\"token punctuation\\">:</span> 12px<span class=\\"token punctuation\\">;</span></span><span class=\\"token punctuation\\">\\"</span></span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    青春不常在，抓紧谈恋爱\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
