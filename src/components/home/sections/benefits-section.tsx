import { Gauge, Monitor, PenLine, Shield, Star, Users } from "lucide-react";

import type { HomeCopy } from "@/lib/i18n/home-copy";

const benefits = [
  { icon: PenLine, iconClassName: "bg-sky-100 text-sky-600" },
  { icon: Gauge, iconClassName: "bg-cyan-100 text-cyan-600" },
  { icon: Users, iconClassName: "bg-sky-100 text-sky-600" },
  { icon: Star, iconClassName: "bg-cyan-100 text-cyan-600" },
  { icon: Shield, iconClassName: "bg-sky-100 text-sky-600" },
  { icon: Monitor, iconClassName: "bg-cyan-100 text-cyan-600" },
];

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
