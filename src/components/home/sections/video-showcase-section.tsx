import Link from "next/link";

import { Button } from "@/components/ui/button";
import { VideoCourseCard } from "@/components/video/video-course-card";
import type { HomeCopy } from "@/lib/i18n/home-copy";

export function VideoShowcaseSection({ copy }: { copy: HomeCopy["videoShowcase"] }) {
  return (
    <section className="py-16" id="video-courses">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{copy.eyebrow}</p>
        <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">{copy.description}</p>
      </div>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {copy.cards.map((card) => (
          <li key={card.title}>
            <VideoCourseCard href="/courses" card={card} />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" className="rounded-full border-line px-6">
          <Link href="/courses">{copy.viewAllCta}</Link>
        </Button>
      </div>
    </section>
  );
}
