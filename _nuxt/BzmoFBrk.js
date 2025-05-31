import{_ as c,x as d,z as a,J as i,B as t,C as o,g as n,y as p}from"./DWKNEfVt.js";const r={},v={class:"content is-medium"},m={class:"box"},u={class:"level"},_={class:"level-left is-left"},h={class:"level-item"},g={class:"level-right is-right"},x={class:"level-item"};function f(E,e){const l=n("adsbygoogle"),s=n("router-link");return p(),d("div",null,[a("div",v,[a("div",m,[e[0]||(e[0]=i(`<span class="lable is-medium" data-v-c6a541ea>2018-11-14</span><h1 id="2018-11-14-nuxt-js-sitemap" class="title" data-v-c6a541ea>Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました</h1><div class="content" data-v-c6a541ea><p data-v-c6a541ea>今まではJekyllを利用していたのでsitemap.xmlも自動で生成されていたのですが、標準のNuxt.jsの構成だと生成されません。 SEOを考えると生成したほうが良いと思ったので<a href="https://github.com/nuxt-community/sitemap-module" rel="nofollow" data-v-c6a541ea>Sitemap Module</a>を利用して生成されるようにしました。</p><h2 data-v-c6a541ea><a name="作業内容" class="anchor" href="#%E4%BD%9C%E6%A5%AD%E5%86%85%E5%AE%B9" rel="nofollow" aria-hidden="true" data-v-c6a541ea><span class="octicon octicon-link" data-v-c6a541ea></span></a> 作業内容</h2><ol data-v-c6a541ea><li data-v-c6a541ea><p data-v-c6a541ea>yarnで追加</p><pre data-v-c6a541ea><code data-v-c6a541ea>$ yarn add @nuxtjs/sitemap
</code></pre></li><li data-v-c6a541ea><p data-v-c6a541ea>nuxt.config.jsに追記</p><pre data-v-c6a541ea><code data-v-c6a541ea>modules: [
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
</code></pre></li><li data-v-c6a541ea><p data-v-c6a541ea>nuxt generate</p></li></ol><h2 data-v-c6a541ea><a name="まとめ" class="anchor" href="#%E3%81%BE%E3%81%A8%E3%82%81" rel="nofollow" aria-hidden="true" data-v-c6a541ea><span class="octicon octicon-link" data-v-c6a541ea></span></a> まとめ</h2><p data-v-c6a541ea>静的ファイルにする場合には <code data-v-c6a541ea>yarn</code> でライブラリをサクッと導入し、 <code data-v-c6a541ea>nuxt.config.js</code> に追記するだけでよしなにしてくれるのは手軽でした。</p></div>`,3)),t(l)])]),a("nav",u,[a("div",_,[a("div",h,[t(s,{class:"is-right is-pulled-left",to:"/post/2018-11-22-new-mac-moving"},{default:o(()=>e[1]||(e[1]=[a("p",{class:"heading"},"←Newer",-1),a("span",null,"Macの移行アシスタントつかったらgo buildできなくなった",-1)])),_:1,__:[1]})])]),a("div",g,[a("div",x,[t(s,{class:"is-left",to:"/post/2018-11-09-blog-renewal"},{default:o(()=>e[2]||(e[2]=[a("p",{class:"heading"},"Older→",-1),a("span",null,"Nuxt.jsを使ってブログをリニューアルしました",-1)])),_:1,__:[2]})])])])])}const y=c(r,[["render",f],["__scopeId","data-v-c6a541ea"]]);export{y as default};
