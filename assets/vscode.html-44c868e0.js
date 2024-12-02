const e=JSON.parse('{"key":"v-71b3b66f","path":"/tool/efficiency/software/vscode.html","title":"Visual Studio Code 配置","lang":"zh-CN","frontmatter":{"description":"茂茂的 Visual Studio Code 配置，记录扩展插件、使用小技巧和个人配置","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/tool/efficiency/software/vscode.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"Visual Studio Code 配置"}],["meta",{"property":"og:description","content":"茂茂的 Visual Studio Code 配置，记录扩展插件、使用小技巧和个人配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Visual Studio Code 配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"扩展插件推荐","slug":"扩展插件推荐","link":"#扩展插件推荐","children":[{"level":3,"title":"主题相关","slug":"主题相关","link":"#主题相关","children":[]},{"level":3,"title":"HTML 相关","slug":"html-相关","link":"#html-相关","children":[]},{"level":3,"title":"React 相关","slug":"react-相关","link":"#react-相关","children":[]},{"level":3,"title":"Vue 相关","slug":"vue-相关","link":"#vue-相关","children":[]},{"level":3,"title":"CSS 相关","slug":"css-相关","link":"#css-相关","children":[]},{"level":3,"title":"AI 代码提示和生成","slug":"ai-代码提示和生成","link":"#ai-代码提示和生成","children":[]},{"level":3,"title":"Markdown 相关","slug":"markdown-相关","link":"#markdown-相关","children":[]},{"level":3,"title":"Git 相关","slug":"git-相关","link":"#git-相关","children":[]},{"level":3,"title":"格式和代码检查相关","slug":"格式和代码检查相关","link":"#格式和代码检查相关","children":[]},{"level":3,"title":"调试相关","slug":"调试相关","link":"#调试相关","children":[]},{"level":3,"title":"语法支持","slug":"语法支持","link":"#语法支持","children":[]},{"level":3,"title":"开发体验提升","slug":"开发体验提升","link":"#开发体验提升","children":[]},{"level":3,"title":"微信小程序相关","slug":"微信小程序相关","link":"#微信小程序相关","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]},{"level":2,"title":"使用小技巧","slug":"使用小技巧","link":"#使用小技巧","children":[{"level":3,"title":"删除空行","slug":"删除空行","link":"#删除空行","children":[]}]},{"level":2,"title":"安装 code 命令","slug":"安装-code-命令","link":"#安装-code-命令","children":[]},{"level":2,"title":"webpack 项目识别 alias","slug":"webpack-项目识别-alias","link":"#webpack-项目识别-alias","children":[]},{"level":2,"title":"推荐配置","slug":"推荐配置","link":"#推荐配置","children":[]},{"level":2,"title":"代码片段","slug":"代码片段","link":"#代码片段","children":[]},{"level":2,"title":"其他","slug":"其他-1","link":"#其他-1","children":[{"level":3,"title":"扩展插件开发","slug":"扩展插件开发","link":"#扩展插件开发","children":[]},{"level":3,"title":"下载小技巧","slug":"下载小技巧","link":"#下载小技巧","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":6.74,"words":2023},"filePathRelative":"tool/efficiency/software/vscode.md","localizedDate":"2024年12月2日","excerpt":"<h1> Visual Studio Code 配置</h1>\\n<h2> 扩展插件推荐</h2>\\n<h3> 主题相关</h3>\\n<ul>\\n<li>\\n<p><code>One Dark Pro</code></p>\\n<ul>\\n<li>黑色主题</li>\\n<li><a href=\\"https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件地址</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>Shades of Purple</code></p>\\n<ul>\\n<li>紫色主题（来自彤姐的推荐：没有什么比骚更重要）</li>\\n<li><a href=\\"https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件地址</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>Dracula Official</code></p>\\n<ul>\\n<li>黑色主题</li>\\n<li><a href=\\"https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件地址</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>Bluloco Dark</code></p>\\n<ul>\\n<li>黑色主题</li>\\n<li><a href=\\"https://marketplace.visualstudio.com/items?itemName=uloco.theme-bluloco-dark\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件地址</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>Material Icon Theme</code></p>\\n<ul>\\n<li>文件图标美化</li>\\n<li><a href=\\"https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件地址</a></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>background</code></p>\\n<ul>\\n<li>自定义背景</li>\\n<li><a href=\\"https://marketplace.visualstudio.com/items?itemName=shalldie.background\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件地址</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};
