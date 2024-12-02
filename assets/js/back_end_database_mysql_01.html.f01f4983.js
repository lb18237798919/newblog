"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[636],{6262:(e,a)=>{a.A=(e,a)=>{const i=e.__vccOpts||e;for(const[e,l]of a)i[e]=l;return i}},1878:(e,a,i)=>{i.r(a),i.d(a,{comp:()=>c,data:()=>s});var l=i(641);const d={},c=(0,i(6262).A)(d,[["render",function(e,a){return(0,l.uX)(),(0,l.CE)("div",null,a[0]||(a[0]=[(0,l.Fv)('<h1 id="_01-【数据库概述】" tabindex="-1"><a class="header-anchor" href="#_01-【数据库概述】"><span>01 【数据库概述】</span></a></h1><h2 id="_1-为什么要使用数据库" tabindex="-1"><a class="header-anchor" href="#_1-为什么要使用数据库"><span>1.为什么要使用数据库</span></a></h2><ul><li>持久化(persistence)：<code>把数据保存到可掉电式存储设备中以供之后使用</code>。大多数情况下，特别是企业级应用，数据持久化意味着<code>将内存中的数据保存到硬盘上加以”固化”</code>，而持久化的实现过程大多通过各种关系数据库来完成。</li><li>持久化的主要作用是<code>将内存中的数据存储在关系型数据库中</code>，当然也可以存储在磁盘文件、XML数 据文件中。</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/cb722175a5ba048203bee951d9ee8c6d54f88cbd.png" alt="image-20221010092111082" tabindex="0" loading="lazy"><figcaption>image-20221010092111082</figcaption></figure><h2 id="_2-数据库与数据库管理系统" tabindex="-1"><a class="header-anchor" href="#_2-数据库与数据库管理系统"><span>2.数据库与数据库管理系统</span></a></h2><h3 id="_2-1-相关概念" tabindex="-1"><a class="header-anchor" href="#_2-1-相关概念"><span>2.1 相关概念</span></a></h3><table><thead><tr><th>概念</th><th>概述</th></tr></thead><tbody><tr><td>DB：数据库（Database）</td><td>即存储数据的“仓库”，其本质是一个文件系统。它保存了一系列有组织的数据。</td></tr><tr><td>DBMS：数据库管理系统（Database Management System）</td><td>是一种操纵和管理数据库的大型软件，用于建立、使用和维护数据库，对数据库进行统一管理和控制。用户通过数据库管理系统访问数据库中表内的数据。</td></tr><tr><td>SQL：结构化查询语言（Structured Query Language）</td><td>专门用来与数据库通信的语言。</td></tr></tbody></table><h3 id="_2-2-数据库与数据库管理系统的关系" tabindex="-1"><a class="header-anchor" href="#_2-2-数据库与数据库管理系统的关系"><span>2.2 数据库与数据库管理系统的关系</span></a></h3><p>数据库管理系统(DBMS)可以管理多个数据库，一般开发人员会针对每一个应用创建一个数据库。为保存应用中实体的数据，一般会在数据库创建多个表，以保存程序中实体用户的数据。</p><p>数据库管理系统、数据库和表的关系如图所示：</p><figure><img src="https://i0.hdslb.com/bfs/album/f2c2a8785a6275c72b7c472b10eb418b482e33f7.png" alt="image-20221010092127924" tabindex="0" loading="lazy"><figcaption>image-20221010092127924</figcaption></figure><h3 id="_2-3-常见的数据库管理系统排名-dbms" tabindex="-1"><a class="header-anchor" href="#_2-3-常见的数据库管理系统排名-dbms"><span>2.3 常见的数据库管理系统排名(DBMS)</span></a></h3><figure><img src="https://i0.hdslb.com/bfs/album/fd560e19485822a6d0108e7ea3d17fdeade5e0eb.png" alt="image-20221010092139118" tabindex="0" loading="lazy"><figcaption>image-20221010092139118</figcaption></figure><p>对应的走势图：（https://db-engines.com/en/ranking_trend）</p><figure><img src="https://i0.hdslb.com/bfs/album/8dc32c4db22f929441ff78b890e7131c65f93cc2.png" alt="image-20221010092154044" tabindex="0" loading="lazy"><figcaption>image-20221010092154044</figcaption></figure><h3 id="_2-4-常见的数据库介绍" tabindex="-1"><a class="header-anchor" href="#_2-4-常见的数据库介绍"><span>2.4 常见的数据库介绍</span></a></h3><p><strong>Oracle</strong></p><p>1979 年，Oracle 2 诞生，它是第一个商用的 RDBMS（关系型数据库管理系统）。随着 Oracle 软件的名气越来越大，公司也改名叫 Oracle 公司。</p><p>2007年，总计85亿美金收购BEA Systems。</p><p>2009年，总计74亿美金收购SUN。此前的2008年，SUN以10亿美金收购MySQL。意味着Oracle 同时拥有了 MySQL 的管理权，至此 Oracle 在数据库领域中成为绝对的领导者。</p><p>2013年，甲骨文超越IBM，成为继Microsoft后全球第二大软件公司。</p><p>如今 Oracle 的年收入达到了 400 亿美金，足以证明商用（收费）数据库软件的价值。</p><p><strong>SQL Server</strong></p><p>SQL Server 是微软开发的大型商业数据库，诞生于 1989 年。C#、.net等语言常使用，与WinNT完全集成，也可以很好地与Microsoft BackOffice产品集成。</p><p><strong>DB2</strong></p><p>IBM公司的数据库产品,收费的。常应用在银行系统中。</p><p><strong>PostgreSQL</strong></p><p>PostgreSQL 的稳定性极强，最符合SQL标准，开放源码，具备商业级DBMS质量。PG对数据量大的文本以及SQL处理较快。</p><p><strong>SyBase</strong></p><p>已经淡出历史舞台。提供了一个非常专业数据建模的工具PowerDesigner。</p><p><strong>SQLite</strong></p><p>嵌入式的小型数据库，应用在手机端。 零配置，SQlite3不用安装，不用配置，不用启动，关闭或者配置数据库实例。当系统崩溃后不用做任何恢复操作，再下次使用数据库的时候自动恢复。</p><p><strong>informix</strong></p><p>IBM公司出品，取自Information 和Unix的结合，它是第一个被移植到Linux上的商业数据库产品。仅运行于unix/linux平台，命令行操作。 性能较高，支持集群，适应于安全性要求极高的系统，尤其是银行，证券系统的应用。</p><h2 id="_3-mysql介绍" tabindex="-1"><a class="header-anchor" href="#_3-mysql介绍"><span>3.MySQL介绍</span></a></h2><h3 id="_3-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-1-概述"><span>3.1 概述</span></a></h3><ul><li>MySQL是一个<code>开放源代码的关系型数据库管理系统</code>，由瑞典MySQL AB（创始人Michael Widenius）公司1995年开发，迅速成为开源数据库的 No.1。</li><li>2008被<code>Sun</code>收购（10亿美金），2009年Sun被<code>Oracle</code>收购。<code>MariaDB</code>应运而生。（MySQL 的创造者担心 MySQL 有闭源的风险，因此创建了 MySQL 的分支项目 MariaDB）</li><li>MySQL6.x 版本之后分为<code>社区版</code>和<code>商业版</code>。</li><li>MySQL是一种关联数据库管理系统，将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。</li><li>MySQL是开源的，所以你不需要支付额外的费用。</li><li>MySQL是可以定制的，采用了<code>GPL（GNU General Public License）</code>协议，你可以修改源码来开发自己的MySQL系统。</li><li>MySQL支持大型的数据库。可以处理拥有上千万条记录的大型数据库。</li><li>MySQL支持大型数据库，支持5000万条记录的数据仓库，32位系统表文件最大可支持<code>4GB</code>，64位系统支持最大的表文件为<code>8TB</code>。</li><li>MySQL使用<code>标准的SQL数据语言</code>形式。</li><li>MySQL可以允许运行于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Python、Java、Perl、PHP和Ruby等。</li></ul><h3 id="_3-2-关于mysql-8-0" tabindex="-1"><a class="header-anchor" href="#_3-2-关于mysql-8-0"><span>3.2 关于MySQL 8.0</span></a></h3><p><code>MySQL从5.7版本直接跳跃发布了8.0版本</code>，可见这是一个令人兴奋的里程碑版本。MySQL 8版本在功能上做了显著的改进与增强，开发者对MySQL的源代码进行了重构，最突出的一点是多MySQL Optimizer优化器进行了改进。</p><p>不仅在速度上得到了改善，还为用户带来了更好的性能和更棒的体验。</p><h3 id="_3-3-why-choose-mysql" tabindex="-1"><a class="header-anchor" href="#_3-3-why-choose-mysql"><span>3.3 Why choose MySQL?</span></a></h3><p>为什么如此多的厂商要选用MySQL？大概总结的原因主要有以下几点：</p><ol><li>开放源代码，使用成本低。</li><li>性能卓越，服务稳定。</li><li>软件体积小，使用简单，并且易于维护。</li><li>历史悠久，社区用户非常活跃，遇到问题可以寻求帮助。</li><li>许多互联网公司在用，经过了时间的验证。</li></ol><h3 id="_3-4-oracle-vs-mysql" tabindex="-1"><a class="header-anchor" href="#_3-4-oracle-vs-mysql"><span>3.4 Oracle vs MySQL</span></a></h3><ul><li>Oracle <ul><li>更适合大型跨国企业的使用，因为他们对费用不敏感，但是对性能要求以及安全性有更高的要求。</li></ul></li><li>MySQL <ul><li>由于其体积小、速度快、总体拥有成本低，可处理上千万条记录的大型数据库，尤其是开放源码这一特点，使得很多互联网公司、中小型网站选择了MySQL作为网站数据库（Facebook，Twitter，YouTube，阿里巴巴/蚂蚁金服，去哪儿，美团外卖，腾讯）。</li></ul></li></ul><h2 id="_4-rdbms-与-非rdbms" tabindex="-1"><a class="header-anchor" href="#_4-rdbms-与-非rdbms"><span>4.RDBMS 与 非RDBMS</span></a></h2><h3 id="_4-1-关系型数据库-rdbms" tabindex="-1"><a class="header-anchor" href="#_4-1-关系型数据库-rdbms"><span>4.1 关系型数据库(RDBMS)</span></a></h3><ul><li>这种类型的数据库是<code>最古老</code> 的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的<code>二元关系</code>（即二维表格形式）。</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/96ecec65ff2a8d7606ce2666c41ae240420568a4.png" alt="image-20221009192338641" tabindex="0" loading="lazy"><figcaption>image-20221009192338641</figcaption></figure><ul><li>关系型数据库以 <code>行(row)</code>和 <code>列(column)</code>的形式存储数据，以便于用户理解。这一系列的行和列被称为 <code>表(table)</code>，一组表组成了一个库(database)。</li><li>表与表之间的数据记录有关系(relationship)。现实世界中的各种实体以及实体之间的各种联系均用<code>关系模型</code> 来表示。</li><li>关系型数据库，就是建立在 <code>关系模型</code> 基础上的数据库。</li><li>SQL 就是关系型数据库的查询语言。</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/e1526e63290953601aa7f335e40d596aba6b8e21.png" alt="image-20221009193342894" tabindex="0" loading="lazy"><figcaption>image-20221009193342894</figcaption></figure><ul><li>优势 <ul><li><code>复杂查询</code> 可以用SQL语句方便的在一个表以及多个表之间做非常复杂的数据查询。</li><li><code>事务支持</code> 使得对于安全性能很高的数据访问要求得以实现。</li></ul></li></ul><h3 id="_4-2-非关系型数据库-非rdbms" tabindex="-1"><a class="header-anchor" href="#_4-2-非关系型数据库-非rdbms"><span>4.2 非关系型数据库(非RDBMS)</span></a></h3><p><strong>介绍</strong></p><p>非关系型数据库，可看成传统关系型数据库的功能 <code>阉割版本</code> ，基于键值对存储数据，不需要经过SQL层的解析， <code>性能非常高</code> 。同时，通过减少不常用的功能，进一步<code>提高性能</code>。</p><p><strong>有哪些非关系型数据库</strong></p><ul><li><p>键值型数据库</p><p>键值型数据库通过 Key-Value 键值的方式来存储数据，其中 Key 和 Value 可以是简单的对象，也可以是复杂的对象。<code>Key 作为唯一的标识符，优点是查找速度快</code>，在这方面明显优于关系型数据库，缺点是无法像关系型数据库一样使用条件过滤（比如 WHERE），如果你不知道去哪里找数据，就要遍历所有的键，这就会消耗大量的计算。</p><p>键值型数据库典型的使用场景是作为<code>内存缓存</code>。<code>Redis</code>是最流行的键值型数据库。 <img src="https://i0.hdslb.com/bfs/album/6b962b85173ea15871694565f7c002ceadb35d8a.png" alt="image-20221010092313205" loading="lazy"></p></li><li><p>文档型数据库</p><p>此类数据库可存放并获取文档，可以是XML、JSON等格式。在数据库中文档作为处理信息的基本单位，一个文档就相当于一条记录。文档数据库所存放的文档，就相当于键值数据库所存放的“值”。</p><p>MongoDB是最流行的文档型数据库。此外，还有CouchDB等。</p></li><li><p>搜索引擎数据库</p><p>搜索引擎数据库是应用在搜索引擎领域的数据存储形式，由于搜索引擎会爬取大量的数据，并以特定的格式进行存储，这样在检索的时候才能保证性能最优。核心原理是“倒排索引”。</p><p>典型产品：Solr、Elasticsearch、Splunk 等。</p></li><li><p>列式数据库</p><p>列式数据库是相对于行式存储的数据库，Oracle、MySQL、SQL Server 等数据库都是采用的行式存储（Row-based），而列式数据库是将数据按照列存储到数据库中，这样做的好处是可以大量降低系统的I/O，适合于分布式文件系统，不足在于功能相对有限。典型产品：HBase等。</p></li></ul><figure><img src="https://i0.hdslb.com/bfs/album/4fca5427bcc287414d5eb71fb0e3af90d2b5ff95.png" alt="image-20221009193746733" tabindex="0" loading="lazy"><figcaption>image-20221009193746733</figcaption></figure><ul><li><p>图形数据库</p><p>图形数据库，利用了图这种数据结构存储了实体（对象）之间的关系。图形数据库最典型的例子就是社交网络中人与人的关系，数据模型主要是以节点和边（关系）来实现，特点在于能高效地解决复杂的关系问题。</p><p>图形数据库顾名思义，就是一种存储图形关系的数据库。它利用了图这种数据结构存储了实体（对象）之间的关系。关系型数据用于存储明确关系的数据，但对于复杂关系的数据存储却有些力不从心。如社交网络中人物之间的关系，如果用关系型数据库则非常复杂，用图形数据库将非常简单。典型产品：Neo4J、InfoGrid等。</p></li></ul><h3 id="_4-3-小结" tabindex="-1"><a class="header-anchor" href="#_4-3-小结"><span>4.3 小结</span></a></h3><p>NoSQL 的分类很多，即便如此，在 DBMS 排名中，还是 SQL 阵营的比重更大，影响力前 5 的 DBMS 中有 4 个是关系型数据库，而排名前 20 的 DBMS 中也有 12 个是关系型数据库。所以说，掌握 SQL 是非常有必要的。整套课程将围绕 SQL 展开。</p><h2 id="_5-关系型数据库设计规则" tabindex="-1"><a class="header-anchor" href="#_5-关系型数据库设计规则"><span>5.关系型数据库设计规则</span></a></h2><ul><li>关系型数据库的典型数据结构就是<code>数据表</code>，这些数据表的组成都是结构化的（Structured）。</li><li>将数据放到表中，表再放到库中。</li><li>一个数据库中可以有多个表，每个表都有一个名字，用来标识自己。表名具有唯一性。</li><li>表具有一些特性，这些特性定义了数据在表中如何存储，类似Java和Python中 “类”的设计。</li></ul><h3 id="_5-1-表、记录、字段" tabindex="-1"><a class="header-anchor" href="#_5-1-表、记录、字段"><span>5.1 表、记录、字段</span></a></h3><ul><li>E-R（entity-relationship，实体-联系）模型中有三个主要概念是： <code>实体集</code> 、<code>属性</code> 、<code>联系集</code>。</li><li>一个实体集（class）对应于数据库中的一个表（table），一个实体（instance）则对应于数据库表中的一行（row），也称为一条记录（record）。一个属性（attribute）对应于数据库表中的一列（column），也称为一个字段（field）。</li></ul><p>​ <img src="https://i0.hdslb.com/bfs/album/fe3326c0ea9c11d14eb0378595932c9841a76ece.png" alt="image-20221009193923504" loading="lazy"></p><blockquote><p><code>ORM思想</code>(Object Relational Mapping)体现：</p><p>数据库中的一个表 &lt;—&gt; Java或Python中的一个类</p><p>表中的一条数据 &lt;—&gt; 类中的一个对象（或实体）</p><p>表中的一个列 &lt;----&gt; 类中的一个字段、属性(field)</p></blockquote><h3 id="_5-2-表的关联关系" tabindex="-1"><a class="header-anchor" href="#_5-2-表的关联关系"><span>5.2 表的关联关系</span></a></h3><ul><li>表与表之间的数据记录有关系(relationship)。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。</li><li>四种： <ul><li>一对一关联</li><li>一对多关联</li><li>多对多关联</li><li>自我引用</li></ul></li></ul><h4 id="_5-2-1-一对一关联-one-to-one" tabindex="-1"><a class="header-anchor" href="#_5-2-1-一对一关联-one-to-one"><span>5.2.1 一对一关联（one-to-one）</span></a></h4><ul><li><p>在实际的开发中应用不多，因为一对一可以创建成一张表。</p></li><li><p>举例：设计<code>学生表</code>：学号、姓名、手机号码、班级、系别、身份证号码、家庭住址、籍贯、紧急联系人、...</p><ul><li>拆为两个表：两个表的记录是一一对应关系。</li><li><code>基础信息表</code>（常用信息）：学号、姓名、手机号码、班级、系别</li><li><code>档案信息表</code>（不常用信息）：学号、身份证号码、家庭住址、籍贯、紧急联系人、...</li></ul></li><li><p>两种建表原则：</p><ul><li><p>外键唯一：主表的主键和从表的外键（唯一），形成主外键关系，外键唯一。</p></li><li><p>外键是主键：主表的主键和从表的主键，形成主外键关系。</p><p>（主表和从表的区分：从表一般需要创建一个外键来引用主表的主键）</p></li></ul></li></ul><figure><img src="https://i0.hdslb.com/bfs/album/16fb1f06fdace7c1e103ebc11b711791a950f699.png" alt="image-20221010092502050" tabindex="0" loading="lazy"><figcaption>image-20221010092502050</figcaption></figure><h4 id="_5-2-2-一对多关系-one-to-many" tabindex="-1"><a class="header-anchor" href="#_5-2-2-一对多关系-one-to-many"><span>5.2.2 一对多关系（one-to-many）</span></a></h4><ul><li>常见实例场景：<code>客户表和订单表</code>，<code>分类表和商品表</code>，<code>部门表和员工表</code>。</li><li>举例： <ul><li>部门表：编号、名称、简介</li><li>员工表：编号、姓名、...、所属部门</li></ul></li><li>一对多建表原则：在从表(多方)创建一个字段，字段作为外键指向主表(一方)的主键</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/ee4609f88cbd952cf81b2f7f1748d620cb29224c.png" alt="image-20221010092610370" tabindex="0" loading="lazy"><figcaption>image-20221010092610370</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/dcd021fe5db02d3d6f729dba318ea613c2cfd942.png" alt="image-20221010092617886" tabindex="0" loading="lazy"><figcaption>image-20221010092617886</figcaption></figure><figure><img src="https://i0.hdslb.com/bfs/album/f7fb71b0c31fe0cd9c9a172830b36d382fa1992f.png" alt="image-20221010092624579" tabindex="0" loading="lazy"><figcaption>image-20221010092624579</figcaption></figure><h4 id="_5-2-3-多对多-many-to-many" tabindex="-1"><a class="header-anchor" href="#_5-2-3-多对多-many-to-many"><span>5.2.3 多对多（many-to-many）</span></a></h4><p>要表示多对多关系，必须创建第三个表，该表通常称为<code>联接表</code>，它将多对多关系划分为两个一对多关系。将这两个表的主键都插入到第三个表中。</p><figure><img src="https://i0.hdslb.com/bfs/album/71ff697832b14a10329d0b75acf592cad775293e.png" alt="image-20221010104845271" tabindex="0" loading="lazy"><figcaption>image-20221010104845271</figcaption></figure><ul><li><p><strong>举例1：学生-课程</strong></p><ul><li><p><code>学生信息表</code>：一行代表一个学生的信息（学号、姓名、手机号码、班级、系别...）</p></li><li><p><code>课程信息表</code>：一行代表一个课程的信息（课程编号、授课老师、简介...）</p></li><li><p><code>选课信息表</code>：一个学生可以选多门课，一门课可以被多个学生选择</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">学号     课程编号</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1        1001</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2        1001</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1        1002</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>举例2：产品-订单</strong></p><p>“订单”表和“产品”表有一种多对多的关系，这种关系是通过与“订单明细”表建立两个一对多关系来定义的。一个订单可以有多个产品，每个产品可以出现在多个订单中。</p><ul><li><code>产品表</code>：“产品”表中的每条记录表示一个产品。</li><li><code>订单表</code>：“订单”表中的每条记录表示一个订单。</li><li><code>订单明细表</code>：每个产品可以与“订单”表中的多条记录对应，即出现在多个订单中。一个订单可以与“产品”表中的多条记录对应，即包含多个产品。</li></ul></li></ul><figure><img src="https://i0.hdslb.com/bfs/album/a3b849e8a8577810db4fabf3d5525e2c286e13ba.png" alt="image-20221010104950169" tabindex="0" loading="lazy"><figcaption>image-20221010104950169</figcaption></figure><ul><li><strong>举例3：用户-角色</strong></li><li>多对多关系建表原则：需要创建第三张表，中间表中至少两个字段，这两个字段分别作为外键指向各自一方的主键。</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/90fb58e1714464953234ad5da1edb950b3eafbb5.png" alt="image-20221010105044644" tabindex="0" loading="lazy"><figcaption>image-20221010105044644</figcaption></figure><h4 id="_5-2-4-自我引用-self-reference" tabindex="-1"><a class="header-anchor" href="#_5-2-4-自我引用-self-reference"><span>5.2.4 自我引用(Self reference)</span></a></h4><figure><img src="https://i0.hdslb.com/bfs/album/d72ab5b2de9c3f867efc39eb034dbf10691b0a37.png" alt="image-20221010105126645" tabindex="0" loading="lazy"><figcaption>image-20221010105126645</figcaption></figure>',86)]))}]]),s=JSON.parse('{"path":"/back_end/database/mysql/01.html","title":"01 【数据库概述】","lang":"zh-CN","frontmatter":{"description":"01 【数据库概述】 1.为什么要使用数据库 持久化(persistence)：把数据保存到可掉电式存储设备中以供之后使用。大多数情况下，特别是企业级应用，数据持久化意味着将内存中的数据保存到硬盘上加以”固化”，而持久化的实现过程大多通过各种关系数据库来完成。 持久化的主要作用是将内存中的数据存储在关系型数据库中，当然也可以存储在磁盘文件、XML数 据...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/newblog/back_end/database/mysql/01.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"01 【数据库概述】"}],["meta",{"property":"og:description","content":"01 【数据库概述】 1.为什么要使用数据库 持久化(persistence)：把数据保存到可掉电式存储设备中以供之后使用。大多数情况下，特别是企业级应用，数据持久化意味着将内存中的数据保存到硬盘上加以”固化”，而持久化的实现过程大多通过各种关系数据库来完成。 持久化的主要作用是将内存中的数据存储在关系型数据库中，当然也可以存储在磁盘文件、XML数 据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i0.hdslb.com/bfs/album/cb722175a5ba048203bee951d9ee8c6d54f88cbd.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T07:29:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T07:29:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01 【数据库概述】\\",\\"image\\":[\\"https://i0.hdslb.com/bfs/album/cb722175a5ba048203bee951d9ee8c6d54f88cbd.png\\",\\"https://i0.hdslb.com/bfs/album/f2c2a8785a6275c72b7c472b10eb418b482e33f7.png\\",\\"https://i0.hdslb.com/bfs/album/fd560e19485822a6d0108e7ea3d17fdeade5e0eb.png\\",\\"https://i0.hdslb.com/bfs/album/8dc32c4db22f929441ff78b890e7131c65f93cc2.png\\",\\"https://i0.hdslb.com/bfs/album/96ecec65ff2a8d7606ce2666c41ae240420568a4.png\\",\\"https://i0.hdslb.com/bfs/album/e1526e63290953601aa7f335e40d596aba6b8e21.png\\",\\"https://i0.hdslb.com/bfs/album/6b962b85173ea15871694565f7c002ceadb35d8a.png\\",\\"https://i0.hdslb.com/bfs/album/4fca5427bcc287414d5eb71fb0e3af90d2b5ff95.png\\",\\"https://i0.hdslb.com/bfs/album/fe3326c0ea9c11d14eb0378595932c9841a76ece.png\\",\\"https://i0.hdslb.com/bfs/album/16fb1f06fdace7c1e103ebc11b711791a950f699.png\\",\\"https://i0.hdslb.com/bfs/album/ee4609f88cbd952cf81b2f7f1748d620cb29224c.png\\",\\"https://i0.hdslb.com/bfs/album/dcd021fe5db02d3d6f729dba318ea613c2cfd942.png\\",\\"https://i0.hdslb.com/bfs/album/f7fb71b0c31fe0cd9c9a172830b36d382fa1992f.png\\",\\"https://i0.hdslb.com/bfs/album/71ff697832b14a10329d0b75acf592cad775293e.png\\",\\"https://i0.hdslb.com/bfs/album/a3b849e8a8577810db4fabf3d5525e2c286e13ba.png\\",\\"https://i0.hdslb.com/bfs/album/90fb58e1714464953234ad5da1edb950b3eafbb5.png\\",\\"https://i0.hdslb.com/bfs/album/d72ab5b2de9c3f867efc39eb034dbf10691b0a37.png\\"],\\"dateModified\\":\\"2024-12-02T07:29:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.为什么要使用数据库","slug":"_1-为什么要使用数据库","link":"#_1-为什么要使用数据库","children":[]},{"level":2,"title":"2.数据库与数据库管理系统","slug":"_2-数据库与数据库管理系统","link":"#_2-数据库与数据库管理系统","children":[{"level":3,"title":"2.1 相关概念","slug":"_2-1-相关概念","link":"#_2-1-相关概念","children":[]},{"level":3,"title":"2.2 数据库与数据库管理系统的关系","slug":"_2-2-数据库与数据库管理系统的关系","link":"#_2-2-数据库与数据库管理系统的关系","children":[]},{"level":3,"title":"2.3 常见的数据库管理系统排名(DBMS)","slug":"_2-3-常见的数据库管理系统排名-dbms","link":"#_2-3-常见的数据库管理系统排名-dbms","children":[]},{"level":3,"title":"2.4 常见的数据库介绍","slug":"_2-4-常见的数据库介绍","link":"#_2-4-常见的数据库介绍","children":[]}]},{"level":2,"title":"3.MySQL介绍","slug":"_3-mysql介绍","link":"#_3-mysql介绍","children":[{"level":3,"title":"3.1 概述","slug":"_3-1-概述","link":"#_3-1-概述","children":[]},{"level":3,"title":"3.2 关于MySQL 8.0","slug":"_3-2-关于mysql-8-0","link":"#_3-2-关于mysql-8-0","children":[]},{"level":3,"title":"3.3 Why choose MySQL?","slug":"_3-3-why-choose-mysql","link":"#_3-3-why-choose-mysql","children":[]},{"level":3,"title":"3.4 Oracle vs MySQL","slug":"_3-4-oracle-vs-mysql","link":"#_3-4-oracle-vs-mysql","children":[]}]},{"level":2,"title":"4.RDBMS 与 非RDBMS","slug":"_4-rdbms-与-非rdbms","link":"#_4-rdbms-与-非rdbms","children":[{"level":3,"title":"4.1 关系型数据库(RDBMS)","slug":"_4-1-关系型数据库-rdbms","link":"#_4-1-关系型数据库-rdbms","children":[]},{"level":3,"title":"4.2 非关系型数据库(非RDBMS)","slug":"_4-2-非关系型数据库-非rdbms","link":"#_4-2-非关系型数据库-非rdbms","children":[]},{"level":3,"title":"4.3 小结","slug":"_4-3-小结","link":"#_4-3-小结","children":[]}]},{"level":2,"title":"5.关系型数据库设计规则","slug":"_5-关系型数据库设计规则","link":"#_5-关系型数据库设计规则","children":[{"level":3,"title":"5.1 表、记录、字段","slug":"_5-1-表、记录、字段","link":"#_5-1-表、记录、字段","children":[]},{"level":3,"title":"5.2 表的关联关系","slug":"_5-2-表的关联关系","link":"#_5-2-表的关联关系","children":[]}]}],"git":{"createdTime":1733124588000,"updatedTime":1733124588000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":12.8,"words":3841},"filePathRelative":"back_end/database/mysql/01.md","localizedDate":"2024年12月2日","excerpt":"\\n<h2>1.为什么要使用数据库</h2>\\n<ul>\\n<li>持久化(persistence)：<code>把数据保存到可掉电式存储设备中以供之后使用</code>。大多数情况下，特别是企业级应用，数据持久化意味着<code>将内存中的数据保存到硬盘上加以”固化”</code>，而持久化的实现过程大多通过各种关系数据库来完成。</li>\\n<li>持久化的主要作用是<code>将内存中的数据存储在关系型数据库中</code>，当然也可以存储在磁盘文件、XML数\\n据文件中。</li>\\n</ul>\\n<figure><img src=\\"https://i0.hdslb.com/bfs/album/cb722175a5ba048203bee951d9ee8c6d54f88cbd.png\\" alt=\\"image-20221010092111082\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221010092111082</figcaption></figure>","autoDesc":true}')}}]);