export type Locale = "zh-HK" | "en";

export type HomeCopy = {
  header: {
    nav: Array<{ href: string; label: string }>;
    login: string;
    localeLabel: string;
  };
  hero: {
    title: string;
    description: string;
    pilotCta: string;
    loginCta: string;
    stats: string[];
    imageAlt: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; description: string }>;
  };
  modules: {
    sectionTitle: string;
    sectionDescription: string;
    badge: string;
    moduleBadge: string;
    detailCta: string;
    cards: Array<{
      title: string;
      description: string;
      points: string[];
      demo: {
        parentLine?: string;
        aiLine?: string;
        question?: string;
        note?: string;
      };
    }>;
  };
  videoShowcase: {
    eyebrow: string;
    title: string;
    description: string;
    viewAllCta: string;
    cards: Array<{
      title: string;
      description: string;
      duration: string;
      instructor: string;
      views: string;
    }>;
  };
  chatShowcase: {
    eyebrow: string;
    title: string;
    description: string;
    assistantName: string;
    online: string;
    repliedToday: string;
    opening: string;
    prompts: string[];
    inputPlaceholder: string;
    disclaimer: string;
    openChatCta: string;
  };
  qaShowcase: {
    eyebrow: string;
    title: string;
    description: string;
    progressLabel: string;
    scoreLabel: string;
    question: string;
    options: string[];
    openQaCta: string;
  };
  finalCta: {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  testimonials: {
    title: string;
    contextLabel: string;
    changeLabel: string;
    cards: Array<{
      avatar: string;
      name: string;
      role: string;
      context: string;
      change: string;
      quote: string;
    }>;
  };
  footer: {
    description: string;
    columns: Array<{ title: string; items: Array<{ label: string; href: string }> }>;
    copyright: string;
    tagline: string;
  };
};

export const HOME_COPY: Record<Locale, HomeCopy> = {
  "zh-HK": {
    header: {
      nav: [
        { href: "#benefits", label: "價值" },
        { href: "#modules", label: "模組" },
        { href: "#proof", label: "回饋" },
        { href: "#contact", label: "聯絡" },
      ],
      login: "登入",
      localeLabel: "語言",
    },
    hero: {
      title: "將家庭心理支援，變成照顧者每日可實踐的行動。",
      description:
        "面向香港 6-17 歲兒童與青少年照顧場景，Mind-Nest 以 10-15 分鐘微課、AI 溝通演練與本地支援路徑，協助家庭更早識別風險，減少衝突升級。",
      pilotCta: "AI 心理支援",
      loginCta: "登入",
      stats: [
        "面向 6-17 歲家庭照顧場景",
        "40+ 雙語微課（10-15 分鐘 / 節）",
        "整合學校與 NGO 在地支援路徑",
      ],
      imageAlt: "Mind-Nest 家庭心理教育場景",
    },
    benefits: {
      eyebrow: "平台優勢",
      title: "為什麼選擇 Mind-Nest?",
      cards: [
        {
          title: "專家內容背書",
          description: "所有影片與問答內容均由兒童與家庭心理方向專業人員審核，確保科學性與實用性。",
        },
        {
          title: "個人化 AI 建議",
          description: "AI 按家庭情境與孩子年齡階段提供可執行溝通建議，減少無效說教與衝突升級。",
        },
        {
          title: "家庭成長社群",
          description: "家長可分享育兒經驗與支持策略，在同儕學習中建立可持續的心理教育習慣。",
        },
        {
          title: "碎片化學習",
          description: "每節課 10-15 分鐘，配合問答與練習任務，貼合忙碌家長的真實作息。",
        },
        {
          title: "私隱安全保護",
          description: "對話與學習資料採用私隱保護策略，盡量降低家庭敏感資訊暴露風險。",
        },
        {
          title: "多端無縫同步",
          description: "支援手機與電腦訪問，學習與練習進度可連續銜接，方便在不同場景持續使用。",
        },
      ],
    },
    modules: {
      sectionTitle: "產品功能模組",
      sectionDescription: "圍繞「學習-練習-鞏固」的家庭心理教育閉環，提升照顧者行動能力。",
      badge: "MVP 重點能力",
      moduleBadge: "核心模組",
      detailCta: "查看模組詳情",
      cards: [
        {
          title: "短片微課堂",
          description: "把家庭心理教育拆成 10-15 分鐘短片，支援家長下班後快速學習並即時實踐。",
          points: ["按場景檢索：焦慮、衝突、情緒爆發", "每節課附 1 個溝通行動清單"],
          demo: {},
        },
        {
          title: "AI 智能對話練習",
          description: "模擬高壓親子溝通情境，提供更穩健的表達替代句，幫助由「知道」走向「做到」。",
          points: ["支援逐句反饋與語氣提醒", "覆蓋學業壓力、沉默迴避等高頻情境"],
          demo: {
            parentLine: "家長：你點解又唔出聲？",
            aiLine: "AI 建議：我留意到你今日心情唔太好，我喺度陪住你，想唔想講下？",
          },
        },
        {
          title: "心理學知識問答題庫",
          description: "透過題庫鞏固核心概念，協助照顧者識別風險信號，理解何時需要專業轉介。",
          points: ["按年齡層與主題篩題", "錯題自動歸檔，形成溫習清單"],
          demo: {
            question: "示例題：孩子持續失眠 2 星期，家長應先做什麼？",
            note: "題庫提供解析與轉介建議，幫助建立正確判斷路徑。",
          },
        },
      ],
    },
    videoShowcase: {
      eyebrow: "心理學短片課程",
      title: "專業課程，隨時隨地學習",
      description:
        "由兒童與家庭心理方向專業人員設計的短片課程，每節 5-10 分鐘，幫助忙碌照顧者穩定建立支持式溝通習慣。",
      viewAllCta: "查看全部短片課程",
      cards: [
        {
          title: "如何與孩子進行有效溝通",
          description: "掌握 5 個核心溝通技巧，減少親子衝突並提升情感連結。",
          duration: "8:24",
          instructor: "李明心理師",
          views: "3,241",
        },
        {
          title: "兒童情緒崩潰時父母如何應對",
          description: "建立實戰應對框架，幫助孩子由高壓狀態逐步平復。",
          duration: "6:50",
          instructor: "張心雅治療師",
          views: "5,820",
        },
        {
          title: "建立安全型依附關係的 4 個方法",
          description: "在日常互動中提升孩子安全感與自我價值感。",
          duration: "9:12",
          instructor: "王教授",
          views: "4,015",
        },
        {
          title: "正向行為引導：替代懲罰的做法",
          description: "以可執行的正向引導策略，逐步建立穩定規則。",
          duration: "7:35",
          instructor: "劉兒童發展師",
          views: "2,768",
        },
        {
          title: "青春期孩子的溝通密碼",
          description: "找到與青少年有效對話的方法，化解拉扯與沉默。",
          duration: "10:03",
          instructor: "陳教授",
          views: "6,340",
        },
        {
          title: "父母情緒管理：先照顧好自己",
          description: "學習穩定自我壓力與情緒，成為更有承載力的照顧者。",
          duration: "8:47",
          instructor: "孫心諮顧問",
          views: "7,112",
        },
      ],
    },
    chatShowcase: {
      eyebrow: "AI 智能對話",
      title: "你的專屬家庭心理顧問",
      description:
        "以家庭心理教育場景為核心，AI 可隨時陪你拆解育兒困惑，提供更可執行的支持式溝通建議。",
      assistantName: "Nest AI",
      online: "在線中",
      repliedToday: "今日已回覆 247 條",
      opening:
        "你好，我是 Nest AI。今天想聊哪類育兒困惑？無論是親子溝通、情緒管理，還是行為引導，我都可以陪你一步步整理。",
      prompts: ["孩子經常哭鬧怎麼辦？", "如何建立孩子自信？", "青春期孩子不願溝通"],
      inputPlaceholder: "向 Nest AI 提問...",
      disclaimer: "AI 回答僅供參考，如有嚴重情況請諮詢專業心理師",
      openChatCta: "進入 AI 對話頁",
    },
    qaShowcase: {
      eyebrow: "心理學知識問答",
      title: "邊學邊測，掌握育兒心理學",
      description: "透過簡短問答檢測並鞏固心理學知識，每日 3 分鐘，持續提升家庭支持能力。",
      progressLabel: "問題 1 / 4",
      scoreLabel: "得分 0",
      question: "當孩子哭泣時，較有效的處理方式是？",
      options: [
        "A. 先認可孩子情緒感受，再引導解決問題",
        "B. 立即以獎勵轉移注意力",
        "C. 忽略哭泣，讓孩子自行控制",
        "D. 嚴厲責備以阻止哭泣",
      ],
      openQaCta: "進入知識問答頁",
    },
    finalCta: {
      titlePrefix: "開啟你的家庭",
      titleHighlight: "心理健康之旅",
      description: "加入更多家庭，一起以科學而溫和的方法，建立更穩定、更快樂的親子關係。",
      primaryCta: "免費開始使用",
      secondaryCta: "了解更多",
    },
    testimonials: {
      title: "試點回饋",
      contextLabel: "場景",
      changeLabel: "成效",
      cards: [
        {
          avatar: "/testimonials-avatars/avatar-3.png",
          name: "李姑娘",
          role: "小學駐校社工",
          context: "服務 18 個有情緒行為困擾家庭",
          change: "家長完成率由 31% 提升至 67%",
          quote: "短片每節 10 分鐘內，家長放工後都願意跟進。最明顯是親子衝突個案中，家長更快用到降溫句式。",
        },
        {
          avatar: "/testimonials-avatars/avatar-2.png",
          name: "陳太",
          role: "13 歲孩子家長",
          context: "過往常以責備方式處理功課衝突",
          change: "兩週內每晚衝突時長由 40 分鐘降至 15 分鐘",
          quote: "AI 對話練習幫我先說感受、再談規則。孩子沒有立刻變乖，但肯開口，這是我們家最大的轉變。",
        },
        {
          avatar: "/testimonials-avatars/avatar-1.png",
          name: "黃先生",
          role: "NGO 個案主任",
          context: "每月需處理跨機構轉介與家長跟進",
          change: "平均每宗個案轉介準備時間減少約 28%",
          quote: "資源路徑和問答題庫把資訊整理得很清楚，家長來求助時已具備基礎認知，後續介入效率明顯提升。",
        },
        {
          avatar: "/testimonials-avatars/avatar-4.png",
          name: "周姑娘",
          role: "中學輔導教師",
          context: "負責初中年級班本情緒教育與家長溝通",
          change: "家長回覆率由 42% 提升至 70%",
          quote: "我們把平台短片作為家長會後延伸學習，家長不再只看一次講義，而是會按情境回看，溝通語氣明顯柔和。",
        },
        {
          avatar: "/testimonials-avatars/avatar-5.png",
          name: "鄧太",
          role: "兩孩家長（8 歲、15 歲）",
          context: "同時面對小學生情緒爆發與青少年冷處理",
          change: "家庭每週高衝突次數由 5 次降至 2 次",
          quote: "以前我會一次講很多道理，現在先處理情緒再談規則。孩子雖然未必即時同意，但整體對話不再失控。",
        },
      ],
    },
    footer: {
      description: "AI 家庭心理健康輔導系統，讓每個家庭都可獲得專業心理健康支援。",
      columns: [
        {
          title: "服務",
          items: [
            { label: "心理短片", href: "#modules" },
            { label: "AI 智能對話", href: "#modules" },
            { label: "知識問答", href: "#modules" },
            { label: "專家諮詢", href: "#contact" },
          ],
        },
        {
          title: "資源",
          items: [
            { label: "幫助中心", href: "#contact" },
            { label: "育兒博客", href: "#proof" },
            { label: "研究報告", href: "#proof" },
            { label: "下載 App", href: "#contact" },
          ],
        },
        {
          title: "公司",
          items: [
            { label: "關於我們", href: "#benefits" },
            { label: "私隱政策", href: "#contact" },
            { label: "使用條款", href: "#contact" },
            { label: "聯絡我們", href: "#contact" },
          ],
        },
      ],
      copyright: "Copyright 2026 Mind-Nest. All rights reserved.",
      tagline: "Designed with care for every family",
    },
  },
  en: {
    header: {
      nav: [
        { href: "#benefits", label: "Value" },
        { href: "#modules", label: "Modules" },
        { href: "#proof", label: "Impact" },
        { href: "#contact", label: "Contact" },
      ],
      login: "Login",
      localeLabel: "Language",
    },
    hero: {
      title: "Turn family mental health support into daily actions caregivers can apply.",
      description:
        "Built for Hong Kong families with children aged 6-17, Mind-Nest combines 10-15 minute micro-lessons, AI communication rehearsal, and local support pathways to help caregivers spot risks earlier and de-escalate conflict.",
      pilotCta: "AI Mental Support",
      loginCta: "Login",
      stats: [
        "Designed for families with children aged 6-17",
        "40+ bilingual micro-lessons (10-15 mins each)",
        "Integrated local support pathways with schools and NGOs",
      ],
      imageAlt: "Mind-Nest family psychoeducation scene",
    },
    benefits: {
      eyebrow: "Platform Strengths",
      title: "Why Mind-Nest?",
      cards: [
        {
          title: "Expert-backed content",
          description: "All videos and Q&A content are reviewed by child and family mental health professionals.",
        },
        {
          title: "Personalized AI guidance",
          description: "AI adapts suggestions to each family context and child age stage for practical communication moves.",
        },
        {
          title: "Family growth community",
          description: "Caregivers learn from peers by sharing practices, experiences, and supportive routines.",
        },
        {
          title: "Micro-learning format",
          description: "Each lesson takes 10-15 minutes, fitting the real schedules of busy working caregivers.",
        },
        {
          title: "Privacy-first design",
          description: "Conversation and learning data follow privacy-conscious handling to reduce exposure risks.",
        },
        {
          title: "Cross-device continuity",
          description: "Use Mind-Nest on mobile and desktop with learning progress synced across contexts.",
        },
      ],
    },
    modules: {
      sectionTitle: "Core Product Modules",
      sectionDescription: "A Learn-Practice-Reinforce loop that improves caregiver confidence and action quality.",
      badge: "MVP Priorities",
      moduleBadge: "Core Module",
      detailCta: "View Module Details",
      cards: [
        {
          title: "Short-form micro classes",
          description:
            "Family psychoeducation is split into 10-15 minute videos so caregivers can learn quickly after work and apply immediately.",
          points: ["Browse by scenario: anxiety, conflict, emotional outbursts", "Each class includes one concrete communication checklist"],
          demo: {},
        },
        {
          title: "AI conversation rehearsal",
          description:
            "Simulate high-pressure parent-child conversations and get stronger replacement phrasing to move from knowing to doing.",
          points: ["Line-by-line feedback with tone hints", "Covers school pressure, withdrawal, and other common scenarios"],
          demo: {
            parentLine: "Parent: Why are you silent again?",
            aiLine: "AI suggestion: I noticed you're not feeling great today. I'm here with you if you want to talk.",
          },
        },
        {
          title: "Psychology Q&A bank",
          description:
            "Reinforce key concepts through scenario questions so caregivers can identify risk signals and know when to seek referral.",
          points: ["Filter by age group and topic", "Wrong answers are auto-collected for focused review"],
          demo: {
            question: "Sample: If a child has insomnia for 2 weeks, what should a caregiver do first?",
            note: "Each question includes rationale and referral guidance.",
          },
        },
      ],
    },
    videoShowcase: {
      eyebrow: "Psychoeducation Shorts",
      title: "Professional Lessons, Learn Anytime",
      description:
        "Short courses created with child and family mental health expertise. Each lesson takes 5-10 minutes and fits caregivers' real-life schedules.",
      viewAllCta: "View all short video courses",
      cards: [
        {
          title: "How to communicate effectively with your child",
          description: "Master five practical communication moves to reduce conflict and strengthen connection.",
          duration: "8:24",
          instructor: "Dr. Lee",
          views: "3,241",
        },
        {
          title: "What to do during a child's emotional meltdown",
          description: "Use a clear response framework to help your child recover from high emotional intensity.",
          duration: "6:50",
          instructor: "Therapist Cheung",
          views: "5,820",
        },
        {
          title: "4 ways to build secure attachment",
          description: "Build emotional safety in daily interactions and support long-term resilience.",
          duration: "9:12",
          instructor: "Prof. Wong",
          views: "4,015",
        },
        {
          title: "Positive behavior guidance without punishment",
          description: "Replace punishment with structured positive guidance that children can follow.",
          duration: "7:35",
          instructor: "Lau, Child Dev. Specialist",
          views: "2,768",
        },
        {
          title: "Decoding communication with teens",
          description: "Practical approaches to reconnect with adolescents and reduce communication deadlocks.",
          duration: "10:03",
          instructor: "Prof. Chan",
          views: "6,340",
        },
        {
          title: "Parent emotion regulation: start with yourself",
          description: "Build emotional steadiness as a caregiver to support your child more effectively.",
          duration: "8:47",
          instructor: "Sun, Counseling Consultant",
          views: "7,112",
        },
      ],
    },
    chatShowcase: {
      eyebrow: "AI Guided Dialogue",
      title: "Your Dedicated Family Mental Health Advisor",
      description:
        "Built for caregiver scenarios, AI helps you unpack parenting challenges in real time and turn insight into actionable supportive communication.",
      assistantName: "Nest AI",
      online: "Online",
      repliedToday: "247 replies today",
      opening:
        "Hi, I am Nest AI. What parenting challenge would you like to talk about today? I can support topics like communication, emotional regulation, and behavior guidance.",
      prompts: [
        "How should I respond when my child keeps crying?",
        "How can I build my child's confidence?",
        "My teen refuses to talk to me, what can I do?",
      ],
      inputPlaceholder: "Ask Nest AI...",
      disclaimer: "AI responses are for reference only. Seek a licensed professional for severe situations.",
      openChatCta: "Open Chat Page",
    },
    qaShowcase: {
      eyebrow: "Psychology Q&A",
      title: "Learn and Test, Build Parenting Psychology Skills",
      description: "Use short daily questions to reinforce key concepts in just 3 minutes a day.",
      progressLabel: "Question 1 / 4",
      scoreLabel: "Score 0",
      question: "When a child is crying, what is usually the most effective response?",
      options: [
        "A. Validate the child's feelings first, then guide problem-solving",
        "B. Immediately distract with rewards or toys",
        "C. Ignore the crying so the child learns self-control",
        "D. Strictly scold to stop the crying",
      ],
      openQaCta: "Open Q&A Page",
    },
    finalCta: {
      titlePrefix: "Start Your Family",
      titleHighlight: "Mental Wellness Journey",
      description: "Join more families and build calmer, healthier parent-child relationships with science-based support.",
      primaryCta: "Start for Free",
      secondaryCta: "Learn More",
    },
    testimonials: {
      title: "Pilot Feedback",
      contextLabel: "Context",
      changeLabel: "Impact",
      cards: [
        {
          avatar: "/testimonials-avatars/avatar-3.png",
          name: "Ms. Lee",
          role: "Primary School Social Worker",
          context: "Supporting 18 families with emotional-behavior concerns",
          change: "Parent completion rate increased from 31% to 67%",
          quote: "The 10-minute lesson format fits parents' schedules. In conflict cases, caregivers started applying de-escalation scripts much faster.",
        },
        {
          avatar: "/testimonials-avatars/avatar-2.png",
          name: "Mrs. Chan",
          role: "Parent of a 13-year-old",
          context: "Previously handled homework conflict with criticism",
          change: "Nightly conflict time dropped from 40 mins to 15 mins in 2 weeks",
          quote: "AI rehearsal helped me acknowledge feelings before setting boundaries. My child is now willing to talk, which changed our home dynamic.",
        },
        {
          avatar: "/testimonials-avatars/avatar-1.png",
          name: "Mr. Wong",
          role: "NGO Case Manager",
          context: "Coordinates multi-party referrals each month",
          change: "Average referral preparation time reduced by about 28%",
          quote: "The resource pathway and Q&A bank improved parent readiness before intake, so our interventions became more focused and efficient.",
        },
        {
          avatar: "/testimonials-avatars/avatar-4.png",
          name: "Ms. Chow",
          role: "Secondary School Counselor",
          context: "Leads parent communication and emotion-learning support for junior grades",
          change: "Parent response rate increased from 42% to 70%",
          quote: "After workshops, parents kept using the short lessons by scenario. Their communication tone became noticeably calmer in follow-up cases.",
        },
        {
          avatar: "/testimonials-avatars/avatar-5.png",
          name: "Mrs. Tang",
          role: "Parent of two children (8 & 15)",
          context: "Managing emotional outbursts and teenage withdrawal at the same time",
          change: "Weekly high-conflict episodes dropped from 5 to 2",
          quote: "I used to lecture immediately. Now I regulate emotion first, then discuss boundaries. Conversations are no longer spiraling out of control.",
        },
      ],
    },
    footer: {
      description: "An AI family mental health guidance platform that makes professional support more accessible to every home.",
      columns: [
        {
          title: "Services",
          items: [
            { label: "Psychology Shorts", href: "#modules" },
            { label: "AI Dialogue", href: "#modules" },
            { label: "Knowledge Q&A", href: "#modules" },
            { label: "Expert Consultation", href: "#contact" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Help Center", href: "#contact" },
            { label: "Parenting Blog", href: "#proof" },
            { label: "Research Reports", href: "#proof" },
            { label: "Download App", href: "#contact" },
          ],
        },
        {
          title: "Company",
          items: [
            { label: "About", href: "#benefits" },
            { label: "Privacy", href: "#contact" },
            { label: "Terms", href: "#contact" },
            { label: "Contact", href: "#contact" },
          ],
        },
      ],
      copyright: "Copyright 2026 Mind-Nest. All rights reserved.",
      tagline: "Designed with care for every family",
    },
  },
};
