const e=JSON.parse('{"key":"v-a66d016a","path":"/back_end/linux/11.html","title":"11 【实操篇-定时任务 软件安装 克隆虚拟机】","lang":"zh-CN","frontmatter":{"description":"11 【实操篇-定时任务 软件安装 克隆虚拟机】 1.crontab 系统定时任务 在实际工作中，系统的定时任务一般是需要重复执行的，这就需要使用 crontab 命令来执行循环定时任务。 每个用户都可以实现自己的 crontab 定时任务，只需使用这个用户身份执行“crontab -e”命令即可。当然，这个用户不能写入 /etc/cron.deny 文件。 crontab 命令的基本格式如下： [root@localhost ~]# crontab [选项] [file]","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/newblog/back_end/linux/11.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"11 【实操篇-定时任务 软件安装 克隆虚拟机】"}],["meta",{"property":"og:description","content":"11 【实操篇-定时任务 软件安装 克隆虚拟机】 1.crontab 系统定时任务 在实际工作中，系统的定时任务一般是需要重复执行的，这就需要使用 crontab 命令来执行循环定时任务。 每个用户都可以实现自己的 crontab 定时任务，只需使用这个用户身份执行“crontab -e”命令即可。当然，这个用户不能写入 /etc/cron.deny 文件。 crontab 命令的基本格式如下： [root@localhost ~]# crontab [选项] [file]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11 【实操篇-定时任务 软件安装 克隆虚拟机】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.crontab 系统定时任务","slug":"_1-crontab-系统定时任务","link":"#_1-crontab-系统定时任务","children":[]},{"level":2,"title":"2.软件包管理","slug":"_2-软件包管理","link":"#_2-软件包管理","children":[{"level":3,"title":"2.1 源码包和二进制包","slug":"_2-1-源码包和二进制包","link":"#_2-1-源码包和二进制包","children":[]},{"level":3,"title":"2.2 RPM包统一命名规则","slug":"_2-2-rpm包统一命名规则","link":"#_2-2-rpm包统一命名规则","children":[]},{"level":3,"title":"2.3 RPM包安装、卸载和升级","slug":"_2-3-rpm包安装、卸载和升级","link":"#_2-3-rpm包安装、卸载和升级","children":[]},{"level":3,"title":"2.4 rpm命令查询软件包","slug":"_2-4-rpm命令查询软件包","link":"#_2-4-rpm命令查询软件包","children":[]},{"level":3,"title":"2.5 yum是什么","slug":"_2-5-yum是什么","link":"#_2-5-yum是什么","children":[]},{"level":3,"title":"2.6 yum命令（查询、安装、升级和卸载软件包）","slug":"_2-6-yum命令-查询、安装、升级和卸载软件包","link":"#_2-6-yum命令-查询、安装、升级和卸载软件包","children":[]},{"level":3,"title":"2.7 yum命令补充","slug":"_2-7-yum命令补充","link":"#_2-7-yum命令补充","children":[]}]},{"level":2,"title":"3.克隆虚拟机","slug":"_3-克隆虚拟机","link":"#_3-克隆虚拟机","children":[]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":26.42,"words":7925},"filePathRelative":"back_end/linux/11.md","localizedDate":"2024年12月2日","excerpt":"<h1> 11 【实操篇-定时任务 软件安装 克隆虚拟机】</h1>\\n<h2> 1.crontab 系统定时任务</h2>\\n<p>在实际工作中，系统的定时任务一般是需要重复执行的，这就需要使用 crontab 命令来执行循环定时任务。</p>\\n<p>每个用户都可以实现自己的 crontab 定时任务，只需使用这个用户身份执行“crontab -e”命令即可。当然，这个用户不能写入 /etc/cron.deny 文件。</p>\\n<p>crontab 命令的基本格式如下：</p>\\n<p><code>[root@localhost ~]# crontab [选项] [file]</code></p>","autoDesc":true}');export{e as data};
