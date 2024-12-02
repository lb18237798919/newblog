"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6970],{6262:(t,e)=>{e.A=(t,e)=>{const i=t.__vccOpts||t;for(const[t,l]of e)i[t]=l;return i}},1912:(t,e,i)=>{i.r(e),i.d(e,{comp:()=>r,data:()=>s});var l=i(641);const p={},r=(0,i(6262).A)(p,[["render",function(t,e){return(0,l.uX)(),(0,l.CE)("div",null,e[0]||(e[0]=[(0,l.Fv)('<h1 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h1><h2 id="_1-1-typescript简介" tabindex="-1"><a class="header-anchor" href="#_1-1-typescript简介"><span>1.1 TypeScript简介</span></a></h2><ul><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2F" target="_blank" rel="noopener noreferrer">TS 官方文档</a></li></ul><ol><li><strong><code>TypeScript</code> 简称：TS，是 JavaScript 的超集</strong>，简单来说就是：JS 有的 TS 都有。</li><li>它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。</li><li>TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。</li><li>TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。</li><li>相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。</li></ol><figure><img src="https://i0.hdslb.com/bfs/album/ba8bd25384d6530bff2acf5a425b6c529dd8f6b1.png" alt="image-20220805180538856" tabindex="0" loading="lazy"><figcaption>image-20220805180538856</figcaption></figure><blockquote><p>TS和JS之间的关系其实就是Less/Sass和CSS之间的关系 就像Less/Sass是对CSS进行扩展一样, TS也是对JS进行扩展 就像Less/Sass最终会转换成CSS一样, 我们编写好的TS代码最终也会换成JS</p></blockquote><h2 id="_1-2-为什么要有-typescript" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么要有-typescript"><span>1.2 为什么要有 typescript</span></a></h2><ul><li>背景：JS 的类型系统存在“先天缺陷”弱类型，JS 代码中绝大部分错误都是类型错误（Uncaught TypeError） <ul><li>开发的时候，定义的变量本应该就有类型</li></ul></li><li>这些经常出现的错误，导致了在使用 JS 进行项目开发时，增加了找 Bug、改 Bug 的时间，严重影响开发效率</li><li>从编程语言的动静来区分，<strong>TypeScript 属于静态类型的编程语言</strong>，<strong>JavaScript 属于动态类型的编程语言</strong><ul><li>静态类型：<strong>编译</strong>期做类型检查</li><li>动态类型：<strong>执行</strong>期做类型检查</li></ul></li><li>代码编译和代码执行的顺序：1 编译 2 执行</li><li>对于 JS 来说：需要等到代码真正去执行的时候才能发现错误（晚）</li><li>对于 TS 来说：在代码编译的时候（代码执行前）就可以发现错误（早）</li></ul><p>并且，配合 VSCode 等开发工具，TS 可以提前到<strong>在编写代码的同时就发现代码中的错误</strong>，减少找 Bug、改 Bug 时间</p><p>对比：</p><ul><li>使用 JS： <ol><li>在 VSCode 里面写代码</li><li>在浏览器中运行代码 --&gt; 运行时，才会发现错误【晚】</li></ol></li><li>使用 TS： <ol><li>在 VSCode 里面写代码 --&gt; 写代码的同时，就会发现错误【早】</li><li>在浏览器中运行代码</li></ol></li></ul><blockquote><p>简单来说就是因为JavaScript是弱类型, 很多错误只有在运行时才会被发现 而TypeScript提供了一套静态检测机制, 可以帮助我们在编译时就发现错误</p></blockquote><h2 id="_1-3-typescript相比js的优势" tabindex="-1"><a class="header-anchor" href="#_1-3-typescript相比js的优势"><span>1.3 TypeScript相比JS的优势</span></a></h2><ol><li>更早（写代码的同时）发现错误，减少找Bug、改Bug时间，提升开发效率。</li><li>程序中任何位置的代码都有提示，随时随地的安全感，增强了开发体验。</li><li>强大的类型系统提升了代码的可维护性，使得重构代码更加容易。</li><li>支持最新的ECMAScript语法，优先体验最新的语法，让你走在前端技术的最前沿。</li><li>TS类型判断机制，不需要再代码中的每个地方都演示标注类型，让你在享受优势的同时，尽量降低来了成本。</li></ol><p>除此之外，Vue 3 源码使用 TS 重写、Angular 默认支持 TS、React 与 TS 完美配合，TypeScript 已成为大中型前端 项目的首选编程语言。</p><p>目前，前端最新的开发技术栈：</p><ol><li>React： TS + Hooks</li><li>Vue： TS + Vue3</li></ol><ul><li>注意： Vue2 对 TS 的支持不好~</li></ul><h1 id="_2-typescript初体验" tabindex="-1"><a class="header-anchor" href="#_2-typescript初体验"><span>2.TypeScript初体验</span></a></h1><h2 id="_2-1-typescript-开发环境搭建" tabindex="-1"><a class="header-anchor" href="#_2-1-typescript-开发环境搭建"><span>2.1 TypeScript 开发环境搭建</span></a></h2><p>问题：为什么要安装编译TS的工具包？</p><p>回答：Node.js/浏览器，只认识JS代码，不认识TS代码。需要将TS代码转化为JS代码，然后才能运行。</p><ol><li>下载Node.js <ul><li>64位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi</li><li>32位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x86.msi</li></ul></li><li>安装Node.js</li><li>使用pnpm全局安装typescript <ul><li>进入命令行</li><li>输入：pnpm i -g typescript</li></ul></li></ol><blockquote><ul><li>typescript 包：用来编译 TS 代码的包，提供了 <code>tsc</code> 命令，实现了 TS -&gt; JS 的转化</li><li>验证是否安装成功：tsc –v(查看 typescript 的版本)</li></ul></blockquote><figure><img src="https://i0.hdslb.com/bfs/album/ee182b1c607104b3bf9d296af15389c0b49b14fd.png" alt="image-20220805183234278" tabindex="0" loading="lazy"><figcaption>image-20220805183234278</figcaption></figure><h2 id="_2-2-编译并运行ts代码" tabindex="-1"><a class="header-anchor" href="#_2-2-编译并运行ts代码"><span>2.2 编译并运行TS代码</span></a></h2><ul><li><p>创建 hello.ts 文件（注意：<strong>TS 文件的后缀名为 <code>.ts</code></strong>）</p></li><li><p>将 TS 编译为 JS：在终端中输入命令，<code>tsc hello.ts</code>（此时，在同级目录中会出现一个同名的 JS 文件）</p></li><li><p>执行 JS 代码：在终端中输入命令，<code>node hello.js</code></p></li></ul><p>1 创建 ts 文件 ===&gt; 2 编译 TS ===&gt; 3 执行 JS</p><ul><li>说明：所有合法的 JS 代码都是 TS 代码，有 JS 基础只需要学习 TS 的类型即可</li><li>注意：由 TS 编译生成的 JS 文件，代码中就没有类型信息了</li></ul><p><strong>真正在开发过程中，其实不需要自己手动的通过 tsc 把 ts 文件转成 js 文件，这些工作应该交给webpack或者vite来完成</strong></p><h2 id="_2-3-简化运行ts的步骤" tabindex="-1"><a class="header-anchor" href="#_2-3-简化运行ts的步骤"><span>2.3 简化运行TS的步骤</span></a></h2><p>问题描述：每次修改代码后，都要重复执行两个命令，才能运行TS代码，太繁琐。</p><p>简化方式：使用ts-node包，直接在Node.js中执行TS代码。</p><p>安装命令：<code>pnpm i -g ts-node</code>(ts-node包提供了ts-node命令)。</p><p>使用方式：<code>ts-node hello.ts</code>。(遇到错误了：在安装完ts-node之后执行这个使用命令会报错，原因是缺少安装东西，执行命令 <code>pnpm install -g tslib @types/node</code>)</p><p>解释：ts-node命令在内部偷偷的将TS-&gt;JS，然后，再运行JS代码。</p><h2 id="_2-4-官方playground" tabindex="-1"><a class="header-anchor" href="#_2-4-官方playground"><span>2.4 官方playground</span></a></h2><p>官方也提供了一个在线开发 TypeScript 的云环境——<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fzh%2Fplay" target="_blank" rel="noopener noreferrer">Playground</a>。</p><p>基于它，我们无须在本地安装环境，只需要一个浏览器即可随时学习和编写 TypeScript，同时还可以方便地选择 TypeScript 版本、配置 tsconfig，并对 TypeScript 实时静态类型检测、转译输出 JavaScript 和在线执行。</p><p>而且在体验上，它也一点儿不逊色于任何本地的 IDE，对于刚刚学习 TypeScript 的我们来说，算是一个不错的选择</p>',40)]))}]]),s=JSON.parse('{"path":"/front_end/js_advanced/typescript/01.html","title":"1.简介","lang":"zh-CN","frontmatter":{"description":"1.简介 1.1 TypeScript简介 TS 官方文档 TypeScript 简称：TS，是 JavaScript 的超集，简单来说就是：JS 有的 TS 都有。 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。 TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。 TS完全兼容JS，换言之，任何的JS代码都可以直接当成...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/newblog/front_end/js_advanced/typescript/01.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"1.简介"}],["meta",{"property":"og:description","content":"1.简介 1.1 TypeScript简介 TS 官方文档 TypeScript 简称：TS，是 JavaScript 的超集，简单来说就是：JS 有的 TS 都有。 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。 TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。 TS完全兼容JS，换言之，任何的JS代码都可以直接当成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i0.hdslb.com/bfs/album/ba8bd25384d6530bff2acf5a425b6c529dd8f6b1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T07:29:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T07:29:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.简介\\",\\"image\\":[\\"https://i0.hdslb.com/bfs/album/ba8bd25384d6530bff2acf5a425b6c529dd8f6b1.png\\",\\"https://i0.hdslb.com/bfs/album/ee182b1c607104b3bf9d296af15389c0b49b14fd.png\\"],\\"dateModified\\":\\"2024-12-02T07:29:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.1 TypeScript简介","slug":"_1-1-typescript简介","link":"#_1-1-typescript简介","children":[]},{"level":2,"title":"1.2 为什么要有 typescript","slug":"_1-2-为什么要有-typescript","link":"#_1-2-为什么要有-typescript","children":[]},{"level":2,"title":"1.3 TypeScript相比JS的优势","slug":"_1-3-typescript相比js的优势","link":"#_1-3-typescript相比js的优势","children":[]},{"level":2,"title":"2.1 TypeScript 开发环境搭建","slug":"_2-1-typescript-开发环境搭建","link":"#_2-1-typescript-开发环境搭建","children":[]},{"level":2,"title":"2.2 编译并运行TS代码","slug":"_2-2-编译并运行ts代码","link":"#_2-2-编译并运行ts代码","children":[]},{"level":2,"title":"2.3 简化运行TS的步骤","slug":"_2-3-简化运行ts的步骤","link":"#_2-3-简化运行ts的步骤","children":[]},{"level":2,"title":"2.4 官方playground","slug":"_2-4-官方playground","link":"#_2-4-官方playground","children":[]}],"git":{"createdTime":1733124588000,"updatedTime":1733124588000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":5.34,"words":1602},"filePathRelative":"front_end/js_advanced/typescript/01.md","localizedDate":"2024年12月2日","excerpt":"\\n<h2>1.1 TypeScript简介</h2>\\n<ul>\\n<li><a href=\\"https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2F\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TS 官方文档</a></li>\\n</ul>\\n<ol>\\n<li><strong><code>TypeScript</code> 简称：TS，是 JavaScript 的超集</strong>，简单来说就是：JS 有的 TS 都有。</li>\\n<li>它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。</li>\\n<li>TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。</li>\\n<li>TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。</li>\\n<li>相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。</li>\\n</ol>","autoDesc":true}')}}]);