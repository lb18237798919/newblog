const e=JSON.parse('{"key":"v-287aaf08","path":"/front_end/other/electron/06.html","title":"06 【electron对话框】","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.选择文件","slug":"_1-选择文件","link":"#_1-选择文件","children":[]},{"level":2,"title":"2.保存文件","slug":"_2-保存文件","link":"#_2-保存文件","children":[]},{"level":2,"title":"3.消息框","slug":"_3-消息框","link":"#_3-消息框","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":6.32,"words":1896},"filePathRelative":"front_end/other/electron/06.md","localizedDate":"2024年12月2日","excerpt":"<h1> 06 【electron对话框】</h1>\\n<blockquote>\\n<p>显示用于打开和保存文件、警报等的本机系统对话框</p>\\n</blockquote>\\n<h2> 1.选择文件</h2>\\n<p><code>browserWindow</code> 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框。</p>\\n<p><code>dialog.showOpenDialog([browserWindow, ]options)</code></p>\\n<ul>\\n<li><code>browserWindow</code> <a href=\\"https://www.electronjs.org/zh/docs/latest/api/browser-window\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">BrowserWindow</a> (可选)</li>\\n<li><code>选项</code> 对象\\n<ul>\\n<li><code>title</code> string (可选) - 对话框窗口的标题</li>\\n<li><code>defaultPath</code> string (可选) - 对话框的默认展示路径</li>\\n<li><code>buttonLabel</code> string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。</li>\\n<li><code>filters</code> [FileFilter<a href=\\"https://www.electronjs.org/zh/docs/latest/api/structures/file-filter\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">]</a> (可选)</li>\\n<li><code>properties</code> string[] (可选) - 包含对话框相关属性。 支持以下属性值:\\n<ul>\\n<li><code>openFile</code> - 允许选择文件</li>\\n<li><code>openDirectory</code> - 允许选择文件夹</li>\\n<li><code>multiSelections</code>-允许多选。</li>\\n<li><code>showHiddenFiles</code>-显示对话框中的隐藏文件。</li>\\n<li><code>createDirectory</code> <em>macOS</em> -允许你通过对话框的形式创建新的目录。</li>\\n<li><code>promptToCreate</code> <em>Windows</em>-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。</li>\\n<li><code>noResolveAliases</code> <em>macOS</em>-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。</li>\\n<li><code>treatPackageAsDirectory</code> <em>macOS</em> -将包 (如 <code>.app </code>文件夹) 视为目录而不是文件。</li>\\n<li><code>dontAddToRecent</code> <em>Windows</em> - 不要将正在打开的项目添加到最近的文档列表中。</li>\\n</ul>\\n</li>\\n<li><code>message</code> string (可选) <em>macOS</em> -显示在输入框上方的消息。</li>\\n<li><code>securityScopedBookmarks</code> boolean (可选) <em>macOS</em> <em>mas</em> - 在打包提交到Mac App Store时创建 <a href=\\"https://developer.apple.com/library/content/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">security scoped bookmarks</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};
