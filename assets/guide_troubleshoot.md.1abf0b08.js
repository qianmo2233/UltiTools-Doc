import{_ as e,o as a,c as l,a as t}from"./app.adfe9b0b.js";const _=JSON.parse('{"title":"\u81EA\u4E3B\u6392\u9519","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u90E8\u5206","slug":"\u57FA\u7840\u90E8\u5206"},{"level":3,"title":"\u517C\u5BB9\u95EE\u9898","slug":"\u517C\u5BB9\u95EE\u9898"},{"level":3,"title":"\u51FA\u73B0Bug\u65F6","slug":"\u51FA\u73B0bug\u65F6"},{"level":3,"title":"\u5173\u4E8E\u914D\u7F6E\u6587\u4EF6","slug":"\u5173\u4E8E\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u5E38\u89C1\u95EE\u9898","slug":"\u5E38\u89C1\u95EE\u9898"},{"level":3,"title":"\u63D2\u4EF6\u65E0\u6CD5\u8F7D\u5165\uFF1F","slug":"\u63D2\u4EF6\u65E0\u6CD5\u8F7D\u5165\uFF1F"},{"level":3,"title":"\u53D8\u91CF\u672A\u751F\u6548\uFF1F","slug":"\u53D8\u91CF\u672A\u751F\u6548\uFF1F"},{"level":3,"title":"\u5934\u90E8\u663E\u793A\u4E3A\u4EC0\u4E48\u663E\u793A\u4E00\u534A\uFF1F","slug":"\u5934\u90E8\u663E\u793A\u4E3A\u4EC0\u4E48\u663E\u793A\u4E00\u534A\uFF1F"}],"relativePath":"guide/troubleshoot.md","lastUpdated":1669515600000}'),i={name:"guide/troubleshoot.md"},s=t(`<h1 id="\u81EA\u4E3B\u6392\u9519" tabindex="-1">\u81EA\u4E3B\u6392\u9519 <a class="header-anchor" href="#\u81EA\u4E3B\u6392\u9519" aria-hidden="true">#</a></h1><p>\u81EA\u4E3B\u6392\u9519&amp;\u81EA\u52A9\u4FEE\u590D\u8BF7\u4ECE\u4E0A\u5230\u4E0B\u4F9D\u6B21\u5B8C\u6210\u6B65\u9AA4\uFF0C\u76F4\u5230\u95EE\u9898\u89E3\u51B3\u3002</p><p>\u5982\u679C\u5728\u5B8C\u6210\u4E4B\u524D\u5C31\u89E3\u51B3\u95EE\u9898\uFF0C\u5219\u4E0D\u9700\u8981\u6267\u884C\u5B8C\u5168\u90E8\u6B65\u9AA4\u3002</p><p>\u53E6\u5916\u5BFB\u6C42\u5E2E\u52A9\u524D\uFF0C<strong>\u8BF7 \u52A1\u5FC5 \u52A1\u5FC5 \u52A1\u5FC5 \u8BA4\u771F\u9605\u8BFB\u4F7F\u7528\u6587\u6863</strong></p><h2 id="\u57FA\u7840\u90E8\u5206" tabindex="-1">\u57FA\u7840\u90E8\u5206 <a class="header-anchor" href="#\u57FA\u7840\u90E8\u5206" aria-hidden="true">#</a></h2><h3 id="\u517C\u5BB9\u95EE\u9898" tabindex="-1">\u517C\u5BB9\u95EE\u9898 <a class="header-anchor" href="#\u517C\u5BB9\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u672C\u63D2\u4EF6\u57FA\u4E8E Spigot \u5F00\u53D1\uFF0C\u652F\u63011.8-1.19\u7248\u672C\uFF0C\u8BF7\u4F7F\u7528 Spigot \u6216\u57FA\u4E8E Spigot \u7684\u670D\u52A1\u7AEF\uFF0C</p><p>\u7531\u4E8E\u672C\u63D2\u4EF6\u4F7F\u7528\u4E86\u4E00\u4E9BSpigot\u7279\u6709\u7684API\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u4E0D\u8981\u4F7F\u7528 Bukkit \u670D\u52A1\u7AEF\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u67D0\u4E9B\u529F\u80FD\u65E0\u6CD5\u4F7F\u7528</p><p>\u672C\u63D2\u4EF6\u672A\u80FD\u5B8C\u7F8E\u652F\u6301MOD\u7AEF\uFF0C\u82E5\u4F7F\u7528MOD\u7AEF\u53EF\u80FD\u4F1A\u51FA\u73B0\u5404\u79CD\u65E0\u7AEFbug\uFF0C\u8BF7\u8C05\u89E3\u3002</p><p>\u5728\u4E00\u822C\u60C5\u51B5\u4E0B\u5E02\u9762\u4E0A\u5927\u90E8\u5206\u7684\u6838\u5FC3\u90FD\u80FD\u8FD0\u884C\u63D2\u4EF6\u7684\u5927\u90E8\u5206\u529F\u80FD</p><h3 id="\u51FA\u73B0bug\u65F6" tabindex="-1">\u51FA\u73B0Bug\u65F6 <a class="header-anchor" href="#\u51FA\u73B0bug\u65F6" aria-hidden="true">#</a></h3><ul><li>\u68C0\u67E5\u4F60\u7684\u6838\u5FC3\u662F\u5426\u4E3A\u6700\u65B0\u7248\u672C\uFF0C\u5982\u679C\u4E0D\u662F\u8BF7\u4F7F\u7528\u5B98\u65B9BuildTools\u6784\u5EFA\u6700\u65B0\u7248\u672C\uFF0C\u5927\u90E8\u5206\u95EE\u9898\u53EF\u4EE5\u5728\u8FD9\u91CC\u89E3\u51B3</li><li>\u8BF7\u68C0\u67E5\u4F60\u7684UltiKits\u5404\u63D2\u4EF6\u7684\u7248\u672C\u662F\u5426\u4E3A\u6700\u65B0\u7248\u672C\uFF0C\u65E7\u7248\u672C\u53EF\u80FD\u4F1A\u6709\u5404\u79CDbug\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u5F00\u542F\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u81EA\u52A8\u68C0\u6D4B\u66F4\u65B0\u529F\u80FD\uFF01</li><li>\u6392\u9664\u5176\u4ED6\u63D2\u4EF6\u7684\u9519\u8BEF\uFF0C\u6392\u9664\u548C\u5176\u4ED6\u63D2\u4EF6\u7684\u51B2\u7A81\uFF0C\u8BF7\u786E\u8BA4\u4E00\u4E0B\u5355\u72EC\u4F7F\u7528UltiKits\u63D2\u4EF6\u5F00\u670D\u4F1A\u4E0D\u4F1A\u6709\u95EE\u9898\uFF0C\u6709\u53EF\u80FD\u662F\u548C\u5176\u4ED6\u63D2\u4EF6\u6709\u51B2\u7A81\u7684\u539F\u56E0\u3002</li><li>\u82E5\u521A\u4FEE\u6539\u5B8C\u914D\u7F6E\uFF0C\u5EFA\u8BAE\u91CD\u542F\u670D\u52A1\u5668\u800C\u4E0D\u662F\u91CD\u8F7D\u670D\u52A1\u5668</li></ul><p>\u5982\u679C\u4EE5\u4E0A\u65B9\u6CD5\u5168\u90FD\u4E0D\u594F\u6548\uFF0C\u8BF7\u53CD\u9988\u5230 GitHub Issue \u6216 QQ \u7FA4</p><h3 id="\u5173\u4E8E\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u5173\u4E8E\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u5173\u4E8E\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u8BF7\u81F3\u5C11\u4E86\u89E3\u4E00\u4E0BYAML\u8BED\u6CD5\u3002</p><p>\u4E00\u4E9B\u5E38\u72AF\u7684\u9519\u8BEF\uFF1A</p><ol><li>\u5192\u53F7\u540E\u9762\u65E0\u7A7A\u683C\u3002\uFF08\u9519\u8BEF\uFF09 \u6240\u6709\u7684\u5192\u53F7\u540E\u9762<strong>\u90FD\u6709\u4E00\u4E2A\u7A7A\u683C</strong>\uFF08\u5FC5\u987B\u52A0\uFF09</li><li>\u7F29\u8FDB\u9519\u8BEF \u7F29\u8FDB\u5FC5\u987B\u5BF9\u9F50</li><li>\u6B63\u786E/\u9519\u8BEF\uFF08\u5E03\u5C14\u503C\uFF09 <strong>\u6B63\u786E\u662Ftrue\uFF0C\u9519\u8BEF\u662Ffalse\uFF08\u5168\u90E8\u5C0F\u5199\uFF09</strong></li><li>\u5217\u8868\u95EE\u9898 <strong>\u7A7A\u5217\u8868\u662F[]</strong>\uFF0C\u9700\u8981\u52A0\u4E1C\u897F\u7684\u8BDD\u662F \u201C-\u201C \u5F00\u5934\uFF0C\u201D-\u201C <strong>\u540E\u9762\u6709\u4E00\u4E2A\u7A7A\u683C</strong></li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u914D\u7F6E\u6587\u4EF6\u82E5\u51FA\u73B0\u683C\u5F0F\u9519\u8BEF\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u91CD\u7F6E\u914D\u7F6E\u6587\u4EF6</p></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u63D2\u4EF6\u65E0\u6CD5\u8F7D\u5165\uFF1F" tabindex="-1">\u63D2\u4EF6\u65E0\u6CD5\u8F7D\u5165\uFF1F <a class="header-anchor" href="#\u63D2\u4EF6\u65E0\u6CD5\u8F7D\u5165\uFF1F" aria-hidden="true">#</a></h3><p>1.\u8BF7\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u4E86\u6240\u6709\u7684\u524D\u7F6E\u63D2\u4EF6</p><p>UltiTools \u524D\u7F6E\uFF1A</p><ul><li>PlaceHolderAPI</li><li>Vault</li><li>UltiCore</li></ul><p>\u81F3\u5C11\u8981\u6709\u8FD9\u4E09\u4E2A\u63D2\u4EF6\u624D\u80FD\u6B63\u5E38\u8FD0\u884C\uFF01\uFF01\uFF01</p><p>2.\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u5B8C\u6574</p><p><strong>\u4E0B\u8F7D\u63D2\u4EF6\u8BF7\u5230 Spigot \u8BBA\u575B\uFF0C\u4E0D\u8981\u5230 MCBBS \u4E0B\u8F7D\uFF01</strong></p><p><strong>\u4E0B\u8F7D\u63D2\u4EF6\u8BF7\u5230 Spigot \u8BBA\u575B\uFF0C\u4E0D\u8981\u5230 MCBBS \u4E0B\u8F7D\uFF01</strong></p><p><strong>\u4E0B\u8F7D\u63D2\u4EF6\u8BF7\u5230 Spigot \u8BBA\u575B\uFF0C\u4E0D\u8981\u5230 MCBBS \u4E0B\u8F7D\uFF01</strong></p><p>(\u91CD\u8981\u7684\u8BDD\u91CD\u590D\u4E09\u904D)</p><p>\u5728 MCBBS \u4E0B\u8F7D\u7684\u63D2\u4EF6\u662F\u8FDC\u53E4\u7248\u672C\u7684\u5E76\u4E14\u6709\u53EF\u80FD\u662F\u635F\u574F\u7684\u6587\u4EF6(39KB)\uFF0C \u670D\u52A1\u5668\u662F\u65E0\u6CD5\u52A0\u8F7D\u7684\uFF01</p><p>2.\u68C0\u67E5PlaceHolderAPI\u63D2\u4EF6\u7248\u672C\u662F\u5426\u6B63\u786E</p><p>PlaceHolderAPI \u6709\u4E24\u4E2A\u7248\u672C\uFF0C\u5206\u522B\u662F Nukkit \u7248\u548C Bukkit \u7248</p><p>\u9700\u8981\u7684\u662F Bukkit \u7248\uFF01 Nukkit \u7248\u670D\u52A1\u5668\u662F\u65E0\u6CD5\u52A0\u8F7D\u7684\uFF01\u4E0B\u8F7D\u7684\u65F6\u5019\u8BF7\u770B\u6E05\u695A\u4E86\uFF01</p><h3 id="\u53D8\u91CF\u672A\u751F\u6548\uFF1F" tabindex="-1">\u53D8\u91CF\u672A\u751F\u6548\uFF1F <a class="header-anchor" href="#\u53D8\u91CF\u672A\u751F\u6548\uFF1F" aria-hidden="true">#</a></h3><p><strong>\u5982\u679C\u5B89\u88C5\u4E86PlaceHolderAPI</strong>\uFF0C\u9047\u5230\u67D0\u4E9B\u5730\u65B9\u663E\u793A(\u5982\u4FA7\u8FB9\u680F) \u7C7B\u4F3C %some_var% \u7684\u6587\u5B57\u51FA\u73B0\uFF0C\u90A3\u4E48\u5C31\u6709\u4E09\u79CD\u60C5\u51B5</p><ol><li>\u53D8\u91CF\u672A\u5B89\u88C5</li><li>\u8FD9\u4E2A\u5730\u65B9\u4E0D\u652F\u6301PAPI\u53D8\u91CF</li><li>\u53D8\u91CF\u540D\u79F0\u9519\u8BEF</li></ol><p>\u9996\u5148\u6700\u5927\u7684\u53EF\u80FD\u5C31\u662F\u6CA1\u6709\u5B89\u88C5\u53D8\u91CF</p><p>\u9664\u4E86\u7C7B\u4F3C %some_var% \u7684\u6587\u5B57\u4EE5\u5916\uFF0C\u4F60\u8FD8\u6709\u53EF\u80FD\u5728\u63A7\u5236\u53F0\u770B\u5230\u7C7B\u4F3C\u4EE5\u4E0B\u62A5\u9519\uFF1A</p><p><code>java.util.UnknownFormatConversionException: Conversion = \u2018xxx\u2019</code></p><p>\u8BF7\u5728\u670D\u52A1\u5668\u5185\u4F7F\u7528OP\u6743\u9650\u6216\u5728\u63A7\u5236\u53F0\u6267\u884C\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u5E76\u91CD\u542F\u670D\u52A1\u5668\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">/PAPI ecloud download </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">var_name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">/PAPI reload</span></span>
<span class="line"></span></code></pre></div><p><code>[var_name]</code> \u66FF\u6362\u6210\u8981\u4E0B\u8F7D\u7684\u53D8\u91CF\u540D\u79F0</p><p>\u7279\u522B\u5730\uFF0C\u5982\u679C\u4F60\u53D1\u73B0\u6709\u8FD9\u6837\u7684\u62A5\u9519\uFF1A</p><p><code>java.util.UnknownFormatConversionException: Conversion = \u2018u\u2019</code></p><p>\u539F\u56E0\u662F\u4F60\u6CA1\u6709\u5B89\u88C5 UltiLevel \u63D2\u4EF6\uFF0Cpapi\u65E0\u6CD5\u627E\u5230ul\u5F00\u5934\u7684\u53D8\u91CF\u3002</p><p>\u68C0\u67E5\u6574\u4E2A\u6240\u6709\u914D\u7F6E\u6587\u4EF6\u4E2D\u5E26\u6709ul\u5F00\u5934\u7684\u53D8\u91CF\uFF0C\u4FEE\u6539\u6216\u8005\u5220\u9664</p><p>\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u5B89\u88C5 UltiLevel</p><p>2\uFF0C3\u70B9\u8BF7\u81EA\u884C\u68C0\u67E5\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8D58\u8FF0\u4E86</p><h3 id="\u5934\u90E8\u663E\u793A\u4E3A\u4EC0\u4E48\u663E\u793A\u4E00\u534A\uFF1F" tabindex="-1">\u5934\u90E8\u663E\u793A\u4E3A\u4EC0\u4E48\u663E\u793A\u4E00\u534A\uFF1F <a class="header-anchor" href="#\u5934\u90E8\u663E\u793A\u4E3A\u4EC0\u4E48\u663E\u793A\u4E00\u534A\uFF1F" aria-hidden="true">#</a></h3><p>\u8FD9\u8FD9\u60C5\u51B5\u4E00\u822C\u4F1A\u5728 1.12.2\u53CA\u4EE5\u4E0B\u7684\u670D\u52A1\u7AEF\u4F1A\u51FA\u73B0</p><p>\u8FD9\u4E9B\u7248\u672C\u7684\u670D\u52A1\u7AEF\u670912\u4E2A\u5B57\u7B26\u7684\u524D\u540E\u7F00\u9650\u5236\uFF0C\u8D85\u51FA\u4F1A\u62A5\u9519</p><p>UltiTools \u4E3A\u9632\u6B62\u62A5\u9519\u5237\u5C4F\uFF0C\u5BF9\u524D\u540E\u7F00\u8FDB\u884C\u4E86\u88C1\u526A</p>`,52),o=[s];function p(n,r,d,c,h,u){return a(),l("div",null,o)}const v=e(i,[["render",p]]);export{_ as __pageData,v as default};
