const e=JSON.parse('{"key":"v-60718375","path":"/front_end/js_advanced/es6/14.html","title":"14 【Class extends】","lang":"zh-CN","frontmatter":{"description":"14 【Class extends】 1.简介 Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。 class Point { } class ColorPoint extends Point { }","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/js_advanced/es6/14.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"14 【Class extends】"}],["meta",{"property":"og:description","content":"14 【Class extends】 1.简介 Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。 class Point { } class ColorPoint extends Point { }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"dselegent"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14 【Class extends】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.私有属性和私有方法的继承","slug":"_2-私有属性和私有方法的继承","link":"#_2-私有属性和私有方法的继承","children":[]},{"level":2,"title":"3.静态属性和静态方法的继承","slug":"_3-静态属性和静态方法的继承","link":"#_3-静态属性和静态方法的继承","children":[]},{"level":2,"title":"4.Object.getPrototypeOf()","slug":"_4-object-getprototypeof","link":"#_4-object-getprototypeof","children":[]},{"level":2,"title":"5.super 关键字","slug":"_5-super-关键字","link":"#_5-super-关键字","children":[]},{"level":2,"title":"6.类的 prototype 属性和__proto__属性","slug":"_6-类的-prototype-属性和-proto-属性","link":"#_6-类的-prototype-属性和-proto-属性","children":[]},{"level":2,"title":"7.实例的__proto__属性","slug":"_7-实例的-proto-属性","link":"#_7-实例的-proto-属性","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":11.2,"words":3361},"filePathRelative":"front_end/js_advanced/es6/14.md","localizedDate":"2024年12月2日","excerpt":"<h1> 14 【Class extends】</h1>\\n<h2> 1.简介</h2>\\n<p>Class 可以通过<code>extends</code>关键字实现继承，让子类继承父类的属性和方法。extends 的写法比 ES5 的原型链继承，要清晰和方便很多。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ColorPoint</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
