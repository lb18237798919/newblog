"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4493],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,n]of i)a[s]=n;return a}},565:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>t,data:()=>l});var n=a(641);const e={},t=(0,a(6262).A)(e,[["render",function(s,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h2><p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 <code>main.yml</code>，放于 <code>.github\\workflows</code> 目录下，repo 发生指定调节的改变时，Actions 会自动运行。^[<a href="https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions" target="_blank" rel="noopener noreferrer">了解 GitHub Actions</a>]</p><ul><li><a href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">GitHub Actions 官方市场</a></li><li><a href="https://github.com/sdras/awesome-actions" target="_blank" rel="noopener noreferrer">Awesome Actions</a></li></ul><p>如果 GitHub Actions 命令中有涉及密码等私密信息，则进入项目仓库的「setting」&gt;「Secrets」&gt;「Action」，添加密钥进行加密处理。比如新建密钥 PERSONAL_TOKEN，Actions 命令中使用 <code>${{ secrets.PERSONAL_TOKEN }}</code> 来指代该密钥。</p><h3 id="不同仓库间复制" tabindex="-1"><a class="header-anchor" href="#不同仓库间复制"><span>不同仓库间复制</span></a></h3><p>复制文件到目的地，文档没变化则不会执行。案例为将当前仓库 main 分支下 docs 的 README.md 文件复制到另一个仓库 rockbenben/LearnData/ 路径下，如果目标路径存在相同文件，则将覆盖。如果让 <code>clean: true</code> 生效，Actions 会将目标路径情况，然后执行复制。</p><p>此动作需按 <a href="https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token" target="_blank" rel="noopener noreferrer">Creating a personal access token</a> 建立<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">个人访问令牌</a>，勾选权限「repo Full control of private repositories」，然后将该 token 值其保存在项目仓库的 Action 密钥。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Copy file</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">andstor/copycat-action@v3</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    personal_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">${{ secrets.PERSONAL_TOKEN }}</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    src_path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docs/README.md</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_owner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rockbenben</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_repo_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LearnData</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    dst_branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    src_branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    #clean: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions-失败重试" tabindex="-1"><a class="header-anchor" href="#actions-失败重试"><span>Actions 失败重试</span></a></h3><p>在 job 和 step 中使用 if 语句，只有满足条件时才执行具体的 job 或 step。^[<a href="https://blog.csdn.net/Ber_Bai/article/details/120310024" target="_blank" rel="noopener noreferrer">最全总结，GitHub Action 自动化部署</a>]</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 任务状态检查函数</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">success</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 当上一步执行成功时返回 true</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">always</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 总是返回 true</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cancelled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 当 workflow 被取消时返回 true</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">failure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() # 当上一步执行失败时返回 true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>first_step 会总是执行，second_step 需要上一步 first_step 执行成功才会执行，third_step 只有上一步 second_step 执行失败才执行。当 third_step 与 second_step 命令相同时，就可以达到失败重试的效果了。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  first_job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">My first job</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">first_step</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">second_step</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">success()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">third_step</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">failure()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uses-版本号" tabindex="-1"><a class="header-anchor" href="#uses-版本号"><span>uses 版本号</span></a></h3><p><code>uses: SamKirkland/FTP-Deploy-Action@4.3.1</code>：uses 会指定此步骤运行 SamKirkland/FTP-Deploy-Action 存储库中的 4.3.1 版本。</p><p>但有时 Actions 的版本不会这么快更新，又必须使用最新版，可以将版本号改为 branch name，比如 <code>uses: SamKirkland/FTP-Deploy-Action@master</code>。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="github-忽略指定文件" tabindex="-1"><a class="header-anchor" href="#github-忽略指定文件"><span>GitHub 忽略指定文件</span></a></h3><p>项目路径新建一个命名为 .gitignore 的文件，将想要忽略的文件夹和文件写入 .gitignore 文件，换行分隔。</p><p>比如要忽略 node_modules 文件夹，就直接在文件中输入 node_modules。</p>',20)]))}]]),l=JSON.parse('{"path":"/deploy/GitHub.html","title":"GitHub","lang":"zh-CN","frontmatter":{"article":false,"title":"GitHub","icon":"github","order":3,"description":"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\workflows 目录下，repo ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/newblog/deploy/GitHub.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"GitHub"}],["meta",{"property":"og:description","content":"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\workflows 目录下，repo ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T07:29:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T07:29:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"GitHub\\",\\"description\\":\\"GitHub Actions GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 main.yml，放于 .github\\\\\\\\workflows 目录下，repo ...\\"}"]]},"headers":[{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[{"level":3,"title":"不同仓库间复制","slug":"不同仓库间复制","link":"#不同仓库间复制","children":[]},{"level":3,"title":"Actions 失败重试","slug":"actions-失败重试","link":"#actions-失败重试","children":[]},{"level":3,"title":"uses 版本号","slug":"uses-版本号","link":"#uses-版本号","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"GitHub 忽略指定文件","slug":"github-忽略指定文件","link":"#github-忽略指定文件","children":[]}]}],"git":{"createdTime":1733124588000,"updatedTime":1733124588000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":686},"filePathRelative":"deploy/GitHub.md","localizedDate":"2024年12月2日","excerpt":"<h2>GitHub Actions</h2>\\n<p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。将 GitHub Actions 命令保存为 <code>main.yml</code>，放于 <code>.github\\\\workflows</code> 目录下，repo 发生指定调节的改变时，Actions 会自动运行。^[<a href=\\"https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">了解 GitHub Actions</a>]</p>","autoDesc":true}')}}]);