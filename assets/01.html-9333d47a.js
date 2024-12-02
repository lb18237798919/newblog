import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,e as a,a as e,b as n,d as l}from"./app-fe9da4b4.js";const r={},d={href:"https://www.webpackjs.com/loaders/sass-loader/",target:"_blank",rel:"noopener noreferrer"};function u(v,s){const t=i("ExternalLinkIcon");return o(),c("div",null,[s[3]||(s[3]=a(`<h1 id="_01-【sass的安装使用】" tabindex="-1"><a class="header-anchor" href="#_01-【sass的安装使用】" aria-hidden="true">#</a> 01 【Sass的安装使用】</h1><h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1.介绍</h2><h3 id="_1-1-css预处理技术-及种类介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-css预处理技术-及种类介绍" aria-hidden="true">#</a> 1.1 CSS预处理技术，及种类介绍</h3><p>什么是css预处理技术</p><ul><li>CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。</li><li>通俗的说，“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题”，例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如变量$main-color）等等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。</li></ul><p>css预处理技术的种类</p><ul><li>Sass（SCSS）</li><li>LESS</li><li>Stylus</li><li>Turbine</li><li>Swithch CSS</li><li>CSS Cacheer</li><li>DT CSS</li></ul><p><strong>如此之多的 CSS 预处理器，那么“我应该选择哪种 CSS 预处理器？”也相应成了最近网上的一大热门话题，各大技术论坛也是争论不休。</strong></p><p>到目前为止，在众多优秀的 CSS 预处理器语言中就属 <code>Sass</code>、<code>LESS</code> 和 <code>Stylus</code> 最优秀。</p><h3 id="_1-2-什么是sass" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是sass" aria-hidden="true">#</a> 1.2 什么是sass</h3><p>Sass(Syntactically Awesome StyleSheets)是一种CSS预处理器(<code>preprocessor</code>)， 是一款强化 CSS 的辅助工具。可以高效的编写样式，同时实现变量、嵌套、组合、继承等编程语言功能。</p><blockquote><p>css是一门非程序式语言，没有变量、函数、scope(作用域)等概念。</p><ul><li>CSS需要书写大量看似没有逻辑的代码，冗余度比较高</li><li>不方便维护及扩展，难以复用</li><li>css没有很好的计算能力</li><li>非前端工程师往往会因为缺少CSS编写经验而很难写出组织良好且易于维护的CSS代码</li></ul></blockquote><p>CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者只要使用这种语言进行CSS的编码工作就可以了。</p><blockquote><p>“用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用。”</p></blockquote><h2 id="_2-关于scss和sass" tabindex="-1"><a class="header-anchor" href="#_2-关于scss和sass" aria-hidden="true">#</a> 2.关于scss和sass</h2><p>sass是最早出现的css预处理语言，有着比less更强大的功能。采用Ruby语言编写。</p><p>最初版本采用的是严格缩进的风格（不带大括号( {} )和分号( ; )，这一语法也导致一开始，sass并不太为开发者所接受）。</p><p><strong>从 V3 版本开始放弃了缩进式的风格，并完全兼容普通的css代码，也因此从第三代开始，sass也被称为scss。</strong></p><blockquote><p>Sass 3 就是 Scss，是Sassy CSS的简写，它是CSS3语法的超集，也就是说所有有效的CSS/CSS3样式也同样适合于Sass。</p></blockquote><p>对现代编程来说，sass就是scss，也因此，sass现在的扩展名为<code>.scss</code>（如果是旧版本的sass，可能扩展名会为<code>.sass</code>）。</p><h2 id="_3-安装和命令行编译" tabindex="-1"><a class="header-anchor" href="#_3-安装和命令行编译" aria-hidden="true">#</a> 3.安装和命令行编译</h2><p>cmd打开本地命令控制窗口，输入下面字符串然后回车就装好了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>编译.scss文件为.css文件：</strong></p><p>Sass使用.scss作为文件后缀名，不能直接在&lt; link &gt;标签里使用，需要编译为 .css文件。 <strong>演示：</strong></p><ol><li><p>建一个html文件，随便写个h1标签：</p><figure><img src="https://i0.hdslb.com/bfs/album/bacbc180d9a88cd06ac988ab8fab52448a35348b.png" alt="image-20220823140518434" tabindex="0" loading="lazy"><figcaption>image-20220823140518434</figcaption></figure></li><li><p>建一个.scss后缀的文件，如input.scss，写点基本样式sass的语法： <img src="https://i0.hdslb.com/bfs/album/7446e8cfea1963feec70f74c98e15a5570f0a8cd.png" alt="image-20220823140550201" loading="lazy"></p></li><li><p>在html文件所在的路径下打开cmd命令控制符，输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//单文件转换命令
sass input.scss:output.css

// 或 sass input.scss output.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示把名字为 input.scss 转换成名字为 ouput.css 的文件。 回车后，接下来发现就得到了css的文件。</p><figure><img src="https://i0.hdslb.com/bfs/album/cd57c9686d892e6f30e4f15aa3124c150a3038db.png" alt="image-20220823140645814" tabindex="0" loading="lazy"><figcaption>image-20220823140645814</figcaption></figure></li></ol><blockquote><p>使用 : 编译输出时，前后不能有空格，即 <code>:</code> 前紧跟输入的scss文件，<code>:</code> 后紧跟输出的css文件。</p></blockquote><blockquote><p><code>:</code> 冒号形式的命令，常用于编译文件夹（中的所有sass文件）的输入输出。</p></blockquote><p>​ css文件内容如下，可以看出转换好了： ​ <img src="https://i0.hdslb.com/bfs/album/23a4e7317c5dc935065a7d17de1af039ef1fef0a.png" alt="image-20220823140750386" loading="lazy"> ​ 接下来就是老操作了，在HTML里用 &lt; link &gt;标签把css文件引入就行。</p><ol start="4"><li><p>但是不可能说写一句.scss语句就转换一次，太麻烦，所以可以自动转换，当我在.scss里写一句，.css就自动生成一句。在cmd输入以下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--watch</span> input.scss:ouput.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示监视变化，当input.scss一变化，output.css就变化</p></li></ol><p>空格和冒号对应生成css的两中模式，如果是一对一模式（一个scss生成一个css），使用空格即可；如果是多对多模式，比如一个文件夹生成到另一个文件夹，同时一次性有多个scss文件生成css文件等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 编译 light.scss 和 dark.scss 到 light.css 和 dark.css.</span>
<span class="token operator">&gt;</span> sass light.scss:light.css dark.scss:dark.css

sass  <span class="token parameter variable">--watch</span>  fileFolder:outputFolder/css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当名字为<code>fileFolder</code>这个文件夹里任意一个.scss后缀的文件变化时，就将其编译到名字<code>outputFolder/css</code>这个文件夹里面（会自动生成相应的.css文件）</p><h2 id="_4-sass文件编译快览" tabindex="-1"><a class="header-anchor" href="#_4-sass文件编译快览" aria-hidden="true">#</a> 4.Sass文件编译快览</h2><h3 id="_4-1-命令行编译配置选项" tabindex="-1"><a class="header-anchor" href="#_4-1-命令行编译配置选项" aria-hidden="true">#</a> 4.1 命令行编译配置选项</h3><p>可以通过 <code>sass -h</code> 或 <code>sass --help</code> 查看详细配置项。</p><p>配置选项可以指定编译后的css的排版、是否生成调试map、开启debug等，最常用的是 <code>--style</code> 和 <code>--sourcemap</code>。</p><h3 id="_4-2-watch监听文件变化" tabindex="-1"><a class="header-anchor" href="#_4-2-watch监听文件变化" aria-hidden="true">#</a> 4.2 <code>--watch</code>监听文件变化</h3><p>sass使用<code>--watch</code>选项，用于监听scss文件的变化。这样，当scss文件内容有改动时，会自动编译为css。</p><ul><li>监听单个scss文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--watch</span> .<span class="token punctuation">\\</span>firstsass.scss .<span class="token punctuation">\\</span>firstsass1.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>监听scss文件夹</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--watch</span> .<span class="token punctuation">\\</span>scssdir<span class="token punctuation">\\</span> .<span class="token punctuation">\\</span>cssdir<span class="token punctuation">\\</span>

sass <span class="token parameter variable">--watch</span> scssdir:cssdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<strong>使用 <code>:</code> 可以指定输出的路径（文件夹），否则css将默认生成在源scss文件所在目录中。</strong></p><ul><li>结合 <code>--style</code> 监听</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--watch</span> app/sass:public/stylesheets <span class="token parameter variable">--style</span><span class="token operator">=</span>compressed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>使用压缩（compressed）的样式（style）输出 css 文件</strong></p></blockquote><h3 id="_4-3-style指定css的样式" tabindex="-1"><a class="header-anchor" href="#_4-3-style指定css的样式" aria-hidden="true">#</a> 4.3 <code>--style</code>指定css的样式</h3><p><code>--style</code> 的css格式有两种：<code>expanded</code>（默认）、<code>compressed</code>。</p><blockquote><p>旧版本的Ruby实现中有四种样式，还有<code>nested</code>、<code>compact</code>。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 指定编译格式
sass input.scss:output.css <span class="token parameter variable">--style</span><span class="token operator">=</span>expanded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，一个scss文件如下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-title </span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面，可以查看<code>expanded</code>、<code>compressed</code>编译后的css格式。</p><ol><li><code>expanded</code> ：默认值，未压缩的展开的css格式</li></ol><p>每个选择器和声明单独一行。</p><p>执行如下命令编译：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass styletest.scss styletest.css <span class="token parameter variable">--style</span><span class="token operator">=</span>expanded

<span class="token comment">## 或 sass styletest.scss styletest.css</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>expanded编译过后的样式，是标准的没有经过任何压缩，全部字符展开的css格式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-title</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>compressed</code> 去除所有的空白字符，全部css内容压缩为一行</li></ol><p><strong>生产环境中推荐的css格式。</strong></p><p>执行如下命令编译，将css结果输出在命令行中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sass <span class="token parameter variable">--style</span><span class="token operator">=</span>compressed styletest.scss

.box<span class="token punctuation">{</span>width:300px<span class="token punctuation">;</span>height:400px<span class="token punctuation">}</span>.box-title<span class="token punctuation">{</span>height:30px<span class="token punctuation">;</span>line-height:30px<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-使用vscode插件编译" tabindex="-1"><a class="header-anchor" href="#_5-使用vscode插件编译" aria-hidden="true">#</a> 5.使用VSCode插件编译</h2><h3 id="_5-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_5-1-基本使用" aria-hidden="true">#</a> 5.1 基本使用</h3><p><strong>live sass compiler是VSCode扩展，可以实时地将SASS / SCSS文件编译/转换为CSS文件。</strong></p><ul><li>可以自动添加css兼容性前缀，-webkit-，-moz-，-ms，-o-等。</li><li>可以自定义css文件解析后的代码样式（expanded 展开，compact，compressed 压缩，nested）。</li><li>可自定义编译/转换后的文件扩展名（.css或.min.css）。</li></ul><p><strong>1.在vscode插件里搜索live sass compiler安装。</strong></p><p><strong>2.安装后，新建scss文件，在vscode底部状态栏中点击watch sass，此时状态为 Watching ，即可自动解析sass为css文件。</strong></p><figure><img src="https://i0.hdslb.com/bfs/album/f18b5afe44e8a50d00093d9683a9c6965272617b.png" alt="image-20220823173100339" tabindex="0" loading="lazy"><figcaption>image-20220823173100339</figcaption></figure><h3 id="_5-2-自定义设置" tabindex="-1"><a class="header-anchor" href="#_5-2-自定义设置" aria-hidden="true">#</a> 5.2 自定义设置</h3><p>在使用live sass compiler插件时，并不是所有的默认设置都如我们所愿，那么，我们来看一下如何自定义设置。</p><p><strong>1.编译/转换后的文件格式、扩展名、保存位置</strong></p><ul><li>文件格式 格式可以是expanded，compact，compressed或nested。默认值为 expanded。</li><li>扩展名 扩展名可以是.css或.min.css。默认值为.css。</li><li>保存位置 默认的转换后的css文件保存在scss文件的同级目录下，但实际，我们通常需要把所有scss文件保存在scss文件夹，而css文件希望保存在css的文件夹，如图所示： <img src="https://i0.hdslb.com/bfs/album/50de6685454beb2c1ae13f5a12f7a70bc59d2c7d.png" alt="image-20220823173159840" loading="lazy"></li></ul><p>​ 我们在配置中如下设置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expanded&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/../css/&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>savePath即为导出后的文件保存位置。</p><p><strong>2.去掉编译时出现的css.map文件</strong> 在每个文件编译后，默认设置下，会同时出现一个map格式的文件，有时并不需要该文件，那么我们如何去掉呢？</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认值为true，我们设置为false即可。</p><p><strong>3.设置css兼容性前缀</strong> live sass compiler可以在编译时自动添加CSS兼容性前缀（-webkit-，-moz-，-ms，-o-等），如下设置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;liveSassCompile.settings.autoprefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;last 3 versions&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，</p><ul><li>&quot;&gt;1%&quot;是指 通过全球使用情况统计信息选择出的高于1%使用率的浏览器版本。</li><li>&quot;last 3 versions&quot;是指 每个浏览器的最后3个版本。</li></ul><p>这里也可以设置为具体的浏览器，如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;liveSassCompile.settings.autoprefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;ie &gt;= 6&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//ie6以上</span>
  <span class="token string">&quot;firefox &gt;= 8&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;chrome &gt;= 24&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;Opera&gt;=10&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p><p>个人配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;liveSassCompile.settings.autoprefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;ie &gt;= 6&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//ie6以上</span>
  <span class="token string">&quot;firefox &gt;= 8&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;chrome &gt;= 24&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;Opera&gt;=10&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;liveSassCompile.settings.excludeList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;.vscode/**&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expanded&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/../css/&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>      <span class="token property">&quot;liveSassCompile.settings.showOutputWindow&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>压缩生成min.css文件
<span class="token property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// More Complex</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;compressed&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.min.css&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/../css/&quot;</span>
    <span class="token punctuation">}</span> 
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>感觉总体作用不大，还是结合webpack等工具，实时更新页面内容时，实时编译scss，而不需要单独使用该工具。</p></blockquote><h2 id="_6-使用webpack编译" tabindex="-1"><a class="header-anchor" href="#_6-使用webpack编译" aria-hidden="true">#</a> 6.使用webpack编译</h2>`,93)),e("p",null,[s[1]||(s[1]=n("在目前主流的前端项目中，一般是使用 ")),e("a",d,[s[0]||(s[0]=n("Webpack")),l(t)]),s[2]||(s[2]=n(" 来构建我们的前端项目，并且大多数都跑在 Node 环境下。"))]),s[4]||(s[4]=a(`<p>行如下命令安装 sass-loader ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> mini-css-extract-plugin <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> css-loader <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> sass-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;[MiniCssExtractPlugin.loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 将 css 文件整合到 js 文件中</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 编译 sass 文件为 css 文件</span>
          <span class="token string">&#39;sass-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 提取css成单独文件</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 定义输出文件名和目录</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/css/[name].css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const k=p(r,[["render",u],["__file","01.html.vue"]]);export{k as default};
