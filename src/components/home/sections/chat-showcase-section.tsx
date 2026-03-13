import Link from "next/link";
import { Bot, SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/lib/i18n/home-copy";

export function ChatShowcaseSection({ copy }: { copy: HomeCopy["chatShowcase"] }) {
  return (
    <section className="py-16" id="ai-chat">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{copy.eyebrow}</p>
        <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">{copy.description}</p>
      </div>

      <Link
        href="/chat"
        className="group mx-auto mt-10 block max-w-6xl rounded-[2rem] border border-line bg-surface/90 p-6 shadow-[0_12px_32px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(74,45,26,0.14)] md:p-8 lg:min-h-[760px] lg:p-10"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-accent">
              <Bot className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold text-foreground">{copy.assistantName}</p>
              <p className="text-sm text-muted">{copy.online}</p>
            </div>
          </div>
          <span className="rounded-full border border-line bg-background px-3 py-1 text-sm text-muted">
            {copy.repliedToday}
          </span>
        </div>

        <div className="mt-6 flex h-[560px] flex-col lg:h-[620px]">
          <div className="flex gap-3">
            <span className="mt-1 hidden h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-accent sm:inline-flex">
              <Bot className="h-4 w-4" />
            </span>
            <div className="max-w-2xl rounded-2xl border border-line bg-background px-5 py-4 text-base leading-8 text-foreground">
              {copy.opening}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {copy.prompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-full border border-line bg-background px-4 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {prompt}
              </div>
            ))}
          </div>

          <div className="mt-auto rounded-2xl border border-line bg-background px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex-1 text-muted">{copy.inputPlaceholder}</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                <SendHorizonal className="h-4 w-4" />
              </span>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-muted">{copy.disclaimer}</p>
        </div>
      </Link>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="rounded-full border-line px-6">
          <Link href="/chat">{copy.openChatCta}</Link>
        </Button>
      </div>
    </section>
  );
}
