"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuizOptionButton } from "@/components/qa/quiz-option-button";
import type { QaBank } from "@/lib/qa-bank";
import type { Locale } from "@/lib/i18n/home-copy";

type QuizRunnerProps = {
  bank: QaBank;
  locale: Locale;
  onBackToBanks: () => void;
};

const UI_TEXT = {
  "zh-HK": {
    question: "問題",
    score: "得分",
    accuracy: "正確率",
    competency: "核心能力",
    rationale: "解析",
    yourAnswer: "你的答案",
    correctAnswer: "正確答案",
    prev: "上一題",
    submit: "提交答案",
    next: "下一題",
    finish: "完成題庫",
    backBanks: "返回題庫列表",
    restart: "重新作答",
    resultTitle: "作答完成",
    resultDesc: "你已完成本題庫，以下是本次表現摘要。",
    reviewTitle: "答題回顧",
    unanswered: "未作答",
    correct: "正確",
    needsReview: "需複習",
  },
  en: {
    question: "Question",
    score: "Score",
    accuracy: "Accuracy",
    competency: "Competency",
    rationale: "Rationale",
    yourAnswer: "Your answer",
    correctAnswer: "Correct answer",
    prev: "Previous",
    submit: "Submit answer",
    next: "Next",
    finish: "Finish bank",
    backBanks: "Back to banks",
    restart: "Retake",
    resultTitle: "Assessment complete",
    resultDesc: "You completed this bank. Review your performance summary below.",
    reviewTitle: "Review",
    unanswered: "Unanswered",
    correct: "Correct",
    needsReview: "Needs review",
  },
} as const;

export function QuizRunner({ bank, locale, onBackToBanks }: QuizRunnerProps) {
  const t = UI_TEXT[locale];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = bank.questions[questionIndex];
  const total = bank.questions.length;
  const currentAnswer = answers[currentQuestion.id];
  const currentRevealed = Boolean(revealed[currentQuestion.id]);

  const answeredCount = useMemo(
    () => bank.questions.filter((question) => answers[question.id]).length,
    [answers, bank.questions],
  );

  const correctCount = useMemo(
    () =>
      bank.questions.filter(
        (question) => answers[question.id] && answers[question.id] === question.correctOptionId,
      ).length,
    [answers, bank.questions],
  );

  const progressPercent = Math.round((answeredCount / total) * 100);
  const accuracyPercent = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);

  const handleSelectOption = (optionId: string) => {
    if (currentRevealed) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleSubmit = () => {
    if (!currentAnswer) return;
    setRevealed((prev) => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleNext = () => {
    if (questionIndex === total - 1) {
      setIsCompleted(true);
      return;
    }
    setQuestionIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setAnswers({});
    setRevealed({});
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <section className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_10px_28px_rgba(74,45,26,0.07)] md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-accent-foreground">{bank.title}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{t.resultTitle}</h2>
            <p className="mt-2 text-base text-muted">{t.resultDesc}</p>
          </div>
          <div className="rounded-2xl border border-line bg-background px-5 py-4 text-right">
            <p className="text-sm text-muted">{t.score}</p>
            <p className="text-3xl font-semibold text-foreground">
              {correctCount}/{total}
            </p>
            <p className="mt-1 text-sm text-muted">
              {t.accuracy}: {accuracyPercent}%
            </p>
          </div>
        </div>

        <h3 className="mt-7 text-xl font-semibold text-foreground">{t.reviewTitle}</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {bank.questions.map((question) => {
            const answerId = answers[question.id];
            const selected = question.options.find((option) => option.id === answerId)?.text ?? t.unanswered;
            const correct = question.options.find((option) => option.id === question.correctOptionId)?.text ?? "";
            const isCorrect = answerId === question.correctOptionId;

            return (
              <article key={question.id} className="rounded-xl border border-line bg-background p-4">
                <p className="text-sm font-semibold text-foreground">{question.prompt}</p>
                <p className="mt-2 text-sm text-muted">
                  {t.yourAnswer}: {selected}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t.correctAnswer}: {correct}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{question.rationale}</p>
                <p className="mt-2 inline-flex rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted">
                  {t.competency}: {question.competency}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">{isCorrect ? t.correct : t.needsReview}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button type="button" variant="outline" className="rounded-full border-line" onClick={onBackToBanks}>
            {t.backBanks}
          </Button>
          <Button type="button" className="rounded-full bg-accent hover:bg-primary-strong" onClick={handleRestart}>
            <RotateCcw className="h-4 w-4" />
            {t.restart}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_10px_28px_rgba(74,45,26,0.07)] md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent-foreground">{bank.title}</p>
          <p className="mt-1 text-base text-muted">
            {t.question} {questionIndex + 1} / {total}
          </p>
        </div>
        <div className="rounded-xl border border-line bg-background px-3 py-2 text-right">
          <p className="text-xs text-muted">{t.score}</p>
          <p className="text-lg font-semibold text-foreground">
            {correctCount}/{total}
          </p>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-line">
        <span className="block h-full rounded-full bg-accent transition-all duration-300" style={{ width: `${progressPercent}%` }} />
      </div>

      <h2 className="mt-7 text-[1.8rem] leading-10 font-semibold text-foreground">{currentQuestion.prompt}</h2>
      <p className="mt-2 text-sm text-muted">
        {t.competency}: {currentQuestion.competency}
      </p>

      <div className="mt-6 grid gap-3">
        {currentQuestion.options.map((option) => (
          <QuizOptionButton
            key={option.id}
            optionId={option.id}
            text={option.text}
            isSelected={currentAnswer === option.id}
            isLocked={currentRevealed}
            isCorrect={option.id === currentQuestion.correctOptionId}
            showResult={currentRevealed}
            onSelect={handleSelectOption}
          />
        ))}
      </div>

      {currentRevealed ? (
        <div className="mt-5 rounded-xl border border-line bg-background px-4 py-4">
          <p className="text-sm font-semibold text-foreground">{t.rationale}</p>
          <p className="mt-2 text-base leading-7 text-muted">{currentQuestion.rationale}</p>
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          className="rounded-full border-line"
          onClick={() => setQuestionIndex((prev) => Math.max(prev - 1, 0))}
          disabled={questionIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          {t.prev}
        </Button>

        <div className="flex items-center gap-3">
          {!currentRevealed ? (
            <Button
              type="button"
              className="rounded-full bg-accent hover:bg-primary-strong"
              onClick={handleSubmit}
              disabled={!currentAnswer}
            >
              {t.submit}
            </Button>
          ) : (
            <Button type="button" className="rounded-full bg-accent hover:bg-primary-strong" onClick={handleNext}>
              {questionIndex === total - 1 ? (
                <>
                  <Trophy className="h-4 w-4" />
                  {t.finish}
                </>
              ) : (
                <>
                  {t.next}
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
