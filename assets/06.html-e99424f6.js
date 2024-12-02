const e=JSON.parse(`{"key":"v-2ef4f972","path":"/front_end/js_advanced/es6/06.html","title":"06【对象的扩展】","lang":"zh-CN","frontmatter":{"description":"06【对象的扩展】 1.属性的简洁表示法 ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。 const foo = 'bar'; const baz = {foo}; baz // {foo: \\"bar\\"} // 等同于 const baz = {foo: foo};","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/front_end/js_advanced/es6/06.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"06【对象的扩展】"}],["meta",{"property":"og:description","content":"06【对象的扩展】 1.属性的简洁表示法 ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。 const foo = 'bar'; const baz = {foo}; baz // {foo: \\"bar\\"} // 等同于 const baz = {foo: foo};"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06【对象的扩展】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.属性的简洁表示法","slug":"_1-属性的简洁表示法","link":"#_1-属性的简洁表示法","children":[]},{"level":2,"title":"2.方括号语法","slug":"_2-方括号语法","link":"#_2-方括号语法","children":[{"level":3,"title":"2.1 方括号语法的用法","slug":"_2-1-方括号语法的用法","link":"#_2-1-方括号语法的用法","children":[]},{"level":3,"title":"2.2 方括号中可以放什么","slug":"_2-2-方括号中可以放什么","link":"#_2-2-方括号中可以放什么","children":[]},{"level":3,"title":"2.3 方括号语法和点语法的区别","slug":"_2-3-方括号语法和点语法的区别","link":"#_2-3-方括号语法和点语法的区别","children":[]}]},{"level":2,"title":"3.super 关键字","slug":"_3-super-关键字","link":"#_3-super-关键字","children":[]},{"level":2,"title":"4.对象的展开运算符","slug":"_4-对象的展开运算符","link":"#_4-对象的展开运算符","children":[{"level":3,"title":"4.1 展开对象","slug":"_4-1-展开对象","link":"#_4-1-展开对象","children":[]},{"level":3,"title":"4.2 合并对象","slug":"_4-2-合并对象","link":"#_4-2-合并对象","children":[]},{"level":3,"title":"4.3 注意事项","slug":"_4-3-注意事项","link":"#_4-3-注意事项","children":[]},{"level":3,"title":"4.4 对象展开运算符的应用","slug":"_4-4-对象展开运算符的应用","link":"#_4-4-对象展开运算符的应用","children":[]}]},{"level":2,"title":"5.对象的新增方法","slug":"_5-对象的新增方法","link":"#_5-对象的新增方法","children":[{"level":3,"title":"5.1 Object.is()","slug":"_5-1-object-is","link":"#_5-1-object-is","children":[]},{"level":3,"title":"5.2 Object.assign()","slug":"_5-2-object-assign","link":"#_5-2-object-assign","children":[]},{"level":3,"title":"5.3 Object.keys()、Object.values() 和 Object.entries()","slug":"_5-3-object-keys-、object-values-和-object-entries","link":"#_5-3-object-keys-、object-values-和-object-entries","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":8.49,"words":2548},"filePathRelative":"front_end/js_advanced/es6/06.md","localizedDate":"2024年12月2日","excerpt":"<h1> 06【对象的扩展】</h1>\\n<h2> 1.属性的简洁表示法</h2>\\n<p>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> foo <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'bar'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> baz <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>foo<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\nbaz <span class=\\"token comment\\">// {foo: \\"bar\\"}</span>\\n\\n<span class=\\"token comment\\">// 等同于</span>\\n<span class=\\"token keyword\\">const</span> baz <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">foo</span><span class=\\"token operator\\">:</span> foo<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
