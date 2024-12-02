import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,e}from"./app-fe9da4b4.js";const p={};function c(o,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="_09-【sass语法介绍-函数指令】" tabindex="-1"><a class="header-anchor" href="#_09-【sass语法介绍-函数指令】" aria-hidden="true">#</a> 09 【Sass语法介绍-函数指令】</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>在之前的章节我们学习过 Sass 提供的各种各样的函数，那么如果我们需要自定定义函数来使用就需要用到<strong>函数指令 @function</strong>了。本节内容我们来学习 Sass 函数指令的语法和使用，在 Sass 中自定义函数是必须要掌握的！</p><h2 id="_2-什么是-sass-函数指令" tabindex="-1"><a class="header-anchor" href="#_2-什么是-sass-函数指令" aria-hidden="true">#</a> 2.什么是 Sass 函数指令</h2><p>函数指令也叫自定义函数让你可以容易的处理各种逻辑和定义复杂的操作，而且你可以在任何需要的地方复用函数，这使得我们可以抽离出来一些常见的公式或者逻辑，我们先来看下它长什么样，代码如下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 定义函数</span>
<span class="token keyword">@function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token string">&quot;a&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用函数</span>
<span class="token selector">.p </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回忆一下，上面的代码在之前的章节中也出现过，这就是函数指令，定义好一个函数后我们就可以使用了，下面我们开始详细讲解函数指令。</p><p>函数指令是<strong>通过 @function 来定义</strong>，它的写法是 @function name（arguments…）{}，@function 后面跟函数名，然后是一个 () ，() 里面是这个函数接收的参数，可以接收也可以不接收，最后是 {} 中放的是你的逻辑代码。函数名<strong>将连字符和下划线视为相同</strong>，也就是说 a_b 和 a-b 是同一个函数。我们举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">fun-name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在这里编写逻辑代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-函数的参数" tabindex="-1"><a class="header-anchor" href="#_3-函数的参数" aria-hidden="true">#</a> 3.函数的参数</h2><p>函数指令的参数和之前我们讲的混合指令的参数很像，函数如果接收参数那么使用的时候就<strong>必须传入这些参数</strong>，但是你<strong>可以定义默认值使参数成为可选的</strong>，我们举例来看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 有默认值的参数</span>
<span class="token keyword">@function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$arg</span></span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token variable">$arg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 无默认值的参数</span>
<span class="token keyword">@function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token variable">$arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token variable">$arg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.p </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token function">b</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码转换为 CSS 如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.p</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要注意的是，为参数设置的默认值，也可以引用前面的参数或者是任何表达式。</p><h2 id="_4-接收任意数量的参数" tabindex="-1"><a class="header-anchor" href="#_4-接收任意数量的参数" aria-hidden="true">#</a> 4.接收任意数量的参数</h2><p>和前面章节讲的 @mixin 类似，函数指令也<strong>可以接收任意数量的参数</strong>，同样是将最后一个参数以 … 结尾，我们来举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">fonts</span><span class="token punctuation">(</span><span class="token variable">$familys</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span>  <span class="token variable">$familys</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.p </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token function">fonts</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码转换为 CSS 如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.p</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的函数的参数也可以接收任意的参数列表，就像之前在混合指令章节讲的一样，可以用过 meta.keywords() 来获取和使用这些参数，不过这个我们一般不是很常用。</p><h2 id="_5-return" tabindex="-1"><a class="header-anchor" href="#_5-return" aria-hidden="true">#</a> 5.@return</h2><p>在前面的代码中，可以看到很多次我们在函数指令中使用了 @return。@return 指令表示作为函数调用结果的值，说的简单点就是这个函数的返回值，这和在 javascript 的函数中使用 return 很类似。</p><p>在 Sass 中 <strong>@return 指令只能在 @function</strong> 中使用，并且<strong>每个 @function 都必须以 @return 结尾！</strong> 在 @function 的逻辑代码中，如遇到 @return 会立即结束函数并返回其结果，这在一些 @if 判断的情况下很有用。我们举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$str</span></span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$str</span> == &quot;a&quot; </span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$str</span> == &quot;b&quot; </span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$str</span> == &quot;c&quot; </span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token keyword">@return</span> 40px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的代码中我们可以可看到，在函数 a 中，我们根据不同的参数返回不同的结果，然后在 p 的样式中通过传入不同的参数来获取不同的结果。上面这段代码会转换为如下的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-实战经验" tabindex="-1"><a class="header-anchor" href="#_6-实战经验" aria-hidden="true">#</a> 6.实战经验</h2><p>在实际的项目中使用函数指令是必不可少的，我们会定义很多函数来帮助我们解决逻辑问题，一般我们会独立抽出来一个 function.scss 文件来管理整个项目中的函数指令，一般这些函数都是根据你的项目特性以及样式需要封装出来的。</p><p>由于函数一般是和你的业务强相关的，一般就是为自己的项目定义一些工具和方法，这里我就不贴出代码示例了。在实际的应用中，这个函数指令就是需要你“随机应变”，按需封装和使用！</p><h2 id="_7-小结" tabindex="-1"><a class="header-anchor" href="#_7-小结" aria-hidden="true">#</a> 7.小结</h2><p>本节内容我们讲了 Sass 函数指令 @function ，还有函数指令的用法和参数。我们可以使用函数来编写各种各样我们自己的函数。函数指令和前面的混合指令很类似，我们通过下图来回一下函数指令的用法：</p><figure><img src="https://i0.hdslb.com/bfs/album/ab773841b5921e39b687a9c007eea2c52641e31b.png" alt="image-20220825225712402" tabindex="0" loading="lazy"><figcaption>image-20220825225712402</figcaption></figure><p>除此之外 Sass 提供了大量的内置函数，这些我们在前面的章节 Sass 函数中都做了讲解，你可以借用这些函数再配合你自己定义的函数指令，来实现各种复杂的逻辑和强大的效果。</p>`,34)]))}const u=s(p,[["render",c],["__file","09.html.vue"]]);export{u as default};
