"use client";

import { BookOpen, Timer, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { QaBank } from "@/lib/qa-bank";

type QaBankCardProps = {
  bank: QaBank;
  startLabel: string;
  onStart: () => void;
};

export function QaBankCard({ bank, startLabel, onStart }: QaBankCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-surface p-5 shadow-[0_8px_22px_rgba(74,45,26,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(74,45,26,0.1)]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{bank.level}</p>
        <span className="rounded-full border border-line bg-background px-3 py-1 text-xs font-medium text-muted">
          {bank.questions.length} Q
        </span>
      </div>
      <h3 className="mt-3 text-[1.35rem] leading-8 font-semibold text-foreground">{bank.title}</h3>
      <p className="mt-2 min-h-16 text-base leading-7 text-muted">{bank.description}</p>

      <dl className="mt-4 grid gap-2 text-sm text-muted">
        <div className="inline-flex items-center gap-2">
          <Users className="h-4 w-4" />
          {bank.audience}
        </div>
        <div className="inline-flex items-center gap-2">
          <Timer className="h-4 w-4" />
          {bank.estMinutes} min
        </div>
        <div className="inline-flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          {bank.questions.length} scenario questions
        </div>
      </dl>

      <div className="mt-auto pt-5">
        <Button type="button" onClick={onStart} className="w-full rounded-full bg-accent hover:bg-primary-strong">
          {startLabel}
        </Button>
      </div>
    </article>
  );
}
