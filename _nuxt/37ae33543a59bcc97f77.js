(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{535:function(t,e,l){var content=l(560);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(36).default)("2c4fa048",content,!0,{sourceMap:!1})},559:function(t,e,l){"use strict";var n=l(535);l.n(n).a},560:function(t,e,l){(e=l(35)(!1)).push([t.i,"h1.title[data-v-6bc2f8b2]{margin-top:0}div.box[data-v-6bc2f8b2]{border-radius:0}ins[data-v-6bc2f8b2]{margin-top:1rem;margin-bottom:1rem}",""]),t.exports=e},589:function(t,e,l){"use strict";l.r(e);var n,o=l(7),r=(l(56),l(20)),c=l(192),v=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),_=function(t,e,l,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,l):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,l,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,l,c):n(e,l))||c);return r>3&&c&&Object.defineProperty(e,l,c),c},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e=_([Object(r.Component)({components:{Menu:c.a}})],e)}(r.Vue),h=(l(559),l(15)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"content is-medium"},[l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2018-11-09")]),t._v(" "),l("h1",{staticClass:"title",attrs:{id:"2018-11-09-blog-renewal"}},[t._v("Nuxt.jsを使ってブログをリニューアルしました")]),t._v(" "),t._m(0),t._v(" "),l("adsbygoogle")],1)]),t._v(" "),l("nav",{staticClass:"level"},[l("div",{staticClass:"level-left is-left"},[l("div",{staticClass:"level-item"},[l("nuxt-link",{staticClass:"is-right is-pulled-left",attrs:{to:"/post/2018-11-14-nuxt-js-sitemap"}},[l("p",{staticClass:"heading"},[t._v("←Newer")]),t._v(" "),l("span",[t._v("Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました")])])],1)]),t._v(" "),l("div",{staticClass:"level-right is-right"},[l("div",{staticClass:"level-item"},[l("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2015-01-17-docker-meetup-4"}},[l("p",{staticClass:"heading"},[t._v("Older→")]),t._v(" "),l("span",[t._v("Docker Meetup Tokyo #4に参加してきました")])])],1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[l("p",[t._v("今までは"),l("a",{attrs:{href:"https://jekyllrb-ja.github.io/",rel:"nofollow"}},[t._v("Jekyll")]),t._v("を使って作成していたのですが、ローカル環境でbuildできなくなることがあったり、デザインをいじるのが面倒だなと思ったので自分でJekyll相当のツールを作りました。")]),t._v(" "),l("p",[t._v("リポジトリ\n"),l("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance",rel:"nofollow"}},[t._v("https://github.com/ta2mo/blog-maintenance")])]),t._v(" "),l("p",[t._v("自分が気に入っている技術を集めて好きなようにブログを書ける環境をつくりましたが、ふんわりと考えた要件としては")]),t._v(" "),l("ul",[l("li",[t._v("投稿内容はmarkdownで書いてgit管理→GitHub管理")]),t._v(" "),l("li",[t._v("そこそこリッチかつ、ベストプラクティスを踏襲したページにしたい→Nuxt.js")]),t._v(" "),l("li",[t._v("配信とかビルド周りといった足回りは無料でやりたい→GitHub Pages、CircleCI")])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"使っているフレームワーク-ライブラリ-サービス",href:"#%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF-%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA-%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n使っているフレームワーク、ライブラリ、サービス")]),t._v(" "),l("ul",[l("li",[t._v("Nuxt.js")]),t._v(" "),l("li",[l("a",{attrs:{href:"https://bulma.io/",rel:"nofollow"}},[t._v("bulma")])]),t._v(" "),l("li",[t._v("golang\n\n"),l("ul",[l("li",[t._v("text/template")]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/urfave/cli",rel:"nofollow"}},[t._v("cli")])])])]),t._v(" "),l("li",[t._v("CircleCI")])]),t._v(" "),l("p",[t._v("詳細は"),l("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance",rel:"nofollow"}},[t._v("リポジトリ")]),t._v("の方をご確認ください。")]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"大まかな概要",href:"#%E5%A4%A7%E3%81%BE%E3%81%8B%E3%81%AA%E6%A6%82%E8%A6%81",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n大まかな概要")]),t._v(" "),l("ol",[l("li",[l("code",[t._v("/post")]),t._v(" ディレクトリ以下にmarkdown形式で書いて配置")]),t._v(" "),l("li",[t._v("GitHubにpush")]),t._v(" "),l("li",[t._v("CircleCIでビルド\n\n"),l("ol",[l("li",[t._v("markdownファイルを元にvueのcomponentをgolangで生成")]),t._v(" "),l("li",[t._v("Nuxt.jsのgenerateを利用して静的サイトを生成")]),t._v(" "),l("li",[t._v("生成した静的サイトをGithub Pagesのリポジトリにpush")])])]),t._v(" "),l("li",[t._v("Github Pagesから配信される")])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"今後の課題",href:"#%E4%BB%8A%E5%BE%8C%E3%81%AE%E8%AA%B2%E9%A1%8C",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n今後の課題")]),t._v(" "),l("ul",[l("li",[t._v("自動生成された文章のレイアウトを見やすくしたい")]),t._v(" "),l("li",[t._v("検索機能やタグで分類するとか追加したい機能があるがどこまでやるか問題")]),t._v(" "),l("li",[t._v("Disqusをつかってコメント機能を入れていたが削除した。github issuesに集約して大丈夫か悩み")]),t._v(" "),l("li",[t._v("腕試しがてらアニメーションとか無駄につけてオシャレ感だしたい")]),t._v(" "),l("li",[t._v("いろいろ細かい知見が溜まったのでブログに書き起こす")])])])}],!1,null,"6bc2f8b2",null);e.default=component.exports}}]);