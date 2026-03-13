import Link from "next/link";
import { PlayCircle, Clock3, ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const placeholders = [
  "親子溝通基礎",
  "情緒調節策略",
  "壓力下的家庭對話",
  "青春期互信重建",
  "衝突降溫技巧",
  "家長自我照顧",
];

export default function VideoCoursesPage() {
  return (
    <main className="mx-auto min-h-screen w-[min(1080px,92vw)] py-10">
      <div className="mb-8 flex items-center justify-between">
        <Button asChild variant="outline" className="rounded-full border-line">
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            返回首頁
          </Link>
        </Button>
      </div>

      <section className="rounded-[1.75rem] border border-line bg-surface/90 p-8 shadow-[0_10px_30px_rgba(74,45,26,0.08)]">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">短片課程 | Video Courses</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
          AI 心理支援短片課程
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          此頁為課程骨架版本。後續可接入分類、搜尋、播放歷史與完成度追蹤。
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((title) => (
          <Card key={title} className="border-line py-0">
            <CardHeader className="pt-5">
              <div className="mb-3 aspect-video rounded-xl border border-line bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
                <div className="flex h-full items-center justify-center">
                  <PlayCircle className="h-10 w-10 text-accent" />
                </div>
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                5-10 分鐘
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-5 text-sm text-muted">即將上線：課程詳情、講者資訊與播放入口。</CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
