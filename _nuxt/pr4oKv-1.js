import{_ as c,r as l,o as d,c as i,a as e,f as b,b as t,w as n,e as p}from"./CJIPtAdV.js";const r={},v={class:"content is-medium"},m={class:"box"},u={class:"level"},_={class:"level-left is-left"},h={class:"level-item"},x={class:"level-right is-right"},f={class:"level-item"};function g(E,a){const o=l("adsbygoogle"),s=p;return d(),i("div",null,[e("div",v,[e("div",m,[a[0]||(a[0]=b(`<span class="lable is-medium" data-v-b43ec2b5>2018-11-14</span><h1 id="2018-11-14-nuxt-js-sitemap" class="title" data-v-b43ec2b5>Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました</h1><div class="content" data-v-b43ec2b5><p data-v-b43ec2b5>今まではJekyllを利用していたのでsitemap.xmlも自動で生成されていたのですが、標準のNuxt.jsの構成だと生成されません。 SEOを考えると生成したほうが良いと思ったので<a href="https://github.com/nuxt-community/sitemap-module" rel="nofollow" data-v-b43ec2b5>Sitemap Module</a>を利用して生成されるようにしました。</p><h2 data-v-b43ec2b5><a aria-hidden="true" class="anchor" href="#%E4%BD%9C%E6%A5%AD%E5%86%85%E5%AE%B9" name="作業内容" rel="nofollow" data-v-b43ec2b5><span class="octicon octicon-link" data-v-b43ec2b5></span></a> 作業内容</h2><ol data-v-b43ec2b5><li data-v-b43ec2b5><p data-v-b43ec2b5>yarnで追加</p><pre data-v-b43ec2b5><code data-v-b43ec2b5>$ yarn add @nuxtjs/sitemap
</code></pre></li><li data-v-b43ec2b5><p data-v-b43ec2b5>nuxt.config.jsに追記</p><pre data-v-b43ec2b5><code data-v-b43ec2b5>modules: [
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
</code></pre></li><li data-v-b43ec2b5><p data-v-b43ec2b5>nuxt generate</p></li></ol><h2 data-v-b43ec2b5><a aria-hidden="true" class="anchor" href="#%E3%81%BE%E3%81%A8%E3%82%81" name="まとめ" rel="nofollow" data-v-b43ec2b5><span class="octicon octicon-link" data-v-b43ec2b5></span></a> まとめ</h2><p data-v-b43ec2b5>静的ファイルにする場合には <code data-v-b43ec2b5>yarn</code> でライブラリをサクッと導入し、 <code data-v-b43ec2b5>nuxt.config.js</code> に追記するだけでよしなにしてくれるのは手軽でした。</p></div>`,3)),t(o)])]),e("nav",u,[e("div",_,[e("div",h,[t(s,{class:"is-right is-pulled-left",to:"/post/2018-11-22-new-mac-moving"},{default:n(()=>[...a[1]||(a[1]=[e("p",{class:"heading"},"←Newer",-1),e("span",null,"Macの移行アシスタントつかったらgo buildできなくなった",-1)])]),_:1})])]),e("div",x,[e("div",f,[t(s,{class:"is-left",to:"/post/2018-11-09-blog-renewal"},{default:n(()=>[...a[2]||(a[2]=[e("p",{class:"heading"},"Older→",-1),e("span",null,"Nuxt.jsを使ってブログをリニューアルしました",-1)])]),_:1})])])])])}const N=c(r,[["render",g],["__scopeId","data-v-b43ec2b5"]]);export{N as default};
