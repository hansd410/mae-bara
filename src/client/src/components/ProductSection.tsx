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
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "텍스트를 입력하면 AI가 영상을 만듭니다. 5단계 자동 파이프라인으로 영상 클립·나레이션·더빙까지 원클릭 완성.", category: "영상 생성", tag: "New" },
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "상품명 하나로 팔리는 상세페이지를 30초 만에 완성. AI 카피라이팅·디자인·상품 이미지까지 자동 생성.", category: "이커머스", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "Vision AI 기반 문서 검증 시스템. 표, 도면, 수치 데이터의 완벽한 정합성 분석으로 모든 산업의 규격 문서를 자동 감사합니다.", category: "문서 자동화" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Clip Extractor", desc: "긴 유튜브 영상을 분석해 틱톡/릴스용 숏폼을 자동 추출하고 자막까지 생성합니다. 종량제 크레딧으로 Storyroll 사용자의 숏폼 제작 수요를 흡수합니다.", category: "영상·숏폼", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast Converter", desc: "블로그 글이나 기사를 대화형 팟캐스트 오디오로 자동 변환합니다. 오디오 콘텐츠 시장으로의 영역을 확장합니다.", category: "오디오 콘텐츠", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail Generator", desc: "영상 내용을 분석해 클릭률(CTR)이 가장 높을 썸네일 A/B 테스트용 3종을 자동 생성합니다. 유튜브 크리에이터 락인 효과를 제공합니다.", category: "영상·마케팅", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "상품 특성을 바탕으로 페이스북/인스타/구글 광고 카피 수백 개를 자동 생성합니다. 마케팅 에이전시 및 1인 셀러의 필수 도구입니다.", category: "마케팅", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "수만 개의 고객 리뷰를 분석해 제품 개선점과 마케팅 소구점을 자동 추출합니다. 셀러의 상품 기획 단계부터 데이터를 장악합니다.", category: "데이터 분석", tag: "New" },
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "주제·학년·차시만 입력하면 교안·슬라이드·퀴즈·활동지를 한 번에 자동 생성합니다. 2022 개정교육과정 표준 자동 매핑으로 교사의 수업 준비 시간을 90% 단축합니다.", category: "에듀테크", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "PDF·영상·문서를 업로드하면 객관식·서술형·빈칸채우기 문항을 자동 생성합니다. 블룸 분류체계 기반 난이도 설계와 스마트 오답 선지로 문항 은행을 즉시 구축합니다.", category: "에듀테크", tag: "New" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "글로벌 트렌드와 공급망 변수를 결합한 AI 예측 솔루션. 제조, 유통, 금융 분야의 수요 예측과 리스크 관리를 지원합니다.", category: "예측 분석" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "고객 행동과 취향을 실시간 분석하는 초개인화 마케팅 엔진. 이커머스, 미디어, 교육, 금융 분야에서 전환율을 극대화합니다.", category: "마케팅" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "보고를 넘어 실무를 수행하는 AI 자율 업무 에이전트. 기업 시스템과 직접 통신하여 인간 업무의 80%를 자동화합니다.", category: "업무 자동화" },
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "항만 지능 운영체제. 처방형 AI(Prescriptive AI)를 통해 분석을 넘어 이익을 확정하는 Decision-as-a-Service를 제공합니다.", category: "물류·항만", tag: "Enterprise" },
  ],
  en: [
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "Type text, and AI creates your video. A 5-step pipeline auto-generates clips, narration, and dubbing in one click.", category: "Video Creation", tag: "New" },
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "Build a high-converting product detail page in 30 seconds. AI auto-generates copywriting, design, and product images.", category: "E-commerce", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "A Vision AI-powered document verification system. Automatically audits regulatory documents across all industries with perfect consistency analysis of tables, drawings, and numerical data.", category: "Document Automation" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Clip Extractor", desc: "Analyzes long YouTube videos and auto-extracts short-form clips for TikTok/Reels with automatic subtitle generation. Pay-per-credit model captures Storyroll users' short-form demand.", category: "Video & Short-Form", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast Converter", desc: "Automatically converts blog posts and articles into conversational podcast audio. Expands reach into the growing audio content market.", category: "Audio Content", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail Generator", desc: "Analyzes video content and auto-generates 3 A/B test thumbnails optimized for maximum click-through rate (CTR). Creates a lock-in effect for YouTube creators.", category: "Video Marketing", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "Auto-generates hundreds of Facebook/Instagram/Google ad copies based on product characteristics. An essential tool for marketing agencies and solo sellers.", category: "Marketing", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "Analyzes tens of thousands of customer reviews to automatically extract product improvement points and marketing insights. Dominates seller data from the product planning stage.", category: "Data Analytics", tag: "New" },
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "Enter a topic, grade, and lesson count to auto-generate lesson plans, slides, quizzes, and worksheets in one click. Auto-maps to curriculum standards and cuts teacher prep time by 90%.", category: "EdTech", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "Upload PDFs, videos, or documents to auto-generate multiple-choice, short-answer, and fill-in-the-blank questions. Bloom's Taxonomy-based difficulty tagging with smart distractor design builds an instant item bank.", category: "EdTech", tag: "New" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "An AI forecasting solution combining global trends with supply chain variables. Supports demand forecasting and risk management in manufacturing, distribution, and finance.", category: "Predictive Analytics" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "A hyper-personalization marketing engine that analyzes customer behavior and preferences in real-time. Maximizes conversion rates in e-commerce, media, education, and finance.", category: "Marketing" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "An AI autonomous task agent that goes beyond reporting to execute real work. Communicates directly with enterprise systems to automate 80% of human tasks.", category: "Task Automation" },
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "A port intelligence operating system. Delivers Decision-as-a-Service through Prescriptive AI that goes beyond analysis to lock in profits.", category: "Logistics & Port", tag: "Enterprise" },
  ],
  zh: [
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "输入文字，AI自动生成视频。五步流水线一键完成视频片段、旁白与配音。", category: "视频生成", tag: "New" },
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "只需输入商品名称，30秒完成高转化率商品详情页。AI自动生成文案、设计与商品图片。", category: "电商", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "基于Vision AI的文件验证系统。通过对表格、图纸、数值数据的完美一致性分析，自动审计各行业的规格文件。", category: "文件自动化" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Clip Extractor", desc: "分析长YouTube视频，自动提取适合TikTok/Reels的短视频片段并生成字幕。按量付费模式承接Storyroll用户的短片制作需求。", category: "视频·短片", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast Converter", desc: "将博客文章或新闻稿自动转换为对话式播客音频，向音频内容市场拓展。", category: "音频内容", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail Generator", desc: "分析视频内容，自动生成3款优化点击率(CTR)的A/B测试缩略图，提升YouTube创作者粘性。", category: "视频营销", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "基于产品特性，自动生成数百条Facebook/Instagram/Google广告文案，是营销代理和独立卖家的必备工具。", category: "营销", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "分析数万条客户评论，自动提取产品改进点和营销卖点，从商品规划阶段全面掌握数据。", category: "数据分析", tag: "New" },
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "只需输入主题、年级和课时，即可一键自动生成教案、幻灯片、测验和活动单。自动对应课程标准，将教师备课时间缩短90%。", category: "教育科技", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "上传PDF、视频或文档，自动生成选择题、问答题和填空题。基于布鲁姆分类法的难度标记和智能错误选项设计，瞬时构建题库。", category: "教育科技", tag: "New" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "结合全球趋势与供应链变量的AI预测解决方案。支持制造、分销、金融领域的需求预测和风险管理。", category: "预测分析" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "实时分析客户行为和偏好的超个性化营销引擎。在电商、媒体、教育、金融领域最大化转化率。", category: "营销" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "超越报告、执行实务的AI自主业务代理。直接与企业系统通信，自动化人类工作的80%。", category: "业务自动化" },
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "港口智能操作系统。通过处方型·AI（Prescriptive AI）提供超越分析、确定利益的Decision-as-a-Service。", category: "物流·港口", tag: "Enterprise" },
  ],
  jp: [
    { icon: Video, name: "Storyroll", subtitle: "AI Video Generator", desc: "テキストを入力するだけでAIが動画を作成。5ステップ自動パイプラインで動画クリップ・ナレーション・吹替えまでワンクリック完成。", category: "動画生成", tag: "New" },
    { icon: Store, name: "ManySeller", subtitle: "AI Product Page Builder", desc: "商品名ひとつで売れる商品詳細ページを、30秒で完成。AIコピーライティング・デザイン・商品画像まで自動生成。", category: "イーコマース", tag: "New" },
    { icon: FileSearch, name: "True Draft", subtitle: "AI Universal Document Auditor", desc: "Vision AIベースの文書検証システム。表・図面・数値データの完全整合性分析で、あらゆる産業の規格文書を自動監査します。", category: "文書自動化" },
    { icon: Scissors, name: "Viral Cut", subtitle: "AI Short-Form Clip Extractor", desc: "長いYouTube動画を分析し、TikTok/Reels用ショート動画を自動抽出・字幕生成します。従量制クレジットでStoryrollユーザーの短尺コンテンツ需要を取り込みます。", category: "動画・ショート", tag: "New" },
    { icon: Mic, name: "Script2Podcast", subtitle: "AI Blog-to-Podcast Converter", desc: "ブログ記事やニュースを会話形式のポッドキャスト音声に自動変換します。オーディオコンテンツ市場への領域拡大を実現します。", category: "オーディオコンテンツ", tag: "New" },
    { icon: Image, name: "Thumb AI", subtitle: "AI CTR Thumbnail Generator", desc: "動画内容を分析し、クリック率(CTR)が最も高いサムネイルA/Bテスト用3種を自動生成します。YouTubeクリエイターのロックイン効果を生み出します。", category: "動画マーケティング", tag: "New" },
    { icon: Megaphone, name: "Auto Ad Copy", subtitle: "AI Ad Copy Generator", desc: "商品特性をもとに、Facebook/Instagram/Google広告コピーを数百件自動生成します。マーケティングエージェンシーと個人セラーの必須ツールです。", category: "マーケティング", tag: "New" },
    { icon: MessageSquare, name: "Review2Insight", subtitle: "AI Review Analytics Engine", desc: "数万件の顧客レビューを分析し、製品改善点とマーケティング訴求点を自動抽出します。商品企画段階からデータを掌握します。", category: "データ分析", tag: "New" },
    { icon: GraduationCap, name: "LessonForge AI", subtitle: "AI Lesson Plan Generator", desc: "テーマ・学年・コマ数を入力するだけで、教案・スライド・クイズ・ワークシートをワンクリックで自動生成。教育課程標準への自動マッピングで、教師の授業準備時間を90%短縮します。", category: "エドテック", tag: "New" },
    { icon: ClipboardCheck, name: "QuizMaster AI", subtitle: "AI Assessment Item Generator", desc: "PDF・動画・文書をアップロードするだけで、選択式・記述式・穴埋め式問題を自動生成。ブルームの分類体系に基づく難易度設計とスマートな誤答選択肢で、問題バンクを即座に構築します。", category: "エドテック", tag: "New" },
    { icon: BarChart3, name: "True Predict", subtitle: "AI Demand & Logistics Forecaster", desc: "グローバルトレンドとサプライチェーン変数を組み合わせたAI予測ソリューション。製造・流通・金融分野の需要予測とリスク管理を支援。", category: "予測分析" },
    { icon: Users, name: "True Persona", subtitle: "Hyper-Personalization Engine", desc: "顧客の行動と喗帽をリアルタイム分析する超個性化マーケティングエンジン。イーコマース・メディア・教育・金融分野でコンバージョン率を最大化。", category: "マーケティング" },
    { icon: Bot, name: "True Agent", subtitle: "AI Autonomous Task Engine", desc: "報告を超えて実務を遅行するAI自律業務エージェント。企業システムと直接通信し、人間業務の80%を自動化。", category: "業務自動化" },
    { icon: Anchor, name: "Handaro AI One", subtitle: "Port Sync Orchestrator", desc: "港湾インテリジェントOS。処方型 AI（Prescriptive AI）により分析を超えて利益を確定するDecision-as-a-Serviceを提供。", category: "物流・港湾", tag: "Enterprise" },
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
                {product.tag && (
                  <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 text-[10px] font-semibold rounded-full border border-blue-100 dark:border-blue-500/20">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors shrink-0">
                <product.icon className="w-6 h-6 text-blue-700 dark:text-blue-400" />
              </div>

              <h3 className="text-navy-900 dark:text-white font-bold text-lg mb-1 leading-tight">{product.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-base font-medium mb-3">{product.subtitle}</p>
              <p className="text-navy-500 dark:text-navy-400 text-base leading-relaxed mb-5 flex-1">{product.desc}</p>

              <a
                href={PRODUCT_HREFS[product.name] ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 text-base font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
              >
                {i.viewBtn}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
}
