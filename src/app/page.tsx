import Link from "next/link";

const benefits = [
  "40+ 双语微课程，单节 10-15 分钟，适配家长碎片时间。",
  "AI 对话练习将抽象心理知识转化为可执行沟通脚本。",
  "整合香港学校与 NGO 支持路径，降低家庭求助门槛。",
];

const testimonials = [
  "课程短、结构清晰，家长下班后也能完成。- 学校社工",
  "对话脚本帮我把批评式沟通改成支持式表达。- 家长用户",
  "资源目录减少了转介耗时，家校协作效率更高。- NGO 个案主任",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path d="M20 7L9 18l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="warm-halo left-[-120px] top-[-120px] h-80 w-80 bg-amber-200/60" />
      <div className="warm-halo right-[-120px] top-24 h-72 w-72 bg-orange-100/60" />
      <div className="warm-halo bottom-[-140px] left-1/3 h-96 w-96 bg-yellow-100/50" />

      <header className="relative mx-auto mt-8 flex w-[min(1080px,92vw)] items-center justify-between border-b border-line pb-5">
        <p className="font-heading text-2xl font-semibold tracking-tight text-primary">
          Mind-Nest
        </p>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a className="cursor-pointer transition-colors duration-200 hover:text-foreground" href="#benefits">
            功能
          </a>
          <a className="cursor-pointer transition-colors duration-200 hover:text-foreground" href="#contact">
            联系
          </a>
        </nav>
      </header>

      <main className="relative mx-auto w-[min(1080px,92vw)] py-10">
        <section className="soft-card grid gap-7 px-6 py-8 lg:px-8">
          <p className="max-w-fit rounded-full border border-line bg-surface px-3 py-1 text-xs tracking-wide text-muted">
            AI Assisted Family Psychoeducation
          </p>
          <h1 className="max-w-4xl font-heading text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.06] font-semibold tracking-tight text-foreground">
            让家庭心理教育具备可执行性，而不只是知识阅读。
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Mind-Nest 以双语微课程、AI 沟通练习和本地支持路径，帮助照护者更早识别风险，
            更稳健地支持 6-17 岁子女。
          </p>
          <div>
            <Link
              className="focus-ring inline-flex min-h-11 cursor-pointer items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-strong"
              href="#contact"
            >
              预约试点合作
            </Link>
          </div>
        </section>

        <section id="benefits" className="grid gap-5 py-10 lg:grid-cols-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground lg:col-span-4">
            三个关键价值
          </h2>
          <ul className="grid gap-4 lg:col-span-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="soft-card flex gap-3 p-4 text-muted">
                <span className="pt-0.5">
                  <CheckIcon />
                </span>
                <span className="leading-7">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10" id="proof">
          <h2 className="font-heading text-3xl font-semibold text-foreground">试点反馈</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {testimonials.map((quote) => (
              <blockquote
                key={quote}
                className="soft-card border-l-4 border-l-accent p-5 text-muted"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="relative mx-auto mb-10 w-[min(1080px,92vw)] border-t border-line py-8"
      >
        <p className="font-heading text-2xl font-semibold text-primary">
          面向学校与 NGO 的合作接入
        </p>
        <p className="mt-2 text-muted">
          联系邮箱：s1162122@s.eduhk.hk
        </p>
      </footer>
    </div>
  );
}
