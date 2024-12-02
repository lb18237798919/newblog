const e=JSON.parse('{"key":"v-f3bb82b0","path":"/back_end/database/mysql/03.html","title":"03 【基本的SELECT语句】","lang":"zh-CN","frontmatter":{"description":"03 【基本的SELECT语句】 1.SQL分类 SQL语言在功能上主要分为如下3大类： DDL（Data Definition Languages、数据定义语言），这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。 主要的语句关键字包括CREATE、DROP、ALTER、RENAME、TRUNCATE等。 DML（Data Manipulation Language、数据操作语言），用于添加、删除、更新和查询数据库记录，并检查数据完整性。 主要的语句关键字包括INSERT、DELETE、UPDATE、SELECT等。 SELECT是SQL语言的基础，最为重要。 DCL（Data Control Language、数据控制语言），用于定义数据库、表、字段、用户的访问权限和安全级别。 主要的语句关键字包括GRANT、REVOKE、COMMIT、ROLLBACK、SAVEPOINT等。","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/back_end/database/mysql/03.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"03 【基本的SELECT语句】"}],["meta",{"property":"og:description","content":"03 【基本的SELECT语句】 1.SQL分类 SQL语言在功能上主要分为如下3大类： DDL（Data Definition Languages、数据定义语言），这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。 主要的语句关键字包括CREATE、DROP、ALTER、RENAME、TRUNCATE等。 DML（Data Manipulation Language、数据操作语言），用于添加、删除、更新和查询数据库记录，并检查数据完整性。 主要的语句关键字包括INSERT、DELETE、UPDATE、SELECT等。 SELECT是SQL语言的基础，最为重要。 DCL（Data Control Language、数据控制语言），用于定义数据库、表、字段、用户的访问权限和安全级别。 主要的语句关键字包括GRANT、REVOKE、COMMIT、ROLLBACK、SAVEPOINT等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"lb"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03 【基本的SELECT语句】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lb\\",\\"url\\":\\"https://lb18237798919.github.io/newblog\\"}]}"]]},"headers":[{"level":2,"title":"1.SQL分类","slug":"_1-sql分类","link":"#_1-sql分类","children":[]},{"level":2,"title":"2.SQL语言的规则与规范","slug":"_2-sql语言的规则与规范","link":"#_2-sql语言的规则与规范","children":[{"level":3,"title":"2.1 基本规则","slug":"_2-1-基本规则","link":"#_2-1-基本规则","children":[]},{"level":3,"title":"2.2 SQL大小写规范 （建议遵守）","slug":"_2-2-sql大小写规范-建议遵守","link":"#_2-2-sql大小写规范-建议遵守","children":[]},{"level":3,"title":"2.3 注释","slug":"_2-3-注释","link":"#_2-3-注释","children":[]},{"level":3,"title":"2.4 命名规则（暂时了解）","slug":"_2-4-命名规则-暂时了解","link":"#_2-4-命名规则-暂时了解","children":[]},{"level":3,"title":"2.5 数据导入指令","slug":"_2-5-数据导入指令","link":"#_2-5-数据导入指令","children":[]}]},{"level":2,"title":"3.基本的SELECT语句","slug":"_3-基本的select语句","link":"#_3-基本的select语句","children":[{"level":3,"title":"3.1 SELECT ... FROM","slug":"_3-1-select-from","link":"#_3-1-select-from","children":[]},{"level":3,"title":"3.2 列的别名","slug":"_3-2-列的别名","link":"#_3-2-列的别名","children":[]},{"level":3,"title":"3.3 去除重复行","slug":"_3-3-去除重复行","link":"#_3-3-去除重复行","children":[]},{"level":3,"title":"3.4 空值参与运算","slug":"_3-4-空值参与运算","link":"#_3-4-空值参与运算","children":[]},{"level":3,"title":"3.5 着重号","slug":"_3-5-着重号","link":"#_3-5-着重号","children":[]},{"level":3,"title":"3.6 查询常数","slug":"_3-6-查询常数","link":"#_3-6-查询常数","children":[]}]},{"level":2,"title":"4. 显示表结构","slug":"_4-显示表结构","link":"#_4-显示表结构","children":[]},{"level":2,"title":"5. 过滤数据","slug":"_5-过滤数据","link":"#_5-过滤数据","children":[]},{"level":2,"title":"6.课后练习","slug":"_6-课后练习","link":"#_6-课后练习","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":8.99,"words":2698},"filePathRelative":"back_end/database/mysql/03.md","localizedDate":"2024年12月2日","excerpt":"<h1> 03 【基本的SELECT语句】</h1>\\n<h2> 1.SQL分类</h2>\\n<p>SQL语言在功能上主要分为如下3大类：</p>\\n<ul>\\n<li><strong>DDL（Data Definition Languages、数据定义语言）</strong>，这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。\\n<ul>\\n<li>主要的语句关键字包括<code>CREATE</code>、<code>DROP</code>、<code>ALTER</code>、<code>RENAME</code>、<code>TRUNCATE</code>等。</li>\\n</ul>\\n</li>\\n<li><strong>DML（Data Manipulation Language、数据操作语言）</strong>，用于添加、删除、更新和查询数据库记录，并检查数据完整性。\\n<ul>\\n<li>主要的语句关键字包括<code>INSERT</code>、<code>DELETE</code>、<code>UPDATE</code>、<code>SELECT</code>等。</li>\\n<li><strong>SELECT是SQL语言的基础，最为重要。</strong></li>\\n</ul>\\n</li>\\n<li><strong>DCL（Data Control Language、数据控制语言）</strong>，用于定义数据库、表、字段、用户的访问权限和安全级别。\\n<ul>\\n<li>主要的语句关键字包括<code>GRANT</code>、<code>REVOKE</code>、<code>COMMIT</code>、<code>ROLLBACK</code>、<code>SAVEPOINT</code>等。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
