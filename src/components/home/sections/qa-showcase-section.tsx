import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/lib/i18n/home-copy";

export function QAShowcaseSection({ copy }: { copy: HomeCopy["qaShowcase"] }) {
  return (
    <section className="py-16" id="qa-bank">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{copy.eyebrow}</p>
        <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">{copy.description}</p>
      </div>

      <Link
        href="/qa"
        className="group mx-auto mt-10 block max-w-4xl rounded-[2rem] border border-line bg-surface/90 p-6 shadow-[0_12px_32px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(74,45,26,0.14)] md:p-8"
      >
        <div className="flex items-center justify-between text-base font-semibold text-muted">
          <span>{copy.progressLabel}</span>
          <span>{copy.scoreLabel}</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
          <span className="block h-full w-1/4 rounded-full bg-accent" />
        </div>

        <h3 className="mt-7 text-3xl font-semibold text-foreground">{copy.question}</h3>

        <div className="mt-6 grid gap-4">
          {copy.options.map((option) => (
            <div
              key={option}
              className="rounded-2xl border border-line bg-background px-5 py-4 text-lg font-medium text-foreground transition-colors duration-200 group-hover:bg-amber-50/50"
            >
              {option}
            </div>
          ))}
        </div>
      </Link>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="rounded-full border-line px-6">
          <Link href="/qa">{copy.openQaCta}</Link>
        </Button>
      </div>
    </section>
  );
}
