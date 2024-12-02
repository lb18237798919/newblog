const t=JSON.parse('{"key":"v-1ff273ed","path":"/front_end/other/electron/01.html","title":"01 【创建一个electron应用】","lang":"zh-CN","frontmatter":{"description":"01 【创建一个electron应用】 1.Electron 初探 1.1 常见的桌面GUI工具介绍 名称 语音 优点 缺点 QT C++ 跨平台、性能好、生态好 依赖多，程序包大 PyQT Python 底层集成度高、易上手 授权问题 WPF C# 类库丰富、扩展灵活 只支持Windows，程序包大 WinForm C# 性能好，组件丰富，易上手 只支持Windows，UI差 Swing Java 基于AWT，组件丰富 性能差，UI一般 NW.js JS 跨平台性好，界面美观 底层交互差、性能差，包大 Electron JS 相比NW发展更好 底层交互差、性能差，包大 CEF C++ 性能好，灵活集成，UI美观 占用资源多，包大","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/other/electron/01.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"01 【创建一个electron应用】"}],["meta",{"property":"og:description","content":"01 【创建一个electron应用】 1.Electron 初探 1.1 常见的桌面GUI工具介绍 名称 语音 优点 缺点 QT C++ 跨平台、性能好、生态好 依赖多，程序包大 PyQT Python 底层集成度高、易上手 授权问题 WPF C# 类库丰富、扩展灵活 只支持Windows，程序包大 WinForm C# 性能好，组件丰富，易上手 只支持Windows，UI差 Swing Java 基于AWT，组件丰富 性能差，UI一般 NW.js JS 跨平台性好，界面美观 底层交互差、性能差，包大 Electron JS 相比NW发展更好 底层交互差、性能差，包大 CEF C++ 性能好，灵活集成，UI美观 占用资源多，包大"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"dselegent"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01 【创建一个electron应用】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.Electron 初探","slug":"_1-electron-初探","link":"#_1-electron-初探","children":[{"level":3,"title":"1.1 常见的桌面GUI工具介绍","slug":"_1-1-常见的桌面gui工具介绍","link":"#_1-1-常见的桌面gui工具介绍","children":[]},{"level":3,"title":"1.2 桌面端设计与开发要点","slug":"_1-2-桌面端设计与开发要点","link":"#_1-2-桌面端设计与开发要点","children":[]}]},{"level":2,"title":"2.初始化 npm 项目","slug":"_2-初始化-npm-项目","link":"#_2-初始化-npm-项目","children":[]},{"level":2,"title":"3.运行 Electron 应用","slug":"_3-运行-electron-应用","link":"#_3-运行-electron-应用","children":[]},{"level":2,"title":"4.将网页装载到 BrowserWindow","slug":"_4-将网页装载到-browserwindow","link":"#_4-将网页装载到-browserwindow","children":[{"level":3,"title":"4.1 导入模块","slug":"_4-1-导入模块","link":"#_4-1-导入模块","children":[]},{"level":3,"title":"4.2 将可复用的函数写入实例化窗口","slug":"_4-2-将可复用的函数写入实例化窗口","link":"#_4-2-将可复用的函数写入实例化窗口","children":[]},{"level":3,"title":"4.3 在应用准备就绪时调用函数","slug":"_4-3-在应用准备就绪时调用函数","link":"#_4-3-在应用准备就绪时调用函数","children":[]}]},{"level":2,"title":"5.管理应用的窗口生命周期","slug":"_5-管理应用的窗口生命周期","link":"#_5-管理应用的窗口生命周期","children":[{"level":3,"title":"5.1 关闭所有窗口时退出应用 (Windows & Linux)","slug":"_5-1-关闭所有窗口时退出应用-windows-linux","link":"#_5-1-关闭所有窗口时退出应用-windows-linux","children":[]},{"level":3,"title":"5.2 如果没有窗口打开则打开一个窗口 (macOS)","slug":"_5-2-如果没有窗口打开则打开一个窗口-macos","link":"#_5-2-如果没有窗口打开则打开一个窗口-macos","children":[]}]},{"level":2,"title":"6.完整实现代码","slug":"_6-完整实现代码","link":"#_6-完整实现代码","children":[]},{"level":2,"title":"7.摘要","slug":"_7-摘要","link":"#_7-摘要","children":[]},{"level":2,"title":"8.BrowserWindow 常用配置","slug":"_8-browserwindow-常用配置","link":"#_8-browserwindow-常用配置","children":[]},{"level":2,"title":"9.Electron 核心概念","slug":"_9-electron-核心概念","link":"#_9-electron-核心概念","children":[{"level":3,"title":"9.1 Electron 主进程与渲染进程","slug":"_9-1-electron-主进程与渲染进程","link":"#_9-1-electron-主进程与渲染进程","children":[]},{"level":3,"title":"9.2 主进程事件生命周期","slug":"_9-2-主进程事件生命周期","link":"#_9-2-主进程事件生命周期","children":[]},{"level":3,"title":"9.3 渲染进程如何使用 Node 模块","slug":"_9-3-渲染进程如何使用-node-模块","link":"#_9-3-渲染进程如何使用-node-模块","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":10.9,"words":3271},"filePathRelative":"front_end/other/electron/01.md","localizedDate":"2024年12月2日","excerpt":"<h1> 01 【创建一个electron应用】</h1>\\n<h2> 1.Electron 初探</h2>\\n<h3> 1.1 常见的桌面GUI工具介绍</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>语音</th>\\n<th>优点</th>\\n<th>缺点</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>QT</td>\\n<td>C++</td>\\n<td>跨平台、性能好、生态好</td>\\n<td>依赖多，程序包大</td>\\n</tr>\\n<tr>\\n<td>PyQT</td>\\n<td>Python</td>\\n<td>底层集成度高、易上手</td>\\n<td>授权问题</td>\\n</tr>\\n<tr>\\n<td>WPF</td>\\n<td>C#</td>\\n<td>类库丰富、扩展灵活</td>\\n<td>只支持Windows，程序包大</td>\\n</tr>\\n<tr>\\n<td>WinForm</td>\\n<td>C#</td>\\n<td>性能好，组件丰富，易上手</td>\\n<td>只支持Windows，UI差</td>\\n</tr>\\n<tr>\\n<td>Swing</td>\\n<td>Java</td>\\n<td>基于AWT，组件丰富</td>\\n<td>性能差，UI一般</td>\\n</tr>\\n<tr>\\n<td>NW.js</td>\\n<td>JS</td>\\n<td>跨平台性好，界面美观</td>\\n<td>底层交互差、性能差，包大</td>\\n</tr>\\n<tr>\\n<td>Electron</td>\\n<td>JS</td>\\n<td>相比NW发展更好</td>\\n<td>底层交互差、性能差，包大</td>\\n</tr>\\n<tr>\\n<td>CEF</td>\\n<td>C++</td>\\n<td>性能好，灵活集成，UI美观</td>\\n<td>占用资源多，包大</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
