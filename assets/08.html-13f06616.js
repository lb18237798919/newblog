const e=JSON.parse('{"key":"v-a97bc3da","path":"/front_end/front_end_framework/react/08.html","title":"08 【状态提升】","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.介绍","slug":"_1-介绍","link":"#_1-介绍","children":[]},{"level":2,"title":"2.案例","slug":"_2-案例","link":"#_2-案例","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":4.05,"words":1216},"filePathRelative":"front_end/front_end_framework/react/08.md","localizedDate":"2024年12月2日","excerpt":"<h1> 08 【状态提升】</h1>\\n<h2> 1.介绍</h2>\\n<p>所谓 <strong>状态提升</strong> 就是将各个子组件的 公共state 提升到它们的父组件进行统一存储、处理（这就是所谓的”单一数据源“），负责<code>setState</code>的函数传到下边的子级组件，然后再将父组件处理后的数据或函数props到各子组件中。</p>\\n<p>那么如果子组件 要 修改父组件的state该怎么办呢？我们的做法就是 将父组件中负责setState的函数，以props的形式传给子组件，然后子组件在需要改变state时调用即可。</p>\\n<p><strong>实现方式</strong></p>"}');export{e as data};