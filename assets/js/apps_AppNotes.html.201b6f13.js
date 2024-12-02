"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1619],{6262:(e,i)=>{i.A=(e,i)=>{const s=e.__vccOpts||e;for(const[e,a]of i)s[e]=a;return s}},1746:(e,i,s)=>{s.r(i),s.d(i,{comp:()=>l,data:()=>t});var a=s(641);const n={},l=(0,s(6262).A)(n,[["render",function(e,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<h2 id="小工具" tabindex="-1"><a class="header-anchor" href="#小工具"><span>小工具</span></a></h2><blockquote><p>收集稀奇古怪的小工具</p></blockquote><ul><li><a href="https://www.appinn.com/animated-drawings/" target="_blank" rel="noopener noreferrer">Animated Drawings – 自动将绘画转换为动画</a></li></ul><h2 id="power-automate" tabindex="-1"><a class="header-anchor" href="#power-automate"><span>Power Automate</span></a></h2><p><a href="https://sspai.com/series/273/list" target="_blank" rel="noopener noreferrer">Power Automate</a> 自动化应用，分为桌面流和<a href="https://make.powerautomate.com/" target="_blank" rel="noopener noreferrer">云端流</a>，上手比 Quikcer 复杂，网页自动化弱于 UI. Vision RPA，适合在 Window 不同应用间切换的自动化流。<strong>对于免费用户来说，Power Automate 都得手动执行流，个人账户与组织账户无明显区别。</strong></p><p><strong>桌面流</strong>本身并没有触发器，因此只能手动执行。付费的组织账户可以自动执行桌面流，比如：云端流调用桌面流，<a href="https://docs.microsoft.com/zh-cn/power-automate/desktop-flows/run-pad-flow#run-desktop-flows-via-url" target="_blank" rel="noopener noreferrer">通过 URL 运行桌面流</a>。Power Automate 安装有商店版和 <a href="https://learn.microsoft.com/en-us/power-automate/desktop-flows/install" target="_blank" rel="noopener noreferrer">exe 应用</a>两种方式，各自有些 Bug。</p><p><strong>云端流</strong>可以自动、即时或通过计划触发自动化。登录云端流时，一开始要求用工作账户登录，但后来我开通了 <a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" target="_blank" rel="noopener noreferrer">Microsoft Teams</a>，就可以用个人账户，暂不清楚是否有因果关系。^[<a href="https://support.microsoft.com/zh-cn/office/%E6%B3%A8%E5%86%8C%E5%85%8D%E8%B4%B9teams%E7%BB%8F%E5%85%B8-70aaf044-b872-4c32-ac47-362ab29ebbb1" target="_blank" rel="noopener noreferrer">注册免费 Teams 经典</a>]</p><p>与个人账户相比，组织账户仅仅多了一些按钮和试用提示，并没有明显区别。简单来说，组织账户有付费的权利，其他功能都相同。</p><h3 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧"><span>使用技巧</span></a></h3><ul><li><p>遇到捕获了元素但执行时却报错的情况，可以尝试自带的记录器。它比手动选择元素要死板，钉死了要点击的元素，但能确保执行成功率。</p></li><li><p>使用「循环」和「等待」实现半自动执行工作流。如果某些条件并不清晰，可通过第三方网页来设置条件，如特殊网页设置的特殊文本。^[<a href="https://www.bilibili.com/video/BV1ki4y1S7AZ/?vd_source=9ab57d83a938c90a4fc9691b299cb2af" target="_blank" rel="noopener noreferrer">Power Automate Desktop 免费 RPA 实现定时启动或按照频率运行自动化流的三种办法</a>]</p></li></ul><h3 id="报错重置" tabindex="-1"><a class="header-anchor" href="#报错重置"><span>报错重置</span></a></h3><p>如果遇到程序自身的报错，点击「设置」&gt;「应用」&gt;「应用和功能」中找到 Power Automate Desktop 应用，并点击「重置」后试试看。</p><h3 id="创建-microsoft-组织账户" tabindex="-1"><a class="header-anchor" href="#创建-microsoft-组织账户"><span>创建 Microsoft 组织账户</span></a></h3><p>微软的众多服务都需要组织账户，个人账号经常被拒绝登录。而创建微软组织账户最简单的方法是注册为<a href="https://partner.microsoft.com/zh-cn/" target="_blank" rel="noopener noreferrer">微软合作伙伴</a>。</p><ol><li><a href="https://partner.microsoft.com/zh-cn/membership" target="_blank" rel="noopener noreferrer">加入 Microsoft 合作伙伴网络</a>。</li><li>进入后会问「你希望如何与 Microsoft 合作」，安全起见我选择「合作伙伴」，进入下一页后点「创作工作账户」。</li><li>账户信息除手机和备用邮件外可以随便填，通过手机验证码后，点「继续」，然后等几分钟，就会收到注册成功通知，你也成为有组织的人了。</li></ol><p>如果你有 Azure 账户，可以直接在 Azure 中<a href="https://docs.microsoft.com/zh-cn/azure/active-directory/fundamentals/active-directory-access-create-new-tenant#create-a-new-tenant-for-your-organization" target="_blank" rel="noopener noreferrer">为组织创建新的租户</a>。</p><h3 id="管理组织用户" tabindex="-1"><a class="header-anchor" href="#管理组织用户"><span>管理组织用户</span></a></h3><p>若要给其他人多添加几个账号，则可以通过 <a href="https://portal.azure.com/" target="_blank" rel="noopener noreferrer">Azure</a> 来管理。</p><p>进入「管理 Azure Active Directory」&gt;「用户」，添加和管理组织用户。</p><h2 id="阿里云盘" tabindex="-1"><a class="header-anchor" href="#阿里云盘"><span>阿里云盘</span></a></h2><p>阿里云盘不能用压缩包分享。更新文件夹时，可先上传新版文件夹，然后将内部文件移动覆盖，如此只会更新更改的文件，同时避免相同文件重命名。</p><h2 id="双链笔记" tabindex="-1"><a class="header-anchor" href="#双链笔记"><span>双链笔记</span></a></h2><p>@KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景： 一、待办清单和随笔记 待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。 二、书籍之间的联系 很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。 三、跨软件，非 URL 的场景 我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档</p><h2 id="logseq" tabindex="-1"><a class="header-anchor" href="#logseq"><span>Logseq</span></a></h2><p>与 Obsidian 相比，Logseq 罗列内容更方便。Logseq 将所有行都视为节点，因此非常轻松将所需的子节点整合在一个页面，实现关键信息聚合。</p><p>Logseq 的日记非常强大，也可以自动套用指定模板。^[<a href="https://thinkstack.club/how-to-set-up-an-automated-daily-template-in-logseq/" target="_blank" rel="noopener noreferrer">How to Set Up an Automated Daily Template in Logseq</a>] 但其他笔记需要手动启用模板，修改 .env 的设置 <code>{:week &quot;journals&quot;}</code> 被报错。继续尝试设计周记、月报的模板。</p><p>Logseq 劣势，所有页面建立在 pages 下，但可以手动修改位置。双链笔记有个特点，只要名称不变，文档位置更改也不会影响引用。</p><p>Logseq 更改页面标题，会同步更改所有标签名。</p><p>我会把远期不安排的任务，往 later 清单中放，随时可以查看提醒，但又不需要每天重复调整时间。</p><p>主题：Dracula</p><h3 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用"><span>快速使用</span></a></h3><ul><li><code>[[]]</code> 可快速新建页面，<code>All pages</code> 中可删除空页面</li><li>打开右上角的「侧边栏」，使用目录管理主页面</li><li>将页面中内容汇总起来，比如「心理学」标签页面显示所有心理学</li><li>任务时，使用 later 或 now，切换后改变状态，会记录任务持续时间。 <ul><li>如果使用 <code>doing</code> 或者 <code>now</code> 命令，它会更显眼地出现在每天日志的下方（如红框所示），以防当天记录的东西过多，或者到了第二天生成了新的日志后被忽略。<strong>直到你将它完成为止，它才会消失</strong>，算是一种强提醒。</li></ul></li><li>PDF 文档的标注管理一直是个大难题，而用 Logseq 后方便许多，能将注释与标签、笔记、截图统合在一起。</li><li>TOC Generator 插件生成目录：<code>{{renderer :tocgen}}</code>。</li><li><code>shift+左键</code> 将新页面打开在<strong>右侧边栏</strong>中。</li><li>忽略指定文件夹？</li></ul><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>query</span></a></h3><p><a href="https://www.bilibili.com/video/BV1eq4y1N7Su" target="_blank" rel="noopener noreferrer">query</a> 能按条件精准地找到结果，并动态更新在页面中，公式参考<a href="https://docs.logseq.com/#/page/queries" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><p>首先，在文本后方添加 tag，比如</p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">idea</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">idea</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">research</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，使用 query 命令寻找对应结果</p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 命令</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{{query (and [[research]] [[idea]])}}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{{query (and (task now later done) [[page]])}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> or</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 命令</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{{query (or [[page 1]] [[page 2]])}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 命令</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{{query (not [[page 1]] [[page 2]])}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 罗列为 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Later</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 的 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">task</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{{query (task later)}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 一周内的日记，且包含关键词或标签</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{{query(and (between -6d today)  &quot;#幸福&quot;)}}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="obisidian" tabindex="-1"><a class="header-anchor" href="#obisidian"><span>Obisidian</span></a></h2><ul><li><p><a href="https://sspai.com/post/67619" target="_blank" rel="noopener noreferrer">Obsidian 新手系列之你不可不知的插件</a></p></li><li><p><a href="https://sspai.com/post/72385" target="_blank" rel="noopener noreferrer">每日笔记、日程管理、工作复盘——这是我钻研出的 Obsidian 八般武艺</a></p></li></ul><p>暂时放弃 Obisidian，虽然能按条件罗列页面，但没有 Logseq 方便。<strong>如果后续要继续用，则尝试将日记分为 3 份，然后用 Dataview 整合在一起，在上面进行修改</strong>。</p><p>Obsidian 更习惯记录，日常 Task 由滴答管理，中期且不急的任务则由 Trello 管理。自带的看板功能需要建立笔记，不如 Trello 方便。</p><p>Day Planer 有 sm18 的 Plan 功能。</p><p>部分插件不能自动更新，需要手动下载插件文件，然后粘贴到 <code>.obsidian/plugins</code> 对应文件夹内。</p><h3 id="dataview" tabindex="-1"><a class="header-anchor" href="#dataview"><span>Dataview</span></a></h3><p><a href="https://blacksmithgu.github.io/obsidian-dataview/query/queries/" target="_blank" rel="noopener noreferrer">Dataview</a> 功能更强大，不过用法也复杂许多。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># journals 文本下所有</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dv.list(dv.pages(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;&quot;journals&quot;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).file.lists.text)</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 指定区域不为空</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">.where(t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">t!=&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 包含指定文字</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">.where(t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">t.includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;Logseq&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="obsidian-query-language" tabindex="-1"><a class="header-anchor" href="#obsidian-query-language"><span>Obsidian Query Language</span></a></h3><p><a href="https://github.com/jplattel/obsidian-query-language" target="_blank" rel="noopener noreferrer">Obsidian Query Language</a> 能使用 Query 语言，将符合条件的文件整合到一页。</p><p>但整合出的是链接，并非如 Logseq 一样显示文件内容。想想有没办法，显示文件内容。</p><p>下列代码会抓取，journals 文件夹中包含「今日工作」或「xxxxxxx」的文件。</p><div class="language-oql line-numbers-mode" data-highlighter="shiki" data-ext="oql" data-title="oql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>name: &#39;OR combination list of results&#39;</span></span>\n<span class="line"><span>query: { $and: [{ &quot;path&quot;: &quot;&#39;journals/&quot;}, { $or: [{ &quot;content&quot;: &quot;&#39;今日工作&quot; }, { &quot;content&quot;: &quot;&#39;xxxxxxx&quot; }] }]}</span></span>\n<span class="line"><span>template: &quot;list&quot;</span></span>\n<span class="line"><span>badge: true</span></span>\n<span class="line"><span>debug: true</span></span>\n<span class="line"><span>sort: &quot;title&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="easy-typing" tabindex="-1"><a class="header-anchor" href="#easy-typing"><span>Easy Typing</span></a></h3><p>这是一个 Obsidian 的书写体验增强插件，自动格式化书写，比如自动在中英文之间添加空格，英文首字母大写，标点与文本间智能空格。</p><p>不过双拼容易出错，需要开启「行模式」。</p><h2 id="flomo" tabindex="-1"><a class="header-anchor" href="#flomo"><span>flomo</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#日记</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#输入/播客、电影和读书</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#输出/工作、生活和好物</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#选题</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Inbox（收件箱）：我会将所有临时性的，还未消化的内容放置于此，定期来进行归档、整理或者删除。可以当做大脑的缓存，避免记录的时候纠结放在哪里。</li><li>Area（领域）：<strong>日常你需要精进的「领域」</strong>，比如健康就是一个领域，而跑步则是项目；写作是一个领域，而写一篇公众号文章则是一个项目。</li><li>Project（项目）：是指一个将要发生的独立事件，并且这个事件不是一次性就能完成的，至少需要多个动作才能完成。比如要写一本书，需要整理资料，罗列提纲，撰写内容，联系出版社。类似生活中还有组织一次旅游，录制一期播客等。在执行项目的相关资料</li><li>Resource（资源）：永久笔记，一般来说是兴趣、主题、资产等内容。注意是自己消化过的内容，而非机械的收藏。</li><li>Marketplace 是最重要研究的领域</li><li>Sheep、Books 是最重要的资源（Sheep 是指人物，即羔羊）</li><li>三醒吾身：日记</li></ul><h2 id="thebrain" tabindex="-1"><a class="header-anchor" href="#thebrain"><span>TheBrain</span></a></h2><p>TheBrain 可以把知识无限扩充，都连接在一起。但将工作流导图放入 TheBrain 后发现并不合适，比较适合更细化的内容？</p><ul><li><a href="https://www.bilibili.com/video/BV19a411578T" target="_blank" rel="noopener noreferrer">善用佳软张玉新老师 · TheBrain ≠ 思维导图——运用 TheBrain 的三个阶段</a></li></ul><h2 id="zinc" tabindex="-1"><a class="header-anchor" href="#zinc"><span>Zinc</span></a></h2><p><a href="https://github.com/zinclabs/zinc" target="_blank" rel="noopener noreferrer">Zinc</a> 是一个进行全文索引的搜索引擎。它是 Elasticsearch 的轻量级替代品，运行在不到 100 MB 的 RAM 中。它使用 bluge 作为底层索引库。^[<a href="https://blog.csdn.net/zhangxin09/article/details/125080763" target="_blank" rel="noopener noreferrer">搜索引擎漫谈以及 Zinc 简介</a>]</p><p>原本想对 Windows 本地盘进行搜索，但应该只支持 json 处理过后的索引库，不能对本地硬盘进行索引。</p><h3 id="zinc-初次启动" tabindex="-1"><a class="header-anchor" href="#zinc-初次启动"><span>Zinc 初次启动</span></a></h3><ol><li><p>点击「系统属性」&gt;「高级」&gt;「环境变量」&gt;「用户变量」，新建变量 <code>ZINC_FIRST_ADMIN_USER</code> 和 <code>ZINC_FIRST_ADMIN_PASSWORD</code>。这是后面要用到的账户密码，可自由设置，但密码需要包含大小写字母，</p></li><li><p>在应用目录下打开终端，执行命令：</p></li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zinc.exe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>成功执行后，打开 <code>http://localhost:4080/</code>，就能看到图形化界面了。</p><h3 id="全文索引-bluge" tabindex="-1"><a class="header-anchor" href="#全文索引-bluge"><span>全文索引-Bluge</span></a></h3><p>启动 Zinc，但需要有 Bluge 索引数据库，才能进行全文搜索。</p><p><a href="https://github.com/blugelabs/bluge" target="_blank" rel="noopener noreferrer">Bluge</a> 是基于 GO 的索引/搜索库，使用简单，有如基于磁盘和内存的索引功能。</p><p>如果启动过程中报错，<code>ZINC_FIRST_ADMIN_USER and ZINC_FIRST_ADMIN_PASSWORD must be set on first start. You should also change the credentials after first login.</code>，可能是没有配置好环境变量，或是没有以管理员身份运行终端（win+X，A）所导致的。</p>',72)]))}]]),t=JSON.parse('{"path":"/apps/AppNotes.html","title":"工具笔记","lang":"zh-CN","frontmatter":{"article":false,"title":"工具笔记","icon":"plugin","order":4,"description":"小工具 收集稀奇古怪的小工具 Animated Drawings – 自动将绘画转换为动画 Power Automate Power Automate 自动化应用，分为桌面流和云端流，上手比 Quikcer 复杂，网页自动化弱于 UI. Vision RPA，适合在 Window 不同应用间切换的自动化流。对于免费用户来说，Power Automate...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/newblog/apps/AppNotes.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"工具笔记"}],["meta",{"property":"og:description","content":"小工具 收集稀奇古怪的小工具 Animated Drawings – 自动将绘画转换为动画 Power Automate Power Automate 自动化应用，分为桌面流和云端流，上手比 Quikcer 复杂，网页自动化弱于 UI. Vision RPA，适合在 Window 不同应用间切换的自动化流。对于免费用户来说，Power Automate..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T07:29:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T07:29:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"工具笔记\\",\\"description\\":\\"小工具 收集稀奇古怪的小工具 Animated Drawings – 自动将绘画转换为动画 Power Automate Power Automate 自动化应用，分为桌面流和云端流，上手比 Quikcer 复杂，网页自动化弱于 UI. Vision RPA，适合在 Window 不同应用间切换的自动化流。对于免费用户来说，Power Automate...\\"}"]]},"headers":[{"level":2,"title":"小工具","slug":"小工具","link":"#小工具","children":[]},{"level":2,"title":"Power Automate","slug":"power-automate","link":"#power-automate","children":[{"level":3,"title":"使用技巧","slug":"使用技巧","link":"#使用技巧","children":[]},{"level":3,"title":"报错重置","slug":"报错重置","link":"#报错重置","children":[]},{"level":3,"title":"创建 Microsoft 组织账户","slug":"创建-microsoft-组织账户","link":"#创建-microsoft-组织账户","children":[]},{"level":3,"title":"管理组织用户","slug":"管理组织用户","link":"#管理组织用户","children":[]}]},{"level":2,"title":"阿里云盘","slug":"阿里云盘","link":"#阿里云盘","children":[]},{"level":2,"title":"双链笔记","slug":"双链笔记","link":"#双链笔记","children":[]},{"level":2,"title":"Logseq","slug":"logseq","link":"#logseq","children":[{"level":3,"title":"快速使用","slug":"快速使用","link":"#快速使用","children":[]},{"level":3,"title":"query","slug":"query","link":"#query","children":[]}]},{"level":2,"title":"Obisidian","slug":"obisidian","link":"#obisidian","children":[{"level":3,"title":"Dataview","slug":"dataview","link":"#dataview","children":[]},{"level":3,"title":"Obsidian Query Language","slug":"obsidian-query-language","link":"#obsidian-query-language","children":[]},{"level":3,"title":"Easy Typing","slug":"easy-typing","link":"#easy-typing","children":[]}]},{"level":2,"title":"flomo","slug":"flomo","link":"#flomo","children":[]},{"level":2,"title":"TheBrain","slug":"thebrain","link":"#thebrain","children":[]},{"level":2,"title":"Zinc","slug":"zinc","link":"#zinc","children":[{"level":3,"title":"Zinc 初次启动","slug":"zinc-初次启动","link":"#zinc-初次启动","children":[]},{"level":3,"title":"全文索引-Bluge","slug":"全文索引-bluge","link":"#全文索引-bluge","children":[]}]}],"git":{"createdTime":1733124588000,"updatedTime":1733124588000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":9.88,"words":2964},"filePathRelative":"apps/AppNotes.md","localizedDate":"2024年12月2日","excerpt":"<h2>小工具</h2>\\n<blockquote>\\n<p>收集稀奇古怪的小工具</p>\\n</blockquote>\\n<ul>\\n<li><a href=\\"https://www.appinn.com/animated-drawings/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Animated Drawings – 自动将绘画转换为动画</a></li>\\n</ul>\\n<h2>Power Automate</h2>\\n<p><a href=\\"https://sspai.com/series/273/list\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Power Automate</a> 自动化应用，分为桌面流和<a href=\\"https://make.powerautomate.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">云端流</a>，上手比 Quikcer 复杂，网页自动化弱于 UI. Vision RPA，适合在 Window 不同应用间切换的自动化流。<strong>对于免费用户来说，Power Automate 都得手动执行流，个人账户与组织账户无明显区别。</strong></p>","autoDesc":true}')}}]);