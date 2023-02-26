import type { Talk } from "../types/talk";

export const CNDT2021Talks: Talk[] = [
  {
    "id": 1181,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1181/playlist.m3u8",
    "title": "Kubernetesネットワーキング初級者脱出ガイド -基本から最新動向まで-",
    "abstract": "Kubernetesの仕組みを理解する上でネットワークの部分は忘れることができない要素です。しかし、オンプレ・パブリッククラウドなどで活用されるKubernetesでネットワークがどのような仕組みで実現されているかを包括的・詳細に説明された日本語の資料は今までありませんでした。\r\n今回はCNCFアンバサダーである太田から、Kubernetes初級者を脱出するために必要なネットワークの知識や、パブリッククラウドやアップストリームのKubernetesで利用可能なさまざまな仕組みや、アップストリームでの取り組みについて基本から解説します。",
    "speakers": [
      {
        "id": 1140,
        "name": "Kohei Ota"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/inductor/kubernetes-networking-beginners-guide",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1183,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1183/1183.m3u8",
    "title": "「DevSecOpsとは？」の一歩先、複数の導入経験から語るセキュリティエンジニアの本音",
    "abstract": "DevSecOpsという言葉は、その実例の少なさと反して、聞く機会は多いではないでしょうか。「DevSecOpsとは？」を概念上は知っていても、具体的に何から取り組めばいいのか、どんな構成があるのか、分かっている方は多くはないと思います。複数のクライアントへの導入経験を元にしたDevSecOpsに関する本音から、アプローチ、導入後に必ずつまずくところ等、ご紹介できたらと思います。",
    "speakers": [
      {
        "id": 1142,
        "name": "Masaya Tahara"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/MasayaTahara/devsecops-cloudnative-days-tokyo-2021",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1184,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1184/1184.m3u8",
    "title": "自作して学ぶKubernetes scheduler入門",
    "abstract": "Kubernetesのコンポーネントの内、PodをどのNodeで起動するかという事を決定するschedulerというものが存在します。このトークでは実際に動作する小規模なschedulerを段階的に実装していく様子から、schedulerはどのようにPodをスケジューリングしているのか、どのように拡張性を提供しているのか等を内部実装の理解を通して学んでいきます。対象者は、(簡単にでも)Kubernetesの使用をした経験のある方としますが、schedulerに関する知識は不問です。",
    "speakers": [
      {
        "id": 1143,
        "name": "Kensei Nakada"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/sanposhiho/zi-zuo-sitexue-bukubernetes-schedulerru-men",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1186,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1186/1186.m3u8",
    "title": "20,000+行のmanifestをリファクタリングして分かったKustomizeの美しきアーキテクチャと拡張性",
    "abstract": "みなさんはKubernetesのmanifest管理のために、どんなツールをお使いでしょうか。\r\n\r\nmanifestファイルをいかに効率的かつ美しく管理するか…、我々yamlエンジニアたちはいつも頭を悩ませています。\r\nそんな中弊チームは、Kustomizeフル活用することによって、 20,000+行のmanifestファイルを可読性、保守性を高めつつ約60%削減することに成功いたしました。\r\n\r\nKustomizeは一見すると少し独特な使い勝手のmanifes管理ツールですが、一貫した設計思想、豊富な差分生成機能、自由に拡張可能なプラグイン機構を備えた、とても優秀なツールです。\r\nこのセッションでは、そんなKustomizeの魅力を、大量のmanifestをリファクタリングする中で得た知見とともにご紹介いたします。\r\n\r\n■こんなことを話します\r\n- Kustomizeのアーキテクチャと思想\r\n- \"overlay\"ディレクトリはもう卒業！ディレクトリ構成の考え方\r\n- プラグインで無限の柔軟性を手に入れろ\r\n- クラスタを止めずにmanifestをリファクタリングするには",
    "speakers": [
      {
        "id": 1146,
        "name": "Hiroshi Hayakawa"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1187,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1187/playlist.m3u8",
    "title": "乗っ取れコンテナ！！〜開発者から見たコンテナセキュリティの考え方〜",
    "abstract": "コンテナ基盤を利用する開発者として、基盤上にデプロイするコンテナのセキュリティについてどの程度意識していますか？\r\n世の中の一般的なプラクティスをなんとなく知っていても、実際にリスクを実感し、対策できているという例はまだまだ多くないのではないでしょうか。\r\n本セッションではKubernetes上にコンテナとしてデプロイしたWebサイトに対する実際の攻撃デモを通じて、コンテナを扱う開発者目線でどのようなセキュリティリスクを意識すべきか、どのようにそれらに対処していくべきかをコンテナのイメージや起動設定を中心に一緒に考えていければと思います。",
    "speakers": [
      {
        "id": 1148,
        "name": "Keita Mochizuki"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/mochizuki875/container-dev-security",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1189,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1189/1189.m3u8",
    "title": "安心・安全なCluster移行で実現するKubernetesのバージョンアップ",
    "abstract": "Kubernetesのバージョンアップの方法はいくつかありますが、我々のチームはCluster移行を選択しました。Cluster移行には運用上のメリットがある一方、考慮しなければいけないポイントもあります。本講演では、何故Cluster移行を選択したのか、またCluster移行時に生じる課題をどのような仕組みで解決しようとしているかについてお話したいと思います。",
    "speakers": [
      {
        "id": 1149,
        "name": "Shota Shirayama"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/sshirayama/kubernetes-upgrade-with-cluster-migration",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1191,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "",
    "title": "【中止】The Twelve-Factor App in Modern Age - Cloudネイティブ時代に生きるHerokuの哲学",
    "abstract": "現在、Herokuの創業者であるAdam Wiggins が提唱した The Twelve-Factor Appは、Webアプリケーションの設計やクラウドインフラの構築、運用する人々に広く知られ実践されています。発表者が在籍していたHerokuはこの原理原則をプラットフォームサービスという形で実装した一つの例です。\r\n本講演では、アプリケーションコンテナの利用が一般的でなかった時代に、サービスを通じて新しいパラダイムを広めたHerokuのアーキテクチャと、あれから10年近くが経過した現在において、クラウド環境・サービスを活用したあるべきTwelve-Factor Appのデザインについて考えます。",
    "speakers": [
      {
        "id": 1151,
        "name": "Ayumu Aizawa"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1192,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1192/playlist.m3u8",
    "title": "なぜ我々はクラウドゲーミング基盤をKubernetesに移行したのか",
    "abstract": "我々Blackは、OOPartsというクラウドゲーミングサービスを提供しています。2021年6月1日に、「Black Game Streaming Engine v2」を公開し、以前のアーキテクチャと比較してより低コスト、より低遅延、より高速なゲーム起動を実現させました。\r\n\r\n以前は1ユーザーのプレイに1インスタンスを割り当てるものとなっていましたが、「Black Game Streaming Engine v2」ではKubernetesとAgonesを使用したアーキテクチャとなっており、完全なるコンテナ化を実現させています。\r\n\r\nこの発表では、以前のアーキテクチャにあった課題と、それをKubernetesとAgonesによってどう解決させたのか、移行にあたっての課題、今後の展望などについて話します。",
    "speakers": [
      {
        "id": 1152,
        "name": "Yusuke Nakamura"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://note.com/unasuke/n/n861b9a5f1ebb",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1194,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1194/1194.m3u8",
    "title": "Kubernetesリソースの誤削除からの保護: PV, PVC, Secret, そして…",
    "abstract": "Kubernetesのリソースを誤って削除したことはあるでしょうか？それは、本番環境で？復旧できましたか？この発表は、このような苦い経験がある方・これからありそうな方に向けたものです。\r\n既存のPersistentVolume・ PersistentVolumeClaimの保護の仕組みから、今、コミュニティで議論中の、一般的なリソースの保護の仕組み、その仕組みのSecretの保護への適用などを紹介いたします。\r\nリソースの依存関係による削除順の話だけでなく、ユーザが重要であると設定したリソースの保護の話も含みます。一部は現在コミュニティで開発中の機能ですが、現状の機能でできること、開発中の機能を使うことによる、メリット・デメリットもお伝えいたします。",
    "speakers": [
      {
        "id": 1153,
        "name": "Masaki Kimura"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1196,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1196/1196.m3u8",
    "title": "「Small is beautiful 」 KubernetesにUnixの哲学を ~ Carvelの紹介 ~",
    "abstract": "Kubernetesのエコシステムが拡大にするに伴い、様々なツールが氾濫しています。高機能すぎるOSSや機能の重複に伴い、検証や比較に時間をとられすぎてしまい悩んでいないでしょうか？そんな中、Small is beautifulというUnixの哲学をもとに作られたOSS群Carvelが登場しました。あくまで一つの事柄に特化しそれを上手にやる、これに長けたOSS群であり、GitOpsや継続的デプロイメントを支援するツールが数多く登場しています。\r\n\r\nCarvelが既存のHelmやArgoCDといったツールと何がちがうか？その魅力をこのセッションで紹介します。",
    "speakers": [
      {
        "id": 1154,
        "name": "Machi Hoshino"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1198,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1198/1198.m3u8",
    "title": "Kata Containers - secure container beyond secure",
    "abstract": "Kata Containersは、安全なコンテナランタイムを構築するためのオープンソースプロジェクトです。 このトピックでは、最初にKata Containersとは何か、およびDocker/runcの違いを紹介します。 一般に、Kata Containersはセキュアコンテナと呼ばれますが、実際、Kata Containersはruncよりも安全であるだけでなく、その強力な分離機能により、runcでは困難なより多くの価値をもたらすことができます。 第2部では、Kata Containersの分離の詳細（リソースの分離、パフォーマンスの分離、障害の分離）と、Ant GroupでKata Containersを大規模に実行する方法について説明します。",
    "speakers": [
      {
        "id": 1156,
        "name": "Liu Bin"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/liubin/kata-containers-secure-container-beyond-secure",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1201,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1201/1201.m3u8",
    "title": "クラウドネイティブが強み！イマドキの銀行システムの姿",
    "abstract": "今年５月に開業したみんなの銀行。我々が目指す先は、宇宙一お客様のことを考える銀行であり、そもそも今の時代において、『銀行って何？』から再定義することを目的として設立しました。システムも従来の重厚長大なシステムに捕らわれず、「今の時代」に最適な組み合わせを選択した結果、フルクラウド銀行システムが誕生しました。その姿と今後の組織の展望をお話しします。",
    "speakers": [
      {
        "id": 1159,
        "name": "Masaaki Miyamoto"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:00:00.000+09:00",
    "endTime": "2000-01-01T12:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1202,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1202/1202.m3u8",
    "title": "ステートフルアプリ on Kubernetesの現在と今後の展望 〜ステートフルの苦手意識を吹っ飛ばそう〜",
    "abstract": "もう、コンテナがステートフルアプリが苦手という時代は終わりました。\r\nしかし、まだまだ苦手と思い込んでいる人も少なからずいます。\r\nそこで、本講演では、この苦手意識をなくすためにKubernetesにてステートフルアプリを実行するにあたり、データを保持するために重要な鍵となる永続ボリュームを中心に、提供機能やアーキテクチャ、運用に向けた注意ポイント、今後の展望について紹介します。",
    "speakers": [
      {
        "id": 1160,
        "name": "Yukinori Sakashita"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:20:00.000+09:00",
    "endTime": "2000-01-01T12:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ysakashita/sutetohuruapuri-on-kubernetesfalsexian-zai-tojin-hou-falsezhan-wang",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1203,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1203/1203.m3u8",
    "title": "Mableの高速開発を支えるプラットフォーム",
    "abstract": "三菱UFJ銀行は安心できるお金の自動管理アプリ【Mable（メイブル）】を2020年9月にリリースしました。当サービスでは、実行環境としてAWSやOpenShiftなどを活用しています。活用にあたってのビジネス面、システム面の背景や実現したこと、設計ポイントや今後のロードマップについてお話しします。",
    "speakers": [
      {
        "id": 1161,
        "name": "Shuhei Senno"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:20:00.000+09:00",
    "endTime": "2000-01-01T12:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1204,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1204/1204.m3u8",
    "title": "世界中のユーザーが快適に利用できるクラウドネイティブなシステムを目指して",
    "abstract": "「家族アルバム みてね」は2015年4月にサービスを開始し、2021年3月に利用者数が1,000万人を突破しました。世界150か国以上でサービスを提供し、写真・動画の月間アップロード枚数は、2020年12月時点で1.4億枚に達しています。2020年から2021年にかけては、7つのサービス・機能をリリースし、3つのサービス・機能をアップデートしました。本セッションでは、このように新機能の開発スピードの加速や、海外での利用者数も伸びている中で、SREチームが取り組んできたKubernetes(Amazon EKS)への移行と運用、Observabilityの実現について紹介します。",
    "speakers": [
      {
        "id": 1162,
        "name": "Isao Shimizu"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:00:00.000+09:00",
    "endTime": "2000-01-01T12:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/isaoshimizu/number-cndt2021",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1206,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1206/playlist.m3u8",
    "title": "クラウド時代のアプリケーションログ埋め込みと活用法",
    "abstract": "クラウド上のバックエンドアプリケーションの開発者を対象に、リリース後のトラブルシューティングで泣かないための、アプリケーションログの埋め込みと検索について解説します。また実運用での事例についても紹介します。",
    "speakers": [
      {
        "id": 1164,
        "name": "Hideo Fukumori"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1207,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1207/1207.m3u8",
    "title": "Kubernetesオペレータのアンチパターン＆ベストプラクティス",
    "abstract": "サイボウズではMOCO（MySQLオペレータ）やTopLVM（CSIプラグイン）をはじめとする数多くのカスタムコントローラやオペレータを開発し、RookやVictoriaMetrics Operator, ECKなどサードパーティ製のオペレータを含め、本番環境で運用しています。\r\nそれらの開発や運用の中で様々な問題に直面し、安定運用の維持に必要な対応をおこなってきました。\r\n本発表ではこれまでの経験からチームが学んだKubernetesオペレータのアンチパターンとベストプラクティスを紹介します。",
    "speakers": [
      {
        "id": 1165,
        "name": "Akihiro Ikezoe"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1208,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1208/1208.m3u8",
    "title": "How We Harden Platform Security at Mercari",
    "abstract": "At Mercari, we've been building internal development platform top on Kubernetes and Cloud native ecosystem for more than 3 years. The history of building the platform is the history of security hardening. In this session, I'm going to introduce what kind of security hardening we've implemented from basic k8s manifest security policy enforcement to supply chain integrity checking, IaC automation security, and zero-touch-based access automation. ",
    "speakers": [
      {
        "id": 1169,
        "name": "Taichi Nakashima"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:40:00.000+09:00",
    "endTime": "2000-01-01T13:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1209,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1209/1209.m3u8",
    "title": "KubeCon NAの振り返りー最新のクラウドネイティブ界隈の状況をお伝えします。",
    "abstract": "10月に行われたKubeCon NAに現地で取材した情報を共有したいと思います。可能であれば複数人でラウンドテーブル的な座談会にできればと思います。",
    "speakers": [
      {
        "id": 1170,
        "name": "Yasuyuki Matsushita"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/1nIYBM4vHxG8Mq4Ju4BsEu6uN4ZaOcqphSljZJhpZ7x0/edit?usp=sharing",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1210,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1210/1210.m3u8",
    "title": "Kubernetes Cost Optimization（知っておきたいコンテナコスト最適化技術）",
    "abstract": "大規模な業務システムでもKubernetesを活用したコンテナ基盤を運用する事例が増えてきました。Kubernetesをうまく活用することで、クラウドネイティブな開発手法を取り入れつつ柔軟なインフラ構成を取ることで、システム要件に応じたコスト削減が実現できます。ただし、アプリケーションを安定稼働させつつコンピューティングリソースを最適化するためには、Kubernetesのしくみだけでなく、アプリケーション観点での考慮事項やクラウドの提供機能についても把握する必要があります。\r\n\r\n本セッションでは、Kubernetesを活用したシステムのコストを最適化するポイントとして大規模映像解析ソリューション「Vision Data+」の開発を通して得たNode Pool/HPA/Cluster Autoscaler/Spot Instance/Pod Disruption Budget/KEDAや、リソース/コストの監視・ガバナンスとポリシー設定など、気になるコンテナコスト最適化のあれこれをご紹介します。 ",
    "speakers": [
      {
        "id": 1166,
        "name": "Shoichi Meguro/Shiho Asa"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/shihoasa/kubernetes-cost-optimization",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1211,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1211/playlist.m3u8",
    "title": "チームで作ってメンテするカスタムコントローラ",
    "abstract": "Kubernetesのカスタムコントローラ、作ってますか？\r\nこの手の開発は慣れている人に任せてしまったり、特定の人しかメンテナンスできない状態になってしまっていたりしませんか？\r\n\r\n私たちのチームは、元はカスタムコントローラ開発どころかgolangでのコーディング経験もないメンバーが大半だったのですが、メンバー間で開発の分担や知識共有を適宜行うことで今では全メンバーが開発およびメンテナンスができる状態になっています。\r\nこれにより自動化できると思ったら積極的にコントローラ開発を行うチームの体制が出来上がり、K8sクラスタの運用コスト低減に繋げられています。\r\n\r\n本セッションでは私たちがカスタムコントローラ開発においてどのように作業を分担・知識共有を行ないチーム全体でカスタムコントローラ開発の理解を深められたかをお話させていただこうと思います。\r\n皆さんのチームの参考になりましたら幸いです。",
    "speakers": [
      {
        "id": 1171,
        "name": "Hiroki Katsuta"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1212,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1212/1212.m3u8",
    "title": "クラウドネイティブ × 持続可能なセルフサービス型データ分析ジョブプラットフォームの設計プラクティス",
    "abstract": "リクルートにおけるデータ活用の多様化とデータによる意思決定を加速させるためには、それを支える汎用的なデータプラットフォームが必要です。これらを実現するために我々のチームではセルフサービス型のジョブプラットフォームを開発・運用しています。セルフサービス型ジョブプラットフォームとは、プラットフォーム開発者を介することなく、データサイエンティストやデータプランナーが自由にデータを処理するためのジョブを開発・運用できるようにするための社内向け PaaS です。本セッションでは基盤の安定性と開発効率・データ活用のアジリティを高める設計思想と GoogleCloud/Kubernetes/ApacheAirflow2 などを利用した実装詳細、運用知見をご紹介します。",
    "speakers": [
      {
        "id": 1172,
        "name": "Koji Suganuma"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1238,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1238/playlist.m3u8",
    "title": "Argo CD Deep Dive",
    "abstract": "Argo CDについて公式のdocumentにかかれている以上に詳細なアーキテクチャ、注意事項などについて\r\nコードリーディングを通して分かったことを解説します。\r\nセッションでは以下の２つを行います\r\n1. Argo CD自体の紹介とアーキテクチャについて解説\r\n  - Argo CDを実際にstaging/production運用するための構成についても触れます\r\n3. Argo CDのいくつかのAPI EndpointをとりあげてArgoCDの動作の流れを紹介\r\n  - ついでにArgoCDのコードリーディングする際の勘所もお伝えします",
    "speakers": [
      {
        "id": 1174,
        "name": "Shunki Fujiwara"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ssuser4fddce/argo-cd-deep-dive",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1242,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1242/playlist.m3u8",
    "title": "クラウドネイティブ時代の大規模ウォーターフォール開発",
    "abstract": "アジャイル開発の手法は日本でも徐々に浸透しつつありますが、大規模な開発プロジェクトにおいてウォーターフォール開発はまだ主流派です。昨今はアジャイル開発のプラクティスを取り込んで効率化を目指す動きも活発になってきていますが、様々な障壁が待ち構えており困難を極めることも少なくありません。本セッションでは、大規模ウォーターフォール開発プロジェクトにけるCI/CD適用における障壁や回避策、ブランチ戦略の立て方の勘所を紹介します。",
    "speakers": [
      {
        "id": 1177,
        "name": "Ryo Sugahara / Yasutaka Sugamura"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/nttdata-tech/cloud-native-waterfall-development-cndt2021-nttdata",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1243,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1243/1243.m3u8",
    "title": "CiliumによるKubernetes Network Policyの実現",
    "abstract": "KubernetesではPodに関する通信をNetwork Policyと呼ばれるリソースを用いて制御することができます。\r\n本講演ではこのNetwork Policyの説明をした後、CNIプラグインの一つであるCiliumを取り上げ、Network Policyの拡張であるCilium Network Policyについて、その機能やeBPFを活用した内部の実装について紹介します。",
    "speakers": [
      {
        "id": 1179,
        "name": "Tomoki Sugiura"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/shanpu/ciliumniyorukubernetes-network-policyfalseshi-xian-cndt2021",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1244,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1244/playlist.m3u8",
    "title": "Kubernetesコントローラーを「手軽に」自動テストする",
    "abstract": "Kubernetesのカスタムコントローラーを使って、さまざまな自動化に取り組んでいると思います。\r\nところが、作成したコントローラーはクラスタなしでは動作しないので、自動テストを実装するのが難しくなります。\r\n開発時から導入でき、CI上でも簡単に利用できるコントローラーの自動テストの手法について提案します。\r\n対象者は、Kubernetesコントローラーをこれから書きたい方や、\r\n普段コントローラーを開発しているが、自動テストを活用できていない方です。\r\n",
    "speakers": [
      {
        "id": 1180,
        "name": "Ryota Yamada"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1245,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1245/1245.m3u8",
    "title": "VS Codeで実践！Kubernetes上のアプリのデバッグ実行手法",
    "abstract": "Kubernetes上で複数のマイクロサービスが協調動作する環境が一般的になってきました。その環境上でしか動作しないアプリケーションを、開発時のようにステップ実行してデバッグすること（以下、デバッグ実行）を諦めている方も多いと思います。VS Codeでは、Kubernetes上でアプリケーションをデバッグ実行する拡張機能が複数公開されています。本セッションでは、以下の3つのデバッグ実行の手法について、方法とその制約を解説、実演します。\r\n\r\n- 拡張機能『Cloud Code』を使う\r\n- kubectl port-forward を使う\r\n- 拡張機能『Bridge To Kubernetes』を使う\r\n\r\nただし、本セッションでも本番環境のコンテナを直接デバッグ実行する方法については触れません。開発、ステージング環境など、ある程度構成を変更可能な環境を対象とします。",
    "speakers": [
      {
        "id": 1181,
        "name": "Atsushi Morimoto"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:40:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://docs.google.com/presentation/d/e/2PACX-1vQrPVZs-sjf-SFI-IepshSh3L2jfvJEXg-o2XhSdZT076GxeXICotPF4skzriLfcUzL07hvcOlRKI14/pub?start=false&loop=false&delayms=3000",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1246,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1246/playlist.m3u8",
    "title": "Amazon EKS を活用した個人開発環境の整備と自動化への取り組み",
    "abstract": "Retty 株式会社では開発者個人の開発環境を Amazon EKS 上に構築し、払い出しています。また開発に使用する開発用データベースを毎月自動的に更新する仕組みも整備しています。\r\n本セッションでは社内で広く使われている個人開発環境の概要から運用自動化の取り組みを紹介します。\r\n\r\n・個人開発環境の概要\r\n・Amazon EKS, EC2 Spot Instance の活用事例\r\n・aws-load-balancer-controller と kubernetes-ingress (nginx) の活用事例\r\n・Ansible k8s モジュールを使用した k8s リソースのプロビジョニングと開発環境払い出しの自動化\r\n・AWS Step Functions と AWS Lambda を使用した開発用データべース更新の自動化\r\n\r\nRetty の開発にあたってはメインのアプリケーション以外にも必要な API や依存する外部システムが多く存在するため、まとめて開発できる環境を Amazon EKS 上に構築し、それを開発者に払い出す形を取っています。\r\n昔は手作業が多かったですが、今では数行の PR を出すだけで環境の追加や削除が行えるようになりました。\r\n\r\n\b苦労したポイントや工夫したポイントなど幅広くお話できればと思っています。",
    "speakers": [
      {
        "id": 1182,
        "name": "YuyaKoda"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ponkio_o/cndt2021",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1250,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1250/1250.m3u8",
    "title": "eStargzイメージとlazy pullingによる高速なコンテナ起動",
    "abstract": "コンテナイメージのpullはコンテナ起動処理のうち時間のかかるもののひとつです。この問題を解決するため、pull完了を待たずにコンテナ実行を可能にする高速なイメージ配布手法「lazy pulling」と、それを実現するOCI互換イメージ「eStargz」の開発がコミュニティで進められており、Kubernetes, k3s, containerd, CRI-O, Podman, BuildKitなど様々なツールで利用可能になっています。本セッションではそれら様々なツールでのeStargz利用や仕組み、標準化議論動向に至るまで徹底的に掘り下げます。",
    "speakers": [
      {
        "id": 1178,
        "name": "Kohei Tokunaga"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1251,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1251/1251.m3u8",
    "title": "クラウドネイティブの複雑さに向き合うあなたへ",
    "abstract": "クラウドネイティブなアプローチを導入したシステムの構築にも慣れてきた頃。気がつけば存在している見知らぬリソース、増え続けるマイクロサービス、管理しきれないInfrastructure as Code、乱立するGitリポジトリ、動かないまま放置されたCI/CDパイプライン、誰も見ないモニタリングダッシュボード……。\r\n\r\n変化し続けるビジネスニーズに応えられるような、変更に強いシステムを構築していたはずが、いつの間にか複雑なものになってしまったと感じているあなたへ。本セッションでは、クラウドネイティブな実践を続けていくために大切にすべきポイントについて考えていきます。",
    "speakers": [
      {
        "id": 1186,
        "name": "TERAOKA Keisuke"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tobachi/if-you-are-facing-the-complexity-of-cloud-native",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1252,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1252/playlist.m3u8",
    "title": "Grafana Lokiで構築する1日20TBの大規模ログモニタリング基盤",
    "abstract": "LINEのPrivate CloudであるVerdaでは1日約20TBものログを集計する必要があります。\r\nこの要件に応えつつ将来的にもスケールさせられるように、我々はGrafana Lokiを活用しています。\r\nしかし、現在は決して情報が充実しているとは言えません。\r\nそこで我々が大規模環境下で運用するために検証してきた知見について、ドキュメントから読み取れない仕組みなども交えてご紹介します。",
    "speakers": [
      {
        "id": 1187,
        "name": "Hiroki Sakamoto"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/line_developers/grafana-loki-deep-dive",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1253,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1253/playlist.m3u8",
    "title": "故障・並行実行への耐性を備えるマイクロサービストランザクション",
    "abstract": "マイクロサービスで分散トランザクションを実現する場合、単純にSagaを適用して補償トランザクションを実行する以上に検討しなければいけないことがあります。\r\n本セッションでは、そもそも分散トランザクションが必要となった背景である、「分散環境の不整合」と、その原因となる故障・並行実行の理論に着目します。\r\nそして、そこから導き出される、マイクロサービスが備えるべき、機能・検討項目を紹介します。",
    "speakers": [
      {
        "id": 1188,
        "name": "Jumpei Nishitani"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1254,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1254/1254.m3u8",
    "title": "Anthos を使ったエンタープライズ向けクラスタの設計とアップグレード戦略のススメ",
    "abstract": "GCP でマイクロサービスの実行環境を構築する際、GKE + Anthos Service Mesh (ASM) の組み合わせは有力な選択肢のひとつです。 \r\nこのセッションでは、GKE + ASM によるエンタープライズ向けのクラスタ設計と、運用で避けては通れないクラスタアップグレードのプラクティスをご紹介します。\r\nGCP および サービスメッシュ (Istio) の基礎知識がある方を対象に、より上手く GKE を設計・運用するための一助となれば幸いです。",
    "speakers": [
      {
        "id": 1189,
        "name": "Masahiko Utsunomiya"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/polar3130/design-and-operations-of-gke-and-anthos-service-mesh-for-enterprises",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1256,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1256/1256.m3u8",
    "title": "EC2で稼働していたRailsアプリをECSに移行した話",
    "abstract": "2020年にEC2で稼働していたRailsアプリケーションをコンテナ化、Amazon ECSに移行して現在は運用フェーズに入っています。コンテナ管理、デプロイパイプライン、スケジュール実行、作業用コンテナなどの要素を中心に技術選定、設計、実装の観点からAWSにおけるコンテナ移行の知見を共有します。また、実際に運用して見えてきた課題、その解決策についてもお話します。",
    "speakers": [
      {
        "id": 1190,
        "name": "Hitoshi Fujita"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1257,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1257/1257.m3u8",
    "title": "COSI (Container Object Storage Interface) で広がる永続ストレージの世界",
    "abstract": "既にKubernetesを使っている方は、多かれ少なかれオンデマンドにPersistent Volumeを使われていることでしょう。\r\n本講演ではPersisten Volumeと同様にオブジェクトストレージを扱うための標準である、COSIのお話しをします。\r\nKubernetesでオブジェクトストレージのライフサイクルを管理することによって、ストレージの選択肢の広がりを感じましょう。",
    "speakers": [
      {
        "id": 1191,
        "name": "Takuya UTSUNOMIYA"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tutsunom/cndt2021-cosi",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1258,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1258/1258.m3u8",
    "title": "マイクロサービスにおける分散トランザクションライブラリ",
    "abstract": "マイクロサービスアーキテクチャにおいてマイクロサービス間のデータの整合性を保証するには、Sagaパターン等を用いる方法および分散トランザクションを用いる等の方法があります。本講演では、分散トランザクションを用いる方法の一つとして、Scalar DBと呼ばれるライブラリを用いて行う方法について、その仕組みや使い方を説明します。",
    "speakers": [
      {
        "id": 1183,
        "name": "Toshihiro Suzuki"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://go.scalar-labs.com/l/849313/2021-11-01/3ynwq",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1259,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1259/1259.m3u8",
    "title": "カオスエンジニアリングによる高信頼を目指して〜クレジットカード会社がChaosMeshを使ってみて",
    "abstract": "JCBではお客様に価値あるサービスを迅速に提供するため、Kubernetesをはじめとするクラウドネイティブ技術を用いたアジャイル開発を行っています。その一つとして昨今改めて注目を集めるカオスエンジニアリングによる信頼性向上にも取り組んでいます。本発表ではJCBがカオスエンジニアリングに取り組むに至った背景や、ChaosMeshを使ってみた知見をご紹介します。",
    "speakers": [
      {
        "id": 1192,
        "name": "Yuki Naganuma"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yu2kin9/kaosuenziniaringuniyorugao-xin-lai-womu-zhi-site-kurezitutokadohui-she-gachaosmeshwoshi-tutemite",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1260,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1260/1260.m3u8",
    "title": "インシデントレスポンスを自動化で支援する - Slack Bot で人機一体なセキュリティ対策を実現する",
    "abstract": "「障害対応で同僚とのコミュニケーションがごちゃごちゃして混乱することがる」\r\n「緊急対応のフローやマニュアルが、あるがうまく活用されていない」\r\n\r\nこんな心当たりはありませんか? \r\n\r\nGMOペパボではクラウドネイティブ化の取り組むをすすめる側、インシデント対応の自動化にも取り組んでいます。障害やセキュリティインシデント対応の初動で sssbot (内製の Slack Bot ) を呼び出し、インシデントの進行から解決、postmortem 実施までを自動でします。緊急時のコミュニケーションを支援する Slack Bot の設計・実装、インシデントレスポンスのベストプラクティス、DevSecOps を回す組織文化について ペパボの事例を紹介します。",
    "speakers": [
      {
        "id": 1193,
        "name": "Hiroya Ito"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hiboma/insidentoresuponsuwozi-dong-hua-dezhi-yuan-suru-slack-bot-deren-ji-ti-nasekiyuriteidui-ce-woshi-xian-suru",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1261,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1261/1261.m3u8",
    "title": "Towards a Stable Application Platform for IoT Devices",
    "abstract": "Software for embedded systems has been developed in a low level and monolithic way. Firmware is written by a single vendor, and typically not updated frequently. Modern IoT devices are constantly connected to the cloud, and OTA updates are possible anytime. Modern IoT devices may be customized, by 3rd parties, becoming true \"platforms\". However, the software development paradigm has not kept pace with this trend. Typical IoT devices do not have full Linux capabilities, no MMU, and thus no HW based isolation. Wasm enables the creation of truly customizable devices.\r\n\r\nOn the server/cloud side, the platforms are relatively uniform - x86 ISA and Linux OS - and the OS can be the abstraction layer. In the IoT domain, that is not the case. IoT device platforms are very heterogeneous. On the ISA side there is at least ARM (32 and 64 bit), RISC-V, Xtensa. On the OS side, there are a myriad of RTOSs. The platform abstraction must be at a higher layer. Again Wasm can be the abstraction layer for applications on such platforms.\r\n\r\nWe have created a framework and SDK for AI App development. We have benchmarked the performance on ESP32 and on ARM A7. There is a performance penalty and memory overhead vs native, but it is very much acceptable - within a factor of 2. We believe that Wasm will play a key role in IoT development.",
    "speakers": [
      {
        "id": 1194,
        "name": "Ryu Ishimoto"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "IoT / Edge",
    "onAir": false,
    "documentUrl": "https://drive.google.com/file/d/13WkkK3PCWD3OrNJ-ltOUfg9mEDb03W81/view?usp=sharing",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1263,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1263/1263.m3u8",
    "title": "ねえぺんぎんさん、Prometheusのストレージって何使えばいいの？🐧",
    "abstract": "Kubernetesやパブリッククラウドのモニタリングシステムとして、デファクトとなったPrometheus。\r\n小さな環境から大規模な環境まで利用でき、様々なエコシステムも登場して日々使いやすくなっています。\r\n\r\nしかし、そんなPrometheusの運用で課題となるのは、「ストレージ」でしょう。\r\nローカルのTSDBはなぜだめなのか？リモートストレージに最適なデータベースはなにか\r\nPrometheusのストレージにフォーカスして、様々なソフトウェアや、サービスの比較を解説します。",
    "speakers": [
      {
        "id": 1196,
        "name": "Takuma Nakagame"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1264,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1264/1264.m3u8",
    "title": "脅威モデリングで考える Kubernetes セキュリティ",
    "abstract": "システムがクラウドネイティブに移行すると、Attack Surface や攻撃手法も変化します。「どこを守るべきなのか」「どういうセキュリティ設定をすればいいのか」など、セキュリティについて悩まれた方は多いと思います。\r\nこの問題へのアプローチとして、脅威モデリングを使った潜在的な脅威の特定が有効です。本セッションでは脅威モデリングへの取り組み方の紹介や、Kubernetes クラスタの脅威モデリングを通して、そのセキュリティについて俯瞰し、具体的な攻撃手法と対策について取り上げます。Kubernetes クラスタへの攻撃手法やその対策、新規・既存サービスでの脅威モデリングの取り組み方について知りたい方にご参考になれば幸いです。",
    "speakers": [
      {
        "id": 1197,
        "name": "Kohei Morita"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/mrtc0/cloudnative-days-tokyo-2021-number-cndt2021-number-cndt2021-b",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1265,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1265/1265.m3u8",
    "title": "Kubernetesのワーカーノードを自動修復するために必要だったこと",
    "abstract": "CyberAgentではプライベートクラウド上で多数のKubernetesクラスタが稼働しており、ノードの自動修復機能を実装することで運用コストを削減しました。本発表では、似たような自動修復を実現したいオンプレミスKubernetesの運用者にむけて、KubernetesにおけるノードのNotReadyの定義から、OverlayFSで実現した再起動でディスクの変更が揮発する仕組みまで紹介します。",
    "speakers": [
      {
        "id": 1198,
        "name": "Hiroki Kawahara"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/h-otter/kubernetes-1-250593952",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1268,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": null,
    "videoId": "",
    "title": "ゲーム開発におけるクラウドネイティブな CI/CD の最新動向",
    "abstract": "今日のゲーム開発で大きなシェアを占める Unity や Unreal Engine といったゲームエンジン・ミドルウェアは、Windows ないし macOS デスクトップの GUI 開発環境を前提としたものが多く、コンテナを多用するクラウドネイティブな CI/CD とは縁遠い感覚がありましたが、時代は変わりつつあります。\r\n\r\n例えば Unity はベータ版ながら Linux 版の Editor を継続してリリースしており、コンテナ環境で CI/CD を行う事例が多く見られるようになりました。また Unreal Engine では有志による unrealcontainers.com のコンテナ環境が 8 月リリースの 4.27より公式にサポートされるなど、ベンダ自身がクラウドネイティブな開発環境の整備に力を入れてきています。\r\n\r\n本講演ではこのような業界の最新の動向を反映したクラウドネイティブなゲーム開発の CI/CD について解説します。またゲーム開発に特徴的な Windows コンテナや GPU の活用など、一般的ではないトピックについても取り上げます。\r\n",
    "speakers": [
      {
        "id": 1201,
        "name": "Takeshi Yaegashi"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:40:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1272,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1272/1272.m3u8",
    "title": "使いこなせ！Argo Workflows",
    "abstract": "Argo Workflows を使えば Kubernetes 上でパイプライン処理を手軽に構築することが可能です。本セッションでは Argo Workflows の基本的な使い方から設定すべきポイントまでを個人的な視点で解説します。また Argo Events と組み合わせた構築例も紹介し、少し複雑なケースでの Argo Workflows の使い方も解説します。",
    "speakers": [
      {
        "id": 1204,
        "name": "Makoto Hasegawa"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T19:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/makocchi/how-to-use-argo-workflows",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1275,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1275/1275.m3u8",
    "title": "レガシーなバッチ処理をB/Gデプロイメントなk8sクラスタで実現する",
    "abstract": "KubernetesのCronJobで、冪等ではないレガシーなバッチ処理を実行していませんか？\r\n\r\nDNS Routingの切り替えによるB/Gデプロイメントを採用している場合、CronJobがブルー/グリーンのどちらのクラスタでも存在することになるため、冪等ではないバッチ処理が2回実行されることになってしまいます。\r\n\r\n本セッションでは、冪等ではないCronJobがある場合でもAdmission Webhookを用いてアクティブなクラスタでのみバッチ処理を行うようにすることで、簡単にB/Gデプロイメントを実現する手法についてお話します。",
    "speakers": [
      {
        "id": 1208,
        "name": "Takeru Fukunaga"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1276,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1276/playlist.m3u8",
    "title": "Kubernetesエコシステムのバージョン追従と柔軟な管理への挑戦",
    "abstract": "Kubernetesにデプロイしたエコシステムのバージョンアップは継続的に最小限の労力で頻繁に行えていますか？\r\n\r\n複数のエコシステムのデプロイや、複数のクラスタに対するデプロイを柔軟に行えていますか？\r\n\r\nCyberAgentでは、マネージドKubernetesサービスを提供するAKEを提供しています。\r\nユーザに対して様々なカスタマイズを行った状態で、かつ最新機能が利用できる状態でクラスタを提供する必要があります。\r\n\r\nこのセッションでは私達のエコシステム管理の経験から、次の2つをトピックとして提供します。\r\n\r\n1.\r\nKubernetesのエコシステム自体を継続的にアップデートすることは重要です。\r\nその仕組みを整備し、Platformも継続的に進化させ続ける、すなわちPlatform側のCloudNative化を推進した事例を紹介します。\r\n\r\n2.\r\nAKEではエコシステムは全てGitOps + Argo CD ApplicationSet Controllerで管理する方式に変更しました。\r\nこれにより、複数のアプリケーションを個別にカスタマイズしてデプロイしたり、複数のクラスタに対してデプロイすることを可能にしています。\r\nApplicationSetについてDeepDiveしながら、柔軟なエコシステムの管理について紹介します。",
    "speakers": [
      {
        "id": 1167,
        "name": "Masaya Aoyama"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/masayaaoyama/cndt2021-amsy810",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1277,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": null,
    "videoId": "",
    "title": "【中止】記述集合論に基づく分散システムの階層的特徴付け",
    "abstract": "分散システムの仕様を厳密に記述し自動的に検査する方法論は、古くからの研究テーマである。古典的には時相論理を用いた安全性と活性による定式化が知られていたが、1993 年に Chang らによって提案された Borel 階層による特徴付けは、分散システムの直感的な挙動と数学的な概念との対応をより深く説明している点で興味深い。本講演では、どこかで聞いたような分散システムの解説に飽きてきた中上級者に向け、Chang らの元論文とその関連研究をサーベイする。",
    "speakers": [
      {
        "id": 1209,
        "name": "Cheshire Cat"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1279,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1279/1279.m3u8",
    "title": "クラウドを最大限活用するInfrastructure as Codeを考えよう",
    "abstract": "本セッションでは、Terraform、Pulumi、Kustomize、CrossplaneなどといったInfrastructure as Codeを取り巻くエコシステムを分析し、パブリッククラウドやKubernetesの力を最大限に引き出すためのツールスタックをどう組み上げていくか考察します。\r\nさらに、NTTコミュニケーションズがいくつもの本番環境で実践してきたCUE言語を使った新しい形のInfrastructure as Codeをデモンストレーションいたします。",
    "speakers": [
      {
        "id": 1210,
        "name": "Jun Makishi"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1280,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1280/1280.m3u8",
    "title": "クラウドネイティブって？",
    "abstract": "クラウドネイティブという言葉の定義を軸に、CNCF、DevOps、CI/CD、Microservice、Observabilityを、一緒に40分で整理してみませんか？その意味と手法や技術がどう関わって、クラウドネイティブを実現するのかを。",
    "speakers": [
      {
        "id": 1211,
        "name": "Yutaka Ichikawa"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/cyberblack28/what-is-cloud-native",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1281,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1281/1281.m3u8",
    "title": "Kubernetes On-premises is Hardway?",
    "abstract": "話し手は所属する企業において、Kubernetesクラスタの構築、保守を行うコマンドの開発を行っています。その内容は初期構築だけにとどまらず、アップデートや、セキュリティ面の担保まで多岐にわたります。バージョンアップの頻度が高いKubernetesにおいて、どのように日々の運用を行っているかを紹介します。",
    "speakers": [
      {
        "id": 1214,
        "name": "Kazuhiko Yamashita"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T13:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1282,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1282/1282.m3u8",
    "title": "スタンバイにおけるECS on FargateからEKS on Fargateへ移行した話",
    "abstract": "株式会社スタンバイでは、2021年5月から求人検索エンジン「スタンバイ」をEKS on Fargateへ移行するプロジェクトを進めてきました。\r\nその第一弾として一部のサービスから移行をしています。\r\nこの講演では、移行の計画、EKS on Fargateを選んだ理由、既存システムとの結合、切替方法、今後の展望などについて共有します。",
    "speakers": [
      {
        "id": 1215,
        "name": "Yoshihiro Yoshida"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/stanby_inc/sutanbainiokeruecs-on-fargatekara-eks-on-fargateheyi-xing-sitahua",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1283,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1283/1283.m3u8",
    "title": "Amazon ECSではじめるConsul Service Mesh",
    "abstract": "大規模かつ複雑化したマイクロサービスを適切に管理・統制することを目的としてネットワークレイヤーの通信障害対策やポリシーの適用が要求されるようになり、これらをサポートするために「サービスメッシュ」の概念が広まりました。\r\n\r\nこのような要求はKubernetesが動いているプラットフォームに限らず、Amazon ECSを採用したシステムでも要対応とされるケースがあり、この要件を解決する選択肢の一つとしてHashiCorp社の「Consul Service Mesh on ECS」をご紹介します。\r\n注記: 「Consul Service Mesh on ECS」はまだTech Previewなため本番環境への導入は推奨されていません",
    "speakers": [
      {
        "id": 1216,
        "name": "Yasunari Tani"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1284,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1284/1284.m3u8",
    "title": "コンテナネイティブストレージ Portworxの最新情報",
    "abstract": "2020年9月に発表された Pure Storage による Kubernetes 向けデータ統合プラットフォームである Portworx 買収は、Pure Storage にとって過去最大の買収となりました。Portworxは、米国・欧州を中心に既に100社以上の採用実績（内８０％以上が既に本番環境で運用中）を持ち、ミッションクリティカルな環境でお使い頂いております。本セッションでは、どのように大規模ミッションクリティカルなコンテナステートフル環境が実現可能か、Portworxの最新情報と合わせてご紹介させて頂きます。",
    "speakers": [
      {
        "id": 1217,
        "name": "Osamu Mizoguchi"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:40:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1285,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1285/1285.m3u8",
    "title": "マイクロサービスにおける信頼性の高い分散認証アーキテクチャ",
    "abstract": "LINEのプライベートクラウドプラットフォームであるVerdaは、LINEのエンジニアにいくつかのサービスを提供しています。 \r\n・Managed Kubernetes Cluster\r\n・仮想マシンとベアメタルマシン \r\n・これらのサービスは、Verdaの内部認証サービスであるKeystoneサービスに依存しています。LINEの重要なサービスをVerdaに移行するにつれ、Keystoneは信頼性の面で大きな課題を抱えており、2021年のはじめにはVerdaのコントロールプレーンにいくつかの深刻なサービス障害が発生しました。私たちはエンジニアとして、どうすればその信頼性を向上させることができるかを考え始めました。 \r\n\r\nこのセッションでは、以下のことを紹介します。  \r\n・認証サービスに起因するコントロールプレーン停止のケーススタディ \r\n・障害発生時のレビューで判明したアーキテクチャ上の問題点と依存関係 \r\n・依存関係の問題を解決するためのデカップリング手法 \r\n・エッジ側でのステートレス検証のためのサイドカーパターン \r\n・デカップリングの変更によるトークン問題の改善計画 \r\n\r\n※オリジナル音声の英語版はこちらです\r\nhttps://youtu.be/Wa67SMSVUQc\r\n",
    "speakers": [
      {
        "id": 1218,
        "name": "Ran Xu"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1286,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1286/1286.m3u8",
    "title": "あなたの知らない(?)クラウドネイティブ的NGINXの世界",
    "abstract": "NGINXと言えば、リバプロ(Reverse Proxy)やWebサーバとして使われている方、あるいは名前を聞いたことがある方が多くいらっしゃると思います。\r\n今回は敢えて、｢API Gateway｣｢Service Mesh｣に関連した使い方など、あまり事例を見かけない、あなたの知らない(?)クラウドネイティブ的なNGINX(関連ソフトウェア)の使い方を、デモを交えて紹介したいと思います。\r\nあなたの知っているNGINXの新たな可能性をお伝えできれば幸いです。",
    "speakers": [
      {
        "id": 1219,
        "name": "Masashi Furuya"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/CASREAL_seminar/cndt2021-casareal",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1287,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1287/playlist.m3u8",
    "title": "実践! Argo CD & Rollouts による canary release",
    "abstract": "freee の SRE チームでは、直近 2 年をかけて EC2 上で稼働するサービスのインフラ基盤を Kubernetes (AWS EKS) に移行するプロジェクトを進めてきました。一番規模の大きな freee会計も2021年7月に移行が完了し、 GitOps の CD ツールである Argo CD によるデプロイを行っています。インフラ基盤の刷新に加えて Argo CD を導入したことで、デプロイフローにかかる時間や手間の削減に繋がりました。現在はデプロイフローをより良くするために、canary release を検証中です。\r\n\r\n今回はその検証をもとに、Kubernetes 上でどのようなアーキテクチャによって canary release を実現するかについてお話しします。メイントピックとなるのは Argo Rollouts を導入する既存の CD の構成と、Argo Rollouts を本番運用するための方針及び課題です。\r\n",
    "speakers": [
      {
        "id": 1220,
        "name": "Hayato Okuma"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kumashun/practical-canary-release-by-argo-cd-and-rollouts",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1288,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1288/1288.m3u8",
    "title": "シンプルなサービスメッシュいかがですか？",
    "abstract": "皆様は日々Kubernetes上でアプリケーションの開発や運用をされておりますでしょうか？\r\nKubernetes上でデプロイされるマイクロサービス・モダンアプリケーションは今までとは異なり、\r\nAPIによる通信が多用され、またKubernetes内で様々な通信が行われるためプラットフォームの\r\n運用監視や通信制御もアプリケーションに最適なものを利用する必要があります。\r\nNGINXはそれらの課題を解決し、お客様プラットフォームにおける通信制御や運用管理を\r\nシンプル・安定に実現いただける、NGINX Service Meshを提供しております。\r\n本日はその特徴やメリット等わかりやすくお伝えしたいと思います。",
    "speakers": [
      {
        "id": 1221,
        "name": "Hiroshi Matsumoto"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1289,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1289/1289.m3u8",
    "title": "分散トレーシングの歴史、計装、そしてその活用プラクティス",
    "abstract": "コンテナ化されたマイクロサービス環境において「分散トレーシング」という言葉は聞いたことがありますでしょうか。このセッションでは分散トレーシングが注目されてきた経緯、現在における計装の選択肢、そして活用するためのプラクティスについて、オブザーバビリティ・プラットフォームの観点からご紹介します。",
    "speakers": [
      {
        "id": 1213,
        "name": "Kazunori Otani"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1290,
    "conferenceId": 4,
    "trackId": 25,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1290/1290.m3u8",
    "title": "CRDとoperatorで遊んでみる",
    "abstract": "CRD(Custom Resource Definition)とoperatorを使った k8s アプリのデプロイはすっかり一般的となりました。一方で、この仕組みを Pod 等の k8s リソース以外のものを操作することにも使えないかと模索されています。\r\n本講演では、k8s リソースと関係のない operator を作成して k8s API の可能性を探ります。\r\n",
    "speakers": [
      {
        "id": 1224,
        "name": "Toshihiro Iwamoto"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1291,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1291/1291.m3u8",
    "title": "実践：Cloud Center of Excellence を中心としたクラウド戦略",
    "abstract": "急成長を続けるVisionalグループはそれに伴う様々な成長痛を抱えていました。特に数多くのクラウド基盤をどのように安心・安全に、かつスケールする形で利用し続けるかということは、一つの大きな課題でした。\r\nこの課題を解消し、さらに成長を続けるため、「Cloud Governance」「Cloud Practice」を会社のクラウド戦略として遂行していくことは必要不可欠です。\r\n本セッションでは、CCoE (Cloud Center of Excellence) を遂行する組織を実践していく中で得たナレッジを、大胆にお話しします。",
    "speakers": [
      {
        "id": 1226,
        "name": "Keisuke Awata"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1292,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1292/playlist.m3u8",
    "title": "元エンジニアが思う「もっとこうしておけばよかった」から学ぶDevSecOps",
    "abstract": "アプリケーション開発者にとって、セキュリティに気を配るのはどのくらい当たり前なことでしょうか。今やしょっちゅう「DevSecOps」というワードを目にしますが、実践できていますか。\r\nバックエンドエンジニアからデベロッパーアドボケイトになり早1年半。今の立場で色々なことを学ぶにつれて、エンジニア時代には分からなかった「あの時もっとこうしていたら良かった」「実はあの作業にはこんな意味があったのか」という気付きにたくさん出会います。それらを元に、あるあるな課題や事例からDevSecOpsを学んでみようというセッションです。",
    "speakers": [
      {
        "id": 1225,
        "name": "Ayana Yokota"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:00:00.000+09:00",
    "endTime": "2000-01-01T13:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1293,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1293/1293.m3u8",
    "title": "NTTデータ流 エンタープライズにおけるクラウド活用の姿",
    "abstract": "NTTデータの主たる顧客層であるミッションクリティカルなエンタープライズ領域でも、クラウドやクラウドネイティブ技術の活用は急速に進んでいます。こういったミッションクリティカル・エンタプライズ領域においては、新規技術へのチャレンジと共に、厳しい非機能やレガシー対応といった課題にも直面します。\r\n本セッションでは、この両面の課題解決に向け、NTTデータにおいて取り組んでいるクラウド推進のための標準化・技術検証・人材育成の取組について紹介します。",
    "speakers": [
      {
        "id": 1227,
        "name": "Toshifumi Nishi"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1294,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "",
    "title": "CircleCI 2021年の新機能から見るCI/CDのトレンド",
    "abstract": "CircleCIは2021年に入ってからすでに60以上もの更新を重ね、またCD領域ではvamp社の買収を行いました。リクエストにお答えするための更新、CircleCIとしてCI/CDの未来像をこう考えているという更新。今後、どういった要素を自動化に取り込むことで、開発、運用、ビジネスに貢献しうるのかを「新機能」から紐解きます。",
    "speakers": [
      {
        "id": 1222,
        "name": "Masahiko Funaki"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:00:00.000+09:00",
    "endTime": "2000-01-01T13:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/mfunaki/cdfalsetorendo",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1295,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1295/1295.m3u8",
    "title": "３つのフェーズで組み立てる、オブザーバビリティ設計入門",
    "abstract": "クラウドネイティブなシステムの最大の利点は、Kubernetes に代表されるように広大なエコシステムと選択肢の多さにあります。オブザーバビリティの設計や実装も、クラウドネイティブな思想にそったアプローチが必要です。しかし、全てをオープンソースで構築するのが正解でもなく、ベンダーロックインが最適であるわけでもありません。\r\nそこでこのセッションでは、オブザーバビリティを3つのフェーズ「収集」「保管」「分析・可視化」に分けて考え、各フェーズをつなぐ仕様を eBPF や Open Telemetry などの ”オープンな標準”に合わせて設計するメリットを解説します。",
    "speakers": [
      {
        "id": 1212,
        "name": "Koji Aizawa"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T13:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1296,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1296/1296.m3u8",
    "title": "無限にスケールできるRDB(NewSQL)でやれること",
    "abstract": "スケール環境の足手まといのデータベース/ストレージ。\r\n現在、RDBを無限にスケールできるNewSQLが普及段階に入っています。\r\n世界で一番勢いのあるNewSQLであるTiDBの特長とどのように使われているかをご紹介します。",
    "speakers": [
      {
        "id": 1228,
        "name": "Hayashi Masaki"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1298,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1298/1298.m3u8",
    "title": "Cloud Native Adoption Journey",
    "abstract": "より特徴的なデジタルサービスを創造し、それをいち早くリリースする、更にそれを継続的に改善し続ける。そのための手段としてアプリケーション開発のモダナイゼーションやコンテナ・マイクロサービスの活用が拡がっています。特に金融業界では、競争の激化と変化に直面しているエンタープライズの多くで、継続的に改善し続けられる体制とプロセスの構築が求められています。そのためのアプローチは1度の変革ではなく、継続的な旅です。この “Cloud Native Adoption Journey” について、金融業界の事例を踏まえてご紹介します。",
    "speakers": [
      {
        "id": 1230,
        "name": "Takafumi Tsuchida"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:40:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://tracks.redhat.com/c/cndt21_cloudnativead?x=zQ-cum",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1299,
    "conferenceId": 4,
    "trackId": 21,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1299/1299.m3u8",
    "title": "Kubernetesで終わるな！VMwareの最終兵器、Tanzu Application Platformの全貌！",
    "abstract": "昨今、コンテナやKubernetesという言葉をどこもかしこでも聞くようになりました。\r\nしかし、みなさま本当にコンテナを本番環境で導入できていますでしょうか？実は検証環境でしか使ったことがない、というお客様も多いのではないでしょうか？\r\nKubernetesだけでは多くの課題をクリアできないことにみなさんが気づき始めました。では、我々は無駄な時間を過ごしてきたのでしょうか？\r\nVMwareでは、この状況を打開するため、Tanzu Application Platformを発表しました。このセッションでは、コンテナおよびKubernetes活用の起爆剤となりうるTanzu Application Platformの全貌をご紹介します。",
    "speakers": [
      {
        "id": 1231,
        "name": "Machi Hoshino"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1300,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1300/1300.m3u8",
    "title": "オブジェクトからブロックまで Cloud Native Application に必要なデータストレージの選択",
    "abstract": "企業のアプリケーション実行環境は パブリック/プライベート/ハイブリッドクラウドに広がり、\r\nそれらの上で、運用可能でスケーラブルなアプリケーションが求められる様になってきました。\r\nこの様な異なる環境で、シームレスなデータマネージメントを実現することは、\r\nクラウドを利用する企業において重要な課題となっています。\r\n\r\n本セッションでは ブロック/ファイル/オブジェクトストレージの特性を改めて解説し、\r\nオーケストレーター/Kubernetesとの連携、パブリッククラウド／オンプレミスとの間での\r\n相互運用性を高める手法/ONTAP ストレージOSについてご紹介いたします。",
    "speakers": [
      {
        "id": 1232,
        "name": "yasuo.ono"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1301,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1301/playlist.m3u8",
    "title": "シングルクラスターマルチテナンシーを目指しているEKS上でkubevelaの運用をしてみた",
    "abstract": "Amebaでは旧システムからの脱却のため、マルチテナントのEKSへシステムを刷新するプロジェクトが推進されています。\r\n開発者はアプリケーションをEKS上で動作させるために、kubernetesの理解やマニフェストの記述方法、コンテナセキュリティの設定など様々な知識が必要となりますが、これらの学習コストは少なくありません。\r\n本セッションではそういった課題をkubevelaを導入することによってどのように解決したかをお話します。\r\nまた、多岐にわたるamebaシステムを一つのクラスタに混在させるマルチテナント環境を実現するために工夫した点についても紹介します。",
    "speakers": [
      {
        "id": 1233,
        "name": "Koyuta Misawa / Yu Taninari"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  },
  {
    "id": 1303,
    "conferenceId": 4,
    "trackId": 24,
    "videoPlatform": "s3",
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1303_new/1303.m3u8",
    "title": "シングルテナント・マルチクラスタ vs マルチテナント・シングルクラスタ論争 決着のとき",
    "abstract": "シングルテナント・マルチクラスタか、マルチテナント・シングルクラスタか。 Kubernetes を最大限効果的に活用するにはマルチテナントが最善ですが、プロダクション環境をマルチテナントクラスタで実現するには多くの超えるべきハードルがありました。最適なマルチテナント環境のために何が必要だったのか解説するとともに、Sysdig Secure DevOps Platform を活用したコンテナ・セキュリティに対する取り組みについてもご紹介します。 \r\nーーーーーーーーーーーーーーーーーーーーーーー\r\n※本講演はSCSK株式会社によるスポンサー・セッションとなります",
    "speakers": [
      {
        "id": 1234,
        "name": "Keisuke Taguchi"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://drive.google.com/file/d/1ewzUXVdTE13YZdSifFET7huxEMk1nxC6/view?usp=sharing",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1304,
    "conferenceId": 4,
    "trackId": 22,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1304/1304.m3u8",
    "title": "ASOCやってますか？セキュリティで開発を遅らせないオーケストレーションと相関ツールの使い方",
    "abstract": "ASOCというのは“Application security orchestration and correlation”の略ですが、何のためのものかご存知でしょうか？\r\n\r\nAppSec、DevSecOpsといった掛け声に合わせて、ASTツールを導入してみても、組織全体で効果的に使えるようになっていないこともあります。それは、セキュリティ・ゲートや品質ゲートが適切に設定されていないか、セキュリティポリシーに基づいた運用ができるようになっていないからです。\r\nASOCでは、ASTツールの統合だけではなく、ポリシーに基づいた効果的なゲートの設定や運用が可能なインフラを提供します。同時に、マニュアルで実施するペンテストやリスク分析や脅威モデリング、コードレビューの結果なども取り込むことが可能です。\r\n\r\n本セッションでは、Orchestration ツールのIntelligent Orchestration、Correlation ツールのCode Dxと各種ASTツールとマニュアルテストとの統合方法について解説します。",
    "speakers": [
      {
        "id": 1235,
        "name": "Masato Matsuoka"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://www.synopsys.com/ja-jp/software-integrity/em/20211104_CloudNativeDays.html",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1306,
    "conferenceId": 4,
    "trackId": 20,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1306/1306.m3u8",
    "title": "やっぱりオンプレミスも捨てられない。ハイブリッドクラウド環境でのk8s活用術",
    "abstract": "パブリッククラウドの採用が進んでも、オンプレミス環境をいきなりなくすことはできませんが、オンプレミス環境でもk8sを活用を考えている方もたくさんいます。本セッションでは、ハイブリッドな環境でAzure Kubernetes Serviceやその他のk8s、そこで利用するアプリケーションの運用管理と上手に活用する方法をご紹介します。",
    "speakers": [
      {
        "id": 1237,
        "name": "Kei Omizo"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1307,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1307/1307.m3u8",
    "title": "Kubernetes1.23リリースに備えよ！SIOS DXエンジニアが注目する1.22の新機能",
    "abstract": "Kubernetesのアップデートは4ヶ月毎に行われます。以前の3ヶ月毎より頻度は減ったものの、それでもまだ高頻度です。\r\nそして8月4日にリリースされた1.22ですが、イベントから約1ヶ月後の12月初旬には1.23がリリースされる予定です。\r\nなので1.23に備えて、このタイミングで1.22の変更点をもう一度復習しませんか？\r\nSIOSのKubernetesエンジニア3人が気になった変更点を紹介します。全ては紹介できませんが、大きな変更点から小さな変更点まで3名別々の視点から紹介します。",
    "speakers": [
      {
        "id": 1223,
        "name": "Ryusuke Kinoshita"
      }
    ],
    "dayId": 11,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 11,
    "conferenceDayDate": "2021-11-04",
    "presentationMethod": null
  },
  {
    "id": 1316,
    "conferenceId": 4,
    "trackId": 23,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/medialive/cndt2021/talks/1316/1316.m3u8",
    "title": "APIサービスコネクティビティプラットフォームの衝撃！Kongを活用してAPIとマイクロサービスを容易かつ高速に活用しましょう",
    "abstract": "最近の新聞記事では、オープンAPIなどの取り組みにおいて海外と比べて国内の取り組みの遅れやガラパゴス化についての指摘があります。グローバル企業における最新のIT活用を推進しIT市場をより活性化しているAPIの取り組みにおいて、Kongの技術がどのようにお客さまのお役に立てるか、についてお届けします。",
    "speakers": [
      {
        "id": 1240,
        "name": "Harish Madhavan / Khairul Anuar / Junji Nishihara"
      }
    ],
    "dayId": 12,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 12,
    "conferenceDayDate": "2021-11-05",
    "presentationMethod": null
  }
]
