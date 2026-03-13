import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const options = [
  "A. 先認可孩子情緒感受，再引導解決問題",
  "B. 立即以獎勵轉移注意力",
  "C. 忽略哭泣，讓孩子自行控制",
  "D. 嚴厲責備以阻止哭泣",
];

export default function QAPage() {
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

      <section className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">心理學知識問答</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          邊學邊測，掌握育兒心理學
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">
          此頁為問答系統骨架。後續可接入題庫、答題記錄、錯題複習與進度追蹤。
        </p>
      </section>

      <section className="mt-10 rounded-[2rem] border border-line bg-surface/90 p-6 shadow-[0_12px_32px_rgba(74,45,26,0.08)] md:p-8">
        <div className="flex items-center justify-between text-base font-semibold text-muted">
          <span>問題 1 / 4</span>
          <span>得分 0</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
          <span className="block h-full w-1/4 rounded-full bg-accent" />
        </div>

        <h2 className="mt-7 text-3xl font-semibold text-foreground">當孩子哭泣時，較有效的處理方式是？</h2>

        <div className="mt-6 grid gap-4">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="rounded-2xl border border-line bg-background px-5 py-4 text-left text-lg font-medium text-foreground transition-colors duration-200 hover:bg-amber-50/60"
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="button" className="rounded-full bg-accent hover:bg-primary-strong">
            下一題
          </Button>
        </div>
      </section>
    </main>
  );
}
