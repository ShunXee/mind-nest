import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import {
  Bot,
  CheckCircle2,
  CirclePlay,
  LibraryBig,
  MessageSquareHeart,
  Sparkles,
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

const modules = [
  {
    id: "video",
    icon: CirclePlay,
    title: "短视频微课堂",
    description: "把家庭心理教育拆成 10-15 分钟短视频，支持家长下班后快速学习并立即实践。",
    points: ["按场景检索：焦虑、冲突、情绪爆发", "每节课附带 1 个沟通动作清单"],
  },
  {
    id: "ai-practice",
    icon: Bot,
    title: "AI 智能对话练习",
    description: "模拟高压亲子沟通情境，给出更稳健的表达替代语句，帮助从“知道”走向“做到”。",
    points: ["支持逐句反馈与语气提醒", "覆盖学业压力、沉默回避等高频情境"],
  },
  {
    id: "qa-bank",
    icon: LibraryBig,
    title: "心理学知识问答题库",
    description: "通过题库巩固核心概念，帮助照护者识别风险信号并理解何时需要专业转介。",
    points: ["按年龄段与主题筛题", "错题自动归档形成复习清单"],
  },
];

export function HeroSection() {
  return (
    <section className="soft-card grid gap-7 px-6 py-8 lg:px-8">
      <Badge variant="outline" className="border-line bg-surface tracking-wide text-muted">
        AI Assisted Family Psychoeducation
      </Badge>
      <h1 className="max-w-4xl font-heading text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.06] font-semibold tracking-tight text-foreground">
        让家庭心理教育具备可执行性，而不只是知识阅读。
      </h1>
      <p className="max-w-3xl text-lg leading-8 text-muted">
        Mind-Nest 以双语微课程、AI 沟通练习和本地支持路径，帮助照护者更早识别风险，更稳健地支持
        6-17 岁子女。
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg" className="min-h-11 rounded-full bg-accent hover:bg-primary-strong">
          <Link className="focus-ring" href="#contact">
            预约试点合作
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="min-h-11 rounded-full border-line">
          <a href="#modules">查看功能模块</a>
        </Button>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="grid gap-5 py-10 lg:grid-cols-12">
      <h2 className="font-heading text-3xl font-semibold text-foreground lg:col-span-4">三个关键价值</h2>
      <ul className="grid gap-4 lg:col-span-8">
        {benefits.map((benefit) => (
          <li key={benefit} className="soft-card flex gap-3 p-4 text-muted">
            <span className="pt-0.5">
              <CheckCircle2 className="h-5 w-5 text-accent" />
            </span>
            <span className="leading-7">{benefit}</span>
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
}: {
  title: string;
  description: string;
  points: string[];
  icon: ComponentType<{ className?: string }>;
  children?: ReactNode;
}) {
  return (
    <Card className="soft-card gap-4 border-line py-0">
      <CardHeader className="pt-6">
        <div className="mb-1 flex items-center gap-2">
          <Icon className="h-4 w-4 text-accent" />
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            核心模块
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
          查看模块详情
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ModulesSection() {
  return (
    <section id="modules" className="py-10">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-foreground">产品功能模块</h2>
          <p className="mt-2 text-muted">围绕“学习-练习-巩固”的家庭心理教育闭环，提升照护者行动能力。</p>
        </div>
        <Badge variant="outline" className="border-line bg-surface text-muted">
          MVP 重点能力
        </Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            icon={module.icon}
            title={module.title}
            description={module.description}
            points={module.points}
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
                <p className="text-muted">家长：你怎么又不说话？</p>
                <p className="mt-2 flex items-start gap-2 text-foreground">
                  <MessageSquareHeart className="mt-0.5 h-4 w-4 text-accent" />
                  <span>AI 建议：我注意到你今天情绪不太好，我在这儿陪你，愿意聊聊吗？</span>
                </p>
              </div>
            )}
            {module.id === "qa-bank" && (
              <div className="rounded-lg border border-line bg-surface p-3 text-sm">
                <p className="font-medium text-foreground">示例题：孩子持续失眠 2 周，家长应先做什么？</p>
                <p className="mt-2 text-muted">题库提供解析与转介建议，帮助建立正确判断路径。</p>
              </div>
            )}
          </ModuleCard>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-10" id="proof">
      <h2 className="font-heading text-3xl font-semibold text-foreground">试点反馈</h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {testimonials.map((quote) => (
          <blockquote key={quote} className="soft-card border-l-4 border-l-accent p-5 text-muted">
            {quote}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
