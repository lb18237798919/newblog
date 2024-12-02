import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as a,a as t,b as n,d as r,e as d}from"./app-fe9da4b4.js";const u={},p={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},v={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://waline.js.org/guide/server/notification.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://waline.js.org/reference/server.html",target:"_blank",rel:"noopener noreferrer"},G={class:"footnotes"},y={class:"footnotes-list"},q={id:"footnote1",class:"footnote-item"},V={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"};function w(W,e){const i=o("ExternalLinkIcon");return s(),a("div",null,[e[24]||(e[24]=t("p",null,"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。",-1)),e[25]||(e[25]=t("h2",{id:"评论插件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),n(" 评论插件")],-1)),t("ul",null,[t("li",null,[t("a",p,[e[0]||(e[0]=n("Waline")),r(i)]),e[1]||(e[1]=n("：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。"))]),t("li",null,[t("a",g,[e[2]||(e[2]=n("Valine")),r(i)]),e[3]||(e[3]=n("：快速、简洁且高效的无后端评论系统，可匿名互动。"))]),t("li",null,[t("a",f,[e[4]||(e[4]=n("giscus")),r(i)]),e[6]||(e[6]=n("：基于 github discussion，近似于论坛。查看 ")),t("a",b,[e[5]||(e[5]=n("配置方法")),r(i)]),e[7]||(e[7]=n("。"))]),t("li",null,[t("a",m,[e[8]||(e[8]=n("Gitalk")),r(i)]),e[9]||(e[9]=n("：基于 github commit，需配置独立库用于存储评论。"))]),t("li",null,[t("a",v,[e[10]||(e[10]=n("Gitter")),r(i)]),e[13]||(e[13]=n("：要登录的公共聊天室。样例如：")),t("a",k,[e[11]||(e[11]=n("boardgame")),r(i)]),e[14]||(e[14]=n("，")),t("a",h,[e[12]||(e[12]=n("regauge")),r(i)]),e[15]||(e[15]=n("。"))])]),e[26]||(e[26]=t("h2",{id:"waline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#waline","aria-hidden":"true"},"#"),n(" Waline")],-1)),e[27]||(e[27]=t("p",null,"Waline 支持 Akismet 反垃圾评论和免注册留言，不过匿名留言会带来安全隐患，建议开启评论通知，避免极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。",-1)),t("p",null,[e[18]||(e[18]=n("Vercel 项目中选择「Overview」>「Settings」>「Environment Variables」，然后按照 ")),t("a",c,[e[16]||(e[16]=n("Waline 评论通知")),r(i)]),e[19]||(e[19]=n("配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 ")),t("a",x,[e[17]||(e[17]=n("Waline 服务端配置")),r(i)]),e[20]||(e[20]=n("。配置成功后，选择「Overview」>「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。"))]),e[28]||(e[28]=d(`<p>目前 <code>*.vercel.app</code> 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。</p><h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>将以下代码放入 docsify 页面中，即可启动 Gitalk：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;

&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    /* 使用下面的 Javascript 代码生成 gitalk 插件 */
    const gitalk = new Gitalk({
        clientID: &#39;2f3da234d27ed9a7c290&#39;,
        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,
        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)
        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)
        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep">`,9)),t("section",G,[t("ol",y,[t("li",q,[t("p",null,[t("a",V,[e[21]||(e[21]=n("超 Nice 的评论组件 —— Gitalk")),r(i)]),e[22]||(e[22]=n()),e[23]||(e[23]=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1))])])])])])}const H=l(u,[["render",w],["__file","Comments.html.vue"]]);export{H as default};
