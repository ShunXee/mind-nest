import Link from "next/link";
import { Bot, ChevronLeft, SendHorizonal, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

const suggestions = [
  "孩子經常哭鬧怎麼辦？",
  "如何建立孩子自信？",
  "青春期孩子不願溝通",
  "家庭衝突升溫時如何降溫？",
];

export default function ChatPage() {
  return (
    <main className="mx-auto min-h-screen w-[min(1080px,92vw)] py-10">
      <div className="mb-8 flex items-center justify-between">
        <Button asChild variant="outline" className="rounded-full border-line">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            返回首頁
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
              <p className="font-semibold text-foreground">Nest AI</p>
              <p className="text-sm text-muted">在線中</p>
            </div>
          </div>
          <span className="rounded-full border border-line bg-background px-3 py-1 text-sm text-muted">
            今日已回覆 247 條
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <span className="mt-1 hidden h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-accent sm:inline-flex">
              <UserRound className="h-4 w-4" />
            </span>
            <div className="max-w-2xl rounded-2xl border border-line bg-background px-5 py-4 text-base leading-8 text-foreground">
              你好，我是 Nest AI。今天你想聊哪個家庭心理議題？我可協助你整理情境、辨識壓力來源，並提供可落地的溝通建議。
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-xl rounded-2xl border border-line bg-amber-50 px-5 py-4 text-base text-foreground">
              我家孩子最近放學後情緒很大，我一開口就會吵架。
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 hidden h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-accent sm:inline-flex">
              <Bot className="h-4 w-4" />
            </span>
            <div className="max-w-2xl rounded-2xl border border-line bg-background px-5 py-4 text-base leading-8 text-foreground">
              明白，這是很常見的高壓互動。你可以先試三步：
              <br />
              1) 先描述觀察，不下評價；
              <br />
              2) 先承接情緒，再談規則；
              <br />
              3) 一次只談一件事。
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-full border border-line bg-background px-4 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-background px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex-1 text-muted">向 Nest AI 提問...</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white"
            >
              <SendHorizonal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted">
          AI 回答僅供參考，如有嚴重情況請諮詢專業心理師
        </p>
      </section>
    </main>
  );
}
