import type { Locale } from "@/lib/i18n/home-copy";

export type QaQuestionOption = {
  id: string;
  text: string;
};

export type QaQuestion = {
  id: string;
  prompt: string;
  options: QaQuestionOption[];
  correctOptionId: string;
  rationale: string;
  competency: string;
};

export type QaBank = {
  id: string;
  title: string;
  description: string;
  audience: string;
  level: string;
  estMinutes: number;
  questions: QaQuestion[];
};

const QA_BANKS_ZH_HK: QaBank[] = [
  {
    id: "emotion-basics",
    title: "情緒調節基礎",
    description: "聚焦孩子哭鬧、挫敗與情緒爆發情境，建立照顧者的先穩定再引導思路。",
    audience: "6-12 歲照顧者",
    level: "入門",
    estMinutes: 4,
    questions: [
      {
        id: "eb-1",
        prompt: "孩子因為玩具被拿走而大哭，第一步較合適的是？",
        options: [
          { id: "A", text: "先承認孩子難受，再協助說出需求" },
          { id: "B", text: "立刻說『唔准喊』，要求停止情緒" },
          { id: "C", text: "直接轉移注意力，不處理情緒" },
          { id: "D", text: "先責備孩子不懂事，再談規矩" },
        ],
        correctOptionId: "A",
        rationale: "先被理解，孩子才較容易回到可對話狀態，之後再談規則效果更穩定。",
        competency: "情緒承接",
      },
      {
        id: "eb-2",
        prompt: "孩子發脾氣時，照顧者最需要先做的是？",
        options: [
          { id: "A", text: "馬上講道理，糾正行為" },
          { id: "B", text: "先穩定自己語氣與呼吸" },
          { id: "C", text: "要求孩子立即道歉" },
          { id: "D", text: "拿手機拍下來作紀錄" },
        ],
        correctOptionId: "B",
        rationale: "照顧者情緒是互動基調。先自我調節，才能提供一致、可預期的回應。",
        competency: "照顧者自我調節",
      },
      {
        id: "eb-3",
        prompt: "孩子在公眾場合崩潰時，哪種說法較有效？",
        options: [
          { id: "A", text: "你再喊我就走了" },
          { id: "B", text: "你而家情緒好大，我同你去安靜位坐一陣" },
          { id: "C", text: "咁多人望住你，快啲收聲" },
          { id: "D", text: "你咁樣好丟架" },
        ],
        correctOptionId: "B",
        rationale: "先降刺激、再連結，能減少二次衝突，幫孩子逐步恢復控制感。",
        competency: "降溫介入",
      },
      {
        id: "eb-4",
        prompt: "處理完孩子情緒後，下一步最建議是？",
        options: [
          { id: "A", text: "當作沒發生，避免再提" },
          { id: "B", text: "回顧情境，和孩子一起找下次可行做法" },
          { id: "C", text: "追究責任並延長懲罰" },
          { id: "D", text: "要求寫保證書" },
        ],
        correctOptionId: "B",
        rationale: "情緒平復後才是學習窗口，回顧與替代方案能提升下次成功機率。",
        competency: "事後復盤",
      },
    ],
  },
  {
    id: "communication",
    title: "親子溝通技巧",
    description: "針對頂嘴、沉默和拒絕合作場景，練習更可執行的溝通語句。",
    audience: "6-17 歲照顧者",
    level: "入門",
    estMinutes: 5,
    questions: [
      {
        id: "cm-1",
        prompt: "孩子說『我唔想講』時，較佳回應是？",
        options: [
          { id: "A", text: "你一定要而家講清楚" },
          { id: "B", text: "好，你準備好再講，我會喺度" },
          { id: "C", text: "唔講就冇收手機" },
          { id: "D", text: "你成日都係咁，冇得救" },
        ],
        correctOptionId: "B",
        rationale: "保留連結與時間彈性，可降低防衛心，增加後續對話機會。",
        competency: "開放式連結",
      },
      {
        id: "cm-2",
        prompt: "以下哪句較符合『描述行為而非評價人格』？",
        options: [
          { id: "A", text: "你真係好懶" },
          { id: "B", text: "你昨晚功課做咗一半就離開枱面" },
          { id: "C", text: "你根本唔重視學業" },
          { id: "D", text: "你永遠都要人催" },
        ],
        correctOptionId: "B",
        rationale: "聚焦可觀察行為能減少羞恥與對抗，讓問題更容易被討論。",
        competency: "非評價表達",
      },
      {
        id: "cm-3",
        prompt: "當孩子打斷你說話時，較合適做法是？",
        options: [
          { id: "A", text: "即時大聲壓制，確保權威" },
          { id: "B", text: "先示範輪流規則，再給孩子發言時間" },
          { id: "C", text: "終止對話，冷處理一天" },
          { id: "D", text: "直接忽視，不設界線" },
        ],
        correctOptionId: "B",
        rationale: "界線與尊重可並存，示範互動規則比情緒壓制更能建立長期合作。",
        competency: "界線設定",
      },
      {
        id: "cm-4",
        prompt: "與青春期孩子討論晚歸，哪個開場較好？",
        options: [
          { id: "A", text: "你咁夜返嚟係咪想激死我" },
          { id: "B", text: "我擔心你安全，我想同你一齊訂返時間和報平安方式" },
          { id: "C", text: "由今日開始你唔可以出街" },
          { id: "D", text: "你自己睇住辦，出事唔好搵我" },
        ],
        correctOptionId: "B",
        rationale: "以安全需求為核心共同訂規則，能提升孩子參與度與遵守度。",
        competency: "協作式溝通",
      },
    ],
  },
  {
    id: "behavior-guidance",
    title: "行為引導與界線",
    description: "掌握可執行的規則建立方法，減少反覆提醒與衝突升級。",
    audience: "6-14 歲照顧者",
    level: "中級",
    estMinutes: 6,
    questions: [
      {
        id: "bg-1",
        prompt: "設定家規時，哪種方式最可持續？",
        options: [
          { id: "A", text: "一次定十條規則，越多越好" },
          { id: "B", text: "先聚焦 2-3 條高頻問題，內容清楚可執行" },
          { id: "C", text: "完全交給孩子自行決定" },
          { id: "D", text: "靠臨場情緒判斷，不需固定" },
        ],
        correctOptionId: "B",
        rationale: "規則越清晰、越少且高頻，越容易穩定落地。",
        competency: "規則設計",
      },
      {
        id: "bg-2",
        prompt: "孩子未完成約定任務，較佳後果安排是？",
        options: [
          { id: "A", text: "即時取消一切娛樂一星期" },
          { id: "B", text: "使用與行為相關、可恢復的自然後果" },
          { id: "C", text: "完全不處理，避免衝突" },
          { id: "D", text: "諷刺羞辱，讓孩子記住教訓" },
        ],
        correctOptionId: "B",
        rationale: "相關且可恢復的後果最有學習性，也較不損害關係。",
        competency: "自然後果",
      },
      {
        id: "bg-3",
        prompt: "強化孩子好行為時，較有效的是？",
        options: [
          { id: "A", text: "只在犯錯時關注" },
          { id: "B", text: "具體指出做得好的地方並即時肯定" },
          { id: "C", text: "每次都給高額物質獎勵" },
          { id: "D", text: "和兄弟姊妹比較激勵" },
        ],
        correctOptionId: "B",
        rationale: "具體肯定能讓孩子知道可重複的行為模式。",
        competency: "正向強化",
      },
      {
        id: "bg-4",
        prompt: "家規反覆失效時，優先檢查的是？",
        options: [
          { id: "A", text: "是否規則太抽象或執行不一致" },
          { id: "B", text: "是否懲罰力度不夠大" },
          { id: "C", text: "是否孩子天生難教" },
          { id: "D", text: "是否需要立即轉學" },
        ],
        correctOptionId: "A",
        rationale: "大部分失效來自規則含糊與成人執行不一致，而非孩子『本質問題』。",
        competency: "一致性管理",
      },
    ],
  },
  {
    id: "teen-support",
    title: "青春期支持策略",
    description: "練習在自主需求上升期，兼顧安全界線與情感連結。",
    audience: "12-17 歲照顧者",
    level: "中級",
    estMinutes: 6,
    questions: [
      {
        id: "ts-1",
        prompt: "青春期孩子經常把自己關在房間，第一步建議是？",
        options: [
          { id: "A", text: "強行沒收門鎖，隨時檢查" },
          { id: "B", text: "固定短時段關心，先從低壓話題重建連結" },
          { id: "C", text: "完全不問，當作正常" },
          { id: "D", text: "要求每天長談一小時" },
        ],
        correctOptionId: "B",
        rationale: "低壓、可預期的接觸頻率比高壓追問更可持續。",
        competency: "關係重建",
      },
      {
        id: "ts-2",
        prompt: "孩子說『你唔明我』時，較有效回應是？",
        options: [
          { id: "A", text: "你講完未？我講先" },
          { id: "B", text: "你可以同我講下，你覺得我邊度未明？" },
          { id: "C", text: "我點會唔明，你太誇張" },
          { id: "D", text: "好啦，總之你聽我" },
        ],
        correctOptionId: "B",
        rationale: "邀請澄清可降低對抗，讓孩子感到被看見。",
        competency: "同理性提問",
      },
      {
        id: "ts-3",
        prompt: "面對網路使用衝突，哪個策略較佳？",
        options: [
          { id: "A", text: "單方面即時封鎖所有設備" },
          { id: "B", text: "共同訂使用時段、例外條件與違規後果" },
          { id: "C", text: "完全放任，避免爭執" },
          { id: "D", text: "只靠口頭提醒，不需紀錄" },
        ],
        correctOptionId: "B",
        rationale: "共同協議提高可執行性，也方便追蹤調整。",
        competency: "協議管理",
      },
      {
        id: "ts-4",
        prompt: "若孩子持續兩週失眠、退縮、拒學，較建議做法是？",
        options: [
          { id: "A", text: "先觀察半年再說" },
          { id: "B", text: "盡快做專業評估，並與學校/社工協作" },
          { id: "C", text: "只靠家庭內部處理" },
          { id: "D", text: "先嚴格懲罰，改善態度" },
        ],
        correctOptionId: "B",
        rationale: "持續功能受損屬風險訊號，及早轉介可避免惡化。",
        competency: "風險識別與轉介",
      },
    ],
  },
  {
    id: "school-collab",
    title: "學校與家庭協作",
    description: "建立與班主任、社工合作的溝通框架，提升支持連續性。",
    audience: "全齡照顧者",
    level: "中級",
    estMinutes: 5,
    questions: [
      {
        id: "sc-1",
        prompt: "與學校溝通孩子狀況時，較好準備是？",
        options: [
          { id: "A", text: "只帶情緒，不帶事實紀錄" },
          { id: "B", text: "整理具體行為、時間點與觸發情境" },
          { id: "C", text: "要求學校單方面負責" },
          { id: "D", text: "避免提供任何背景資訊" },
        ],
        correctOptionId: "B",
        rationale: "具體資訊可讓校方更快判斷支持策略。",
        competency: "案例整理",
      },
      {
        id: "sc-2",
        prompt: "家校會議後最重要的是？",
        options: [
          { id: "A", text: "會後不需跟進，等下次再談" },
          { id: "B", text: "確認分工、時間點與回顧指標" },
          { id: "C", text: "只靠即興處理" },
          { id: "D", text: "把責任全推給孩子" },
        ],
        correctOptionId: "B",
        rationale: "清楚分工與追蹤節點是協作能否落地的關鍵。",
        competency: "協作執行",
      },
      {
        id: "sc-3",
        prompt: "孩子在校與在家表現差異大，應先做什麼？",
        options: [
          { id: "A", text: "判定孩子故意作對" },
          { id: "B", text: "比對不同場景觸發因素與支持條件" },
          { id: "C", text: "直接轉校" },
          { id: "D", text: "忽略差異，無需處理" },
        ],
        correctOptionId: "B",
        rationale: "跨場景分析可找出有效支持條件，避免單一歸因。",
        competency: "場景分析",
      },
      {
        id: "sc-4",
        prompt: "若孩子已有情緒治療安排，家校溝通應？",
        options: [
          { id: "A", text: "各做各，不必同步" },
          { id: "B", text: "在同意下同步核心觀察與支持重點" },
          { id: "C", text: "要求老師不提相關議題" },
          { id: "D", text: "僅在問題爆發時才聯絡" },
        ],
        correctOptionId: "B",
        rationale: "一致訊息與策略能減少孩子在不同系統間的拉扯。",
        competency: "跨專業協作",
      },
    ],
  },
  {
    id: "safety-and-referral",
    title: "風險識別與轉介",
    description: "聚焦危機訊號判斷與轉介路徑，提升照顧者應對底線能力。",
    audience: "全齡照顧者",
    level: "進階",
    estMinutes: 6,
    questions: [
      {
        id: "sr-1",
        prompt: "以下何者屬於需要優先關注的風險訊號？",
        options: [
          { id: "A", text: "偶爾心情不好但功能正常" },
          { id: "B", text: "持續自我否定並出現自傷言語" },
          { id: "C", text: "一週一次和同學口角" },
          { id: "D", text: "短暫不想做功課" },
        ],
        correctOptionId: "B",
        rationale: "自傷相關言語屬高風險指標，需即時評估與支持。",
        competency: "高風險辨識",
      },
      {
        id: "sr-2",
        prompt: "孩子提及『我不想活』時，家長應優先？",
        options: [
          { id: "A", text: "當作情緒話，不回應" },
          { id: "B", text: "保持在旁、移除危險物並即時尋求專業支援" },
          { id: "C", text: "先責備說這種話不吉利" },
          { id: "D", text: "拍片存證再說" },
        ],
        correctOptionId: "B",
        rationale: "安全優先原則：陪伴、降低風險、即時轉介。",
        competency: "危機處置",
      },
      {
        id: "sr-3",
        prompt: "轉介前溝通，哪句較合適？",
        options: [
          { id: "A", text: "你有問題，所以要看醫生" },
          { id: "B", text: "你最近辛苦，我哋搵專業人士一齊幫你" },
          { id: "C", text: "你唔去就冇得選" },
          { id: "D", text: "其實都唔需要，但去下都得" },
        ],
        correctOptionId: "B",
        rationale: "去污名與同盟語氣可提高孩子接受度。",
        competency: "轉介溝通",
      },
      {
        id: "sr-4",
        prompt: "專業介入後，家長角色較合適的是？",
        options: [
          { id: "A", text: "完全交給專業，家庭不需參與" },
          { id: "B", text: "依建議同步家庭支持行動並穩定回報觀察" },
          { id: "C", text: "自行更改方案，不需告知" },
          { id: "D", text: "只關注成績變化" },
        ],
        correctOptionId: "B",
        rationale: "家庭是最長期支持系統，和專業協作能提升介入效果。",
        competency: "持續支持",
      },
    ],
  },
  {
    id: "teen-support",
    title: "Teen Support Strategies",
    description: "Balance autonomy, safety, and emotional connection during adolescence.",
    audience: "Caregivers of teens 12-17",
    level: "Intermediate",
    estMinutes: 6,
    questions: [
      {
        id: "ts-en-1",
        prompt: "A teen isolates in their room most days. Best first move?",
        options: [
          { id: "A", text: "Force long talks immediately" },
          { id: "B", text: "Use brief, predictable check-ins and low-pressure topics" },
          { id: "C", text: "Stop checking in completely" },
          { id: "D", text: "Confiscate all devices first" },
        ],
        correctOptionId: "B",
        rationale: "Low-pressure consistency helps rebuild trust and communication.",
        competency: "Relationship repair",
      },
      {
        id: "ts-en-2",
        prompt: "Your teen says, 'You don't understand me.' Best response?",
        options: [
          { id: "A", text: "I understand everything, stop arguing" },
          { id: "B", text: "Help me understand what I missed." },
          { id: "C", text: "You're being dramatic" },
          { id: "D", text: "No more discussion" },
        ],
        correctOptionId: "B",
        rationale: "Inviting clarification lowers defensiveness and improves dialogue.",
        competency: "Empathic inquiry",
      },
      {
        id: "ts-en-3",
        prompt: "For internet-use conflict, the most effective strategy is:",
        options: [
          { id: "A", text: "Permanent one-sided lockout" },
          { id: "B", text: "Shared rules on time, exceptions, and consequences" },
          { id: "C", text: "No limits to avoid conflict" },
          { id: "D", text: "Verbal reminders only, no agreement" },
        ],
        correctOptionId: "B",
        rationale: "Co-created agreements improve compliance and accountability.",
        competency: "Agreement design",
      },
      {
        id: "ts-en-4",
        prompt: "If your teen has persistent insomnia, withdrawal, and school refusal for 2 weeks:",
        options: [
          { id: "A", text: "Wait several months first" },
          { id: "B", text: "Seek professional assessment and coordinate school support" },
          { id: "C", text: "Handle it at home only" },
          { id: "D", text: "Use punishment to enforce attendance" },
        ],
        correctOptionId: "B",
        rationale: "Sustained functional impairment is a referral signal and needs early support.",
        competency: "Risk recognition and referral",
      },
    ],
  },
  {
    id: "school-collab",
    title: "School-Family Collaboration",
    description: "Build practical communication routines with teachers and school social workers.",
    audience: "All caregiver groups",
    level: "Intermediate",
    estMinutes: 5,
    questions: [
      {
        id: "sc-en-1",
        prompt: "Before a school meeting, what is most useful to prepare?",
        options: [
          { id: "A", text: "Only emotions, no records" },
          { id: "B", text: "Specific behavior logs, timing, and triggers" },
          { id: "C", text: "Demand immediate solutions without context" },
          { id: "D", text: "Avoid sharing any background" },
        ],
        correctOptionId: "B",
        rationale: "Specific data helps schools propose targeted support faster.",
        competency: "Case preparation",
      },
      {
        id: "sc-en-2",
        prompt: "After a school-family meeting, what matters most?",
        options: [
          { id: "A", text: "No follow-up until next issue" },
          { id: "B", text: "Confirm roles, timeline, and review checkpoints" },
          { id: "C", text: "Rely on ad hoc decisions only" },
          { id: "D", text: "Place responsibility solely on the child" },
        ],
        correctOptionId: "B",
        rationale: "Clear ownership and cadence are key to implementation quality.",
        competency: "Execution alignment",
      },
      {
        id: "sc-en-3",
        prompt: "Home behavior differs from school behavior. First step?",
        options: [
          { id: "A", text: "Assume deliberate misbehavior" },
          { id: "B", text: "Compare triggers and support conditions across settings" },
          { id: "C", text: "Switch schools immediately" },
          { id: "D", text: "Ignore the difference" },
        ],
        correctOptionId: "B",
        rationale: "Cross-context analysis identifies protective and risk conditions.",
        competency: "Context analysis",
      },
      {
        id: "sc-en-4",
        prompt: "When a child is already in therapy, school communication should:",
        options: [
          { id: "A", text: "Stay fully separate with no sync" },
          { id: "B", text: "Align key observations and support plans with consent" },
          { id: "C", text: "Avoid discussing wellbeing in school" },
          { id: "D", text: "Only contact school during crises" },
        ],
        correctOptionId: "B",
        rationale: "Coordinated signals across systems reduce inconsistency for the child.",
        competency: "Cross-system coordination",
      },
    ],
  },
  {
    id: "safety-and-referral",
    title: "Risk Screening and Referral",
    description: "Practice safety-first judgment and referral communication for high-risk signals.",
    audience: "All caregiver groups",
    level: "Advanced",
    estMinutes: 6,
    questions: [
      {
        id: "sr-en-1",
        prompt: "Which signal requires priority attention?",
        options: [
          { id: "A", text: "Occasional low mood with intact daily function" },
          { id: "B", text: "Persistent self-negation with self-harm language" },
          { id: "C", text: "A weekly peer argument" },
          { id: "D", text: "Brief homework resistance" },
        ],
        correctOptionId: "B",
        rationale: "Self-harm language indicates elevated risk and needs immediate assessment.",
        competency: "High-risk detection",
      },
      {
        id: "sr-en-2",
        prompt: "If a child says 'I don't want to live', the first priority is:",
        options: [
          { id: "A", text: "Ignore it as emotional talk" },
          { id: "B", text: "Stay present, remove hazards, and seek urgent professional support" },
          { id: "C", text: "Scold the child for saying this" },
          { id: "D", text: "Record the statement first" },
        ],
        correctOptionId: "B",
        rationale: "Safety-first action lowers immediate risk and opens a referral pathway.",
        competency: "Crisis response",
      },
      {
        id: "sr-en-3",
        prompt: "Best wording before referral is:",
        options: [
          { id: "A", text: "You are the problem, so you need treatment" },
          { id: "B", text: "You have been under heavy stress. Let's get professional support together." },
          { id: "C", text: "You must go, no discussion" },
          { id: "D", text: "You probably don't need it, but go anyway" },
        ],
        correctOptionId: "B",
        rationale: "Non-stigmatizing language increases acceptance and cooperation.",
        competency: "Referral communication",
      },
      {
        id: "sr-en-4",
        prompt: "After professional care starts, caregivers should:",
        options: [
          { id: "A", text: "Step out completely from support" },
          { id: "B", text: "Follow recommendations and provide regular observations" },
          { id: "C", text: "Change the plan independently" },
          { id: "D", text: "Track grades only" },
        ],
        correctOptionId: "B",
        rationale: "Family continuity is a major factor in intervention outcomes.",
        competency: "Ongoing support role",
      },
    ],
  },
];

const QA_BANKS_EN: QaBank[] = [
  {
    id: "emotion-basics",
    title: "Emotion Regulation Basics",
    description: "Build stable first-response routines for crying, frustration, and emotional meltdowns.",
    audience: "Caregivers of children 6-12",
    level: "Beginner",
    estMinutes: 4,
    questions: [
      {
        id: "eb-en-1",
        prompt: "A child cries after losing a toy. What is the best first step?",
        options: [
          { id: "A", text: "Acknowledge feelings, then help name the need" },
          { id: "B", text: "Demand immediate silence" },
          { id: "C", text: "Distract and skip emotional processing" },
          { id: "D", text: "Scold first, explain later" },
        ],
        correctOptionId: "A",
        rationale: "Validation lowers arousal and opens the door to problem solving.",
        competency: "Emotional validation",
      },
      {
        id: "eb-en-2",
        prompt: "What should caregivers do first during a meltdown?",
        options: [
          { id: "A", text: "Start explaining rules immediately" },
          { id: "B", text: "Regulate their own tone and breathing" },
          { id: "C", text: "Demand an apology" },
          { id: "D", text: "Record the behavior on phone" },
        ],
        correctOptionId: "B",
        rationale: "Caregiver regulation sets the emotional climate for de-escalation.",
        competency: "Self-regulation",
      },
      {
        id: "eb-en-3",
        prompt: "In public meltdown situations, which line is most effective?",
        options: [
          { id: "A", text: "Stop now or I leave you here" },
          { id: "B", text: "You're overwhelmed. Let's move to a quiet spot together." },
          { id: "C", text: "People are watching, be quiet" },
          { id: "D", text: "You're embarrassing me" },
        ],
        correctOptionId: "B",
        rationale: "Reduce stimulation first, then reconnect.",
        competency: "De-escalation",
      },
      {
        id: "eb-en-4",
        prompt: "After a meltdown is over, what is the best next step?",
        options: [
          { id: "A", text: "Never mention it again" },
          { id: "B", text: "Review what happened and plan a better next response" },
          { id: "C", text: "Add harsher punishment" },
          { id: "D", text: "Demand a written promise" },
        ],
        correctOptionId: "B",
        rationale: "Post-regulation reflection creates durable learning.",
        competency: "Repair and reflection",
      },
    ],
  },
  {
    id: "communication",
    title: "Parent-Child Communication",
    description: "Practice wording that reduces defensiveness and improves cooperation.",
    audience: "Caregivers of children 6-17",
    level: "Beginner",
    estMinutes: 5,
    questions: [
      {
        id: "cm-en-1",
        prompt: "When your child says 'I don't want to talk', the best reply is:",
        options: [
          { id: "A", text: "You must explain right now" },
          { id: "B", text: "Okay, we can talk when you're ready. I'm here." },
          { id: "C", text: "No talk means no phone" },
          { id: "D", text: "You always do this" },
        ],
        correctOptionId: "B",
        rationale: "Keeping connection without pressure improves later engagement.",
        competency: "Connection-first response",
      },
      {
        id: "cm-en-2",
        prompt: "Which line describes behavior instead of judging character?",
        options: [
          { id: "A", text: "You are lazy" },
          { id: "B", text: "You left the desk after finishing only half the homework" },
          { id: "C", text: "You don't care about school" },
          { id: "D", text: "You never listen" },
        ],
        correctOptionId: "B",
        rationale: "Behavioral language lowers shame and improves problem solving.",
        competency: "Non-judgmental communication",
      },
      {
        id: "cm-en-3",
        prompt: "A child keeps interrupting. What is best?",
        options: [
          { id: "A", text: "Raise voice to dominate" },
          { id: "B", text: "Model turn-taking and then give the child space to speak" },
          { id: "C", text: "Stop talking for a full day" },
          { id: "D", text: "Ignore it completely" },
        ],
        correctOptionId: "B",
        rationale: "Clear boundaries with respect work better than power struggles.",
        competency: "Boundary setting",
      },
      {
        id: "cm-en-4",
        prompt: "For curfew conflict with teens, the best opening is:",
        options: [
          { id: "A", text: "You're trying to make me angry" },
          { id: "B", text: "I'm worried about safety. Let's agree on time and check-ins." },
          { id: "C", text: "You're banned from going out" },
          { id: "D", text: "Do whatever you want" },
        ],
        correctOptionId: "B",
        rationale: "Shared safety goals increase buy-in and adherence.",
        competency: "Collaborative problem-solving",
      },
    ],
  },
  {
    id: "behavior-guidance",
    title: "Behavior Guidance and Limits",
    description: "Build consistent rules and natural consequences that children can follow.",
    audience: "Caregivers of children 6-14",
    level: "Intermediate",
    estMinutes: 6,
    questions: [
      {
        id: "bg-en-1",
        prompt: "Which rule strategy is most sustainable?",
        options: [
          { id: "A", text: "Create ten rules at once" },
          { id: "B", text: "Start with 2-3 high-frequency, concrete rules" },
          { id: "C", text: "Let children define all rules" },
          { id: "D", text: "Use mood-based enforcement" },
        ],
        correctOptionId: "B",
        rationale: "Focused and concrete rules are easier to implement consistently.",
        competency: "Rule architecture",
      },
      {
        id: "bg-en-2",
        prompt: "A task is not completed. The best consequence is:",
        options: [
          { id: "A", text: "Remove all privileges for a week" },
          { id: "B", text: "Use a related and recoverable consequence" },
          { id: "C", text: "Do nothing to avoid conflict" },
          { id: "D", text: "Use shame to teach a lesson" },
        ],
        correctOptionId: "B",
        rationale: "Related and repairable consequences support learning over fear.",
        competency: "Natural consequences",
      },
      {
        id: "bg-en-3",
        prompt: "How should positive behavior be reinforced?",
        options: [
          { id: "A", text: "Only notice mistakes" },
          { id: "B", text: "Name the specific good behavior quickly" },
          { id: "C", text: "Always use expensive rewards" },
          { id: "D", text: "Compare with siblings" },
        ],
        correctOptionId: "B",
        rationale: "Specific praise strengthens repeatable behaviors.",
        competency: "Positive reinforcement",
      },
      {
        id: "bg-en-4",
        prompt: "If rules keep failing, check first:",
        options: [
          { id: "A", text: "Whether rules are vague or inconsistently enforced" },
          { id: "B", text: "Whether punishment is strong enough" },
          { id: "C", text: "Whether the child is inherently difficult" },
          { id: "D", text: "Whether school transfer is needed" },
        ],
        correctOptionId: "A",
        rationale: "Most failures are design and consistency issues, not identity issues.",
        competency: "Consistency diagnostics",
      },
    ],
  },
];

const QA_BANKS_BY_LOCALE: Record<Locale, QaBank[]> = {
  "zh-HK": QA_BANKS_ZH_HK,
  en: QA_BANKS_EN,
};

const BONUS_QUESTIONS_BY_LOCALE: Record<Locale, QaQuestion[]> = {
  "zh-HK": [
    {
      id: "bonus-1",
      prompt: "以下哪種回應最符合「先連結、再引導」原則？",
      options: [
        { id: "A", text: "你先閉嘴，聽我講完" },
        { id: "B", text: "我見到你而家好激動，我哋先慢一慢，再一齊處理" },
        { id: "C", text: "你咁樣我幫唔到你" },
        { id: "D", text: "總之照我講就得" },
      ],
      correctOptionId: "B",
      rationale: "先建立情緒連結可降低防衛，之後的引導更容易被接受。",
      competency: "連結式回應",
    },
    {
      id: "bonus-2",
      prompt: "當家庭衝突反覆出現時，最建議先做的是？",
      options: [
        { id: "A", text: "加重懲罰，提升威嚇效果" },
        { id: "B", text: "記錄觸發情境、反應與結果，找出可調整環節" },
        { id: "C", text: "等孩子自己長大就會改善" },
        { id: "D", text: "把問題歸因於孩子性格" },
      ],
      correctOptionId: "B",
      rationale: "先做結構化觀察可把情緒議題轉成可干預問題。",
      competency: "行為觀察與分析",
    },
  ],
  en: [
    {
      id: "bonus-1",
      prompt: "Which response best reflects a 'connect first, guide second' approach?",
      options: [
        { id: "A", text: "Be quiet and listen to me first" },
        { id: "B", text: "I see you're overwhelmed. Let's slow down and solve this together." },
        { id: "C", text: "I can't help you when you're like this" },
        { id: "D", text: "Just do what I said" },
      ],
      correctOptionId: "B",
      rationale: "Connection lowers defensiveness and makes guidance more actionable.",
      competency: "Connection-based response",
    },
    {
      id: "bonus-2",
      prompt: "If family conflict keeps repeating, what is the best first move?",
      options: [
        { id: "A", text: "Increase punishment intensity" },
        { id: "B", text: "Track triggers, responses, and outcomes to find intervention points" },
        { id: "C", text: "Wait and hope it resolves naturally" },
        { id: "D", text: "Assume it is only personality-related" },
      ],
      correctOptionId: "B",
      rationale: "Structured tracking turns emotional conflict into solvable patterns.",
      competency: "Behavioral pattern analysis",
    },
  ],
};

export function getQaBanks(locale: Locale): QaBank[] {
  const banks = QA_BANKS_BY_LOCALE[locale];
  const bonusQuestions = BONUS_QUESTIONS_BY_LOCALE[locale];

  return banks.map((bank) => ({
    ...bank,
    estMinutes: bank.estMinutes + 2,
    questions: [
      ...bank.questions,
      ...bonusQuestions.map((question) => ({
        ...question,
        id: `${bank.id}-${question.id}`,
      })),
    ],
  }));
}
