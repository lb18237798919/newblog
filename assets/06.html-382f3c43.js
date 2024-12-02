import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,e as n,a,b as l}from"./app-101fa78b.js";const p={},i={class:"MathJax",jax:"SVG",style:{position:"relative"}},T={style:{"vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.457ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6390 1000","aria-hidden":"true"};function r(c,s){return t(),e("div",null,[s[4]||(s[4]=n('<h1 id="_06-【sass语法介绍-函数】" tabindex="-1"><a class="header-anchor" href="#_06-【sass语法介绍-函数】" aria-hidden="true">#</a> 06 【Sass语法介绍-函数】</h1><blockquote><p>这篇文章只更新了颜色函数，由于Sass使用时间过短，其它函数暂时不太会用</p></blockquote><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>Sass 中的函数，这在 Sass 中是比较强大的一个功能，同时使用场景和语法也比较多，所以本节内容篇幅较长，但你一定要好好学习， Sass 函数很重要！在 Sass 中函数中几乎可以用到前面你学的所有章节的内容，所以说函数包括万象同时功能也非常强大，本节我们将详细讲解 Sass 中各种函数的功能和用法。</p><h2 id="_2-什么是函数" tabindex="-1"><a class="header-anchor" href="#_2-什么是函数" aria-hidden="true">#</a> 2.什么是函数？</h2><p>函数是一段可以被另外的程序或代码调用的“子程序”，一个函数由称为函数体的一系列代码语句组成，并且函数也可以接收值，在大多数语言中函数都是这样的，Sass 中的函数也是一样。</p><h2 id="_3-sass-函数简介" tabindex="-1"><a class="header-anchor" href="#_3-sass-函数简介" aria-hidden="true">#</a> 3.Sass 函数简介</h2><p>Sass 为我们提供了很多内置模块，其中就包含了很多函数（包括一些指令），我们可以通过 @use 去加载它们，然后我们就可以调用了，当然还有一些函数可以直接在 CSS 语句中调用，在 Sass 中常用的函数有：</p><ul><li>字符串函数</li><li>数字函数</li><li>列表函数</li><li>Introspection函数</li><li>条件函数</li><li>Map 函数</li><li>颜色函数</li></ul><p>上面这些函数为我们提供了强大而丰富的功能来更高效地编写样式，下面我们来详细讲解 Sass 函数。</p><h2 id="_4-颜色函数" tabindex="-1"><a class="header-anchor" href="#_4-颜色函数" aria-hidden="true">#</a> 4.颜色函数</h2><p>Sass 中提供了非常非常多的颜色函数用来处理颜色值，它们很多需要你具有专业的调色及配色知识才能发挥出作用，所以本节我们不讲的那么复杂，本节内容中我们只讲几种常见的、比较简单的颜色函数，其他特别复杂的用于调色的函数在以后你可以再慢慢研究。</p><h3 id="_4-1-用于获取通道色值的函数" tabindex="-1"><a class="header-anchor" href="#_4-1-用于获取通道色值的函数" aria-hidden="true">#</a> 4.1 用于获取通道色值的函数</h3>',13)),a("p",null,[s[2]||(s[2]=l("Sass 提供了可以获取一个色值中红色通道、绿色通道和蓝色通道色值的函数，它们分别是 red(")),a("mjx-container",i,[(t(),e("svg",T,s[0]||(s[0]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g data-mml-node="mi" transform="translate(433,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(918,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(1216,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(1701,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(2152,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(2541,0)"><g data-mml-node="mo"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">、</text></g></g><g data-mml-node="mi" transform="translate(3541,0)"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"></path></g><g data-mml-node="mi" transform="translate(4018,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(4469,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(4935,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(5401,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(6001,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g></g></g>',1)]))),s[1]||(s[1]=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"c"),a("mi",null,"o"),a("mi",null,"l"),a("mi",null,"o"),a("mi",null,"r"),a("mo",{stretchy:"false"},")"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"、")]),a("mi",null,"g"),a("mi",null,"r"),a("mi",null,"e"),a("mi",null,"e"),a("mi",null,"n"),a("mo",{stretchy:"false"},"(")])],-1))]),s[3]||(s[3]=l("color) 和 blue($color)。你可能还不太了解这三种通道是什么，不要紧，只要知道这三种函数和它的使用就可以。我们举例看下："))]),s[5]||(s[5]=n(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">blue</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=&gt; 211</span>
<span class="token function">red</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=&gt; 186</span>
<span class="token function">green</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=&gt; 85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-saturate-color-amount" tabindex="-1"><a class="header-anchor" href="#_4-2-saturate-color-amount" aria-hidden="true">#</a> 4.2 saturate($color, $amount)</h3><p>saturate($color, $amount) 函数用于调整 $color 的饱和度，第 1 个参数 $color 是一个颜色值，第 2 个参数是 0% ～ 100% 之间的百分数，其返回值也是一个颜色值。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">saturate</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #c740e8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-scale-color" tabindex="-1"><a class="header-anchor" href="#_4-3-scale-color" aria-hidden="true">#</a> 4.3 scale-color(…)</h3><p>这是一个非常强大的颜色函数，它<strong>接收很多个参数</strong>，可以<strong>调整一个色值的很多属性</strong>，包括这个颜色的红、绿、蓝通道，以及亮度等等，我们只能举例来直观的看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> 15%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #c455d3  调整红色通道</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$blue</span></span><span class="token punctuation">:</span> 15%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #ba55da  调整蓝色通道</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> -10%<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$saturation</span></span><span class="token punctuation">:</span> 10%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #b338d2 调整亮度和饱和度</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$alpha</span></span><span class="token punctuation">:</span> -30%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; rgba(186, 85, 211, 0.7)  调整不透明度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子可以看到颜色函数提供了非常强大的用于调色的函数，驾驭它的前提是你要有非常丰富的调色知识以及一定的美术基础。在实际的项目中我们非常少的用到颜色函数，因为一般都是由公司的 UI 设计师来进行调色，所以作为入门教程，你只需要了解 Sass 中的颜色函数就好。</p><h2 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结" aria-hidden="true">#</a> 5. 小结</h2><p>本节内容我们讲了 Sass 提供的各种各样的函数，基本覆盖到了比较常用的、常见的函数，它们分别是：</p><ul><li>字符串函数</li><li>数字函数</li><li>列表函数</li><li>Introspection函数</li><li>条件函数</li><li>Map 函数</li><li>颜色函数</li></ul>`,11))])}const u=o(p,[["render",r],["__file","06.html.vue"]]);export{u as default};