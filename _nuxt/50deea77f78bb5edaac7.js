(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1c07a921",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";var l=n(214);n.n(l).a},238:function(t,e,n){(e=n(19)(!1)).push([t.i,"h1.title[data-v-44aadf33]{margin-top:0}div.box[data-v-44aadf33]{border-radius:0}ins[data-v-44aadf33]{margin-top:1rem;margin-bottom:1rem}",""]),t.exports=e},258:function(t,e,n){"use strict";n.r(e);var l,o=n(8),r=(n(50),n(7)),v=n(88),c=(l=function(t,b){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}l(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),_=function(t,e,n,desc){var l,r=arguments.length,v=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)v=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(v=(r<3?l(v):r>3?l(e,n,v):l(e,n))||v);return r>3&&v&&Object.defineProperty(e,n,v),v},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e=_([Object(r.Component)({components:{Menu:v.a}})],e)}(r.Vue),d=(n(237),n(4)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content is-medium"},[n("div",{staticClass:"box"},[n("span",{staticClass:"lable is-medium"},[t._v("2018-11-22")]),t._v(" "),n("h1",{staticClass:"title",attrs:{id:"2018-11-22-new-mac-moving"}},[t._v("Macの移行アシスタントつかったらgo buildできなくなった")]),t._v(" "),t._m(0),t._v(" "),n("adsbygoogle")],1)]),t._v(" "),n("nav",{staticClass:"level"},[n("div",{staticClass:"level-left is-left"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"is-right is-pulled-left",attrs:{to:"/post/2019-02-07-githubpages-nuxt-js"}},[n("p",{staticClass:"heading"},[t._v("←Newer")]),t._v(" "),n("span",[t._v("Github PagesにNuxt.jsでつくった静的ファイルをアップロードしたらGoogle Analyticsが無効になっていた")])])],1)]),t._v(" "),n("div",{staticClass:"level-right is-right"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2018-11-14-nuxt-js-sitemap"}},[n("p",{staticClass:"heading"},[t._v("Older→")]),t._v(" "),n("span",[t._v("Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",[n("a",{attrs:{href:"#%E7%B5%8C%E7%B7%AF",rel:"nofollow"}},[n("span")]),t._v("\n経緯")]),t._v(" "),n("p",[t._v("タイトルの通りなんですが現場でiMacからMacbookProへ移行することがあり、移行アシスタントを使って移行したのですが "),n("code",[t._v("go build")]),t._v(" できなくなって困った話です。\n移行元/移行先マシンのmacOSはMojave(10.14.1)でした。")]),t._v(" "),n("h4",[n("a",{attrs:{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%AD%E3%82%B0",rel:"nofollow"}},[n("span")]),t._v("\nエラーログ")]),t._v(" "),n("p",[n("code",[t._v("go: creating work dir: stat /var/folders/21/8v28hvm53zb1gmc_h73ywp580000gn/T/: no such file or directory")])]),t._v(" "),n("p",[n("code",[t._v("go build")]),t._v(" したところ上記エラーが出ました。エラーログに記述されているディレクトリを確認してみると、ディレクトリは存在しておりユーザも自分のアカウント名になっていました。\n困ったのでいろいろ試してみました。")]),t._v(" "),n("h2",[n("a",{attrs:{href:"#%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%93%E3%81%A8",rel:"nofollow"}},[n("span")]),t._v("\nやってみたこと")]),t._v(" "),n("ul",[n("li",[t._v("golangの再インストール(もともとはインストーラーでインストールされていた)\n\n"),n("ul",[n("li",[t._v("brew経由でインストールしてみる →解決せず...")]),t._v(" "),n("li",[t._v("インストーラーで再度インストール →解決せず...")]),t._v(" "),n("li",[t._v("gvm →そもそもgvmが同様のエラー表示で導入できず...")])])]),t._v(" "),n("li",[t._v("ユーザーIDの変更\n\n"),n("ul",[n("li",[t._v("移行後のユーザIDが移行前と違っていたので変更してみた")]),t._v(" "),n("li",[t._v("システム環境設定→ユーザとグループ→詳細オプションでユーザーIDのを確認&変更\n\n"),n("ul",[n("li",[t._v("問題は解決せず。さらにアプリケーションが立ち上がらないなど他の問題もでた")])])])])]),t._v(" "),n("li",[t._v("移行先Macのクリーンインストールからの移行アシスタントで移行\n\n"),n("ul",[n("li",[n("em",[t._v("成功!!")])])])])]),t._v(" "),n("h2",[n("a",{attrs:{href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow"}},[n("span")]),t._v("\nまとめ")]),t._v(" "),n("ul",[n("li",[t._v("移行アシスタントは賢いが、無用なトラブルを避けるためにはMacが未設定状態でやるのがベスト")]),t._v(" "),n("li",[t._v("そもそも移行アシスタントを使わなくても同じ状態にセットアップできる仕組みをつくっておけばよかった")])])])}],!1,null,"44aadf33",null);e.default=component.exports}}]);