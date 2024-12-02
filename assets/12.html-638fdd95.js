const e=JSON.parse('{"key":"v-542974cc","path":"/front_end/front_end_framework/react/12.html","title":"12 【react高级指引（上）】","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.setState 扩展","slug":"_1-setstate-扩展","link":"#_1-setstate-扩展","children":[{"level":3,"title":"1.1 对象式 setState","slug":"_1-1-对象式-setstate","link":"#_1-1-对象式-setstate","children":[]},{"level":3,"title":"1.2 函数式 setState","slug":"_1-2-函数式-setstate","link":"#_1-2-函数式-setstate","children":[]},{"level":3,"title":"1.3 总结","slug":"_1-3-总结","link":"#_1-3-总结","children":[]}]},{"level":2,"title":"2.Context","slug":"_2-context","link":"#_2-context","children":[{"level":3,"title":"2.1 何时使用 Context","slug":"_2-1-何时使用-context","link":"#_2-1-何时使用-context","children":[]},{"level":3,"title":"2.2 类式组件","slug":"_2-2-类式组件","link":"#_2-2-类式组件","children":[]},{"level":3,"title":"2.3 函数组件","slug":"_2-3-函数组件","link":"#_2-3-函数组件","children":[]},{"level":3,"title":"2.4 hook-useContext","slug":"_2-4-hook-usecontext","link":"#_2-4-hook-usecontext","children":[]}]},{"level":2,"title":"3.错误边界","slug":"_3-错误边界","link":"#_3-错误边界","children":[{"level":3,"title":"3.1 基本使用","slug":"_3-1-基本使用","link":"#_3-1-基本使用","children":[]},{"level":3,"title":"3.2 综合案例","slug":"_3-2-综合案例","link":"#_3-2-综合案例","children":[]},{"level":3,"title":"3.3 让子组件不影响父组件正常显示案例","slug":"_3-3-让子组件不影响父组件正常显示案例","link":"#_3-3-让子组件不影响父组件正常显示案例","children":[]},{"level":3,"title":"3.4 使用错误边界需要注意什么","slug":"_3-4-使用错误边界需要注意什么","link":"#_3-4-使用错误边界需要注意什么","children":[]}]},{"level":2,"title":"4.路由组件的lazyLoad","slug":"_4-路由组件的lazyload","link":"#_4-路由组件的lazyload","children":[]},{"level":2,"title":"5.Fragment","slug":"_5-fragment","link":"#_5-fragment","children":[]},{"level":2,"title":"6.使用 PropTypes 进行类型检查","slug":"_6-使用-proptypes-进行类型检查","link":"#_6-使用-proptypes-进行类型检查","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":17.92,"words":5377},"filePathRelative":"front_end/front_end_framework/react/12.md","localizedDate":"2024年12月2日","excerpt":"<h1> 12 【react高级指引（上）】</h1>\\n<h2> 1.setState 扩展</h2>\\n<h3> 1.1 对象式 setState</h3>\\n<p>首先在我们以前的认知中，<code>setState</code> 是用来更新状态的，我们一般给它传递一个对象，就像这样</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setState</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span> count <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
