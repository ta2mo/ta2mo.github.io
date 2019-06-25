(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,o){t.exports=o.p+"img/aa4fd2b.jpg"},177:function(t,e,o){var content=o(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("7b8fb408",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";var n=o(177);o.n(n).a},201:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,"h1.title[data-v-1eee045a]{margin-top:0}div.box[data-v-1eee045a]{border-radius:0}ins[data-v-1eee045a]{margin-top:1rem;margin-bottom:1rem}",""])},202:function(t,e,o){"use strict";o.r(e);var n,l=o(15),v=(o(104),o(56)),_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"https://www.gitpod.io/",rel:"nofollow"}},[t._v("Gitpod")]),t._v("というサービスをなにかの記事で見つけて使ってみました。ブラウザ上でterminalを内蔵したIDEが起動し、TypeFox社が提供するdockerコンテナに接続されその上で開発ができるサービスです。")]),t._v(" "),n("p",[t._v("前にiPad Proでコードを書いたりできないかいくつか検討していたのですが、iPadのアプリではgit連携はできてもエディタで書ける程度であり、コードを書いて開発するとまではいえない状況でした。\n業務ではJetBrains社のIDEを使うことがほとんどで、iPadでもエディターよりIDEが使えないものかと探している中でなかなか使用感が良さそうなサービスだったので試しに導入してみました。")]),t._v(" "),n("p",[t._v("基本的にはPCで検証してみましたがiPad Pro 10.5inchでChromeを使えばGitpodを利用することができました。Safariは非対応でした。")]),t._v(" "),n("p",[n("img",{attrs:{src:o(175),alt:"iPadでのイメージ"}})]),t._v(" "),n("p",[t._v("iPadで起動してみた様子")]),t._v(" "),n("h2",[n("a",{attrs:{href:"#%E3%81%AF%E3%81%98%E3%82%81%E3%81%8B%E3%81%9F",rel:"nofollow"}},[n("span")]),t._v("\nはじめかた")]),t._v(" "),n("p",[t._v("Gitpodの開発環境は "),n("code",[t._v("workspace")]),t._v(" と呼ばれ、Web上で立ち上げたり停止したりは管理できる。")]),t._v(" "),n("p",[t._v("基本的には"),n("a",{attrs:{href:"https://docs.gitpod.io/10_Getting_Started.html",rel:"nofollow"}},[t._v("https://docs.gitpod.io/10_Getting_Started.html")]),t._v("参照すればだいたい書いてある")]),t._v(" "),n("h3",[n("a",{attrs:{href:"#workspace%E3%81%AE%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E6%96%B9",rel:"nofollow"}},[n("span")]),t._v("\nworkspaceの立ち上げ方")]),t._v(" "),n("ul",[n("li",[t._v("GitHubリポジトリのURLの先頭に "),n("code",[t._v("https://gitpod.io#")]),t._v(" をつけたURLに遷移することで "),n("code",[t._v("workspace")]),t._v(" を立ち上げる")]),t._v(" "),n("li",[t._v("Gitpodの "),n("a",{attrs:{href:"https://docs.gitpod.io/20_Browser_Extension.html",rel:"nofollow"}},[t._v("Chrome extension")]),t._v("を導入してGitHubにあるGitpod起動ボタンから "),n("code",[t._v("workspace")]),t._v(" を立ち上げる")])]),t._v(" "),n("h3",[n("a",{attrs:{href:"#workspace%E3%82%92%E7%B4%B0%E3%81%8B%E3%81%8F%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B",rel:"nofollow"}},[n("span")]),t._v("\nworkspaceを細かく設定する")]),t._v(" "),n("p",[t._v("起動するコンテナのイメージを変更するには "),n("code",[t._v(".gitpod.yml")]),t._v(" ファイルをルートディレクトリに配置する。Dockerfileを指定することもできるのでかなり柔軟な開発環境がつくれる。")]),t._v(" "),n("p",[t._v("自分ではblog管理にgolangとNuxt.jsを使っているのでそれ用のコンテナ設定をしてみました。\n"),n("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance/pull/15",rel:"nofollow"}},[t._v("https://github.com/ta2mo/blog-maintenance/pull/15")])]),t._v(" "),n("h2",[n("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[n("span")]),t._v("\n感想")]),t._v(" "),n("ul",[n("li",[t._v("terminalやテキスト入力のレスポンスは上々。十分な通信速度がある環境ならばローカルの開発環境とさほど変わらないのではないか。")]),t._v(" "),n("li",[t._v("カッコを入力すると閉じカッコもついてくる->IDEぽい")]),t._v(" "),n("li",[n("code",[t._v("Ctrl + space")]),t._v(" で補完候補でる")]),t._v(" "),n("li",[t._v("メソッドの定義へジャンプできる")]),t._v(" "),n("li",[t._v("このポストはPC\bのChromeで書いている\n\n"),n("ul",[n("li",[t._v("日本語入力や表示に問題ない。(Backspaceでの削除が若干挙動があやしい?)")]),t._v(" "),n("li",[n("code",[t._v("yarn run dev")]),t._v(" でブログ画面を確認しつつ書ける")]),t._v(" "),n("li",[t._v("iPadの場合、ソフトウェアキーボードを利用するとterminalは見えなくなる。Smart Keyboard等の外付けキーボードは必須だと思われる\n\n"),n("ul",[n("li",[t._v("右クリックを利用することが難しいので基本はPC向け。だが開発環境をローカルで立ち上げるのが難しいiPadでもちょっと開発できるというかんじ")])])])])]),t._v(" "),n("li",[t._v("terminalの文字表示がちょっと残念。等幅でないフォントなのか文字の間があいていて全角みたいな表示で間延びしてみえる(MBP15inch)")]),t._v(" "),n("li",[t._v("たくさんのミドルウェアや社内サービスと連携するとなるとそれらのdockerコンテナ設定か、外部への接続設定が必要になる\n\n"),n("ul",[n("li",[t._v("外部結合しない単体で完結するシステムならこれだけでも開発が可能かも")]),t._v(" "),n("li",[t._v("つよい人が先に "),n("code",[t._v(".gitpod.yml")]),t._v(" を設定してチームで使うとクリーンな環境でみんな幸せに...\n\n"),n("ul",[n("li",[t._v("新規参入メンバーが開発環境を整えるみたいなタスクがなくなるのでは")]),t._v(" "),n("li",[t._v("手慣れたIDEは使わせないという選択肢がとれればという不可能な点を除けば...")])])])])]),t._v(" "),n("li",[t._v("vimキーバインドさえあれば優勝(実装大変そうだけど...お願いしますmm\n\n"),n("ul",[n("li",[t._v("iPad Pro + Smartkeyboard + Gitpod with vimキーバインドで試してみたい!!")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("p",[t._v("タイトルのとおりなんですけどGoogle Analyticsが無効になってたでござる。Google Analyticsは公式のモジュールを入れていました。")]),t._v(" "),o("p",[t._v("Github Pagesは "),o("code",[t._v("_")]),t._v(" から始まるディレクトリは配信されない。他には "),o("code",[t._v(".")]),t._v("  、 "),o("code",[t._v("#")]),t._v(" から始まるファイル、 "),o("code",[t._v("~")]),t._v(" で終わるファイルが配信されない。(うっかりVimmerに優しい:) )"),o("br"),t._v("\nNuxt.jsのgenerateを使って静的ファイルにしてリポジトリへ置いて配信していたわけですが "),o("code",[t._v("_nuxt")]),t._v(" ディレクトリにjsの成果物があるのでGoogle Analyticsのpluginが参照できずに動いていなかったというオチ..."),o("br"),t._v("\n対応策としては "),o("code",[t._v(".nojekyll")]),t._v(" ファイルをルートディレクトリに置きました。")]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow"}},[o("span")]),t._v("\nまとめ")]),t._v(" "),o("ul",[o("li",[t._v("Github PagesはJekyllが動いている\n\n"),o("ul",[o("li",[t._v("配信されないファイルがあるから注意")])])]),t._v(" "),o("li",[o("code",[t._v(".nojekyll")]),t._v(" ファイルを追加した")])]),t._v(" "),o("h3",[o("a",{attrs:{href:"#%E5%8F%82%E7%85%A7%E3%81%97%E3%81%9F%E3%82%B5%E3%82%A4%E3%83%88",rel:"nofollow"}},[o("span")]),t._v("\n参照したサイト")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/",rel:"nofollow"}},[t._v("Files that start with an underscore are missing")])]),t._v(" "),o("li",[o("a",{attrs:{href:"http://tell-k.hatenablog.com/entry/2012/01/18/224126",rel:"nofollow"}},[t._v("github のプロジェクトにSphinxドキュメントを良さげな感じにおきたい 其の一")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("h2",[o("a",{attrs:{href:"#%E7%B5%8C%E7%B7%AF",rel:"nofollow"}},[o("span")]),t._v("\n経緯")]),t._v(" "),o("p",[t._v("タイトルの通りなんですが現場でiMacからMacbookProへ移行することがあり、移行アシスタントを使って移行したのですが "),o("code",[t._v("go build")]),t._v(" できなくなって困った話です。\n移行元/移行先マシンのmacOSはMojave(10.14.1)でした。")]),t._v(" "),o("h4",[o("a",{attrs:{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%AD%E3%82%B0",rel:"nofollow"}},[o("span")]),t._v("\nエラーログ")]),t._v(" "),o("p",[o("code",[t._v("go: creating work dir: stat /var/folders/21/8v28hvm53zb1gmc_h73ywp580000gn/T/: no such file or directory")])]),t._v(" "),o("p",[o("code",[t._v("go build")]),t._v(" したところ上記エラーが出ました。エラーログに記述されているディレクトリを確認してみると、ディレクトリは存在しておりユーザも自分のアカウント名になっていました。\n困ったのでいろいろ試してみました。")]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%93%E3%81%A8",rel:"nofollow"}},[o("span")]),t._v("\nやってみたこと")]),t._v(" "),o("ul",[o("li",[t._v("golangの再インストール(もともとはインストーラーでインストールされていた)\n\n"),o("ul",[o("li",[t._v("brew経由でインストールしてみる →解決せず...")]),t._v(" "),o("li",[t._v("インストーラーで再度インストール →解決せず...")]),t._v(" "),o("li",[t._v("gvm →そもそもgvmが同様のエラー表示で導入できず...")])])]),t._v(" "),o("li",[t._v("ユーザーIDの変更\n\n"),o("ul",[o("li",[t._v("移行後のユーザIDが移行前と違っていたので変更してみた")]),t._v(" "),o("li",[t._v("システム環境設定→ユーザとグループ→詳細オプションでユーザーIDのを確認&変更\n\n"),o("ul",[o("li",[t._v("問題は解決せず。さらにアプリケーションが立ち上がらないなど他の問題もでた")])])])])]),t._v(" "),o("li",[t._v("移行先Macのクリーンインストールからの移行アシスタントで移行\n\n"),o("ul",[o("li",[o("em",[t._v("成功!!")])])])])]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow"}},[o("span")]),t._v("\nまとめ")]),t._v(" "),o("ul",[o("li",[t._v("移行アシスタントは賢いが、無用なトラブルを避けるためにはMacが未設定状態でやるのがベスト")]),t._v(" "),o("li",[t._v("そもそも移行アシスタントを使わなくても同じ状態にセットアップできる仕組みをつくっておけばよかった")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("p",[t._v("今まではJekyllを利用していたのでsitemap.xmlも自動で生成されていたのですが、標準のNuxt.jsの構成だと生成されません。\nSEOを考えると生成したほうが良いと思ったので"),o("a",{attrs:{href:"https://github.com/nuxt-community/sitemap-module",rel:"nofollow"}},[t._v("Sitemap Module")]),t._v("を利用して生成されるようにしました。")]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E4%BD%9C%E6%A5%AD%E5%86%85%E5%AE%B9",rel:"nofollow"}},[o("span")]),t._v("\n作業内容")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("yarnで追加")]),t._v(" "),o("pre",[o("code",[t._v("$ yarn add @nuxtjs/sitemap\n")])])]),t._v(" "),o("li",[o("p",[t._v("nuxt.config.jsに追記")]),t._v(" "),o("pre",[o("code",[t._v("modules: [\n  ['@nuxtjs/google-analytics', {\n    id: 'UA-48150028-1'\n  }],\n  '@nuxtjs/sitemap' // <-追記\n],\nsitemap: { // <-追記\n  path: '/sitemap.xml',\n  hostname: 'https://ta2mo.github.io',\n  generate: true,\n}\n")])])]),t._v(" "),o("li",[o("p",[t._v("nuxt generate")])])]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow"}},[o("span")]),t._v("\nまとめ")]),t._v(" "),o("p",[t._v("静的ファイルにする場合には "),o("code",[t._v("yarn")]),t._v(" でライブラリをサクッと導入し、 "),o("code",[t._v("nuxt.config.js")]),t._v(" に追記するだけでよしなにしてくれるのは手軽でした。")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("p",[t._v("今までは"),o("a",{attrs:{href:"https://jekyllrb-ja.github.io/",rel:"nofollow"}},[t._v("Jekyll")]),t._v("を使って作成していたのですが、ローカル環境でbuildできなくなることがあったり、デザインをいじるのが面倒だなと思ったので自分でJekyll相当のツールを作りました。")]),t._v(" "),o("p",[t._v("リポジトリ\n"),o("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance",rel:"nofollow"}},[t._v("https://github.com/ta2mo/blog-maintenance")])]),t._v(" "),o("p",[t._v("自分が気に入っている技術を集めて好きなようにブログを書ける環境をつくりましたが、ふんわりと考えた要件としては")]),t._v(" "),o("ul",[o("li",[t._v("投稿内容はmarkdownで書いてgit管理→GitHub管理")]),t._v(" "),o("li",[t._v("そこそこリッチかつ、ベストプラクティスを踏襲したページにしたい→Nuxt.js")]),t._v(" "),o("li",[t._v("配信とかビルド周りといった足回りは無料でやりたい→GitHub Pages、CircleCI")])]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF-%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA-%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9",rel:"nofollow"}},[o("span")]),t._v("\n使っているフレームワーク、ライブラリ、サービス")]),t._v(" "),o("ul",[o("li",[t._v("Nuxt.js")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://bulma.io/",rel:"nofollow"}},[t._v("bulma")])]),t._v(" "),o("li",[t._v("golang\n\n"),o("ul",[o("li",[t._v("text/template")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/urfave/cli",rel:"nofollow"}},[t._v("cli")])])])]),t._v(" "),o("li",[t._v("CircleCI")])]),t._v(" "),o("p",[t._v("詳細は"),o("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance",rel:"nofollow"}},[t._v("リポジトリ")]),t._v("の方をご確認ください。")]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E5%A4%A7%E3%81%BE%E3%81%8B%E3%81%AA%E6%A6%82%E8%A6%81",rel:"nofollow"}},[o("span")]),t._v("\n大まかな概要")]),t._v(" "),o("ol",[o("li",[o("code",[t._v("/post")]),t._v(" ディレクトリ以下にmarkdown形式で書いて配置")]),t._v(" "),o("li",[t._v("GitHubにpush")]),t._v(" "),o("li",[t._v("CircleCIでビルド\n\n"),o("ol",[o("li",[t._v("markdownファイルを元にvueのcomponentをgolangで生成")]),t._v(" "),o("li",[t._v("Nuxt.jsのgenerateを利用して静的サイトを生成")]),t._v(" "),o("li",[t._v("生成した静的サイトをGithub Pagesのリポジトリにpush")])])]),t._v(" "),o("li",[t._v("Github Pagesから配信される")])]),t._v(" "),o("h2",[o("a",{attrs:{href:"#%E4%BB%8A%E5%BE%8C%E3%81%AE%E8%AA%B2%E9%A1%8C",rel:"nofollow"}},[o("span")]),t._v("\n今後の課題")]),t._v(" "),o("ul",[o("li",[t._v("自動生成された文章のレイアウトを見やすくしたい")]),t._v(" "),o("li",[t._v("検索機能やタグで分類するとか追加したい機能があるがどこまでやるか問題")]),t._v(" "),o("li",[t._v("Disqusをつかってコメント機能を入れていたが削除した。github issuesに集約して大丈夫か悩み")]),t._v(" "),o("li",[t._v("腕試しがてらアニメーションとか無駄につけてオシャレ感だしたい")]),t._v(" "),o("li",[t._v("いろいろ細かい知見が溜まったのでブログに書き起こす")])])])}],r=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),c=function(t,e,o,desc){var n,v=arguments.length,_=v<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(_=(v<3?n(_):v>3?n(e,o,_):n(e,o))||_);return v>3&&_&&Object.defineProperty(e,o,_),_},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e=c([Object(v.Component)({components:{PostList:h}})],e)}(v.Vue),d=(o(200),o(6)),h=Object(d.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content is-medium"},[o("div",{staticClass:"box"},[o("span",{staticClass:"lable is-medium"},[t._v("2019-02-17")]),t._v(" "),o("nuxt-link",{attrs:{to:"/post/2019-02-17-gitpod-impression"}},[o("h1",{staticClass:"title",attrs:{id:"2019-02-17-gitpod-impression"}},[t._v("Gitpodは意外と使えそう")])]),t._v(" "),t._m(0),t._v(" "),o("adsbygoogle")],1),t._v(" "),o("div",{staticClass:"box"},[o("span",{staticClass:"lable is-medium"},[t._v("2019-02-07")]),t._v(" "),o("nuxt-link",{attrs:{to:"/post/2019-02-07-githubpages-nuxt-js"}},[o("h1",{staticClass:"title",attrs:{id:"2019-02-07-githubpages-nuxt-js"}},[t._v("Github PagesにNuxt.jsでつくった静的ファイルをアップロードしたらGoogle Analyticsが無効になっていた")])]),t._v(" "),t._m(1),t._v(" "),o("adsbygoogle")],1),t._v(" "),o("div",{staticClass:"box"},[o("span",{staticClass:"lable is-medium"},[t._v("2018-11-22")]),t._v(" "),o("nuxt-link",{attrs:{to:"/post/2018-11-22-new-mac-moving"}},[o("h1",{staticClass:"title",attrs:{id:"2018-11-22-new-mac-moving"}},[t._v("Macの移行アシスタントつかったらgo buildできなくなった")])]),t._v(" "),t._m(2),t._v(" "),o("adsbygoogle")],1),t._v(" "),o("div",{staticClass:"box"},[o("span",{staticClass:"lable is-medium"},[t._v("2018-11-14")]),t._v(" "),o("nuxt-link",{attrs:{to:"/post/2018-11-14-nuxt-js-sitemap"}},[o("h1",{staticClass:"title",attrs:{id:"2018-11-14-nuxt-js-sitemap"}},[t._v("Nuxt.jsを使っているブログでsitemap.xmlが作成されるようにしました")])]),t._v(" "),t._m(3),t._v(" "),o("adsbygoogle")],1),t._v(" "),o("div",{staticClass:"box"},[o("span",{staticClass:"lable is-medium"},[t._v("2018-11-09")]),t._v(" "),o("nuxt-link",{attrs:{to:"/post/2018-11-09-blog-renewal"}},[o("h1",{staticClass:"title",attrs:{id:"2018-11-09-blog-renewal"}},[t._v("Nuxt.jsを使ってブログをリニューアルしました")])]),t._v(" "),t._m(4),t._v(" "),o("adsbygoogle")],1)])},_,!1,null,"1eee045a",null).exports,m=function(){var t=function(e,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(e,b)};return function(e,b){function o(){this.constructor=e}t(e,b),e.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}}(),E=function(t,e,o,desc){var n,v=arguments.length,_=v<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(_=(v<3?n(_):v>3?n(e,o,_):n(e,o))||_);return v>3&&_&&Object.defineProperty(e,o,_),_},w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return m(e,t),e=E([Object(v.Component)({components:{PostList:h}})],e)}(v.Vue),y=Object(d.a)(w,function(){var t=this.$createElement;return(this._self._c||t)("PostList")},[],!1,null,"907abdce",null);e.default=y.exports}}]);