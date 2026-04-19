// ============================
// サービス基本情報
// ============================
export const SERVICE_NAME = '福岡垢抜けマッチングフォト';
export const LINE_URL = 'https://line.me/R/ti/p/@your-line-id'; // 実際のLINE IDに変更
export const BOOKING_URL = '#contact';

// ============================
// 統計データ
// ============================
export const STATS = [
  { value: 2.4, suffix: '倍', label: 'いいね数平均増加' },
  { value: 63, suffix: '%', label: 'マッチ率向上' },
  { value: 98, suffix: '%', label: '顧客満足度' },
];

// ============================
// ペインポイント（悩みあるある）
// ============================
export const PAIN_POINTS = [
  {
    icon: '📱',
    title: 'スマホの自撮り写真を使っている',
    description: '背景・光・構図が残念になりがちで、清潔感が伝わりにくい',
  },
  {
    icon: '👔',
    title: '就活・証明写真のような"キメすぎ"写真',
    description: '堅すぎて親しみがわかず、会ってみたいと思われにくい',
  },
  {
    icon: '🪞',
    title: '鏡越しの全身写真や集合写真',
    description: '顔がわかりにくく、どの人かわからないと判断される',
  },
];

// ============================
// マッチする写真の3要素
// ============================
export const MATCH_POINTS = [
  { icon: '✨', text: '清潔感 — 整った服装・自然なヘアスタイル・垢抜けて洗練された見た目' },
  { icon: '📸', text: '自然体 — 女性から自然にかっこいいと思ってもらえる角度やポージング' },
  { icon: '☕', text: 'ロケーション — 女性が好きなお店・スポットで撮ることで親近感を演出' },
];

// ============================
// 選ばれる3つの理由
// ============================
export const REASONS = [
  {
    number: '01',
    title: '"垢抜け"から撮影までオールインワン型',
    description:
      '服装・髪・眉・表情。「写る素材」そのものを整えてから撮ります。他カメラマンが撮影技術しか提供しない中、当サービスは撮る前の"垢抜け"までオールインワンでプロデュース。だから結果が違います。',
  },
  {
    number: '02',
    title: 'あなたの"好み女性"から逆算したロケ選定',
    description:
      '好みの女性のタイプを事前ヒアリング。そのタイプに刺さるカフェ・セレクトショップ・ホテルラウンジ・天神大名の街並みを撮影地に選びます。"好みの女性に届く写真"の戦略設計。',
  },
  {
    number: '03',
    title: '会話型撮影 × アプリ特化レタッチ',
    description:
      '「はい、チーズ！」は一切なし。雑談しながら引き出す自然な笑顔を、Pairs・with・TinderのスワイプUIを研究した構図と比率で納品します。',
  },
];

// ============================
// 撮影ロケーション
// ============================
export const LOCATIONS = [
  {
    name: 'カフェ',
    description: '"一緒にお茶したい"を直感させる、こなれた日常感。自然光と会話で、力の抜けた表情を引き出します。',
    mood: '爽やか・親近感',
    image: '/images/portfolio/p3.jpg',
  },
  {
    name: 'ホテルラウンジ',
    description: '品と余裕が伝わる、落ち着いた大人の空気感。Omiai・with層に刺さる「丁寧に生きてる男性」像を演出。',
    mood: '品・余裕',
    image: '/images/portfolio/p1.jpg',
  },
  {
    name: 'セレクトショップ',
    description: 'おしゃれな空間で"センスある人"の文脈を付与。ファッションコンサル同行プランなら、服選び→撮影まで一連で。',
    mood: '都会的・洗練',
    image: '/images/portfolio/p6.jpg',
  },
  {
    name: '天神・大名の街並み',
    description: '都会的な街中スナップで、映画のワンシーンのような余白ある一枚を。カジュアルすぎず、キメすぎない絶妙な温度感。',
    mood: '都会スナップ',
    image: '/images/locations/tenjin.jpg',
  },
];

// ============================
// 撮影フロー
// ============================
export const FLOW_STEPS = [
  {
    step: '01',
    title: 'LINEで無料相談',
    description: '希望の雰囲気・好みの女性のタイプ・日程・お悩みをお気軽にご相談ください。24時間以内に返信します。',
    icon: '💬',
  },
  {
    step: '02',
    title: '日程・ロケ地を決める',
    description: 'ご都合に合わせて日程調整。好み女性から逆算した撮影スポットをご提案します。',
    icon: '📅',
  },
  {
    step: '03',
    title: '当日ロケーション撮影',
    description: '会話しながらリラックスして撮影。緊張しても大丈夫です！',
    icon: '📸',
  },
  {
    step: '04',
    title: '写真納品・アプリ活用',
    description: '3〜5日でレタッチ済み写真を納品。アプリ活用のアドバイスも。',
    icon: '🎉',
  },
];

// ============================
// 料金プラン
// ============================
export const PRICING_PLANS = [
  {
    name: 'スタンダード',
    price: 25000,
    duration: '60分',
    photos: 10,
    features: [
      '撮影前カウンセリング（30分オンライン）',
      '服装簡易助言（手持ち選定・NG指摘）',
      '眉毛・美容室の紹介先提供（予約代行付き）',
      '好み女性から逆算したロケ選定',
      'アプリ攻略相談 / プロフィール文添削',
    ],
    isRecommended: true,
    ctaText: '今すぐ予約する（今月残り3枠）',
  },
  {
    name: 'プレミアム',
    price: 40000,
    duration: '120分',
    photos: 25,
    features: [
      'スタンダードの全内容',
      'ファッションコンサルによる服装購入同行（天神エリア 1-2h）',
      '撮影後の"垢抜け"フォロー相談',
      '優先予約特典',
    ],
    isRecommended: false,
    ctaText: '本気で垢抜けたい方へ',
  },
];

// ============================
// 撮影メンバー（カメラマン）
// ============================
export interface Photographer {
  name: string;
  role: string;
  badge: string;
  imageSrc: string | null;
  careers: readonly string[];
  strengths: string;
  message: string | null;
  social: { label: string; href: string } | null;
}

export const PHOTOGRAPHERS: readonly Photographer[] = [
  {
    name: 'shota',
    role: '代表 / 垢抜けディレクター',
    badge: '代表',
    imageSrc: null,
    careers: [
      '美容師 8年',
      'ファッションコンサル 3年',
      'フロントエンドエンジニア 4年',
      'ITコンサル 1年目',
    ],
    strengths:
      '美容師8年で培った「似合わせ」と、ファッションコンサル3年で磨いた「服装戦略」を、そのまま撮影前の"垢抜け"設計に落とし込みます。「撮るだけ」のカメラマンには真似できない、トータルプロデュースが本業。',
    message:
      '写真は結果。その手前の「垢抜け」まで含めてプロデュースするのが、僕らのスタンスです。',
    social: null,
  },
  {
    name: 'ハマ',
    role: '専属カメラマン',
    badge: 'カメラマン',
    imageSrc: null,
    careers: ['カメラマン歴 2年', '福岡のロケーション熟知', '自然な表情・ポージング指導'],
    strengths:
      '被写体の緊張をほぐしながら、会話の中で自然な表情を引き出すのが得意。福岡の撮影スポットに精通し、あなたの魅力を一番引き出す角度を見つけます。',
    message: null,
    social: { label: 'X (Twitter)', href: 'https://x.com/azuEyqOcSW77628' },
  },
];

// ============================
// 安心ポイント
// ============================
export interface SafetyPoint {
  icon: string;
  title: string;
  description: string;
}

export const SAFETY_POINTS: readonly SafetyPoint[] = [
  {
    icon: '💬',
    title: 'LINE 24時間以内返信',
    description: 'お問合せには24h以内に必ずご返信。迷っている段階でもお気軽に。',
  },
  {
    icon: '📝',
    title: '撮影前カウンセリング標準',
    description: '全プラン共通で事前ヒアリング。当日いきなり撮影ではなく、不安を全部解消してから臨みます。',
  },
  {
    icon: '📅',
    title: '前日までキャンセル無料',
    description: '前日までのご連絡であれば無料でキャンセル可能。無理なくご予約いただけます。',
  },
  {
    icon: '🔒',
    title: 'プライバシー厳守',
    description: 'お客様のお写真は許可なく二次使用しません。広告掲載は必ず当日に許可確認を取ります。',
  },
];

// ============================
// お客様の声
// ============================
export interface Testimonial {
  name: string;
  app: string;
  before: string;
  after: string;
  comment: string;
  rating: number;
  photographerNote?: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'T.K さん（28歳・エンジニア）',
    app: 'Pairs使用',
    before: 'マッチ数0〜1件/月',
    after: 'マッチ数8件/月に増加',
    comment:
      '撮影前はカメラが苦手で緊張していましたが、会話しながら撮ってもらったので自然な笑顔が引き出せました。撮影後、いいね数が明らかに増えてびっくりしました！',
    rating: 5,
    photographerNote:
      '表情が硬くなりがちなタイプだったので、カフェでコーヒーを挟んで肩の力を抜く導線に。平行眉×ライトブルーシャツで清潔感を底上げしました。',
  },
  {
    name: 'S.M さん（33歳・営業職）',
    app: 'with使用',
    before: 'いいね3件/日',
    after: 'マッチング → お付き合いに発展',
    comment:
      '自分ではどう撮ればいいかわからなかったのですが、プロに任せたら全然違う仕上がりに。写真の力ってすごいですね。マッチしてから付き合いました笑',
    rating: 5,
    photographerNote:
      '営業職で印象は整っていたので、「優しさが伝わる柔らかさ」を追加。前髪の流し方と首元のゆとりで、仕事顔からオフ顔へ切り替えました。',
  },
  {
    name: 'R.O さん（25歳・会社員）',
    app: 'Tinder使用',
    before: 'マッチほぼなし',
    after: '2週間で5人とデート達成',
    comment:
      '福岡の景色を背景にしてもらったら、地元感が出て話しかけやすいと好評でした。撮影自体も楽しかったです！',
    rating: 5,
    photographerNote:
      'Tinderは親近感が命。カフェの自然光+カジュアル設定で、「会ってみたい近い人」と感じてもらえる質感を狙いました。',
  },
  {
    name: 'Y.F さん（40歳・経営者）',
    app: 'Omiai使用',
    before: 'いいね5件/週',
    after: 'お付き合いできました',
    comment:
      '年齢的に写真の重要性は理解していたけど、一人では限界があって。プロに頼んで正解でした。今はいい人とお付き合いしています。',
    rating: 5,
    photographerNote:
      '40代は「品」と「余裕」の両立が鍵。ジャケット×白シャツの正解コーデと、目尻に入る微笑でOmiai層が求める大人の雰囲気を設計しました。',
  },
];

// ============================
// FAQ
// ============================
export const FAQS = [
  {
    question: '写真が苦手でも大丈夫ですか？',
    answer:
      'まったく問題ありません！会話しながら撮影するスタイルなので、「はい、チーズ！」と構えることはありません。緊張してもリラックスしながら自然な表情が引き出せるよう、サポートします。実際に「カメラが苦手」とおっしゃっていた方ほど、素敵な写真に仕上がることが多いです。',
  },
  {
    question: '当日の服装はどうすればいいですか？',
    answer:
      '清潔感のある服装がおすすめです。服装がわからなくても、全プラン共通で事前の服装相談（手持ち選定・NG指摘）が標準装備。プレミアムではファッションコンサルによる服装購入同行も承ります。',
  },
  {
    question: 'スタンダードでも"垢抜け"サポートは受けられますか？',
    answer:
      'はい。全プラン共通で「撮影前カウンセリング」「服装簡易助言」「眉毛・美容室の紹介先提供（予約代行付き）」「好み女性から逆算したロケ選定」が標準装備です。プレミアムはさらにファッションコンサル同行と撮影後フォロー相談が付く上位プランです。',
  },
  {
    question: '好みの女性のタイプも相談できますか？',
    answer:
      'はい、むしろ事前ヒアリングの中心です。好みの女性像を伺った上で、そのタイプに刺さる撮影スポット・雰囲気・構図を設計します。"好みの女性に届く写真"を戦略的に作れるのが、他のカメラマンにはない当サービスの強みです。',
  },
  {
    question: 'マッチングアプリに使っていいですか？',
    answer:
      'もちろんです！むしろマッチングアプリでの使用を前提に撮影しています。各アプリのメイン写真・サブ写真に最適な構図・縦横比でお渡しします。',
  },
  {
    question: '雨天の場合はどうなりますか？',
    answer:
      '小雨程度であれば傘を使ったり屋根付きの場所で撮影できます。大雨の場合は日程変更を承ります。前日までにご連絡ください。天候キャンセルのキャンセル料はいただきません。',
  },
  {
    question: '写真の納品はいつですか？',
    answer:
      '撮影後3〜5営業日以内にお渡しします。データはGoogleドライブなどのクラウドストレージでお送りします。',
  },
  {
    question: 'どのくらい効果がありますか？',
    answer:
      '個人差はありますが、お客様アンケートでは平均していいね数2.4倍、マッチ率63%向上という実績があります。写真だけでなく、アプリの設定・プロフィール文のアドバイスもすることで相乗効果が出ます。',
  },
  {
    question: '撮った写真が他人の目に触れることはありませんか？',
    answer:
      'お客様のお写真は、許可なくWebサイトやSNS・広告などに二次使用することはありません。制作実績として掲載させていただきたい場合は、必ず撮影当日にご本人にご確認のうえ、許諾いただいた範囲でのみ使用いたします。',
  },
  {
    question: 'キャンセル・日程変更はできますか？',
    answer:
      '前日までのご連絡であれば無料でキャンセル・日程変更を承ります。当日キャンセルの場合はキャンセル料として料金の100%を頂戴しますので、ご予定はお早めにご確認ください。天候による日程変更はキャンセル料は発生しません。',
  },
  {
    question: '支払い方法は何がありますか？',
    answer:
      '現金・銀行振込・各種キャッシュレス決済（PayPay・クレジットカード等）に対応しています。撮影当日までにお支払いいただく形になります。詳細はLINEでお気軽にご相談ください。',
  },
  {
    question: '写真はLINEで見せるのが恥ずかしいです。',
    answer:
      '大丈夫です♪ マッチングアプリ用の写真を撮る方のほとんどが同じ気持ちでスタートしています。担当カメラマンは全員、撮影〜相談まで秘密厳守。「初めてでも安心して相談できた」という声を多くいただいています。',
  },
];

// ============================
// ポートフォリオ（サンプル）
// ============================
export const PORTFOLIO_IMAGES = [
  { src: '/images/portfolio/p1.jpg', alt: 'カフェでの撮影例', aspect: 'tall' },
  { src: '/images/portfolio/p2.jpg', alt: '天神大名の街並みでの撮影例', aspect: 'wide' },
  { src: '/images/portfolio/p3.jpg', alt: 'カフェでの撮影例', aspect: 'square' },
  { src: '/images/portfolio/p4.jpg', alt: 'ホテルラウンジでの撮影例', aspect: 'tall' },
  { src: '/images/portfolio/p5.jpg', alt: 'セレクトショップでの撮影例', aspect: 'wide' },
  { src: '/images/portfolio/p6.jpg', alt: '街並みでの撮影例', aspect: 'square' },
];

// ============================
// 写真が9割 — 根拠ポイント
// ============================
type PhotoMattersPoint = {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
};

export const PHOTO_MATTERS_POINTS = [
  {
    value: '0.3秒',
    label: '判断される時間',
    detail: '女性がプロフ写真を見て判断する平均時間。表情は無意識で瞬時に処理される。',
  },
  {
    value: '90%',
    label: 'メイン写真で決める割合',
    detail: '「メイン写真でほぼ判断する」と回答した女性の割合（当社アンケート n=500）。',
  },
  {
    value: '2.4倍',
    label: 'プロ撮影後のいいね',
    detail: 'プロ撮影導入後の平均いいね数増加（当社実績）。',
  },
  {
    value: '63%',
    label: 'マッチ率向上',
    detail: '撮影前後のマッチ率比較（当社実績）。',
  },
] as const satisfies readonly PhotoMattersPoint[];

// ============================
// 写真が9割 — チェックリスト
// ============================
export const PHOTO_CHECKLIST = [
  '服・髪・眉が整っている（＝垢抜け）',
  '好みの女性に親近感を持って貰えるロケーション',
  '笑顔が"作り笑い"になっていない',
];

// ============================
// 他カメラマンとの違い 対比表
// ============================
type CompetitorComparisonRow = {
  readonly criterion: string;
  readonly general: string;
  readonly ours: string;
  readonly highlight?: boolean;
};

export const COMPETITOR_COMPARISON: readonly CompetitorComparisonRow[] = [
  { criterion: '撮影技術', general: '◎', ours: '◎' },
  { criterion: '服装アドバイス', general: '×', ours: '◯（全プラン標準）' },
  { criterion: '好み女性から逆算したロケ選定', general: '×', ours: '◎', highlight: true },
  { criterion: '美容室・眉毛サロン紹介＋予約代行', general: '×', ours: '◎（全プラン標準）' },
  { criterion: 'ファッションコンサル服装購入同行', general: '×', ours: '◎（プレミアム）' },
  { criterion: '撮影後の"垢抜け"フォロー相談', general: '×', ours: '◎（プレミアム）' },
  { criterion: 'アプリ特化構図', general: '△', ours: '◎' },
  { criterion: 'プロフィール文添削', general: '×', ours: '◎' },
];
