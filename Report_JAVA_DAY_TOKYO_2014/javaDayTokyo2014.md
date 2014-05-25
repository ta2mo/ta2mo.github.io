# [Java Day Tokyo 2014](https://oj-events.jp/public/application/add/169?ss_ad_code=wlc01)

# [基調講演](https://oj-events.jp/public/session/view/908)

## Javaに関連する一年の歩み

 - Java SE 8のリリース
 - Java ME 8のリリース

   * アプリケーション開発環境の改善
   * アプリケーションパフォーマンスの改善
   * IOT

## Java SE 8
    
 - Lambda and Stream

   * Lambda expressions
   * Default methods
   * Stream API

 - Java SE 8 Compact Profiles

   * エンベデッド向け

 - Java SE 8 の日本語ドキュメント

## Java ME 8

## Java 8以降の話

  - Project Jigsaw
  - Project Sumatra - Java for GPUs

## IOT

  - 接続するデバイス数の増加

    * データの増加
     
      - Volume
      - Variety
      - Velocity

## Java Embedded

  - 様々なフットプリントのVM

## NECのロボットの事例

## Panasonicの事例

## Java EE 7

  - HTML5

    * WebSockets
    * annotationの強化

  - クラウド時代のスタンダードなJava

    - コンテナベースのセキュリティ
    - デフォルトリソース
    - スキーマ生成
    - クライアント用のRESTfulサービス
    - JSF

## Java EE 8

  - HTML5 / Web Tier Enhancements

    - HTTP 2.0
    - Json Binding
    - Sever-sent event
    - JAX-RS action-based MVC

  - CDI Alignment / Ease-of-Development

    * JAX-RS injection alignment
    * WebSockets

  - Cloud Enablement

    * Multitenancy


# [Java SE 8 概要](https://oj-events.jp/public/session/view/911)

## Java SE 8の機能

 - Annotation on Type
 - Date and Time API
 - Lambda expressions

## JDK Enhancement Proposals

 - OpenJDKのコミッタープロセスで機能を提案する

## 言語変更点

  - Lambda Expressions

    * Behaviorがどのように渡っていくか
    * 匿名の関数を渡していく
    * メソッドのインターフェイス
 
  - Default Methods

    * インターフェイスのメソッドを追加することで既存のインターフェイスを拡張する
    * 後方互換性に影響がありそう
    * 多重継承のBehaviorをJavaに持ち込んだ
    * stateの多重継承はない?

  - Annotations on Java Types
  
    * DIとか
    * パラメータの型指定でも使える？→コンパイル時にチェックする。

  - 型パラメータ

    * ScalaのListのheadぽい例

  - Access To Parameter Names At Runtime

    * リフレクションAPIで名前をメソッドに送れる?

  - その他
   
    * Repeating annotations
    * apt toolを削除
    * DocTree API
    * DocLint tool
    * Javadocのjavax.toolsサポート

      - Javadocからannotationとってきたり


## Coreライブラリ

  - Enhance Core Libraries With Lambdas

    * クラスライブラリの高速化の恩恵がある

  - Concurrency updates

    * Scalable update variables

      - DoubleAccumulator,DoubleAdder

    * ForkJoinPool improvements
      
  - Bulk Data Operations For Collections

    * Java.util.stream package

      - Stream, Coolector interfaces

    * Serial and parallel implementations
    * Parallel implementation builds on Fork-Join framework
    * Lazy evaluation

  - java.util.function Package

    * Streamと一緒にLambda式につかう

  - Parallel Array Sorting

    * java.util.Arrays

      - parallelSort
      - Fork-Join framework上に構成されている

  - Date And Time APIs

  - JDBC 4.2

    * ResultSet, PreparedStatement, CallableStatement
    * REF_CURSOR
    * CARDINALITY, Pages

  - Base64 Encoding and Decoding

    * java.util.Base64.Endocer
    * java.util.Base64.Decoder

  - Unicode 6.2

  - Enhanced Certificate Revocation-Checing API

    * CertPathChecker
    * CertPathParameters

  - HTTP URL Permissions

    * IPアドレス→ポートやURLや名前でコネクションのPermission制御
    * java.net.SocketPermission
    * HTTPメソッドのサポート

## Platform

  - JavaFXの起動
  - Compact Profiles

    * Project Jigsawも関連している
    * Compact3 ProfileにはGUIライブラリは含まれない

  - Modularisation Preparation

    * ServiceLoaderを使う
    * Jigsaw向けの準備

  - Nashorn JavaScript Engine

    * javax.script API
    * javascriptを走らせるjjsという新しいコマンドラインツール

  - Retire Rarely-Used GC Combinations

  - Remove The Permanent Generation

    - Nomore need to tune the size of it(Permanentとか)
    - Current objects moved to Java heap or native memory


# [Java SE 8におけるHotSpotの進化](https://oj-events.jp/public/session/view/923)

  - バック・デイビッド
  - Blog https://blogs.oracle.com/buck/

## PermGenの廃止

  - PermGenとは

    * クラスのメタデータなどを格納する場所
    * バイトコード、internされた文字列、staticフィールドの値

  - PermGenの良くない店

    * サイジングが困難

      - 考えられるポイント

        * ロードするクラスの数
        * ロードするクラスの大きさ
        * クラスのオーバーヘッド

      - 試行錯誤しないといけない
      - デフォルトが小さい : 64MB-85MB

    * パフォーマンスへの悪影響

  - 解決策

    * PermGenを廃止
    * Metaspaceに格納する
    * Heapの一部ではなくなった

  - Metaspace vs PermGen

    * デフォルトではサイズの制限がない→ユーザが意識する必要性がない
    * GCシステムが管理する必要がない
    * アンロードをClassLoaderの単位で行う→断片化しにくい

  - Metaspace Allocation

  - High Water Mark(高水位標)

    * Full GCが発生しないとMetaspaceのコレクションが行われない
    * Full GCの頻度が低いシステムのメモリ使用量を制御する必要がある
    * MetaspaceのサイズがHWMを超えるとFull GCが実行される
    * 調整する必要がある場合

      - Full GCの頻度が高過ぎる時
      - メモリの使用量が大きすぎる時

  - Compressed Oops (圧縮参照)の概念

    * 64-biのマシンでも、オブジェクトのアドレスを32bitに格納する
    
      - Javaヒープの使用量を節約
      - ヒープのベースアドレスからのオフセットを利用
      - アドレスのLSBを省略

  - Klassポインターも圧縮する

    * Compressed Oopsと同じようにJava Heapを節約する
    * パフォーマンスに影響を及ぼすメモリのみ格納する


  - 新しいコマンドラインのオプション

    * -XX:MaxMetaspaceSize
    * デフォルト = unlimited
    * Metaspaceの最大サイズ(バイト数)を設定する

    - -XX:MetaspaceSize
    - デフォルト = 21MB
    - 起動時にFullGCの頻度を減らすために大きくする
    
      * 起動のパフォーマンスをあげる
      * e.g. 使用量を測定してその値で先んじて確保する使い方 etc...

    * -XX:MinMetaspaceFreeRatio

      * デフォルト = 40

    * -XX:MaxMetaspaceFreeRatio

      * デフォルト = 70

    * High Water Markの拡張と縮小を制御する

    - -XX:+UseCompressedClassPointers

      * 64biではデフォルトで有効

    - -XX:CompressedClassSpaceSize

      * デフォルト1G
      * 変更ができないため、デフォルト値が大きい
      * 起動時にはメモリをreserveするだけ
      * 必要に応じてcommitしていくスタイル

  - MBeanの変更

    * 新しいMemoryManagerMXXXXBean: MetaspaceManager
    * 新しいメモリプールMXBean: MetaspaceとCompressedClassSpace

  - ツール対応

    * jmap -permstat → jmap -clstats
    * jstat -gc
    * jcmd <pid> GC.class_stats

      - 対象のJVMのコマンドラインで-XX:+UnlockDiagnosticVMOptionsを追加する必要あり

## Tierd Compilation(階層コンパイル)

  - 古い実装はHotSpot Expressで6u25までバックポートされた
    
    * JDK8ではようやくデフォルトで有効
  
  - 従来のHotSpotの2つのJITコンパイラ

    * C1(-client)

      - コンパイル処理が速い
      - 生成されるコードが(比較的)速くない

    * C2(-server)

      - コンパイル時間がかかる
      - 生成されるコードが速い

   - Tierd Compilation

     * 両方のコンパイラを並行で利用
     * 速い起動

   - トラブルシューティング

     * -XX:+PrintCompilation
     
       - コンパイルレベルが追加された

     * -XX:+PrintTieredEvents

## その他の改善

  - JMXで診断コマンドを実行

    * ネットワーク経由で診断コマンドも可能

  - フォールスシャリングの回避
  - JVM側で直接のサポートの追加

# [Exploring JavaFX 8](https://oj-events.jp/public/session/view/913)

  - デスクトップ用アプリケーションにするには

    1. Webブラウザでアプレット → good
    1. Applets
    1. Nativeパッケージ

## 新機能

  - control

    * DatePicker
     
      - カスタムカレンダーフォーマット
      - CSSサポート

    * TreeTableView

      - 複数選択のサポート

    * 新しいモデナテーマ

## JavaFX Scene Builder 2

  - アップデートが最近リリースされた
  - ドラッグアンドドロップで画面作成する

## JavaFXのHTML5サポート

  - JavascriptのオブジェクトをJavaのプリミティブクラスへバインドしてくれる
  - ブラウザへイベントを発行することができる?
  - HTML Featuresのサポート

    * Canvas and SVG
    * Media playback
    * web socket
    * web workers
    * web fonts

## JavaFXのEmbeddedデバイスの対応

  - WebViewとMediaViewは非対応


# [Lambda式とストリームAPI、並列処理の詳細](https://oj-events.jp/public/session/view/914)

## 概要

  - interface Consumer.accept
  - interface Function.apply
  - interface Predicate.test

  Stream -> filter -> map -> forEachという定形処理の流れになる

```
 void robocallEligileDrivers() {
     list.stream()
         .filter(p -> p.getAge() >= 16)
         .map(p -> )
         .forEach();
 }
```

  - Streams : a multipleicity of values = Not Collection

    * no storage
    * not (necessarily) ordered
    * sort-of like an iterator
    * affords serial or parallel processing

  - Stream pipeline

    * a source
    * zero or more intermediate operations 
    * aterminal operation

  - Stream source: of(...)

  - Common Collectores

    * toList()
    * joining()
    * toMap() etc...









