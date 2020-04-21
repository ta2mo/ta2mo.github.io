(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{543:function(t,e,l){var content=l(577);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("515242b0",content,!0,{sourceMap:!1})},576:function(t,e,l){"use strict";var o=l(543);l.n(o).a},577:function(t,e,l){(e=l(36)(!1)).push([t.i,"h1.title[data-v-488c47a6]{margin-top:0}div.box[data-v-488c47a6]{border-radius:0}ins[data-v-488c47a6]{margin-top:1rem;margin-bottom:1rem}",""]),t.exports=e},600:function(t,e,l){"use strict";l.r(e);var o,n=l(7),r=(l(59),l(20)),c=l(192),v=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),_=function(t,e,l,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,l):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,l,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,l,c):o(e,l))||c);return r>3&&c&&Object.defineProperty(e,l,c),c},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e=_([Object(r.Component)({components:{Menu:c.a}})],e)}(r.Vue),h=(l(576),l(18)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"content is-medium"},[l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-01-28")]),t._v(" "),l("h1",{staticClass:"title",attrs:{id:"2020-01-28-search-form-by-algolia"}},[t._v("algoliaをつかってNuxt.jsのサイトに検索フォームをつけてみた")]),t._v(" "),t._m(0),t._v(" "),l("adsbygoogle")],1)]),t._v(" "),l("nav",{staticClass:"level"},[l("div",{staticClass:"level-left is-left"},[l("div",{staticClass:"level-item"},[l("nuxt-link",{staticClass:"is-right is-pulled-left",attrs:{to:"/post/2020-02-06-open-github-url-from-intellij"}},[l("p",{staticClass:"heading"},[t._v("←Newer")]),t._v(" "),l("span",[t._v("IntelliJで作業中のファイルをGithubで開く方法")])])],1)]),t._v(" "),l("div",{staticClass:"level-right is-right"},[l("div",{staticClass:"level-item"},[l("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2020-01-07-SES-issues"}},[l("p",{staticClass:"heading"},[t._v("Older→")]),t._v(" "),l("span",[t._v("現場エンジニアからみたSESの問題点")])])],1)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[l("p",[l("a",{attrs:{href:"https://www.algolia.com/",rel:"nofollow"}},[t._v("algolia")]),t._v("を利用してこのブログにも検索フォームをつけてみました。"),l("br"),t._v("\n関連pull request： "),l("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance/pull/22",rel:"nofollow"}},[t._v("use algolia #22")]),t._v("、"),l("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance/pull/24",rel:"nofollow"}},[t._v("fix #23 #24")])]),t._v(" "),l("p",[t._v("追加実装した内容")]),t._v(" "),l("ol",[l("li",[t._v("algoliaのインデックスを更新するコマンド追加")]),t._v(" "),l("li",[t._v("検索フォームを設置\n\n"),l("ul",[l("li",[t._v("algoliaにリクエストする実装")]),t._v(" "),l("li",[t._v("community planを利用しているのでalgoliaのlogoを表示(freeのプランの場合ダッシュボードに "),l("code",[t._v("he Community (free) plan requires you to display the Algolia logo next to the search results.")]),t._v(" と表示される)")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"algoliaのよかったところ",href:"#algolia%E3%81%AE%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nalgoliaのよかったところ")]),t._v(" "),l("ul",[l("li",[t._v("検索元データになるindexはかんたんに作成できた。 "),l("code",[t._v("model/post.go")]),t._v(" にstructタグつけてライブラリでuploadしてやればおｋだった。CIでデプロイする前に作成している。")]),t._v(" "),l("li",[t._v("ドキュメントがよかった。instantsearchに関してはvue/react/jsのそれぞれでexampleがあった")]),t._v(" "),l("li",[t._v("ハイライトたすかる。ハイライト部分がマークアップされて帰ってくるのでそのまま表示していいかんじになる\n\n"),l("ul",[l("li",[t._v("googleのサイト内検索的なのもできそう")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"ハマったところ",href:"#%E3%83%8F%E3%83%9E%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nハマったところ")]),t._v(" "),l("ul",[l("li",[t._v("20KBを超えるrecordをアップロードしようとしたらsize overのエラーで怒られた\n\n"),l("ul",[l("li",[t._v("post本文のhtmlのタグを削除したrecordデータにした")])])]),t._v(" "),l("li",[t._v("algoliaのwidgetを利用してロゴを表示しようとしたところ "),l("code",[t._v("ReferenceError > location is not defined")]),t._v(" とエラーが出た。静的サイトなので "),l("code",[t._v("<no-ssr>")]),t._v(" タグで囲んで対応した\n\n"),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/algolia/vue-instantsearch/tree/master/examples/nuxt",rel:"nofollow"}},[t._v("https://github.com/algolia/vue-instantsearch/tree/master/examples/nuxt")]),t._v(" のあたりを参考にした")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"感想",href:"#%E6%84%9F%E6%83%B3",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n感想")]),t._v(" "),l("ul",[l("li",[t._v("現状はカテゴリーで分けてるけどタグつけてみてより検索しやすくしてみたい")]),t._v(" "),l("li",[t._v("analyticsで検索ワードとかヒット率がみれるぽいので収益あがったら使ってみたい")])])])}],!1,null,"488c47a6",null);e.default=component.exports}}]);