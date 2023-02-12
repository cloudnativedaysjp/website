import type { Talk } from "../types/talk";

export const CNDT2020Talks: Talk[] = [
  {
    "id": 1,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454724543",
    "title": "Amazon EKSでクラウドネイティブアプリケーションの開発プロセスを追求する",
    "abstract": "このセッションでは、CI/CDを初めとした開発プロセスについて整理し、Kubernetes環境におけるクラウドネイティブアプリケーションの代表的な開発プロセスの例を紹介します。そして、Amazon EKSやAWSのサービス、OSSについて紹介しながら、その実装例をご覧いただきます。",
    "speakers": [
      {
        "id": 1,
        "name": "林 政利"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 2,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454805424",
    "title": "Cloud Native Onboarding ~実践で身につけるモダンインフラの基礎~",
    "abstract": "クラウドネイティブという言葉の定義には、管理性や可観測性が高く、自律制御したシステムなどの意味が含まれています。インフラの観点で言えば、自律制御の恩恵は非常に大きいですが、その一方でアプリケーションの正常性や健全性が保たれているか、継続的にサービスを提供できる品質になっているかなどの観点も含めて考慮する必要があります。\n本セッションでは、今までオンプレでインフラを守ってきたエンジニアが新しいプロジェクトに入り、開発の知見やアプリケーションの仕組みに正面からぶつかりながら「クラウドネイティブ」なインフラを作るために乗り越えながら開発者出身のエンジニアとともにオンボーディングを進めてきた事例についてお話します。",
    "speakers": [
      {
        "id": 2,
        "name": "太田 航平"
      },
      {
        "id": 3,
        "name": "三神 拓哉"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/inductor/cloud-native-on-boarding ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 3,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454950675",
    "title": "Cloud Native環境におけるエンタープライズシステムに対する高可用性実現への取り組み",
    "abstract": "パブリッククラウドやKubernetesを用いていることで得られるメリットは数多くありますが，その反面でシステム全体がより複雑になり，エンタープライズシステムに求められる可用性を確保するのは容易では有りません。\n本セッションではNTTコミュニケーションズにおいて実践している可用性向上への取り組みをChaosEngineeringの要素を踏まえて得られた成果，知見を皆様と共有したいと考えています。",
    "speakers": [
      {
        "id": 4,
        "name": "昔農 凜太朗"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 4,
    "conferenceId": 1,
    "trackId": 5,
    "videoPlatform": null,
    "videoId": "454775846",
    "title": "CockroachDB から覗く形式手法の世界",
    "abstract": "バグのない分散システムの設計は果たして可能でしょうか？\nこの問いに対する一つの答えとして、CockroachDB では形式手法ツール TLA+ を用いて分散トランザクションの正しさを担保しています。\n形式手法はシステムの挙動を数学的に解析する技法で、「ノードが特定のタイミングで故障した場合にのみ発生するバグ」といった再現困難な問題を確実に検出することができます。\n本講演では、CockroachDB の事例を通して、形式手法が実世界で活用されている様子をお伝えします。",
    "speakers": [
      {
        "id": 5,
        "name": "チェシャ猫"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ytaka23/cloudnative-days-tokyo-2020",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 5,
    "conferenceId": 1,
    "trackId": 5,
    "videoPlatform": null,
    "videoId": "454774931",
    "title": "Dapr × Kubernetes ではじめるポータブルなマイクロサービス",
    "abstract": "アプリケーションのデザインパターンから、インフラストラクチャのコンポーネントに至るまで、マイクロサービスの導入には幅広い考慮が必要です。\n本セッションでは、Dapr が解決しようとしているマイクロサービスの課題を整理し、ポータブルでイベントドリブンなマイクロサービスを導入するために Dapr がビルディングブロックとしてどのように活用できるかをご紹介します。\nマイクロサービスの導入を検討されている方や、その開発プロセスにお悩みの方にとって、新しい気付きを与えられるようなセッションを目指しています。",
    "speakers": [
      {
        "id": 6,
        "name": "宇都宮 雅彦"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/polar3130/portable-microservices-with-dapr-and-kubernetes",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 6,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454737077",
    "title": "GitOps ツール徹底比較！あなたにぴったりな GitOps ツールがきっと見つかる",
    "abstract": "みなさんは GitOps してますでしょうか？\n世の中には様々な GitOps を実現してくれるツールがあります。(ArgoCD, Flux, JenkinsX 等)\n本セッションではそれらのツールを様々な角度から比較します。\nあなたにぴったりなツールを共に探しましょう！\nこれから GitOps 導入を検討している人にとっても役に立つセッションです。",
    "speakers": [
      {
        "id": 7,
        "name": "長谷川 誠"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/makocchi/why-not-find-your-favorite-gitops-tools",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 7,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454720439",
    "title": "How to Schedule Machine Learning Workloads Nicely In Kubernetes",
    "abstract": "Kubernetesにおける機械学習(バッチ)ジョブのスケジューリングについては世界中で様々な取り組みがなされており、OSSも複数公開されています。Kubernetes本体においてもsig-schedulingにおいて、kube-scheduler(デフォルトスケジューラ)の柔軟性・拡張性を高めるべく開発が推進されています。本公演ではそうした取組やOSSを紹介すると共に、Kubernetesクラスタにおいて機械学習ジョブをうまくスケジューリングするために考慮すべきポイント、それらがどのように実現されるかを解説します。",
    "speakers": [
      {
        "id": 8,
        "name": "大村 伸吾"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "ML / GPGPU / HPC",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/pfi/how-to-schedule-machine-learning-workloads-nicely-in-kubernetes-cndt2020-cloud-native-days-tokyo-2020 ",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 8,
    "conferenceId": 1,
    "trackId": 5,
    "videoPlatform": null,
    "videoId": "454778071",
    "title": "Kubernetes 水平オートスケーリング 実践入門",
    "abstract": "オートスケーリングによってシステムの負荷の増減に自動的に対処する…。これはKubernetesエンジニアたちが追い求める大きなロマンのひとつです。\n\nしかし現実にこれを適用するとなると話は簡単ではありません。スケーリングに使うメトリクスの選定、そのメトリクスを収集しスケーリングをトリガする仕組みの実装、適用領域の見極めといった、様々な取組みが必要です。\n\nこのセッションでは、そんな簡単なようで奥の深い水平オートスケーリングの世界を、Kubernetesで実現する仕組みも交えて解説いたします。",
    "speakers": [
      {
        "id": 9,
        "name": "早川 博"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hhiroshell/a-practical-guide-to-horizontal-autoscaling-in-kubernetes",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 9,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454734301",
    "title": "Kubernetes-native な管理をおこなう CI/CD 2020",
    "abstract": "様々なものごとをマニフェストで記述して自動化するエコシステムにより、管理系統をすべてKubernetesに寄せることができます。\nCI/CDについても、Tekton Pipeline & Triggers、ArgoCD、Kaniko、Harbor Operator、Trivy、Conftest、OPA Gatekeeperなどを用いてGitOpsを実現するKubernetes-nativeなCI/CD環境を作り上げることが可能です。\n本セッションでは2020年に作るべき、CI/CD環境について紹介します。",
    "speakers": [
      {
        "id": 10,
        "name": "青山 真也"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/masayaaoyama/cndt2020-k8s-amsy810",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 10,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454736881",
    "title": "KubernetesにSecurityをねじこむ！ - マイクロサービス基盤における多層防御システム構築の軌跡",
    "abstract": "freeeが開発・提供している会計SaaSビジネスでは、顧客会計情報管理や金融機関との連携を実現するため、堅牢なセキュリティの実現が必須です。しかし、一方で、ビジネスを取り巻く情勢は流動的であり、需要や機会に併せて迅速にバリューを届けていくには高い開発生産性を維持することが必要です。\nfreeeでは、開発組織の規模拡大と生産性を両立するため、サービスアーキテクチャ/開発体制をマイクロサービスに絶賛移行中です。\n本セッションでは、基盤としてEKSをいち早く採用し、前述の高いセキュリティ要件を満たす上で直面した、この1年間の苦闘の歴史、良かった点、悪かった点をさらけ出します。\nトピック:\n- EKSにおけるサービスや顧客データを守るfreeeにおける多層防御システムの現状\n- Clusterへのアクセス制御や認証・認可、運用・監査ロギング及び監視・侵入検知\n- Clusterを適切な状態に保つための各仕組みのコード化やCI方法",
    "speakers": [
      {
        "id": 11,
        "name": "山本 佳代子"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yamamo/cndt2020",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 11,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454732461",
    "title": "Linux Observability with BPF Performance Tools",
    "abstract": "BPFを使ったパフォーマンス分析ツールを使うと、Linuxの伝統的なコマンド以上に、OSのレイヤーをより詳細に分析できます。\n本セッションでは、bccやbpftraceなどのBPFツールの基本を説明しつつ、プロダクション環境も見据えたKubernetes環境でのトラブルシューティング/パフォーマンスチューニングでの利用方法や考え方、注意点などを解説します。\nBPFツールを使ってより正確なトラブルシューティングやパフォーマンスチューニングができるように、知見を共有します。",
    "speakers": [
      {
        "id": 12,
        "name": "磯 賢大"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/govargo/cndt2020-linux-observability-with-bpf-performance-tools",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 12,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454718696",
    "title": "Observabilityをはじめよう！ Metrics/Logs/Traces チュートリアル",
    "abstract": "Kubernetesを代表とするシステムとアプリケーションの監視をする上で、Observabilityは欠かせない要素になっています。しかし、それを実現するためには何から手を付けたら良いのか、よく分からないという方は多いのではないでしょうか。\n本セッションでは、Observabilityを実現するための全体像と、Metrics/Logs/Tracesぞれぞれの視点でのファーストステップをご紹介します。",
    "speakers": [
      {
        "id": 13,
        "name": "仲亀 拓馬"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 13,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454721047",
    "title": "PersistentVolumeの一歩進んだ使い方",
    "abstract": "KubernetesではPersistentVolumeの関連機能としてVolume SnapshotsやCloningなどストレージの機能を活かしたものが登場してきました。\n本発表では、PersistentVolumeを単に割り当て使うだけでなく、これらの機能を活かした一歩進んだ活用方法を紹介します。さらに、運用で欠かせないPersistentVolumeの監視方法についても紹介します。",
    "speakers": [
      {
        "id": 14,
        "name": "坂下 幸徳"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ysakashita/persistentvolumefalse-bu-jin-ndashi-ifang",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 14,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454719326",
    "title": "Real World Migration from HTTP to gRPC",
    "abstract": "Wantedly は約 100 のマイクロサービスを組み合わせて、Wantedly Visit や Wantedly People というサービスを開発しています。これまではマイクロサービス間通信の中心技術として HTTP/1.1 を採用してきましたが、昨年から gRPC の導入を開始し、今では traffic の多い主要な通信部分は gRPC へ移行して averatge latency の 50% 改善、90%tile latency の 85% 改善を達成できました。\nこのトークでは、gRPC という通信技術についての詳細な説明から、gPRC を利用することによるメリット、gRPC を利用することで実際に得られたパフォーマンス改善、gRPC への移行を行うための実践的な TIps についてお話しします。移行の際にはツールやライブラリの開発や開発フローの整備など技術的、組織的な挑戦を行なっており、その詳細についてもお話しいたします。",
    "speakers": [
      {
        "id": 15,
        "name": "南 直"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/south37/real-world-migration-from-http-to-grpc-number-cndt2020",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 15,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454721680",
    "title": "Reliable and Performant DNS Resolution with High Available NodeLocal DNSCache",
    "abstract": "Kubernetes のサービス検出において、DNS による名前解決は重要な要素です。コロプラの高負荷なタイトルでは、独自実装の NodeLocal DNSCache を各ノードに配備して、名前解決のレイテンシ悪化やエラー率の上昇に対応してきました。本セッションでは、Kubernetes における名前解決の落とし穴とその緩和策の一つである NodeLocal DNSCache の仕組み、マルチクラスターの要件を満たすために独自実装に走った背景、ローリングアップデートを可能にする HA 構成の戦略について紹介します。",
    "speakers": [
      {
        "id": 16,
        "name": "長澤 翼"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Networking",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/toversus/reliable-and-performant-dns-resolution-with-high-available-nodelocal-dnscache",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 16,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454737662",
    "title": "Stargz Snapshotter: イメージのpullを省略しcontainerdでコンテナを高速に起動する",
    "abstract": "イメージのpullはコンテナ起動処理のうち最も時間のかかるもののひとつです。CNCF containerdでは今、そのイメージのpullを省略し、必要なファイルをオンデマンドにpullする方式(lazy pull)により、巨大なコンテナでも高速に起動することを目指したプラグイン「Stargz Snapshotter」の開発が非コアサブプロジェクトとして進められています。発表者はそのメンテナを務めており、本セッションでは技術背景やベンチマーク結果に加えて、プロジェクト立ち上げ経緯や最新動向なども含め徹底的に掘り下げます。",
    "speakers": [
      {
        "id": 17,
        "name": "徳永 航平"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/KoheiTokunaga/stargz-snapshotter-pullcontainerd",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 17,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454712950",
    "title": "TelepresenceとIstioを使った自分専用のクラスタを持っているような開発環境の構築",
    "abstract": "マイクロサービスの開発では、変更を素早く試せる(Fast)、依存関係を意識しない(Dependency-Agnostic)、他人の開発に影響を与えない(Isolated)体験が必要であると考えています。この3つの両立のために、私たちはIsolatedを満たした状態でTelepresenceを使えるよう取り組みました。Istioを用いることで、自分のリクエストだけをローカルのプロセスにルーティングすることができます。これによって実現できた「自分専用のクラスタを持っているような開発環境」の構築方法を共有します。",
    "speakers": [
      {
        "id": 18,
        "name": "大坪 新平"
      },
      {
        "id": 19,
        "name": "森本 くるみ"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/morux2/istio-integrated-telepresence",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 18,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454733075",
    "title": "VictoriaMetrics+Prometheusで構築する複数Kubernetesの監視基盤",
    "abstract": "CyberAgentではプライベートクラウド上で Kubernetes as a Service を提供しており、多数のクラスタが稼働しています。\nクラスタ運用者として複数のクラスタ郡を監視するためには、Prometheus とそのバックエンドストレージである VictoriaMetrics を利用した横断の監視基盤が効果的です。\n本セッションではこれらを用いた際に長期間のログを保証する工夫や、正しく Kubernetes 自体を監視するための方法、Ingress などの LB の監視、アラートの項目などクラスタの運用に必要なことについて紹介します。",
    "speakers": [
      {
        "id": 20,
        "name": "源波 陸"
      },
      {
        "id": 21,
        "name": "川部 勝也"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Operation / Monitoring / Logging",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/bo0km4n/victoriametrics-plus-prometheusdegou-zhu-surufu-shu-kubernetesfalsejian-shi-ji-pan",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 19,
    "conferenceId": 1,
    "trackId": 5,
    "videoPlatform": null,
    "videoId": "454779294",
    "title": "Windowsコンテナってどんな感じ？",
    "abstract": "DockerやKubernetesなどコンテナというと、Linuxをベースとしたものが中心にあると思います。実際のところは、Winodowsをベースとしたコンテナの世界もあります。\n\nWindowsベースのアプリケーションをコンテナ化するとか、オーケストレーションはどうするのか、どんなベンダーサービスがあるのか等、気になりますよね？\n\nそのあたりのことを含め、Windowsコンテナの前提となる知見を網羅し、実際にPoC検証する内容を通じて、Windowsコンテナの今をお話したいと思います。",
    "speakers": [
      {
        "id": 22,
        "name": "市川 豊"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/cyberblack28/what-a-windows-container-looks-like",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 20,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454800027",
    "title": "ZOZOにおけるID基盤のk8sへのリプレイスとセキュリティの取り組み",
    "abstract": "ZOZOでは2017年からZOZOTOWNのk8sへのリプレイスプロジェクトを進めてきました。\n今までは参照系のワークロードのみでしたが、2020年から更新系のリプレイスも視野にいれ、マイクロサービス化を進めています。\nその第一弾としてID基盤のリプレイスを進めており、その性質上セキュリティ向上のための取り組みも進めています。\nこの講演では、更新系ワークロードのリプレイスをサービス停止なく進める方法と、AWS EKSで実施したセキュリティへの取り込み(AWS WAF、リスト型攻撃対策、Falco, etc)について共有します。",
    "speakers": [
      {
        "id": 23,
        "name": "瀬尾 直利"
      },
      {
        "id": 24,
        "name": "亀井 宏幸"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kameikki/authentication-service-replacement-and-security-efforts-of-zozotown-cndt2020 ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 22,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454725057",
    "title": "カスタムコントローラは万能だからアプリケーションを作るためにも使える",
    "abstract": "CRD+カスタムコントローラによる\"Reconcile Loop\"を自作することはk8sの中でも非常に強力な機能です、これを活用することによってインフラレイヤよりも上のアプリケーションにおける課題を解決する事が可能な場合があります。\nこのセッションでは私が構築しているシステムが要件的にk8s上で動かすにあたって困難だった点や、それを解決するためにカスタムコントローラをアプリケーションのために活用することでよりcloudnativeなアーキテクチャにすることができたことについて話したいと考えています。",
    "speakers": [
      {
        "id": 26,
        "name": "小林 優吾"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/koba1t/kasutamukontororahamo-neng-nafalsedeapurikesiyonwozuo-rutamenimoshi-eru",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 23,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454804668",
    "title": "そーいうことね。Operator Lifecycle Manager完全に理解した。",
    "abstract": "　Kubernetes運用の自律化として、本番環境でも活用され始めているOperator。しかし、Operatorもアプリケーションのため、それ自体を管理しなければいけません。これを解決するのが、オープンソースのOperator Frameworkの一つであるOperator Lifecycle Management(OLM)。\n　Operatorのアップグレードや依存関係を解決するOLMの全容を紹介しますっ。",
    "speakers": [
      {
        "id": 27,
        "name": "北山 晋吾"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Customizing / Extending",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/shkitayama/operatorlifecyclemanager-101",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 25,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454763472",
    "title": "メルペイにおけるマイクロサービス運用の苦労と改善",
    "abstract": "メルペイでは 2019年のサービス開始から、マイクロサービスアーキテクチャの上でサービスを運用してきました。\n新たな機能追加のためにマイクロサービスが増えていく中で、開発や運用において実際にどのような問題や苦労があり、どのように取り組みで改善してきたかを紹介します。われわれもマイクロサービスの運用経験がない中で試行錯誤してきた経験を、今後マイクロサービスの開発や運用を検討している方に共有できればと思います。",
    "speakers": [
      {
        "id": 29,
        "name": "高木 潤一郎"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/tjun/cloudnative-days-tokyo2020",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 26,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454731380",
    "title": "攻撃しながら考えるKubernetesのセキュリティ",
    "abstract": "Kubernetes上で動作するシステムに対する攻撃を見たことはあるでしょうか。攻撃側を知ることはセキュリティにおいて重要な要素となります。本講演では、脆弱な設定を施したKubernetesにおいて、アプリの脆弱性をきっかけとして、任意のコード実行、権限昇格、悪意のあるPodの生成などから、コインマイニングに至るまでの攻撃の流れをお伝えします。そして、各段階において有効な防御の考え方をお伝えします。",
    "speakers": [
      {
        "id": 30,
        "name": "藤井 秀行"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/fujiihda/considering-kubernetes-security-while-attacking",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 27,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454801672",
    "title": "主要 Service Mesh プロダクトの Identity 管理機能とアクセス制御機能の比較",
    "abstract": "マイクロサービス環境の脅威として、ネットワークで到達可能なエンドポイントの増加による攻撃箇所の増加や、サービスへのバイパス攻撃などが挙げられます。この脅威はサービス数に比例して大きくなるため、マイクロサービス環境ではセキュリティが非常に重要になってきています。このようなセキュリティ課題に対するアプローチとして、Service Mesh の導入による共通レイヤーでのセキュリティ実装は効果的であると言えます。\n\nこういった背景を受けて、ゼットラボでは Kubernetes をサポートする主要な Service Mesh プロダクトである Istio、Kuma、Linkerd、Consul、Network Service Mesh における Identity 管理機能とアクセス制御機能の調査を実施しました。このセッションではその調査で得られた結果を紹介します。",
    "speakers": [
      {
        "id": 31,
        "name": "吉田 龍馬"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ryysud/comparison-of-identity-management-and-access-control-features-of-major-service-mesh-products ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 28,
    "conferenceId": 1,
    "trackId": 5,
    "videoPlatform": null,
    "videoId": "454778762",
    "title": "新旧クラウド基盤の狭間で～オンプレミスKubernetes基盤活用のための戦い～",
    "abstract": "サイボウズは自社構築したKVM基盤で2011年からクラウドサービスを提供しています。現在、この基盤にKubernetes基盤を加え、サービスをKubernetesクラスタに移行する計画が進行中です。\n\n本セッションでは、オンプレミスKubernetes基盤へのサービスの移行について、REST APIで実装されたサービスの移行を例に、計画から実装、CI/CD環境の整備、サービス監視まで具体的に紹介します。\n\n特に、フルマネージド型のパブリックサービスを活用したサービス立ち上げとは違う、複合的なクラウド基盤における移行ならではのノウハウをお伝えします。",
    "speakers": [
      {
        "id": 32,
        "name": "本村 あおい"
      },
      {
        "id": 73,
        "name": "吉川 拓哉"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/cybozuinsideout/maneki-cndt-2020",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 29,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454759386",
    "title": "世界に誇れるプラットフォームチームをつくる",
    "abstract": "あなたのプラットフォーム、『作っただけ』になっていませんか？ \nKubernetesをはじめとしたクラウドネイティブプラットフォームを運用する会社が増えています。しかし『社内で使って貰えない』『運用メンバーが育たない』『人が圧倒的に足りない』といった問題に直面する組織が多いのです。その原因は、プラットフォームチームの未成熟さにあるかもしれません。\n本セッションでは、日本で最先端を走るプラットフォームを運用している方々にインタビューを行い、その成功の秘訣を探ります。そして、勝てるチーム作りを体系立てた\"Platform as a Product\"の考え方について、お話します。",
    "speakers": [
      {
        "id": 33,
        "name": "草間 一人"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://jaco.udcp.info/entry/2020/09/08/144710",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 30,
    "conferenceId": 1,
    "trackId": 5,
    "videoPlatform": null,
    "videoId": "454779950",
    "title": "独りよがりのプラットフォーム",
    "abstract": "インフラ基盤に関わる人間なら誰もが一度は夢見るであろう、『僕たち私たちのためのプラットフォーム』。\nデベロッパー生産性の爆上げと運用コストの圧倒的な低減というストーリーのもとに始まるそんなプラットフォーム構築プロジェクトには、多くの金と人材が注ぎ込まれます。\nどこかで聞いたことがある言葉が飛び交う打ち合わせ。マイクロサービス、コンテナ、サーバーレス、サービスメッシュ、DevOps、CI/CD、トランスフォーメーション、くぁwせdrftgyふじこlp。\n\n独りよがりのプラットフォームが多くの組織で生まれています。夢を夢で終わらせないために、あなたには何ができるのか。本セッションでは、様々な「社内プラットフォーム」構築の現場に携わることで見えてきた真に課題を解決するプラットフォームの作り方を紹介します。",
    "speakers": [
      {
        "id": 34,
        "name": "原 トリ"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/toricls/for-whom-that-platform-runs",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 31,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454951031",
    "title": "AI 翻訳サービスを FaaS ＆ コンテナ化して UX とコストを改善した話",
    "abstract": "みらい翻訳が提供している AI 翻訳サービスがレガシーな構成から FaaS/コンテナ化してコストとUXを改善した道のりを、このサービスの中の重要な機能であるファイル翻訳を例にとってお話しします。\n\nファイル翻訳は複数のステップからなるアプリケーションですが、モノリシックな作りとなっていて、日々増える負荷のスケールの対応や機能追加のやりづらさ、ユーザビリティの問題に頭を抱えていました。\nFaaS/コンテナ化に加えてAWSリソースを駆使してこれらの問題をどのように解決していったか、移行する時や運用でハマった点、安定稼働させるために工夫した点など共有します。",
    "speakers": [
      {
        "id": 35,
        "name": "川村 亮清"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Serveless / FaaS",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kobarasukimaro/ai-fan-yi-sabisuwo-faas-kontenahua-site-ux-tokosutowogai-shan-sitahua",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 32,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454951463",
    "title": "Cloud Controller Manager Deep Dive",
    "abstract": "本セッションではKubernetes本体に含まれるCloud Controller Managerというアプリケーションの実装の詳細について解説します。\nCloud Controller Managerとは、Kubernetesと任意のクラウド環境との連携を行うCloud Providerを動作させるためのKubernetesコントローラー群を動かすためのアプリケーションです。\nServiceのtype: LoadBalancerと連携したL4ロードバランサーの管理機能や各Nodeの情報設定など、Kubernetesクラスターの内部でCloud Controller Managerがどのように動作しているのかについて共有します。",
    "speakers": [
      {
        "id": 36,
        "name": "bells17"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/bells17/cloud-controller-manager-deep-dive",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 33,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454730233",
    "title": "Embedded Container Runtime using Linux capabilities, seccomp, cgroups",
    "abstract": "ソニーでは、組み込みに特化した技術の開発に加えて OCI仕様に準拠した標準技術やOSSも採用し、既存の Docker / Kubernetes と連携可能なコンテナ基盤技術を構築しています。\n今回は、主に組み込み向けコンテナランタイムを開発する上で活用した技術や OSS のアップストリーム上で修正したバグや追加した機能、Kubernetes との連携についてお話させて頂きます。",
    "speakers": [
      {
        "id": 37,
        "name": "多田 健太"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kentatada/embedded-container-runtime-using-linux-capabilities-seccomp-cgroups",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 34,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454735935",
    "title": "gVisorを活用して実現するこれからのコンテナセキュリティ",
    "abstract": "近年コンテナ技術が急速に普及している中でコンテナセキュリティに関するニーズも高まってきました。そこで昨今では、コンテナとホストOSとの分離度を上げてよりセキュアにプロセスを実行する「gVisor」というセキュアなコンテナランタイムが開発されおり、既にGKEでも採用されています。\n本講演では、Kubernetesを使って開発している方やKubernetes運用時のセキュリティに興味がある方に向けて、gVisorの内部構造や実際にgVisorを活用することでアプリケーション運用にどのようなメリットをもたらしてくれるのかを紹介します。",
    "speakers": [
      {
        "id": 38,
        "name": "池田 森人"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:20:00.000+09:00",
    "endTime": "2000-01-01T15:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 36,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454734146",
    "title": "KubernetesでCephクラスタ用のストレージをどう管理するか 分割と配置の最適化への取り組み",
    "abstract": "KubernetesでRook/Cephクラスタを構築するにあたり、ストレージの利用効率と配置の最適化を目指しました。\nLVMとPVCの組み合わせによりストレージの柔軟な切り出しとノードローカルでの並行利用を可能とする、Podスケジューリングの調整によりストレージを適切に分散配置しラック単位の障害への耐性を実現する、といった取り組みについて実際の構築例を紹介しつつ説明します。\n",
    "speakers": [
      {
        "id": 40,
        "name": "森本 健司"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:20:00.000+09:00",
    "endTime": "2000-01-01T18:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Storage / Database",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/morimoto/kubernetesdecephkurasutayong-falsesutoreziwodouguan-li-suruka-fen-ge-topei-zhi-falsezui-shi-hua-hefalsequ-rizu-mi ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 37,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454951243",
    "title": "OOParts - Stateless Cloud Gaming Architecture -",
    "abstract": "2020年4月にリリースされたクラウドゲーミングプラットフォーム「OOParts」。往年の名作ゲームを、モダンなアーキテクチャであらゆるデバイスでプレイできるようにしました。この発表では、「OOParts」がどのようなアーキテクチャで動作しているのか、どのようなコンポーネントが使用されているのかを皆様にご紹介します。",
    "speakers": [
      {
        "id": 41,
        "name": "中村 勇介"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "https://note.com/unasuke/n/n0f154a1795b1",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 38,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454733521",
    "title": "RegoによるOPA Policyの作成とConftestを活用したPolicyチェックの実現",
    "abstract": "メルペイのサービスはGCP上で稼働しマイクロサービスを構成しています。各マイクロサービスではアプリケーションはコンテナ化されGKE上で動き、DatabaseやPub/SubといったGCPのクラウドリソースもマイクロサービス毎に独立し各チームで管理しています。\nメルペイではOpen Policy AgentのRegoによるポリシーを作成し、Conftestを用いて各リソースに対してのテストを行うことで、サービスの信頼を維持する取り組みを行っています。このセッションではこれらのツールや活用方法について紹介します。",
    "speakers": [
      {
        "id": 42,
        "name": "湯原 孝明"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T18:00:00.000+09:00",
    "endTime": "2000-01-01T18:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "CI / CD",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/yuhara/introduce-conftest ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 39,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454762910",
    "title": "Serverlessを取り巻く現状とAll Serverlessでプロダクトを構築する苦労",
    "abstract": "この数年Serverlessが注目され、関連する技術や取り巻く環境も変化してきました。本セッションでは、メルカリにおける勤怠打刻システムをServerlessで構築し1年間運用してきた経験をもとに、Serverlessでのシステム設計や開発・運用の事例と、Serverlessの動向を紹介します。Serverlessでプロダクトづくりを検討している方や、既に利用している方に、試行錯誤の経験を共有したいと思います。",
    "speakers": [
      {
        "id": 43,
        "name": "山下 慶将"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:20:00.000+09:00",
    "endTime": "2000-01-01T17:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Serveless / FaaS",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/keisukeyamashita/serverlesswoqu-rijuan-kuxian-zhuang-toall-serverlessdepurodakutowogou-zhu-suruku-lao",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 40,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454735355",
    "title": "Vault + EKS + AWS SSOで実現する秘密情報管理",
    "abstract": "現在、マネーフォワードではオンプレミス環境で稼働するサービスのAWS移行プロジェクトが進行中です。\n本セッションでは、AWSに移行したサービスにおけるVaultを用いた秘密情報管理について、その仕組みと運用について具体的に紹介します。\n特に、VaultのAuth MethodやAWS SSOを組み合わせて実現した、開発エンジニアへの秘匿情報管理の権限移譲のノウハウについてお伝えします。",
    "speakers": [
      {
        "id": 44,
        "name": "後藤 健汰"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/kennygt51/vault-plus-eks-plus-aws-ssoteshi-xian-surumi-mi-qing-bao-guan-li",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 41,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454761649",
    "title": "クラウドネイティブ時代に最適化されたエンジニアリング組織の追求",
    "abstract": "クラウドネイティブな手法によるアプリケーションの開発はものすごい勢いで広がりをみせています。10年前とは全く違う世界がそこには広がっていますが、あなたの組織はそれら新しいエンジニアリング手法に対応できていますでしょうか？\n\n手法の変遷とともに、アプリケーションエンジニアとインフラエンジニアの垣根が曖昧になってきていることもあり、10年前と同じ考え方と組織では、クラウドネイティブな開発手法を活かし切れません。\n\nこのセッションでは現代のアプリケーション開発に携わる全てのエンジニアを対象に、各エンジニアがおさえておくべき姿勢と考え方、そして組織としてどう効率よく意思決定し、アプリケーションを進化させていくべきか、その理想を追求しお話します。",
    "speakers": [
      {
        "id": 45,
        "name": "濱田孝治"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T17:00:00.000+09:00",
    "endTime": "2000-01-01T17:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "組織論",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hamadakoji/kuraudoneiteibushi-dai-nizui-shi-hua-saretaenziniaringuzu-zhi-falsezhui-qiu ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 42,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454723049",
    "title": "ソフトバンクにおける Java によるクラウドネイティブの実現",
    "abstract": "ソフトバンクの IT 本部は、主にキャリア事業を支える IT システムの開発、保守、運用を担っています。\nキャリア事業はユーザーの生活を支える重要なインフラであるため、これまでは自社のデータセンターのオンプレミス環境で Java アプリケーションサーバ上で稼働するシステムを数多く開発してきました。\n一方で、近年では若手エンジニアのスキルアップ、モチベーションアップを目的として、ソフトバンクでも Kubernetes を利用したクラウドネイティブの実現に取り組んでいます。\nこのセッションでは、Azure Kubernetes Service を利用して Java で開発された全国のソフトバンクショップで利用されるシステムを実現した事例、および我々が遭遇した障害、および学びについて共有させていただければと思います。",
    "speakers": [
      {
        "id": 46,
        "name": "竜田 茂"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T15:00:00.000+09:00",
    "endTime": "2000-01-01T15:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Runtime",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/TatsutaShigeru/java-238427113",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 43,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454782550",
    "title": "モノリスからクラウドネイティブへ - 設計思想の違いを知り乗り越える",
    "abstract": "サイボウズでは 2011 年に提供を開始した cybozu.com のアーキテクチャを\nKubernetes を中心にしたシステムに置き換えるプロジェクトを推進しています。\n\n従前のシステムは巨大なモノリスで、サービスの規模が拡大するにつれ運用負荷\nが高まりつづける状態でした。本講演では前提を異にするアーキテクチャ間を\n技術面だけでなく組織としてどう移行に取り組んでいるか紹介します。",
    "speakers": [
      {
        "id": 47,
        "name": "山本 泰宇"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:20:00.000+09:00",
    "endTime": "2000-01-01T12:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ymmt2005/monolith-to-cloudnative-cndt2020 ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 44,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454766225",
    "title": "とある少人数のサービス開発チームのクラウドネイティブへの船出の話",
    "abstract": "講演者は学生来プラットフォームの開発者側に立ち、2年前まではCNCFのボードメンバもしくは社内のプラットフォームOSS開発に従事してきた。2018年12月から新たなSaaS、Tunaclo API Connectの開発において少人数チームの責任者となりプラットフォームを提供する側から使う側の立場に初めて立つことになった。\n社内公募からクラウドネイティブ技術に始めて触れるエンジニアを集めてチームを結成してからこれまでの中で、うまくいっていること、いかないこと、必要なスキルセット、理想と妥協、最初に考えておくべきだったこと、必要なフォロー、今後試したいことなど色々と反省しつつ明るく振り返ります。",
    "speakers": [
      {
        "id": 48,
        "name": "亀澤 寛之"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:20:00.000+09:00",
    "endTime": "2000-01-01T12:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/hiro_kamezawa/toarushao-ren-shu-timufalsecloudnativehefalsechuan-chu-falsehua",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 45,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454765565",
    "title": "最新テクノロジーを導入・運用していく組織設計",
    "abstract": "GKE / Spanner / 常に最新を掲げて新しいテクノロジーを導入していく組織の立ち上げから新規サービスへの導入まで",
    "speakers": [
      {
        "id": 49,
        "name": "菅井 健太"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:40:00.000+09:00",
    "endTime": "2000-01-01T13:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 46,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454783800",
    "title": "急速な成長を加速させるアーキテクチャ〜オープンテクノロジー・マルチクラウドの活用〜",
    "abstract": "急速にスケールするシステムを支えるために、アーキテクチャどう変化させてきたか、を話します。\n単にシステム的な受動的スケールだけを考えるだけでなく、組織や文化を生かし、サービスやビジネスを開発力によりむしろ加速するために、オープンテクノロジーやマルチクラウドなどをどう生かしているか、を紹介します。",
    "speakers": [
      {
        "id": 50,
        "name": "牧野 祐己"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:40:00.000+09:00",
    "endTime": "2000-01-01T13:00:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 47,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454804060",
    "title": "基礎から学ぶ！アプリケーション開発者のためのKubernetes入門",
    "abstract": "昨今は、アプリケーション開発者の方もKubernetesに興味をお持ちの方が多いでしょう。しかし「インフラはあまり良くわからない」「機能が多くて何から勉強すればいいか分からない」という方も多いのではないでしょうか。このセッションでは、アプリケーション開発者が知っておくべきKubernetesの知識をコンパクトにお伝えします。今後のKubernetes学習のきっかけになれば幸いです。",
    "speakers": [
      {
        "id": 54,
        "name": "多田 真敏"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/masatoshitada/kubernetes-basics-for-application-developers",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 48,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454784590",
    "title": "クラウドネイティブに未来をかけるIBM",
    "abstract": "IBMではクラウドだけでなくメインフレームやストレージ製品にOpenShift/Kubernetesを対応させ、クラウドネイティブへ方向転換を強力に進めています。さらに、IBMはOSSプロジェクトを活発化させJavaを含むCICD、AIOps、Watson AI/ML、RPA、セキュリティ、エッジなどをOpenShift対応のコンテナ化ソフトウェア製品をIBM Cloud Paksとして提供しています。このセッションでは100年以上の歴史を持つIBMがグローバルに展開するクラウドネイティブ化の潮流の一端をご理解いただけます。",
    "speakers": [
      {
        "id": 55,
        "name": "高良 真穂"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:00:00.000+09:00",
    "endTime": "2000-01-01T13:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://www.ibm.com/downloads/cas/AYRREVWY",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 49,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454767470",
    "title": "Tunaclo API Connectで実現する次世代のクラウド間アクセス",
    "abstract": "富士通が提供するセキュアなクラウド間アクセスサービス Tunaclo API Connectについてご紹介します。セッションの前半ではクラウドネイティブ時代に求められるアプリケーションアクセス時のセキュリティの勘所や、Tunaclo API Connectがどうコンテナネットワークのクラウド超えアクセスを構成できるのかをご紹介します。更にセッション後半では、弊社エンジニアからクラウドにおけるサービス開発の裏側について実体験を元にお届けします。",
    "speakers": [
      {
        "id": 56,
        "name": "古澤 慧"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Hybrid Cloud / Multi Cloud",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/furusawakei/cndt2020tunaclo-api-connect",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 50,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454767134",
    "title": "監視からオブザーバビリティへ",
    "abstract": "今、時代は監視からオブザーバビリティへと移り変わりつつあります。様々なツールの登場により可視化する方法は増えましたが、監視という１つの運用だけでなく、日々の作業を改善しつづけられる “仕組み” をシステムに持たせることが求められています。それこそがまさにオブザーバビリティのもつ重要な目的です。\n　オブザーバビリティプラットフォームである New Relic は、監視という運用の殻を破り、エンジニアが本来費やすべき”日々の改善”という本来の目的へと変化させていくことができます。最新のマイクロサービス分散トレーシングや“育つAIops”による運用改善、既存のCNCF OSSツールとの連携など、New Relic で日々の改善を実現する方法をご紹介します。",
    "speakers": [
      {
        "id": 57,
        "name": "清水 毅"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T13:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 53,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454725497",
    "title": "くま(Kuma)でメッシュなマイクロサービス",
    "abstract": "OSSのAPIGatewayでおなじみのKongが開発する、サービスメッシュのKumaがCNCF Sandboxにエントリされました。今後一層の注目を集めるであろうと、当社で開発中のサービス(SIOS bilink)にKumaを使ってみたらどうなるか？試してみました！",
    "speakers": [
      {
        "id": 61,
        "name": "槌野 雅敏"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 54,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454738221",
    "title": "クラウドネイティブを実現するコンテナ・Kubernetesにセキュリティは足りてますか？WAF機能を備えた唯一のIngress Controller",
    "abstract": "NGINX Ingress ControllerはKubernetes上で実行しているアプリケーションへ外部からのアクセスやエントリーポイントとして動作し、TCP/UDPとL7ロードバランシグや、F5/NGINXが取り組んでいるWAFサポートを提供しています。\r\n本講演ではNGINX Ingress Controllerのベストプラクティスやアプリケーションへの負荷分散や高度な制御、WAF連携についてご紹介します。",
    "speakers": [
      {
        "id": 62,
        "name": "鈴木 孝彰"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/Nginx/nginx-ingress-controller-with-waf-for-kubernetes",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 55,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454736073",
    "title": "Verrazzanoで実現するKubernetesマルチクラスタ運用とコンテナアプリケーションのライフサイクル管理",
    "abstract": "Kubernetesが普及してくる中で、ワークロードが多岐にわたるようになると複数のクラスタを運用する必要も出てきます。\n複数クラスタ管理は「複数のKubernetesを管理する」だけではなく、その上で稼働するコンテナアプリケーションのデプロイから運用監視まで含めたライフサイクル管理も必須になります。\nそれを実現するソリューションとして、Oracleでは「Varrazzano」を新しく発表しています。\n本セッションでは、Varrazzanoの概要や機能を踏まえながら、コンテナアプリケーションのライフサイクル管理とマルチクラスタ運用についてご紹介します。",
    "speakers": [
      {
        "id": 63,
        "name": "仁井田 拓也"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 56,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454766737",
    "title": "\"Kubernetesクラスターを切り替えてください\" のオモテウラ",
    "abstract": "昨今，Kubernetesクラスターを使いこなしている企業・ユーザーが目まぐるしい活躍をされています。一方でKubernetesの魅力に惹かれてチャレンジしているものの苦労を重ねているケースもよく目にします。例えば，クラスターのバージョンアップについて苦労する理由はどこにあるのでしょうか。どのように解決するのでしょうか。考え方はもちろんのこと，実パターンを挙げて解説します。",
    "speakers": [
      {
        "id": 64,
        "name": "斎藤 和史"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:00:00.000+09:00",
    "endTime": "2000-01-01T13:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/capsmalt/kubernetes2020",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 57,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454734627",
    "title": "Yahoo! JAPANにおけるSecure DevOpsの実践",
    "abstract": "Yahoo! JAPANが行ってきた、コンテナ化の推進におけるセキュリティの課題とは何か。その対処をどのように考え、実際にどのようにSysdig Secure DevOps Platformを活用し解決しようとしているのか実践的なお話を想定しています。",
    "speakers": [
      {
        "id": 65,
        "name": "佐野 雄一郎"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Security",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 58,
    "conferenceId": 1,
    "trackId": 3,
    "videoPlatform": null,
    "videoId": "454950411",
    "title": "Production-ready GKE",
    "abstract": "皆さん GKE 使ってますか？ 2015 年に登場して以来、多くの機能追加があり成熟度が増す GKE ですが、設定オプションが多くて何をどう設定すればよいか分からないってことはないでしょうか？本セッションでは最新情報を交えながら GKE を本番環境で利用する上で重要となるクラスタ設計 / 運用のベストプラクティスを解説します。",
    "speakers": [
      {
        "id": 66,
        "name": "篠原 一徳"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Orchestration",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 59,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454760548",
    "title": "Amebaアフィリエイト基盤のGKEアーキテクチャとマイクロサービス",
    "abstract": "Amebaのアフィリエイト機能であるAmeba Pickの概要とアーキテクチャについて紹介します。\nAmeba Pickでは自動プロビジョニングやオートヒーリングなどGKEの特性を活かし、\n耐障害性と運用がしやすい開発を促進させるアーキテクチャを目指しました。\n特に、gRPCを使ったマイクロサービスでの設計や運用面、\nGKEのクラスタアップグレードやPodをスケールインやスケールアウトなど日々の運用で\nエラーレートを上げない運用するために行った工夫について共有します。\n  - GKEクラスタを本番運用にするためにやった工夫\n    - GKEのオートプロビジョニングとHPA（HPAの水平スケール時に偏ったリソースの解消）\n  - gRPCのバランシングのEnvoyの設定\n  - リクエストを取りこぼさないためにやったこと\n    - アプリのgraceful shutdown\n    - SidecarのEnvoyの落とし上げの順番\n  - DatadogAPMとOpencensusでのマイクロサービスのモニタリング\n  - gRPCとマイクロサービスについて ",
    "speakers": [
      {
        "id": 67,
        "name": "小沢周平"
      },
      {
        "id": 68,
        "name": "荻野 陽太"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/youta1119/cndt2020-amebaahuirieitoji-pan-false-gkeakitekutiyato-maikurosahisu ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 60,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454785553",
    "title": "継続的なソフトウェアアップデートのためのDevOpsベストプラクティス・アンチパターン",
    "abstract": "実際に発生したソフトウェアアップデートの失敗ケースを分析し、DevOpsの勝ちパターンを考えてみるセッションです。我々は先例から何を学び、いかにしてプロダクトを進化させ続けたらよいのでしょうか？\nDevOpsを支えるプラットフォームを作り続けるJFrogの目線で、自動化やテストなどの考え方、明日から使える実証済みのアイディアを紹介します。\nWeb、モバイル、IoT…ジャンル問わず、ソフトウェアの継続的なデリバリーと向き合う方が対象です。",
    "speakers": [
      {
        "id": 69,
        "name": "横田紋奈"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T13:20:00.000+09:00",
    "endTime": "2000-01-01T13:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/ihcomega56/devops-patterns-and-antipatterns-for-continuous-software-updates",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 63,
    "conferenceId": 1,
    "trackId": 1,
    "videoPlatform": null,
    "videoId": "454763847",
    "title": "Cloud Native Projects: Powering your life everyday featuring Pinterest & Zalando",
    "abstract": "CNCF is an open source software foundation dedicated to making cloud native computing universal and sustainable. We are a community of open source projects, including Kubernetes, Prometheus, Envoy, and others. Cloud native technologies empower organizations to build & run scalable applications in modern, dynamic environments such as public, private, & hybrid clouds.",
    "speakers": [
      {
        "id": 72,
        "name": "Katelin W Ramer"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T12:00:00.000+09:00",
    "endTime": "2000-01-01T12:20:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "",
    "talkCategory": "Keynote",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 64,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454802028",
    "title": "オープンインフラの歴史から紐とく、Kubernetesのエンタープライズ化とその未来",
    "abstract": "日本におけるKubernetesの採用は、昨年に比べ確実に増えています。一方、エンタープライズにおいてKubernetesを使いこなすにはいまだ多くのチャレンジがあると考えます。さらには、アプリケーションデベロッパーにとって使いやすいプラットフォームである必要があります。\r\nこのセッションでは、VMwareがPivotalおよびHeptio社の買収を通じてKubernetesをエンタープライズで使いやすくするためにどのような取り組みを行なっているのかをご紹介します。",
    "speakers": [
      {
        "id": 74,
        "name": "星野 真知"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "Microservices / Services Mesh",
    "onAir": false,
    "documentUrl": "https://www.slideshare.net/MachiHoshino1/cloud-native-days-2020-kubernetes",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 65,
    "conferenceId": 1,
    "trackId": 6,
    "videoPlatform": null,
    "videoId": "454719924",
    "title": "リーガルテックの機械学習基盤を支えるクラウドネイティブ技術の実践",
    "abstract": "LegalForceの研究開発では自然言語処理や機械学習を用いた契約書レビュー支援システムを開発しています。\n機械学習システムの開発においては、機械学習を始めるまでのデータの収集やインフラの立ち上げ、デプロイやモデルの管理などに課題がありました。\nそこで、機械学習基盤（MLOps）の構築を行いましたが、機械学習基盤の構築においてはツールの比較検討を含めた試行錯誤がありました。\n本講演では弊社の機械学習基盤の構成やそこに至る過程をご紹介いたします。",
    "speakers": [
      {
        "id": 75,
        "name": "舟木 類佳"
      }
    ],
    "dayId": 2,
    "showOnTimetable": true,
    "startTime": "2000-01-01T14:00:00.000+09:00",
    "endTime": "2000-01-01T14:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "初級者",
    "talkCategory": "その他",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 2,
    "conferenceDayDate": "2020-09-09",
    "presentationMethod": null
  },
  {
    "id": 67,
    "conferenceId": 1,
    "trackId": 2,
    "videoPlatform": null,
    "videoId": "454800787",
    "title": "Cloud Nativeアーキテクチャことはじめ 最適な実行環境を選ぶポイント",
    "abstract": "Cloud Native アプリケーションの実行環境は、様々な選択肢があり、特定の実行環境だけを理解していれば良いというわけではありません。アプリケーションの動作や特性、コスト、ビジネス判断などにより判断し、優先順位に基づいて実行環境を決定する必要があります。\n例えば実行環境として、コンテナ、Serverless、Kubernetes, OpenShift など様々な実行環境が提供されていますが、どのような状況で、どのテクノロジーを使えば効果的かを判断する事は難しい場合もあります。本セッションは、お客様とのハックフェストでの経験に基づき、実装したアプリケーションやサービスがどのような環境で動作させるのが適切か、実際にアドバイスしている点を体系的にまとめご紹介します。本セッションを受講する事で、より適切な Cloud Native アプリの実行環境を選択する事ができます。",
    "speakers": [
      {
        "id": 77,
        "name": "寺田 佳央"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "Architecture Design",
    "onAir": false,
    "documentUrl": "",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  },
  {
    "id": 70,
    "conferenceId": 1,
    "trackId": 4,
    "videoPlatform": null,
    "videoId": "454805041",
    "title": "Rancher Labs.がK3sを活用したクラウドネイティブ時代のIoTアプリケーションを事例とデモでご紹介",
    "abstract": "CNCF認定の軽量KubernetesディストリビューションであるK3sにフォーカスを当てて具体的なユースケースをご紹介します。 K3sは、IoTやエッジコンピューティング向けに開発され、その小さなシングルバイナリ、ネイティブARMサポート、および本番環境に適した高可用性アーキテクチャにより、エッジシステムでクラスタを自動初期化および維持する理想的なKubernetesディストリビューションです",
    "speakers": [
      {
        "id": 79,
        "name": "施 文翰"
      }
    ],
    "dayId": 1,
    "showOnTimetable": true,
    "startTime": "2000-01-01T16:00:00.000+09:00",
    "endTime": "2000-01-01T16:40:00.000+09:00",
    "talkDuration": 0,
    "talkDifficulty": "中級者",
    "talkCategory": "IoT / Edge",
    "onAir": false,
    "documentUrl": "https://speakerdeck.com/xibuka/k3swohuo-yong-sita-cloud-nativeshi-dai-falseiotapuri ",
    "conferenceDayId": 1,
    "conferenceDayDate": "2020-09-08",
    "presentationMethod": null
  }
]
