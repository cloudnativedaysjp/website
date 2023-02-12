import type { Talk } from "../types/talk";

export const CNDO2021Talks: Talk[] = [
  {
    "id": 121,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521012687",
    "title": "Container/k8sのセキュリティ対策をOSSツールベースで改めて考える",
    "abstract": "Container/k8s生活をパブリッククラウドのマネージドサービス(AWS ECS、EKSなど)で始める人達が多い昨今、スモールスタートな世界でセキュリティ対策を考えた場合、多機能で包括的なセキュリティ有償製品は導入コストの敷居が高い。\r\nとはいえ、パブリッククラウドのマネージドなセキュリティ対策機能だけでは不足感が否めない。その為、CNCFエコシステムなOSSツールを利用したセキュリティ対策の取り組みを共有します。",
    "speakers": [
      {
        "id": 121,
        "name": "秋葉 洋毅"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:55:00.000+09:00",
    "endTime": "2000-01-01T16:10:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hiropinponpan/container-kubernetesfalsesekiyuriteidui-ce-wogai-metekao-eru",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 131,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521009227",
    "title": "企業システムをクラウドネイティブにしたくて、独自プラットフォームを開発した話",
    "abstract": "クラウド技術が、情報システムを動的でスケーラブルなものに進化させてきました。この波は、企業業務システムにも及んでいます。そのため、私たちは、独自のシステムプラットフォームサービス「Hexabase」を開発しました。このセッションでは、Hexabase で Kubernetes や Go 言語・NoSQL DB などをどのように活用しているか、その具体例を解説します。",
    "speakers": [
      {
        "id": 131,
        "name": "岩崎 英俊"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:20:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 141,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521012854",
    "title": "Keycloakを用いたマイクロサービスの認証強化",
    "abstract": "マイクロサービスでは、多種多様なサービスがAPIを公開し、境界定義が困難を極めるため、たとえシステムの内部通信であっても完全には信用しないという「ゼロトラストネットワーク」の考え方を前提にシステムを構築する必要があります。\r\nゼロトラストネットワークの考え方を前提としたマイクロサービスシステムにおいて、Istio、Quarkus、Strimziといったマイクロサービスの注目技術とOAuth 2.0の認可サーバとして使用可能なOSSであるKeycloakとを組み合わせて、システムを堅牢化する方法を説明します。",
    "speakers": [
      {
        "id": 151,
        "name": "田畑 義之"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ssuserbeb7c0/cloudnative-days-spring-2021-online-keycloak",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 151,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521012940",
    "title": "Apache CamelおよびKeycloakを用いたAPI管理基盤の実現",
    "abstract": "Apache Camel(以降、Camel)は、異種システムの連携ツールとして知られていますが、APIゲートウェイに必要な機能がすべてそろっており、またカスタマイズ性が高いため、特殊な要件を持つAPIゲートウェイに適していると考えています。そのため、我々はCamelをAPIゲートウェイとして用いつつ、OAuth 2.0の認可サーバとしても使用可能なKeycloakと組み合わせてAPI管理基盤を実現しました。Camelを用いたAPI管理基盤は、プロトコル変換、マッシュアップなどの特殊な要件に対応できます。また付随して、高度なアクセス制御やAPI仕様公開、統計情報提供なども可能になります。さらに、開発用GUIが提供されているため、ローコード開発も可能になります。",
    "speakers": [
      {
        "id": 161,
        "name": "謝　洋"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:20:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ssuserbeb7c0/cloudnative-days-spring-2021-online-apache-camelkeycloakapi",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 161,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010504",
    "title": "AWS初学者が始めるコンテナを利用したサーバ構築（ECS／Fargate）",
    "abstract": "約半年前から、SREへ職種チェンジして主にAWSを触り始めています。\r\nAWS知識ゼロの状態から、EC2/Dockerで動いているシステムをコンテナのオーケストレーションツールであるECS／Fargateの構成でリプレイスした際のお話をさせて頂きます。\r\n\r\n主にインフラ領域メインでやられている方というよりは、フロント／バックエンドエンジニアだけど、インフラ領域に興味があるという方向けに発信をできたらと思います。",
    "speakers": [
      {
        "id": 171,
        "name": "斉藤　健太"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:20:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/saik1010/cndo2021-awschu-xue-zhe-gashi-merukontenawoli-yong-sitasabagou-zhu-ecs-fargate",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 171,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521011591",
    "title": "オンプレKubernetesでMySQLクラスタの運用を自動化するためにOperatorを自作している話",
    "abstract": "オンプレミスのKubernetes環境でMySQLクラスタを構築するためには、Vitessや既存のMySQLオペレータを利用する選択肢がありますが、我々はMySQLオペレータを自作することにしました。\r\n本セッションでは、要件に応じたMySQLクラスタリング方式の選択基準、なぜMySQLオペレータを自作する判断に至ったのか、MySQLのエキスパートとKubernetesのエキスパートが協力してオペレータを開発するための知見、開発したMySQLオペレータの仕組みなどを紹介します。",
    "speakers": [
      {
        "id": 181,
        "name": "池添 明宏"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/zoetrope/onpurekubernetesdemysqlkurasutafalseyun-yong-wozi-dong-hua-surutamenioperatorwozi-zuo-siteiruhua",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 181,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521011521",
    "title": "Operator SDKを用いた具体的なOperatorの作り方について",
    "abstract": "Operatorの意義・概要をまずお話した上で、CRDやCR、CustomControllerの関係性についても触れつつ、具体的なoperator-sdkを用いたOperator（※helm based）の実装方法についてお話をします。",
    "speakers": [
      {
        "id": 221,
        "name": "松尾 史彦"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:45:00.000+09:00",
    "endTime": "2000-01-01T16:15:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/matsu1235/how-to-make-the-helm-operator-f0d3d746-486b-4103-b0b0-3d7a86a0b690",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 191,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521006657",
    "title": "Kubernetesなんて知りたくなかった。ただ楽してアプリを作りたかっただけなんだ。",
    "abstract": "今皆さんがご覧のこのサイト。実はこのサイトもKubernetes環境上で動かしています。\r\n\r\n使ってみて改めて思うんですが、Kubernetesってやっぱり面倒じゃないですか？ アプリ開発に注力したいときに、KubernetesのManifest書くなんてやりたくないんです。コンテナイメージのビルドも面倒くさいんです。\r\nCloudNative Daysのシステム開発チームは、そんな想いをかすかに抱きながらこのサイトを作っていました。\r\n\r\nさて、この現状を解決する方法って、何があるのでしょうか？\r\n\r\n実はそういう仕組み、どんどん出てきているんです。気軽に使えるツールから、Kubernetes自体をガッツリ拡張してPaaSにしちゃうものまで、色々選択肢が出てきます。\r\n今回は、CloudNative Daysのシステム開発を通じて感じた<s>愚痴</s>と、開発と運用を楽にしてくれるかもしれない便利なあれこれについて、お話したいなと思います。",
    "speakers": [
      {
        "id": 231,
        "name": "草間 一人"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 201,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005635",
    "title": "SLO策定とアラート設定までの長い道のり",
    "abstract": "皆さんが運用しているサービスには、SLO (Service-level objective: サービスレベル目標) がありますか？アラートの監視項目はどのように設定して、基準値をどのように決めていますか？\r\n\r\n社外とのコミュニケーションだけでなく、社内向けのSLOを決めておくことで、サービスの健康状態を知るための手がかりや、普段の開発・運用タスクの優先度を決める上での指標にもなります。 またSLOがあると、サービスを監視するアラートに、理にかなった閾値を設定できます。 このセッションではAWS版kintoneの、SLOとアラートを設定するまでの記録について紹介します。",
    "speakers": [
      {
        "id": 241,
        "name": "上岡 真也"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:50:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ueokande/sloce-ding-toaratoshe-ding-madefalsechang-idao-falseri",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 211,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521011227",
    "title": "EKS, AKS, GKEそしてオンプレミスのKubernetesをGUIで一元管理してみる話",
    "abstract": "OSSのLensを使ってMultiクラスタ、Hybrid クラウドのKubernetesを簡単に管理する方法、注意事項などをお話しします。",
    "speakers": [
      {
        "id": 251,
        "name": "嘉門延親"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:30:00.000+09:00",
    "endTime": "2000-01-01T18:55:00.000+09:00",
    "talkDuration": 25,
    "talkDifficulty": "",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 221,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521013021",
    "title": "Pinniped?アザラシ？新しくて簡単なKubernetesのユーザー認証",
    "abstract": "あなたのkubeconfigはちゃんとユーザー認証していますか？KubernetesのAPI実行の際、頭を悩ませるのが、ログインを伴ったユーザー認証をどうやって実装するのかです。昨年11月にVMwareはこの問題をシンプルに解決できるPinnipedというOSSをリリースしました。このセッションでは、Pinnipedを紹介させていただくLightningTalkです。",
    "speakers": [
      {
        "id": 261,
        "name": "星野 真知"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:35:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 231,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521007376",
    "title": "エンタープライズ・インフラ構築・運用でもDevOpsを活用しよう ～チームを強くするDevOps～",
    "abstract": "エンタープライズのインフラ構築・運用においても、ソースコードを中心にインフラを管理することの重要性は日々高まっています。ソースコード中心の管理には、ベスト・プラクティスである DevOps の文化・プロセス・ツール群を活用することが重要です。DevOps は Dev（開発）と Ops（運用）の対立解消を目的に、情報共有を促進し、相互理解・相互尊重に価値を置く概念です。エンタープライズのシステムでは、エンジニア系以外にも、非技術系のステークホルダーが数多く存在します。DevOps はエンジニアだけでなく、非技術系のステークホルダーも巻き込んで活用出来ると得られる価値がさらに増大し、チーム力の強化につながります。",
    "speakers": [
      {
        "id": 281,
        "name": "富岡 洋"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:10:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/HiroshiTomioka2/devops-243583726",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 241,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521008799",
    "title": "実演Cluster API Provider OpenStack",
    "abstract": "Kubernetesコミュニティで開発しているCluster APIのOpenStackプロバイダであるCluster API Provider OpenStackをデモします。\r\nKubernetesクラスタをデプロイしたあと、オートスケール、ローリングアップグレードなどを行います。\r\n\r\n- 00:29- Management clusterを作成する\r\n- 02:35- Workload clusterを作成する\r\n- 12:00- 手動でクラスタをスケールする\r\n- 12:28- 自動でクラスタをスケールする\r\n- 19:00- Kubernetesをアップグレードする",
    "speakers": [
      {
        "id": 291,
        "name": "中村 英和"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/1clRSwCMCxbraScwSXiFtiXZ0jLR4v5Og4J_LU0M3BVM/edit?usp=sharing",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 281,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521006761",
    "title": "Pull Request Preview URL - 後ろ側の Microservice の Review 簡単に",
    "abstract": "Pull Request の Review をするのに実際に触ってみたいことは多々あります。数多くの PaaS で変更の preview を簡単に見る URL を発行する機能がありますが、ユーザーには直接露出しないマイクロサービスにおいてこのアプローチを取る方法は自明ではありません。そこで Istio と Ambassador を使い、k8s クラスタを短時間コピーするという体験を実現することにより、どんな場所にある Microservice でも簡単に review できる仕組みを構築しました。",
    "speakers": [
      {
        "id": 321,
        "name": "大坪新平"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:10:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/potsbo/copy-kubernetes-clusters-really-fast",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 291,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005817",
    "title": "OpenAPIを使ったAPI監視とschemaを利用したエコシステムについて",
    "abstract": "ApigeeやAWSのAPI Gatewayのように、API schemaを用いてvalidation等を行なうゲートウェイサービスがにわかに盛り上がっている今日この頃。LINEのプライベートクラウドであるVerdaでも、API schemaをベースにしたAPI監視の仕組みやschemaを使ったエコシステムを導入し始めました。\r\nk8s nativeな設計、レガシーなAPIサービスへの対応、新しい監視の仕組みが役に立ったオペレーションなどの経験を元にした知見と、ユーザ体験を高めるための将来的な開発計画などについてお話しします。",
    "speakers": [
      {
        "id": 331,
        "name": "萬治 渉"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:30:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/line_developers/api-monitoring-with-openapi-and-ecosystem-using-schema",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 301,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521009060",
    "title": "Metal³: Kubernetes上でベアメタルクラスタの管理",
    "abstract": "Metal³はCNCFサンドボックスプロジェクトの一つであり、ベアメタルサーバとクラスタなどのオンプレ環境のインフラをアプリのように声明的に管理する機能を提供しています。このセッションではデモを通じてMetal³の基本を紹介します。また、富士通が今Metal³コミュニティで開発している機能も紹介します。",
    "speakers": [
      {
        "id": 361,
        "name": "宋　書坤"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 311,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521008082",
    "title": "AKS with istioで運用しているサービスのUpgradeをしてみた",
    "abstract": "AKSとistio, flaggerなどを用いてサービスを運用していますが、それぞれをupgradeしていく中で直面した問題、解決したことなどを具体的な事象交えて紹介します。",
    "speakers": [
      {
        "id": 381,
        "name": "柳本　浩一"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:15:00.000+09:00",
    "endTime": "2000-01-01T18:45:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kyanagimoto/cloudnative-days-tokyo-online-2021-311",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 321,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005260",
    "title": "クラウドネイティブを学習できるエンジニアへ",
    "abstract": "クラウドネイティブ技術とは、スケーラブルなアプリケーションの実行能力を組織にもたらすことを目的にしています。しかしクラウドネイティブの定義にある「システムに回復力があり、管理しやすい疎結合なシステムが組織にスケール能力を与えている」ということを、システムの開発に関わるエンジニアはどのように “学習” していけば良いでしょうか？それも最小限の労力で。\r\n本セッションでは、エンジニアがクラウドネイティブを理解する１つの学び方として、「回復力」「管理のしやすさ」「疎結合なシステム」をオブザーバビリティ (可観測性)から得られるデータで学習していく方法を共有します。",
    "speakers": [
      {
        "id": 391,
        "name": "東　卓弥"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:30:00.000+09:00",
    "endTime": "2000-01-01T13:50:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 341,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009753",
    "title": "今さら聞けない人のためのKubernetes超入門",
    "abstract": "Kubernetes(K8s)はコンテナオーケストレーションツールとして、様々なシステムのインフラ構築に利用され始めています。しかし、システムでコンテナを利用する機会がなく、K8sについて触れたことがない、よく分からないという人も多いのではないでしょうか。\r\n本セッションでは、K8sの基本的な仕組みについてMinikubeを使って解説します。",
    "speakers": [
      {
        "id": 421,
        "name": "宮原 徹"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:30:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ToruMiyahara/k8s-big-sur-cnod2021",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 351,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521010050",
    "title": "calico のデプロイをミスって本番クラスタを壊しそうになった話",
    "abstract": "calico をアプデするつもりが、マニフェストを間違えていたせいで特定のリソースがGCされず\r\netcdのデータが肥大化していき、クラスタが操作不能になりそうになった話をします",
    "speakers": [
      {
        "id": 431,
        "name": "川部 勝也"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T17:55:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/katsuyakawabe/cndo2021calico",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 361,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521013126",
    "title": "Helm Chartリポジトリを2年半運用してわかったいろいろな話",
    "abstract": "全く宣伝してないけどChatwork株式会社ではHelm Chartリポジトリ運用してます。\r\nhttps://github.com/chatwork/charts\r\n\r\nHelm Chartリポジトリをなんで運用してるの？とか、Helm Chartリポジトリをどうやって作ってるの？とか、Helm Chartリポジトリって定形作業は何があるの？とか、Helm Chartの品質管理どうしてる？とか、Helm Chartでよくあるミスってどういうのがあるの？\r\n\r\nといったHelm Chartリポジトリのいろいろな話をします。",
    "speakers": [
      {
        "id": 441,
        "name": "Kouta Ozaki"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/cwozaki/helm-chartrihositoriwo2nian-ban-yun-yong-sitewakatutairoironahua-cloudnative-days-spring-2021-online-number-cndo2021",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 371,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521008688",
    "title": "Vault on Kubernetes~秘匿情報の安全な管理~ ",
    "abstract": "Vaultとは、HashiCorp社が開発した秘匿情報を管理、保護するためのソフトウェアです。このセッションでは、実際にkubernetesのsecretをVaultで管理した事例を元に、Vaultについて紹介します。",
    "speakers": [
      {
        "id": 451,
        "name": "佐藤 匠"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:10:00.000+09:00",
    "endTime": "2000-01-01T16:25:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/takumisato0613/vault-on-kubernetes-at-cloudnative-days",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 391,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521008879",
    "title": "ClusterAPIを使ってKubernetesのライフサイクルを管理しよう",
    "abstract": "コンテナのオーケストレーションレイヤ、更には新たな抽象化レイヤーとして、Kubernetesは大分普及してきたと思います。そうなってくると複数あるKubernetesクラスタを効率良く、ライフサイクル管理していく仕組みが必要になってくると思います。本セッションでは、Kubernetesクラスタのライフサイクルを管理するCluster APIについてご紹介させて頂きます。",
    "speakers": [
      {
        "id": 471,
        "name": "伊藤 忠司"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:10:00.000+09:00",
    "endTime": "2000-01-01T18:30:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tadashi777/clusterapi-woshi-tutekubernetes-falseraihu-saikuruwoguan-li-siyou",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 401,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521010823",
    "title": "デプロイメント手法を選択する ~ Flagger/Argo Rollouts ~",
    "abstract": "Progressive Deliveryという言葉を聞いたことがあると思います。\r\nしかし、内容を見て「自分たちにはこんなに高度なことは無理だ」、「品質保証プロセスとして受け入れられない」等を感じたこと、経験はありませんか？\r\n\r\nProgressive Deliveryというデプロイメント戦略の中で、自分たちはどういった手法を取れるのか？またどういったことが実際できるのか？というお話をさせて頂きます。",
    "speakers": [
      {
        "id": 481,
        "name": "松本 宏紀"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:30:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hirokimatsumoto/decide-the-way-of-deployment",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 411,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521899157",
    "title": "原則から考えるマイクロサービストランザクション",
    "abstract": "マイクロサービスにおいて、データベースを用いてデータを管理するとき、いかにして分散したデータを整合させるか、課題になることがあります。そこで、本セッションでは、分散したデータの整合性を担保する、分散トランザクションの原則を示し、マイクロサービスに応用するための考え方を説明します。",
    "speakers": [
      {
        "id": 491,
        "name": "西谷 淳平"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:15:00.000+09:00",
    "endTime": "2000-01-01T15:35:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 421,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521007479",
    "title": "継続的な性能担保、DevPerfOpsという考え方",
    "abstract": "頻繁にリリースが走る中でアプリケーションの性能を継続的に担保することができているでしょうか？\r\n性能試験を1回実施したっきりでその後リリースを繰り返していくと、担保したはずの性能がデグレってしまい性能遅延が発生する可能性があります。\r\n本セッションでは、性能試験自動化やプログレッシブデリバリなどの観点から継続的に性能を担保する考え方とアプローチをご紹介します。日々DevOpsされている方々にとって、DevPerfOpsという気づきを与えられるようなセッションになればと幸いです。",
    "speakers": [
      {
        "id": 501,
        "name": "堀内 保大"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 441,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521012487",
    "title": "インフラ目線でみた、初めてコンテナでサービスをリリースする時のセキュリティポイント",
    "abstract": "コンテナ×クラウドの利便性は分かったけど、いざ本番サービスで利用しようとするとセキュリティ面が不安。。。\r\n初めてコンテナやクラウドサービスを使ったリリースをする方なら、誰もが抱く不安だと思います。\r\nこのセッションでは、初めてのコンテナ×クラウド技術を使った本番環境構築や外部機関の監査を受けた体験から、インフラ目線で事前に認識したいセキュリティのポイントについて解説します。",
    "speakers": [
      {
        "id": 521,
        "name": "山崎　牧彦"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:15:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/MakihikoYamazaki/cloudnativedays2021-security-points-when-releasing-a-service-in-a-container-for-the-first-time-from-an-infrastructure-perspective",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 451,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005727",
    "title": "AI事業本部におけるGPU活用の取り組みとKubernetes",
    "abstract": "サイバーエージェント AI事業本部では、広告領域を始めとして、様々な領域での機械学習のワークロードが増えています。研究者・データサイエンティスト・プロダクト開発者など様々なメンバーが機械学習を利用するなか、利便性の高いGPU/ML環境の提供は欠かせません。\r\n現在に至るまでAI事業本部におけるオンプレGPU環境は様々な変遷があり、現在は2020年にリリースされた NVIDIA A100を利用しNetApp TridentとKubernetesをあわせてGPU/ML環境の提供を開始しています。\r\n\r\n本セッションではこれまでの背景をお話しつつ、オープンソースなエコシステムと拡張性を活かしながら、GPU/ML基盤をどのように開発しているかについて紹介します。",
    "speakers": [
      {
        "id": 141,
        "name": "青山 真也・李 榮宰・高橋 大輔"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:50:00.000+09:00",
    "endTime": "2000-01-01T16:30:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "ML / GPGPU / HPC",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/masayaaoyama/cndo2021-ca-ml-gpuaas-aiplatform",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 461,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010336",
    "title": "うんうん、それ(EC2+ASG)もまたCloudNativeだね",
    "abstract": "CloudNativeといえばKubernetesの話になりがちですが、AWSのEC2でも頑張ってちゃんと意識すればCloudNativeなアーキテクチャを実現できると思っています。本セッションではEC2とAuto Scaling Groupなどを使ってCloudNativeな構成にするには具体的にどうすればいいのか、どのように実践しているのかについてお話します。",
    "speakers": [
      {
        "id": 531,
        "name": "古屋啓介"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:20:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/saramune/unun-sore-ec2-plus-asg-momatacloudnativedane-d6f1bab5-d162-4df5-9d0a-9a85c1334fae?slide=34",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 471,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005545",
    "title": "マインド：計画と統制の文化にクラウドネイティブの種をまく",
    "abstract": "当社はオンプレミスのインフラ上に、長期のキャパシティ・パフォーマンス計画に基づいてシステムをアーキテクトする文化で、20年以上の成長を継続してきました。\r\nしかし、決済を取り巻く状況は変化が急速に進み、より広範囲の柔軟性を獲得するために、不確定性を前提とした上で統制とセキュリティを両立できるクラウドアーキテクチャへの転換を迫られています。20年以上の成功体験を持つシステム組織の中に、クラウドネイティブな思想をどう種まきするのか、経験に基づいてお話します。",
    "speakers": [
      {
        "id": 551,
        "name": "駒井　直"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:20:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 481,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521006922",
    "title": "Docker/Kubernetes 開発・運用のためにテスト駆動開発入門",
    "abstract": "Docker やKubernetesには、様々な方法でテストを行い最小のコストで各種設定や開発者が行う設定を抑える仕組みがいくつも存在しています。しかしながらこれらの仕組みを最大限活用するには知識が必要です。本セッションではDocker/Kubernetes の中でもプロダクトや個人で利用しているツールやその周辺知識について説明できればと思います。",
    "speakers": [
      {
        "id": 561,
        "name": "Shuya Motouchi"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/nwiizo/cndo-2021-tdd",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 491,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010417",
    "title": "地雷を避けながら進むEKS 〜俺の屍を超えていけ〜",
    "abstract": "サクッとK8sクラスターを作れるAmazon Elastic Kubernetes Service（以下EKS）ですが、ちょっと真面目に使おうとすると色々と「あるぇ？」ってなることにもポツポツ出くわします。\r\n\r\n今回は、EKSが持つ機能もちょこちょこ紹介しつつ、地雷っぽいところ（私が踏み抜いたもの）とかTipsなんかをお話しします。主に初級〜中級あたりの視聴者をターゲットにしています。\r\n\r\nこれからちょっと本気出してEKS使っていくかぁ！っていう方のお役に立てば幸いです。\r\n\r\n大丈夫！その地雷、僕が踏んどいたよ！\r\n\r\n☆目次☆　\r\n【 EKSのおさらい 】( EKSの特徴/eksctlコマンド /コマンドの実行環境 / Managed NodeGroupの仕組み / K8s RBACとIAMの関係 / AWSサービスのPV利用 /EKSのPod Network / EKSでELBを使う )\r\n\r\n【 踏み抜いた地雷のおもひで 】( Cloud9でk8sの認証ができない問題 / VPC CNIとIP枯渇問題 / CSIドライバー対応バージョン間違い問題 / Managed NodeGroupのTaint問題 / aws-node起動しない問題 )",
    "speakers": [
      {
        "id": 571,
        "name": "塚本 正隆"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://bit.ly/CNDO2021-EKS",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 501,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521007011",
    "title": "脱 Dockerfile!「Cloud Native Buildpacksとkpack」を使った簡単で安全なイメージビルド",
    "abstract": "DockerやKubernetesで使うイメージをどのように作成していますか?\r\n多くのひとはコードをDockerfileでビルドしているのではないでしょうか。\r\nこのセッションでは「コードをシステムに解析させて、ベストプラクティスに沿ったビルド」をするためのCloud Native Buildpacksという技術を紹介します。\r\nDockerfileに雑に定義を書いて「ただ動けばよい」というビルドをするのではなく、Cloud Native Buildpacksで自分より頭がいい人達の知識をベースに「安全で信頼」のできる自分で定義を書かなくて良い自動ビルドをしてみましょう。\r\nこのセッションでは他にもKubernetes環境上で Cloud Native Buildpacks を使うためのkpackについても扱います。",
    "speakers": [
      {
        "id": 581,
        "name": "伊藤 裕一"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yuichi110/tuo-dockerfile-cloud-native-buildpackstokpackwo-shi-tutajian-dan-dean-quan-naimezibirudo",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 511,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521008172",
    "title": "NaaS (Network as a Service) - NSMによる抽象化とデータプレーンの進化",
    "abstract": "これからのネットワークインフラストラクチャは、高度に抽象化され、柔軟かつオンデマンド的に、クラウドサービスに組み込まれる必要があります。一方、単に抽象化を突き進めると、Overlay Tunnelが蔓延し、インフラリソースの効率性を損なう可能性もあります。本セッションでは、クラウド・ネイティブ・ネットワーキング実装のための革新的なアプローチであるNSMのアーキテクチャとAPIを概説し、SRv6(Segment Routing IPv6)による、データプレーンの共通化・シンプル化について議論します。",
    "speakers": [
      {
        "id": 591,
        "name": "河野 美也, Miya Kohno"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:45:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/mkohno/network-as-a-service-data-plane-evolution-and-abstraction-by-nsm",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 521,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009506",
    "title": "モノリスからマイクロサービスへ",
    "abstract": "Datadog は Kubernetesやマイクロサービスの時代に生まれた若い組織のように思えるかもしれませんが、実際はそうではありません。他の多くの組織と同様に、より大きなコードベースとVM からスタートしました。しかし、毎日何兆ものデータポイントを扱うシステムを構築しながら、数百人のエンジニア規模へと会社をスケールアップしていくには、働き方や利用するツールにも変化が必要でした。\r\n\r\nこのセッションでは、モノリスや大規模なコードベースを、より高速で疎結合的なサービスへと分割する方法のヒントを共有します。また、サービスを管理する上でのアドバイスや、マイクロサービス環境でのトラブルシューティング方法などもお伝えします。さらに、組織全体で合意とアラインメントを得るための重要な戦略についてもお話しする予定です。",
    "speakers": [
      {
        "id": 601,
        "name": "田辺 茂也"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:30:00.000+09:00",
    "endTime": "2000-01-01T13:50:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 531,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521011066",
    "title": "マルチテナントEKSクラスタにおける開発者への権限移譲",
    "abstract": "マルチテナントEKSクラスタ上に構築された各種サービスの構築・運用を開発者に委譲している話",
    "speakers": [
      {
        "id": 611,
        "name": "Goto Kenta"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T17:50:00.000+09:00",
    "talkDuration": 10,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 541,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005900",
    "title": "｢PGマルチペイメントサービス」のマイクロサービス移行計画",
    "abstract": "GMOペイメントゲートウェイはクレジットカード決済やコンビニ決済など、様々な決済手段を通販・ECサイトなどに提供する｢PGマルチペイメントサービス」を運営しています。\r\n開発スピードと安定性を求められる決済サービスで取り組んでいるモノリシックなレガシーアプリケーションのマイクロサービス移行計画についてお話します。\r\nアプリ視点の話なので、パブリッククラウドサービス（AWS/Azure/GCP）やコンテナ（Docker,k8s）などの話はありません。",
    "speakers": [
      {
        "id": 621,
        "name": "佐久間 洋明"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 551,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010741",
    "title": "EC2のApache/PHPで動いてたバッチシステムをECS/Fargateに移行して運用してる話",
    "abstract": "株式会社ウィルゲートでは、戦略的なSEO対策のための分析ツール『TACT』（https://tact-seo.com/）をSaaS型で提供しております。\r\nSEO調査のために何十ものバッチがEC2インスタンス上で動いており、様々な課題を抱えていました。\r\nその課題解決のためにコンテナ化を検討し、最終的にはECS/Fargate,AWS Step Functions,Cloudwatch Eventなどでバッチを制御し、バッチの監視にはGrafana、Cloudwatch、Slackなどを使い、OSSとCloud技術を組み合わせた構成になりました。\r\nその導入における課題や苦悩、トラブルなどを余すところなくお伝えし、これからクラウドネイティブに踏み出そうとする方々へのヒントとなれば幸いです。",
    "speakers": [
      {
        "id": 631,
        "name": "小林良太郎"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:25:00.000+09:00",
    "endTime": "2000-01-01T18:45:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/dongkayakuda/ec2apachephpecsfargate",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 561,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521011331",
    "title": "ケース別に考えるPod間通信制御の話",
    "abstract": "NetworkPolicy、Calico NetworkPolicyで行うことの出来るPod間通信制御の概要と、ケース別に見た時の各リソースでの設定方法および、構築・運用時に注意した点等を話したいと思います。(初心者、中級者向け)",
    "speakers": [
      {
        "id": 641,
        "name": "谷口純一"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:10:00.000+09:00",
    "endTime": "2000-01-01T16:35:00.000+09:00",
    "talkDuration": 25,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 571,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521006841",
    "title": "SUSE x Rancher 話題のLonghornもまとめておさらいする",
    "abstract": "SUSEがRancherを買収し、1月より本格的にSUSE Rancherとして提供を開始しておりますが、コンテナがいよいよ本格化するにあたりRancherってどうなのか？SUSE OpenStackからSUSE Rancherへとどう変わっていくのか？あの話題のストレージ『Longhorn』も含め、今一度クラウドネイティブ本格化時代にあたりおさらいを皆さんとできればと思っております。",
    "speakers": [
      {
        "id": 661,
        "name": "太田　昌文"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T14:50:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 581,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521012580",
    "title": "Open Policy Agent (OPA) と Kubernetes Policy",
    "abstract": "Kubernetes をはじめ、さまざまなシステムから使える汎用的ポリシーエンジンである Open Policy Agent (OPA) の利用例が増えてきています。本セッションでは OPA の概要とアーキテクチャ、および、OPA で使われるポリシー記述言語である Rego について解説をし、Kubernetes の Policy エンジンとして使う場合の利用例についてデモを交えながら解説を行います。",
    "speakers": [
      {
        "id": 671,
        "name": "進藤 資訓"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:15:00.000+09:00",
    "endTime": "2000-01-01T15:55:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/motonorishindo/open-policy-agent-opa-kubernetes-policy",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 591,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009411",
    "title": "決済システムにおけるクラウドネイティブへの挑戦",
    "abstract": "当社では、24/365・高トラフィック・高セキュリティ・低レイテンシーが求められる決済システムにおいて、ここ数年でクラウドネイティブへ挑戦してきた。何を目指し、どんなことに気をかけて、何がキモであったのか。そのアプローチ過程から得た教訓を紹介する。",
    "speakers": [
      {
        "id": 681,
        "name": "三谷 隆"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:10:00.000+09:00",
    "endTime": "2000-01-01T13:30:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/secret/4jCdP9ZFdt0nX4",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 601,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009938",
    "title": "Kubernetesがない世界線のCloudNativeジャーニー",
    "abstract": "オンプレのサーバをクラウドリフトする場合、リフト＆シフト戦略がとられることがよくあります。\r\nしかし、クラウドジャーニーはそこで終わりではなく、Cloud Native な環境にどのように適応していくかが重要になってきます。CICDやプロセスといった見えにくい足回りの部分を整備することで変化し続けていくことが可能になってきます。\r\nK8sやコンテナ技術を利用して運用することで非常にうまくいっている事例も多いかと思います。一方でK8sやコンテナ技術を利用しない場合でもCloud Native は実現できます。\r\nでは、どのように環境や役割を整備していけば環境を整えられるのでしょうか。K8s やコンテナがある世界線とそうでない世界線を比較しながら考えてみたいと思います。",
    "speakers": [
      {
        "id": 691,
        "name": "あさぎ（athagi）"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:15:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/athagi/kubernetes-ganaishi-jie-false-cloudnative-ziyani",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 611,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521008516",
    "title": "ここから始めるKubernetesのセキュリティ",
    "abstract": "エンタープライズのIT部門およびにそれらにかかわる方々がKubernetesを導入していく際に障壁の一つになりうるセキュリティという要素について、基礎知識をまとめてインプットすることを目的にしています。\r\nセキュリティの原則、コンテナのセキュリティ、Kubernetesのセキュリティについてそれぞれ解説していきます。",
    "speakers": [
      {
        "id": 701,
        "name": "磯貝 哲也 "
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:30:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tetsuyaisogai/kubernetes-security-101",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 621,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521012778",
    "title": "Dashboard as Codeでダッシュボード管理は改善するか？",
    "abstract": "Dashboard as CodeとはDashboard管理にソフトウェア開発の原則を当てはめるプラクティスです。grafana, jsonnetでダッシュボード管理を改善できるか、どんな課題が出てくるかを紹介します。",
    "speakers": [
      {
        "id": 721,
        "name": "瀨戸 啓一朗"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/keiichiro666/cndo2021-dashboard-as-codededatusiyubodoguan-li-hagai-shan-suruka",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 631,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521007099",
    "title": "Harbor で自分たちのコンテナレジストリを構築",
    "abstract": "去年 11月から Docker Hub の pull リクエスト制限が開始され、おそらく多くのプロジェクトが別のレジストリを探したり移行したりしていると思われます。様々な選択肢があると思いますが、その中では Harbor っていう CNCF プロジェクトがあります。本セッションでは、Harbor の概要とアーキテクチャを確認しながら、Harbor のメリットや最新のアップデート、セットアップのやり方を共有します。",
    "speakers": [
      {
        "id": 731,
        "name": "キム インソ"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:10:00.000+09:00",
    "endTime": "2000-01-01T16:25:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/sano307/harbor-dezi-fen-tatifalsekontenarezisutoriwogou-zhu",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 641,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521013289",
    "title": "NUCで始めるVMware Tanzu",
    "abstract": "突然ですが、ワークフロムホームなこのご時世、今ホームラボが熱いんです！\r\n本セッションでは、ラボ環境を用意するところから、いつの間にかKubernetesベースの最新オンプレクラウド環境ができちゃった！というところまでを網羅します。\r\n昨年12月、同タイトルで1人Qiitaアドベントカレンダーをやってみたので、そのダイジェスト版となります。詳細を知りたい方は、そちらをご参考下さい。 (https://qiita.com/advent-calendar/2020/nuc-vmware-tanzu)",
    "speakers": [
      {
        "id": 741,
        "name": "佐藤 寛貴"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://drive.google.com/file/d/1bhpzowg6X_oVyR73TXyhTQnxV0yvrbpD/view?usp=sharing",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 651,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521007996",
    "title": "Istioを活用したObservability基盤の構築と運用",
    "abstract": "変化が早く複雑なCloud Nativeアプリケーションを運用する上で、可観測性(Observability)は重要です。近年ではObservabilityを実現する様々なOSSやそのOperatorが登場しており、運用性にも配慮したObservability基盤をOSSで構築可能になりつつあります。また、Observability系のOSSとIstioを連携させると、応答遅延やエラー率などユーザ体験に関わるメトリクスをアプリケーションに手を入れることなく取得することも可能です。しかし現在、IstioとObservability系のOSSを連携させた基盤をOperatorを活用しつつ構築・運用した事例はあまり情報が出ておらず、各自が試行錯誤で環境の実現に取り組んでいることが現状です。そこで、本セッションでは、Istioと各種Observability系OSS（Prometheus, Loki, Jaeger, Grafana, Kiali）を連携させたObservability基盤を構築し、Operatorを用いて運用する中で得た知見を紹介します。",
    "speakers": [
      {
        "id": 751,
        "name": "井出 貴也"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:55:00.000+09:00",
    "endTime": "2000-01-01T18:15:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ido_kara_deru/constructing-and-operating-the-observability-platform-using-istio",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 661,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010653",
    "title": "AWS Stepfunction + SAMで社内のバッチ処理をサーバレス化",
    "abstract": "AWSのStepfunctionとSAMで\r\n社内のバッチ処理をサーバレス化しました。\r\nその時の事例を話致します。",
    "speakers": [
      {
        "id": 761,
        "name": "富松　広太"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:10:00.000+09:00",
    "endTime": "2000-01-01T18:25:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Serveless / FaaS",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 671,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521006277",
    "title": "これから始める人のためのKubernetes & CloudNative 2021",
    "abstract": "「クラウドネイティブ技術をどうやって学んで、どうやって教える？」のポイントを整理して、「何から始めてよいのか分からない」からの1歩を\"ともに踏み出す\"にフォーカスします。",
    "speakers": [
      {
        "id": 771,
        "name": "市川豊"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/cyberblack28/korekarashi-meruren-falsetamefalsekubernetes-and-cloud-native-2021",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 681,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521012021",
    "title": "Metric-Driven Decision Making with Custom Prometheus Exporter ",
    "abstract": "サービス運用やチーム開発のシーンで「なんとなく〜が最近多い・少ない気がするけどどうしよう？」みたいな状況はよくあると思います。こういった問題はできれば Fact-Based な指標に基づいて判断できるのが望ましいでしょう。\r\n\r\n監視 OSS である Prometheus には Exporter という必要な metric を採取し、それを Server が取得可能な形で出力するコンポーネントが存在します。この Prometheus Exporter は自作可能です。これは Programable に取得可能なものであればなんでも Prometheus 形式で metric を出力し、監視サービスでの可視化、Tag による Filtering、Alert の発砲ができることを意味します。\r\n\r\n本発表では、GitHub の Issue、Pull Request や AWS 上の CloudWatch Metrics に存在しない値を API 経由で取得して Export する Prometheus Exporter を OSS で開発し、それを利用した事例を紹介します。\r\n\r\n本事例を通じて Custom Prometheus Exporter を Kubernetes 上で動かし、Datadog で取得するデザインパターンを知るとともに、どういった種類の metric がどのように意思決定に役立つのか、Tag によってどのように目の前の問題をコントローラブルにするか、その考え方を持ち帰ってもらえればと思います。",
    "speakers": [
      {
        "id": 781,
        "name": "近藤 健司"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:10:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/chaspy/metric-driven-decision-making-with-custom-prometheus-exporter",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 691,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521008435",
    "title": "containerd をソースコードレベルで理解する",
    "abstract": "containerd のソースコードリーディングを行います。",
    "speakers": [
      {
        "id": 791,
        "name": "チェシャ猫"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:20:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 701,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521010908",
    "title": "Amazon ECS で考えるデプロイメントとロールバック",
    "abstract": "本番環境へのデプロイメントを安全に実行するために、ロールバックの手順を確立しておくことは重要です。本セッションでは、Amazon ECS を例に用いて、デプロイメントパイプラインに対してどのようにロールバックの仕組みを導入するのか、一例を紹介したいと思います。\r\n",
    "speakers": [
      {
        "id": 711,
        "name": "落水 恭介"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:30:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 10,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": true,
    "documentUrl": "https://speakerdeck.com/otty246/deployment-and-rollback-in-amazon-ecs",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 711,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521011792",
    "title": "オープンソースのObject Storage「CORTX」について",
    "abstract": "Seagateが提供するオープンソースのオブジェクトストレージ向けSDS「CORTX」のご紹介\r\nS3互換のシンプルなオブジェクトストレージを構築し、パブリッククラウドのようなストレージ環境をオンプレミスやプライベートクラウドで運用可能になります。\r\nしかもオープンソースなので無料。",
    "speakers": [
      {
        "id": 801,
        "name": "岩田太郎"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T18:55:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 721,
    "conferenceId": 2,
    "trackId": 15,
    "videoPlatform": null,
    "videoId": "521008616",
    "title": "Amazon EKSでのセキュリティを考える",
    "abstract": "Amazon EKSでKubernetesの運用していく際、セキュリティについてどのように考えればいいのか、悩まれていませんか？\r\nこのセッションではAmazon EKSでセキュリティを確保するための考慮事項を整理してお伝えします。",
    "speakers": [
      {
        "id": 351,
        "name": "林　政利"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:30:00.000+09:00",
    "endTime": "2000-01-01T16:10:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 741,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521006085",
    "title": "How Ubie’s Cloud Platform Accelerates its Product Growth in an Unpredictable World",
    "abstract": "Ubieは約2年半前にKubernetes(GKE)移行を行いました。それ以降プロダクト開発を続け、ユーザーに提供するプロダクトの数は4倍、内部のサービスは6倍に増えました。不確実性が多いスタートアップの中でクラウドネイティブな技術をどのように活用し、柔軟にプラットフォームの形どのように変えてきたか、また今後どのような展望を持っているかご紹介いたします。",
    "speakers": [
      {
        "id": 821,
        "name": "Jun Sakata / Kaito Minatoya / Takuya Kosugiyama / Makoto Hasegawa / Takuma Nakagame"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:30:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 751,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521012397",
    "title": "What it means to be “observable” in Ubie",
    "abstract": "Ubie は複数のプロダクトを国内外に展開しており、その内部には多数のサービスが関連しあっています。サービスの数とその複雑さの増加につれて Observability はますます重要になってきます。Ubie における適切な Observability の実現のためにどのようなツールを選び設計しているかをご紹介いたします。\r\n技術的にはPrometheusとCloud Monitoringの連携によるモニタリング環境の改善や、Istio/Zipkin/Cloud Trace連携について取り上げる予定です。",
    "speakers": [
      {
        "id": 821,
        "name": "Jun Sakata / Kaito Minatoya / Takuya Kosugiyama / Makoto Hasegawa / Takuma Nakagame"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 761,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521010992",
    "title": "Strategic Rollouts and Events Driven Workflows with Argo Stack",
    "abstract": "Ubieでは、柔軟なロールアウト方法による安全なリリースと、リリースに関連したジョブの実行のためにArgoプロジェクトのソフトウェア(argo-rollouts/argo-events/argo-workflow)を利用しています。これらを導入した背景や、実現したい世界観を説明いたします。",
    "speakers": [
      {
        "id": 821,
        "name": "Jun Sakata / Kaito Minatoya / Takuya Kosugiyama / Makoto Hasegawa / Takuma Nakagame"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:20:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 771,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521007793",
    "title": "QuarkusでJavaのコンテナを最適してOpenShiftで動かしちゃおう",
    "abstract": "コンテナは軽くて、すぐにスケールする。はずなのに、起動に時間がかかって待たされるなんて残念な経験はありませんか？Javaのコンテナを最適化して快適に実行する方法をご紹介します。",
    "speakers": [
      {
        "id": 831,
        "name": "大溝　桂"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:50:00.000+09:00",
    "endTime": "2000-01-01T16:20:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 781,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521011146",
    "title": "Higher level abstraction/orchestration with Crossplane and Open Application Model",
    "abstract": "クラウドネイティブ時代のインフラ、アプリケーション開発は加速しており、エンジニアにとっての技術選定やロール、キャリアの選択肢も多様化しています。\r\n上記の裏付けとして、下記の KubeCon NA 2020 の発表(https://sched.co/eoJ0)にて、「今後 5 年間で 5 億のアプリケーションが開発され、その数は今日までの 40 年間で開発されたものよりも多くなる」ことが予想されています。\r\n\r\nまた、CNCF TOC(Technical Oversight Committee)からも、「CNCF Sandbox Project のいくつかは失敗し統合が進む。これは全体としては健全な傾向である。」ということが示されていて(https://sched.co/eoIl)、今主流に見える技術が直近の3~5年後にも活用されているかの判断は難しい状況が続くと推測できます。\r\n\r\n正直、覚えることが多すぎて大変かと思います。\r\n\r\nこうした背景を踏まえ、DevOps のようにアプリ開発者、アプリ運用者、インフラ運用者などの Role ごとに責務を分けて関心事を分離したり、物事を適切に抽象化するなどの工夫をすることで認知負荷を下げ、より本質的な作業へ力を注ぐことができます。\r\n\r\nCNCF Sandbox Project である Crossplane は、AWS, GCP, Azure, その他サードパーティが提供するサービスを Kubernetes のリソースモデルで抽象化し、いつもの kubectl だけですべてを管理することができる control plane です。これによりベンダ中立な方法で、コンテナだけではなく一段上のレイヤの Orchestration を実現できます。\r\n\r\nこのセッションでは Crossplane と Open Application Model(OAM)をはじめとした抽象化/Ochestrationについてデモを交えて紹介します。",
    "speakers": [
      {
        "id": 651,
        "name": "三田興史"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:50:00.000+09:00",
    "endTime": "2000-01-01T18:30:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/mita/orchestration-with-crossplane-and-open-application-model",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 801,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009312",
    "title": "技術的負債とステークホルダと説明責任と",
    "abstract": "なぜあなたの改善提案は会社に受け入れてもらえないのか？\r\nなぜ所属チームは技術的負債をずっと抱えたまま変わろうとしないのか？なぜ変えようという雰囲気すら起こらないのか？\r\n\r\nなんなんですか？やる気ないんですか？\r\n\r\nそんな不満をお持ちのみなさま、一緒になぜなのか考えてみませんか。",
    "speakers": [
      {
        "id": 841,
        "name": "原 トリ"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:30:00.000+09:00",
    "endTime": "2000-01-01T13:10:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/toricls/the-debt",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 811,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521009143",
    "title": "Open Policy Agentで社内のコード統一する夢を見る",
    "abstract": "Open Policy AgentはOSSでPolicy as Codeを実現するツールです。社内ではインフラの構築にTerraformが採用され、浸透してきています。一方、書き方や流派については統一されておらず、将来的にエンジニアへの負荷も懸念されました。そこで本セッションではOPAを利用したTerraformのコードをどれだけ統一できるかに挑戦しました。",
    "speakers": [
      {
        "id": 851,
        "name": "伊藤太斉"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kaedemalu/cndo2021-open-policy-agent",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 821,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521013364",
    "title": "Azure のマネージドなOpenShift サービス – ARO の運用のコツ",
    "abstract": "Azure Red Hat OpenShift (ARO) は、OpenShiftをクラウドで簡単に利用できるサービスです。Azure の様々なサービスと連携して便利に利用するために、少しコツが必要になる部分もあります。このセッションでは、AROを運用する上でのちょっとしたコツについてご紹介したいと思います。",
    "speakers": [
      {
        "id": 861,
        "name": "畑崎　恵介"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:10:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hatasaki/azure-falsemanezidonaopenshift-sabisu-aro-falseyun-yong-falsekotu",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 831,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005982",
    "title": "NFVにおけるクラウドネイティブ技術適用の挑戦",
    "abstract": "移動体や固定通信を支えるネットワークシステムにおいても，NFV型の仮想化が進んでいるが，近年クラウドネイティブ技術が取り入れられつつある．移動体や固定通信を支えるネットワークシステムでは特殊なプロトコルや設備条件等様々な制約があるため，クラウドネイティブのアプローチをそのまま利用することができず，NFVでのベストプラクティスを見出していく必要がある．本セッションでは我々のプロジェクトでこれまでに取り組んできたアーキテクチャや構成技術について紹介し，現在の課題についてディスカッションしたい．",
    "speakers": [
      {
        "id": 871,
        "name": "篠原健太"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:30:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "NFV / Edge",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/sinohara/nfvniokerukurautoneiteihuji-shu-shi-yong-falsetiao-zhan",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 841,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521008339",
    "title": "KubernetesのRuntime Classについて知ろう",
    "abstract": "Kubernetes では Runtime Class という概念があり、OCI ランタイムを利用者が自由に選択することができる機能が実装されています。\r\n本セッションでは Runtime Class の設定の仕方や、CRI ランタイムにおいて Runtime Class に対応させるための設定の仕方等を発表します。",
    "speakers": [
      {
        "id": 881,
        "name": "長谷川 誠"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:30:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/makocchi/lets-learn-about-kubernetes-runtime-class",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 851,
    "conferenceId": 2,
    "trackId": 16,
    "videoPlatform": null,
    "videoId": "521013210",
    "title": "yttでYAML王に俺はなる",
    "abstract": "Kubernetesにアプリをデプロイするのにhelmやkustomizeを使う方は多いのではないでしょうか？もう少し柔軟にカスタマイズしたいと思ったことはないですか？あるいはjsonnetやcueといった別の言語でmanifestを管理しようと試みたことはありませんか？\r\nytt(YAML templating tool) https://github.com/vmware-tanzu/carvel-ytt はYAMLのテンプレートとオーバーレイをYAMLで管理できるツールです。yttを使えばYAMLに対して行いたい加工を大体実現できます。\r\nyttの基本的な機能紹介とこんなカスタマイズを実現したよっていう例を紹介してyttの魅力を伝えたいと思います。",
    "speakers": [
      {
        "id": 891,
        "name": "槙 俊明"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/1FYbzsli4x9YJvNefbKQ8-NR3VWyC5Ou8WhKF32Cy8b4/edit?usp=sharing",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 861,
    "conferenceId": 2,
    "trackId": 12,
    "videoPlatform": null,
    "videoId": "521007276",
    "title": "Tektonのこの1年とユースケースについて",
    "abstract": "NTTコミュニケーションズでは自社プロダクトのCloudNative化を通してそのライフサイクル改善に向けた取り組みを行っています。本日はその取り組みの中核を担うOSSである「Tekton」についてご紹介します。直近1年間のTektonの動向や新機能をご紹介するとともにそのユースケースを共有させていただきます。",
    "speakers": [
      {
        "id": 901,
        "name": "昔農 凜太朗 / 杉野 博徳"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 881,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521010149",
    "title": "5分でキメる \"Kubernetes Operator 完全に理解した\"",
    "abstract": "Kubernetes における Operator/Controller の役割は，K8sを上手に活用したいシーンにおいて非常に重要です。しかしながら，それらを全く意識しないままに K8s にトライしている方々を多く見かけます。知ってて損は無い Operator/Controller について，初心者の方向けに5分で解説します。",
    "speakers": [
      {
        "id": 911,
        "name": "斎藤 和史"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:05:00.000+09:00",
    "talkDuration": 5,
    "talkDifficulty": "",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/capsmalt/5min-operator101",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 891,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521007586",
    "title": "マイクロサービスの光と闇",
    "abstract": "アプリケーションのモダナイズに注目する企業が多く見受けられる中、「マイクロサービス」と言うアプローチにも改めて関心が集まっているように感じます。\r\nマイクロサービスを導入する/したが故に考慮しなければならないポイントや、実際に導入を検討する際にVMware Tanzu Labsで利用しているtipsとプロセスをご紹介します。",
    "speakers": [
      {
        "id": 811,
        "name": "濱平　紗穂"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:15:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://drive.google.com/file/d/1MglnkQiCyxWC9oi62DuHxK1a6LDLherm/view?usp=sharing",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 901,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521011954",
    "title": "5分で始めるPrometneusOperator",
    "abstract": "みなさん、Prometneus好きですよね？好きですよね！\r\nでも、Kubernetes上に構築するのはめんどくさいと感じますか？\r\n\r\n大丈夫です。\r\nPrometneusOperatorを使えば簡単に構築でき、さらに運用を支える様々なCRDが提供されるため、これらを活用してより簡単にPrometneusを運用できます！\r\n\r\nということで、本セッションでは5分でPrometneusOperatorの概要から実践までご紹介します！",
    "speakers": [
      {
        "id": 921,
        "name": "仲亀 拓馬"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:05:00.000+09:00",
    "endTime": "2000-01-01T15:10:00.000+09:00",
    "talkDuration": 5,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 911,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521011693",
    "title": "KubernetesバックアップツールVeleroとちょっとした苦労話",
    "abstract": "皆さんのKubernetesクラスタ、バックアップを取ってますか？\r\nIaCなんだから要らないって人、クラスタ削除しちゃったりした時に本当にすぐに同じ環境を誰でも復元できるようになってますか？\r\n本セッションでは何故Kubernetesでもバックアップが必要かに触れると共に、代表的なバックアップツールのVeleroの紹介と、使ってみた時に躓くかもしれない点をゆるくご紹介します。",
    "speakers": [
      {
        "id": 931,
        "name": "村田 一平"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/imurata8203/kubernetesvelero",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 921,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521012313",
    "title": "Elastic Stack を活用した Kubernetes のアプリ監視",
    "abstract": "Kubernetes は Monolith を小さなアプリに分割し、管理性に優れたマイクロサービスを実現します。現在、Kubernetes はコンテナーオーケストレーションの人気テクノロジーです。その結果、各コンポーネントはより小さく、シンプルになりましたが、アプリケーション監視の方法はより複雑になりました。\r\nオブザーバビリティは、ログとメトリック、およびアプリケーションパフォーマンス監視（APM）という、3つのデータの柱により成り立っています。この3つを Kubernetes で収集する方法とは、どのようなものでしょうか？監視ツールはたくさんあります。しかし、多くの異なるツールやベンダー、テクノロジーを寄せ集めて大変な思いはしたくありません。\r\nElastic を使って、1つのツールですべての作業を実施可能です。このセッションでは、Kubernetes で実行されるアプリのオブザーバビリティにまつわる課題を解決する方法をお伝えします。",
    "speakers": [
      {
        "id": 941,
        "name": "鈴木 章太郎"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:50:00.000+09:00",
    "endTime": "2000-01-01T18:20:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/shosuz/elastic-observabilitycansmartlymanagetheappsonkubernetes",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 931,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521012130",
    "title": "コンテナにおけるパフォーマンス調査にハマった話",
    "abstract": "現場において負荷試験を実施する際に試行錯誤の上、コンテナのメトリクスを調査した内容を共有します！共感いただける方がいらっしゃると嬉しいです。",
    "speakers": [
      {
        "id": 951,
        "name": "島田雄太"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:55:00.000+09:00",
    "endTime": "2000-01-01T18:15:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/YutaShimada/ss-244173358",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 941,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521011875",
    "title": "5分で学ぶMonitoringとObservability",
    "abstract": "",
    "speakers": [
      {
        "id": 921,
        "name": "仲亀 拓馬"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:05:00.000+09:00",
    "talkDuration": 5,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 951,
    "conferenceId": 2,
    "trackId": 14,
    "videoPlatform": null,
    "videoId": "521012210",
    "title": "Kubernetes Logging Quick Tutorial",
    "abstract": "",
    "speakers": [
      {
        "id": 921,
        "name": "仲亀 拓馬"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T17:50:00.000+09:00",
    "talkDuration": 10,
    "talkDifficulty": "",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 961,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009840",
    "title": "物語から入るCloud Nativeな世界(CNCF Cloud Native Landscape編)",
    "abstract": "Cloud Nativeって言葉に対してどんなイメージをお持ちでしょうか？\r\n私は先人と現在の実務者が積み重ねているありがたい「ベストプラクティス」のイメージがあり、事例/コード/ドキュメント/ブログなどを通して学んでいます。\r\n一方で、絶えず研鑽と実践を積んでいかなければならず「果ての無い旅に出ている」気持ちになることがあります。\r\nそんなCloud Nativeな世界への旅に親しみをもって気軽に入っていけるように、Cloud Nativeにまつわる物語から学んでみませんか？\r\nこのセッションでは、主にCNCF Cloud Native Landscapeを通してCloud Nativeを定義しているCNCF(Cloud Native Computing Foundation)のTOC(Technical Oversight Committee)などの動きやトレンドを紹介していきます。\r\nCNCF Cloud Native Landscapeはこれまで未知の領域であるCloud Native Technologyを通るための地図/リソースマップとなり、企業や開発者を支援することを目的としています。",
    "speakers": [
      {
        "id": 961,
        "name": "藤原善基"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:30:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yoshiki0705/cloudnative-days-spring-2021-online",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 971,
    "conferenceId": 2,
    "trackId": 13,
    "videoPlatform": null,
    "videoId": "521011435",
    "title": "とある新入社員と学ぶOperator開発",
    "abstract": "とある新入社員が配属された部門はKubernetesを扱う部門でした。たしかに世の中ではKubernetes一色で，どこを見ても “Kubernetes...Kube...k8s…” 。そこで言い渡されます。「次はOperatorらしいぞ。きみやってみるか？」と。突然の案件にあたふたする新入社員はGoなど書いたことなかったが，先輩エンジニアとともにKubernetes Operatorの作り方を学んでいきます。\r\n\r\nKubernetes Operatorを開発されたことが無い方，いらっしゃいませんか？「何となく難しそう」と感じていたり，「Operatorは使うモノ」だと思っていたり，と他にも色んな理由があるかと思います。本セッションは，耳で聞いて，目で見て，そしてすぐに手を動かす，Operator開発に一歩踏み出したい方を支援するハンズオンセッションです。",
    "speakers": [
      {
        "id": 971,
        "name": "とある先輩と後輩"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:05:00.000+09:00",
    "endTime": "2000-01-01T15:45:00.000+09:00",
    "talkDuration": 40,
    "talkDifficulty": "",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 981,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010585",
    "title": "私がもっと早く知りたかったサーバーレス開発の \"Hello World\" 次の一歩",
    "abstract": "サーバーレスは慣れてさえしまえばちょっとしたモノ作りが捗って非常に重宝するのですが、前提として覚えることも多く、はじめの一歩が終わってすぐに躓いてしまう方も多いのではないかと思います。\r\n\r\n私の場合、AWSの基礎知識は多少あったものの、開発経験が乏しく、Serverless Framework 等デプロイツールの「お作法」にも疎かったため、何をどうすれば \"いい感じ\" になるのかが見えておらず、慣れるまでには苦労がありました。今は実績が増えたので多少はそうしたことがわかるようになりましたが、きっと多くの初心者の方が躓いているのは私と似たような「Hello world の次」ではないかと思っています。\r\n\r\nこのセッションでは、デプロイツールに Serverless Framework、開発言語に Python を用いる前提のもと、知っていると捗る「開発お作法」的な我流プラクティスを紹介します。Serverless Beginner の躓きの理由を1つ減らせたらいいなと思います。",
    "speakers": [
      {
        "id": 981,
        "name": "hassaku"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:40:00.000+09:00",
    "endTime": "2000-01-01T18:10:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Serveless / FaaS",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hassaku63/serverless-development-practices-the-next-step-of-hello-world",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 991,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521006370",
    "title": "Let's try CKA/CKAD",
    "abstract": "Certified Kubernetes Administrator (CKA) 試験とCertified Kubernetes Application Developer（CKAD）試験は、Kubernetesに関するスキルを証明するための、コマンドラインを使ったハンズオン形式の資格試験です。\r\n\r\nこのセッションでは、Kubernetesアプリケーションの開発者に必要なスキルや知識の証明として取得してみよう！ということで、これからKubernetesの勉強を始める方に向けてCKA/CKADの出題範囲に沿っていくつかの問題を解いていきます。",
    "speakers": [
      {
        "id": 991,
        "name": "Shiho ASA"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:05:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1001,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005170",
    "title": "How We Migrated K8S Cluster Without Downtime",
    "abstract": "CircleCIでは継ぎ足しで自前運用してきたK8SクラスターをEKSへ移行しました。その時に用いたパターンや学びを共有したいと思います。",
    "speakers": [
      {
        "id": 1001,
        "name": "金 洋国"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:10:00.000+09:00",
    "endTime": "2000-01-01T13:30:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1011,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009661",
    "title": "Kubernetes のライフサイクル管理、そして DevSecOps の実現 ～ VMware Tanzu",
    "abstract": "エンジニアの皆様にとっては普及している Kubernetes ですが、エンタープライズで本番運用までを行っている企業はいまだ限定的なのではないでしょうか。そこには、Kubernetes そのものの技術的な難しさもありますが、ビルド、ネットワーク、セキュリティ、オブザーバビリティ、マルチクラウドの管理というように周辺技術との組み合わせがさらに敷居を高めていると考えています。\r\nVMware Tanzu は、企業がより優れたソフトウェアを、より迅速に実現できるようにする製品およびサービスのポートフォリオです。モダンアプリケーション ライフサイクルの自動化やあらゆるクラウドでの Kubernetes 実行が可能になるだけでなく、マルチクラウド運用を統合し、最適化できます。\r\n本セッションでご紹介する VMware Tanzu は、VMware vSphereと組み合わせてKubernetesをお使いいただくことから始め、マルチクラウドにおけるDevSecOpsのライフサイクルまでをご提供できるソフトウェアスタックです。企業におけるKubernetes運用の課題と VMware がどのようにしてお客様の困難を軽減できるかについてお話します。",
    "speakers": [
      {
        "id": 261,
        "name": "星野 真知"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T14:50:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 1021,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005355",
    "title": "Artifact Driven CI/CD",
    "abstract": "本セッションは CI/CD をこれから始めてみようという方はもちろん、CI/CD を何らか導入し始めたもののイマイチそのメリットがピンと来ていない方を対象に、本当にプロジェクトに役立つ CI/CD パイプラインの作成方法をお伝えします。CI/CD の成功の鍵は、パイプラインの中心をソースコードではなくアーティファクト（バイナリ）にすることにあります。この考え方は世の中の多くの CI ツールとは異なる考え方になるため、ある意味コペルニクス的発想の転換が求められます。本セッションでは実際に Cloud Native な DevOps 基盤である JFrog Platform を用いた CI/CD のデモを交えながら、この「アーティファクト・ドリブン」な CI/CD をお伝えしたいと思います。",
    "speakers": [
      {
        "id": 1011,
        "name": "三宅 剛史"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:50:00.000+09:00",
    "endTime": "2000-01-01T14:10:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tsuyo/artifact-driven-cicd",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1031,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521005453",
    "title": "Cloud Native の中心で AI (愛) を叫ぶ",
    "abstract": "Cloud Native というとサーバーやコンテナ技術 (とその利用方法) に目が向きがちですが、今や ML | AI モデルの構築やそれを使ったサービス構築もクラウドの恩恵を十二分に受けています。また、AI というと何から始めたら良いのか、ハードルが高いと思う方が多いのも事実。\r\nこのセッションでは、サーバーレス & ローコードで(＝そんなに開発スキルが高くなくても大丈夫！) AI | Cognitive 技術、サービスを利用する、AI への第一歩を踏み出す方法をお話しします。",
    "speakers": [
      {
        "id": 1021,
        "name": "大森 彩子"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:30:00.000+09:00",
    "talkDuration": 15,
    "talkDifficulty": "",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1041,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521010249",
    "title": "コンテナセキュリティ入門 Falco　変革の次の一手を支えるデータ基盤　～HPE EZMERALの世界～",
    "abstract": "コンテナランタイムセキュリティのデファクトとなっているFalco。名前は知っているけど、これから調べようと思っていたという方もまだまだ多いのではないでしょうか？\r\n\r\nFalcoはSysdig社によってリリースされ、現在CNCFで開発をリードされている \r\nオープンソースソフトウェアです。先般、CNCFの認定資格試験であるCKS（Certified Kubernetes Security Specialist）の参照ドキュメントにも採用されたことで、より認知度があがってきているのではないかと思います。そんなFalcoの概要に ついて入門者向けにSCSKがご説明いたします。\r\n\r\nまた当セッションの後半では、Sysdigが動作するマルチクラウドプラットフォーム環境の一つとして、今回HPE社よりEZMERALの概要をご紹介いたします。",
    "speakers": [
      {
        "id": 1031,
        "name": "石川愛彦/江澤竜起"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T14:50:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 1051,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521009591",
    "title": "Edge Cloud Vision",
    "abstract": "クラウドサーバを中核とするクラウドコンピューティングに対し、エッジサーバを中核とするエッジコンピューティングは、これまでにないUX（ユーザエクスペリエンス）を提供するキーテクノロジの一つです。処理の超低遅延化、超大量データの解析、センシング能力の拡張、端末負荷のオフロードなどの技術が可能とするエッジコンピューティングの各業界でのユースケースや、Red Hatの取り組みについてお話しします。",
    "speakers": [
      {
        "id": 1041,
        "name": "長滝信彦"
      }
    ],
    "dayId": 7,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:50:00.000+09:00",
    "endTime": "2000-01-01T14:10:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "IoT / Edge",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 7,
    "conferenceDayDate": "2021-03-12",
    "presentationMethod": null
  },
  {
    "id": 1061,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521006552",
    "title": "Acquia Cloud PlatformでクラウドネイティブなCMS開発",
    "abstract": "アクイアではオープンソースCMS「Drupal」に特化したクラウドPaaS環境と開発ツールを提供しています。\r\n本セッションでは、多くの開発者が遭遇するアプリケーション開発における課題に対して、クラウドを最大限に活用した理想な開発体験を享受する方法をご紹介します。",
    "speakers": [
      {
        "id": 301,
        "name": "丸山ひかる／岸俊兵"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T14:50:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/acquiajp1/cloud-native-cms-development-with-acquia-cloud-platform",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1071,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521005080",
    "title": "DockerとKubernetesをかけめぐる",
    "abstract": "本セッションでは、DockerとKubernetesのもつ基本的な機能の概要を、コンテナの仕組みをふまえつつイラストを用いて紹介していきます。一般にあまり焦点をあてて取り上げられることは多くありませんが、コンテナの作成や管理を担う低レベルなソフトウェア「コンテナランタイム」も本セッションの中心的なトピックのひとつです。",
    "speakers": [
      {
        "id": 1051,
        "name": "徳永　航平"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:50:00.000+09:00",
    "endTime": "2000-01-01T13:10:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/KoheiTokunaga/dockerkubernetes-244176142",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1081,
    "conferenceId": 2,
    "trackId": 10,
    "videoPlatform": null,
    "videoId": "521004978",
    "title": "Cloud Native 2021 and Beyond",
    "abstract": "TBD",
    "speakers": [
      {
        "id": 1061,
        "name": " Chris Aniszczyk"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:30:00.000+09:00",
    "endTime": "2000-01-01T12:50:00.000+09:00",
    "talkDuration": 20,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://link.medium.com/BNdocJqAyeb",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  },
  {
    "id": 1091,
    "conferenceId": 2,
    "trackId": 11,
    "videoPlatform": null,
    "videoId": "521006177",
    "title": "NGINX Ingress Operator・OpenShift環境でNGINXを活用 / OperatorでKubernetesを気軽に拡張する",
    "abstract": "OpenShiftでは様々なサービスやリソースをOperatorを利用して拡張することが可能です。\r\n本セッションでは、NGINX Ingress Operatorを利用したOpenShift環境の中でのNGINX活用促進方法と、Operatorで気軽にKubernetesリソースの拡張ができることをご紹介します。\r\n",
    "speakers": [
      {
        "id": 1071,
        "name": "鈴木 孝彰(NGINX) / 伊藤 拓矢(Red Hat)"
      }
    ],
    "dayId": 6,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T14:50:00.000+09:00",
    "talkDuration": 30,
    "talkDifficulty": "",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 6,
    "conferenceDayDate": "2021-03-11",
    "presentationMethod": null
  }
]
