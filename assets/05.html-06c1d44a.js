const e=JSON.parse('{"key":"v-81b3c308","path":"/professional_knowledge/software_engineer/05.html","title":"05 【详细设计】","lang":"zh-CN","frontmatter":{"description":"05 【详细设计】 根本目标：确定应该怎样具体地实现所要求的系统。 详细设计阶段的任务不是具体地编写程序，而是要设计出程序的“蓝图”。 详细设计的结果基本上决定了最终的程序代码的质量。 1.结构程序设计 定义 结构化程序设计采用自顶向下、逐步求精的设计方法，各个模块通过“顺序、选择、循环”的控制结构进行连接，并且只有一个入口、一个出口。 结构化程序设计的原则可表示为：程序=(算法)+(数据结构)。 如果一个程序的代码块仅仅通过顺序、选择和循环这3 种基本控制结构进行连接，并且每个代码块只有一个入口和一个出口，则称这个程序是结构化的。","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/professional_knowledge/software_engineer/05.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"05 【详细设计】"}],["meta",{"property":"og:description","content":"05 【详细设计】 根本目标：确定应该怎样具体地实现所要求的系统。 详细设计阶段的任务不是具体地编写程序，而是要设计出程序的“蓝图”。 详细设计的结果基本上决定了最终的程序代码的质量。 1.结构程序设计 定义 结构化程序设计采用自顶向下、逐步求精的设计方法，各个模块通过“顺序、选择、循环”的控制结构进行连接，并且只有一个入口、一个出口。 结构化程序设计的原则可表示为：程序=(算法)+(数据结构)。 如果一个程序的代码块仅仅通过顺序、选择和循环这3 种基本控制结构进行连接，并且每个代码块只有一个入口和一个出口，则称这个程序是结构化的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05 【详细设计】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.结构程序设计","slug":"_1-结构程序设计","link":"#_1-结构程序设计","children":[]},{"level":2,"title":"2.人机界面设计","slug":"_2-人机界面设计","link":"#_2-人机界面设计","children":[{"level":3,"title":"2.1 设计问题","slug":"_2-1-设计问题","link":"#_2-1-设计问题","children":[]},{"level":3,"title":"2.2 设计过程","slug":"_2-2-设计过程","link":"#_2-2-设计过程","children":[]},{"level":3,"title":"2.3 人机界面设计指南","slug":"_2-3-人机界面设计指南","link":"#_2-3-人机界面设计指南","children":[]}]},{"level":2,"title":"3.详细设计工具","slug":"_3-详细设计工具","link":"#_3-详细设计工具","children":[{"level":3,"title":"3.1 程序流程图","slug":"_3-1-程序流程图","link":"#_3-1-程序流程图","children":[]},{"level":3,"title":"3.2 盒图(N-S图）","slug":"_3-2-盒图-n-s图","link":"#_3-2-盒图-n-s图","children":[]},{"level":3,"title":"3.3 PAD图","slug":"_3-3-pad图","link":"#_3-3-pad图","children":[]},{"level":3,"title":"3.4 判定表","slug":"_3-4-判定表","link":"#_3-4-判定表","children":[]},{"level":3,"title":"3.5 判定树","slug":"_3-5-判定树","link":"#_3-5-判定树","children":[]},{"level":3,"title":"3.6 过程设计语言","slug":"_3-6-过程设计语言","link":"#_3-6-过程设计语言","children":[]}]},{"level":2,"title":"4.程序复杂程度的定量度量","slug":"_4-程序复杂程度的定量度量","link":"#_4-程序复杂程度的定量度量","children":[{"level":3,"title":"4.1 McCabe方法","slug":"_4-1-mccabe方法","link":"#_4-1-mccabe方法","children":[]},{"level":3,"title":"4.2 Halstead方法","slug":"_4-2-halstead方法","link":"#_4-2-halstead方法","children":[]}]},{"level":2,"title":"5.本章小结","slug":"_5-本章小结","link":"#_5-本章小结","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":15.34,"words":4602},"filePathRelative":"professional_knowledge/software_engineer/05.md","localizedDate":"2024年12月2日","excerpt":"<h1> 05 【详细设计】</h1>\\n<p>根本目标：确定应该怎样具体地实现所要求的系统。</p>\\n<p>详细设计阶段的任务不是具体地编写程序，而是要设计出程序的“蓝图”。</p>\\n<p>详细设计的结果基本上决定了最终的程序代码的质量。</p>\\n<h2> 1.结构程序设计</h2>\\n<p><strong>定义</strong></p>\\n<ul>\\n<li>结构化程序设计采用<strong>自顶向下、逐步求精</strong>的设计方法，各个模块通过“顺序、选择、循环”的控制结构进行连接，并且只有一个入口、一个出口。</li>\\n<li>结构化程序设计的原则可表示为：程序=(算法)+(数据结构)。</li>\\n<li>如果一个程序的代码块仅仅通过<strong>顺序、选择和循环</strong>这3 种基本控制结构进行连接，并且<strong>每个代码块只有一个入口和一个出口，则称这个程序是结构化的。</strong></li>\\n</ul>","autoDesc":true}');export{e as data};
