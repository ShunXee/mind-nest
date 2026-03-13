import Link from "next/link";
import { ChevronLeft, Globe2, ShieldCheck, BookOpenText, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getCourseVideoBySlug, getCourseVideos } from "@/lib/course-videos";

export async function generateStaticParams() {
  const videos = await getCourseVideos();
  return videos.map((video) => ({ slug: video.slug }));
}

export default async function CourseVideoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = await getCourseVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  return (
    <main className="mx-auto w-[min(1120px,92vw)] py-10 md:py-12">
      <div className="mb-8">
        <Button asChild variant="outline" className="rounded-full border-line">
          <Link href="/courses">
            <ChevronLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
      </div>

      <section className="rounded-[1.5rem] border border-line bg-surface p-5 shadow-[0_8px_24px_rgba(74,45,26,0.07)] md:p-8">
        <p className="text-sm font-semibold tracking-wide text-accent-foreground">Course lesson</p>
        <h1 className="mt-3 max-w-5xl text-balance font-heading text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight text-foreground">
          {video.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center rounded-full border border-line bg-background px-3 py-1.5">
            {video.instructor ?? "Mind-Nest Team"}
          </span>
          <span className="inline-flex items-center rounded-full border border-line bg-background px-3 py-1.5">
            Cantonese / English
          </span>
        </div>

        <div className="mt-7 overflow-hidden rounded-3xl border border-line bg-[#f4f1e9] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
          <video
            controls
            preload="metadata"
            className="block aspect-video w-full rounded-3xl border-0 bg-[#f4f1e9] object-cover"
            src={video.src}
            aria-label={video.title}
          />
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-12">
          <article className="rounded-2xl border border-line bg-background p-5 lg:col-span-7">
            <h2 className="inline-flex items-center gap-2 text-base font-semibold text-foreground">
              <BookOpenText className="h-4 w-4" />
              Lesson overview
            </h2>
            <p className="mt-3 text-base leading-8 text-muted">{video.description}</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              <li className="rounded-lg border border-line/80 bg-surface px-3 py-2">
                Focus: practical caregiver communication in daily family situations.
              </li>
              <li className="rounded-lg border border-line/80 bg-surface px-3 py-2">
                Use this lesson with reflection and practice in real conversations.
              </li>
            </ul>
          </article>

          <aside className="rounded-2xl border border-line bg-background p-5 lg:col-span-5">
            <h2 className="text-base font-semibold text-foreground">Lesson details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="inline-flex items-center gap-2 text-muted">
                  <Globe2 className="h-4 w-4" />
                  Language
                </dt>
                <dd className="font-medium text-foreground">Cantonese / English</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted">Instructor</dt>
                <dd className="font-medium text-foreground">{video.instructor ?? "Mind-Nest Team"}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="inline-flex items-center gap-2 text-muted">
                  <Users className="h-4 w-4" />
                  Audience
                </dt>
                <dd className="font-medium text-foreground">Caregivers of children and teens</dd>
              </div>
            </dl>

            <div className="mt-5 rounded-xl border border-line bg-surface px-3 py-3">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                Evidence-informed lesson
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                This content is for family psychoeducation. For high-risk situations, seek professional support.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
