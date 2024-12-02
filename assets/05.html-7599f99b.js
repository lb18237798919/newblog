const n=JSON.parse(`{"key":"v-0729553f","path":"/front_end/front_end_framework/vue2/05.html","title":"05 【绑定样式 条件渲染 列表渲染】","lang":"zh-CN","frontmatter":{"description":"05 【绑定样式 条件渲染 列表渲染】 1.绑定样式 1.1class样式 写法：:class=\\"xxx\\" xxx可以是字符串、对象、数。 所以分为三种写法，字符串写法，数组写法，对象写法 字符串写法 字符串写法适用于：类名不确定，要动态获取。 &lt;style&gt; \\t.normal{ background-color: skyblue; } &lt;/style&gt; &lt;!-- 准备好一个容器--&gt; &lt;div id=\\"root\\"&gt; &lt;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --&gt; &lt;div class=\\"basic\\" :class=\\"mood\\" @click=\\"changeMood\\"&gt;{{name}}&lt;/div&gt; &lt;/div&gt; &lt;script&gt; \\tconst vm = new Vue({ el:'#root', data:{ mood:'normal' } }) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_framework/vue2/05.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"05 【绑定样式 条件渲染 列表渲染】"}],["meta",{"property":"og:description","content":"05 【绑定样式 条件渲染 列表渲染】 1.绑定样式 1.1class样式 写法：:class=\\"xxx\\" xxx可以是字符串、对象、数。 所以分为三种写法，字符串写法，数组写法，对象写法 字符串写法 字符串写法适用于：类名不确定，要动态获取。 &lt;style&gt; \\t.normal{ background-color: skyblue; } &lt;/style&gt; &lt;!-- 准备好一个容器--&gt; &lt;div id=\\"root\\"&gt; &lt;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --&gt; &lt;div class=\\"basic\\" :class=\\"mood\\" @click=\\"changeMood\\"&gt;{{name}}&lt;/div&gt; &lt;/div&gt; &lt;script&gt; \\tconst vm = new Vue({ el:'#root', data:{ mood:'normal' } }) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05 【绑定样式 条件渲染 列表渲染】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.绑定样式","slug":"_1-绑定样式","link":"#_1-绑定样式","children":[{"level":3,"title":"1.1class样式","slug":"_1-1class样式","link":"#_1-1class样式","children":[]},{"level":3,"title":"1.2style样式","slug":"_1-2style样式","link":"#_1-2style样式","children":[]}]},{"level":2,"title":"2.条件渲染","slug":"_2-条件渲染","link":"#_2-条件渲染","children":[{"level":3,"title":"2.1v-if","slug":"_2-1v-if","link":"#_2-1v-if","children":[]},{"level":3,"title":"2.2v-show","slug":"_2-2v-show","link":"#_2-2v-show","children":[]}]},{"level":2,"title":"3.列表渲染","slug":"_3-列表渲染","link":"#_3-列表渲染","children":[{"level":3,"title":"3.1v-for指令","slug":"_3-1v-for指令","link":"#_3-1v-for指令","children":[]},{"level":3,"title":"3.2key 的作用与原理","slug":"_3-2key-的作用与原理","link":"#_3-2key-的作用与原理","children":[]},{"level":3,"title":"3.3列表过滤","slug":"_3-3列表过滤","link":"#_3-3列表过滤","children":[]},{"level":3,"title":"3.4列表排序","slug":"_3-4列表排序","link":"#_3-4列表排序","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":13.99,"words":4197},"filePathRelative":"front_end/front_end_framework/vue2/05.md","localizedDate":"2024年12月2日","excerpt":"<h1> 05 【绑定样式 条件渲染 列表渲染】</h1>\\n<h2> 1.绑定样式</h2>\\n<h3> 1.1class样式</h3>\\n<p>写法：:class=\\"xxx\\"    xxx可以是字符串、对象、数。</p>\\n<p>所以分为三种写法，字符串写法，数组写法，对象写法</p>\\n<h4> 字符串写法</h4>\\n<p>字符串写法适用于：类名不确定，要动态获取。</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n\\t<span class=\\"token selector\\">.normal</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> skyblue<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token comment\\">&lt;!-- 准备好一个容器--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>root<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>basic<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>mood<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>changeMood<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{name}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n\\t<span class=\\"token keyword\\">const</span> vm <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'#root'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">mood</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'normal'</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
