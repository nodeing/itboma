import{_ as s,c as a,o as l,a as n}from"./app.5d3fb17b.js";const D=JSON.parse('{"title":"hello world","description":"","frontmatter":{},"headers":[],"relativePath":"learn-path/java/java-basic/chapter1/3.md"}'),p={name:"learn-path/java/java-basic/chapter1/3.md"},o=n(`<h1 id="hello-world" tabindex="-1">hello world <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h1><p>\u524D\u9762\u73AF\u5883\u642D\u5EFA\u597D\u4EE5\u540E\uFF0C\u6211\u4EEC\u5F00\u59CB\u5199\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u8F93\u51FA hello world\uFF0C\u9700\u8981\u8BB0\u4F4F\u5F00\u53D1 Java \u7A0B\u5E8F\u7684\u4E09\u4E2A\u6B65\u9AA4</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u7B2C\u4E00\u6B65\uFF1A\u7F16\u5199\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B2C\u4E8C\u6B65\uFF1A\u7F16\u8BD1\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B2C\u4E09\u6B65\uFF1A\u6267\u884C\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u5177\u4F53\u6765\u505A\u5F00\u53D1\uFF0C\u5728\u5F00\u53D1\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u5B89\u88C5\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5DE5\u5177\uFF0Cvscode\uFF0C\u4E0B\u8F7D\u5730\u5740\uFF1A<a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">\u70B9\u51FB\u8FDB\u5165</a>\uFF0C\u6839\u636E\u81EA\u5DF1\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6765\u9009\u62E9\u4E0B\u8F7D\u7A0B\u5E8F</p><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221029130210.png" alt="20221029130210"></p><p>\u6CE8\u610F\uFF0C\u4E0B\u8F7D\u540E\u4E5F\u662F\u53CC\u51FB\u8FD0\u884C\uFF0C\u4E0D\u8981\u53BB\u6539\u9ED8\u8BA4\u7684\u5B89\u88C5\u76EE\u5F55\uFF0C\u5B89\u88C5\u8FC7\u7A0B\u76F4\u63A5\u70B9\u4E0B\u4E00\u6B65\uFF0C\u76F4\u5230\u5B89\u88C5\u5B8C\u6210</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5173\u4E8E vscode \u7684\u7EC8\u7AEF\u6253\u5F00\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u770B\u89C6\u9891\u8BB2\u89E3\u91CC\u9762\u7684\u7B2C\u4E8C\u4E2A\u89C6\u9891</p></div><p>\u5F00\u53D1 hello world \u7A0B\u5E8F\u7684\u6B65\u9AA4(\u89C6\u9891\u6F14\u793A\u8BF7\u5230\u672C\u6587\u6863\u7ED3\u5C3E--&gt;\u70B9\u51FB\u89C6\u9891\u8BB2\u89E3)</p><p>\u7B2C\u4E00\u6B65\uFF0C\u4F7F\u7528 vscode \u7F16\u5199\u4EE3\u7801</p><p>\u65B0\u5EFA\u4E00\u4E2A HelloWorld.java \u7684\u6587\u4EF6\uFF0C\u7F16\u5199\u4EE3\u7801</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloWorld</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world!!!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u7F16\u8BD1\u6210 class \u6587\u4EF6</p><p>\u5728\u7EC8\u7AEF\u6267\u884C\u547D\u4EE4</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">javac HelloWord.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\uFF0C\u5F53\u524D\u7684\u6587\u4EF6\u5939\u4E0B\u9762\u4F1A\u751F\u6210\u4E00\u4E2A HelloWorld.class \u7684\u6587\u4EF6</p><p>\u7B2C\u4E09\u6B65\uFF0C\u8FD0\u884C HelloWorld \u7A0B\u5E8F</p><p>\u5728\u7EC8\u7AEF\u6267\u884C\u547D\u4EE4</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">java HelloWorld</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),e=[o];function c(t,r,i,d,C,A){return l(),a("div",null,e)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
