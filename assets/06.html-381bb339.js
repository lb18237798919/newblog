const n=JSON.parse(`{"key":"v-08de2dde","path":"/front_end/front_end_framework/vue2/06.html","title":"06 【Vue数据监视 v-model双向绑定】","lang":"zh-CN","frontmatter":{"description":"06 【Vue数据监视 v-model双向绑定】 1.Vue数据监视 1.1问题演示 先来个案例引入一下： &lt;!-- 准备好一个容器--&gt; &lt;div id=\\"root\\"&gt; &lt;h2&gt;人员列表&lt;/h2&gt; &lt;button @click=\\"updateMei\\"&gt;更新马冬梅的信息&lt;/button&gt; &lt;ul&gt; &lt;li v-for=\\"(p,index) of persons\\" :key=\\"p.id\\"&gt; {{p.name}}-{{p.age}}-{{p.sex}} &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt; &lt;script type=\\"text/javascript\\"&gt; Vue.config.productionTip = false const vm = new Vue({ el:'#root', data:{ persons:[ {id:'001',name:'马冬梅',age:30,sex:'女'}, {id:'002',name:'周冬雨',age:31,sex:'女'}, {id:'003',name:'周杰伦',age:18,sex:'男'}, {id:'004',name:'温兆伦',age:19,sex:'男'} ] }, methods: { updateMei(){ // this.persons[0].name = '马老师' //奏效 // this.persons[0].age = 50 //奏效 // this.persons[0].sex = '男' //奏效 this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效 // this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'}) } } }) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_framework/vue2/06.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"06 【Vue数据监视 v-model双向绑定】"}],["meta",{"property":"og:description","content":"06 【Vue数据监视 v-model双向绑定】 1.Vue数据监视 1.1问题演示 先来个案例引入一下： &lt;!-- 准备好一个容器--&gt; &lt;div id=\\"root\\"&gt; &lt;h2&gt;人员列表&lt;/h2&gt; &lt;button @click=\\"updateMei\\"&gt;更新马冬梅的信息&lt;/button&gt; &lt;ul&gt; &lt;li v-for=\\"(p,index) of persons\\" :key=\\"p.id\\"&gt; {{p.name}}-{{p.age}}-{{p.sex}} &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt; &lt;script type=\\"text/javascript\\"&gt; Vue.config.productionTip = false const vm = new Vue({ el:'#root', data:{ persons:[ {id:'001',name:'马冬梅',age:30,sex:'女'}, {id:'002',name:'周冬雨',age:31,sex:'女'}, {id:'003',name:'周杰伦',age:18,sex:'男'}, {id:'004',name:'温兆伦',age:19,sex:'男'} ] }, methods: { updateMei(){ // this.persons[0].name = '马老师' //奏效 // this.persons[0].age = 50 //奏效 // this.persons[0].sex = '男' //奏效 this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效 // this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'}) } } }) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06 【Vue数据监视 v-model双向绑定】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.Vue数据监视","slug":"_1-vue数据监视","link":"#_1-vue数据监视","children":[{"level":3,"title":"1.1问题演示","slug":"_1-1问题演示","link":"#_1-1问题演示","children":[]},{"level":3,"title":"1.2模拟一个数据监测","slug":"_1-2模拟一个数据监测","link":"#_1-2模拟一个数据监测","children":[]},{"level":3,"title":"1.3Vue.set 的使用","slug":"_1-3vue-set-的使用","link":"#_1-3vue-set-的使用","children":[]},{"level":3,"title":"1.4监测数组","slug":"_1-4监测数组","link":"#_1-4监测数组","children":[]},{"level":3,"title":"1.5练习","slug":"_1-5练习","link":"#_1-5练习","children":[]},{"level":3,"title":"1.6总结","slug":"_1-6总结","link":"#_1-6总结","children":[]}]},{"level":2,"title":"2.v-model双向绑定","slug":"_2-v-model双向绑定","link":"#_2-v-model双向绑定","children":[{"level":3,"title":"2.1收集表单数据","slug":"_2-1收集表单数据","link":"#_2-1收集表单数据","children":[]},{"level":3,"title":"2.2模拟实现v-model","slug":"_2-2模拟实现v-model","link":"#_2-2模拟实现v-model","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":6.57,"words":1970},"filePathRelative":"front_end/front_end_framework/vue2/06.md","localizedDate":"2024年12月2日","excerpt":"<h1> 06 【Vue数据监视 v-model双向绑定】</h1>\\n<h2> 1.Vue数据监视</h2>\\n<h3> 1.1问题演示</h3>\\n<p>先来个案例引入一下：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token comment\\">&lt;!-- 准备好一个容器--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>root<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>h2</span><span class=\\"token punctuation\\">&gt;</span></span>人员列表<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>h2</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>updateMei<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>更新马冬梅的信息<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>(p,index) of persons<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>p.id<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n            {{p.name}}-{{p.age}}-{{p.sex}}\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span> \\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n    Vue<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">.</span>productionTip <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n\\n    <span class=\\"token keyword\\">const</span> vm <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'#root'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">persons</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span>\\n                <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'001'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'马冬梅'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">30</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">sex</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'女'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'002'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'周冬雨'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">31</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">sex</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'女'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'003'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'周杰伦'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">18</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">sex</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'004'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'温兆伦'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">19</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">sex</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">methods</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">updateMei</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token comment\\">// this.persons[0].name = '马老师' //奏效</span>\\n                <span class=\\"token comment\\">// this.persons[0].age = 50 //奏效</span>\\n                <span class=\\"token comment\\">// this.persons[0].sex = '男' //奏效</span>\\n                <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>persons<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'001'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'马老师'</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">sex</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">//不奏效</span>\\n                <span class=\\"token comment\\">// this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> \\n\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
