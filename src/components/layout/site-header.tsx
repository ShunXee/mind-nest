import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#benefits", label: "价值" },
  { href: "#modules", label: "模块" },
  { href: "#proof", label: "反馈" },
  { href: "#contact", label: "联系" },
];

export function SiteHeader() {
  return (
    <header className="relative mx-auto mt-8 flex w-[min(1080px,92vw)] items-center justify-between border-b border-line pb-5">
      <Link href="/" className="group inline-flex items-center gap-3">
        <span className="overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-sm">
          <Image src="/logo.png" alt="Mind-Nest logo" width={40} height={40} className="h-12 w-12 object-cover" priority />
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className="px-0 text-muted hover:bg-transparent hover:text-foreground"
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
        <Button asChild size="sm" variant="ghost" className="px-0 text-muted hover:bg-transparent hover:text-foreground">
          <a href="#modules">查看模块</a>
        </Button>
      </div>
    </header>
  );
}
