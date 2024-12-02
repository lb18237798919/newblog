import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as t,e as i}from"./app-fe9da4b4.js";const c={};function e(S,a){return r(),t("div",null,a[0]||(a[0]=[i('<h1 id="_01-【es6-介绍】" tabindex="-1"><a class="header-anchor" href="#_01-【es6-介绍】" aria-hidden="true">#</a> 01 【ES6 介绍】</h1><p>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p><h2 id="_1-ecmascript-和-javascript-的关系" tabindex="-1"><a class="header-anchor" href="#_1-ecmascript-和-javascript-的关系" aria-hidden="true">#</a> 1.ECMAScript 和 JavaScript 的关系</h2><p>一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？</p><p>要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p><p>该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。</p><p>因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。</p><h2 id="_2-es6-与-ecmascript-2015-的关系" tabindex="-1"><a class="header-anchor" href="#_2-es6-与-ecmascript-2015-的关系" aria-hidden="true">#</a> 2.ES6 与 ECMAScript 2015 的关系</h2><p>ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？</p><p>2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。</p><p>但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。</p><p>但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。</p><p>标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。</p><p>ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的<code>includes</code>方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。</p><p>因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。</p><h2 id="_3-es6简介" tabindex="-1"><a class="header-anchor" href="#_3-es6简介" aria-hidden="true">#</a> 3.ES6简介</h2><p>ES6 = ECMAScript 这门标准的第 6 代版本（2015）。</p><ul><li>ECMAScript 是语言的标准</li><li>6 是版本号</li></ul><p>ECMA：欧洲计算机制造商协会</p><p>具体内容：语法 + API</p><p>历史版本：ES1——&gt;3、ES5——&gt;6（ES4 被废弃了）</p><p>我们目前使用 JS 的大部分内容都是 ES3 <strong>的部分</strong>。</p><p>ES 与 JS 的关系：<code>JavaScript(浏览器端) = ESMAScript(语法+API) + DOM + BOM</code></p><p>ES6 的兼容性：</p><ul><li>主流浏览器的最新版本几乎都全部支持 ES6</li><li>IE 老版本等不支持的浏览器，可以使用 Babel 转码</li><li><strong>总之，请放心大胆地使用 ES6</strong></li></ul>',25)]))}const d=p(c,[["render",e],["__file","01.html.vue"]]);export{d as default};
