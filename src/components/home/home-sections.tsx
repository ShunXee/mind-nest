import Link from "next/link";
import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import {
  Bot,
  CirclePlay,
  Gauge,
  LibraryBig,
  Monitor,
  MessageSquareHeart,
  PenLine,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    <section id="benefits" className="py-14 my-48">
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

function ModuleCard({
  title,
  description,
  points,
  icon: Icon,
  children,
  moduleBadge,
  detailCta,
}: {
  title: string;
  description: string;
  points: string[];
  icon: ComponentType<{ className?: string }>;
  children?: ReactNode;
  moduleBadge: string;
  detailCta: string;
}) {
  return (
    <Card className="soft-card gap-4 border-line py-0">
      <CardHeader className="pt-6">
        <div className="mb-1 flex items-center gap-2">
          <Icon className="h-4 w-4 text-accent" />
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            {moduleBadge}
          </Badge>
        </div>
        <CardTitle className="font-heading text-2xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-base leading-7 text-muted">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 text-muted">
        {children}
        <Separator className="bg-line" />
        <ul className="grid gap-2 text-sm leading-6">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <Sparkles className="mt-1 h-3.5 w-3.5 text-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="px-0 text-primary hover:bg-transparent hover:text-primary-strong">
          {detailCta}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ModulesSection({ copy }: { copy: HomeCopy["modules"] }) {
  return (
    <section id="modules" className="py-10">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-foreground">{copy.sectionTitle}</h2>
          <p className="mt-2 text-muted">{copy.sectionDescription}</p>
        </div>
        <Badge variant="outline" className="border-line bg-surface text-muted">
          {copy.badge}
        </Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            icon={module.icon}
            title={copy.cards[index].title}
            description={copy.cards[index].description}
            points={copy.cards[index].points}
            moduleBadge={copy.moduleBadge}
            detailCta={copy.detailCta}
          >
            {module.id === "video" && (
              <div className="relative overflow-hidden rounded-lg border border-line bg-gradient-to-br from-amber-100 to-orange-100 p-4">
                <div className="aspect-video rounded-md border border-white/60 bg-white/70 p-3">
                  <div className="flex h-full items-center justify-center rounded-sm border border-dashed border-accent/35">
                    <CirclePlay className="h-9 w-9 text-accent" />
                  </div>
                </div>
              </div>
            )}
            {module.id === "ai-practice" && (
              <div className="rounded-lg border border-line bg-surface p-3 text-sm">
                <p className="text-muted">{copy.cards[index].demo.parentLine}</p>
                <p className="mt-2 flex items-start gap-2 text-foreground">
                  <MessageSquareHeart className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{copy.cards[index].demo.aiLine}</span>
                </p>
              </div>
            )}
            {module.id === "qa-bank" && (
              <div className="rounded-lg border border-line bg-surface p-3 text-sm">
                <p className="font-medium text-foreground">{copy.cards[index].demo.question}</p>
                <p className="mt-2 text-muted">{copy.cards[index].demo.note}</p>
              </div>
            )}
          </ModuleCard>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection({ copy }: { copy: HomeCopy["testimonials"] }) {
  return (
    <section className="py-10" id="proof">
      <h2 className="font-heading text-3xl font-semibold text-foreground">{copy.title}</h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {copy.quotes.map((quote) => (
          <blockquote key={quote} className="soft-card border-l-4 border-l-accent p-5 text-muted">
            {quote}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
