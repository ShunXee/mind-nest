"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { useSiteLocale } from "@/components/layout/site-locale-context";
import { Button } from "@/components/ui/button";
import { VideoCourseCard } from "@/components/video/video-course-card";
import type { CourseVideo } from "@/lib/course-videos";

export function CoursesPage({ videos }: { videos: CourseVideo[] }) {
  const { copy, locale } = useSiteLocale();
  const courseCopy = copy.videoShowcase;
  const totalLessons = videos.length;

  return (
    <main className="mx-auto w-[min(1080px,92vw)] py-10 md:py-12">
      <div className="mb-8 flex items-center justify-between">
        <Button asChild variant="outline" className="rounded-full border-line">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            {locale === "zh-HK" ? "返回首頁" : "Back to Home"}
          </Link>
        </Button>
      </div>

      <section className="rounded-[1.5rem] border border-line bg-surface p-6 shadow-[0_8px_24px_rgba(74,45,26,0.07)] md:p-8">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">{courseCopy.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-balance font-heading text-[clamp(2rem,3.8vw,3.2rem)] font-semibold tracking-tight text-foreground">
          {courseCopy.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{courseCopy.description}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-background px-4 py-3">
            <p className="text-xs font-medium text-muted">{locale === "zh-HK" ? "課程數量" : "Total lessons"}</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">{totalLessons}</p>
          </div>
          <div className="rounded-xl border border-line bg-background px-4 py-3">
            <p className="text-xs font-medium text-muted">{locale === "zh-HK" ? "課程形式" : "Format"}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {locale === "zh-HK" ? "5-10 分鐘短片" : "5-10 min micro videos"}
            </p>
          </div>
          <div className="rounded-xl border border-line bg-background px-4 py-3">
            <p className="text-xs font-medium text-muted">{locale === "zh-HK" ? "語言支援" : "Language support"}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {locale === "zh-HK" ? "香港粵語 / 英語" : "Cantonese / English"}
            </p>
          </div>
        </div>
      </section>

      <section id="video-list" className="mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            {locale === "zh-HK" ? "全部課程" : "All courses"}
          </h2>
          <p className="text-sm text-muted">
            {locale === "zh-HK" ? "按實際場景設計，可直接套用到日常照顧。" : "Designed for real caregiving scenarios."}
          </p>
        </div>
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <li key={video.slug}>
              <VideoCourseCard
                href={`/courses/${video.slug}`}
                card={{
                  title: video.title,
                  description: video.description,
                  duration: video.duration,
                  instructor: video.instructor,
                  views: video.views,
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
