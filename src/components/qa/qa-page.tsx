"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, LibraryBig } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QaBankCard } from "@/components/qa/qa-bank-card";
import { QuizRunner } from "@/components/qa/quiz-runner";
import { useSiteLocale } from "@/components/layout/site-locale-context";
import { getQaBanks } from "@/lib/qa-bank";

const UI_TEXT = {
  "zh-HK": {
    eyebrow: "心理學知識問答",
    title: "專業題庫，邊學邊測",
    description: "按主題分題庫練習。每題提供作答反饋與解析，幫助照顧者把心理學知識轉成日常行動。",
    backHome: "返回首頁",
    banksTitle: "選擇題庫開始作答",
    banksDesc: "建議先完成入門題庫，再按需要進入進階主題。",
    start: "開始作答",
    switchBank: "切換題庫",
  },
  en: {
    eyebrow: "Psychology Q&A",
    title: "Professional question banks",
    description:
      "Practice by topic. Each question provides feedback and rationale so caregivers can turn knowledge into action.",
    backHome: "Back to Home",
    banksTitle: "Choose a question bank",
    banksDesc: "Start with beginner banks, then move to advanced modules as needed.",
    start: "Start assessment",
    switchBank: "Switch bank",
  },
} as const;

export function QAPage() {
  const { locale } = useSiteLocale();
  const t = UI_TEXT[locale];
  const banks = useMemo(() => getQaBanks(locale), [locale]);
  const [activeBankId, setActiveBankId] = useState<string | null>(null);

  const activeBank = banks.find((bank) => bank.id === activeBankId) ?? null;

  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-10 md:py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Button asChild variant="outline" className="rounded-full border-line">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            {t.backHome}
          </Link>
        </Button>
        {activeBank ? (
          <Button type="button" variant="outline" className="rounded-full border-line" onClick={() => setActiveBankId(null)}>
            {t.switchBank}
          </Button>
        ) : null}
      </div>

      <section className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_10px_28px_rgba(74,45,26,0.07)] md:p-8">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{t.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-balance font-heading text-[clamp(2rem,3.9vw,3.4rem)] font-semibold tracking-tight text-foreground">
          {t.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{t.description}</p>
      </section>

      <section className="mt-8">
        {activeBank ? (
          <QuizRunner bank={activeBank} locale={locale} onBackToBanks={() => setActiveBankId(null)} />
        ) : (
          <div className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_10px_28px_rgba(74,45,26,0.07)] md:p-8">
            <div className="flex items-center gap-2">
              <LibraryBig className="h-5 w-5 text-accent-foreground" />
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">{t.banksTitle}</h2>
            </div>
            <p className="mt-2 text-base text-muted">{t.banksDesc}</p>

            <ul className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {banks.map((bank) => (
                <li key={bank.id} className="h-full">
                  <QaBankCard bank={bank} startLabel={t.start} onStart={() => setActiveBankId(bank.id)} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
