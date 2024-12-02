const e=JSON.parse('{"key":"v-36f106a3","path":"/front_end/front_end_framework/vue2/12.html","title":"12 【nextTick 过渡与动画】","lang":"zh-CN","frontmatter":{"description":"12 【nextTick 过渡与动画】 1.nextTick 这是一个生命周期钩子 语法：this.$nextTick(回调函数) 作用：在下一次 DOM 更新结束后执行其指定的回调。 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。 比如编辑按钮使文本变成表单且自动获取焦点 点击表单时会用一个布尔值配合v-show使表单显示，可是改变布尔值的时候，后面的focus方法会跟着执行，然后再渲染模板","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_framework/vue2/12.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"12 【nextTick 过渡与动画】"}],["meta",{"property":"og:description","content":"12 【nextTick 过渡与动画】 1.nextTick 这是一个生命周期钩子 语法：this.$nextTick(回调函数) 作用：在下一次 DOM 更新结束后执行其指定的回调。 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。 比如编辑按钮使文本变成表单且自动获取焦点 点击表单时会用一个布尔值配合v-show使表单显示，可是改变布尔值的时候，后面的focus方法会跟着执行，然后再渲染模板"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"dselegent"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12 【nextTick 过渡与动画】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.nextTick","slug":"_1-nexttick","link":"#_1-nexttick","children":[]},{"level":2,"title":"2.过渡与动画","slug":"_2-过渡与动画","link":"#_2-过渡与动画","children":[{"level":3,"title":"2.1 基本介绍","slug":"_2-1-基本介绍","link":"#_2-1-基本介绍","children":[]},{"level":3,"title":"2.2 动画的使用","slug":"_2-2-动画的使用","link":"#_2-2-动画的使用","children":[]},{"level":3,"title":"2.3 过渡的使用","slug":"_2-3-过渡的使用","link":"#_2-3-过渡的使用","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":2.71,"words":814},"filePathRelative":"front_end/front_end_framework/vue2/12.md","localizedDate":"2024年12月2日","excerpt":"<h1> 12 【nextTick 过渡与动画】</h1>\\n<h2> 1.nextTick</h2>\\n<p><strong>这是一个生命周期钩子</strong></p>\\n<ol>\\n<li>语法：<code>this.$nextTick(回调函数)</code></li>\\n<li>作用：在下一次 DOM 更新结束后执行其指定的回调。</li>\\n<li>什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。</li>\\n</ol>\\n<blockquote>\\n<p>比如编辑按钮使文本变成表单且自动获取焦点</p>\\n<p>点击表单时会用一个布尔值配合v-show使表单显示，可是改变布尔值的时候，后面的focus方法会跟着执行，然后再渲染模板</p>\\n</blockquote>","autoDesc":true}');export{e as data};
