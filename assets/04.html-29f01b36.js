import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,e as i}from"./app-fe9da4b4.js";const t={};function s(n,p){return e(),r("div",null,p[0]||(p[0]=[i('<h1 id="_04-【总体设计】" tabindex="-1"><a class="header-anchor" href="#_04-【总体设计】" aria-hidden="true">#</a> 04 【总体设计】</h1><p>总体设计的基本目的就是回答“概括地说，系统应该如何实现”这个问题，因此，总体设计又称为概要设计或初步设计。</p><p>总体设计阶段的另一项重要任务是设计软件的结构，也就是要确定系统中每个程序是由哪些模块组成的，以及这些模块相互间的关系。</p><h2 id="_1-设计过程" tabindex="-1"><a class="header-anchor" href="#_1-设计过程" aria-hidden="true">#</a> 1.设计过程</h2><p><strong>1.</strong> <strong>设想供选择的方案</strong></p><p>在总体设计阶段分析员应该考虑各种可能的实现方案，并且力求从中选出最佳方案。</p><p>需求分析阶段得出的数据流图是总体设计的极好的出发点。</p><p>设想供选择的方案的一种常用的方法是，设想把数据流图中的处理分组的各种可能的方法，抛弃在技术上行不通的分组方法(例如，组内不同处理的执行时间不相容)，余下的分组方法代表可能的实现策略，并且可以启示供选择的物理系统。</p><p><strong>2.选取合理的方案</strong></p><p>应该从前一步得到的一系列供选择的方案中选取若干个合理的方案，通常至少选取低成本、中等成本和高成本的3种方案。在判断哪些方案合理时应该考虑在问题定义和可行性研究阶段确定的工程规模和目标，有时可能还需要进一步征求用户的意见。</p><p>对每个合理的方案，分析员都应该准备下列4份资料。</p><p>(1) 系统流程图。</p><p>(2) 组成系统的物理元素清单。</p><p>(3) 成本/效益分析。</p><p>(4) 实现这个系统的进度计划。</p><p><strong>3.推荐最佳方案</strong></p><p>用户和有关的技术专家应该认真审查分析员所推荐的最佳系统，如果该系统确实符合用户的需要，并且是在现有条件下完全能够实现的，则应该提请使用部门负责人进一步审批。在使用部门的负责人也接受了分析员所推荐的方案之后，将进入总体设计过程的下一个重要阶段——结构设计。</p><p><strong>4.功能分解</strong></p><p>为了最终实现目标系统，必须设计出组成这个系统的所有程序和文件(或数据库)。对程序(特别是复杂的大型程序)的设计，通常分为两个阶段完成：首先进行结构设计，然后进行过程设计。</p><p>为确定软件结构，首先需要从实现角度把复杂的功能进一步分解。分析员结合算法描述仔细分析数据流图中的每个处理，如果一个处理的功能过分复杂，必须把它的功能适当地分解成一系列比较简单的功能。</p><p><strong>5.</strong> <strong>设计软件结构</strong></p><p>通常程序中的一个模块完成一个适当的子功能。应该把模块组织成良好的层次系统，顶层模块调用它的下层模块以实现程序的完整功能，每个下层模块再调用更下层的模块，完成程序的一个子功能，最下层的模块完成最具体的功能。</p><p><strong>6.</strong> <strong>设计数据库</strong></p><p>对于需要使用数据库的那些应用系统，软件工程师应该在需求分析阶段所确定的系统数据需求的基础上，进一步设计数据库。</p><p><strong>7.制定测试计划</strong></p><p>在软件开发的早期阶段考虑测试问题，能促使软件设计人员在设计时注意提高软件的可测试性。第7章具体讨论</p><p><strong>8.</strong> <strong>书写文档</strong></p><p>应该用正式的文档记录总体设计的结果，在这个阶段应该完成的文档通常有下述几种。</p><p>(1) 系统说明</p><p>(2) 用户手册</p><p>(3) 测试计划包括测试策略，测试方案，预期的测试结果，测试进度计划等</p><p>(4) 详细的实现计划</p><p>(5) 数据库设计结果</p><p><strong>9.审查和复审</strong></p><p>最后应该对总体设计的结果进行严格的技术审查，在技术审查通过之后再由客户从管理角度进行复审。</p><h2 id="_2-设计原理" tabindex="-1"><a class="header-anchor" href="#_2-设计原理" aria-hidden="true">#</a> 2.设计原理</h2><h3 id="_2-1-模块化" tabindex="-1"><a class="header-anchor" href="#_2-1-模块化" aria-hidden="true">#</a> 2.1 模块化</h3><p><strong>模块</strong>是由边界元素限定的相邻程序元素（例如，数据说明，可执行的语句）的序列，而且有一个总体标识符代表它。<strong>模块</strong>是构成程序的基本构件。</p><p><strong>模块化</strong>就是把程序划分成独立命名且可独立访问的模块，每个模块完成一个子功能，把这些模块集成起来构成一个整体，可以完成指定的功能满足用户的需求。</p><p>模块化是为了使一个复杂的大型程序能被人的智力所管理，是软件应该具备的唯一属性。</p><h3 id="_2-2-抽象" tabindex="-1"><a class="header-anchor" href="#_2-2-抽象" aria-hidden="true">#</a> 2.2 抽象</h3><p>现实世界中一定事物、状态或过程之间总存在着某些相似的方面(共性)。把这些相似的方面集中和概括起来，暂时忽略它们之间的差异，这就是抽象。<strong>抽象就是抽出事物本质特性而暂时不考虑细节。</strong></p><h3 id="_2-3-逐步求精" tabindex="-1"><a class="header-anchor" href="#_2-3-逐步求精" aria-hidden="true">#</a> 2.3 逐步求精</h3><p>逐步求精定义为为了能集中精力解决主要问题而尽量推迟对问题细节的考虑。</p><h3 id="_2-4-信息隐藏和局部化" tabindex="-1"><a class="header-anchor" href="#_2-4-信息隐藏和局部化" aria-hidden="true">#</a> 2.4 信息隐藏和局部化</h3><p>​ 信息隐藏原理：应该这样设计和确定模块，使得一个模块内包含的信息(过程和数据)对于不需要这些信息的模块来说，是不能访问的。</p><p>​ 局部化是指把一些关系密切的软件元素物理地放得彼此靠近。</p><p>​ 如果在测试期间和以后的软件维护期间需要修改软件，使用信息隐藏原理作为模块化系统设计的标准就会带来极大好处。</p><h3 id="_2-5-模块独立" tabindex="-1"><a class="header-anchor" href="#_2-5-模块独立" aria-hidden="true">#</a> 2.5 模块独立</h3><p>独立的模块容易开发、维护和测试。 模块的独立程度有两个标准度量：内聚和耦合</p><h4 id="耦合" tabindex="-1"><a class="header-anchor" href="#耦合" aria-hidden="true">#</a> 耦合</h4><p>耦合是对于不同模块间互联程度的度量 耦合分为</p><ul><li><p>数据耦合</p><p>两个模块彼此间通过参数交换信息，而且交换的信息仅仅是数据，那么这种耦合称为数据耦合。数据耦合是低耦合。系统中至少必须存在这种耦合。</p></li><li><p>控制耦合</p><p>传递的信息中有控制信息(尽管有时这种控制信息以数据的形式出现)，则这种耦合称为控制耦合。控制耦合是中等程度的耦合。</p></li><li><p>特征耦合</p><p>当把整个数据结构作为参数传递而被调用的模块只需要使用其中一部分数据元素时，就出现了特征耦合。</p></li><li><p>公共环境耦合</p><p>当两个或多个模块通过一个公共数据环境相互作用时，它们之间的耦合称为公共环境耦合。</p><p>公共环境可以是全程变量、共享的通信区、内存的公共覆盖区、任何存储介质上的文件、物理设备等。</p><p>公共环境耦合的复杂程度随耦合的模块个数而变化，当耦合的模块个数增加时复杂程度显著增加。。</p></li><li><p>内容耦合</p><ul><li>一个模块访问另一个模块的内部数据</li><li>一个模块不通过正常入口进入另一模块的内部</li><li>两模块程序代码重叠</li><li>一个模块有多个入口</li></ul></li></ul><blockquote><p><strong>内容耦合</strong>是最高程度耦合，应坚决避免使用内容耦合。 耦合原则：尽量使用数据耦合，少用控制耦合和特征耦合，限制公共环境耦合范围，完全不用内容耦合。</p></blockquote><h4 id="内聚" tabindex="-1"><a class="header-anchor" href="#内聚" aria-hidden="true">#</a> 内聚</h4><p>内聚衡量一个模块内部各个元素彼此结合的紧密程度。</p><p>内聚标志着一个模块内各个元素彼此结合的紧密程度，它是信息隐藏和局部化概念的自然扩展。简单地说，理想内聚的模块只做一件事情。</p><p>内聚和耦合是密切相关的，模块内的高内聚往往意味着模块间的松耦合。</p><p>内聚分为三大类低内聚、中内聚和高内聚</p><p>① <strong>低内聚</strong></p><p>一个模块完成一组任务，这些任务彼此间即使有关系，关系也是很松散的，就叫做偶然内聚。</p><p>一个模块完成的任务在逻辑上属于相同或相似的一类，则称为逻辑内聚。</p><p>一个模块包含的任务必须在同一段时间内执行，就叫时间内聚。</p><p>②<strong>中内聚</strong></p><p>一个模块内的处理元素是相关的，而且必须以特定次序执行，则称为过程内聚。</p><p>模块中所有元素都使用同一个输入数据和(或)产生同一个输出数据，则称为通信内聚。</p><p>③<strong>高内聚</strong></p><p>一个模块内的处理元素和同一个功能密切相关，而且这些处理必须顺序执行(通常一个处理元素的输出数据作为下一个处理元素的输入数据)，则称为顺序内聚。</p><p>模块内所有处理元素属于一个整体，完成一个单一的功能，则称为功能内聚。功能内聚是最高程度的内聚。</p><p>耦合和内聚的概念是Constantine,Yourdon,Myers和Stevens等人提出来的。上述7种内聚的优劣评分，将得到如下结果：</p><figure><img src="https://article.biliimg.com/bfs/article/074fa4152def13353e0fe509c3af53c17cc16dfe.png" alt="image-20230204201314507" tabindex="0" loading="lazy"><figcaption>image-20230204201314507</figcaption></figure><p>事实上，没有必要精确确定内聚的级别。重要的是设计时高内聚，并且能够辨认出低内聚的模块，有能力通过修改设计提高模块的内聚程度并且降低模块间的耦合程度，从而获得较高的模块独立性。</p><h2 id="_3-启发规则" tabindex="-1"><a class="header-anchor" href="#_3-启发规则" aria-hidden="true">#</a> 3.启发规则</h2><p><strong>1.设计出软件的初步结构以后，应该审查分析这个结构，通过模块分解或合并，力求降低耦合提高内聚。</strong></p><p><img src="https://article.biliimg.com/bfs/article/14fe8203b6d9f1f27a8b0a3ff5c62767493c9d5b.png" alt="image-20230204201800466" style="zoom:67%;"><strong>2.</strong> <strong>模块规模应该适中</strong></p><p>一个模块的规模不应过大，最好能写在一页纸内(通常不超过60行语句)</p><p><strong>3.深度、宽度、扇出和扇入都应适当</strong></p><p>深度：软件结构中控制的层数</p><p>宽度：软件结构内同一个层次上的模块总数的最大值</p><p>扇出：一个模块直接控制(调用)的模块数目</p><p>扇入：一个模块被多少个上级模块直接调用的数目</p><p><strong>4.模块的作用域应该在控制域之内</strong></p><p>作用域：受该模块内一个判定影响的所有模块的集合。</p><p>控制域：模块本身以及所有直接或间接从属于它的模块的集合。</p><p>在一个设计得很好的系统中，所有受判定影响的模块应该都从属于做出判定的那个模块，最好局限于做出判定的那个模块本身及它的直属下级模块。</p><img src="https://article.biliimg.com/bfs/article/4b6f5a5a60893d05ebb3af0ffcf422a2fbe7e9fa.png" alt="image-20230204201837091" style="zoom:67%;"><p><strong>5.力争降低模块接口的复杂程度</strong></p><p>模块接口复杂是软件发生错误的一个主要原因。应该仔细设计模块接口，使得信息传递简单并且和模块的功能一致。</p><p><strong>6.设计单入口单出口的模块</strong></p><p>这条启发式规则警告软件工程师不要使模块间出现内容耦合。当从顶部进入模块并且从底部退出来时，软件是比较容易理解的，因此也是比较容易维护的。</p><p><strong>7.模块功能应该可以预测</strong></p><p>模块的功能应该能够预测，但也要防止模块功能过分局限。</p><h2 id="_4-描绘软件结构的图形工具" tabindex="-1"><a class="header-anchor" href="#_4-描绘软件结构的图形工具" aria-hidden="true">#</a> 4.描绘软件结构的图形工具</h2><h3 id="_4-1-层次图和hipo图" tabindex="-1"><a class="header-anchor" href="#_4-1-层次图和hipo图" aria-hidden="true">#</a> 4.1 层次图和HIPO图</h3><p>层次图用来描绘软件的层次结构。数据结构的层次方框图相同，但是表现的内容却完全不同。层次图很适于在自顶向下设计软件的过程中使用。</p><img src="https://article.biliimg.com/bfs/article/579cdf0e7fe01611991c59b3d9db6f23fb71dd0b.png" alt="image-20230204202532287" style="zoom:50%;"><p>HIPO图是美国IBM公司发明的“层次图加输入/处理/输出图”的英文缩写。为了能使HIPO图具有可追踪性，在H图(层次图)里除了最顶层的方框之外，每个方框都加了编号。</p><img src="https://article.biliimg.com/bfs/article/e91c3c95de9990884a698213e66d4fdcb1e98d5a.png" alt="image-20230204202551001" style="zoom:50%;"><h3 id="_4-2-结构图" tabindex="-1"><a class="header-anchor" href="#_4-2-结构图" aria-hidden="true">#</a> 4.2 结构图</h3><p>Yourdon提出的结构图是进行软件结构设计的工具。图中一个方框代表一个模块，框内注明模块的名字或主要功能；方框之间的箭头(或直线)表示模块的调用关系。尾部是空心圆表示传递的是数据，实心圆表示传递的是控制信息。</p><img src="https://article.biliimg.com/bfs/article/195034cf412a752b1a82daed0e8be12b11a48eec.png" alt="image-20230204202601657" style="zoom:50%;"><p>一些附加的符号，可以表示模块的选择调用或循环调用。左图表示当模块M中某个判定为真时调用模块A，为假时调用模块B。右图表示模块M循环调用模块A、B和C。</p><img src="https://article.biliimg.com/bfs/article/80c86ce96664e1ec899865d0684b5403be195476.png" alt="image-20230204202628055" style="zoom:50%;"><img src="https://article.biliimg.com/bfs/article/a4a94e1d60e2556db04af230efb39d4326cf96c2.png" alt="image-20230204202631387" style="zoom:50%;"><h2 id="_5-面向数据流的设计方法" tabindex="-1"><a class="header-anchor" href="#_5-面向数据流的设计方法" aria-hidden="true">#</a> 5.面向数据流的设计方法</h2><h3 id="_5-1-概念" tabindex="-1"><a class="header-anchor" href="#_5-1-概念" aria-hidden="true">#</a> 5.1 概念</h3><p>面向数据流的设计方法把信息流映射成软件结构，信息流的类型决定了映射的方法。信息流有下述两种类型。</p><p><strong>1）变换流</strong></p><p>信息沿输入通路进入系统，由外部形式变换成内部形式，进入系统的信息通过变换中心，经加工处理以后再沿输出通路变换成外部形式离开软件系统。当数据流图具有这些特征时，这种信息流就叫作变换流。</p><img src="https://article.biliimg.com/bfs/article/f5be9b77c288c9810d0a326b785818b83878a1c9.png" alt="image-20230204202652471" style="zoom:50%;"><p><strong>2）事务流</strong></p><p>数据沿输入通路到达一个处理T，这个处理根据输入数据的类型在若干个动作序列中选出一个来执行。这类数据流应该划为一类特殊的数据流，称为事务流。图中的处理T称为事务中心，它完成下述任务。</p><p>(1) 接收输入数据(输入数据又称为事务)。</p><p>(2) 分析每个事务以确定它的类型。</p><p>(3) 根据事务类型选取一条活动通路。</p><img src="https://article.biliimg.com/bfs/article/ad35133cf58dd5a1549392ae3f3b308eabe5dfbc.png" alt="image-20230204202700643" style="zoom:50%;"><p><strong>3）设计过程</strong></p><img src="https://article.biliimg.com/bfs/article/53a4828b6826a3addad09640b3c24e4fb61c0009.png" alt="image-20230204202707447" style="zoom:50%;"><h2 id="_6-本章小结" tabindex="-1"><a class="header-anchor" href="#_6-本章小结" aria-hidden="true">#</a> 6.本章小结</h2><ol><li><p>总体设计阶段主要由系统设计和结构设计两阶段组成。</p></li><li><p>进行软件结构设计时应该遵循的最主要的原理是模块独立原理。</p></li><li><p>在软件开发过程中既要充分重视和利用这些启发式规则，又要从实际情况出发避免生搬硬套。</p></li><li><p>层次图和结构图是描绘软件结构的常用工具。</p></li><li><p>用形式化的方法由数据流图映射出软件结构。</p></li></ol>',120)]))}const c=a(t,[["render",s],["__file","04.html.vue"]]);export{c as default};
