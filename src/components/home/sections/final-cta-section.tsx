import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/lib/i18n/home-copy";

export function FinalCtaSection({ copy }: { copy: HomeCopy["finalCta"] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] px-6 py-12 text-center md:px-12 md:py-16">
        <h2 className="font-heading text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.08] font-semibold tracking-tight text-foreground">
          {copy.titlePrefix}{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {copy.titleHighlight}
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[clamp(1rem,1.8vw,1.75rem)] leading-9 text-muted">
          {copy.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="min-h-12 rounded-full px-8 text-white shadow-[0_10px_28px_rgba(124,45,18,0.22)] hover:from-primary-strong hover:to-accent"
          >
            <Link href="/chat">{copy.primaryCta}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full border-line px-8">
            <Link href="/">{copy.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
