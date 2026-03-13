import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  CirclePlay,
  Eye,
  Gauge,
  LibraryBig,
  Monitor,
  PenLine,
  Play,
  SendHorizonal,
  Shield,
  Star,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/lib/i18n/home-copy";

const benefits = [
  {
    icon: PenLine,
    iconClassName: "bg-sky-100 text-sky-600",
  },
  {
    icon: Gauge,
    iconClassName: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Users,
    iconClassName: "bg-sky-100 text-sky-600",
  },
  {
    icon: Star,
    iconClassName: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Shield,
    iconClassName: "bg-sky-100 text-sky-600",
  },
  {
    icon: Monitor,
    iconClassName: "bg-cyan-100 text-cyan-600",
  },
];

const modules = [
  {
    id: "video",
    icon: CirclePlay,
  },
  {
    id: "ai-practice",
    icon: Bot,
  },
  {
    id: "qa-bank",
    icon: LibraryBig,
  },
];

export function HeroSection({ copy }: { copy: HomeCopy["hero"] }) {
  return (
    <section className="grid gap-10 py-8 md:py-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-16">
      <div className="lg:col-span-7">
        <h1 className="mt-10 max-w-4xl font-heading text-[clamp(2.5rem,5vw,4.9rem)] leading-[1.04] font-semibold tracking-tight text-foreground">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-muted">
          {copy.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="min-h-11 rounded-full bg-accent hover:bg-primary-strong">
            <Link className="focus-ring" href="#contact">
              {copy.pilotCta}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-11 rounded-full border-line">
            <a href="#" aria-disabled="true">
              {copy.loginCta}
            </a>
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
        <div className="absolute -left-8 -top-10 h-36 w-36 rounded-full bg-amber-100/70 blur-2xl" />
        <div className="absolute -bottom-6 -right-4 h-36 w-36 rounded-full bg-orange-100/70 blur-2xl" />
        <div className="relative rounded-[2rem] border border-line/70 bg-surface/85 p-4 shadow-[0_12px_36px_rgba(124,45,18,0.08)]">
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

export function BenefitsSection({ copy }: { copy: HomeCopy["benefits"] }) {
  return (
    <section id="benefits" className="py-16">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{copy.eyebrow}</p>
        <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {copy.title}
        </h2>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:gap-7 xl:grid-cols-3">
        {benefits.map((benefit, index) => (
          <li
            key={copy.cards[index].title}
            className="group rounded-[2rem] border border-line bg-[#fffdf9]/90 p-8 shadow-[0_14px_36px_rgba(74,45,26,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(74,45,26,0.13)]"
          >
            <div
              className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] transition-transform duration-300 group-hover:scale-105 ${benefit.iconClassName}`}
            >
              <benefit.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-3xl font-semibold text-foreground">{copy.cards[index].title}</h3>
            <p className="mt-4 text-base leading-8 text-muted">{copy.cards[index].description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function VideoCourseCard({
  href,
  card,
}: {
  href: string;
  card: HomeCopy["videoShowcase"]["cards"][number];
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface/90 shadow-[0_10px_28px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(74,45,26,0.14)]"
    >
      <div className="relative m-3 border border-amber-400/30 aspect-video rounded-[1.2rem] bg-amber-50">
        <span className="absolute bottom-3 right-3 rounded-lg bg-black/55 px-2 py-1 text-xs font-medium text-white">
          {card.duration}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 text-accent" />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
        <h3 className="line-clamp-2 min-h-[4rem] text-xl font-semibold text-foreground">{card.title}</h3>
        <p className="mt-2 line-clamp-2 h-14 overflow-hidden text-base leading-7 text-muted">
          {card.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4 text-sm text-muted">
          <span>{card.instructor}</span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {card.views}
          </span>
        </div>
      </div>
    </Link>
  );
}

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
            <VideoCourseCard href="/courses/videos" card={card} />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" className="rounded-full border-line px-6">
          <Link href="/courses/videos">{copy.viewAllCta}</Link>
        </Button>
      </div>
    </section>
  );
}

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
        className="group mt-10 block max-w-6xl mx-auto rounded-[2rem] border border-line bg-surface/90 p-6 shadow-[0_12px_32px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(74,45,26,0.14)] md:p-8 lg:min-h-[760px] lg:p-10"
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
        className="group mt-10 max-w-4xl mx-auto block rounded-[2rem] border border-line bg-surface/90 p-6 shadow-[0_12px_32px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(74,45,26,0.14)] md:p-8"
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

export function FinalCtaSection({ copy }: { copy: HomeCopy["finalCta"] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl rounded-[2.2rem]  px-6 py-12 text-center md:px-12 md:py-16">
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
            <a href="#benefits">{copy.secondaryCta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ copy }: { copy: HomeCopy["testimonials"] }) {
  const firstRow = copy.cards.slice(0, 3);
  const secondRow = copy.cards.slice(3);

  const renderCard = (card: HomeCopy["testimonials"]["cards"][number]) => (
    <article
      className="group rounded-[1.5rem] border border-line bg-surface/92 p-5 shadow-[0_10px_26px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_16px_34px_rgba(74,45,26,0.14)]"
    >
      <div className="flex items-center gap-3">
        <Image
          src={card.avatar}
          alt={card.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border border-line object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div>
          <p className="text-base font-semibold text-foreground">{card.name}</p>
          <p className="text-sm text-muted">{card.role}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-sm leading-6 text-muted">
          <span className="font-medium text-foreground">{copy.contextLabel}：</span>
          {card.context}
        </p>
        <p className="text-sm leading-6 text-muted">
          <span className="font-medium text-foreground">{copy.changeLabel}：</span>
          {card.change}
        </p>
      </div>

      <blockquote className="mt-4 border-l-2 border-accent/70 pl-3 text-base leading-7 text-foreground">
        {card.quote}
      </blockquote>
    </article>
  );

  return (
    <section className="py-16" id="proof">
      <h2 className="font-heading text-3xl font-semibold text-foreground">{copy.title}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:hidden">
        {copy.cards.map((card) => (
          <div key={card.name}>{renderCard(card)}</div>
        ))}
      </div>
      <div className="mt-6 hidden lg:block">
        <div className="grid gap-5 lg:grid-cols-3">
          {firstRow.map((card) => (
            <div key={card.name}>{renderCard(card)}</div>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-5">
          {secondRow.map((card) => (
            <div key={card.name} className="w-[calc((100%-2.5rem)/3)]">
              {renderCard(card)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
