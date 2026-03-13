import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/lib/i18n/home-copy";

function handleHeroTiltMove(event: MouseEvent<HTMLDivElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  // Invert common tilt mapping so cursor side feels pressed down.
  const rotateX = (y - 0.5) * 20;
  const rotateY = (0.5 - x) * 20;

  element.style.setProperty("--hero-tilt-x", `${rotateX.toFixed(2)}deg`);
  element.style.setProperty("--hero-tilt-y", `${rotateY.toFixed(2)}deg`);
  element.style.transitionDuration = "80ms";
}

function handleHeroTiltLeave(event: MouseEvent<HTMLDivElement>) {
  const element = event.currentTarget;
  element.style.setProperty("--hero-tilt-x", "0deg");
  element.style.setProperty("--hero-tilt-y", "0deg");
  element.style.transitionDuration = "360ms";
}

export function HeroSection({ copy }: { copy: HomeCopy["hero"] }) {
  return (
    <section className="grid gap-10 py-8 md:py-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-16">
      <div className="lg:col-span-7">
        <h1 className="mt-10 max-w-4xl text-balance font-heading text-[clamp(2.35rem,4.6vw,4.5rem)] leading-[1.06] font-semibold tracking-tight text-foreground">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-muted">{copy.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="min-h-11 rounded-full bg-accent hover:bg-primary-strong">
            <Link className="focus-ring" href="/chat">
              {copy.pilotCta}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="min-h-11 rounded-full border-line" disabled>
            {copy.loginCta}
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
          {copy.stats.map((stat) => (
            <li key={stat} className="rounded-full border border-line bg-surface px-4 py-2">
              {stat}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative lg:col-span-5">
        <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-amber-100/70 blur-2xl" />
        <div className="absolute -bottom-6 -right-4 h-36 w-36 rounded-full bg-orange-100/70 blur-2xl" />
        <div
          onMouseMove={handleHeroTiltMove}
          onMouseLeave={handleHeroTiltLeave}
          className="relative rounded-[2rem] border border-line/70 bg-surface/85 p-4 shadow-[0_12px_36px_rgba(124,45,18,0.08)] transition-transform [transform:perspective(1100px)_rotateX(var(--hero-tilt-x,0deg))_rotateY(var(--hero-tilt-y,0deg))] motion-reduce:transform-none"
        >
          <Image
            src="/hero.jpg"
            alt={copy.imageAlt}
            width={1500}
            height={1000}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
