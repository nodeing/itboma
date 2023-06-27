import{_ as s,c as a,o as n,a as e}from"./app.d3af60b3.js";const h=JSON.parse('{"title":"Git \u9AD8\u6548\u5165\u95E8\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1.\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4","slug":"_3-1-\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4","link":"#_3-1-\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4","children":[]}],"relativePath":"learn-path/fe/git-github/chapter3/1.md"}'),p={name:"learn-path/fe/git-github/chapter3/1.md"},l=e(`<h1 id="git-\u9AD8\u6548\u5165\u95E8\u6307\u5357" tabindex="-1">Git \u9AD8\u6548\u5165\u95E8\u6307\u5357 <a class="header-anchor" href="#git-\u9AD8\u6548\u5165\u95E8\u6307\u5357" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u94FE\u63A5\u5931\u6548\u6216\u8005\u6709\u5176\u4ED6\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u725B\u9A6C\u7A0B\u5E8F\u5458\u91D1\u724C\u8BB2\u5E08--\u8FC8\u514B\u5C14.\u725B\u9A6C\uFF0C\u5FAE\u4FE1\uFF1Anodeing-cn</p></div><h2 id="_3-1-\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4" tabindex="-1">3.1.\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4 <a class="header-anchor" href="#_3-1-\u8FDC\u7A0B\u4ED3\u5E93\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a></h2><p>1.\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u540D\u5B57\uFF0C\u8FD9\u91CC\u4EE5 github \u4E3A\u4F8B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git remote</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u547D\u4EE4\u6267\u884C\u540E\u4F1A\u5F97\u5230\uFF1Aorigin\uFF0C\u8FD9\u6837\u4E00\u4E2A\u540D\u5B57\uFF0C\u8FD9\u4E2A\u540D\u5B57\u662F\u6211\u4EEC\u514B\u9686\u7684\u65F6\u5019\u9ED8\u8BA4\u8BBE\u7F6E\u597D\u7684</p><p>\u5982\u679C\u4F60\u60F3\u66F4\u6539 origin \u8FD9\u4E2A\u540D\u5B57\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u6837\u7684\u547D\u4EE4\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u8BED\u6CD5\uFF1A git remote rename old new \u81EA\u5B9A\u4E49\u540D\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote rename origin neworigin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2.\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5730\u5740</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git remote </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v</span></span>
<span class="line"></span></code></pre></div><p>3.\u6DFB\u52A0\u4E00\u4E2A\u4ED3\u5E93</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git remote add neworigin http://git.nodeing.com/code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4.\u67E5\u770B\u6307\u5B9A\u4ED3\u5E93\u5730\u5740</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git remote get-url neworigin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>5.\u8BBE\u7F6E\u6307\u5B9A\u4ED3\u5E93\u5730\u5740</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git remote set-url neworigin http://www.nodeing.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>6.push \u4EE3\u7801\u5230 github \u4E0A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u5982\u679C\u63D0\u793A\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u9700\u8981\u8F93\u5165\u6B63\u786E github \u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u624D\u80FD\u6B63\u786E\u63A8\u9001\u5230 github \u4E0A</p><p>7.\u5220\u9664\u6307\u5B9A\u4ED3\u5E93</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git remote rm neworigin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),t=[l];function o(i,c,r,d,g,C){return n(),a("div",null,t)}const A=s(p,[["render",o]]);export{h as __pageData,A as default};