import type { Talk } from "../types/talk";

export const CNDT2023Talks: Talk[] = [
  {
    "id": 1961,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1961/99/playlist.m3u8",
    "title": "GitOpsで実装するK8sセキュリティ -攻撃者が考えるアタックシナリオとOSSを活用した守り方-",
    "abstract": "ビジネスシーンでのコンテナテクノロジーのユースケース増加と共にコンテナ運用の特性を巧みに利用した攻撃の観測件数が増加しています。\r\n本セッションではKubernetesを活用したコンテナ運用の中で発生した攻撃者からのアタックシナリオを再現し、クラスタ運用に従事する受講者に対してOpen Policy AgentとArgo CDを活用したGitOpsによるガバナンスセキュリティの実装例を解説します。",
    "speakers": [
      {
        "id": 1564,
        "name": "Kazuhiko Tsuji"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kzhktj_0222/gitopsteshi-zhuang-suruk8ssekiyuritei-gong-ji-zhe-kakao-eruatatukusinariotoosswohuo-yong-sitashou-rifang",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1963,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1963/90/playlist.m3u8",
    "title": "noteのKubernetes移行、ゼンブ見せます",
    "abstract": "noteでは2023年9月に本番環境の全アプリケーションがKubernetes（EKS)で稼働させることができました。私たちはただKubernetesへの移行だけではなく、長年運用されてきたレガシーインフラの課題を解決するための多くの改善を併せて実施しました。特に、アプリケーションのパフォーマンスを維持するためのロードテスト、オブザーバビリティの強化、コンテナをデプロイするためにオートスケールするGithubActionsランナーを構築した事例、Kubernetesの仕組みをフルに活用し開発環境の即時展開を可能にしたシステムの事例など、このプロジェクトを通じて遭遇した課題やそれを乗り越えるための施策を実例を交えて詳細に解説します。",
    "speakers": [
      {
        "id": 1566,
        "name": "Subaru Nakamura"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/varu3/cndt2023-notenoeksyi-she-zenbujian-semasu",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1966,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1966/116/playlist.m3u8",
    "title": "FinOps! Karpenterによるk8sコスト削減への道",
    "abstract": "Kubernetesのコスト削減手段の一つに、クラスタのオートスケールがあります。しかし、単にオートスケーラを導入しただけで、本当にコスト削減になるのでしょうか？\r\n\r\nこの講演では、AWS環境で導入が進んできたKarpenterを例にとり、その仕組みを説明します。その後、導入だけでは真のコスト削減にならなかった理由を、いくつかの例を通して説明し、我々がそれにどう対処してきたかの知見を共有します。",
    "speakers": [
      {
        "id": 1569,
        "name": "Aya Igarashi"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ladicle/finops-karpenterniyoruk8skosutoxue-jian",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1967,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1967/97/playlist.m3u8",
    "title": "10年モノのサービスのインフラを漸進的に改善する、頑張りすぎないクラウドネイティブ",
    "abstract": "クラウドネイティブはマイクロサービスやKubernetes、コンテナ・サーバーレスでモダンなシステムを構築することだけだと思っていませんか？\r\n2013年9月にサービスを開始したNewsPicksは10周年を迎え、サービス開始当初からAWSを利用していましたが、今年までUbuntu12のEC2インスタンスがバックオフィス業務やバッチ処理を担っていました。\r\n本セッションでは、10年モノのEC2インスタンスをリプレースするにあたり、なるべくクラウドの技術を取り入れつつ頑張りすぎずにモダン化し、運用負荷を削減して開発者体験を向上した事例をご紹介します。\r\n\r\nキーワード：\r\nEC2 / ECS / Fargate / Step Functions / Lambda / SSM Run Command\r\n",
    "speakers": [
      {
        "id": 1570,
        "name": "Yuki Ando"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://www.docswell.com/s/integrated1453/5DEQ9G-cloud-native-not-hard-work",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1970,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1970/1970_master.m3u8",
    "title": "クラスターを分割するという運用の現実解 ～Pod を VM のように使い始めたら見えてきた世界～",
    "abstract": "弊社は以前、協力会社の開発者向けに1人1台のデスクトップ開発環境（VM）を提供していました。\r\nVM の構築および開発ツールのインストールは手動で行われ、担当者が1つの開発環境を構築するのに大変な時間がかかっていました。\r\nその結果、新しいプロジェクトメンバーをアサインする際に、開発環境の準備が遅れ、プロジェクトの立ち上げに時間がかかることが度々ありました。\r\nこれらの課題を解決するため、私たちは開発環境を再利用可能なコンテナイメージにパッケージ化し、Kubernetes 上で提供することを決断しました。\r\nしかし、VM で提供していた開発環境や Jenkins などの CI/CD ツールを1つのクラスターに集約した結果、一部の高負荷な環境やツールが他の開発環境に影響を及ぼす問題が発生しました。\r\n今回、私たちはこれらの課題にどのように立ち向かったのか、より効率的な複数クラスター運用のアプローチについて、運用プロセスを改善した弊社の事例とともにご紹介します。",
    "speakers": [
      {
        "id": 1572,
        "name": "Shota Nonaka"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1971,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1971/87/playlist.m3u8",
    "title": "Kubernetesで構築する大規模時系列データのスケーラブルな分散処理",
    "abstract": "我々は社内の監視用メトリクスストレージとしてPrometheus API互換の時系列データベースを内製しています。\r\n現在10億種類以上のmetricsを保存しており、一日2.3TB分ずつ程増え続けています。\r\nこれらをスケーラブルかつ低コストに保存・検索するために、オブジェクトストレージを活用して、大規模データを効率よく分散処理するための仕組みを構築しています。\r\n本セッションでは、Kubernetesを活用しどのように省エネかつ効率的な大規模データの分散処理を実現したかに焦点をあてて紹介したいと思います。",
    "speakers": [
      {
        "id": 1574,
        "name": "Hiroki Sakamoto"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/lycorptech_jp/scalable-timeseries-database-on-object-storage",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1973,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1973/1973_master.m3u8",
    "title": "自動化の罠 - 自動化してはいけないテスト",
    "abstract": "近年、多くの企業が手動テストケースを一斉に自動化する取り組みを進めています。この背景には、短いリリースサイクルと効率的なテスト実行の要求があります。しかし、すべてのテストケースを盲目的に自動化することは、肥大化したエンドツーエンド（E2E）テストを生み出す危険性があります。これらのテストは、保守が難しく、しばしば多くのリソースを消費します。このプレゼンテーションでは、自動化の過度な取り組みが引き起こす問題点と、保守性の高い自動テストの設計方法について解説します。適切な自動化のバランスを見つけるための実践的なアドバイスも提供いたします。",
    "speakers": [
      {
        "id": 1576,
        "name": "Chris Ding"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/chrisdingjapan/zi-dong-hua-nomin-zi-dong-hua-sitehaikenaitesuto",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1976,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1976/1976_master.m3u8",
    "title": "PrometheusとGrafanaで追求する、より良いアプリケーションの可観測性",
    "abstract": "本セッションでは、Prometheus、Grafana LokiやGrafana Tempoなどを活用したアプリケーションの可観測性向上の取り組みについてご紹介します。具体的には、SuccessRateの計測とアラートにおける工夫やWeb Vitalsの計測によるパフォーマンス劣化の検知、OpenTelemetryの導入によるトレーサビリティの拡大、LokiとTempoを利用したログトレース連携などアプリケーション可観測性の強化について事例を交えてご紹介します。\r\n",
    "speakers": [
      {
        "id": 1581,
        "name": "Hiroo Kawai"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.docswell.com/s/LIFULL/5Q8Q73-2023-12-14-113426",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "事前収録"
  },
  {
    "id": 1977,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1977/111/playlist.m3u8",
    "title": "100万コンテナのKubernetesプラットフォームを5年間スケーラブルに運用するために乗り越えていること",
    "abstract": "LINEヤフーで稼働するKubernetes as a ServiceではGAから5年で100万を超えるコンテナが1200クラスタで稼働しており、日々成長しています。\r\n\r\n20数名でメンバーを増やすことなくスケールさせるために遭遇した課題や乗り越え方、今後の取り組みを紹介します。\r\n\r\n1. 導入したSREのプラクティス\r\n2. 長年運用することで遭遇する課題や障害、その落とし穴\r\n3. プラットフォームエンジニアリングも見据えたセルフサービス化\r\n\r\n発表を通じてSREチームがスケールの壁を乗り越える一助になると幸いです",
    "speakers": [
      {
        "id": 1582,
        "name": "Tsuzuki Tsuchiya/ Daisuke Kobayashi"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/lycorptech_jp/kubernetes-platform-with-one-million-containers",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1978,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1978/115/playlist.m3u8",
    "title": "システム担当者のためのクラウドとコンテナライゼーション ~効果を最大化する思考~",
    "abstract": "いままでオンプレにてシステムを構築されていた、あるいはVMを大量に抱えて冗長化していた企業でもクラウドへリフトしさらにコンテナライズを推進する動きがよく見られるようになりました。一方でシステム担当者がこれらの動向に対して思考が追従できず、メリットを十分に享受しきれていない現場も多くあります。\r\n\r\nこのセッションでは、改めてクラウド・コンテナライズへと変遷してきた背景を振り返り、メリットを享受できるような考え方を提案します。",
    "speakers": [
      {
        "id": 1587,
        "name": "Kohei Nagase"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/koh_naga/sisutemudan-dang-zhe-notamenokuraudotokontenaraizesiyon-xiao-guo-wozui-da-hua-surusi-kao",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1990,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1990/85/playlist.m3u8",
    "title": "eBPFによるE2E監視の取り組み",
    "abstract": "マイクロサービスのようなサービス間が複雑に接続されたシステムでは、障害からの迅速な復旧や全体最適化のためにE2Eでの監視が重要になります。\r\n本セッションでは、オブザーバビリティの分野で注目されているeBPFをE2E監視に適用した場合に得られる恩恵について、我々の具体的な取り組みを通じて紹介します。\r\nまた、特にネットワーク監視を行う際に注意しなければならないeBPFの技術的ポイントについて、実経験から得られた知見を共有します。",
    "speakers": [
      {
        "id": 1598,
        "name": "Tomohiro Mano"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://www.docswell.com/s/t-mano/ZP93L2-2023-12-11-145903",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1992,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1992/96/playlist.m3u8",
    "title": "安全なクラウドネイティブ実現へ：内製開発におけるプロダクトセキュリティ強化の軌跡と開発チームとの協調",
    "abstract": "内製開発チームが安全なクラウドネイティブ環境を実現するために、プロダクトセキュリティチームがどのように連携してきたかに焦点を当て、活動の軌跡と協調の重要性を紹介します。\r\n\r\n本トークは、プロダクトセキュリティチームのリーダーとしての経験に基づいて言及し、サーバレスで構築するシステムに対する脅威モデリング、セキュリティ文化を醸成するために取り組んできたSlackによるオープンコミュニケーションなど多岐にわたります。\r\n\r\n本トークの視聴者は、セキュリティを意識してクラウド環境構築に取り組みたい方や、開発チームとのコミュニケーションに悩むセキュリティ組織に所属する方を想定しており、プロダクトセキュリティを実践するための有益な知識と洞察を提供します。",
    "speakers": [
      {
        "id": 1596,
        "name": "Naohiro Fujita"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.docswell.com/s/tanafuji-sec/5YW68E-cndt20231211",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1996,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/1996/112/playlist.m3u8",
    "title": "AI向けのクラウドネイティブなストレージシステムの裏側",
    "abstract": "大規模な機械学習基盤を支える自社ストレージシステムの裏側について解説します。1500枚規模のアクセラレータを支える10PB規模のクラウドネイティブなストレージとして、少人数でApache Ozoneを運用してきました。\r\n事業の成長に合わせて変わり続ける要件、増え続けるデータ量、世代ごとにますます高速化するアクセラレータ、故障するハードウェア、こういった問題に対してどのようにこの2年間対処してきたかを振り返ります",
    "speakers": [
      {
        "id": 1604,
        "name": "Kota Uenishi"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2001,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2001/118/playlist.m3u8",
    "title": "CloudNative環境におけるトラブルシューティングガイド",
    "abstract": "CloudNativeなシステムではマネージドサービスの利用によって比較的簡単にサービスを運用することができますが、それでもさまざまな障害を経験することがあります。メルペイにおいて4年以上クラウド上でサービスを運用してきた経験をもとに、クラウドを利用する環境においてどのように障害を検知してどのように対応・解決するのか、アラートやインシデントに対して自分がどのように対応しているか、取り組みを紹介します。",
    "speakers": [
      {
        "id": 1608,
        "name": "Junichiro Takagi"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tjun/20231212-cndt",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2003,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2003/92/playlist.m3u8",
    "title": "人工衛星の運用を支える、クラウドネイティブ民主化への取り組み",
    "abstract": "Synspectiveでは自社で小型SAR衛星を開発・運用し、得られた衛星データを活用したデータソリューションを提供しています。\r\n特に、人工衛星に関する管制システムやテレメトリ分析システムは、Google Cloud上のGKEやCloud Runをはじめとした多くのクラウドネイティブ技術によって支えられています。\r\n一方、衛星業界では、宇宙活動法や衛星リモセン法を含むいくつかの法規制準拠が求められます。\r\n本セッションでは、これらコンプライアンス遵守を考慮しつつ、衛星管制システムの継続的な開発と運用、更にはよりよい開発者体験の向上に向けたクラウドネイティブ技術の活用について皆様にご紹介します。",
    "speakers": [
      {
        "id": 1610,
        "name": "Masaya Arai"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2004,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2004/88/playlist.m3u8",
    "title": "Kong Konnectで実現する次世代型APIマネジメントの世界",
    "abstract": "クラウドネイティブ時代のマイクロサービスが爆発的に増えている中、各サービスへのセキュリティ対策や一元管理、ロギングなどに悩んでる開発者・設計者の方も多いのではないでしょうか。\r\nKong Konnectは、クラウドネイティブ時代に向けてゼロから設計され、SaaSサービスとして提供される唯一の API 管理プラットフォームです。APIの登録や管理はもちろん、Kongの豊富なプラグインシステムで簡単に機能を追加することも可能です。また、CI/CDのパイプラインを実装することによって、APIのフルライフサイクルマネジメントも簡単にできます。",
    "speakers": [
      {
        "id": 1611,
        "name": "Wenhan Shi"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2007,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2007/121/playlist.m3u8",
    "title": "証拠は消さないで！Kubernetesのノード障害とフェールオーバーと原因調査",
    "abstract": "Kubernetesクラスターでノード障害が発生した場合、通常、障害ノードは削除されて切り替えが行われます。ノードの削除は、ノード上で動作するステートフルアプリケーションでデータ破壊が起こるのを避けるためのフェンシングの目的で行われますが、障害の原因究明の前にノードが削除されることで原因調査が難航するリスクがあります。このセッションでは、この問題を解決するために、MachineHealthCheckのExternal Remediation機能やfence_kdumpなどのフェンシング機能を用いた、フェールオーバーの時間の短縮と原因究明を両立する代替手段のアイディアを共有します。",
    "speakers": [
      {
        "id": 1614,
        "name": "Masaki Kimura/Keisuke Saito"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2009,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2009/105/playlist.m3u8",
    "title": "KeycloakのCNCF incubating project入りまでのアップストリーム活動の歩み",
    "abstract": "本講演では、CNCF incubating projectであるOSSを題材に、SIerという立場でどのようにしてOSSのアップストリーム活動を盛り上げていったのかの事例を紹介します。講演者のチームでは、CNCF incubating projectであるKeycloakについて、メンテナを擁し数多くのコントリビューションを行っています。全くの新参者から活動を始めて、メンテナの輩出と、この4月のKeycloakのCNCF incubating projectの承認にも貢献するに至った歩みを紹介します。",
    "speakers": [
      {
        "id": 1616,
        "name": "Yuichi Nakamura"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:00:00.000+09:00",
    "endTime": "2000-01-01T10:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/ssuserbeb7c0/keycloakcncf-incubating-project",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2011,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2011/2011_master.m3u8",
    "title": "from monolith to cloud native ～実現可能なcloud-native化手法～",
    "abstract": "モノリシックな環境と比べてクラウドネイティブな環境のメリットって？実際にはどんな環境なの？と、具体的にイメージができていない方に向け、BtoB SaaSにおいてモノリシックな環境のマイクロサービス化、クラウドネイティブ化を実現してきたからわかるメリット・デメリットや、検討ポイントとなる「ロジック分離」「コンテナ化」「IaC」「CI/CD」「observability」についてお伝えします。",
    "speakers": [
      {
        "id": 1620,
        "name": "Noh Seontaek"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/zeal_mkt/zealfa-biao-zi-liao-20231211-cloudnativedays",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "事前収録"
  },
  {
    "id": 2012,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2012/120/playlist.m3u8",
    "title": "CiliumにおけるGeneveプロトコルを用いたDSRの実装と導入",
    "abstract": "DSR（Direct Server Return）とは、ロードバランサ経由のリクエストに対するレスポンスを、ロードバランサを介さずに直接クライアントに返す方式のことです。\r\n\r\n通常、Ciliumが提供するロードバランサは、IPヘッダ内のオプション部を使ってDSRを実現します。\r\nしかし、この手法では一部のネットワーク機器で通信遅延が発生しました。\r\n\r\nそこで我々は、UDPベースのカプセル化技術であるGeneveプロトコルによるDSRをUpstreamに提案・実装しました。\r\n本発表では、CiliumのeBPFによる通信制御の仕組みを解説し、CybozuにおけるCiliumのDSR導入の取り組みについて紹介します。",
    "speakers": [
      {
        "id": 1621,
        "name": "Tomoki Sugiura / Tomoya Terashima"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2013,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2013/103/playlist.m3u8",
    "title": "その脆弱性調査は本当に必要？トリアージの自動化方法教えます！",
    "abstract": "シフトレフトという言葉が聞かれるようになって久しいですが、実際に運用できているという話はあまり聞かれません。\r\n要因の一つとして、検知される脆弱性の数が多すぎて、たとえセキュリティチャンピオンを配置しても簡単に対処できないことが指摘されます。\r\nまた、多くのスキャナが出力するCVSSセベリティは、単体ではリスク評価とならず、本来対処が必要な脆弱性にフォーカスできない課題も指摘されます。\r\n今回はリスクベースの脆弱性トリアージや自動化ツールを、デモを交えて解説します。",
    "speakers": [
      {
        "id": 1622,
        "name": "Minehiko Nohara"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2017,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2017/86/playlist.m3u8",
    "title": "アプリだけでなく、運用もモダナイズしよう！　〜 Ingressで実現するIaC/SaC 〜",
    "abstract": "アプリケーションのマイクロサービス化が加速している中での重要な事の１つは、モダナイズするのはアプリケーションだけでなく、運用自体もモダナイズすることです。\r\nネットワークの機能やセキュリティをいかにCICDツールと連携させ、マイクロサービス環境のメリットを最大限享受できる運用を実現するのか、NGINX Ingress Controllerを活用して運用自体をモダナイズする方法について、デモや事例を交えてご説明します。",
    "speakers": [
      {
        "id": 1585,
        "name": "Yoichi Komine"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://interact.f5.com/rs/653-SMC-783/images/20231213_CNDT2023_Komine.pdf?version=0",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2021,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2021/113/playlist.m3u8",
    "title": "リリース速度10倍を実現したビットキー流DevOps - Argo CD との付き合い方 -",
    "abstract": "ビットキーでは Kubernetes (GKE) を用いてアプリケーションを開発・運用しています。リリースにおいて、以前はデプロイスクリプトの実行やCLIによるコマンド操作をしていたことから2時間程度かかっていましたが、現在は Argo CD を用いることにより、GUI にて数回クリックするだけで10分程度で実行完了させることができました。本セッションでは Argo CD の開発や本番での環境ごとのリリース方法の設定のほか、CLI を活用したゼロからの Argo CD の環境構築についてもご紹介します。",
    "speakers": [
      {
        "id": 1627,
        "name": "Kotaro Otaka"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/bitkey/bitkey-style-devops-with-10x-faster-release-speed-how-to-work-with-argo-cd",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2024,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2024/82/playlist.m3u8",
    "title": "Kubernetes で実現する最先端 AI プラットフォームへの挑戦",
    "abstract": "サイバーエージェントでは国内で初めて NVIDIA DGX H100 を導入し、LLM を含む大規模 AI 開発向けの機械学習基盤の構築を行いました。\r\nここ数年で機械学習に要求される計算リソースは飛躍的に増加しており、この急速な変化に対応するために Kubernetes と高速なインターコネクトネットワーク (400GbE x8) や OpenMPI などの HPC 技術を組み合わせたアーキテクチャを採用しています。\r\n本セッションでは、近年の機械学習トレンドが基盤に求める要件と、その要件をハードウェア・ソフトウェアの両面でどのように満たしているのかについてお話いたします。",
    "speakers": [
      {
        "id": 1630,
        "name": "Mizuki Urushida"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:40:00.000+09:00",
    "endTime": "2000-01-01T11:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/zuiurs/challenges-for-advanced-ai-platform-by-kubernetes",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2029,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2029/101/playlist.m3u8",
    "title": "etcdとRaftアルゴリズム: Kubernetesコントロールプレーンの信頼性の解剖",
    "abstract": "コンテナオーケストレーションのデファクトスタンダードとして知られているKubernetesですが、その背後にはさまざまなコンポーネントが動き続けています。その中で唯一のステートフルなコンポーネントがetcdです。etcdの特徴としてシンプル/セキュア/高速/信頼性があげられ、この中の信頼性を確保するために使用される技術がRaftアルゴリズムです。\r\n\r\nそのRaftアルゴリズムについてご存じの方はどれくらいいるでしょうか？\r\n\r\n本セッションでは、Kubernetesのコントロールプレーンに限らずコンセンサス（合意）アルゴリズムとして広く知られているRaftについて分かりやすく解説します。また、その代表的な応用例であるetcdのソースコードを読みながらどのように実装されているのか？なぜ採用されたのか？という背景に思いを馳せたいと思います！",
    "speakers": [
      {
        "id": 1635,
        "name": "shukawam/ystkfujii"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2031,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2031/117/playlist.m3u8",
    "title": "Kubernetesクラスターを引き継ぐ技術",
    "abstract": "コンテナの普及により、Kubernetesクラスターを用いてシステムを構築する機会が増えています。システムは構築して終わりではありません。構築後のKubernetesクラスターには、バージョンやリソース、マニフェストの更新等、運用作業が多々あります。しかし悲しいことに、構築しただけで運用されていない、または構築者が退職して誰にも顧みられていない、マニフェストも残っていないKubernetesクラスターが存在することも事実です。私はこれまで所属してきた企業で、他人の作ってKubernetesクラスターを10個以上引き継いで運用し、改善、更新、移行してきました。本登壇では、他人の作った謎深きKubernetesクラスターを無事に引き継ぐ方法を、私の経験談とともに解説します。",
    "speakers": [
      {
        "id": 1637,
        "name": "Yusuke Shibui"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/shibuiwilliam/kuberneteskurasutawoyin-kiji-guji-shu",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2034,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2034/110/playlist.m3u8",
    "title": "「魔の川」「死の谷」をクラウドネイティブなチーム作りで越境する",
    "abstract": "技術の社会実装の難所として、研究ステージと製品化に向けた開発ステージに存在する障壁である「魔の川」・開発ステージと事業化ステージの間の障壁である「死の谷」が存在します。本講演では、開発の進め方・システムのアーキテクチャ・チームの形を変えていくことで、この二つの障壁をどのように越境していったかについてお話しします。\r\n他の業務を抱えながらコスト・社内環境・スキルがない中でスタートし、 IoTプロジェクトをリリースするまでに、コストダウンによるデバイスの仕様変更・フロントエンドの大幅な機能追加と改修・情報システム部門との IoT プロジェクトのセキュリティ要件の合意などにも取り組んできました。\r\n地方ガス会社の体当たりで得られた知見が皆さまのチーム作りの参考になりましたら大変うれしく思います。",
    "speakers": [
      {
        "id": 1641,
        "name": "Genki Ogasawara / Yusaku Chiba"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/genkiogasawara/crossing-the-devil-river-and-death-valley-by-building-cloud-native-teams",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2039,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2039/80/playlist.m3u8",
    "title": "詳説探求！Cloud Native Databaseの現在地点",
    "abstract": "データベースをKubernetesで動かす日を夢見て数年経ちました。それは既に夢ではなくなり、現実にCloud Nativeなデータベースを支えるプラットフォームとしてKubernetesが選ばれるようになっています。過去、現在、そして未来。NewSQLの分野で情報発信を続けるDBソムリエと一緒に考えましょう。",
    "speakers": [
      {
        "id": 1644,
        "name": "Takahiro Kobayashi"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:20:00.000+09:00",
    "endTime": "2000-01-01T10:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2041,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2041/98/playlist.m3u8",
    "title": "決済システム内製化のその先に 〜 クラウドネイティブな開発を\"スケール\"させるために必要だったこと",
    "abstract": "SBペイメントサービスは内製開発の立ち上げから既に5年以上が経過し、新たな開発プロジェクトが2年前に始まりました。\r\nこのプロジェクトは当社の中でも最大規模のシステムリプレイスのため開発パートナー企業にも協力いただき、またクラウド環境ではなくオンプレミスで構築されています。\r\nこのセッションでは開発体制をスケーリングする際に直面した課題や解決するためにしたことをお伝えします。\r\nまたクラウドネイティブな開発体験をどのようにオンプレミスで実現したのか、効率と品質を向上させるためのアーキテクチャや事例について紹介する予定です。",
    "speakers": [
      {
        "id": 1584,
        "name": "Junya Suzuki"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/suzukij/beyond-in-house-production-of-payment-systems",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2043,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2043/94/playlist.m3u8",
    "title": "可観測可能な「Next.js」アプリケーションを作る⸺UXからパフォーマンスまでWebアプリケーション全ての改善に役立つ方法を⸺",
    "abstract": "Observabilityの規格であるOpenTelmetryはバックエンドWebアプリケーションには広まりつつありますが、フロントエンド側での実装はまだ例も少なく未成熟です。\r\nそこでこのセッションではWebフレームワーク「Next.js」にフロントエンド側も含めたOpenTelemetryの実装と実践について紹介します。\r\n「Next.js」はフロントエンド側だけでなく、バックエンド側も扱えるため、OpenTelmetryのTraceの規格に含まれるContext Propagationの例も取り上げてWebアプリケーション全体での可観測性を高める方法についても取り上げます。",
    "speakers": [
      {
        "id": 1646,
        "name": "megumish"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2051,
    "conferenceId": 10,
    "trackId": 46,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2051/104/playlist.m3u8",
    "title": "Kubernetes Persistent Volume 向けゾーン障害への備え",
    "abstract": "障害が発生しないシステムはありません。特にゾーン障害と呼ばれる電源や空調設備など様々な要因でデータセンターの区画(ゾーン)ごとダウンするようなケースもあります。\r\nこのようなゾーン障害のような大規模な障害が発生しても、ユーザ向けに提供しているサービスを\r\nダウンさせるわけにはいきません。\r\n特に、Persistent Volume(永続ボリューム)を使いデータを保持するようなアプリケーションやストレージではあらかじめゾーン障害を想定し、データの配置場所などを考慮した設計にすることが重要です。\r\nこれらの設計が不十分な場合、長時間のサービスダウンを引き起こすだけでなく、最悪の場合、データ消失することもあります。\r\nそこで、本セッションでは、ゾーン障害に備えCSIのTopologyやストレージの機能を活用し安心・安全にデータを守るための設計ノウハウを紹介します。",
    "speakers": [
      {
        "id": 1652,
        "name": "Yukinori Sakashita"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ysakashita/kubernetes-persistent-volumexiang-ke-zonzhang-hai-henobei-e",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2056,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "",
    "title": "【中止】DRE/SREのプラクティス融合によるクラウドネイティブなデータ基盤作り",
    "abstract": "アプリケーションやビジネスで大事なことは現在の状況を知り、次へステップアップするサイクルをうまく回すことですが、\r\nデータが活用できる状態になることでさらによいサイクルを作り出すことができます。\r\nこのサイクルには強固で信頼性の高いデータ基盤が不可欠です。\r\n\r\nこのセッションでは、堅牢なデータ基盤を築くためのData Reliability Engineering (DRE) や Site Reliability Engineering (SRE) のプラクティスや、\r\nクラウドを活用したデータパイプラインや基盤の構築、推進していくためのデータエンジニアのマインドなどをお話しします。",
    "speakers": [
      {
        "id": 1657,
        "name": "yuki takezawa"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T16:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2057,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2057/102/playlist.m3u8",
    "title": "Kubernetes the hard way revisited 〜ゼロダウンタイムクラスタ移行から学ぶクラスタ構築の仕組み〜",
    "abstract": "LINEヤフーではVerda Kubernetes ServiceというKaaSを開発・運用しています。\r\n以前はRancherをベースにクラスタを構築・管理していましたが、現在ClusterAPI及びKubeadmベースのシステムへと移行を進めています。\r\nユーザー自身にクラスタを作り直して移行してもらうコストは大きいため、Rancherで作成したクラスタをゼロダウンタイムでKubeadmへ移行する取り組みを行っています。\r\n本セッションでは、この取り組みの紹介を通してkubernetes clusterの構築がどのように行われているか紐解いていきます。",
    "speakers": [
      {
        "id": 1658,
        "name": "Shotaro Gotanda"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T18:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2058,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2058/2058_master.m3u8",
    "title": "計測の手間を省きたい！OpenTelemetry に見る”自動計装”のイマ",
    "abstract": "複雑化するシステムやサービスにおいて、オブザーバビリティはとても重要です。特にテレメトリーデータの計測では、計装の手間をどれだけ削減できるか、すなわち自動計装が主要なトピックとなってきています。このセッションでは、テレメトリー計装と収集の標準仕様であるOpenTelemetryにフォーカスを当て、アプリケーションの自動計装手法を整理します。さらに発展として、eBPFやKubernetes Operatorを活用した計装技術も紹介いたします。",
    "speakers": [
      {
        "id": 1659,
        "name": "Keisuke SAKASAI"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T14:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/k6s4i53rx/getting-started-auto-instrumentation-with-opentelemetry",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2065,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2065/106/playlist.m3u8",
    "title": "Unlocking Cloud Native Security",
    "abstract": "クラウドネイティブ技術を活用する組織は、システムを内外の脅威から守り、サービスや事業活動を継続させるため、どのようなセキュリティ対策を講じるべきでしょうか。\r\n本セッションでは、クラウドネイティブなシステムを取り巻くセキュリティの現状と動向、注目されているトピックをご紹介します。\r\nセッションを通してクラウドネイティブセキュリティの全体像を紐解き、効果的なセキュリティ対策に必要な観点を理解することを目的とします。",
    "speakers": [
      {
        "id": 1666,
        "name": "Kyohei Mizumoto"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:20:00.000+09:00",
    "endTime": "2000-01-01T10:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2066,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2066/100/playlist.m3u8",
    "title": "東京エレクトロンデバイスによるTerraform Cloud 活用事例ならびにHashiCorpによる最新アップデート",
    "abstract": "",
    "speakers": [
      {
        "id": 1668,
        "name": "Shogo Katsurada / Hiroaki Yamada "
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2067,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2067/84/playlist.m3u8",
    "title": "これからのPlatform Engineeringを支えるコンテナ×Backstageの真価",
    "abstract": "昨今話題のPlatform Engineeringですが、結局のところ何をすればいいの？と疑問を持つ方が多いのではないでしょうか？特にこれからコンテナやKubernetesの導入を検討される方にとっては、非常に遠い世界の概念に感じるかと思います。本セッションではそんな疑問や不安を解決すべく、Red Hatが考えるPlatform Engineeringのアプローチ方法と、導入の勘所をご紹介します。",
    "speakers": [
      {
        "id": 1669,
        "name": "Shintaro Kitamura"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:20:00.000+09:00",
    "endTime": "2000-01-01T11:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2068,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2068/91/playlist.m3u8",
    "title": "マイクロサービスの信頼性を支えるオブザーバビリティとサービスメッシュ",
    "abstract": "マイクロサービスのような分散アーキテクチャにおいて、複雑に絡み合ったサービスのデバッグや信頼性を担保することは大きな課題の1つです。マイクロサービスを高い信頼性で運用するためにはサービス全体が観測でき、また小さく壊し素早く復旧するための仕組みが求められます。\r\n\r\n本セッションでは、マイクロサービスの信頼性を支えるためのオブザーバビリティと信頼性を向上させるためのサービスメッシュについて、SRE の各種プラクティスを交えながら実践的な導入方法についてご紹介します。",
    "speakers": [
      {
        "id": 1670,
        "name": "Kazuki Uchima / Yoshifumi Yamaguchi"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2069,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2069/83/playlist.m3u8",
    "title": "2023年の脆弱性を総括！主要脆弱性とその打破策",
    "abstract": "脆弱性の専門家集団であるSnyk（スニーク）が2023年の脆弱性を大総括します。注目された脆弱性やその背後にある原因、そしてそれに立ち向かうための具体的な策を解説。クラウドネイティブ環境を安全に運用するための実践的な知見を得ることができます。エンジニアのみならず、セキュリティ専門家にも役立つ内容となっています。クラウドネイティブ環境の安全性を追求する全ての方におすすめのセッションです。",
    "speakers": [
      {
        "id": 1671,
        "name": "Sanae Furuyama"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:00:00.000+09:00",
    "endTime": "2000-01-01T11:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2070,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2070/114/playlist.m3u8",
    "title": "CircleCIとArgo Rolloutsで実現するKubernetes上のプログレッシブデリバリー",
    "abstract": "Kubernetesはコンテナオーケストレーションのスタンダードとなりましたが、アプリケーションのデプロイメントにはまだ課題があります。本講演では、CircleCIとArgo Rolloutsを使って、GitOpsの原則に従い、安全かつ効率的にアプリケーションをKubernetesクラスターにデプロイする方法をデモを交えてご紹介します。",
    "speakers": [
      {
        "id": 1579,
        "name": "Masahiko Funaki "
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:20:00.000+09:00",
    "endTime": "2000-01-01T15:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2071,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2071/108/playlist.m3u8",
    "title": "【事例講演：NTTドコモ】B2Cデジタルサービス向け統合API基盤「RAFTEL」のセキュリティ強化策",
    "abstract": "クラウドネイティブなテクノロジーを全面的に採用し、アプリケーション開発の生産性向上と高速リリースの実現を目指すNTTドコモの「RAFTEL」。d払いやLeminoなど60以上のサービスに活用されています。このセッションでは、システムのリニューアルに合わせて開発チームの利便性強化だけではなくDevOpsからDevSecOpsへと役割を進化させたセキュリティ対策について、その取り組みと効果について紹介します。\r\n",
    "speakers": [
      {
        "id": 1673,
        "name": "Mr. Masatoshi Kato"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:20:00.000+09:00",
    "endTime": "2000-01-01T11:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://sysdig.com/content/c/pf-cndt-2023-sysdig-nttd?x=Q98AC_",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2072,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2072/79/playlist.m3u8",
    "title": "Wasm is becoming the runtime for LLMs",
    "abstract": "Today’s LLM apps, including inference apps and agents, are mostly written in Python. But this is about to change. Python is too slow, too bloated, and too complicated to install and manage. That’s why popular LLM frameworks, such as llama2.c, whisper.cpp, llama.cpp, all thrive to have zero Python dependency. All those are written in compiled languages (C/C++/Rust) and can be compiled into Wasm. With WASI NN, you can create complex LLM apps in Rust and run them in Wasm sandboxes. The combination to develop and run LLM apps is more lightweight, high performance and portable. In this talk, Michael will demonstrate how to run llama2 series of models in Wasm, how to develop LLM agents in Rust and run them in Wasm. In-production use cases, like LLM-based code review and assistants with your knowledge base, will be discussed and demoed.",
    "speakers": [
      {
        "id": 1674,
        "name": "Michael Yuan"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T10:00:00.000+09:00",
    "endTime": "2000-01-01T10:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2074,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2074/89/playlist.m3u8",
    "title": "事例講演：Datadog がKubernetesをどうスケールさせているのか？",
    "abstract": "コンテナ化されたアプリケーションとサービスのプラットフォームKubernetesを活かすには新たなモニタリングの手法が必要です。本セッションではDatadog自身がDevOpsの手法で運用するKubernetes環境の各レイヤーをどうモニタリングしてスケールさせているかをご紹介します。\r\nDevOps、SRE、セキュリティに関係する皆さまに参考になるDatadog活用のポイントをご覧ください。",
    "speakers": [
      {
        "id": 1580,
        "name": "Taiji Hagino"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:40:00.000+09:00",
    "endTime": "2000-01-01T12:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2075,
    "conferenceId": 10,
    "trackId": 45,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2075/93/playlist.m3u8",
    "title": "CloudNatixではじめるクラウドオペレーションの最適化",
    "abstract": "クラウドは、柔軟性や効率性を向上させ、ビジネスの革新を加速させるために不可欠な存在です。\r\nしかし、クラウドの活用規模の拡大、マルチ・ハイブリッドクラウド化が進むことで、運用は複雑化していきます。\r\nさらに、運用コストの増加や運用効率の低下によって、クラウドのメリットを最大限に活用できないという課題があります。\r\n\r\nCloudNatixは、AIによる運用支援によって、クラウドオペレーションを最適化します。\r\nコストの最適化や運用の効率化を実現することで、クラウドのメリットを最大限に引き出します。\r\n\r\n本講演では、CloudNatixの機能やユースケースを紹介し、クラウドオペレーションの最適化について説明します。\r\nまた、NECクラウドコスト最適化ソリューションと組み合わせることで、クラウドオペレーションの最適化をさらに加速させることができます。",
    "speakers": [
      {
        "id": 1667,
        "name": "Masaki Hosokawa / Kenji Kaneda"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2077,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2077/109/playlist.m3u8",
    "title": "最先端AIOpsの秘伝のたれ",
    "abstract": "皆様、1日にオブザーバビリティツールの画面をどれくらい見ていますでしょうか？\r\n気づいたら、ダッシュボードづくりに１日費やしていませんか？\r\n『この時間、他の業務に使いたかったな。。。。。』\r\n\r\nそんな後悔とはさようなら。\r\n\r\nCasual AI、Predictive AI、Generative AIを活用すれば、\r\nすべての必要な情報を自動で作成/収集し、時間を有効活用することができます。\r\n\r\n本セッションでは、オブザーバビリティに対する自動化と分析を\r\nAIを活用して実現する方法を紹介いたします！",
    "speakers": [
      {
        "id": 1586,
        "name": "角田 勝義"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:40:00.000+09:00",
    "endTime": "2000-01-01T12:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2078,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2078/107/playlist.m3u8",
    "title": "イオンがKubernetesを採用してどうなった？",
    "abstract": "イオンスマートテクノロジーではクラウドインフラにAzure、コンテナ基盤にAzure Kubernetes Serviceを採用しています。しかし、Kubernetesやパブリッククラウドを採用すれば Cloud Nativeになるわけではないため、多くの課題に直面する企業は多いと思います。弊社もその一つです。\r\n本セッションでは、弊社のようなエンタープライズな企業でKubernetesを導入した背景、運用が始まってから出てきた課題へどのように対処してきたか、そして組織の成長と共に今後どのようなCloud Nativeな組織・システムを目指すのか、また、そこにNew Relicがどのように活用されているかをお話します。\r\n",
    "speakers": [
      {
        "id": 1678,
        "name": "1. Toshiyuki Kasai / 2. Hikaru Saito"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:00:00.000+09:00",
    "endTime": "2000-01-01T11:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2079,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2079/95/playlist.m3u8",
    "title": "OCI Cloud Native Journey",
    "abstract": "OCI (Oracle Cloud Infrastructure)には、クラウドネイティブを実現するたくさんのサービスがあります。\r\n本セッションでは、コンテナアプリケーション開発を軸に、IaC、Kubernetes、DevOps、Observability に焦点を当て、低いコストで高いパフォーマンスを実現する OCI のクラウドネイティブサービスとアーキテクチャを紹介します。",
    "speakers": [
      {
        "id": 1677,
        "name": "Yutaka Ichikawa"
      }
    ],
    "dayId": 27,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 27,
    "conferenceDayDate": "2023-12-11",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2080,
    "conferenceId": 10,
    "trackId": 47,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2080/119/playlist.m3u8",
    "title": "NutanixなんもわからんクラウドネイティブおじさんがNutanixの中の人になってみたら想像以上にクラウドネイティブ文字数",
    "abstract": "Cloud Nativeというバズワードを引っ提げてCNCFが爆誕して早8年。クラウドネイティブなワークロードを動かすために必要なプラットフォーム機能は何だろう、と昼しか眠れずに考え続けてきましたが、Nutanixの中を覗いてみたら思いのほかクラウドネイティブでした。\r\nNutanixに興味がない方にとっても、プラットフォームの在り方を考える上でのヒントになれば幸いです。",
    "speakers": [
      {
        "id": 1679,
        "name": "Junichi Yoshise"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/jyoshise/cndt2023-nutanix-jyoshise",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 2081,
    "conferenceId": 10,
    "trackId": 44,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndt2023/talks/2081/2081_master.m3u8",
    "title": "生成 AI を活用して、Portability に優れた Cloud Native かつセキュアな Microservice を超高速で開発してみる",
    "abstract": "多様な変化へ即応させる、耐障害性を高めるといった目的でマルチ／ハイブリッドクラウド化が注目を集める中、可搬性の高いマイクロサービスは重要なピースとなります。しかし、各サービスへのセキュリティ、認証・認可などの管理設定まで拡げて考えると可搬性を持たせることは非常に困難です。一般的には API *ゲートウェイ*を環境別に用意して対応しています。\r\n本セッションでは、この一見不可能に思える API *ゲートウェイ*まで含めたマイクロサービスのマルチ / ハイブリッドクラウド化するための技術を紹介します。また、AI+Data+CRM を標榜する Salesforce ならではの生成 AI を活用した超高速開発技法も、デモを交えてご紹介します。",
    "speakers": [
      {
        "id": 1680,
        "name": "Yoshihiro Mitsutomi"
      }
    ],
    "dayId": 28,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:20:00.000+09:00",
    "endTime": "2000-01-01T17:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 28,
    "conferenceDayDate": "2023-12-12",
    "presentationMethod": "現地登壇"
  }
]
