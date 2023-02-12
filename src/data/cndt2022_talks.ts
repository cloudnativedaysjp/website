import type { Talk } from "../types/talk";

export const CNDT2022Talks: Talk[] = [
  {
    "id": 1509,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1509/1509.m3u8",
    "title": "脱・塩漬け！サステナブルなKubernetesエコシステムの管理をしていくために",
    "abstract": "Kubernetesの魅力の1つに、様々なエコシステムの存在があると思います。\r\n\r\nエコシステムをクラスタにインストールしていくことで運用課題を解決することができますが、一方でエコシステム自身の管理工数は増えていきます。しかし、その管理を怠って塩漬けしてしまうと、エコシステムがKubernetesのライフサイクルを追従できなくなる等の様々な問題が発生します。\r\n\r\n本セッションでは、持続可能性を目指した、Renovateとhelmfileを利用したKubernetesエコシステム管理手法について解説します。",
    "speakers": [
      {
        "id": 1324,
        "name": "Shota Suzuki"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/sshota0809/tuo-yan-zi-ke-sasutenahurunakubernetesekosisutemunoguan-li-wositeikutameni",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1511,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1511/37/playlist.m3u8",
    "title": "DMMプラットフォームを支える負荷試験基盤",
    "abstract": "DMMプラットフォームで共通利用できる負荷試験基盤をk8sに構築しました。本セッションでは、負荷試験基盤を開発した背景、MVPの設計方針、開発する上で困難だったことを紹介します。負荷試験基盤のMVPの設計をする前に、想定ユーザーからとったアンケート結果も公開します。これから負荷試験を効率良く行うための仕組みをつくる人にとって参考になる情報を提供できると思います。",
    "speakers": [
      {
        "id": 1328,
        "name": "yuyu_hf"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yuyu_hf/cndt-2022-dmm-load-testing-platform-for-dmm-platform",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1512,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1512/1512.m3u8",
    "title": "目で見て体験！ Kubernetesのしくみ",
    "abstract": "Kubernetesは、その動作が直接は目に見えないため、特に初心者にとってはとっつきにくい面があります。特にマルチ・ノードでの動作を確認しようと思うと複数のサーバをセットアップしなければならず、その点でも敷居が高いと言えるでしょう。本講演ではRespberry Pi上にKubernetes環境を構築し、その上で「目に見えるWebサーバ(アクセスがあるとLEDが点灯する)」を実行することでKubernetesの動作を確認していきます。こちらの書籍からの内容の抜粋となります。 https://www.amazon.co.jp/dp/4297123193",
    "speakers": [
      {
        "id": 1330,
        "name": "Shisei Hanai"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1513,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1513/43/playlist.m3u8",
    "title": "Bringing WAF to Envoy and Istio with WebAssembly and... Go?",
    "abstract": "Envoy is a cloud-native proxy with many networking features but does not come with built-in features for Web Application Firewall (WAF). Luckily, Envoy provides a plugin interface via WebAssembly - it is possible to customize request handling by implementing a plugin in one of several languages that can compile to WebAssembly. This presentation will show how we brought WAF to Envoy by compiling the off-the-shelf WAF library, Coraza, to WebAssembly.",
    "speakers": [
      {
        "id": 1331,
        "name": "Anuraag Agrawal"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/1AIGNk1FLS9dsAzKbSoj80BuW7-CaMFkaT5qZwvQVpdE",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1516,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1516/1516.m3u8",
    "title": "Dynamic VM Scheduling in OpenStack",
    "abstract": "話し手が所属するGMOペパボにおいては、OpenStackを用いたプライベートクラウドを運用しています。その中で発生したKubernetesのデータプレーンを含むVMのリソース競合の問題について紹介し、それをどのように解決したのかを紹介します。",
    "speakers": [
      {
        "id": 1334,
        "name": "Kazuhiko Yamashita"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:35:00.000+09:00",
    "endTime": "2000-01-01T11:55:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1518,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1518/1518.m3u8",
    "title": "バッチシステムをクラウドネイティブにするために考えたこと",
    "abstract": "古くからシステムの一部として利用されてきたバッチシステムですが、運用しやすいバッチシステムの設計・構築にはwebアプリケーションとは異なる着眼点が必要となります。\r\n本セッションでは、クラウドネイティブ時代に求められるバッチシステムの性質について整理し、弊社のプロダクトでバッチシステムをVMベースからStepFunction+ECS Fargateベースへ移行させた事例、及びその中で発生したトラブルと対処法についてお話します。",
    "speakers": [
      {
        "id": 1338,
        "name": "Teruya Ono"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T13:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1519,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1519/1519.m3u8",
    "title": "Ingress Controller for LINE Private Cloud Platform",
    "abstract": "私達が開発している LINE の Private Cloud Platform である Verda は、社内開発者向けに多種多様なインフラサービスを管理しており、その中の一つに VKS(Verda Kubernetes Service) と呼ばれる Kubernetes as a Service があります。\r\n\r\nしかしながら従来の VKS は外部からの通信を受け付けるための仕組みとして Service type LoadBalancer しか提供しておらず、Ingress を利用したいユーザは自ら Ingress コントローラ及び証明書の管理をする必要がありました。\r\n\r\nこのセッションでは、上記の課題を解決するために開発した Verda の L7LB as a Service を利用する Ingress コントローラ及び証明書を管理するコントローラについて、具体的な設計を交えてご紹介します。",
    "speakers": [
      {
        "id": 1339,
        "name": "Shota Kitazawa"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1521,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1521/22/playlist.m3u8",
    "title": "Kubernetesのnamespaceを越えて: namespace跨ぎのsnapshotからのvolumeの作成の今と未来",
    "abstract": "Kubernetesのクラスターはnamespaceによって論理的に分割されているため、通常、異なるnamespaceのリソースにアクセスできません。これにより、不正なアクセスを防ぐことができますが、namespace間のデータ共有のユースケース等で、この制限が問題になります。具体的には、本番環境のデータを別のnamespaceの開発環境に持ってきてテストを行うようなユースケースの実現が困難となります。このセッションでは、この問題を解決するためにKubernetesのv1.26でalphaをターゲットにコミュニティで開発中のCrossNamespaceSourceProvisioningの機能(KEP-3294)が、ReferenceGrantなどの仕組みを利用して、どのように実現され、どのようにこの問題を解決する予定なのかを、デモを交えて説明します。",
    "speakers": [
      {
        "id": 1341,
        "name": "Masaki Kimura/Takafumi Takahashi"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1522,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1522/1522.m3u8",
    "title": "モヤモヤをスッキリ、理解の点と点を繋げて、コンテナセキュリティを得意分野に！",
    "abstract": "広がるクラウドネイティブ、技術者や管理者の方々の学習範囲も多岐に渡っています。\r\nその中で、コンテナセキュリティを得意分野にできたら強いと思いませんか？\r\n皆さんの『苦手』⇒『面白い≒得意』となるキッカケになれたら幸いです。",
    "speakers": [
      {
        "id": 1342,
        "name": "Tatsuhiro Nomura"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1523,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1523/1523.m3u8",
    "title": "AWS、GCP、Azureのサーバレスの利用実態とAWSサーバレスのモニタリング",
    "abstract": "DatadogはAWS、GCP、Azureで多く使われているクラウドモニタリングのSaaSです。Datadogが2022年にかけて行った調査から、AWS、GCP、Azureの利用実態のそれぞれの特色を紹介し、特にAWSのサーバレス環境でのモニタリングの手法をご紹介します。",
    "speakers": [
      {
        "id": 1343,
        "name": "Taiji Hagino "
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:15:00.000+09:00",
    "endTime": "2000-01-01T11:35:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Serverless / FaaS",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1525,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1525/28/playlist.m3u8",
    "title": "Rook/Cephストレージシステムを開発しながらupstream OSSに成果を還元してきた取り組み",
    "abstract": "サイボウズは新インフラ基盤のストレージシステムとしてRook/Cephクラスタの開発をしてきました。\r\n本セッションではストレージシステムの開発中に、どのような課題に遭遇してきたのか、および、\r\nupstream OSSと協力しながらどのように解決してきたかを述べます。具体的には以下のようなことを話します。\r\n\r\n- 機能開発やバグ修正のupstreamへの還元\r\n- 発表者によるメンテナとしてのコミュニティ全体への貢献\r\n- テストプロセスの改善提案",
    "speakers": [
      {
        "id": 1345,
        "name": "Satoru Takeuchi"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1526,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1526/38/playlist.m3u8",
    "title": "マニフェストレスで使える IaC・CI/CD のSaaSプロダクト化への挑戦",
    "abstract": "クラウドネイティブなアプリケーション開発が浸透し、IaC・CI/CDの優れたプラクティスが生み出される一方で、リリースエンジニアリングに十分なリソースが割けない開発チームもたくさんいます。\r\n\r\nNTTコミュニケーションズでは、そういった開発チームに向けて、あらかじめ用意されたパッケージを選択するだけでIaCとCI/CDが自動で構成されすぐにデリバリが可能となるSaaSを開発しました。マルチクラウド・Kubernetesにデリバリでき、複雑なユースケースにも対応可能な柔軟性・拡張性を実現するために、CUE・Tekton・Kubernetesカスタムオペレータなどを駆使しています。\r\n\r\n本セッションでは、上記のSaaSがユーザに提供する価値、選定した技術・アーキテクチャとその理由、直面した課題などについてご紹介します。",
    "speakers": [
      {
        "id": 1347,
        "name": "Hiroki Okui"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hrk091/cd-nosaaspurodakutohua-henotiao-zhan",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1527,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1527/40/playlist.m3u8",
    "title": "SIerで実践！クラウドネイティブを普及させる取り組み",
    "abstract": "SIerではクラウドネイティブな案件を増やすために、人材不足を解消するための取り組みが求められています。弊社で実践する、クラウドネイティブを浸透させる取り組みを紹介いたします。\r\n\r\n以下のような課題を解決する一助になればと思います。\r\n- クラウドネイティブな技術をもつエンジニアは一定数いるものの、まだ人材不足で育成が求められている\r\n- 技術者に自発的にクラウドネイティブな技術を習得してもらいたい\r\n- 非エンジニア層（営業）にもクラウドネイティブを普及させたい",
    "speakers": [
      {
        "id": 1348,
        "name": "Yuta Shimada"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/YutaShimada/cndt2022sier-254380026",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1529,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1529/1529.m3u8",
    "title": "〈ログ監視の常識を覆す〉オブザーバビリティ―の最前線！！",
    "abstract": "  ≪これで解決!? 爆発的に増加し複雑化しているログデータ管理の最適解！≫\r\n日々出力される膨大かつ複雑化しているログデータに悩まされていませんか？オブザーバビリティを実現するためにはログの管理・分析は非常に重要な要素です。\r\nログを正しく管理・分析することでアプリケーションからインフラレベルまで、“いつ”　“どこで”　“何が”　起きているのかを把握することができます。\r\n本セッションでは日々増加し複雑さを増していくログデータに対して、Dynatraceによる新しいアプローチを提唱致します！\r\n皆様にとって、オブザーバビリティを実現する第一歩となれば幸いです。",
    "speakers": [
      {
        "id": 1350,
        "name": "Katsuyoshi Sumida"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1530,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1530/1530.m3u8",
    "title": "PostgreSQLとApache Kafkaのマルチクラウド環境をワンクリックで構築",
    "abstract": "DevOpsや開発者が、オープンソースデータベースをパブリッククラウド上に構築した際、運用やセキュリティなど多くの課題に直面します。マネージドオープンソースデータテクノロジーを提供するAivenは、圧倒的に学習コストが低く、高い可用性、マルチクラウド/リージョンへの対応などをパブリッククラウド上で実現します。今回は、Aivenのサービスの中から、PostgreSQL及びApache Kafka に焦点を当て、デモを交えてご説明します。",
    "speakers": [
      {
        "id": 1351,
        "name": "Tomohiro Mitani"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1531,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1531/36/playlist.m3u8",
    "title": "AWS Outpostsで始めるエッジコンピューティング",
    "abstract": "通信遅延やセキュリティ保護要件上の課題を解決するために、端末の近距離にサーバを設置するエッジコンピューティングが提唱されています。しかし、オンプレミス環境にセキュアかつ適切にスケールするコンピュート・ストレージ環境の構築・運用を行うのは困難が伴います。この課題を、オンプレミスでAWSサービスを実行可能な「AWS Outposts」によって解決し、エッジコンピューティングを実現する様々なユースケースについて発表します。",
    "speakers": [
      {
        "id": 1354,
        "name": "Sotetsu Suzugamine"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1532,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1532/23/playlist.m3u8",
    "title": "ArgoCDとGitHub Actions Self Hosted Runnerを使ってリリース時間を1/4にした話",
    "abstract": "リリースフローを改善して、本番で最大30分かかっていたリリース時間を8分程度(image build時間含)にまで短縮しました。今回の改善のために導入した、ArgoCD、GitHub Actions、Github Actions Self Hosted Runnerをどのように利用しているのか、また旧リリースフローからの新フローへの移行までのステップや、移行後の開発メンバーからの所感などをお伝えします。",
    "speakers": [
      {
        "id": 1355,
        "name": "Ryo Sakamoto"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1533,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1533/20/playlist.m3u8",
    "title": "KubernetesとTerraformのセキュリティ/ガバナンス向上委員会 with OPA",
    "abstract": "Kubernetesのセキュリティを固める上で重要な要素のひとつとして「意図していないコンテナを起動させない」というものがありますが、ChatworkではGatekeeperを利用しその要件を実現しています。また、同じOPAの仕組みを他にも利用できないか、ということでterraformの構文チェッカーとしても利用を開始しました。OPAを利用してよかったポイントなどをお伝えします。",
    "speakers": [
      {
        "id": 1356,
        "name": "Keisuke Furuya"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/saramune/gabanansuxiang-shang-wei-yuan-hui-with-opa",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1534,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1534/39/playlist.m3u8",
    "title": "The One CD for All with GitOps",
    "abstract": "サイバーエージェントでは100を超える連結子会社が存在し、多数のプロダクト開発が独立して存在しています。プロダクトごとに技術選定ができるのは良いことですが、組織全体から見るとデリバリープロセスの一貫性・標準化も重要です。また、比較的大きな組織では複数アプリケーション(Kubernetes, Cloud Run, Terraform, ECS...)を利用していることも多々あると思います。そういった環境下で「PipeCD」がどのように問題を解決し単一なデリバリープロセスを実現するかについて紹介したいと思います。",
    "speakers": [
      {
        "id": 1357,
        "name": "Kenta Nanao"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1536,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1536/1536.m3u8",
    "title": "はじめよう Kubernetes PersistentVolume のバックアップ",
    "abstract": "Kubernetes上でPersistentVolume(永続ボリューム)を使い、ステートフルアプリケーションを実行する事例も徐々に増えてきました。\r\nそのような中、皆さん、PersistentVolumeに格納したデータのバックアップは取っているでしょうか。\r\n障害が発生しないシステムはありません。ソフトウェアやハードウェアのバグだけででなく、災害などでデータセンター全体がダウンすることもあります。システムがダウンしてもデータを失わないようにするためは、定期的なバックアップを行うことが重要です。\r\nそこで、本セッションではKubernetesのPersistentVolumeのバックアップについて、設計の考え方から手順例について紹介します。",
    "speakers": [
      {
        "id": 1359,
        "name": "Yukinori Sakashita"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1537,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1537/34/playlist.m3u8",
    "title": "SLO策定までの道とChaosEngineeringを使った最適解の見つけ方",
    "abstract": "みなさんはSLOのターゲットをどのように決めていますか？Chatworkでは今回SLI/SLOの見直しを行いました。これまでは、現状の値をもとになんとなくターゲットを設定していましたが、今回は、ChaosEngineeringを用いてサービスレベルを実際に確認し、SLOのターゲットを模索してみました。その過程と方法をお話します。",
    "speakers": [
      {
        "id": 1360,
        "name": "Shinya Sasaki"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/taishin/slo-chaosengineering",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1539,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1539/1539.m3u8",
    "title": "SASTからIaCまで、クラウド時代のDevSecOpsはSnykにおまかせ！",
    "abstract": "SnykはSAST（静的解析）、OSSの脆弱性やライセンスチェック、コンテナセキュリティからIaCの設定ミスまで一つのプラットフォームで提供します。クラウド時代のアプリケーションセキュリティに求められるDevSecOpsの実現をお手伝いします。\r\n",
    "speakers": [
      {
        "id": 1353,
        "name": "Masatomo Ito"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:55:00.000+09:00",
    "endTime": "2000-01-01T12:15:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1540,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1540/1540.m3u8",
    "title": "クラウドネイティブエンジニアの育成について実践していること",
    "abstract": "数年前からクラウドネイティブエンジニアの採用が急増しており、皆さんの中にも採用を始められている方がいらっしゃるのではないでしょうか。\r\nしかしながら、募集をして実際に出会えていますか？\r\n転職市場やSNSなどで簡単に出会えるわけでもなく、未/微経験者がぽんっとジョブチェンジできるものでもないと思います。\r\nそれであればと、社内でのクラウドネイティブエンジニア育成を考えられるかもしれません。\r\nただ、育成するにしてもクラウドネイティブ技術の範囲は広く、従来の特化型育成では時間がかかります。\r\n今回は、クラウドネイティブエンジニアを育成するためのアプローチについて、弊社で実践していることを紹介します。",
    "speakers": [
      {
        "id": 1362,
        "name": "Masato Ito"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1541,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1541/1541.m3u8",
    "title": "リアルタイム分析サービスをクラウドネイティブDB (TiDB) で作るとこうなる",
    "abstract": "50億をこえるGitHubのイベントデータを分析するOSS InsightというWebサービスによって、OSSツールの安全性など様々なことが分かります。\r\nこのサービスの裏側で使われている技術のキモであるHTAPデータベースのTiDBの役割と、さらにデータベースサービスTiDB Cloudの裏側についても解説します。",
    "speakers": [
      {
        "id": 1363,
        "name": "Masaki Hayashi"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1542,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1542/1542.m3u8",
    "title": "クラウドネイティブ環境を数時間で作成できる『テクマトリックスNEO』",
    "abstract": "テクマトリックスNEOは、日本にクラウドネイティブのテクノロジーをより早くより多く広めていくためのサービスです。クラウドネイティブ導入の伴走者として、初期教育から導入、運用まで幅広く支援をします。\r\n本セッションではコンテナ化や自動化などといったクラウドネイティブのモダンな技術やSaaSなどのクラウドサービスと連携して、活用することが可能なテクマトリックスNEOについてご紹介します。",
    "speakers": [
      {
        "id": 1364,
        "name": "Kohei Suzuki"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1544,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1544/1544.m3u8",
    "title": "PagerDutyで始めるAIOps − AIと自動化でインシデント対応をモダン化する",
    "abstract": "PagerDutyが提供するAIと自動化機能の特徴は、「誰でも」「すぐに」使えることです。\r\n\r\n本セッションでは、これらの機能を利用して、どのようにインシデントをより早く解決し、対応するエンジニアの負担を軽減できるのかご紹介します。\r\n\r\nまたPagerDutyでは、リアルタイム運用のベストプラクティスを外部に公開しています。インシデント対応をモダン化するために、ご活用いただける情報をご紹介します。",
    "speakers": [
      {
        "id": 1365,
        "name": "Motomu Yamada"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://bit.ly/3Vp0mQN",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1546,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1546/1546.m3u8",
    "title": "Future of CI/CD: testing.next",
    "abstract": "The last decade has seen a relentless push to deliver software faster. Automated testing has emerged as one of the most important technologies for scaling DevOps. So much so that companies are investing enormous time and effort to build end-to-end software delivery pipelines with automated testing built-in. In this keynote, Kohsuke Kawaguchi, creator of Jenkins and co-founder of Launchable shares insights into emerging trends in the testing space. This session will highlight innovations in testing and future approaches that are emerging for those looking to nurture a continuous quality culture.  ",
    "speakers": [
      {
        "id": 1367,
        "name": "Kohsuke Kawaguchi"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:50:00.000+09:00",
    "endTime": "2000-01-01T11:10:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/12p3kY-CCJl1yvokAvnaMQsqkH0S7xndudd72oq651tI/edit?usp=sharing",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1547,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1547/1547.m3u8",
    "title": "サーバレス開発～関連する小さなサービス群を１プロジェクトにまとめた際のCIは？",
    "abstract": "クラウド上で動作するサービスの１つ１つの粒度が小さくなり、いくつかのサービスが連携することで、大きな機能を生み出すケースが増えてきています。\r\n本セッションでは、AWS Lambda開発で複数のLambda関数が1リポジトリ(1プロジェクト)を構成する際に、コードの追加・変更がプロジェクト全体に影響することなく、変更された関数のビルド、テスト、デプロイだけを実行するようなCI/CDの構築方法をCircleCIのダイナミックコンフィグを例にとってご紹介します。\r\n",
    "speakers": [
      {
        "id": 1368,
        "name": "Masahiko Funaki"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:15:00.000+09:00",
    "endTime": "2000-01-01T11:35:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://drive.google.com/file/d/1MRw__oRdH-LkGj57BRdBAYTRGObhrQG8/view?usp=sharing",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1548,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1548/44/playlist.m3u8",
    "title": "KeycloakでFAPIに対応した高セキュリティなAPIを公開する",
    "abstract": "昨今、自社のサービス提供などを目的としたAPIが増えたことにより、それらAPIに対する攻撃の脅威が日に日に増しており、関連する事件や事故を耳にすることも多くなってきました。そんな中でOpenID Foundationが昨年3月に、OAuthやOpenID Connect (OIDC)よりも高いレベルのセキュリティを必要とするあらゆる市場領域のAPIに適用できる、Financial-grade API (FAPI) 1.0の最終版を公開しました。IAMのOSSであるKeycloakは同年6月にいち早くFAPI 1.0をサポートしました。\r\n本セッションでは、FAPIが提供する高いレベルのセキュリティやKeycloakを使ってFAPIを実現する方法について説明します。",
    "speakers": [
      {
        "id": 1369,
        "name": "Yoshiyuki Tabata"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ssuserbeb7c0/keycloakfapiapi",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1549,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1549/1549.m3u8",
    "title": "NGINX Ingress Controllerで実現するKubernetesアプリケーションのセキュリティ対策",
    "abstract": "皆様はKubernetes上で公開するアプリケーションのセキュリティ対策はどのように取られていますでしょうか？\r\nKubernetesのIngressとして広く利用されているNGINX Ingress Controllerですが、WAFの機能をアドオンすることでセキュアにサービス公開を行う事が出来ます。本セッションではデモを交えながらWAFの機能や導入方法をご紹介致します。",
    "speakers": [
      {
        "id": 1370,
        "name": "Junichi Tanabe"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1550,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1550/1550.m3u8",
    "title": "ScalarDB: Cloud-native Transaction Manager",
    "abstract": "クラウドネイティブなトランザクションマネージャであるScalarDBでは、マイクロサービスにおいてトランザクションを実現する機構や、マイクロサービスごとのトランザクションの状態(Read Set, Write Set等)をスケーラブルに管理する機構等を提供している。本セッションでは、それらの機構を概観しながら、マイクロサービスでのトランザクションにおける課題や勘所を説明する。",
    "speakers": [
      {
        "id": 1371,
        "name": "Toshihiro Suzuki"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://scalar-labs.app.box.com/v/CloudNativeDaysTokyo2022/file/1077630754603",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1551,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1551/1551.m3u8",
    "title": "GitLab流コラボレーションスタイル 〜DevOpsプラットフォームとSSOTで実現する「エンジニアのハッピーライフ」〜",
    "abstract": "ソフトウェア開発は、多くの関係者との長期に渡る共同作業。そのためコラボレーションは非常に重要です。一方コミュニケーション手段の多様化は、情報の散在を招き、情報の構造化を妨げ、非文書化情報は決定の経緯を不明確にします。また、効率化を目的とした様々なツールの導入は、作業同士の関連性を曖昧にし、メンバー間の共通認識を阻害します。こうした課題を解決するためには、「SSOTの実現」「議論の可視化」「シングルプラットフォームへの集約」が重要です。本講演では、いかにしてそれらをGitLabで実現するのかをデモを交えてお伝えします。",
    "speakers": [
      {
        "id": 1372,
        "name": "Toshitaka Ito/Naoharu Sasaki"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1553,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1553/1553.m3u8",
    "title": "Self-Hosted Runners & Actions Runner Controller (ARC)を運用すること",
    "abstract": "GitHub Actionsの実行環境の一つであるSelf-Hosted Runnersを1年以上運用してたまった知見とOSSとして公開されているActions Runner Controllerのアーキテクチャや導入方法について話します。Github actionsやCircleCIの利用者がSelf-Hosted Runnersを検討するための講演です。",
    "speakers": [
      {
        "id": 1374,
        "name": "Akito Fujihara"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1555,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1555/1555.m3u8",
    "title": "旅するCSO 鈴木いっぺいの「KubeCon現地リキャップ」",
    "abstract": "アメリカ、ミシガンで2022/10/24-28に行われるTHE KUBECON + CLOUDNATIVECON の現地レポートを踏まえ、要点をまとめてお届けいたします。",
    "speakers": [
      {
        "id": 1352,
        "name": "Ippei Suzuki"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1556,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1556/1556.m3u8",
    "title": "k8s Operatorで運用負担減&ハイブリッドクラウドのコスト最適化をした話",
    "abstract": "GMOペパボが提供する多くのサービスはハイブリッドクラウドで動作しています。\r\n プライベートクラウドは安価であるメリットがある一方でスケーリングに制約があり、それを補うためにパブリッククラウドへリクエストをオフロードする運用を行っていました。\r\n これまで職人技で調整していたパブリッククラウドへのリクエストのオフロード操作をk8s operatorを開発し自動で行うようにしました。\r\n この経験から得られたoperatorで運用自動化を行うメリットについて解説します。",
    "speakers": [
      {
        "id": 1376,
        "name": "Chiaki Sugawara"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1557,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1557/1557.m3u8",
    "title": "実例から学ぶ Kubernetes Custom Controller のステータス管理",
    "abstract": "Kubernetes の強力な機能のひとつに、Custom Resource と Controller による機能の拡張が挙げられます。しかし、その実装は容易ではありません。実装が困難なポイントのひとつに、Controller が処理を実施する際のステータスの適切な管理があります。この講演では、講演者が実装した Controller や有名 OSS の実装をもとに、複数のステータス管理手法の実装とそれぞれの特徴について解説します。まだ Controller を実装したことがない方でも、実装のイメージが掴める内容とする予定です。",
    "speakers": [
      {
        "id": 1377,
        "name": "Takuya Takahashi"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/takutakahashi/shi-li-karaxue-bu-kubernetes-custom-controller-nozhuang-tai-guan-li",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1558,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1558/1558.m3u8",
    "title": "しきい値監視からの卒業！ Prometheus による機械学習を用いた異常検知アラートの実装",
    "abstract": "システムの安定運用において、メトリクスの収集とアラートの設定は欠かせません。今までのプラクティスでは、人間が予め定めた一定の条件において、しきい値を超える、あるいは下回る場合にアラートを発泡するしきい値監視が一般的でした。しかし近年、監視ツールを提供するベンダーでは、機械学習による時系列データ予測モデルを用いた異常検知アラートが提供されています。同様の手法を、OSS である Prometheus のメトリクスを用いて実装します。",
    "speakers": [
      {
        "id": 1377,
        "name": "Takuya Takahashi"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:40:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/takutakahashi/prometheus-anomaly-detection",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1559,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1559/49/playlist.m3u8",
    "title": "マイクロサービスとk8sにおける責任境界設計とリソース管理",
    "abstract": "DMMプラットフォームではマイクロサービスアーキテクチャを採用しており、インフラ基盤として120名のエンジニアにマルチテナント型のk8sクラスターを提供しています。エンジニアの数やマイクロサービスの数が多い場合、AWS,GCP上のリソースからk8sのnamespaceまで、ありとあらゆるリソースを適切に管理する必要があります。本講演では開発チームとSREチームの責任境界設計を含めたDMMプラットフォームにおけるリソース管理の取り組みを紹介します。",
    "speakers": [
      {
        "id": 1327,
        "name": "pospome"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/pospome/maikurosabisutok8sniokeruze-ren-jing-jie-she-ji-torisosuguan-li",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1560,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1560/1560.m3u8",
    "title": "ペパボのSREが生産性の向上を目指しCloud Nativeなチーム作り実践した話",
    "abstract": "このセッションではチーム開発を行っている方を対象に、GMOペパボのSREがCNCFが定義しているCloud Nativeから得たノウハウをチーム運用に適用し生産性の向上を目指した話をします。「Cloud Nativeなチームとは」から始まり、「属人化や暗黙知前提の開発、スケールのしにくさ」といった実際に我々のチームで発生した課題を回復性、管理力、および可観測性と言った視点からのアプローチで分析し、具体的にどのように解決していったのかを明日から使えるTipsとしてご紹介します。",
    "speakers": [
      {
        "id": 1378,
        "name": "Ryuichi Watanabe"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T13:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1561,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1561/21/playlist.m3u8",
    "title": "金融システムにおけるクラウドネイティブなアーキテクチャ設計とその構築",
    "abstract": "高換金性情報を取り扱う金融システムでは高度なセキュリティが求められており、クラウド上にシステムを構築することが非常にシビアになっています。そのような開発現場においてどのような観点でアーキテクチャ設計し構築しているかを、下記の項目をメインに取り扱いながらご紹介させていただきます。\r\n\r\n・全体のアーキテクチャ設計について\r\n・クラウドベンダの選定理由\r\n・ハイブリッドクラウドの構成",
    "speakers": [
      {
        "id": 1379,
        "name": "Tetsuya Nakamura"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:50:00.000+09:00",
    "endTime": "2000-01-01T11:10:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tetsun/jin-rong-sisutemuniokerukuraudoneiteibunaakitekutiyashe-ji-tosonogou-zhu",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1563,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1563/25/playlist.m3u8",
    "title": "Kubernetesのマルチリージョン化ってどうやるの！？教えて楽天のエンジニアさん！",
    "abstract": "現在私たちが運用しているサービスは最大でもマルチデータセンターレベルの冗長化となっており、リージョン障害が発生した場合復旧に2時間もの時間を要しておりました。また、Kubernetesのupgrade作業も実際にリクエストが来ている状態でnodeの入れ替えを行なっており、リスキーな作業となっていました。\r\nそこで私たちは下記を目的にKubernetesクラスタのマルチリージョン化を行いました。\r\n・リージョン障害時30分以内に復旧できること\r\n・Kubernetesのupgradeをリクエストが来ない状態で安全に行えること\r\n\r\n本公演では、Kubernetesクラスタのマルチリージョン化を行なった経験を元に下記内容をお話します。\r\n・Kubernetesのマルチリージョン構成をどのように実現したか\r\n・Kubernetesクラスタをどのタイミングでどのように切り替えるべきか\r\n・Kubernetesをマルチリージョン化したことによって、開発者、運用者にどのようなメリットがもたらされたか\r\n",
    "speakers": [
      {
        "id": 1382,
        "name": "Takumi Sato"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1565,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1565/1565.m3u8",
    "title": "【既存アプリをコンテナ化したいのじゃが】-Kubernetesへリフトする開発者が乗り越える壁-",
    "abstract": "クラウドネイティブを実現すべく、いざ既存アプリのコンテナ化を試みると\r\n「コンテナ化にはマイクロサービスが欠かせません!!」\r\nと提案されたことはないでしょうか？\r\n一方で目の前のアプリをマイクロサービス化する時間や能力、そしてそのコストは持ち合わせていないという流れ。それでもKubernetesに乗せたい開発者が失敗しない、最低限抑えるべきコンテナ化のお作法について事例を交えて紹介します。",
    "speakers": [
      {
        "id": 1383,
        "name": "Shingo Kitayama"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1566,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1566/32/playlist.m3u8",
    "title": "Cloud Native Kafka - 分散データ基盤がクラウドネイティブを目指すということ",
    "abstract": "Apache Kafkaは12年前にLinkedIn内で開発され、その後オープンソース化された分散データ基盤です。当初はLinkedInを始めとした超大規模ユーザーの意向が色濃く反映された技術で、ベアメタルでの稼働が前提でした。しかしKafkaの成長と利用の広がりに伴い、Kafka自身がよりクラウドネイティブに近づく必要に迫られました。\r\n\r\n本セッションでは、今も進化を続けるApahce Kafkaの構造的な仕組み、そしてこれまでどの様な進化を遂げて今に至るのかをインフラ的な観点からお話しします。中でもKafkaの構成上必要なZookeeperへの依存をどの様に断ち切ったのか、KIP-500と呼ばれる3年に渡る取り組みについて詳しくご紹介します。",
    "speakers": [
      {
        "id": 1325,
        "name": "Shinichi Hashitani"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hashitokyo/cloud-native-kafka-d5d814ab-c5b0-4d89-b215-93410e17650a",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1567,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1567/1567.m3u8",
    "title": "GKE の Spot VM / Preemptible VM 利用者を救う！インフラコストを削減しながら可用性を維持できるソフトウェア『Panope』",
    "abstract": "GCP には標準 VM の料金よりもはるかに低価格で利用できる Spot VM / Preemptible VM というものがあります。\r\nこれらの利用により金銭的コストを大きく抑えることが出来ますが、予期せぬタイミングで VM がシャットダウンされてしまうというデメリットも付きまといます。\r\n\r\n今回は、GKE でこれらの VM を利用しながらも可用性を維持できるように Kubernetes 上のリソースを自動でコントロールするソフトウェア『Panope』を作成・運用する上で得られた知見や Tips をご紹介します。\r\n\r\n特に GKE のインフラコストを抑えたい方・GKE の Spot VM / Preemptible VM でサービスを運用していて運用に大変さを感じている方は必見です！",
    "speakers": [
      {
        "id": 1384,
        "name": "Kohei Yamamoto"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1568,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1568/24/playlist.m3u8",
    "title": "明日から始められるKyvernoを用いたポリシー制御",
    "abstract": "セキュリティに関する関心は日に日に増していく中、よくポリシーで制御をしましょうということを耳にするかと思います。\r\nそこで調べてみると、恐らくOPA(Open Policy Agent)がヒットし、Regoという独自の言語にハードルを感じてしまう方が多いかと思います。\r\n\r\nまずは何かでポリシー制御を試してみたいという方の足がかりとして、KubernetesのManifestベースでポリシーを適用することができるKyvernoというツールを説明させていただければと思っています。",
    "speakers": [
      {
        "id": 1385,
        "name": "Ryotaro Uwatsu"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ry/cndt2022-kyverno",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1569,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1569/48/playlist.m3u8",
    "title": "バンダイナムコスタジオにおけるクラウドネイティブなゲーム開発スタジオの挑戦",
    "abstract": "バンダイナムコスタジオでは2020年度に本格的なリモートワーク開発体制が始まって以来、クラウドネイティブ化した開発環境の導入を推進してきました。\r\nこの取り組みは2021年度まではCI/CDパイプラインをクラウド化する程度にとどまっていましたが、2022年度からはゲーム開発にかかわるすべての業務に対応できる、クラウドネイティブなゲーム開発スタジオの実現を目指しています。最終的な目標は、Unity EditorやUnreal Editor、各種DCCツールが実用になるGPU搭載仮想マシンを備えたMicrosoft AzureのDaaS(Desktop as a Service)インフラを提供し、ゲーム制作のパイプラインすべてをクラウドで完結できるようにすることです。\r\n本講演では現在進行中のPoCであるBandai Namco DX Cloud Studiosを紹介し、そのサービスの核となるAzure Virtual Desktop、リモートワークを支えるVPNとネットワーク設計、大規模な運用を担うIaCとDevOpsなど、様々なクラウドネイティブインフラの活用について解説します。またこのようなDX(デジタル変革)プロジェクトを推進する会社・組織の体制についてもお話します。",
    "speakers": [
      {
        "id": 1386,
        "name": "Takeshi Yaegashi"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yaegashi/bandainamukosutazioniokerukuraudoneiteibunagemukai-fa-sutazionotiao-zhan",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1570,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1570/1570.m3u8",
    "title": "入門: Knative Serving + Kubernetes Gateway APIで構築するクラウドネイティブな汎用サーバーレス環境",
    "abstract": "Knative Servingを利用するとサーバーレス環境をKubernetesクラスタに構築できます。\r\nKnative ServingではIstio、Contour、Kubernetes Gateway APIのいずれかと連携する必要があります。\r\n本講演では以下を紹介します。\r\n\r\n* Knative Servingの機能\r\n* Knative ServingとDeploymentを比較した際のKnative Servingの利点\r\n* Kubernetes Gateway API (Contour) との連携方法",
    "speakers": [
      {
        "id": 1387,
        "name": "Okina Kahiro"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:40:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/1kJuWXRbn1GZmZGSd-jqX0p4KQ7HypAvi2RUKKUOry7c/edit?usp=sharing",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1571,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1571/1571.m3u8",
    "title": "実践！OpenTelemetry と OSS を使った Observability 基盤の構築",
    "abstract": "Kubernetesを基盤としたMSAを採用するシステムが増えている今、Observability（可観測性）は依然として重要概念の一つです。\r\nそれでは、可観測性があるとはどのような状態でしょうか？\r\n大事な要素の一つに、「ログ・トレース・メトリクスなどのテレメトリー情報が相互に紐付いていること」があります。\r\n本セッションでは、OpenTelemetry と、Grafana や Prometheus などの OSS ツールを使った Observability 基盤をデモを交えて紹介します。",
    "speakers": [
      {
        "id": 1388,
        "name": "Keisuke Sakasai"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/k6s4i53rx/cndt2022-shi-jian-opentelemetry-to-oss-woshi-tuta-observability-ji-pan-nogou-zhu",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1573,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1573/29/playlist.m3u8",
    "title": "分散合意を用いたクラウドネイティブトランザクション Paxos Commit",
    "abstract": "本セッションでは、ACID属性を完全に担保し、CAP定理のいずれの属性も達成できるマイクロサービスの分散トランザクションの決着技法を説明します。\r\n\r\n具体的にはkubernetes 環境にてブロックチェインの基礎技術である「分散合意」を用いることで、不整合の原因である故障に耐性をもたせ、冗長性・可用性・ノンブロックを達成したトランザクション決着技術のプラクティスを紹介します。",
    "speakers": [
      {
        "id": 1389,
        "name": "JUMPEI NISHITANI"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1574,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1574/26/playlist.m3u8",
    "title": "なぜ貴方のモダナイゼーションは評価されないのか ～傾向と対策～",
    "abstract": "大規模ウォーターフォール開発の現場においても、クラウドリフト＆シフトによるモダナイゼーションで生産性向上実現を求められています。2025年の崖を目前に控えエンジニアの確保が今後より一層困難になることも見据えモダナイゼーションは「待ったなし」の情勢です。その一方で現場においては長年ぬるま湯に浸かり過ぎて「茹でガエル」に陥りモダナイゼーションを拒んだり、トップダウンで推進しようするも混乱を招き失敗の烙印を押されることも少なくありません。本セッションではNTTデータで大規模トラディショナルシステムにおける開発環境のモダナイゼーションを推進してきた経験を基に、失敗しないモダナイゼーション推進の勘所を紹介していきます。",
    "speakers": [
      {
        "id": 1390,
        "name": "Ryo Sugahara"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1575,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1575/27/playlist.m3u8",
    "title": "たまにはオンプレもいいぞ？ GKE と Armadillo IoT で実現するハイブリッドクラウド",
    "abstract": "Google Kubernetes Engineを中核にArmadillo IoT GWというIoT製品と様々なネットワーク技術を組み合わせた上でのハイブリッドクラウドの実例をご紹介します。弊社ビットキーにおける大規模ビル制御プロダクトにおけるリアーキテクチャに際し、完全なオンプレシステムからハイブリッドクラウドへの移行を行っています。設計の勘所、機能面のメリデメ、運用コストの削減など全体的にお話します。",
    "speakers": [
      {
        "id": 1391,
        "name": "Ryo Sasaki"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1576,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1576/1576.m3u8",
    "title": "いにしえのエンプラ情シスが内製化ではなくアーキテクトの「手の内化」を推進した話",
    "abstract": "事業会社におけるシステム開発の「内製化」の必要性が叫ばれて久しいですが、私が所属する情報システム部門でもまだまだSIer依存が大きいなか、クラウドネイティブな新技術を活用してDXビジネスを推進するためには社員による技術掌握が絶対に必要だと感じていました。\r\nただし限られた人的リソースで完全な内製化を目指すのは非現実的なので、内製を経験したうえで上流工程にフォーカスする「手の内化」を試みました。\r\nエンタープライズな事業会社でクラウド・コンテナ・IaCなど新技術をいかに使いこなすべきか、お悩みの方に事例を共有できればと思います。",
    "speakers": [
      {
        "id": 1392,
        "name": "Minoru Onda"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/minorun365/inisienoenpuraqing-sisuganei-zhi-hua-dehanakuakitekutono-shou-nonei-hua-wotui-jin-sitahua",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1579,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1579/35/playlist.m3u8",
    "title": "Kubernetes Admission Webhook Deep Dive",
    "abstract": "サイボウズではこれまで数多くのKubernetes Admission Webhookを開発してきました。\r\n\r\n本セッションではこれまでの開発経験を元に、Kubernetes Admission Webhookの基本、controller-runtimeを利用した実装方法、実装する際にハマりがちな落とし穴、さらにはさまざまなユースケースで役に立つTipsを紹介したいと思います。",
    "speakers": [
      {
        "id": 1395,
        "name": "Akihiro Ikezoe"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1580,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1580/30/playlist.m3u8",
    "title": "SLO策定のIaC化によるSREの加速",
    "abstract": "クラウドネイティブなシステムとSREによる運用は相性が高く、その中でも特に重要なのがSLOの決定とその反映です。本セッションではOpenSLOやSLO GeneratorといったSLOのIaC化を支援するツールについてその必要性の背景からご紹介し、日々の運用に活用する方法を具体例を交えながらご紹介します。本セッションによって、SLOの定義からアラートへの反映まで一貫した管理の手法について深い理解が得られるでしょう。",
    "speakers": [
      {
        "id": 1396,
        "name": "Yoshi Yamaguchi"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1582,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1582/33/playlist.m3u8",
    "title": "同志諸君よ、ゼロトラストを撃て",
    "abstract": "O’Reilly　Japanから翻訳されたゼロトラスト・ネットワークが発刊され３年が経過しました。当初は、まさしく本カンファレンスのHPが言及するように、「物理的・時間的な距離を超えた」環境を想定したセキュリティ上の考え方でした。しかし、皆様も３年間のインシデントなどからお気づきの通り、ゼロトラストの適用は従来のセキュリティ・レベルを単純に強化するものではありません。昨今の事例を振り返りつつ、充足させていかねばならないポイントを技術事例も含めお話いたします",
    "speakers": [
      {
        "id": 1398,
        "name": "Kengo Suzuki"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:25:00.000+09:00",
    "endTime": "2000-01-01T10:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1589,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1589/42/playlist.m3u8",
    "title": "DevOps実装初期フェーズの組織がTerraformとecspressoで求めるAmazon ECS CI/CDの最適解",
    "abstract": "DevOps実現のためにSREを実践し始めたフェーズの組織において組織のサイロ化の削減、オーナーシップを根付かせることはそれぞれDevOpsで実現したい指標の一つかと思います。\r\n\r\n弊社トラストバンクも組織のサイロ化、オーナーシップの不在などの課題に取り組み、改善すべく開発組織へのDevOps実装とSREの実践を通して様々な取り組みを行ってきました。\r\n\r\n本セッションではそのようなDevOps実装初期フェーズの組織において、Infrastructure as Codeをサイロ化の削減を期待したソリューションとして用いた場合に、DeveloperへInfrastructure as Codeの実践を促すためにどのような責任境界設計を行えば良いのか、また、Infrastructure as Codeを通して組織のサイロ化の削減およびオーナーシップを根付かせるためにSREとしてどのような活動をしてきたのか、具体的な事例としてAmazon ECS環境におけるCI/CDの実装にフォーカスして紹介させていただきます。",
    "speakers": [
      {
        "id": 1404,
        "name": "Toshiyuki Kasai"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tocyuki/aws-ecs-cicd-with-terraform-and-ecspresso",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1590,
    "conferenceId": 7,
    "trackId": 34,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1590/31/playlist.m3u8",
    "title": "kubefork - 自分専用のクラスタを所有しているような開発体験",
    "abstract": "マイクロサービス開発では、変更を素早く試せる、依存関係を意識しない、他人の変更の影響を受けないという３つの体験が重要だと我々は考えています。例えばラップトップで開発する場合は、変更を素早く試すことができ、他人の変更の影響を受けませんが、開発したいマイクロサービスの依存関係を意識する必要があります。\r\n我々は、３つの体験を同時に達成するために、我々は istio のリクエストルーティングの仕組みを使って自分専用のクラスタを所有するような開発体験を実現しました。この方法は、kubefork と名付けられています。\r\n\r\n我々の組織では、kubefork を１年以上運用してきました。この講演では、運用していく中で定まってきた２つのユースケースと、今回 OSS として公開した kubefork を実現するカスタムコントローラーについて説明します。",
    "speakers": [
      {
        "id": 1405,
        "name": "Takamichi Omori"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/onsd/kubefork-development-experience-like-owning-your-own-cluster",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1591,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1591/47/playlist.m3u8",
    "title": "謎は全て解けた！ 安楽椅子探偵に捧げる AWS ネットワーク分析入門",
    "abstract": "その不可解な事件はクラウドのネットワーク上で発生した…。疎通できるはずの通信が何故か繋がらなかったり、逆にセキュリティ的に危険な通信がうっかり繋がってしまったり。複雑なネットワーク設定に立ち向かう上で、「実際に ping を打つ」以上に網羅的で体系的な分析は可能でしょうか？ 本講演では、SMT ソルバを用いて、実際の通信を行うことなしにネットワーク上の問題を「推理」させる手法について解説します。",
    "speakers": [
      {
        "id": 1406,
        "name": "Cheshire Cat"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ytaka23/cloudnative-days-tokyo-2022",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1592,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1592/41/playlist.m3u8",
    "title": "クラウドコストを最適化せよ！マルチクラウド時代に届けるクラウド活用 2.0",
    "abstract": "デジタルトランスフォーメーション(DX)推進にクラウドの活用は欠かせません。\r\nクラウドを使ってみるフェーズから、クラウドごとの特色あるサービスを選択し、複数のクラウドを組み合わせたマルチクラウド、オンプレミスと混在させたハイブリットクラウドの活用といったより高度なクラウド活用のフェーズが主流になっています。\r\n複数のクラウドを高度に連携することで、効率性、スケーラビリティ、生産性は格段に上がるが、その一方で自社の抱えるITインフラの複雑化し、クラウド人材不足によってクラウドコストの増大は大きな課題となっています。\r\n\r\n本セッションでは、クラウドごとのコスト最適化方法を学びながら、マルチクラウド時代に必要とされるコスト最適化の方法論を理解し、Kubernetes環境をはじめとしたクラウドリソースを最適化に向けた実践について説明します。\r\nまた、クラウド活用を効率化する最新サービス(CloudNatix)を活用することで、より簡単にクラウド活用をレベルアップし、開発者の負担を低減しつつ、横断的に組織に適用できるスケーラブルなコスト最適化体験についてもご紹介致します。\r\n\r\nキーワード：\r\nコスト最適化/FinOps/FinKube/マルチクラウド横断/組織横断的最適化",
    "speakers": [
      {
        "id": 1407,
        "name": "Tomohisa Koyanagi"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ssuser9a674b/20-254862463",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1594,
    "conferenceId": 7,
    "trackId": 36,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1594/1594.m3u8",
    "title": "100%クラウドベースのデジタル体験基盤(DXP)開発フロー",
    "abstract": "開発者がより良いデジタル体験を構築するには、アプリケーションを継続的に改善するための土壌が必要不可欠です。アクイアではクラウドネイティブに設計されたスケーラブルなCMSホスティング環境に加え、昨今の開発スタイルに適した開発ツールを含めて提供することで、開発者がやるべきことに注力できる環境を提供しています。\r\n本セッションでは、デジタル体験プラットフォーム（DXP）の開発ワークフローを100％クラウドベースでシームレスに完結するソリューションをご紹介します。 ",
    "speakers": [
      {
        "id": 1409,
        "name": "Shumpei Kishi"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1596,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1596/1596.m3u8",
    "title": "eBPF Superpowers",
    "abstract": "eBPF has been called “Superpowers for Linux”, and in this talk Tracy discusses why it’s a foundational technology for a new generation of cloud native networking, security and observability tools. If you have heard the term, but don't know what it is and how to use it then this talk is for you? The questions this talk answers include:\r\n\r\n1. What is eBPF?\r\n2. How does eBPF enable a new generation of cloud native tools?\r\n3. What are those tools?\r\n4. What can we do with eBPF in the cloud today and tomorrow?\r\n\r\nEven if you’re not a Linux kernel aficionado you’ll leave this talk with an understanding of how eBPF enables high-performance tools that will help you connect, manage and secure applications in the cloud.",
    "speakers": [
      {
        "id": 1411,
        "name": "Tracy P Holmes"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:00:00.000+09:00",
    "endTime": "2000-01-01T10:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1597,
    "conferenceId": 7,
    "trackId": 33,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1597/1597.m3u8",
    "title": "【対談】HashiCorp×TED -インフラのクラウドシフトを促進する最新機能とクラウドネイティブなマルチベンダー連携事例-",
    "abstract": "まだ日本では発表していない 最新 の””HashiCorp社の製品アップデート情報やHashiCorp社の複数の製品を使いマルチベンダーで構成されたクラウドネイティブ環境における自動化のユースケースをご紹介します。また、お客様のインフラのクラウドシフトやクラウドネイティブ化を支援してきた二社ならではの、実情からみえてくる今後の課題と対策について考察します。マルチクラウド・ハイブリッドクラウド環境の運用に従事する方々が抱える現実的な課題を解決するためのヒントがここにあるはずです。",
    "speakers": [
      {
        "id": 1412,
        "name": "Shogo Katsurada / Yossy Sakai"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1598,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1598/1598.m3u8",
    "title": "NTTデータ流コスト効率術 / モノリス vs マイクロサービス vs MuleSoft",
    "abstract": "クラウドでしか実現できない特徴としてオンデマンドのリソース確保によるコスト効率化があります。コスト観点で最適化するアーキテクチャの実践についてのハマりどころと対処方法についてお話しします。\r\n/\r\nNTTデータでは近年、iPaaSの活用に取り組んでいます。\r\niPaaSの一つであるMuleSoftは、その上で実装したアプリケーションはマイクロサービスで動作しています。\r\n本セッションでは一般的なマイクロサービスの利点を踏まえ、MuleSoft視点でその利点をご紹介します。\r\n",
    "speakers": [
      {
        "id": 1413,
        "name": "Misago Yujiro / Kubota Shun"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1599,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1599/1599.m3u8",
    "title": "CI/CDの次はCO-継続した最適化 !?  クラウドネイティブなSREのITリソース管理手法とは",
    "abstract": "せっかくマルチクラウド/K8s環境を構築して、メリットがある環境なはずなのに、、課題がありサービス品質やコスト管理をあきらめていませんか？\r\n\r\nCNCFでも\"Observability and Analysis-Continuous Optimization\"、CI/CDの次サイクル管理手法として注目されている継続した最適化を実現する、リソース管理ベストプラクティスツールをご紹介します。",
    "speakers": [
      {
        "id": 1358,
        "name": "Shuichi Sasahara / Masanori Kawano"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1600,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1600/1600.m3u8",
    "title": "Kubernetes クラスタ管理からの開放 〜 アプリケーション開発を加速",
    "abstract": "コンテナ化のメリットとして、アプリケーションの高い柔軟性や市場投入の迅速化が挙げられます。一方で、複雑化するコンテナ運用、Kubernetesのスキルを持つ人材の採用・維持が困難といった挑戦もあります。その様な中、Kubernetesの運用はベストプラクティスのノウハウを持つ人にアウトソースし、ビジネス開発にフォーカスするという「マネージド・クラウドサービス」という選択肢のメリットや、ハイブリッド、マルチクラウド・コンピューティングといった環境への適用についてご紹介させて頂きます。",
    "speakers": [
      {
        "id": 1414,
        "name": "Osamu Mizoguchi"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:35:00.000+09:00",
    "endTime": "2000-01-01T11:55:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "https://www.dropbox.com/s/4mjxklcmk4xilr7/Kubernetes%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%BF%E7%AE%A1%E7%90%86%E3%81%8B%E3%82%89%E3%81%AE%E8%A7%A3%E6%94%BE.pdf?dl=0",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1601,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2022/talks/1601/18/playlist.m3u8",
    "title": "デジタル庁クラウドチームにおけるクラウドスマートを前提としたクラウドネイティブの取り組み",
    "abstract": "デジタル庁のクラウドチームでは、政府共通のクラウドサービスの利用環境として「ガバメントクラウド」を整備しています。「ガバメントクラウド」は、クラウドサービスの利点を最大限に活用することで、迅速、柔軟、かつセキュアでコスト効率の高いシステムを構築可能とし、利用者にとって利便性の高いサービスをいち早く提供し改善してくことを目指しています。そのためには、クラウドを賢く適切に利用する（クラウドスマート）ことが必須であり、「SaaSの活用」「VMよりコンテナ、サーバレスの利用」「イベントドリブン」などのモダンでクラウドネイティブな考え方を積極的に採用する必要があります。またその結果として、ガバメントクラウド上のシステムがきちんとユーザへ価値を届けられているかということを定量的に計測・判断し、改善し続けるための可視化も重要なポイントと考えています。このセッションでは、政府システム全体をクラウドスマートにしていくためにどのような取り組みを行っているかをご紹介いたします。",
    "speakers": [
      {
        "id": 1415,
        "name": "Akihiro Yagasaki"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:00:00.000+09:00",
    "endTime": "2000-01-01T10:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1602,
    "conferenceId": 7,
    "trackId": 32,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1602/1602.m3u8",
    "title": "フロントエンド開発に集中するためのクラウドネイティブ環境を使おう",
    "abstract": "今や Web システムのフロントエンドといえば SPA, SSR, SSG, ISR などのアーキテクチャをサポートするフレームワークを使用するのが当たり前になってきました。本セッションでは、フロントエンド開発をローカルからクラウドまでシームレスな開発体験を可能とする方法を Microsoft Azure のリソースである Azure Static Web Apps とその CLI と共にご紹介します。",
    "speakers": [
      {
        "id": 1417,
        "name": "Takashi Uesaka"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1606,
    "conferenceId": 7,
    "trackId": 35,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1606/1606.m3u8",
    "title": "AWS/Azure/GCP環境とKubernetesのバックアップならVeeamです",
    "abstract": "既にパブリッククラウドをご利用の方やこれからご検討をされたい方々へ\r\n昨今のクラウドの利用状況やそのバックアップについてのお話をいたします。\r\nまた、弊社製品であるVeeam Backup for Public Cloudの3製品の最新版とKubernetes環境のバックアップが登場しましたので、追加された新機能とともに製品の特長をご紹介をいたします。\r\n本セッションから製品のコンセプトや情報をお持ち帰りいただいて是非活用をご検討ください。\r\n",
    "speakers": [
      {
        "id": 1420,
        "name": "Tomokazu Murata"
      }
    ],
    "dayId": 19,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 19,
    "conferenceDayDate": "2022-11-22",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1607,
    "conferenceId": 7,
    "trackId": 37,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2022/talks/1607/1607.m3u8",
    "title": "フロントエンド・オブザーバビリティ",
    "abstract": "クラウドネイティブアーキテクチャにおいてオブザーバビリティが注目を集めています。KubernetesモニタリングやMicroservice APMなどがよく想像されるものですが、そこには重要なパーツが欠けています。それがフロントエンドモニタリングです。オブザーバビリティに組み込まれたモダンなフロントエンドモニタリングがEnd to Endの分析にどのように役に立つか、デモも交えてご紹介します。",
    "speakers": [
      {
        "id": 1423,
        "name": "Satoshi Yamamura"
      }
    ],
    "dayId": 18,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "後日",
    "conferenceDayId": 18,
    "conferenceDayDate": "2022-11-21",
    "presentationMethod": "事前収録"
  }
]
