import type { Talk } from '../types/talk'

export const CICD2023Talks: Talk[] = [
  {
    id: 1755,
    conferenceId: 8,
    trackId: 40,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1755/playlist.m3u8',
    title: 'インフラCI/CDの継続的改善の道のり',
    abstract:
      'ペパボが提供しているサービスのインフラは現在Kubernetesへの移行を積極的に実施しています。一方で歴史の長いサービスではVMで動いているアプリケーションもまだまだあるというのが実情となっています。その中で「インフラのCI/CDが複雑でアプリケーションエンジニアが触りにくくなってしまいインフラの構成変更のたびにSREチームの作業が必要になっている」という課題が発生していました。\r\n本セッションでは「ペパボのインフラCI/CDがどのように実装されているのか」と「抱えていた課題に対してどのように解決するべきかのアイデアと実例」についてご紹介します。',
    speakers: [
      {
        id: 1430,
        name: 'Ryuichi Watanabe',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T15:20:00.000+09:00',
    endTime: '2000-01-01T16:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl:
      'https://speakerdeck.com/ryuichi1208/inhuraci-cdji-sok-de-gai-shan-nodao-nori',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '事前収録',
  },
  {
    id: 1760,
    conferenceId: 8,
    trackId: 39,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1760/55/playlist.m3u8',
    title:
      '自分のデータは自分で守る − あなたのCI/CDパイプラインをセキュアにする処方箋',
    abstract:
      'モダンな開発においてはもはやCI/CDは必要不可欠な時代になりました。しかし、そういった継続的な自動化を行っていくにあたって、全ての人が頭を悩ませているのがシークレットの管理です。なるべく安全な場所にシークレットを保存するのが鉄則ですが、つい最近もCI/CDのサービスから大規模な流出事故が起きました。\r\n\r\nもしそれによって大事なデータが侵害され、顧客に被害が出たとしたらどうしましょう。\r\n流出した原因が自分たちになかったとしても、責任からは逃れられません。自分たちのデータは、自分で守っていかなければならないのです。\r\n\r\nシークレットを守るためには、『シークレットが漏れないように安全に管理する』のが第一ですが、それに加えて『そもそも管理しなくて良いようにする』アプローチもありますし、『漏れたとしても影響がない』ようにすることも大事です。\r\n\r\n本セッションでは、上記のようなCI/CDパイプラインをセキュアにする方法を、HashiCorp Vaultの運用を通じた経験を踏まえながら解説します。',
    speakers: [
      {
        id: 1437,
        name: 'Kazuto Kusama',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T15:20:00.000+09:00',
    endTime: '2000-01-01T16:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1766,
    conferenceId: 8,
    trackId: 39,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1766/53/playlist.m3u8',
    title: 'GitHub Actionsと"仲良くなる"ための練習方法',
    abstract:
      'GitHub ActionsでCI/CDを構築するときに「試行錯誤が大変」という課題があると思います。\r\nCI/CDのためのランナーはGitHub上に用意されているものであり、完全なローカル環境での練習が難しいものです。\r\n\r\nそのような課題の解決策として、 https://github.com/nektos/act というOSSがあるのはご存知な方も多いのではないでしょうか。\r\n\r\n本セッションでは、GitHub Actionsを使ってCI/CDの構築をしている方、これから学んでいこうとしている方を対象に、ローカル環境とGitHub環境の2つでの練習方法についてご紹介します。\r\n',
    speakers: [
      {
        id: 1441,
        name: 'Yuta Matsumura',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T13:20:00.000+09:00',
    endTime: '2000-01-01T14:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl:
      'https://speakerdeck.com/tsubakimoto_s/github-actionsto-zhong-liang-kunaru-tamenolian-xi-fang-fa',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1767,
    conferenceId: 8,
    trackId: 38,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1767/58/playlist.m3u8',
    title:
      'Kubernetesリソースの安定稼働に向けた　TerratestによるHelmチャートのテスト自動化',
    abstract:
      'ソフトバンクでは、Fluxcdを用いてGitOpsによる開発を進めています。\r\nGitOpsを実現したことにより、Gitリポジトリのコードの更新だけでデプロイできるため、環境の管理が楽になりました。\r\nしかし管理するコードが増えるにつれて、デプロイ後のバグが頻出するようになり、品質が低下し管理コストが大幅に増大してしまいました。\r\nそこで私たちは、品質向上と生産性向上を目的として、一般的なアプリケーションのように、インフラに対する単体テスト・結合テストを実装しました。\r\n\r\n今回の発表では、Terratestを用いたインフラの単体テスト・結合テストの考え方と実装についてお話します。',
    speakers: [
      {
        id: 1443,
        name: 'Nobuhiko Kokubo',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T17:20:00.000+09:00',
    endTime: '2000-01-01T18:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl:
      'https://speakerdeck.com/kokubo/automating-helm-chart-testing-with-terratest-for-stable-operation-of-kubernetes-resources',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1771,
    conferenceId: 8,
    trackId: 39,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1771/59/playlist.m3u8',
    title:
      '"State of DevOps" ウェブアプリケーションのdeliveryを考えるとき、今何をすればいいのか(実践編)',
    abstract:
      'State of DevopsなどのreportによってDeliveryにおけるパフォーマンスについて相対的な位置を確認することができるようになってきましたが、一方でどうすればさらに高いパフォーマンスを発揮できるのか、あるいはそもそもどうすれば必要なメトリクスを取得し自身の位置を確認できるのかという課題に関してはあまり議論されていません。\r\n本講演では、CI/CDについて自社の取り組みを紹介しつつ、より一般的に当てはめられるよう、デプロイが手動で実施されているところから理想形まで進んでいくまでのロードマップをCloud Native Trail Mapと比較しつつとりまとめるという取り組みをしてみます。',
    speakers: [
      {
        id: 1445,
        name: 'fujiwara shunki',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T17:20:00.000+09:00',
    endTime: '2000-01-01T18:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1773,
    conferenceId: 8,
    trackId: 38,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1773/50/playlist.m3u8',
    title: '大規模レガシーテストを倒すためのCI基盤の作り方',
    abstract:
      '筆者の所属企業では現在CI基盤の作り直しを行なっています。従来のCI基盤には以下のような課題がありました。\r\n\r\n* レガシーなテストがあり、環境に触れづらく、なるべくそのまま移行したい\r\n* テスト件数が非常に多い（10,000件〜）\r\n* 富豪的にSaaS/クラウドリソースを使っており、コストが最適でない\r\n* コードリポジトリであるGitHubとの連携をもっといい感じにしたい\r\n\r\nこれらの課題を解決するためにどのような技術選定とアーキテクチャ設計をし、またいかにコスト等を最適化したかをお話しします。\r\n\r\nまた、CI基盤のベースとしてCloud Build、Cloud Functions、Cloud Pub/SubなどGoogle Cloudのサービスを用いており、それらについての具体的なTipsも交える予定です。',
    speakers: [
      {
        id: 1448,
        name: 'Uchio Kondo',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T12:20:00.000+09:00',
    endTime: '2000-01-01T13:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1774,
    conferenceId: 8,
    trackId: 38,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1774/54/playlist.m3u8',
    title:
      'トランクベース開発の実現に向けた開発プロセスとCIパイプラインの継続的改善',
    abstract:
      'トランクベース開発とは、Gitのようなバージョニングを用いた組織開発において、高いデリバリー速度と開発パフォーマンスを維持するために考案された手法です。我々認証認可チームはこの手法を用いた組織開発を2年以上行っており、また並行して開発パフォーマンスの可視化、ボトルネックの洗い出し、そして開発プロセスやCIパイプラインの見直しを通して、開発速度の継続的な改善に努めてきました。本セッションでは、この2年間を通して得られた知見をもとに、トランクベース開発の具体的な実践方法について解説します。',
    speakers: [
      {
        id: 1449,
        name: 'Anri Kobayashi',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T15:20:00.000+09:00',
    endTime: '2000-01-01T16:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl:
      'https://speakerdeck.com/aanrii/torankuhesukai-fa-noshi-xian-nixiang-ketakai-fa-hurosesutocihaihurainnoji-sok-de-gai-shan',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1776,
    conferenceId: 8,
    trackId: 40,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1776/playlist.m3u8',
    title: '小さく始める Blue/Green Deployment',
    abstract:
      '自動運転サービスではエッジからクラウドまでを含めた動作等の複雑な要件のもと、安全性を重視したリリースが求められます。\r\n本セッションでは、メンテナンス時間を設けて安全にリリースを行なっていたシステムを、ダウンタイムなしでリリースが可能な状態にどのように段階的に移行していくかについて、EKS on Fargate 上での Argo Rollouts を使った Blue/Green Deployment の導入を中心に具体例を交えながら紹介します。',
    speakers: [
      {
        id: 1451,
        name: 'Hideaki Masuda',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T13:20:00.000+09:00',
    endTime: '2000-01-01T14:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl: 'https://www.docswell.com/s/TIER_IV/5388GV-2023-03-17-093717',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '事前収録',
  },
  {
    id: 1777,
    conferenceId: 8,
    trackId: 38,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1777/52/playlist.m3u8',
    title:
      '最高の開発者体験を目指してAWS CDKでCI/CDパイプラインを改善し続けている話',
    abstract:
      '私達NewsPicks/AlphaDriveは、プロダクト開発者全員が「ユーザーに価値を届ける」ことを重視し、フロントエンド・バックエンドの開発に限らずインフラ・DevOpsにも積極的に関与しています。\r\nAWS CDKの導入により、開発者自身が馴染みのあるプログラミング言語でインフラやCI/CDパイプラインの構築・管理を行うことができ、開発者がフルサイクルのオーナーシップを発揮することに役立っています。しかし、サービスの規模やチームが拡大するにつれて、運用上の問題も見えてきました。\r\n本セッションでは、CDKを導入したことによる恩恵や私達のCI/CDパイプライン、また抱えている問題やそれに対する試行錯誤をご紹介させていただきます。\r\n(NewsPicks/AlphaDriveで20分ずつの2パート40分の発表を予定しています)',
    speakers: [
      {
        id: 1452,
        name: 'Yuki Ando',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T13:20:00.000+09:00',
    endTime: '2000-01-01T14:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1780,
    conferenceId: 8,
    trackId: 40,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1780/playlist.m3u8',
    title:
      'インフラ専任者・チームがいない組織で開発ワークフローの継続的改善に挑戦してみた',
    abstract:
      '機能開発を優先するスタートアップで、アプリケーション開発者が開発ワークフローの継続的改善に挑戦しています。\r\n長年使ってきたPaaS（Heroku）では主な顧客である金融機関に求められる高いセキュリティ基準を満たせなかったり、イメージビルド面でもベンダーのライフサイクルに依存してしまう課題などが露呈してきたため、AWSに移行する計画が持ち上がりましたが、PaaSと比べてCDの構築運用負荷が高く、PaaSに回帰しました。\r\n小規模組織での事例として私たちの技術選定や経験を紹介します。',
    speakers: [
      {
        id: 1455,
        name: 'chiroru & Kousuke Ida & trowems',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T12:20:00.000+09:00',
    endTime: '2000-01-01T13:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '事前収録',
  },
  {
    id: 1787,
    conferenceId: 8,
    trackId: 40,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1787/60/playlist.m3u8',
    title: 'OSSで構築するOpenAPI開発のCI/CD',
    abstract:
      'OpenAPIを開発するときに、リクエストを送信して確認したり、テストケースを実行したりする場面がたくさんあります。\r\n本セッションでは、OpenAPIの設計＆開発、デバッグとユニットテストなどの機能を持つOSSソフトInsomniaから、Kongが提供しているOSSツールとGithub Actionsを利用してOpenAPIを実際に公開するまでの流れをご紹介します。\r\n開発者がOpenAPIのソースコードをコミットした後に、構文チェックから、リクエストの送信、テストケースの実行、プラットフォームへの公開などが全てWorkflowに定義し自動化できます。OpenAPI開発のエコシステムを説明しながら、実際にKong GatewayやDeveloper PortalへのPublishをデモを通して皆様に一緒に体験していきたいと思います。',
    speakers: [
      {
        id: 1462,
        name: 'Wenhan Shi',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T17:20:00.000+09:00',
    endTime: '2000-01-01T18:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: 'https://speakerdeck.com/xibuka/cd',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1789,
    conferenceId: 8,
    trackId: 39,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1789/51/playlist.m3u8',
    title: 'GitHub ActionsとDeployGateで始めるAndroidアプリのCI/CD',
    abstract:
      'モバイルアプリ開発はWebアプリ開発とは違い、社内で開発版アプリを配布する環境を用意したりアップデートするのが面倒です。\r\n本セッションでは、GitHub ActionsとDeployGateを連携させることで、アプリのUnitTestからDeployGateを用いた開発版アプリの配布までの自動化方法を紹介していきます。',
    speakers: [
      {
        id: 1464,
        name: 'Yuhei FUJITA',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T12:20:00.000+09:00',
    endTime: '2000-01-01T13:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: 'https://speakerdeck.com/yuhei_fujita/ci-cd-con-2023',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1791,
    conferenceId: 8,
    trackId: 39,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1791/playlist.m3u8',
    title:
      '昔とあるCI/CDツールを使って馬車馬のように働いていた私が、GitLabを使い始めて気付いた「CI/CDの質」',
    abstract:
      '「CI/CDを実行できれば、どのツールも同じである」というお考えをお持ちの方はいませんか？実はCI/CDはツールによって質に大きく差が出ることがあります。特に、どのようなスキャンを実施するか、結果をどう管理するか、CI/CDのロジックは誰が管理するか等はプラットフォームに大きく依存します。本講演では、以前別のツールでCI/CDを実行していた私が、GitLabを使うようになって気付いたこと、さらにはより質の高いCI/CDを実施するための方法をお伝えいたします。',
    speakers: [
      {
        id: 1465,
        name: 'Naoharu Sasaki ',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T16:20:00.000+09:00',
    endTime: '2000-01-01T17:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '事前収録',
  },
  {
    id: 1792,
    conferenceId: 8,
    trackId: 38,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1792/56/playlist.m3u8',
    title: 'ローコードで実現するDevOps ～継続的テスト編～',
    abstract:
      '効果的なテストの自動化は、DevOpsを実現するための重要な手段の1つです。DevOpsの文脈で、様々な自動化がイノベーションを起こすには不可欠であることは周知の事実ですが、皆さまは現状の結果に満足しているでしょうか。\r\n\r\nこのセッションでは、mablが提供するローコードプラットフォームによって、パイプライン上に自動テストを直接統合する方法をご紹介します。チーム全体がテスト工程を早期に実施(シフトレフト)できるだけでなく、これまで抱えていたパイプライン全体におけるテスト工程の課題を克服する戦略もご紹介します。',
    speakers: [
      {
        id: 1466,
        name: 'Shohei Oda (odasho)',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T16:20:00.000+09:00',
    endTime: '2000-01-01T17:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl:
      'https://speakerdeck.com/odasho/rokododeshi-xian-surudevops-ji-sok-de-tesutobian',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
  {
    id: 1793,
    conferenceId: 8,
    trackId: 39,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1793/playlist.m3u8',
    title: 'Karpenter を活用した GitLab CI/CD ジョブ実行基盤の自動スケール',
    abstract:
      'GitLab CI/CD は GitLab をリポジトリとして採用しているプロジェクトにおいて，手軽に使える CI/CD ツールとしてよく用いられています。\r\nこのセッションでは，Kubernetes クラスタ上でセルフホストしている GitLab Runner のジョブ実行基盤に Karpenter を導入し，ノードレベルで自動スケールを実現した事例を紹介します。\r\nGitLab をすでにご使用の方や CI/CD 基盤の運用をより効率的に行いたい方は是非ご覧ください。',
    speakers: [
      {
        id: 1467,
        name: 'Toshiki Shimomura',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T14:20:00.000+09:00',
    endTime: '2000-01-01T15:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '事前収録',
  },
  {
    id: 1794,
    conferenceId: 8,
    trackId: 40,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1794/playlist.m3u8',
    title:
      'すべてのアプリにWAFを組み込むCICDの実現 〜開発ツールとしてのNGINX WAF活用方法〜',
    abstract:
      'アプリがマイクロサービス化して数が増えると、同時にセキュリティの懸念も増えてしまいます。開発者を含めて全員がセキュリティを意識しなければセキュアなマイクロサービスの実現は不可能です。\r\n開発者の負担を最小限に、NGINX App Protect WAFを活用してすべてのアプリをセキュアにするCICD、シフトレフトの実現方法についてお話します。',
    speakers: [
      {
        id: 1468,
        name: 'F5: Yoichi Komine / Hitachi: Kiminori Kurihara',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T14:20:00.000+09:00',
    endTime: '2000-01-01T15:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '中級者',
    talkCategory: '',
    onAir: false,
    documentUrl:
      'https://interact.f5.com/rs/653-SMC-783/images/%E9%85%8D%E5%B8%83%E8%B3%87%E6%96%99-F5_CICD_Conference2023.pdf',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '事前収録',
  },
  {
    id: 1796,
    conferenceId: 8,
    trackId: 40,
    videoPlatform: null,
    videoId:
      'https://d3pun3ptcv21q4.cloudfront.net/mediapackage/cicd2023/talks/1796/57/playlist.m3u8',
    title: 'OSSでセキュリティをCI/CDパイプラインに透過的に取込む方法',
    abstract:
      'CI/CDパイプラインを使うことで、アプリケーションのリリーススピードの高速化を実現できるようになりましたが、対策方法によってセキュリティが足かせとなり、リリース作業を遅らせたり、ときには停止させたりすることがあります。\r\nそこで「高速」で「高品質」なデリバリーを実現するためには、下記のようなセキュリティ対策をCICDパイプラインに透過的に取込む必要があります。\r\n・脆弱性とコンプライアンスのスキャン\r\n・不正なデプロイの自動阻止\r\n・Security policy as Codeでポリシー設定の自動化\r\n本セッションでは、100%OSSのNeuVectorで、どのように「高速」で「高品質」なデリバリーを実現するか、デモを交えながら解説します。\r\n',
    speakers: [
      {
        id: 1470,
        name: 'Jianqiang Cheng',
      },
    ],
    dayId: 21,
    showOnTimetable: true,
    startTime: '2000-01-01T16:20:00.000+09:00',
    endTime: '2000-01-01T17:00:00.000+09:00',
    talkDuration: 0,
    talkDifficulty: '初級者',
    talkCategory: '',
    onAir: false,
    documentUrl: '',
    conferenceDayId: 21,
    conferenceDayDate: '2023-03-20',
    presentationMethod: '現地登壇',
  },
]
