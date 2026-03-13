"use client";

import { CheckCircle2, Circle, CircleDot, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type QuizOptionButtonProps = {
  optionId: string;
  text: string;
  isSelected: boolean;
  isLocked: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onSelect: (optionId: string) => void;
};

export function QuizOptionButton({
  optionId,
  text,
  isSelected,
  isLocked,
  isCorrect,
  showResult,
  onSelect,
}: QuizOptionButtonProps) {
  const isWrongSelected = showResult && isSelected && !isCorrect;
  const isCorrectState = showResult && isCorrect;

  return (
    <button
      type="button"
      disabled={isLocked}
      onClick={() => onSelect(optionId)}
      className={cn(
        "w-full rounded-2xl border px-5 py-4 text-left transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45",
        isLocked ? "cursor-not-allowed opacity-90" : "cursor-pointer",
        isSelected && !showResult && "border-accent bg-accent/5",
        !isSelected && !showResult && "border-line bg-background hover:bg-amber-50/50",
        isCorrectState && "border-emerald-400/70 bg-emerald-50/80",
        isWrongSelected && "border-rose-300/80 bg-rose-50/70",
      )}
      aria-pressed={isSelected}
    >
      <span className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 text-muted">
          {isCorrectState ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-700" />
          ) : isWrongSelected ? (
            <XCircle className="h-5 w-5 text-rose-700" />
          ) : isSelected ? (
            <CircleDot className="h-5 w-5 text-accent" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </span>
        <span className="text-base leading-7 font-medium text-foreground">{text}</span>
      </span>
    </button>
  );
}
