const e=JSON.parse('{"key":"v-33cf2509","path":"/front_end/js_advanced/echarts/01.html","title":"1.Echarts-介绍","lang":"zh-CN","frontmatter":{"description":"1.Echarts-介绍 常见的数据可视化库： D3.js 目前 Web 端评价最高的 Javascript 可视化工具库(入手难) ECharts.js 百度出品的一个开源 Javascript 数据可视化库 Highcharts.js 国外的前端数据可视化库，非商用免费，被许多国外大公司所使用 AntV 蚂蚁金服全新一代数据可视化解决方案 等等 Highcharts 和 Echarts 就像是 Office 和 WPS 的关系 ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/js_advanced/echarts/01.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"1.Echarts-介绍"}],["meta",{"property":"og:description","content":"1.Echarts-介绍 常见的数据可视化库： D3.js 目前 Web 端评价最高的 Javascript 可视化工具库(入手难) ECharts.js 百度出品的一个开源 Javascript 数据可视化库 Highcharts.js 国外的前端数据可视化库，非商用免费，被许多国外大公司所使用 AntV 蚂蚁金服全新一代数据可视化解决方案 等等 Highcharts 和 Echarts 就像是 Office 和 WPS 的关系 ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"lb"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.Echarts-介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lb\\",\\"url\\":\\"https://lb18237798919.github.io/newblog\\"}]}"]]},"headers":[{"level":2,"title":"3.1使用script标签引入","slug":"_3-1使用script标签引入","link":"#_3-1使用script标签引入","children":[]},{"level":2,"title":"3.2使用CDN方法","slug":"_3-2使用cdn方法","link":"#_3-2使用cdn方法","children":[]},{"level":2,"title":"3.3npm方法","slug":"_3-3npm方法","link":"#_3-3npm方法","children":[]},{"level":2,"title":"4.1title标题","slug":"_4-1title标题","link":"#_4-1title标题","children":[]},{"level":2,"title":"4.2tooltip提示","slug":"_4-2tooltip提示","link":"#_4-2tooltip提示","children":[]},{"level":2,"title":"4.3toolbox工具按钮","slug":"_4-3toolbox工具按钮","link":"#_4-3toolbox工具按钮","children":[]},{"level":2,"title":"4.4legend图例筛选","slug":"_4-4legend图例筛选","link":"#_4-4legend图例筛选","children":[]},{"level":2,"title":"注释：以下为直角坐标系中的常用配置","slug":"注释-以下为直角坐标系中的常用配置","link":"#注释-以下为直角坐标系中的常用配置","children":[]},{"level":2,"title":"4.5grid网格","slug":"_4-5grid网格","link":"#_4-5grid网格","children":[]},{"level":2,"title":"4.6axis坐标轴","slug":"_4-6axis坐标轴","link":"#_4-6axis坐标轴","children":[]},{"level":2,"title":"4.7dataZoom区域缩放","slug":"_4-7datazoom区域缩放","link":"#_4-7datazoom区域缩放","children":[]},{"level":2,"title":"4.8series中的type类型","slug":"_4-8series中的type类型","link":"#_4-8series中的type类型","children":[]},{"level":2,"title":"4.9小结","slug":"_4-9小结","link":"#_4-9小结","children":[]},{"level":2,"title":"4.10案例","slug":"_4-10案例","link":"#_4-10案例","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":12.21,"words":3663},"filePathRelative":"front_end/js_advanced/echarts/01.md","localizedDate":"2024年12月2日","excerpt":"<h1> 1.Echarts-介绍</h1>\\n<p>常见的数据可视化库：</p>\\n<ul>\\n<li>D3.js   目前 Web 端评价最高的 Javascript 可视化工具库(入手难)</li>\\n<li>ECharts.js   百度出品的一个开源 Javascript 数据可视化库</li>\\n<li>Highcharts.js  国外的前端数据可视化库，非商用免费，被许多国外大公司所使用</li>\\n<li>AntV  蚂蚁金服全新一代数据可视化解决方案  等等</li>\\n<li>Highcharts 和 Echarts 就像是 Office 和 WPS 的关系</li>\\n</ul>\\n<blockquote>\\n<p>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 <a href=\\"https://github.com/ecomfe/zrender\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ZRender</a>，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
