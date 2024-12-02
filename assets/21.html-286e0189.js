import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as o,e as s,a,b as e,d as c}from"./app-fe9da4b4.js";const r={},d={href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"};function u(v,n){const i=l("ExternalLinkIcon");return t(),o("div",null,[n[3]||(n[3]=s(`<h1 id="_21-【vw布局】" tabindex="-1"><a class="header-anchor" href="#_21-【vw布局】" aria-hidden="true">#</a> 21 【vw布局】</h1><h2 id="_1-移动端布局" tabindex="-1"><a class="header-anchor" href="#_1-移动端布局" aria-hidden="true">#</a> 1.移动端布局</h2><p>移动端布局 --- flex 布局</p><p>为了实现可以适配移动端，页面元素可以宽度和高度等比例缩放</p><p>需要移动端适配有如下方案：</p><p>（1）rem</p><p>市场比较常见：</p><ol><li>需要不断修改 html 文字大小</li><li>需要媒体查询 media</li><li>需要 flexible.js</li></ol><p>（2）vw / vh</p><p>未来的趋势：</p><ol><li>省去各种判断和修改</li><li>代表：bilibili、小米……</li></ol><h2 id="_2-vw-vh是什么" tabindex="-1"><a class="header-anchor" href="#_2-vw-vh是什么" aria-hidden="true">#</a> 2.vw/vh是什么？</h2><ul><li>vw/vh 是一个相对单位（类似 em 和 rem 相对单位） <ul><li>vw 是：viewport width 视口宽度单位</li><li>vh 是：viewport height 视口高度单位</li></ul></li><li>相对视口的尺寸计算结果 <ul><li>1vw = 1/100 视口宽度</li><li>1vh = 1/100 视口高度</li></ul></li></ul><p>例如：</p><p>当前屏幕视口是 375px，则 1vw 就是 3.75px，如果当前屏幕视口为 414px，则 1vw 就是 4.14px。</p><p><strong>注意：和百分比有区别，百分比是相对于父元素来说的，而 vw 和 vh 总是针对于当前视口来说的。</strong></p><h2 id="_3-vw-vh怎么用" tabindex="-1"><a class="header-anchor" href="#_3-vw-vh怎么用" aria-hidden="true">#</a> 3.vw/vh怎么用？</h2><ul><li>超级简单，元素单位直接使用新单位 vw/vh 即可</li><li>因为 vw/vh 是相对单位，所以不同视口（屏幕）下，宽高一起变化完成适配</li></ul><blockquote><p>直接使用即可！永远滴神！</p></blockquote><p>【案例】</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何还原设计稿？</strong></p><p>前提：我们设计稿按照 iPhone 6/7/8 来设计，有个盒子是 50px * 50px 的，如何使用 vw 呢？</p><p>分析：</p><ol><li><p>设计稿参照 iPhone 6/7/8，所以视口宽度尺寸是 375px（设计原型图平台切换到 2x 模式再测量，因为 UI 设计图是 750px 的）</p></li><li><p>那么 1vw 是多少像素？</p><p>375px / 100 = 3.75px</p></li><li><p>我们元素的目标是多少像素？</p><p>50px * 50px</p></li><li><p>那么 50 * 50 是多少个 vw？</p><p>50 / 3.75 = 13.3333vw</p></li></ol><blockquote><p>在像素大厨等 UI 软件中，直接选择 vw 单位然后测量即可，不用人工计算。</p></blockquote><h2 id="_4-vw注意事项" tabindex="-1"><a class="header-anchor" href="#_4-vw注意事项" aria-hidden="true">#</a> 4.vw注意事项</h2>`,27)),a("ul",null,[n[2]||(n[2]=s(`<li><p>因为涉及到大量除法且有除不尽的情况，所以还是适应 LESS 搭配更好点</p></li><li><p>我们本质是根据视口宽度来等比例缩放页面元素高度和宽度的，所以开发中使用 vw 就基本够用了。vh 很少使用（高度变化时，我们一般不需要元素大小进行变化，所以用不到 vh）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 都用vm */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 13.333333vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 12.666666vw<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 5.333333vw<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2)),a("li",null,[a("p",null,[n[1]||(n[1]=e("兼容性，网站：")),a("a",d,[n[0]||(n[0]=e("https://caniuse.com/")),c(i)])])])]),n[4]||(n[4]=s('<blockquote><p>目前适用于移动端，PC 端不适用。</p></blockquote><h2 id="_5-vscode-px-vw-插件" tabindex="-1"><a class="header-anchor" href="#_5-vscode-px-vw-插件" aria-hidden="true">#</a> 5.VSCode px-&gt;vw 插件</h2><figure><img src="https://i0.hdslb.com/bfs/album/911c795fd54971b3cda2cab06ade197bf65735e0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>记得进行设置：</p><blockquote><p>打开 px2vw 插件主页、点击设置按钮、点击扩展设置。</p></blockquote><figure><img src="https://i0.hdslb.com/bfs/album/e4e3af30b5d81f3c426e2aa311ed7214067ddaf6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-移动端布局推荐" tabindex="-1"><a class="header-anchor" href="#_6-移动端布局推荐" aria-hidden="true">#</a> 6.移动端布局推荐</h2><p><code>flex</code> + <code>less</code> + <code>vw</code></p>',8))])}const k=p(r,[["render",u],["__file","21.html.vue"]]);export{k as default};
