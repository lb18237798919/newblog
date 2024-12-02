const e=JSON.parse(`{"key":"v-26c5d669","path":"/front_end/other/electron/05.html","title":"05 【electron的一些渲染进程Api】","lang":"zh-CN","frontmatter":{"description":"05 【electron的一些渲染进程Api】 1.clipboard 在系统剪贴板上进行复制和粘贴操作。 在主进程（main process）和渲染进程（renderer process）上均可用。 1.1 readText() 返回字符串 - 剪贴板中的内容为纯文本。 const { clipboard } = require('electron') clipboard.writeText('千锋教育HTML5大前端!') const text = clipboard.readText() console.log(text) // hello i am a bit of text!'","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/front_end/other/electron/05.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"05 【electron的一些渲染进程Api】"}],["meta",{"property":"og:description","content":"05 【electron的一些渲染进程Api】 1.clipboard 在系统剪贴板上进行复制和粘贴操作。 在主进程（main process）和渲染进程（renderer process）上均可用。 1.1 readText() 返回字符串 - 剪贴板中的内容为纯文本。 const { clipboard } = require('electron') clipboard.writeText('千锋教育HTML5大前端!') const text = clipboard.readText() console.log(text) // hello i am a bit of text!'"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05 【electron的一些渲染进程Api】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.clipboard","slug":"_1-clipboard","link":"#_1-clipboard","children":[{"level":3,"title":"1.1 readText()","slug":"_1-1-readtext","link":"#_1-1-readtext","children":[]},{"level":3,"title":"1.2 writeText(text)","slug":"_1-2-writetext-text","link":"#_1-2-writetext-text","children":[]}]},{"level":2,"title":"2.contextBridge","slug":"_2-contextbridge","link":"#_2-contextbridge","children":[]},{"level":2,"title":"3.desktopCapturer","slug":"_3-desktopcapturer","link":"#_3-desktopcapturer","children":[]},{"level":2,"title":"4.ipcRenderer","slug":"_4-ipcrenderer","link":"#_4-ipcrenderer","children":[]},{"level":2,"title":"5.nativeImage","slug":"_5-nativeimage","link":"#_5-nativeimage","children":[{"level":3,"title":"5.1 支持的格式","slug":"_5-1-支持的格式","link":"#_5-1-支持的格式","children":[]},{"level":3,"title":"5.2 高分辨率图像","slug":"_5-2-高分辨率图像","link":"#_5-2-高分辨率图像","children":[]},{"level":3,"title":"5.3 方法","slug":"_5-3-方法","link":"#_5-3-方法","children":[]},{"level":3,"title":"5.4 Class: NativeImage","slug":"_5-4-class-nativeimage","link":"#_5-4-class-nativeimage","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":3.31,"words":993},"filePathRelative":"front_end/other/electron/05.md","localizedDate":"2024年12月2日","excerpt":"<h1> 05 【electron的一些渲染进程Api】</h1>\\n<h2> 1.clipboard</h2>\\n<blockquote>\\n<p>在系统剪贴板上进行复制和粘贴操作。</p>\\n<p>在主进程（main process）和渲染进程（renderer process）上均可用。</p>\\n</blockquote>\\n<h3> 1.1 <code>readText()</code></h3>\\n<p>返回字符串 - 剪贴板中的内容为纯文本。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> clipboard <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">require</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'electron'</span><span class=\\"token punctuation\\">)</span>\\n\\nclipboard<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">writeText</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'千锋教育HTML5大前端!'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">const</span> text <span class=\\"token operator\\">=</span> clipboard<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readText</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// hello i am a bit of text!'</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
