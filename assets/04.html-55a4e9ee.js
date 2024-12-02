import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,e as s,a,b as i,d as l}from"./app-fe9da4b4.js";const u={},r={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"};function d(k,n){const t=e("ExternalLinkIcon");return o(),c("div",null,[n[1]||(n[1]=s(`<h1 id="_04-【跨域初识】" tabindex="-1"><a class="header-anchor" href="#_04-【跨域初识】" aria-hidden="true">#</a> 04 【跨域初识】</h1><h2 id="_1-同源策略" tabindex="-1"><a class="header-anchor" href="#_1-同源策略" aria-hidden="true">#</a> 1.同源策略</h2><ul><li>同源策略(Same-Origin Policy)最早由Netscape 公司提出，是浏览器的一种安全策略</li><li>同源： 协议、域名、端口号必须完全相同</li><li>跨域： 违背同源策略就是<strong>跨域</strong></li></ul><h2 id="_2-如何解决跨域" tabindex="-1"><a class="header-anchor" href="#_2-如何解决跨域" aria-hidden="true">#</a> 2.如何解决跨域</h2><h3 id="_2-1-jsonp" tabindex="-1"><a class="header-anchor" href="#_2-1-jsonp" aria-hidden="true">#</a> 2.1 JSONP</h3><blockquote><p><strong>jsonp只支持get请求不支持post请求</strong></p></blockquote><p><strong>1) JSONP 是什么</strong></p><p>JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明 才智开发出来，只支持get 请求。</p><p><strong>2) JSONP 怎么工作的？</strong></p><p>在网页有一些标签天生具有跨域能力，比如：img link iframe script。 JSONP 就是利用script 标签的跨域能力来发送请求的。</p><p><strong>3) JSONP 的使用</strong></p><p><strong>html代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            <span class="token comment">//1. 创建 script 标签</span>
            <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//2. 设置标签的 src 属性</span>
            script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://127.0.0.1:8000/check-username?callback=abc&#39;</span><span class="token punctuation">;</span>
            <span class="token comment">//3. 将script 添加到body 中</span>
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">function</span> <span class="token function">abc</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>nodejs 代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/check-username&quot;</span> <span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req <span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> callback <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>callback<span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;孙悟空&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//将数据转化为字符串</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//返回结果(一段可执行的JavaScript代码)</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">handle(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-cors" tabindex="-1"><a class="header-anchor" href="#_2-2-cors" aria-hidden="true">#</a> 2.2 CORS</h3>`,16)),a("p",null,[a("a",r,[n[0]||(n[0]=i("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS")),l(t)])]),n[2]||(n[2]=s(`<ol><li><p><strong>CORS 是什么？</strong> CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS 是官方的跨域解决方 案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和post 请求。跨域资源共享标准新增了一组HTTP 首部字段，允许服务器声明哪些 源站通过浏览器有权限访问哪些资源</p></li><li><p><strong>CORS 怎么工作的？</strong> CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应 以后就会对响应放行。</p></li><li><p><strong>CORS 的使用</strong> 主要是服务器端的设置：</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/testAJAX&quot;</span> <span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req <span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//通过res 来设置响应头，来允许跨域请求</span>
    <span class="token comment">//res.set(&quot;Access-Control-Allow-Origin&quot;,&quot;http://127.0.0.1:3000&quot;);</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//允许所有来源访问</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;testAJAX 返回的响应&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const g=p(u,[["render",d],["__file","04.html.vue"]]);export{g as default};
