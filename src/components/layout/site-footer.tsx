import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "心理短视频", href: "#modules" },
  { label: "AI 智能对话", href: "#modules" },
  { label: "知识问答", href: "#modules" },
  { label: "专家咨询", href: "#contact" },
];

const resourceLinks = [
  { label: "帮助中心", href: "#contact" },
  { label: "育儿博客", href: "#proof" },
  { label: "研究报告", href: "#proof" },
  { label: "下载 App", href: "#contact" },
];

const companyLinks = [
  { label: "关于我们", href: "#benefits" },
  { label: "隐私政策", href: "#contact" },
  { label: "使用条款", href: "#contact" },
  { label: "联系我们", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-8 border-t border-line bg-gradient-to-r from-amber-50/70 via-background to-orange-50/50 text-base"
    >
      <div className="mx-auto w-[min(1080px,92vw)] py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Mind-Nest logo"
                  width={38}
                  height={38}
                  className="h-9 w-9 object-cover"
                />
              </span>
              <span className="font-heading text-base font-semibold text-foreground">Mind-Nest</span>
            </Link>
            <p className="max-w-xs text-base leading-8 text-muted">
              AI 家庭心理健康辅导系统，让每个家庭都能享受专业的心理健康服务。
            </p>
          </div>

          <FooterColumn title="服务" items={serviceLinks} />
          <FooterColumn title="资源" items={resourceLinks} />
          <FooterColumn title="公司" items={companyLinks} />
        </div>

        <div className="mt-12 border-t border-line pt-7 text-base text-muted md:flex md:items-center md:justify-between">
          <p>Copyright 2026 Mind-Nest. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Designed with care for every family</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="mb-5 font-heading text-base font-semibold text-foreground">{title}</h3>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="cursor-pointer text-base text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
