const n=JSON.parse(`{"key":"v-70687734","path":"/front_end/front_end_framework/vue3/10.html","title":"10 【异步组件 组合式函数(hooks)】","lang":"zh-CN","frontmatter":{"description":"10 【异步组件 组合式函数(hooks)】 1.异步组件 1.1 为什么要有异步组件 首先来看这样一段代码 父组件App.vue &lt;template&gt; &lt;div class=\\"app\\"&gt; &lt;h3&gt;我是App组件&lt;/h3&gt; &lt;Child&gt;&lt;/Child&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { name: 'App', }; &lt;/script&gt; &lt;script setup&gt; import Child from './components/Child.vue'; &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_framework/vue3/10.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"10 【异步组件 组合式函数(hooks)】"}],["meta",{"property":"og:description","content":"10 【异步组件 组合式函数(hooks)】 1.异步组件 1.1 为什么要有异步组件 首先来看这样一段代码 父组件App.vue &lt;template&gt; &lt;div class=\\"app\\"&gt; &lt;h3&gt;我是App组件&lt;/h3&gt; &lt;Child&gt;&lt;/Child&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { name: 'App', }; &lt;/script&gt; &lt;script setup&gt; import Child from './components/Child.vue'; &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 【异步组件 组合式函数(hooks)】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.异步组件","slug":"_1-异步组件","link":"#_1-异步组件","children":[{"level":3,"title":"1.1 为什么要有异步组件","slug":"_1-1-为什么要有异步组件","link":"#_1-1-为什么要有异步组件","children":[]},{"level":3,"title":"1.2 基础用法","slug":"_1-2-基础用法","link":"#_1-2-基础用法","children":[]},{"level":3,"title":"1.3 加载与错误状态","slug":"_1-3-加载与错误状态","link":"#_1-3-加载与错误状态","children":[]},{"level":3,"title":"1.4 搭配 Suspense 使用（实验性）","slug":"_1-4-搭配-suspense-使用-实验性","link":"#_1-4-搭配-suspense-使用-实验性","children":[]}]},{"level":2,"title":"2.组合式函数(hooks)","slug":"_2-组合式函数-hooks","link":"#_2-组合式函数-hooks","children":[{"level":3,"title":"2.1 什么是“组合式函数”？","slug":"_2-1-什么是-组合式函数","link":"#_2-1-什么是-组合式函数","children":[]},{"level":3,"title":"2.2 鼠标跟踪器示例","slug":"_2-2-鼠标跟踪器示例","link":"#_2-2-鼠标跟踪器示例","children":[]},{"level":3,"title":"2.3 异步状态示例","slug":"_2-3-异步状态示例","link":"#_2-3-异步状态示例","children":[]},{"level":3,"title":"2.4 约定和最佳实践","slug":"_2-4-约定和最佳实践","link":"#_2-4-约定和最佳实践","children":[]},{"level":3,"title":"2.5 通过抽取组合式函数改善代码结构#","slug":"_2-5-通过抽取组合式函数改善代码结构","link":"#_2-5-通过抽取组合式函数改善代码结构","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":13.26,"words":3979},"filePathRelative":"front_end/front_end_framework/vue3/10.md","localizedDate":"2024年12月2日","excerpt":"<h1> 10 【异步组件 组合式函数(hooks)】</h1>\\n<h2> 1.异步组件</h2>\\n<h3> 1.1 为什么要有异步组件</h3>\\n<p>首先来看这样一段代码</p>\\n<p>父组件<code>App.vue</code></p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>app<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h3</span><span class=\\"token punctuation\\">&gt;</span></span>我是App组件<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h3</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Child</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Child</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'App'</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> Child <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./components/Child.vue'</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
