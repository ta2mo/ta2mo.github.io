import{_ as l}from"./BJdksvsy.js";import{_ as d,c as i,a as e,e as c,b as t,w as o,r as p,o as r}from"./DBlCivIo.js";const v={},m={class:"content is-medium"},b={class:"box"},u={class:"level"},_={class:"level-left is-left"},h={class:"level-item"},x={class:"level-right is-right"},f={class:"level-item"};function g(E,a){const n=p("adsbygoogle"),s=l;return r(),i("div",null,[e("div",m,[e("div",b,[a[0]||(a[0]=c(`<span class="lable is-medium" data-v-323e34be>2018-11-14</span><h1 id="2018-11-14-nuxt-js-sitemap" class="title" data-v-323e34be>Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました</h1><div class="content" data-v-323e34be><p data-v-323e34be>今まではJekyllを利用していたのでsitemap.xmlも自動で生成されていたのですが、標準のNuxt.jsの構成だと生成されません。 SEOを考えると生成したほうが良いと思ったので<a href="https://github.com/nuxt-community/sitemap-module" rel="nofollow" data-v-323e34be>Sitemap Module</a>を利用して生成されるようにしました。</p><h2 data-v-323e34be><a name="作業内容" class="anchor" href="#%E4%BD%9C%E6%A5%AD%E5%86%85%E5%AE%B9" rel="nofollow" aria-hidden="true" data-v-323e34be><span class="octicon octicon-link" data-v-323e34be></span></a> 作業内容</h2><ol data-v-323e34be><li data-v-323e34be><p data-v-323e34be>yarnで追加</p><pre data-v-323e34be><code data-v-323e34be>$ yarn add @nuxtjs/sitemap
</code></pre></li><li data-v-323e34be><p data-v-323e34be>nuxt.config.jsに追記</p><pre data-v-323e34be><code data-v-323e34be>modules: [
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
</code></pre></li><li data-v-323e34be><p data-v-323e34be>nuxt generate</p></li></ol><h2 data-v-323e34be><a name="まとめ" class="anchor" href="#%E3%81%BE%E3%81%A8%E3%82%81" rel="nofollow" aria-hidden="true" data-v-323e34be><span class="octicon octicon-link" data-v-323e34be></span></a> まとめ</h2><p data-v-323e34be>静的ファイルにする場合には <code data-v-323e34be>yarn</code> でライブラリをサクッと導入し、 <code data-v-323e34be>nuxt.config.js</code> に追記するだけでよしなにしてくれるのは手軽でした。</p></div>`,3)),t(n)])]),e("nav",u,[e("div",_,[e("div",h,[t(s,{class:"is-right is-pulled-left",to:"/post/2018-11-22-new-mac-moving"},{default:o(()=>[...a[1]||(a[1]=[e("p",{class:"heading"},"←Newer",-1),e("span",null,"Macの移行アシスタントつかったらgo buildできなくなった",-1)])]),_:1})])]),e("div",x,[e("div",f,[t(s,{class:"is-left",to:"/post/2018-11-09-blog-renewal"},{default:o(()=>[...a[2]||(a[2]=[e("p",{class:"heading"},"Older→",-1),e("span",null,"Nuxt.jsを使ってブログをリニューアルしました",-1)])]),_:1})])])])])}const w=d(v,[["render",g],["__scopeId","data-v-323e34be"]]);export{w as default};
