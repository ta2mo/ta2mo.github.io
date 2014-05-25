# JJUG CCC 2014 Spring

# [Java 8 for Java EE 7/6 by 岩崎 浩文]()

## JavaEEとは

  - アプリケーションサーバの仕様

    - EJB
    - JMS
    - JSF

  - JavaEEは同じバージョン数字のJavaSEを前提にしている

## 現状対応しているアプリケーションサーバ

  - Glassfish
  - WildFly

## Java SE 8の変更点
  - 追加された機能

    - Stream API
    - Date Time API
    - JavaFX

  - Java SE 8でなくなった機能

    - com.sun.misc.*
    - JDBC-ODBC Bredgeがなくなった

## Java SE 8のポイント

  - Lamda with StreamAPI

    順番を守って実行してくれる(パラレル化してくれないから遅くなるかも)→forEachOrderedメソッド

  - Data Time API

    nano secondになった

  - TIMESTAMP(JDBC)

    DATE java.time.LocalDate
    TIME java.time.LocalDate
    TIMESTAMP java.time.LocalDateTime
    TIME WITH TIMEZONE java.time.OffsetTime

  - Type Annotation

    - パラメータのnullなんかのチェックメソッドを書かなくてもよい

## 業務で適用するポイント

  - JSF
  - EJB
  - JTA
  - JPA

  - Parallel Streamに関しては動いたらラッキー。アプリケーションサーバー毎に検証する必要がある。

# [Java トラブルに備えよう by 上妻 宜人]()

## Javaのトラブルとは？

  - OutOfmemory
  - 突然の無応答 or スローダウン etc...

## 困ること

  - GCログがない
  - ヒストグラムがない
  - アプリログがない

  * 情報がないため対応ができない

## Javaのトラブルに応じた情報収集方法

  - GCログの出力(負荷小)

    * GCログにタイムスタンプをつけよう
    * GCログのローテーションしよう(サイズローテーション)
    * GCViewer使ってる


  - クラスヒストグラム(負荷中)

    * Javaヒープを多く占めているクラスをテキスト形式で取得
    * コマンドラインで取得
    * オプションを指定して取得
    
  - ヒープダンプを取る(負荷大)

    * 負荷が大きいため商用ではOOMエラー時自動取得がオススメ→オプションをつける
    * ヒープダンプ解析: Eclipse Memory Analyzer

### OOMの場合

  - 突然跳ね上がるパターン

    * エラー時にどんなコードが動いていたか

      - Java起動オプションに普段から設定しておく
      - OOMエラー発生時に自動的にヒープダンプで状況保存

  - ジワジワ型

    * 長い時間をかけてOOM
    * 再現に時間がかかる
    * ORマッパキャッシュ/自作キャッシュ/セッション肥大化
    * 商用のみで再現するケースが多いのでOOMに至るまでの時系列のログがほしい

      - クラスヒスとグラムを収集する

        * cronを利用して定期的に取得、テキストデータをグラフ化
        * HeapStatsで取得する

### スローダウンの場合

  - スレッドダンプをとる
   
    * JDK1.4.2 : kill -3 <pid>
    * JDK7u4 : ${JAVA_HOME}/bin/jcmd <pid> Thread.print

  - 可視化する
    * 侍
    * ThreadLoic

  - どの機能が遅いか分かったがどこが遅いかわからない

    * hprofでプロファイリング

      - 集計対象はサンプリング時にアクティブなスレッドのみ

  - 商用での定常的収集にはJava Flight Recorderがオススメ

  - JTAタイムアウト後も止まらないパターンがある場合の対処法

    * JDBC SQLタイムアウト
      
      - java.sql.statement.setQueryTimeout(int seconds)
      - スレッド割り込みでなく、キャンセル要求送信で実現

    * APサーバ機能

      - WildFly : set-tx-query-timeoutの設定
      - WebLogic12c : 文タイムアウトの設定

### OSの設定漏れ

e.g. too may file open

  - まずは事実を情報収集をする

    * lsof -p <java_pid>

  - スレッド数上限に達した時も情報収集する


# [初めてのJava EE開発から学んだこと by 菊田 洋一](https://speakerdeck.com/kikutaro/chu-metefalse-java-ee-kai-fa-karaxue-ndakoto-jjug-ccc-2014-spring)

## JavaEEを選ぶまで

  - ユーザ100名ほどの小さい販売管理システム
  - 調査→Java EEプロトタイプ作成→採用判断

    * 調査当時(2012年〜)

      - 日本語の情報が少なめ
      - J2EEの不評ぶりとSpring、Seasarが人気
      - Oracleの寺田さんが進めてる

    * プロトタイプ作成

      - プロトタイプ開発を通じて機能理解や課題の洗い出しを実施
      - 勉強会などへ参加

    * 採用判断

      - プロトタイプ開発で開発できそうな感触を得た
      - 日本でもJava EEに関する質の高い情報があった

## 開発で利用したもの

  - 検索、一覧系画面、登録、編集、削除を含む画面を作成して必要な要素を習得した

    * JSF : 
    * EJB : ビジネスロジックを実装するためのコンポーネント。コンテナによるトランザクション管理などを提供
    * JPA : O/Rマッピングによる永続化

      - EntityManager API
      - JPQL

    * CDI : 依存性の注入

      - @Alternativeによる注入対象の切り替え
      - @InterceptorによるAOP

## プロトタイプ・現在の開発

  - 開発環境 : NetBeans
  - ビルド : Maven
  - APサーバ : Glassfish
  - JSF : PRIME FACES
  - JPA : eclipse link

  * Java EEはオールインワンと言われるが実際にはいろいろ取捨選択する必要がある

### テスト

  - Arquillian Persistence Extension

    * テスト実行前→テスト実行後のテストデータをXMLで指定し、実行後に利用した行のみ削除

### JavaEEの評判

  - JSF

    - ダメ
    - コンポーネントツリーを抱えるので性能面で注意が必要
    - HTTPを意識しない抽象化されすぎている
    - デバッグが難しい
    - サーバサイドから生成されるHTMLが難しい

    * PrimeFacesのような立地コンポーネントを利用して、Javascript得意な人がいなくても複雑なコンポーネントを利用可能
    * デザイナがいないチームでも見栄えの良い画面ができる
    * Show caseがあって設計時からデザインのすり合わせができる

  - JPA

    - O/Rマッパーはパフォーマンスを含めて注意が必要
    - JPQLでDBベンダを意識せずに開発できるっていうメリットがある場面があるのか
    - SessionScopeやApplicationScopeを多様せず、ViewScopeを中心にしたスコープにする
    - 大量コンポーネントを画面に配置するのは避ける
    - 開発中は必ずSQL実行回数をチェックして減らす
    - Jmeterを利用した負荷試験を行う

### JavaEE6アプリをオフラインに対応させる例

  - Embedded Glassfish、組み込みデータベース、Apache Derbyを使用してオフラインでアプリを実行する環境をつくった

## コミュニティを通じた学び

  - 学ぶ場や情報がたくさんある


# [Skinny Framework で始める Scala by 瀬良 和弘](http://www.slideshare.net/seratch/jjug-ccc-2014spring)

## Scala互換性の件

## ScalaのWebフレームワーク事情

  - Liftほぼ一択
  - 2012年にPlay Framework 2.0が登場し圧倒的に人気に
  - 軽量なScalatra、Unifiltered、Sprayなどある

## Skinny Framework

  - フルスタックフレームワーク
  - Java1.6以上、 Servlet 3.0以上
  - ScalaはEclipseではなくIntellij IDEAの方が良いサポートしている
  - 既存DBからscaffoldを生成する。

## Skinnyのメリット

  - Play1/Rails的なものが欲しい
  - 全体的にJavaでの一般的なスタイルよりも本質的なコードのみで簡潔にかける
  - ScalikeJDBCはJavaでは実装できない利便性・柔軟性
  - Scalaでの開発ボトルネックはコンパイル時間、周辺ツールの流儀を学習すること。skinnyはこれを解決する。


# [Java EE 7 対応! JPA の同時実行制御とロック by 多田 真敏](http://www.slideshare.net/masatoshitada7/jpa20140518-ccc-r15-jjug-ccc)

## バージョン

  - 対象のテーブルにバージョン列を追加する
  - Entityのバージョンフィールドには@Versionアノテーションを付加する

## LockModeTypeの指定方法

  - EntityMangeインターフェース
  - Query(TypedQuery)インターフェース
  - NamedQueryアノテーション

## 注意点

  - 必ずSQLログを出力して、一通りの挙動を確認しましょう
  - SQLログの順番がDB内での実行順序とは異なる場合があるので注意
  - バージョン番号に依存するコードがある場合にHibernateとEclipselinkでバージョン番号のインクリメント回数が異なるので注意が必要


# [最近の Java Web 開発 (2014 春) by 文字 拓郎]()

# プロジェクトの概要

  - インフラ条件

    * Java 7
    * WebLogic 12c
    * Oracle 11g
    * IE9

  - 既存Webシステムの問題点

    * 構造の欠落
    * クライアントとサーバが密結合

  - SPAでつくってみた

    * クライアント-サーバを分離
    * B2CのWebサービスはリッチ化が進んでいる

# アーキテクチャ説明

  - クライアント

    - Backbone.js

  - サーバ

    - Gradle(マルチプロジェクト構成)
    - Guice
    - Jersey
    - Hibernate

      * Type-safe extension

    - Guava
    - Jackson

# まとめ

  - SPAは採用すべき

    * 明らかなユーザエクスペリエンスの工場
    * 開発面でも利点がある

