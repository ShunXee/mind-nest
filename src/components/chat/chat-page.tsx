"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Bot, ChevronLeft, Loader2, SendHorizonal, UserRound } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { useSiteLocale } from "@/components/layout/site-locale-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  CHAT_DISCLAIMER,
  CHAT_INTRO,
  CHAT_MAX_MESSAGES,
  CHAT_STARTERS,
  type ChatMessage,
} from "@/lib/chat-config";

const STORAGE_KEY = "mind-nest-chat-history-v1";

const UI_TEXT = {
  "zh-HK": {
    backHome: "返回首頁",
    online: "在線中",
    repliedToday: "今日已回覆 247 條",
    suggestions: "家長常見問題",
    suggestionsHint: "可點擊以下情境快速提問",
    placeholder: "向 Mind-Nest AI 提問...",
    send: "送出",
    assistantName: "Mind-Nest AI",
    introTitle: "關於 Mind-Nest AI",
    introBody:
      "Mind-Nest AI 專注於家庭心理教育，協助照顧者在高壓情境下整理思路、拆解觸發點，並提供可立即執行的溝通與支持步驟。",
    error: "暫時未能連接 AI 服務，請稍後再試。",
    clearHistory: "清除歷史",
  },
  en: {
    backHome: "Back to Home",
    online: "Online",
    repliedToday: "247 replies today",
    suggestions: "Common caregiver concerns",
    suggestionsHint: "Tap any badge to start with a concrete scenario",
    placeholder: "Ask Mind-Nest AI...",
    send: "Send",
    assistantName: "Mind-Nest AI",
    introTitle: "About Mind-Nest AI",
    introBody:
      "Mind-Nest AI is built for family psychoeducation. It helps caregivers structure difficult situations, identify triggers, and apply practical communication steps immediately.",
    error: "Unable to connect to AI service right now. Please try again later.",
    clearHistory: "Clear history",
  },
} as const;

function trimMessages(messages: ChatMessage[]) {
  return messages.slice(-CHAT_MAX_MESSAGES);
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isAssistant = message.role === "assistant";

  return (
    <div className={isAssistant ? "flex gap-3" : "flex justify-end"}>
      {isAssistant ? (
        <span className="mt-1 hidden h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-accent sm:inline-flex">
          <Bot className="h-4 w-4" />
        </span>
      ) : null}

      <div
        className={
          isAssistant
            ? "max-w-3xl rounded-2xl border border-line bg-background px-5 py-4 text-base leading-8 text-foreground"
            : "max-w-3xl rounded-2xl border border-line bg-amber-50 px-5 py-4 text-base leading-8 text-foreground"
        }
      >
        {isAssistant ? (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="my-2 first:mt-0 last:mb-0">{children}</p>,
              ul: ({ children }) => <ul className="my-2 list-disc pl-5">{children}</ul>,
              ol: ({ children }) => <ol className="my-2 list-decimal pl-5">{children}</ol>,
              li: ({ children }) => <li className="my-1">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
            }}
          >
            {message.content}
          </ReactMarkdown>
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
    </div>
  );
}

export function ChatPage() {
  const { locale } = useSiteLocale();
  const t = UI_TEXT[locale];
  const starters = CHAT_STARTERS[locale];

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as ChatMessage[];
      if (!Array.isArray(parsed)) return;
      const safe = parsed.filter((item) => item && (item.role === "user" || item.role === "assistant"));
      setMessages(trimMessages(safe));
    } catch {
      // Ignore corrupted local storage data.
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowBadges(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messages.length === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trimMessages(messages)));
  }, [messages]);

  const displayMessages = useMemo(() => {
    if (messages.length > 0) return messages;
    return [{ role: "assistant", content: CHAT_INTRO[locale] } as ChatMessage];
  }, [locale, messages]);

  const submitMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setError("");
    setLoading(true);

    const userMessage: ChatMessage = { role: "user", content };
    const nextMessages = trimMessages([...messages, userMessage]);
    setMessages(nextMessages);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: nextMessages,
        }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !data.reply) {
        setError(data.error ?? t.error);
        return;
      }

      setMessages((prev) => trimMessages([...prev, { role: "assistant", content: data.reply as string }]));
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    setError("");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage exceptions.
    }
  };

  return (
    <main className="mx-auto min-h-screen w-[min(1080px,92vw)] py-10">
      <div className="mb-8 flex items-center justify-between">
        <Button asChild variant="outline" className="rounded-full border-line">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            {t.backHome}
          </Link>
        </Button>
      </div>

      <section className="rounded-[2rem] border border-line bg-surface/90 p-6 shadow-[0_12px_32px_rgba(74,45,26,0.08)] md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-accent">
              <Bot className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold text-foreground">{t.assistantName}</p>
              <p className="text-sm text-muted">{t.online}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-line bg-background px-3 py-1 text-sm text-muted">
              {t.repliedToday}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full border-line bg-background px-4"
              onClick={clearHistory}
              disabled={loading || messages.length === 0}
            >
              {t.clearHistory}
            </Button>
          </div>
        </div>

        <div
          className={`mt-7 rounded-3xl border border-line bg-gradient-to-b from-background via-background to-amber-50/40 p-5 md:p-6 transition-all duration-400 ${
            showBadges ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold text-foreground">{t.suggestions}</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{t.suggestionsHint}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {starters.map((item, index) => (
              <button key={item} type="button" onClick={() => submitMessage(item)} className="cursor-pointer">
                <Badge
                  variant="outline"
                  className={`rounded-full border-line bg-background px-4 py-2 text-sm leading-6 text-muted shadow-[0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50 hover:text-foreground ${
                    showBadges ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  {item}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 h-[430px] overflow-y-auto pr-1 md:h-[520px] [scrollbar-width:thin] [scrollbar-color:#c8c2b4_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c8c2b4] [&::-webkit-scrollbar-thumb]:transition-colors hover:[&::-webkit-scrollbar-thumb]:bg-[#aea796]">
          <div className="space-y-4">
            {displayMessages.map((message, index) => (
              <ChatBubble key={`${message.role}-${index}-${message.content.slice(0, 20)}`} message={message} />
            ))}
            {loading ? (
              <div className="flex gap-3">
                <span className="mt-1 hidden h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-accent sm:inline-flex">
                  <Bot className="h-4 w-4" />
                </span>
                <div className="max-w-md rounded-2xl border border-line bg-background px-4 py-3 text-muted">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-8 rounded-[1.35rem] border border-line bg-background px-3 py-3 shadow-[0_1px_0_rgba(255,255,255,0.7)] transition-colors focus-within:border-accent/45">
          <div className="relative">
            <span className="pointer-events-none absolute left-2.5 top-3 hidden h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-accent sm:inline-flex">
              <UserRound className="h-4 w-4" />
            </span>
            <Textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.placeholder}
              className="min-h-[92px] w-full resize-none border-0 bg-transparent pb-3 pl-2 pr-16 pt-3 text-base leading-7 shadow-none focus-visible:ring-0 sm:pl-12"
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void submitMessage();
                }
              }}
            />
            <Button
              type="button"
              size="icon"
              onClick={() => void submitMessage()}
              className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-accent text-white hover:bg-primary-strong"
              disabled={!input.trim() || loading}
              aria-label={t.send}
            >
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {error ? <p className="mt-3 text-sm text-rose-700">{error}</p> : null}
        <div className="mt-6 rounded-2xl border border-line bg-background/90 px-4 py-4 md:px-5">
          <p className="text-sm font-semibold text-foreground">{t.introTitle}</p>
          <p className="mt-2 max-w-none text-sm leading-8 text-muted [text-wrap:pretty]">{t.introBody}</p>
        </div>
        <p className="mt-4 text-center text-sm text-muted">{CHAT_DISCLAIMER[locale]}</p>
      </section>
    </main>
  );
}
