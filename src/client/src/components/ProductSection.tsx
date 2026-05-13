/*
 * Product Section — 전 제품 통합 + i18n
 * Light default + Dark mode
 */
import { motion } from "framer-motion";
import {
  FileSearch,
  BarChart3,
  Users,
  Bot,
  Anchor,
  ArrowRight,
  Video,
  Store,
  Scissors,
  Mic,
  Image,
  Megaphone,
  MessageSquare,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

/* ── Product → URL mapping ── */
const PRODUCT_HREFS: Record<string, string> = {
  "Storyroll":      "https://storyroll.handaroai.com",
  "ManySeller":     "https://manyseller.handaroai.com",
  "True Draft":     "https://truedraft.handaroai.com",
  "True Predict":   "https://truepredict.handaroai.com",
  "True Persona":   "https://truepersona.handaroai.com",
  "True Agent":     "https://trueagent.handaroai.com",
  "Handaro AI One": "https://one.handaroai.com",
  "Viral Cut":      "https://viralcut.handaroai.com",
  "Script2Podcast": "https://script2podcast.handaroai.com",
  "Thumb AI":       "https://thumbai.handaroai.com",
  "Auto Ad Copy":   "https://autoadcopy.handaroai.com",
  "Review2Insight": "https://review2insight.handaroai.com",
  "LessonForge AI": "https://lessonforgeai.handaroai.com",
  "QuizMaster AI":  "https://quizmasterai.handaroai.com",
};

/* ── Product data (bilingual) ── */
const products = {
  ko: [
    // ── 콘텐츠 ──
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "텍스트 입력만으로 영상 클립·나레이션·더빙까지 원클릭으로 생성하는 영상 제작 에이전트.", category: "콘텐츠", tag: "New" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Extractor", desc: "긴 유튜브 영상을 틱톡·릴스용 숏폼으로 자동 추출하고 자막까지 입히는 숏폼 에이전트.", category: "콘텐츠", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast", desc: "블로그 글이나 기사를 대화형 팟캐스트 오디오로 자동 변환하는 오디오 콘텐츠 에이전트.", category: "콘텐츠", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail", desc: "영상 내용을 분석해 클릭률(CTR)이 가장 높을 썸네일 3종을 동시 생성하는 썸네일 최적화 에이전트.", category: "콘텐츠", tag: "New" },
    // ── 이커머스 ──
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "상품명 하나로 상세페이지·카피·디자인을 30초 만에 완성하는 셀링 자동화 에이전트.", category: "이커머스", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "상품 특성을 바탕으로 페이스북·인스타·구글 광고 카피 수백 개를 자동 생성하는 광고 카피 에이전트.", category: "이커머스", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "수만 개의 고객 리뷰를 분석해 제품 개선점과 마케팅 소구점을 자동 추출하는 리뷰 분석 에이전트.", category: "이커머스", tag: "New" },
    // ── 에듀테크 ──
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "주제·학년만 입력하면 교안·슬라이드·퀴즈를 자동 매핑하여 수업 준비 시간을 90% 단축하는 교안 제작 에이전트.", category: "에듀테크", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "PDF·문서를 업로드하면 난이도별 객관식·서술형 문항을 무한 생성하는 문항 은행 에이전트.", category: "에듀테크", tag: "New" },
    // ── 문서·업무 ──
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "Vision AI 기반으로 표·도면·수치 데이터의 정합성을 자동 분석하는 규격 문서 감사 에이전트.", category: "문서·업무" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "보고가 아닌 실무를 직접 수행합니다. 기업 시스템과 직접 통신해 반복 업무의 80%를 자동화하는 자율 업무 에이전트.", category: "문서·업무", tag: "Enterprise" },
    // ── 예측·마케팅 ──
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "글로벌 트렌드와 공급망 변수를 결합해 수요를 예측하고 리스크를 방어하는 수요 예측 에이전트.", category: "예측·마케팅", tag: "Enterprise" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "고객 행동과 취향을 실시간 분석해 전환율을 극대화하는 초개인화 에이전트.", category: "예측·마케팅", tag: "Enterprise" },
    // ── 물류·제조 (플랫폼 허브) ──
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "15개 AI 서비스를 하나의 크레딧으로 연동하는 통합 플랫폼이자, 항만 지능 운영체제로 작동하는 허브.", category: "물류·제조", tag: "Enterprise" },
  ],
  en: [
    // ── Content ──
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "A video production agent. Type text and instantly generate clips, narration, and dubbing in one click.", category: "Content", tag: "New" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Extractor", desc: "A short-form agent. Auto-extracts TikTok/Reels-ready clips from long YouTube videos and burns in subtitles.", category: "Content", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast", desc: "An audio content agent. Auto-converts blog posts and articles into conversational podcast audio.", category: "Content", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail", desc: "A thumbnail optimization agent. Analyzes video content and generates 3 high-CTR thumbnails in parallel.", category: "Content", tag: "New" },
    // ── E-Commerce ──
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "A selling automation agent. Builds a complete product detail page, copy, and design from a single product name in 30 seconds.", category: "E-Commerce", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "An ad copy agent. Auto-generates hundreds of Facebook, Instagram, and Google ad copies based on product traits.", category: "E-Commerce", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "A review analytics agent. Analyzes tens of thousands of customer reviews to auto-extract product improvements and marketing angles.", category: "E-Commerce", tag: "New" },
    // ── EduTech ──
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "A lesson plan agent. Enter topic and grade — plans, slides, and quizzes auto-mapped, cutting prep time by 90%.", category: "EduTech", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "An item bank agent. Upload PDFs or documents to generate unlimited multiple-choice and short-answer questions by difficulty.", category: "EduTech", tag: "New" },
    // ── Task ──
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "A document audit agent. Vision-AI-based consistency analysis across tables, drawings, and numerical data.", category: "Task" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "An autonomous work agent. Communicates directly with enterprise systems to automate up to 80% of repetitive tasks.", category: "Task", tag: "Enterprise" },
    // ── Predictive ──
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "A demand forecasting agent. Combines global trends with supply chain variables to forecast demand and manage risk.", category: "Predictive", tag: "Enterprise" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "A hyper-personalization agent. Analyzes customer behavior and preferences in real-time to maximize conversion.", category: "Predictive", tag: "Enterprise" },
    // ── Logistics & Manufacturing (Platform Hub) ──
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "An integration platform linking all 15 AI services under one unified credit, also running as a port intelligence OS.", category: "Logistics", tag: "Enterprise" },
  ],
  zh: [
    // ── 内容 ──
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "视频制作智能体。仅凭文字输入，即可一键生成视频片段、旁白与配音。", category: "内容", tag: "New" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Extractor", desc: "短视频智能体。从长 YouTube 视频中自动抽取 TikTok/Reels 短片，并自动加字幕。", category: "内容", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast", desc: "音频内容智能体。将博客文章或新闻稿自动转换为对话式播客音频。", category: "内容", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail", desc: "缩略图优化智能体。分析视频内容，同时生成 3 款点击率最高的缩略图。", category: "内容", tag: "New" },
    // ── 电商 ──
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "销售自动化智能体。仅凭一个商品名，30 秒完成详情页、文案与设计。", category: "电商", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "广告文案智能体。基于产品特性，自动生成数百条 Facebook、Instagram、Google 广告文案。", category: "电商", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "评论分析智能体。分析数万条客户评论，自动提取产品改进点与营销卖点。", category: "电商", tag: "New" },
    // ── 教育科技 ──
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "教案智能体。输入主题与年级，即可自动生成教案、幻灯片、测验，备课时间缩短 90%。", category: "教育科技", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "题库智能体。上传 PDF·文档即可按难度无限生成选择题与简答题。", category: "教育科技", tag: "New" },
    // ── 文档·业务 ──
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "文档审计智能体。基于 Vision AI，对表格、图纸、数值数据的一致性进行自动分析。", category: "文档·业务" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "自主业务智能体。直接与企业系统通讯，将重复性业务的 80% 自动化。", category: "文档·业务", tag: "Enterprise" },
    // ── 预测·营销 ──
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "需求预测智能体。结合全球趋势与供应链变量，预测需求并管理风险。", category: "预测·营销", tag: "Enterprise" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "超个性化智能体。实时分析客户行为与偏好，最大化转化率。", category: "预测·营销", tag: "Enterprise" },
    // ── 物流·制造（平台中枢）──
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "以一份通用积分连动 15 项 AI 服务的整合平台，同时作为港口智能操作系统运行。", category: "物流·制造", tag: "Enterprise" },
  ],
  jp: [
    // ── コンテンツ ──
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "動画制作エージェント。テキスト入力だけで、動画クリップ・ナレーション・吹替までワンクリックで生成。", category: "コンテンツ", tag: "New" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Extractor", desc: "ショート動画エージェント。長尺の YouTube 動画から TikTok/Reels 用ショート動画を自動抽出し、字幕まで付与。", category: "コンテンツ", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast", desc: "音声コンテンツエージェント。ブログ記事やニュースを会話形式のポッドキャスト音声に自動変換。", category: "コンテンツ", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail", desc: "サムネイル最適化エージェント。動画内容を分析し、最も CTR が高いサムネイル 3 種を同時生成。", category: "コンテンツ", tag: "New" },
    // ── イーコマース ──
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "販売自動化エージェント。商品名ひとつで、詳細ページ・コピー・デザインを 30 秒で完成。", category: "イーコマース", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "広告コピーエージェント。商品特性をもとに、Facebook・Instagram・Google 広告コピーを数百件自動生成。", category: "イーコマース", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "レビュー分析エージェント。数万件の顧客レビューを分析し、製品改善点とマーケティング訴求点を自動抽出。", category: "イーコマース", tag: "New" },
    // ── エドテック ──
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "教材エージェント。テーマと学年を入力するだけで、教案・スライド・クイズを自動マッピング。授業準備を 90% 短縮。", category: "エドテック", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "問題バンクエージェント。PDF・文書をアップロードすれば、難易度別の選択式・記述式問題を無限生成。", category: "エドテック", tag: "New" },
    // ── 文書·業務 ──
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "文書監査エージェント。Vision AI で表・図面・数値データの整合性を自動分析。", category: "文書·業務" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "自律業務エージェント。企業システムと直接通信し、定型業務の最大 80% を自動化。", category: "文書·業務", tag: "Enterprise" },
    // ── 予測·マーケティング ──
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "需要予測エージェント。グローバルトレンドとサプライチェーン変数を結合し、需要を予測しリスクを管理。", category: "予測·マーケティング", tag: "Enterprise" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "超個性化エージェント。顧客行動と嗜好をリアルタイム分析し、コンバージョン率を最大化。", category: "予測·マーケティング", tag: "Enterprise" },
    // ── 物流·製造（プラットフォーム・ハブ）──
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "15 の AI サービスをひとつのクレジットで連動させる統合プラットフォーム。港湾インテリジェント OS としても稼働。", category: "物流·製造", tag: "Enterprise" },
  ],
};

export default function ProductSection({ lang = "ko" as Lang }: { lang?: Lang }) {
  const i = t(lang).product;
  const items = products[lang];

  return (
    <section id="product" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-navy-900 dark:via-navy-950 dark:to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-700 dark:text-blue-500 text-base font-semibold tracking-[0.25em] uppercase">
            {i.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 text-navy-900 dark:text-white">
            {i.headline}{" "}
            <span className="text-blue-600 dark:text-blue-400">{i.headlineAccent}</span>
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
          <p className="text-navy-500 dark:text-navy-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            {i.sub}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative rounded-2xl p-6 bg-white dark:bg-navy-800/30 border border-navy-200 dark:border-navy-700/30 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="px-2.5 py-0.5 bg-navy-100 dark:bg-navy-700/30 text-navy-500 dark:text-navy-400 text-[10px] font-semibold rounded-full">
                  {product.category}
                </span>
                {product.tag === "Enterprise" && (
                  <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-bold rounded-full border border-amber-200 dark:border-amber-500/30 tracking-wider">
                    B2B · Enterprise
                  </span>
                )}
                {product.tag === "New" && (
                  <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 text-[10px] font-semibold rounded-full border border-blue-100 dark:border-blue-500/20">
                    New
                  </span>
                )}
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors shrink-0">
                <product.icon className="w-6 h-6 text-blue-700 dark:text-blue-400" />
              </div>

              <h3 className="text-navy-900 dark:text-white font-bold text-lg mb-1 leading-tight">{product.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-base font-medium mb-3">{product.subtitle}</p>
              <p className="text-navy-500 dark:text-navy-400 text-base leading-relaxed mb-5 flex-1">{product.desc}</p>

              {product.tag === "Enterprise" ? (
                <div className="flex items-center gap-3 mt-auto pt-1 border-t border-navy-100 dark:border-navy-700/40 flex-wrap">
                  <a
                    href={PRODUCT_HREFS[product.name] ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-700 dark:text-blue-400 text-sm font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors pt-3"
                  >
                    {i.visitBtn}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <span className="text-navy-300 dark:text-navy-600 text-sm pt-3">·</span>
                  <a
                    href={`mailto:info@handaro.ai?subject=${encodeURIComponent(`${i.consultSubject} ${product.name}`)}&body=${encodeURIComponent(`${i.consultGreeting}${i.consultBody}${product.name}${i.consultRequest}${i.consultFooter}`)}`}
                    className="flex items-center gap-1 text-amber-700 dark:text-amber-400 text-sm font-semibold hover:text-amber-800 dark:hover:text-amber-300 transition-colors pt-3"
                  >
                    {i.consultBtn}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              ) : (
                <a
                  href={PRODUCT_HREFS[product.name] ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 text-base font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
                >
                  {i.viewBtn}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
