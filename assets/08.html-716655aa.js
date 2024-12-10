const t=JSON.parse(`{"key":"v-bee763c6","path":"/front_end/front_end_framework/vue3/08.html","title":"08 【Props 组件事件】","lang":"zh-CN","frontmatter":{"description":"08 【Props 组件事件】 1.Props 1.1 Props 声明# Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给子组件内容，我们必须在组件的 props 列表上声明它。 &lt;!-- BlogPost.vue --&gt; &lt;script setup&gt; defineProps(['title']) &lt;/script&gt; &lt;template&gt; &lt;h4&gt;{{ title }}&lt;/h4&gt; &lt;/template&gt;","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/front_end/front_end_framework/vue3/08.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"08 【Props 组件事件】"}],["meta",{"property":"og:description","content":"08 【Props 组件事件】 1.Props 1.1 Props 声明# Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给子组件内容，我们必须在组件的 props 列表上声明它。 &lt;!-- BlogPost.vue --&gt; &lt;script setup&gt; defineProps(['title']) &lt;/script&gt; &lt;template&gt; &lt;h4&gt;{{ title }}&lt;/h4&gt; &lt;/template&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"08 【Props 组件事件】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.Props","slug":"_1-props","link":"#_1-props","children":[{"level":3,"title":"1.1 Props 声明#","slug":"_1-1-props-声明","link":"#_1-1-props-声明","children":[]},{"level":3,"title":"1.2 Prop 名字格式#","slug":"_1-2-prop-名字格式","link":"#_1-2-prop-名字格式","children":[]},{"level":3,"title":"1.3 使用一个对象绑定多个 prop#","slug":"_1-3-使用一个对象绑定多个-prop","link":"#_1-3-使用一个对象绑定多个-prop","children":[]},{"level":3,"title":"1.4 Prop 校验#","slug":"_1-4-prop-校验","link":"#_1-4-prop-校验","children":[]},{"level":3,"title":"1.5 Boolean 类型转换#","slug":"_1-5-boolean-类型转换","link":"#_1-5-boolean-类型转换","children":[]},{"level":3,"title":"1.6 单向数据流","slug":"_1-6-单向数据流","link":"#_1-6-单向数据流","children":[]},{"level":3,"title":"1.7 defineProps 总结","slug":"_1-7-defineprops-总结","link":"#_1-7-defineprops-总结","children":[]}]},{"level":2,"title":"2.组件事件","slug":"_2-组件事件","link":"#_2-组件事件","children":[{"level":3,"title":"2.1 触发与监听事件","slug":"_2-1-触发与监听事件","link":"#_2-1-触发与监听事件","children":[]},{"level":3,"title":"2.2 事件参数#","slug":"_2-2-事件参数","link":"#_2-2-事件参数","children":[]},{"level":3,"title":"2.3 声明触发的事件","slug":"_2-3-声明触发的事件","link":"#_2-3-声明触发的事件","children":[]},{"level":3,"title":"2.4 事件校验","slug":"_2-4-事件校验","link":"#_2-4-事件校验","children":[]},{"level":3,"title":"2.5 配合 v-model 使用","slug":"_2-5-配合-v-model-使用","link":"#_2-5-配合-v-model-使用","children":[]},{"level":3,"title":"2.6 关于组件使用原生事件","slug":"_2-6-关于组件使用原生事件","link":"#_2-6-关于组件使用原生事件","children":[]},{"level":3,"title":"2.7 vue3中事件总线","slug":"_2-7-vue3中事件总线","link":"#_2-7-vue3中事件总线","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":19.19,"words":5757},"filePathRelative":"front_end/front_end_framework/vue3/08.md","localizedDate":"2024年12月2日","excerpt":"<h1> 08 【Props 组件事件】</h1>\\n<h2> 1.Props</h2>\\n<h3> 1.1 Props 声明<a href=\\"https://staging-cn.vuejs.org/guide/components/props.html#props-declaration\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#</a></h3>\\n<p>Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给子组件内容，我们必须在组件的 props 列表上声明它。</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token comment\\">&lt;!-- BlogPost.vue --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token function\\">defineProps</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'title'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h4</span><span class=\\"token punctuation\\">&gt;</span></span>{{ title }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h4</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};