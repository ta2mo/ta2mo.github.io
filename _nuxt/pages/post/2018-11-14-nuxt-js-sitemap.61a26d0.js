(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{539:function(t,e,n){var content=n(567);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("2d4fbfd6",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";var o=n(539);n.n(o).a},567:function(t,e,n){(e=n(37)(!1)).push([t.i,"h1.title[data-v-96872a14]{margin-top:0}div.box[data-v-96872a14]{border-radius:0}ins[data-v-96872a14]{margin-top:1rem;margin-bottom:1rem}",""]),t.exports=e},599:function(t,e,n){"use strict";n.r(e);var o,l=n(7),r=(n(59),n(20)),c=n(194),v=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e=d([Object(r.Component)({components:{Menu:c.a}})],e)}(r.Vue),f=(n(566),n(18)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content is-medium"},[n("div",{staticClass:"box"},[n("span",{staticClass:"lable is-medium"},[t._v("2018-11-14")]),t._v(" "),n("h1",{staticClass:"title",attrs:{id:"2018-11-14-nuxt-js-sitemap"}},[t._v("Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました")]),t._v(" "),t._m(0),t._v(" "),n("adsbygoogle")],1)]),t._v(" "),n("nav",{staticClass:"level"},[n("div",{staticClass:"level-left is-left"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"is-right is-pulled-left",attrs:{to:"/post/2018-11-22-new-mac-moving"}},[n("p",{staticClass:"heading"},[t._v("←Newer")]),t._v(" "),n("span",[t._v("Macの移行アシスタントつかったらgo buildできなくなった")])])],1)]),t._v(" "),n("div",{staticClass:"level-right is-right"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2018-11-09-blog-renewal"}},[n("p",{staticClass:"heading"},[t._v("Older→")]),t._v(" "),n("span",[t._v("Nuxt.jsを使ってブログをリニューアルしました")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("今まではJekyllを利用していたのでsitemap.xmlも自動で生成されていたのですが、標準のNuxt.jsの構成だと生成されません。\nSEOを考えると生成したほうが良いと思ったので"),n("a",{attrs:{href:"https://github.com/nuxt-community/sitemap-module",rel:"nofollow"}},[t._v("Sitemap Module")]),t._v("を利用して生成されるようにしました。")]),t._v(" "),n("h2",[n("a",{staticClass:"anchor",attrs:{name:"作業内容",href:"#%E4%BD%9C%E6%A5%AD%E5%86%85%E5%AE%B9",rel:"nofollow","aria-hidden":"true"}},[n("span",{staticClass:"octicon octicon-link"})]),t._v("\n作業内容")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("yarnで追加")]),t._v(" "),n("pre",[n("code",[t._v("$ yarn add @nuxtjs/sitemap\n")])])]),t._v(" "),n("li",[n("p",[t._v("nuxt.config.jsに追記")]),t._v(" "),n("pre",[n("code",[t._v("modules: [\n  ['@nuxtjs/google-analytics', {\n    id: 'UA-48150028-1'\n  }],\n  '@nuxtjs/sitemap' // <-追記\n],\nsitemap: { // <-追記\n  path: '/sitemap.xml',\n  hostname: 'https://ta2mo.github.io',\n  generate: true,\n}\n")])])]),t._v(" "),n("li",[n("p",[t._v("nuxt generate")])])]),t._v(" "),n("h2",[n("a",{staticClass:"anchor",attrs:{name:"まとめ",href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow","aria-hidden":"true"}},[n("span",{staticClass:"octicon octicon-link"})]),t._v("\nまとめ")]),t._v(" "),n("p",[t._v("静的ファイルにする場合には "),n("code",[t._v("yarn")]),t._v(" でライブラリをサクッと導入し、 "),n("code",[t._v("nuxt.config.js")]),t._v(" に追記するだけでよしなにしてくれるのは手軽でした。")])])}],!1,null,"96872a14",null);e.default=component.exports}}]);