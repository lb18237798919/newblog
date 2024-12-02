const e=JSON.parse('{"key":"v-662b637a","path":"/front_end/front_end_framework/vue3/13.html","title":"13 【script setup 总结】","lang":"zh-CN","frontmatter":{"description":"13 【script setup 总结】 因为学习的时候，视频版本并没有一些新的语法糖，笔记是没有使用这些语法糖的，但是用法都会以补充的形式加进来。 在 setup() 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 &lt;script setup&gt; 来大幅度地简化代码。 &lt;script setup&gt; 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的&lt;script&gt;语法，它具有更多优势：","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_framework/vue3/13.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"13 【script setup 总结】"}],["meta",{"property":"og:description","content":"13 【script setup 总结】 因为学习的时候，视频版本并没有一些新的语法糖，笔记是没有使用这些语法糖的，但是用法都会以补充的形式加进来。 在 setup() 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 &lt;script setup&gt; 来大幅度地简化代码。 &lt;script setup&gt; 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的&lt;script&gt;语法，它具有更多优势："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"lb"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13 【script setup 总结】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lb\\",\\"url\\":\\"https://lb18237798919.github.io/newblog\\"}]}"]]},"headers":[{"level":2,"title":"1.基本语法","slug":"_1-基本语法","link":"#_1-基本语法","children":[]},{"level":2,"title":"2.顶层的绑定会被暴露给模板#","slug":"_2-顶层的绑定会被暴露给模板","link":"#_2-顶层的绑定会被暴露给模板","children":[]},{"level":2,"title":"3.响应式#","slug":"_3-响应式","link":"#_3-响应式","children":[]},{"level":2,"title":"4.使用组件#","slug":"_4-使用组件","link":"#_4-使用组件","children":[{"level":3,"title":"4.1 动态组件#","slug":"_4-1-动态组件","link":"#_4-1-动态组件","children":[]},{"level":3,"title":"4.2 递归组件#","slug":"_4-2-递归组件","link":"#_4-2-递归组件","children":[]},{"level":3,"title":"4.3 命名空间组件#","slug":"_4-3-命名空间组件","link":"#_4-3-命名空间组件","children":[]}]},{"level":2,"title":"5.使用自定义指令","slug":"_5-使用自定义指令","link":"#_5-使用自定义指令","children":[]},{"level":2,"title":"6.defineProps() 和 defineEmits()#","slug":"_6-defineprops-和-defineemits","link":"#_6-defineprops-和-defineemits","children":[]},{"level":2,"title":"7.defineExpose#","slug":"_7-defineexpose","link":"#_7-defineexpose","children":[]},{"level":2,"title":"8.useSlots() 和 useAttrs()#","slug":"_8-useslots-和-useattrs","link":"#_8-useslots-和-useattrs","children":[]},{"level":2,"title":"9.与普通的 <script> 一起使用#","slug":"_9-与普通的-script-一起使用","link":"#_9-与普通的-script-一起使用","children":[]},{"level":2,"title":"10.顶层 await#","slug":"_10-顶层-await","link":"#_10-顶层-await","children":[]},{"level":2,"title":"11.针对 TypeScript 的功能#","slug":"_11-针对-typescript-的功能","link":"#_11-针对-typescript-的功能","children":[{"level":3,"title":"11.1 针对类型的 props/emit 声明#","slug":"_11-1-针对类型的-props-emit-声明","link":"#_11-1-针对类型的-props-emit-声明","children":[]},{"level":3,"title":"11.2 使用类型声明时的默认 props 值#","slug":"_11-2-使用类型声明时的默认-props-值","link":"#_11-2-使用类型声明时的默认-props-值","children":[]}]},{"level":2,"title":"12.限制#","slug":"_12-限制","link":"#_12-限制","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":8.79,"words":2637},"filePathRelative":"front_end/front_end_framework/vue3/13.md","localizedDate":"2024年12月2日","excerpt":"<h1> 13 【script setup 总结】</h1>\\n<blockquote>\\n<p>因为学习的时候，视频版本并没有一些新的语法糖，笔记是没有使用这些语法糖的，但是用法都会以补充的形式加进来。</p>\\n</blockquote>\\n<p>在 <code>setup()</code> 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 <code>&lt;script setup&gt;</code> 来大幅度地简化代码。</p>\\n<p><code>&lt;script setup&gt; </code>是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的<code>&lt;script&gt;</code>语法，它具有更多优势：</p>","autoDesc":true}');export{e as data};
