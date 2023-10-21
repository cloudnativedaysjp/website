import type { Talk } from "../types/talk";

export const CNDF2023Talks: Talk[] = [
  {
    "id": 1838,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1838/71/playlist.m3u8",
    "title": "たったこれだけ!? 大規模な情報漏洩に至ったパブリッククラウドの設定ミスとセキュリティデザインのポイント",
    "abstract": "パブリッククラウドの活用事例が増加する裏側でセキュリティインシデントの発生も確実に増加しています。\r\n本セッションでは実際に大規模な情報漏えいが発生した脆弱な環境を再現し、どのような攻撃によってインシデントに至ったのかを解説することで、クラウドを活用したシステム設計や運用管理に従事する受講者に対して注意喚起とセキュリティデザインのポイントを解説します。",
    "speakers": [
      {
        "id": 1473,
        "name": "Kazuhiko Tsuji"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1840,
    "conferenceId": 9,
    "trackId": 42,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1840/68/playlist.m3u8",
    "title": "継続的プロファイルによる大規模アプリケーションの性能改善",
    "abstract": "オブザーバビリティの普及が進む中、近年継続的プロファイルが注目を集めてきています。本セッションでは、オブザーバビリティシグナルとして、なぜプロファイルが注目されるようになったのか、そして継続的プロファイルの概念を紹介します。それらを踏まえて、実際に現時点で利用できる継続的プロファイルツールの概要と、実際にそれらを活用することでどのような問題が解決できるのかを、具体例を交えて解説します。",
    "speakers": [
      {
        "id": 1476,
        "name": "Yoshi Yamaguchi"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1842,
    "conferenceId": 9,
    "trackId": 42,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1842/69/playlist.m3u8",
    "title": "オンプレミス回帰の動きに備えよ～クラウドの手法をオンプレミスでも実現するには",
    "abstract": "最近はクラウドリフト＆シフトも一服感が出て、さらに「時代はクラウド」というコトバに踊らされてクラウド移行したものの、クラウドのデメリットに気づきオンプレミスの良さを再発見しているのか、「オンプレミス回帰」というコトバが静かに囁かされ始めています。各種調査結果においてもこの傾向は日本国内においても増加傾向を示していることから、実際にそういった動きが起きている、起きようとしているのは間違いないでしょう。しかし、クラウドの持つデメリットが許容できなくなったからといってオンプレミスに回帰しようにも、クラウドの持つメリット、利便性に慣れ親しんだところからのオンプレミス回帰は間違いなくハレーションを起こすでしょう。本セッションではNTTデータで大規模オンプレミス環境における開発環境のモダナイゼーションを推進してきた経験を基に、IaCの側面からクラウド技術をオンプレミスでも実現する手法を紹介します。",
    "speakers": [
      {
        "id": 1483,
        "name": "Ryo Sugahara"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1846,
    "conferenceId": 9,
    "trackId": 43,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1846/1846.m3u8",
    "title": "メルカリにおけるプラットフォーム主導のKubernetesリソース最適化とそこに生まれた🐢の可能性",
    "abstract": "PlatformチームではKubernetesのリソースの最適化を行っています。殆どのサービスが同一のクラスターに乗っていることから、Platformとして行う最適化の効果は大きい反面、莫大な量のサービスの詳細を把握し切ることはできない中、それらを壊さない安全なリソースの最適化が求められます。このセッションでは、Platformとして行われてきた全体一貫の最適化の試み/検証と、そこに産まれたツールTortoiseに関する紹介を行います。",
    "speakers": [
      {
        "id": 1477,
        "name": "Kensei Nakada"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1848,
    "conferenceId": 9,
    "trackId": 43,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1848/78/playlist.m3u8",
    "title": "初心者でもわかるKubernetes Scheduler拡張の全てとその最前線",
    "abstract": "Kubernetesにおけるスケジューリングをクラスターに合わせて最適化する方法は複数存在しますが、正しい設定には正しい理解が必要で、ハードルが高く見えているのも事実です。\r\nこの講演では、Schedulerにおける現在の拡張方法と、今まさに検討されているWasmを通した拡張を紹介します。その上で、最適化に必要なシミュレーターやパフォーマンステストなど周辺ツールの紹介を行います。",
    "speakers": [
      {
        "id": 1478,
        "name": "Kensei Nakada / Ikumu Kakinuma"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": true,
    "documentUrl": "https://speakerdeck.com/196ikuchil/chu-xin-zhe-demowakarukubernetes-schedulerkuo-zhang-noquan-tetosonozui-qian-xian",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1866,
    "conferenceId": 9,
    "trackId": 42,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1866/76/playlist.m3u8",
    "title": "自己診断能力の獲得を目指して",
    "abstract": "所属組織では2年前にビジネスの速度にシステムを追随させるために、技術戦略をボトムアップで行うグループを立ち上げました。このうち、改善サイクルの確立と自己診断能力の獲得を目的においた DevOps ワーキンググループの取り組みを紹介します。このグループでは自分たちが扱うあらゆるもの - コード・システム・組織・信頼性・生産性 - がどれだけやばいのか、やばくないのかを自分たちで把握できる Capability を組織に実装することを目的としています。様々なドメインの開発者、SRE、QA メンバーが集まり、指標を発掘し、改善サイクルを促す、そのサイクルそのものを改善していくメタな取り組みを2年間行ってきました。技術と組織の交差点の様子をお楽しみいただければと思います。",
    "speakers": [
      {
        "id": 1488,
        "name": "Takeshi Kondo"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1882,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1882/65/playlist.m3u8",
    "title": "Gateway API と eBPF で進化する GKE Networking",
    "abstract": "Kubernetes Networking 界隈で今ホットな Gateway API や eBPF といったテクノロジーが Google Kubernetes Engine (GKE) でどのように取り込まれて活用されているのかについてご紹介します。",
    "speakers": [
      {
        "id": 1522,
        "name": "Kazuki Uchima"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:15:00.000+09:00",
    "endTime": "2000-01-01T12:35:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "https://goo.gle/gccndf_s1",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1885,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1885/66/playlist.m3u8",
    "title": "k8sgpt Deep Dive: KubernetesクラスタのAI駆動型分析について",
    "abstract": "この講演では、AI駆動型ツールk8sgptの仕組み、機能、制限を掘り下げます。k8sgptはKubernetesクラスタをスキャンし、診断し、トリアージすることができますが、それはカスタマイズ可能なアナライザーと連携するAIプロバイダーを介して行います。しかし、AIの結果は必ずしも完全ではなく、経験と人間の判断がまだまだ重要です。SRE、DevOps、インフラエンジニアにとって、k8sgptの深い理解はKubernetes管理の新たな可能性を開くでしょう。",
    "speakers": [
      {
        "id": 1525,
        "name": "nwiizo"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1890,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1890/74/playlist.m3u8",
    "title": "パブリッククラウドにおけるQUIC現状確認2023年8月編",
    "abstract": "2023年5月23日にリリースされたnginx 1.25.0より、HTTP/3の実験的サポートが有効になりました。QUICがRFC9000等によって標準化されてから2年が経過し、少しずつQUIC及びHTTP/3の実装が一般的に使用できるようになってきています。\r\nこのトークでは、発表時点におけるAmazon Web ServicesやGoogle CloudでQUICが使用できるのか、できるならその導入方法について話します。\r\nQUIC及びHTTP/3について興味のある人を対象にしています。ただし、本番環境での運用にあたっての注意点や考慮すべき事項については、発表者に大規模な運用経験がないために言及することができません。",
    "speakers": [
      {
        "id": 1521,
        "name": "Yusuke Nakamura"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "https://slide.rabbit-shocker.org/authors/unasuke/cndf2023/",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1893,
    "conferenceId": 9,
    "trackId": 43,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1893/75/playlist.m3u8",
    "title": "23卒エンジニアのクラウドネイティブな学生時代",
    "abstract": "新人エンジニアが学生の時に過ごした「クラウドネイティブな学生時代」のお話です。\r\n\r\n学生時代、ハッカソンに参加してAzureのStatic Web AppsやFunctionsを使い優勝したり、インターンで学生コミュニティの企画・運営を行い、Dockerを用いたアプリをApp ServiceにデプロイしてCI/CDを構築するハンズオンイベントを開催したりしてきました。\r\n\r\nこのセッションでは、これまでの学生生活を振り返りながら、クラウドの便利なところやその使い方についての紹介をします。これからクラウドを触ってみたい学生や、今の大学生とクラウドの関わり方について知りたい方におすすめです！",
    "speakers": [
      {
        "id": 1532,
        "name": "Takatoshi Inaoka"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1907,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1907/61/playlist.m3u8",
    "title": "現場の課題に向き合うために大事にしていること",
    "abstract": "私はクアンドにて、自社プロダクトの構想から開発・運用・改善の一連の流れを経験しました。\r\nその中で、エンジニア組織としてビジネスインパクトを最大限に創出するために、何をなぜ大切にしているかを、実例も踏まえつつお話しできればと思います。",
    "speakers": [
      {
        "id": 1548,
        "name": "Arashi Takano"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:00:00.000+09:00",
    "endTime": "2000-01-01T11:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1908,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1908/72/playlist.m3u8",
    "title": "コンテンツ設計手法で変更に強いアプリケーションを実現する〜ローコードによるWebアプリのバックエンド実装",
    "abstract": "コンテンツを中心とした情報設計の手法によって、データ構造とインターフェースを疎結合に分離し、変更に強く、長期的な成長を促進するアプリケーションを構築できます。本セッションでは、情報アーキテクチャの設計方法論について説明する書籍『DESIGNING CONNECTED CONTENT デジタルプロダクトの長期的な成長を支える構造化コンテンツ』のエッセンスをWebアプリケーションのバックエンド実装にフォーカスを当てて解説しながら、構造化コンテンツをローコードで表現できるオープンソースソフトウェアのDrupalを例に実装方法を紹介します。最後に、クラウドネイティブプラットフォームのAcquia Cloud Platformで、実装したWebアプリケーションのデプロイ体験を向上する方法を紹介します。",
    "speakers": [
      {
        "id": 1549,
        "name": "Hideto Ishibashi / Hikaru Maruyama"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Application / Development",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/acquiajp1/kontentushe-ji-shou-fa-debian-geng-niqiang-iapurikesiyonwoshi-xian-suru-rokodoniyoruwebapurinobatukuendoshi-zhuang-number-cndf2023",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1910,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1910/62/playlist.m3u8",
    "title": "クラウドネイティブの基盤要素、コンテナの今と未来",
    "abstract": "何気なく普段使っているコンテナ、みなさんどのくらい知っていますか？コンテナがどのようなことができたら面白そうですか？\r\n本セッションではコンテナの現状や技術要素について説明し、発表者の視点から独断と偏見で選んだ今後楽しそうなコンテナ周りの注目技術や機能について語ります。セッションを聞いた後はぜひ現状のコンテナの『べき』を外してみなさんがほしいコンテナを一緒に考えてみましょう。",
    "speakers": [
      {
        "id": 1551,
        "name": "Toru Komatsu"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:25:00.000+09:00",
    "endTime": "2000-01-01T11:45:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/utam0k/kuraudoneiteibunoji-pan-yao-su-kontenanojin-towei-lai",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1911,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1911/64/playlist.m3u8",
    "title": "人工衛星運用システムにおけるクラウドアーキテクチャ設計",
    "abstract": "QPS研究所では、人工衛星の運用を行う全てのシステムをフルクラウドで構築しています。\r\n多数の人工衛星を効率よく運用していくためのシステムアーキテクチャ、\r\nおよび人工衛星ならではの課題やそれに向けたクラウド技術を活用した対策についてもご紹介します。",
    "speakers": [
      {
        "id": 1552,
        "name": "Shuichi Tanaka"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T11:50:00.000+09:00",
    "endTime": "2000-01-01T12:10:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1912,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1912/68/playlist.m3u8",
    "title": "CDR(Cloud Detection and Response)って何？ -実は様変わりしているセキュリティの世界を振る舞い検知のデファクトスタンダードFalcoで体感する40分-",
    "abstract": "コンピュート、ネットワーク、ストレージのインフラ3要素が、過去20年間で急速に進化し、低コストになっています。AIの進化も、実はこのような背景に有るかと思います。\r\nインフラの進化と同時に、技術の多様化も進んでおり、特にクラウドネイティブ周りでは、過去に想像もできなかったアプリケーションも登場してきました。\r\n　セキュリティも同様に、今までの守り方では通用しなくなって来ているのを御存知でしょうか？ 本セッションでは、比較的新しい概念であるCDR(Cloud Detection and Response)について、デファクトスタンダードツールであるFalcoを通して、実際の攻撃対処の例をリアルタイムでお見せします。ワークロードやクラウド、認証基盤やGit等、最新のインフラに必要な要素をセキュリティカメラのようにリアルタイムに監視する手法を皆様に紹介します。",
    "speakers": [
      {
        "id": 1553,
        "name": "Mac Kawabata / Yo Takeuchi"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://sysdig.jp/wp-content/uploads/Sysdig_CNDF_2023-8-3_v2.pdf",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1913,
    "conferenceId": 9,
    "trackId": 41,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1913/1913.m3u8",
    "title": "Enterprise Generative AI on cloud Native",
    "abstract": "乞うご期待",
    "speakers": [
      {
        "id": 1554,
        "name": "Ryutaro Tsuji"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:40:00.000+09:00",
    "endTime": "2000-01-01T13:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kametaro/enterprise-generative-ai-on-cloud-native",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1914,
    "conferenceId": 9,
    "trackId": 43,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1914/73/playlist.m3u8",
    "title": "ArgoCD version up を実施するメリットと注意点",
    "abstract": "freeeでは、ArgoCDを用いてGitOpsによるKubernetesの運用をしています。\r\n本セッションは、すでにArgoCDを本番運用している受講者向けのセッションです。\r\nArgoCDのversion upによって得られるメリットや最新機能、対応できる脆弱性の紹介をします。\r\nまたArgoCD自体の検証環境の重要性、version up作業前や作業時に確認しておきたい注意点についてもお話します。",
    "speakers": [
      {
        "id": 1555,
        "name": "Hikaru Miyazawa"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "上級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1916,
    "conferenceId": 9,
    "trackId": 43,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1916/77/playlist.m3u8",
    "title": "ElasticsearchによるAIOps",
    "abstract": "ChatGPTに代表される生成AIが世間を賑わせていますが、検索老舗のElasticsearchも当然この方面は取り組んでいます。\r\n機械学習を使ったAIOpsからOpen AIと連携させるSecurity Assistant機能など、多彩な機能と新しい使い方をご紹介いたします。",
    "speakers": [
      {
        "id": 1557,
        "name": "Takeo Furukubo"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  },
  {
    "id": 1917,
    "conferenceId": 9,
    "trackId": 42,
    "videoPlatform": null,
    "videoId": "https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cndf2023/talks/1917/70/playlist.m3u8",
    "title": "SIerが考えるクラウドネイティブなサービスとコンテナ基盤としてのF5 XC活用方法",
    "abstract": "昨今ではシステムをモダナイズ化するにあたり、エッジやマルチクラウドなどアプリケーションを動作させる環境の選択肢が増えつつあります。\r\n多様化するワークロードにより実現できることが増えてきた一方、検討する項目が多くなり導入に踏み切れないお客様も存在すると思います。\r\nNECネッツエスアイではこうした課題を解決するべく、どのような環境でも適応可能な新しいプラットフォームサービスを検討しております。\r\n今回は弊社のクラウドネイティブに関する取り組みと検討中サービスの概要を、F5 XCの機能を交えてご紹介します。",
    "speakers": [
      {
        "id": 1558,
        "name": "Ryuichi Takei / Akira Suzuki"
      }
    ],
    "dayId": 25,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 25,
    "conferenceDayDate": "2023-08-03",
    "presentationMethod": "現地登壇"
  }
]
