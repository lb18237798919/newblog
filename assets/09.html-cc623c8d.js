const e=JSON.parse('{"key":"v-2d9938e5","path":"/front_end/other/electron/09.html","title":"09 【进程间通信】","lang":"zh-CN","frontmatter":{"description":"09 【进程间通信】 进程间通信 (IPC) 是在 Electron 中构建功能丰富的桌面应用程序的关键部分之一。 由于主进程和渲染器进程在 Electron 的进程模型具有不同的职责，因此 IPC 是执行许多常见任务的唯一方法，例如从 UI 调用原生 API 或从原生菜单触发 Web 内容的更改。 官方文档： ipcMain ipcRenderer webContents","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/front_end/other/electron/09.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"09 【进程间通信】"}],["meta",{"property":"og:description","content":"09 【进程间通信】 进程间通信 (IPC) 是在 Electron 中构建功能丰富的桌面应用程序的关键部分之一。 由于主进程和渲染器进程在 Electron 的进程模型具有不同的职责，因此 IPC 是执行许多常见任务的唯一方法，例如从 UI 调用原生 API 或从原生菜单触发 Web 内容的更改。 官方文档： ipcMain ipcRenderer webContents"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09 【进程间通信】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.IPC 通道","slug":"_1-ipc-通道","link":"#_1-ipc-通道","children":[]},{"level":2,"title":"2.渲染器进程到主进程（单向）","slug":"_2-渲染器进程到主进程-单向","link":"#_2-渲染器进程到主进程-单向","children":[{"level":3,"title":"2.1 使用 ipcMain.on 监听事件","slug":"_2-1-使用-ipcmain-on-监听事件","link":"#_2-1-使用-ipcmain-on-监听事件","children":[]},{"level":3,"title":"2.2 通过预加载脚本暴露 ipcRenderer.send","slug":"_2-2-通过预加载脚本暴露-ipcrenderer-send","link":"#_2-2-通过预加载脚本暴露-ipcrenderer-send","children":[]},{"level":3,"title":"2.3 构建渲染器进程 UI","slug":"_2-3-构建渲染器进程-ui","link":"#_2-3-构建渲染器进程-ui","children":[]}]},{"level":2,"title":"3.渲染器进程到主进程（双向）","slug":"_3-渲染器进程到主进程-双向","link":"#_3-渲染器进程到主进程-双向","children":[{"level":3,"title":"3.1 使用 ipcMain.handle 监听事件","slug":"_3-1-使用-ipcmain-handle-监听事件","link":"#_3-1-使用-ipcmain-handle-监听事件","children":[]},{"level":3,"title":"3.2 通过预加载脚本暴露 ipcRenderer.invoke","slug":"_3-2-通过预加载脚本暴露-ipcrenderer-invoke","link":"#_3-2-通过预加载脚本暴露-ipcrenderer-invoke","children":[]},{"level":3,"title":"3.3 构建渲染器进程 UI","slug":"_3-3-构建渲染器进程-ui","link":"#_3-3-构建渲染器进程-ui","children":[]},{"level":3,"title":"3.4 注意：对于旧方法","slug":"_3-4-注意-对于旧方法","link":"#_3-4-注意-对于旧方法","children":[]}]},{"level":2,"title":"4.主进程到渲染器进程","slug":"_4-主进程到渲染器进程","link":"#_4-主进程到渲染器进程","children":[{"level":3,"title":"4.1 使用 webContents 模块发送消息","slug":"_4-1-使用-webcontents-模块发送消息","link":"#_4-1-使用-webcontents-模块发送消息","children":[]},{"level":3,"title":"4.2 通过预加载脚本暴露 ipcRenderer.on","slug":"_4-2-通过预加载脚本暴露-ipcrenderer-on","link":"#_4-2-通过预加载脚本暴露-ipcrenderer-on","children":[]},{"level":3,"title":"4.3 构建渲染器进程 UI","slug":"_4-3-构建渲染器进程-ui","link":"#_4-3-构建渲染器进程-ui","children":[]},{"level":3,"title":"4.4 可选：返回一个回复","slug":"_4-4-可选-返回一个回复","link":"#_4-4-可选-返回一个回复","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":8,"words":2400},"filePathRelative":"front_end/other/electron/09.md","localizedDate":"2024年12月2日","excerpt":"<h1> 09 【进程间通信】</h1>\\n<p>进程间通信 (IPC) 是在 Electron 中构建功能丰富的桌面应用程序的关键部分之一。 由于主进程和渲染器进程在 Electron 的进程模型具有不同的职责，因此 IPC 是执行许多常见任务的唯一方法，例如从 UI 调用原生 API 或从原生菜单触发 Web 内容的更改。</p>\\n<blockquote>\\n<p>官方文档：</p>\\n<p><a href=\\"https://www.electronjs.org/docs/latest/api/ipc-main\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ipcMain</a></p>\\n<p><a href=\\"https://www.electronjs.org/docs/latest/api/ipc-renderer\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ipcRenderer</a></p>\\n<p><a href=\\"https://www.electronjs.org/docs/latest/api/web-contents#contentssendchannel-args\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">webContents</a></p>\\n</blockquote>","autoDesc":true}');export{e as data};
