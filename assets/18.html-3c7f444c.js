const e=JSON.parse('{"key":"v-3faf4d58","path":"/front_end/front_end_framework/react/18.html","title":"18 【Redux Toolkit】","lang":"zh-CN","frontmatter":{"description":"18 【Redux Toolkit】 上边的案例我们一直在使用Redux核心库来使用Redux，除了Redux核心库外Redux还为我们提供了一种使用Redux的方式——Redux Toolkit。它的名字起的非常直白，Redux工具包，简称RTK。RTK可以帮助我们处理使用Redux过程中的重复性工作，简化Redux中的各种操作。 1.Redux Toolkit 概览 1.1 Redux Toolkit 是什么？ Redux Toolkit 是官方推荐的编写 Redux 逻辑的方法。 它包含我们对于构建 Redux 应用程序必不可少的包和函数。 Redux Toolkit 的构建简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序变得更加容易。可以说 Redux Toolkit 就是目前 Redux 的最佳实践方式。","head":[["meta",{"property":"og:url","content":"https://lb18237798919.github.io/newblog/myblog/front_end/front_end_framework/react/18.html"}],["meta",{"property":"og:site_name","content":"blog"}],["meta",{"property":"og:title","content":"18 【Redux Toolkit】"}],["meta",{"property":"og:description","content":"18 【Redux Toolkit】 上边的案例我们一直在使用Redux核心库来使用Redux，除了Redux核心库外Redux还为我们提供了一种使用Redux的方式——Redux Toolkit。它的名字起的非常直白，Redux工具包，简称RTK。RTK可以帮助我们处理使用Redux过程中的重复性工作，简化Redux中的各种操作。 1.Redux Toolkit 概览 1.1 Redux Toolkit 是什么？ Redux Toolkit 是官方推荐的编写 Redux 逻辑的方法。 它包含我们对于构建 Redux 应用程序必不可少的包和函数。 Redux Toolkit 的构建简化了大多数 Redux 任务，防止了常见错误，并使编写 Redux 应用程序变得更加容易。可以说 Redux Toolkit 就是目前 Redux 的最佳实践方式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T08:17:30.000Z"}],["meta",{"property":"article:author","content":"lb"}],["meta",{"property":"article:modified_time","content":"2024-12-02T08:17:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"18 【Redux Toolkit】\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T08:17:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lb\\",\\"url\\":\\"https://lb18237798919.github.io/newblog\\"}]}"]]},"headers":[{"level":2,"title":"1.Redux Toolkit 概览","slug":"_1-redux-toolkit-概览","link":"#_1-redux-toolkit-概览","children":[{"level":3,"title":"1.1  Redux Toolkit 是什么？","slug":"_1-1-redux-toolkit-是什么","link":"#_1-1-redux-toolkit-是什么","children":[]},{"level":3,"title":"1.2 目的","slug":"_1-2-目的","link":"#_1-2-目的","children":[]},{"level":3,"title":"1.3 为什么需要使用 Redux Toolkit","slug":"_1-3-为什么需要使用-redux-toolkit","link":"#_1-3-为什么需要使用-redux-toolkit","children":[]},{"level":3,"title":"1.4 文档链接","slug":"_1-4-文档链接","link":"#_1-4-文档链接","children":[]}]},{"level":2,"title":"2.安装","slug":"_2-安装","link":"#_2-安装","children":[]},{"level":2,"title":"3.基础开发流程","slug":"_3-基础开发流程","link":"#_3-基础开发流程","children":[{"level":3,"title":"3.1 创建 Redux State Slice","slug":"_3-1-创建-redux-state-slice","link":"#_3-1-创建-redux-state-slice","children":[]},{"level":3,"title":"3.2 将 Slice Reducers 添加到 Store 中","slug":"_3-2-将-slice-reducers-添加到-store-中","link":"#_3-2-将-slice-reducers-添加到-store-中","children":[]},{"level":3,"title":"3.3 store加到全局","slug":"_3-3-store加到全局","link":"#_3-3-store加到全局","children":[]},{"level":3,"title":"3.4 在 React 组件中使用 Redux 状态和操作","slug":"_3-4-在-react-组件中使用-redux-状态和操作","link":"#_3-4-在-react-组件中使用-redux-状态和操作","children":[]},{"level":3,"title":"3.5 小总结","slug":"_3-5-小总结","link":"#_3-5-小总结","children":[]}]},{"level":2,"title":"4.补充解析上面计数器案例","slug":"_4-补充解析上面计数器案例","link":"#_4-补充解析上面计数器案例","children":[{"level":3,"title":"4.1 创建 Slice Reducer 和 Action","slug":"_4-1-创建-slice-reducer-和-action","link":"#_4-1-创建-slice-reducer-和-action","children":[]},{"level":3,"title":"4.2 Reducer 的规则","slug":"_4-2-reducer-的规则","link":"#_4-2-reducer-的规则","children":[]},{"level":3,"title":"4.3 Reducer 与 Immutable 更新","slug":"_4-3-reducer-与-immutable-更新","link":"#_4-3-reducer-与-immutable-更新","children":[]}]},{"level":2,"title":"5.传递参数","slug":"_5-传递参数","link":"#_5-传递参数","children":[{"level":3,"title":"5.1 定义接受参数","slug":"_5-1-定义接受参数","link":"#_5-1-定义接受参数","children":[]},{"level":3,"title":"5.2 传递参数","slug":"_5-2-传递参数","link":"#_5-2-传递参数","children":[]},{"level":3,"title":"5.3 Action Payloads","slug":"_5-3-action-payloads","link":"#_5-3-action-payloads","children":[]}]},{"level":2,"title":"6.异步逻辑与数据请求","slug":"_6-异步逻辑与数据请求","link":"#_6-异步逻辑与数据请求","children":[{"level":3,"title":"6.1 Thunks 与异步逻辑","slug":"_6-1-thunks-与异步逻辑","link":"#_6-1-thunks-与异步逻辑","children":[]},{"level":3,"title":"6.2 Thunk 函数","slug":"_6-2-thunk-函数","link":"#_6-2-thunk-函数","children":[]},{"level":3,"title":"6.3 改写之前的计数器案例","slug":"_6-3-改写之前的计数器案例","link":"#_6-3-改写之前的计数器案例","children":[]},{"level":3,"title":"6.4 编写异步 Thunks","slug":"_6-4-编写异步-thunks","link":"#_6-4-编写异步-thunks","children":[]},{"level":3,"title":"6.5 使用 createAsyncThunk 请求数据","slug":"_6-5-使用-createasyncthunk-请求数据","link":"#_6-5-使用-createasyncthunk-请求数据","children":[]},{"level":3,"title":"6.6 使用 extraReducers","slug":"_6-6-使用-extrareducers","link":"#_6-6-使用-extrareducers","children":[]},{"level":3,"title":"6.7 完善案例","slug":"_6-7-完善案例","link":"#_6-7-完善案例","children":[]}]},{"level":2,"title":"7.数据持久化","slug":"_7-数据持久化","link":"#_7-数据持久化","children":[{"level":3,"title":"7.1 概念","slug":"_7-1-概念","link":"#_7-1-概念","children":[]},{"level":3,"title":"7.2 使用","slug":"_7-2-使用","link":"#_7-2-使用","children":[]},{"level":3,"title":"7.3 让每一个仓库单独存储","slug":"_7-3-让每一个仓库单独存储","link":"#_7-3-让每一个仓库单独存储","children":[]}]}],"git":{"createdTime":1733127450000,"updatedTime":1733127450000,"contributors":[{"name":"liubin","email":"liubin8919@qq.com","commits":1}]},"readingTime":{"minutes":24.51,"words":7354},"filePathRelative":"front_end/front_end_framework/react/18.md","localizedDate":"2024年12月2日","excerpt":"<h1> 18 【Redux Toolkit】</h1>\\n<p>上边的案例我们一直在使用Redux核心库来使用Redux，除了Redux核心库外Redux还为我们提供了一种使用Redux的方式——Redux Toolkit。它的名字起的非常直白，Redux工具包，简称RTK。RTK可以帮助我们处理使用Redux过程中的重复性工作，简化Redux中的各种操作。</p>\\n<h2> 1.Redux Toolkit 概览</h2>\\n<h3> 1.1  Redux Toolkit 是什么？</h3>\\n<p><strong>Redux Toolkit</strong> 是官方推荐的编写 <strong>Redux</strong> 逻辑的方法。 它包含我们对于构建 <strong>Redux</strong> 应用程序必不可少的包和函数。 <strong>Redux Toolkit</strong> 的构建简化了大多数 <strong>Redux</strong> 任务，防止了常见错误，并使编写 <strong>Redux</strong> 应用程序变得更加容易。可以说 <strong>Redux Toolkit</strong> 就是目前 <strong>Redux</strong> 的最佳实践方式。</p>","autoDesc":true}');export{e as data};
