const n=JSON.parse('{"key":"v-532ecaf5","path":"/front_end/front_end_base/javascript/25.html","title":"25 【进度事件和表单事件】","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.文档的加载","slug":"_1-文档的加载","link":"#_1-文档的加载","children":[]},{"level":2,"title":"2.进度事件的种类","slug":"_2-进度事件的种类","link":"#_2-进度事件的种类","children":[]},{"level":2,"title":"3.表单事件的种类","slug":"_3-表单事件的种类","link":"#_3-表单事件的种类","children":[{"level":3,"title":"3.1 input 事件","slug":"_3-1-input-事件","link":"#_3-1-input-事件","children":[]},{"level":3,"title":"3.2 select 事件","slug":"_3-2-select-事件","link":"#_3-2-select-事件","children":[]},{"level":3,"title":"3.3 change 事件","slug":"_3-3-change-事件","link":"#_3-3-change-事件","children":[]},{"level":3,"title":"3.4 invalid 事件","slug":"_3-4-invalid-事件","link":"#_3-4-invalid-事件","children":[]},{"level":3,"title":"3.5 reset 事件，submit 事件","slug":"_3-5-reset-事件-submit-事件","link":"#_3-5-reset-事件-submit-事件","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1578},"filePathRelative":"front_end/front_end_base/javascript/25.md","localizedDate":"2024年12月2日","excerpt":"<h1> 25 【进度事件和表单事件】</h1>\\n<h2> 1.文档的加载</h2>\\n<p>浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。\\n如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，\\n此时将会无法正常获取到DOM对象，导致DOM操作失败。</p>\\n<p>解决方式一：\\n可以将<code>js</code>代码编写到body的下边</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>  \\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>btn<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>按钮<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>  \\n  \\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">  \\n\\t\\t\\t<span class=\\"token keyword\\">var</span> btn <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"btn\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  \\n\\t\\t\\tbtn<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onclick</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>  \\n\\t\\t  \\n\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>  \\n\\t</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>  \\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
