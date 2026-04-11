import{_ as l,r as d,o as i,c,a,f as p,b as t,w as n,e as r}from"./tde53hep.js";const v={},m={class:"content is-medium"},b={class:"box"},u={class:"level"},_={class:"level-left is-left"},h={class:"level-item"},x={class:"level-right is-right"},f={class:"level-item"};function g(E,e){const o=d("adsbygoogle"),s=r;return i(),c("div",null,[a("div",m,[a("div",b,[e[0]||(e[0]=p(`<span class="lable is-medium" data-v-ab71e251>2018-11-14</span><h1 id="2018-11-14-nuxt-js-sitemap" class="title" data-v-ab71e251>Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました</h1><div class="content" data-v-ab71e251><p data-v-ab71e251>今まではJekyllを利用していたのでsitemap.xmlも自動で生成されていたのですが、標準のNuxt.jsの構成だと生成されません。 SEOを考えると生成したほうが良いと思ったので<a href="https://github.com/nuxt-community/sitemap-module" rel="nofollow" data-v-ab71e251>Sitemap Module</a>を利用して生成されるようにしました。</p><h2 data-v-ab71e251><a name="作業内容" class="anchor" href="#%E4%BD%9C%E6%A5%AD%E5%86%85%E5%AE%B9" rel="nofollow" aria-hidden="true" data-v-ab71e251><span class="octicon octicon-link" data-v-ab71e251></span></a> 作業内容</h2><ol data-v-ab71e251><li data-v-ab71e251><p data-v-ab71e251>yarnで追加</p><pre data-v-ab71e251><code data-v-ab71e251>$ yarn add @nuxtjs/sitemap
</code></pre></li><li data-v-ab71e251><p data-v-ab71e251>nuxt.config.jsに追記</p><pre data-v-ab71e251><code data-v-ab71e251>modules: [
  [&#39;@nuxtjs/google-analytics&#39;, {
    id: &#39;UA-48150028-1&#39;
  }],
  &#39;@nuxtjs/sitemap&#39; // &lt;-追記
],
sitemap: { // &lt;-追記
  path: &#39;/sitemap.xml&#39;,
  hostname: &#39;https://ta2mo.github.io&#39;,
  generate: true,
}
</code></pre></li><li data-v-ab71e251><p data-v-ab71e251>nuxt generate</p></li></ol><h2 data-v-ab71e251><a name="まとめ" class="anchor" href="#%E3%81%BE%E3%81%A8%E3%82%81" rel="nofollow" aria-hidden="true" data-v-ab71e251><span class="octicon octicon-link" data-v-ab71e251></span></a> まとめ</h2><p data-v-ab71e251>静的ファイルにする場合には <code data-v-ab71e251>yarn</code> でライブラリをサクッと導入し、 <code data-v-ab71e251>nuxt.config.js</code> に追記するだけでよしなにしてくれるのは手軽でした。</p></div>`,3)),t(o)])]),a("nav",u,[a("div",_,[a("div",h,[t(s,{class:"is-right is-pulled-left",to:"/post/2018-11-22-new-mac-moving"},{default:n(()=>[...e[1]||(e[1]=[a("p",{class:"heading"},"←Newer",-1),a("span",null,"Macの移行アシスタントつかったらgo buildできなくなった",-1)])]),_:1})])]),a("div",x,[a("div",f,[t(s,{class:"is-left",to:"/post/2018-11-09-blog-renewal"},{default:n(()=>[...e[2]||(e[2]=[a("p",{class:"heading"},"Older→",-1),a("span",null,"Nuxt.jsを使ってブログをリニューアルしました",-1)])]),_:1})])])])])}const N=l(v,[["render",g],["__scopeId","data-v-ab71e251"]]);export{N as default};
