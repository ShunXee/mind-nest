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
  testimonials: {
    title: string;
    quotes: string[];
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
      pilotCta: "預約試點合作",
      loginCta: "登入",
      stats: [
        "10-20% 青少年出現心理困擾跡象",
        "MVP 規劃 40+ 雙語模組",
        "首輪試點目標：3 間學校 / NGO",
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
    testimonials: {
      title: "試點回饋",
      quotes: [
        "課程短、結構清晰，家長放工後都可以完成。- 學校社工",
        "對話腳本幫我將批評式溝通改成支持式表達。- 家長用戶",
        "資源目錄減少轉介耗時，家校協作效率更高。- NGO 個案主任",
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
      pilotCta: "Book a Pilot",
      loginCta: "Login",
      stats: [
        "10-20% of adolescents show signs of psychological distress",
        "MVP roadmap includes 40+ bilingual modules",
        "First pilot target: 3 partner schools / NGOs",
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
    testimonials: {
      title: "Pilot Feedback",
      quotes: [
        "Short lessons and clear structure made it feasible for working parents. - School Social Worker",
        "The scripts helped me shift from criticism to supportive communication. - Parent User",
        "The resource directory reduced referral time and improved school-home collaboration. - NGO Case Manager",
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
