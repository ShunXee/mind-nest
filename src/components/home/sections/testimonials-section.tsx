import Image from "next/image";

import type { HomeCopy } from "@/lib/i18n/home-copy";

export function TestimonialsSection({ copy }: { copy: HomeCopy["testimonials"] }) {
  const firstRow = copy.cards.slice(0, 3);
  const secondRow = copy.cards.slice(3);

  const renderCard = (card: HomeCopy["testimonials"]["cards"][number]) => (
    <article className="group rounded-[1.5rem] border border-line bg-surface/92 p-5 shadow-[0_10px_26px_rgba(74,45,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_16px_34px_rgba(74,45,26,0.14)]">
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
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{copy.eyebrow}</p>
        <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">{copy.description}</p>
      </div>
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
