import Link from "next/link";
import { Eye, Play } from "lucide-react";

export type VideoCourseCardData = {
  title: string;
  description: string;
  duration?: string;
  instructor?: string;
  views?: string;
};

type VideoCourseCardProps = {
  href: string;
  card: VideoCourseCardData;
};

export function VideoCourseCard({ href, card }: VideoCourseCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line/90 bg-surface shadow-[0_8px_20px_rgba(74,45,26,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(74,45,26,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div className="relative m-3 aspect-video rounded-[0.95rem] border border-line bg-[#f5f1e8]">
        {card.duration ? (
          <span className="absolute bottom-3 right-3 rounded-lg bg-black/55 px-2 py-1 text-xs font-medium text-white">
            {card.duration}
          </span>
        ) : null}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 text-accent" />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">Micro lesson</p>
        <h3 className="mt-2 line-clamp-2 min-h-[3.5rem] text-[1.25rem] leading-7 font-semibold text-foreground">
          {card.title}
        </h3>
        <p className="mt-2 h-[4.5rem] overflow-hidden line-clamp-3 text-base leading-7 text-muted">{card.description}</p>
        {(card.instructor || card.views) && (
          <div className="mt-auto flex items-center justify-between border-t border-line/80 pt-4 text-sm text-muted">
            <span>{card.instructor}</span>
            {card.views ? (
              <span className="inline-flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {card.views}
              </span>
            ) : (
              <span />
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
