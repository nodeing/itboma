import{_ as s,c as a,o as n,a as l}from"./app.5e2ad501.js";const i=JSON.parse('{"title":"\u6570\u636E\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u6570\u636E\u7C7B\u578B\u6982\u8981","slug":"\u6570\u636E\u7C7B\u578B\u6982\u8981","link":"#\u6570\u636E\u7C7B\u578B\u6982\u8981","children":[]},{"level":3,"title":"\u6574\u578B","slug":"\u6574\u578B","link":"#\u6574\u578B","children":[]},{"level":3,"title":"\u6D6E\u70B9\u578B","slug":"\u6D6E\u70B9\u578B","link":"#\u6D6E\u70B9\u578B","children":[]},{"level":3,"title":"\u5E03\u5C14\u7C7B\u578B\u578B","slug":"\u5E03\u5C14\u7C7B\u578B\u578B","link":"#\u5E03\u5C14\u7C7B\u578B\u578B","children":[]},{"level":3,"title":"\u5B57\u7B26\u7C7B\u578B","slug":"\u5B57\u7B26\u7C7B\u578B","link":"#\u5B57\u7B26\u7C7B\u578B","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":3,"title":"\u7C7B\u578B\u8F6C\u6362","slug":"\u7C7B\u578B\u8F6C\u6362","link":"#\u7C7B\u578B\u8F6C\u6362","children":[]}],"relativePath":"learn-path/java/java-basic/chapter2/3.md"}'),p={name:"learn-path/java/java-basic/chapter2/3.md"},o=l(`<h1 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h1><h3 id="\u6570\u636E\u7C7B\u578B\u6982\u8981" tabindex="-1">\u6570\u636E\u7C7B\u578B\u6982\u8981 <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u6982\u8981" aria-hidden="true">#</a></h3><p>\u4EC0\u4E48\u662F\u6570\u636E\u7C7B\u578B\uFF1F\u4ECE\u5B57\u9762\u4E0A\u7406\u89E3\uFF0C\u5C31\u662F\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7C7B\uFF0C\u5206\u7C7B\u7684\u76EE\u7684\u4E3B\u8981\u662F\u65B9\u4FBF\u5904\u7406\uFF0C\u57FA\u4E8E\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u90A3\u4E48\u54B1\u4EEC\u5B66\u4E60\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6293\u4F4F\u7684\u6838\u5FC3\u5C31\u662F\u6570\u636E\u7C7B\u578B\u5230\u5E95\u5206\u4E86\u54EA\u4E9B\u7C7B\uFF1F\u6BCF\u4E2A\u7C7B\u7684\u540D\u5B57\u662F\u4EC0\u4E48\uFF1F\u6709\u4EC0\u4E48\u7279\u6027\u7B49\u95EE\u9898</p><p>\u5728 Java \u4E2D\uFF0C\u6570\u636E\u7C7B\u578B\u4E3B\u8981\u6709\u4E24\u79CD\u5927\u7C7B</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u57FA\u672C\u6570\u636E\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F15\u7528\u6570\u636E\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u8FD9\u91CC\u4E3B\u8981\u8BA8\u8BBA\u7684\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u540E\u9762\u4F1A\u5355\u72EC\u5B66\u4E60\u5230\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53C8\u53EF\u4EE5\u5206\u6210\u4E09\u7C7B</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u6570\u5B57\u578B\uFF1Abyte\u3001short\u3001int\u3001long\u3001float\u3001dobule</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B57\u7B26\u578B\uFF1Achar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E03\u5C14\u578B\uFF1Aboolean</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u7684\u8FD9\u4E9B\u7C7B\u578B\u8981\u638C\u63E1\u7684\u7B2C\u4E00\u4E2A\u70B9\uFF0C\u90A3\u5C31\u662F\u8FD9\u4E9B\u82F1\u6587\u5355\u8BCD\u4F60\u9700\u8981\u8BB0\u4F4F\uFF0C\u4F8B\u5982\uFF1Aint\uFF0C\u7528\u6765\u5B58\u6574\u6570,\u8BB0\u4F4F\u4E86\u8FD9\u4E9B\u5355\u8BCD\u4EE5\u540E\uFF0C\u518D\u6765\u638C\u63E1\u5176\u4ED6\u7684\u7279\u70B9\uFF0C\u4F8B\u5982\uFF1A\u6240\u5360\u5185\u5B58\u5927\u5C0F\u3001\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u3001\u9ED8\u8BA4\u503C\u7B49</p><p>\u770B\u4E0B\u9762\u7684\u8868</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u5185\u5B58\u5360\u7528\uFF08\u5B57\u8282\uFF09</th><th>\u6700\u5C0F\u503C</th><th>\u6700\u5927\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>byte</td><td>1</td><td>-128</td><td>+127</td><td>0</td></tr><tr><td>short</td><td>2</td><td>-32,768</td><td>+32,767</td><td>0</td></tr><tr><td>int</td><td>4</td><td>-2,147,483,648</td><td>+2,147,483,647</td><td>0</td></tr><tr><td>long</td><td>8</td><td>-9,223,372,036,854,775,808</td><td>+9,223,372,036,854,775,807</td><td>0L</td></tr><tr><td>float</td><td>4</td><td>1.4 E-45</td><td>3.402,823,5 E+38</td><td>0.0f</td></tr><tr><td>double</td><td>8</td><td>4.9 E-324</td><td>1.797,693,134,862,315,7 E+308</td><td>0.0d</td></tr><tr><td>char</td><td>2</td><td>0</td><td>+655,35</td><td>\u2018\\u0000\u2019</td></tr><tr><td>boolean</td><td>1</td><td></td><td></td><td>false</td></tr></tbody></table><p>\u6CE8\u610F\uFF1A\u8868\u770B\u4E0D\u5168\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52A8</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F\uFF1A\u53D8\u91CF\u91CC\u9762\u5B58\u7684\u503C\uFF0C\u4E0D\u8981\u8D85\u51FA\u7C7B\u578B\u7684\u53D6\u503C\u8303\u56F4</p></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">com</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">nodeing</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">hello</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloWorld</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">short</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32767</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8FD9\u91CC\u5C31\u4F1A\u51FA\u73B0\u8D85\u51FA\u8303\u56F4\u7684\u60C5\u51B5\uFF0C\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">short</span><span style="color:#A6ACCD;"> num2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32768</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221205041658.png" alt="20221205041658"></p><h3 id="\u6574\u578B" tabindex="-1">\u6574\u578B <a class="header-anchor" href="#\u6574\u578B" aria-hidden="true">#</a></h3><p>\u6574\u578B\u5C31\u662F\u6574\u6570\u7C7B\u578B\uFF0C\u4E0E\u6570\u5B66\u4E0A\u7684\u6574\u6570\u662F\u4E00\u6837\u7684\u610F\u4E49</p><p>byte \u7C7B\u578B\u7528\u5728\u5927\u578B\u6570\u7EC4\u4E2D\u8282\u7EA6\u7A7A\u95F4\uFF0C\u4E3B\u8981\u4EE3\u66FF\u6574\u6570\uFF0C\u56E0\u4E3A byte \u53D8\u91CF\u5360\u7528\u7684\u7A7A\u95F4\u53EA\u6709 int \u7C7B\u578B\u7684\u56DB\u5206\u4E4B\u4E00</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> num1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">98</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>int \u7C7B\u578B</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u6700\u5C0F\u503C -2147483648</span></span>
<span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u4E00\u4E2A\u6574\u578B\u53D8\u91CFnum \u521D\u59CB\u503C-2147483648</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2147483648</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u6700\u5927\u53D6\u503C</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2147483647</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6574\u578B\u8FD8\u6709\u957F\u6574\u578B\u548C\u77ED\u6574\u578B\uFF0C\u5B83\u4EEC\u7684\u533A\u522B\u662F\u5360\u7528\u7684\u5185\u5B58\u5927\u5C0F\u548C\u53D6\u503C\u8303\u56F4\u4E0D\u540C</p><p>short \u77ED\u6574\u578B</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u6700\u5C0F\u53D6\u503C \u5185\u5B58\u4E2D\u53602\u4E2A\u5B57\u8282</span></span>
<span class="line"><span style="color:#C792EA;">short</span><span style="color:#A6ACCD;"> s1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">32768</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u6700\u5927\u53D6\u503C \u5185\u5B58\u4E2D\u53602\u4E2A\u5B57\u8282</span></span>
<span class="line"><span style="color:#C792EA;">short</span><span style="color:#A6ACCD;"> s2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32767</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>long \u957F\u6574\u578B</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u957F\u6574\u578B\u7ED3\u5C3E\u52A0L/l\uFF0C\u5EFA\u8BAE\u52A0\u5927\u5199\u7684L\uFF0C\u56E0\u4E3A\u5C0F\u5199\u7684l\u5BB9\u6613\u548C\u6570\u5B571\u6DF7\u6DC6</span></span>
<span class="line"><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> l1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100L</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u5728\u5B58\u50A8\u5341\u516D\u8FDB\u5236\u6216\u8005\u4E8C\u8FDB\u5236\u7684\u65F6\u5019\uFF0C\u5199\u6CD5\u6709\u4E9B\u4E0D\u4E00\u6837</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5341\u516D\u8FDB\u5236 \u4EE5 0x\u5F00\u5934</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> num1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xA</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// \u4E8C\u8FDB\u5236\u7684\u65F6\u5019\u4EE50b\u5F00\u5934</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> num2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0b1101</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num6</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6D6E\u70B9\u578B" tabindex="-1">\u6D6E\u70B9\u578B <a class="header-anchor" href="#\u6D6E\u70B9\u578B" aria-hidden="true">#</a></h3><p>\u6D6E\u70B9\u578B\u5C31\u662F\u6570\u5B66\u610F\u4E49\u4E0A\u7684\u5C0F\u6570\uFF0C\u91CC\u9762\u5206\u4E3A\u5355\u7CBE\u5EA6\uFF08float\uFF09\u548C\u53CC\u7CBE\u5EA6\uFF08double\uFF09</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">float</span><span style="color:#A6ACCD;"> f1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u79D1\u5B66\u8BA1\u6570\u6CD5\uFF1A11.2e2 =  11.2*10*10</span></span>
<span class="line"><span style="color:#C792EA;">float</span><span style="color:#A6ACCD;"> f2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2e2f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">f2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// \u79D1\u5B66\u8BA1\u6570\u6CD5\uFF1A11.2e-2 =  11.2*1/(10*10)</span></span>
<span class="line"><span style="color:#C792EA;">float</span><span style="color:#A6ACCD;"> f3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2e-2f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">f3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u968F\u4FBF\u5199\u4E00\u4E2A\u5C0F\u6570\uFF0C\u9ED8\u8BA4\u662F double \u7C7B\u578B</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> d1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u7ED3\u5C3E\u52A0D\u6216\u8005d\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u662Fdouble\u7C7B\u578B\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4E0D\u7528\u52A0</span></span>
<span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> d2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">d1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">d2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5E03\u5C14\u7C7B\u578B\u578B" tabindex="-1">\u5E03\u5C14\u7C7B\u578B\u578B <a class="header-anchor" href="#\u5E03\u5C14\u7C7B\u578B\u578B" aria-hidden="true">#</a></h3><p>\u5E03\u5C14\u7C7B\u578B\u91CC\u9762\u53EA\u6709 true \u548C false</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> b1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> b2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b2</span><span style="color:#89DDFF;">);;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B57\u7B26\u7C7B\u578B" tabindex="-1">\u5B57\u7B26\u7C7B\u578B <a class="header-anchor" href="#\u5B57\u7B26\u7C7B\u578B" aria-hidden="true">#</a></h3><p>char \u8868\u793A\u4E00\u4E2A\u5B57\u7B26</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u6CE8\u610F\uFF0C\u53EA\u80FD\u7528\u5355\u5F15\u53F7\uFF0C\u5E76\u4E14\u53EA\u80FD\u5B581\u4E2A\u5B57\u7B26\uFF0C\u5185\u5B58\u4E2D\u53602\u4E2A\u5B57\u8282</span></span>
<span class="line"><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> c1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><p><img src="https://nodeing-com-1252923609.cos.ap-chengdu.myqcloud.com//document20221205052514.png" alt="20221205052514"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.\u6BCF\u79CD\u6570\u636E\u7C7B\u578B\u7684\u82F1\u6587\u5355\u8BCD\u540D\u5B57\u8981\u8BB0\u4F4F</p><p>2.\u5185\u5B58\u5360\u7528\u591A\u5C11\u5B57\u8282\u8981\u8BB0\u4F4F</p><p>3.\u6BCF\u79CD\u7C7B\u578B\u91CC\u9762\u7684\u503C\u6709\u4EC0\u4E48\u7279\u70B9\uFF0C\u9700\u8981\u8BB0\u4F4F\uFF0C\u4F8B\u5982\uFF1A\u5C0F\u6570\u3001\u6574\u6570\u3001\u5B57\u7B26\u90FD\u5E94\u8BE5\u600E\u4E48\u5199</p></div><h3 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1">\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h3><p>\u5148\u7406\u89E3\u4E00\u4E0B\u4EC0\u4E48\u662F\u7C7B\u578B\u8F6C\u6362\uFF1F\u7C7B\u578B\u8F6C\u6362\u5C31\u662F\u628A\u4E00\u79CD\u7C7B\u578B\u8F6C\u6362\u6210\u53E6\u4E00\u79CD\u7C7B\u578B\uFF0C\u4E3A\u4EC0\u4E48\u8981\u505A\u7C7B\u578B\u8F6C\u6362\uFF1F\u56E0\u4E3A\u53EA\u6709\u540C\u7C7B\u578B\u7684\u4E24\u4E2A\u503C\u505A\u8FD0\u7B97\u624D\u6709\u610F\u4E49</p><p>\u7C7B\u578B\u8F6C\u6362\u5206\u4E3A\u4E24\u79CD\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\uFF0C\u5373\u81EA\u52A8\u5E2E\u4F60\u505A\u8F6C\u6362\u4E86\uFF0C\u4E0D\u9700\u8981\u4F60\u505A\u989D\u5916\u7684\u64CD\u4F5C\uFF0C\u8303\u56F4\u5C0F\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\u7ED9\u8303\u56F4\u5927\u7684\u53D8\u91CF\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> num1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u81EA\u52A8\u5C06byte\u7C7B\u578B\u8F6C\u6210int\u7C7B\u578B</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> num2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> num1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u8303\u56F4\u4ECE\u5C0F\u5230\u5927\uFF0C\u53EF\u4EE5\u8BB0\u4F4F\u4E0B\u9762\u7684\u94FE\u6761</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">byte --&gt; short\\char --&gt; int --&gt; long --&gt; float --&gt; double</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1Achar \u5360 2 \u4E2A\u5B57\u8282\uFF0C\u4E5F\u662F\u53EF\u4EE5\u8F6C\u6210 int \u7684</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> c1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> num3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> c1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num3</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 97</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F 2: \u5728\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u8868\u8FBE\u5F0F\u7684\u6700\u7EC8\u7ED3\u679C\u662F\u7531\u9AD8\u7C7B\u578B\u51B3\u5B9A\u7684</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u540D\u8BCD\u89E3\u91CA\uFF1A\u4EC0\u4E48\u53EB\u8868\u8FBE\u5F0F\uFF1F\u8868\u8FBE\u5F0F\uFF0C\u662F\u7531\u6570\u5B57\u3001\u7B97\u7B26\u3001\u6570\u5B57\u5206\u7EC4\u7B26\u53F7\uFF08\u62EC\u53F7\uFF09\u3001\u81EA\u7531\u53D8\u91CF\u548C\u7EA6\u675F\u53D8\u91CF\u7B49\u4EE5\u80FD\u6C42\u5F97\u6570\u503C\u7684\u6709\u610F\u4E49\u6392\u5217\u65B9\u6CD5\u6240\u5F97\u7684\u7EC4\u5408\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A a + b \u5C31\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F</p></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F 3: \u5728\u8868\u8FBE\u5F0F\u4E2D\uFF0Cbyte\u3001short\u3001char \u662F\u76F4\u63A5\u8F6C\u6210 int \u6765\u53C2\u4E0E\u8FD0\u7B97\u7684</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> b1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> b2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// b1 b2 \u662F\u4E24\u4E2Abyte\u7C7B\u578B\uFF0C\u8FD0\u7B97\u7684\u7ED3\u679C\u9700\u8981\u7528int\u7C7B\u578B\u6765\u5B58</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> b1 </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u5373\u5F3A\u5236\u5C06\u7C7B\u578B\u8303\u56F4\u5927\u7684\u53D8\u91CF\u8F6C\u6362\u6210\u7C7B\u578B\u5C0F\u7684\u53D8\u91CF\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u53BB\u8F6C\u6362\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u5F3A\u5236\u628Aint\u8F6C\u6210byte</span></span>
<span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> b2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> b1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\uFF1A\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u6570\u636E\u76CA\u51FA(\u4E22\u5931);</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">byte</span><span style="color:#A6ACCD;"> b2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">byte</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> b1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b2</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// -56</span></span>
<span class="line"></span></code></pre></div><p>\u9020\u6210\u6570\u636E\u76CA\u51FA\u5176\u5B9E\u5F88\u597D\u7406\u89E3\uFF0C\u4E00\u4E2A\u5185\u5B58\u7A7A\u95F4\u5360\u7528\u5927\u7684\uFF0C\u4F60\u786C\u662F\u5F80\u5C0F\u7A7A\u95F4\u91CC\u585E\uFF0C\u90A3\u88C5\u4E0D\u4E0B\u600E\u4E48\u529E\uFF1F\u80AF\u5B9A\u4F1A\u4E22\u5931\u4E00\u90E8\u5206</p><p>\u6CE8\u610F 2:\u6D6E\u70B9\u578B\u8F6C\u6210\u6574\u6570\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u4E22\u6389\u5C0F\u6570\u90E8\u5206\uFF0C\u4FDD\u7559\u6574\u6570\u90E8\u5206</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">float</span><span style="color:#A6ACCD;"> f1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11.2f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> f1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 11</span></span>
<span class="line"></span></code></pre></div>`,64),t=[o];function e(c,r,y,D,C,A){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};