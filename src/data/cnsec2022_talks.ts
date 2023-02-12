import type { Talk } from "../types/talk";

export const CNSEC2022Talks: Talk[] = [
  {
    "id": 1433,
    "conferenceId": 6,
    "trackId": 29,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1433a/12/playlist.m3u8",
    "title": "Simplify Cloud Native Security with Trivy",
    "abstract": "クラウド環境への移行に伴い必要なセキュリティ対策も大きく変化しました。しかしこれらの対策には多くのツールを組み合わせて使う必要があり、導入・学習コストが高くなっています。そこで本発表では、OSSであるTrivyを用いて特に攻撃へと繋がりやすい依存ライブラリの脆弱性や脆弱なインフラ設定、誤ってコミットされたパスワード等の検知を一括で行う方法について説明します。また、実際にCloudFormationやHelmチャートをスキャンすることでデプロイ前に危険な設定を検知するデモを行います。",
    "speakers": [
      {
        "id": 1283,
        "name": "Teppei Fukuda"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:05:00.000+09:00",
    "endTime": "2000-01-01T13:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/knqyf263/simplify-cloud-native-security-with-trivy/",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1436,
    "conferenceId": 6,
    "trackId": 31,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1436/1436.m3u8",
    "title": "なぜあなたのプロジェクトのDevSecOpsは形骸化するのか",
    "abstract": "昨今、DevSecOpsを導入する企業が非常に増えています。しかし「実はツールの導入をしただけで、セキュリティを改善するまで至っていない」というお声を聞くことが多いことも事実です。DevSecOpsにはツールによって使いやすい・使いにくいの差はありますが、銀の弾丸は存在しません。本当に意味のあるDevSecOpsを実現するには、現状の自組織の課題と、DevSecOpsによってどのようなセキュアな開発体験を目指すのかを、明確に意識する必要があります。このアプローチのヒントになるお話を、複数のクライアントへのDevSecOps導入経験を元にして紹介していきます。",
    "speakers": [
      {
        "id": 1288,
        "name": "Masaya Tahara"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:05:00.000+09:00",
    "endTime": "2000-01-01T15:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/MasayaTahara/devsecopscloudnative-security-conference-2022",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1438,
    "conferenceId": 6,
    "trackId": 29,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1438/1438.m3u8",
    "title": "Sysdig Secure/Falcoの活用術！〜Kubernetes基盤の脅威モデリングとランタイムセキュリティの強化〜",
    "abstract": "本講演では、IIJのマルチテナントなKubernetes基盤であるIKE（IIJ Kubernetes Engine）上の実運用システムやフローに対して脅威モデリングを行い、Sysdig Secure/Falcoを用いてIKEのランタイムセキュリティを強化するために実施したPoCについて紹介します。どのようにしてKubernetesを基盤とした実運用システムやフローの潜在的な脅威を見つけるのか。また、見つかった脅威についてどのような対策をしていくのか。Sysdig Secure/Falcoを活用しながら試行錯誤したプロセスを解説していきます。",
    "speakers": [
      {
        "id": 1290,
        "name": "Chihiro Hasegawa / Han Li"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:05:00.000+09:00",
    "endTime": "2000-01-01T17:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/owlinux1000/falcofalsehuo-yong-shu-kubernetesji-pan-falsexie-wei-moderingutorantaimusekiyuriteifalseqiang-hua",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1439,
    "conferenceId": 6,
    "trackId": 29,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1439/19/playlist.m3u8",
    "title": "Kubernetes Service Account As Multi-Cloud Identity",
    "abstract": "多くのクラウドプロバイダの提供するManaged Kubernetesサービスでは、Kubernetes Service Accountから、クラウドAPIを自動的に認証する機能を提供しています。EKSであればIAM Roles for Service Account(IRSA), GKEであればWorkload Ideneity等です。これらの機能を使えば、アプリケーションはクラウドSDKを呼び出すだけで、適切な権限をもつ、自動的に払い出された一時的なクレデンシャルを使って、シームレスかつ安全にクラウドAPIにアクセスすることが可能です。\r\n\r\nしかし、これがオンプレミスで稼働しているようなUnmanagedなKubernetesであればどうでしょうか。永続的なAPI キーをクラウドプロバイダで発行し、それらを各アプリケーションPodにマウントすることでクラウドAPIの認証を実現していることが多いのではないでしょうか。永続的なAPIキーはそれ自体がセキュリティリスクとなりますし、リスク低減のためにはローテーションの運用負荷も存在します。アプリケーションが利用するAPIキーが複数存在したり、複数のクラウドプロバイダとやり取りする環境だと、これらのリスク・運用負荷はより大きくなります。\r\n\r\n本セッションでは、KubernetesのServiceAccountIssuerDiscoveryの機能と、各種クラウドプロバイダが提供しているIdentity Federationの機能を活用して、永続的なAPI Keyを利用せず、KubernetesのService Accountを複数クラウド共通のIdentityとして利用可能にする方法について共有します。これによって、クラウドプロバイダ側でKubernetes Service Accountへの権限を付与するだけで、シームレスかつ安全に、複数クラウドAPIにアクセスできる環境を実現できます。",
    "speakers": [
      {
        "id": 1291,
        "name": "Shingo Omura"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:05:00.000+09:00",
    "endTime": "2000-01-01T15:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/pfi/kubernetes-service-account-as-multicloud-identity-cloud-native-security-conference-2022-cnsec2022",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1441,
    "conferenceId": 6,
    "trackId": 30,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1441/16/playlist.m3u8",
    "title": "セキュアなTerraformの使い方 ~ 機密情報をコードに含めず環境構築するにはどうしたらいいの？",
    "abstract": "IaCの便利さ・メリットがよく知られるようになった昨今、Terraformでクラウド環境を構築するという選択肢はとても一般的です。\r\nしかし「構築内容をコード・文書として残す」というIaCの特性上、機密情報がコードやツールによる生成物に含まれないよう注意を払いながら開発していくことが求められます。\r\n本セッションではそのリスクを避けるためにはどのようにコードを記述すればいいのか、そもそもどのリソースをTerraformで扱っていくべきなのか、またどのようにチームでセキュアなTerraform運用をしていけばいいのかについて論じます。",
    "speakers": [
      {
        "id": 1293,
        "name": "Haruka Sakihara"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:05:00.000+09:00",
    "endTime": "2000-01-01T17:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/harukasakihara/sekiyuanaterraformfalseshi-ifang-ji-mi-qing-bao-wokodonihan-mezuhuan-jing-gou-zhu-surunihadousitaraiifalse",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1442,
    "conferenceId": 6,
    "trackId": 30,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1442/1442.m3u8",
    "title": "Istioを活用したセキュアなマイクロサービスの実現: アプリ透過型のユーザ及びサービス間の認証認可",
    "abstract": "マイクロサービス型システムのセキュリティを高める上で、サービスやそれを構成するインスタンスの粒度での細かな認証認可は重要です。しかし、それには実装や管理に多くの手間がかかります。そこで、本講演ではOSSのサービスメッシュ実装であるIstioを用いて、アプリから透過的に認証認可を行う方法を紹介します。具体的にはmTLSを用いたサービス間認証、外部認証基盤を用いたユーザ認証、IstioとOpen Policy Agent(OPA)との連携方法、Keycloak連携によるWeb GUIのユーザ認証等を解説します。",
    "speakers": [
      {
        "id": 1294,
        "name": "Takaya Ide"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:05:00.000+09:00",
    "endTime": "2000-01-01T13:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ido_kara_deru/secure-microservices-with-istio",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1445,
    "conferenceId": 6,
    "trackId": 31,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1445/13/playlist.m3u8",
    "title": "SBOMを利用したソフトウェアサプライチェーンの保護",
    "abstract": "近年、サプライチェーンセキュリティが大きな話題となっており、著名なnpm, rust, pythonパッケージに対する攻撃も観測されています。これらの対策には自社で開発したソフトウェアだけではなく、依存するOSSを含めた可視化と脆弱性検知が必要になります。\r\n本講演では、プロダクトを安全に開発/運用するための方法として、SBOMと呼ばれるソフトウェアの可視化方法についてご紹介します。SBOMとは何か、どのような課題を解決するのかを紹介した上で、SBOMを生成し脆弱性検知する方法をデモを交えて説明します。",
    "speakers": [
      {
        "id": 1297,
        "name": "Masahiro Fujimura"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:05:00.000+09:00",
    "endTime": "2000-01-01T13:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1446,
    "conferenceId": 6,
    "trackId": 29,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1446/16/playlist.m3u8",
    "title": "CSI Driverを開発し自社プライベートクラウドにより適した安全なKubernetes Secrets管理を実現した話",
    "abstract": "弊社ではシークレットの管理を自社のSecrets Managerによって管理しており、ほとんどの社内プロダクトはこれと連携しています。Secrets Managerと自社Kubernetes基盤との連携は最適とはいえず、Kubernetes上のアプリケーションからシークレットを利用する際の、利便性の悪さや、シークレット取得のための認証情報の管理にリスクがあるなどの問題がありました。\r\n\r\n従来の解決策として、External Secrets OperatorやSecrets Store CSI Driverなどがありますが、エコシステムに組み込むにあたってSecrets Store CSI Driverに強みがあり採用しました。そしてKubernetes環境により適した安全なシークレット管理を実現するため、自社のセキュリティ基盤と連携しプラットフォームレベルでシークレットの提供がサポートができるよう設計・実装を行いました。\r\n\r\n本セッションではSecrets Store CSI Driverの仕組みや背景、全体的なアーキテクチャ、具体的にどういった取り組みを行ったか、現状での問題点などを共有することでアプリケーションに対して安全にシークレットを配布するための技術を紹介します。",
    "speakers": [
      {
        "id": 1298,
        "name": "Katsuya Yamaguchi"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:05:00.000+09:00",
    "endTime": "2000-01-01T18:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1450,
    "conferenceId": 6,
    "trackId": 31,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1450/15/playlist.m3u8",
    "title": "サイバー攻撃を想定したクラウドネイティブセキュリティガイドラインとCNAPP及びSecurity Observabilityの未来",
    "abstract": "クラウドネイティブのセキュリティはレイヤーごとに考え、規定・実行・維持する必要があります。ワークロードがガイドラインどおりに継続実行されているか確認する必要がありますが、現状は脅威まで検討された可視化とはなっていません。\r\n本セッションでは、デファクトスタンダードなセキュリティの枠組みと脅威情報でガイドラインを作成した取り組みを紹介し、従来のCSPM/CWPPを越えたCNAPPとは何か、Security Observabilityをどうすべきかの一考察をご説明します。",
    "speakers": [
      {
        "id": 1303,
        "name": "Nobuaki Sako, Shun Yoshie"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:05:00.000+09:00",
    "endTime": "2000-01-01T17:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/syoshie/saibagong-ji-woxiang-ding-sitakuraudoneiteibusekiyuriteigaidoraintocnappji-bisecurity-observabilityfalsewei-lai",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1451,
    "conferenceId": 6,
    "trackId": 30,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1451/1451.m3u8",
    "title": "実践 SpiceDB - クラウドネイティブ時代をサバイブできるパーミッション管理の実装を目指して",
    "abstract": "権限体系の設計や、認可処理の実装は往々にして複雑であり、とりわけ疎結合なアーキテクチャにおける複雑性はひとしおです。この課題を乗り越え、クライドネイティブ時代に耐える認可システムを実現するための手法としてOSS「SpiceDB」を詳解します。とりわけ、(1)SpiceDBスキーマ設計のベストプラクティスや、(2)Goコード生成器の実装等を通した実装上のベストプラクティス、(3)実運用により見えてきた採用時の注意点など、未だ世界的に報告例の少ない情報もシェアできればと思います。",
    "speakers": [
      {
        "id": 1304,
        "name": "Takashi Yoneuchi"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:05:00.000+09:00",
    "endTime": "2000-01-01T18:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1461,
    "conferenceId": 6,
    "trackId": 30,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1461/14/playlist.m3u8",
    "title": "eBPFで実現するコンテナランタイムセキュリティ",
    "abstract": "eBPFはLinuxカーネルが提供する機能の一つで、近年、ネットワークやObservabilityといった文脈で注目を集めています。本セッションでは、セキュリティの観点から、eBPFを利用することで実現できることについて整理した上で、コンテナランタイムセキュリティを実現する具体的なeBPFツールとしてFalco、Tracee、Tetragonを紹介します。",
    "speakers": [
      {
        "id": 1313,
        "name": "TERAOKA Keisuke"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:05:00.000+09:00",
    "endTime": "2000-01-01T15:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://dev.classmethod.jp/articles/cnsec2022-container-runtime-security-with-ebpf/",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1462,
    "conferenceId": 6,
    "trackId": 31,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cnsec2022/talks/1462/17/playlist.m3u8",
    "title": "AWS Security Hubの警告数”34,326”から始めたクラウドセキュリティ対策",
    "abstract": "2021年の夏に完了したメインサービスのオンプレ環境からAWSへのリフトシフト案件に一息ついたあと、私たちは次のステップとしてクラウドセキュリティの改善を進めることにしました。\r\nAWSエンタープライズサポートの力も借りつつ、第一歩として現状の可視化を行うためにAWSの各種セキュリティサービスを有効化してAWS Security Hubに集約して可視化したところ、検出されたのはなんと 34,326 もの数。本セッションでは私たちが検出した膨大な警告をどのように対策したのか、よくありそうな事例にパターン化してお伝えしたいと考えています。",
    "speakers": [
      {
        "id": 1314,
        "name": "Yukiya Hayashi/Shinichi Okamoto"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:05:00.000+09:00",
    "endTime": "2000-01-01T18:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://www.docswell.com/s/8979015797/57M87Z-2022-08-08-200012",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "オンライン登壇"
  },
  {
    "id": 1466,
    "conferenceId": 6,
    "trackId": 29,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1466/1466.m3u8",
    "title": "GitHub、Azure、Defenderで実現するDevSecOpsワークフロー",
    "abstract": "マイクロサービスアーキティクチャの採用、コンテナでの開発、運用が盛り上がる中で、セキュリティという側面も当然の事ながら考える必要があります。\r\nこのセッションでは、Azure ADを中心としたゼロトラスト環境を軸に、GitHub、Microsoft Defender、Azure Kubernetes Serviceなどを組み合わせ、セキュアなコードの維持、コンテナ環境の維持、稼働環境、開発環境の維持、アクセルコントロールを、どのように構成して、DevSecOpsを進めるのか？について、開発のワークフローに沿って、ご紹介します。",
    "speakers": [
      {
        "id": 1320,
        "name": "Kazumi Hirose"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:05:00.000+09:00",
    "endTime": "2000-01-01T14:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1467,
    "conferenceId": 6,
    "trackId": 30,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1467/1467.m3u8",
    "title": "Kubernetes ワークロードのセキュアな実行と開発者向けセキュリティツール Snyk の活用",
    "abstract": "リリースの効率化やオートスケールによる安定運用を可能にする Kubernetes は、クラウドネイティブアプリケーションの運用環境として普及を続けています。一方でそのメリットの裏側には、アプリケーションの脆弱性も効率よくスケールしてしまうリスクが伴います。K8S 設定ミスや、コンテナのビルドを通じて混入する脆弱性の対策について、特に開発者用ツール Snyk によるシフトレフト実現と自動化に焦点を当てて説明します。",
    "speakers": [
      {
        "id": 1321,
        "name": "Toshi Aizawa"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:05:00.000+09:00",
    "endTime": "2000-01-01T16:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1468,
    "conferenceId": 6,
    "trackId": 31,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1468/1468.m3u8",
    "title": "セキュアにE2Eテストを実行するmablとCI/CD",
    "abstract": "mablはE2Eテストを開発ライフサイクルのあらゆるステージで実行できるようにするローコードテスト自動化プラットフォームを提供しています。セキュアな環境と豊富なインテグレーション機能でCI/CDパイプラインにE2Eテストを組み込み、より頻繁に、チーム全体でエンドユーザーの体験を向上させるmablの機能についてご紹介いたします。",
    "speakers": [
      {
        "id": 1322,
        "name": "Eugene Choe"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:05:00.000+09:00",
    "endTime": "2000-01-01T16:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1469,
    "conferenceId": 6,
    "trackId": 30,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1469/1469.m3u8",
    "title": "HashiCorp道で考える、クラウドネイティブの本質を捉えたセキュリティとは？",
    "abstract": "セキュリティって、難しいですよね。ましてやクラウドネイティブなセキュリティって一体何だろうって、悩んでしまうことも多いんじゃないかと思います。色々なセキュリティプロダクトを導入するも「本当にこれでいいんだろうか？」という不安が拭えない人もいるでしょう。それは、クラウドネイティブの本質に迫れていないからかもしれません。\r\nそんな人たちにご紹介したいのが、HashiCorp道(The Tao of HashiCorp)です。TerraformやVaultといった人気のOSSを開発しているHashiCorpですが、プロダクトデザインの基礎として用いている考え方です。\r\n本セッションでは、クラウド時代に合わせて誕生したHashiCorpの哲学を理解し、本質を捉えたセキュリティ対策を行えるよう解説していきます。",
    "speakers": [
      {
        "id": 1323,
        "name": "Kazuto Kusama"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:05:00.000+09:00",
    "endTime": "2000-01-01T14:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1470,
    "conferenceId": 6,
    "trackId": 31,
    "videoPlatform": null,
    "videoId": "https://dreamkast-ivs-stream-archive-prd.s3.amazonaws.com/medialive/cnsec2022/talks/1470/1470.m3u8",
    "title": "クラウドネイティブアプリケーション保護プラットフォームによる 脅威検知とコンテナWAFによるセキュリティ対策",
    "abstract": "DXを支えるアプリケーション開発と配信は、より一層クラウドネイティブインフラ上で実行されています。\r\nクラウドネイティブ環境の複数ポイントを狙った洗練された攻撃を想定した場合、\r\nインフラレイヤーからアプリケーションまでのセキュリティ保護が重要となります。\r\n\r\nクラウドネイティブ環境の各レイヤーの脅威をプロアクティブに検出し、\r\nより高度なセキュリティ対策を実現する仕組みとして、F5 が提供する\r\nThreat Stack Cloud Security PlatformとNGINX App Protectをご紹介します。",
    "speakers": [
      {
        "id": 1317,
        "name": "Takaaki Suzuki / Tomonori Takada"
      }
    ],
    "dayId": 16,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:05:00.000+09:00",
    "endTime": "2000-01-01T14:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "",
    "onAir": false,
    "documentUrl": "https://interact.f5.com/rs/653-SMC-783/images/CloudNative-Security-Conference_F5-NGINX-202219.pdf",
    "conferenceDayId": 16,
    "conferenceDayDate": "2022-08-05",
    "presentationMethod": "事前収録"
  }
]
