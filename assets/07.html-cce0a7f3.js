const e=JSON.parse('{"key":"v-2667f49e","path":"/front_end/front_end_base/javascript/07.html","title":"07 【数组及常用方法】","lang":"zh-CN","frontmatter":{"description":"07 【数组及常用方法】 1.什么是数组 数组（Array），顾名思义：用来存储一组相关值的类型。 数组也是一个对象，是一个用来存储数据的对象和Object类似，但是它的存储效率比普通对象要高 数组中保存的内容我们称为元素\\t 数组使用索引（index）来操作元素 索引指由0开始的整数 数组可以方便地对一组值进行求和、计算平均值、逐项遍历等操作。 var scoreArr = [87, 89, 93, 71, 100, 68, 94, 88];","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_base/javascript/07.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"07 【数组及常用方法】"}],["meta",{"property":"og:description","content":"07 【数组及常用方法】 1.什么是数组 数组（Array），顾名思义：用来存储一组相关值的类型。 数组也是一个对象，是一个用来存储数据的对象和Object类似，但是它的存储效率比普通对象要高 数组中保存的内容我们称为元素\\t 数组使用索引（index）来操作元素 索引指由0开始的整数 数组可以方便地对一组值进行求和、计算平均值、逐项遍历等操作。 var scoreArr = [87, 89, 93, 71, 100, 68, 94, 88];"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"lb"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07 【数组及常用方法】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lb\\",\\"url\\":\\"https://lb18237798919.github.io/newblog\\"}]}"]]},"headers":[{"level":2,"title":"1.什么是数组","slug":"_1-什么是数组","link":"#_1-什么是数组","children":[]},{"level":2,"title":"2.数组的定义","slug":"_2-数组的定义","link":"#_2-数组的定义","children":[{"level":3,"title":"2.1 方括号定义法","slug":"_2-1-方括号定义法","link":"#_2-1-方括号定义法","children":[]},{"level":3,"title":"2.2 new 定义法","slug":"_2-2-new-定义法","link":"#_2-2-new-定义法","children":[]}]},{"level":2,"title":"3.访问数组项","slug":"_3-访问数组项","link":"#_3-访问数组项","children":[]},{"level":2,"title":"4.数组的长度","slug":"_4-数组的长度","link":"#_4-数组的长度","children":[]},{"level":2,"title":"5.更改数组项","slug":"_5-更改数组项","link":"#_5-更改数组项","children":[]},{"level":2,"title":"6.数组的遍历","slug":"_6-数组的遍历","link":"#_6-数组的遍历","children":[]},{"level":2,"title":"8.数组类型的检测","slug":"_8-数组类型的检测","link":"#_8-数组类型的检测","children":[]},{"level":2,"title":"9.二维数组","slug":"_9-二维数组","link":"#_9-二维数组","children":[]},{"level":2,"title":"10.基本类型值和引用类型值","slug":"_10-基本类型值和引用类型值","link":"#_10-基本类型值和引用类型值","children":[]},{"level":2,"title":"11.数组的浅拷贝","slug":"_11-数组的浅拷贝","link":"#_11-数组的浅拷贝","children":[]},{"level":2,"title":"数组的常用方法","slug":"数组的常用方法","link":"#数组的常用方法","children":[]},{"level":2,"title":"12.数组的头尾操作","slug":"_12-数组的头尾操作","link":"#_12-数组的头尾操作","children":[{"level":3,"title":"12.1 push() 方法","slug":"_12-1-push-方法","link":"#_12-1-push-方法","children":[]},{"level":3,"title":"12.2 pop() 方法","slug":"_12-2-pop-方法","link":"#_12-2-pop-方法","children":[]},{"level":3,"title":"12.3 unshift() 方法","slug":"_12-3-unshift-方法","link":"#_12-3-unshift-方法","children":[]},{"level":3,"title":"12.4 shift() 方法","slug":"_12-4-shift-方法","link":"#_12-4-shift-方法","children":[]}]},{"level":2,"title":"13.splice() 方法","slug":"_13-splice-方法","link":"#_13-splice-方法","children":[]},{"level":2,"title":"14.slice() 方法","slug":"_14-slice-方法","link":"#_14-slice-方法","children":[]},{"level":2,"title":"15.join() 和 split() 方法","slug":"_15-join-和-split-方法","link":"#_15-join-和-split-方法","children":[]},{"level":2,"title":"16.字符串和数组更多相关性","slug":"_16-字符串和数组更多相关性","link":"#_16-字符串和数组更多相关性","children":[]},{"level":2,"title":"17.concat() 方法","slug":"_17-concat-方法","link":"#_17-concat-方法","children":[]},{"level":2,"title":"18.reverse() 方法","slug":"_18-reverse-方法","link":"#_18-reverse-方法","children":[]},{"level":2,"title":"19.indexOf() 和 includes() 方法","slug":"_19-indexof-和-includes-方法","link":"#_19-indexof-和-includes-方法","children":[]},{"level":2,"title":"20.sort() 方法","slug":"_20-sort-方法","link":"#_20-sort-方法","children":[]},{"level":2,"title":"21.toString()方法","slug":"_21-tostring-方法","link":"#_21-tostring-方法","children":[]},{"level":2,"title":"22.数组去重和随机样本","slug":"_22-数组去重和随机样本","link":"#_22-数组去重和随机样本","children":[]},{"level":2,"title":"23.冒泡排序","slug":"_23-冒泡排序","link":"#_23-冒泡排序","children":[]},{"level":2,"title":"24.快速排序（冒泡排序改进版）","slug":"_24-快速排序-冒泡排序改进版","link":"#_24-快速排序-冒泡排序改进版","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":16.84,"words":5051},"filePathRelative":"front_end/front_end_base/javascript/07.md","localizedDate":"2024年12月2日","excerpt":"<h1> 07 【数组及常用方法】</h1>\\n<h2> 1.什么是数组</h2>\\n<p>数组（Array），顾名思义：用来存储一组相关值的类型。</p>\\n<p>数组也是一个对象，是一个用来存储数据的对象和Object类似，但是它的存储效率比普通对象要高<br>\\n数组中保存的内容我们称为元素\\t<br>\\n数组使用索引（index）来操作元素<br>\\n索引指由0开始的整数</p>\\n<p>数组可以方便地对一组值进行求和、计算平均值、逐项遍历等操作。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> scoreArr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">87</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">89</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">93</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">71</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">68</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">94</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">88</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
