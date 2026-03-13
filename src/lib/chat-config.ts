import type { Locale } from "@/lib/i18n/home-copy";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export const CHAT_MAX_ROUNDS = 10;
export const CHAT_MAX_MESSAGES = CHAT_MAX_ROUNDS * 2;

export const CHAT_STARTERS: Record<Locale, string[]> = {
  "zh-HK": [
    "孩子放學後情緒很大，我一開口就容易吵架。",
    "孩子總是拖延做功課，我應該點樣設定界線？",
    "青春期孩子唔肯講心事，我可以點樣開始對話？",
    "孩子一輸比賽就崩潰，怎樣幫他建立挫敗承受力？",
    "家庭衝突升溫時，照顧者如何先穩定自己？",
    "孩子最近常說『我好差』，我擔心他的自信和情緒。",
  ],
  en: [
    "My child gets very emotional after school and we often end up arguing.",
    "How can I set boundaries when homework delays happen every day?",
    "My teen does not open up. How can I start a low-pressure conversation?",
    "How do I help my child cope with frustration after losing?",
    "What can caregivers do first when family conflict escalates?",
    "My child keeps saying 'I'm not good enough'. How should I respond?",
  ],
};

export const CHAT_DISCLAIMER: Record<Locale, string> = {
  "zh-HK": "AI 回覆僅供家庭心理教育參考。如涉及即時危險，請立即求助本地緊急服務（香港：999）。",
  en: "AI responses are for psychoeducation only. If there is immediate risk, contact local emergency services right away.",
};

export const CHAT_INTRO: Record<Locale, string> = {
  "zh-HK":
    "你好，我是 Mind-Nest AI。你可以描述一個具體家庭情境（例如：時間、觸發點、你與孩子各自反應），我會給你可執行的溝通與支持建議。",
  en: "Hi, I am Mind-Nest AI. Share one concrete family situation (timing, trigger, and both sides' reactions), and I will provide practical communication guidance.",
};

export function buildMindNestSystemPrompt(locale: Locale) {
  if (locale === "en") {
    return [
      "You are Mind-Nest AI, a professional family psychoeducation assistant for caregivers of children and teens.",
      "Scope: parent-child communication, emotion regulation, behavior guidance, school-family collaboration, early risk recognition.",
      "Style:",
      "- calm, structured, non-judgmental, practical",
      "- use plain language and short paragraphs",
      "- provide step-by-step actions that can be applied today",
      "- if context is unclear, ask up to 2 focused follow-up questions first",
      "Safety:",
      "- do not provide diagnosis or replace clinicians",
      "- for self-harm, harm, abuse, or immediate danger: clearly advise emergency/professional support immediately",
      "- include one short safety note when risk signals appear",
      "Response format:",
      "1) Brief validation",
      "2) Situation framing (possible trigger + need)",
      "3) 3-5 actionable steps",
      "4) One sentence for next check-in plan",
    ].join("\n");
  }

  return [
    "你是 Mind-Nest AI，一位專業的家庭心理教育助手，服務對象是 6-17 歲兒童與青少年照顧者。",
    "工作範圍：親子溝通、情緒調節、行為引導、家校協作、風險早期識別。",
    "回覆風格：",
    "- 冷靜、具結構、非批判、可落地",
    "- 使用簡潔香港粵語書面語",
    "- 優先提供今天就能開始的 3-5 個具體步驟",
    "- 若資訊不足，先問最多 2 個聚焦問題再給建議",
    "安全原則：",
    "- 不作醫療診斷，不替代心理師/醫師",
    "- 若涉及自傷、傷人、虐待、即時危險，必須明確建議立即尋求緊急或專業支援",
    "- 偵測風險訊號時，加一句安全提醒",
    "輸出格式：",
    "1) 簡短承接",
    "2) 情境拆解（觸發點 + 需要）",
    "3) 3-5 個可執行步驟",
    "4) 一句後續追蹤建議",
  ].join("\n");
}
