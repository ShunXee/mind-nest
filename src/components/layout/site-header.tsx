import Image from "next/image";
import Link from "next/link";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/home-copy";

type HeaderCopy = {
  nav: Array<{ href: string; label: string }>;
  login: string;
  localeLabel: string;
};

export function SiteHeader({
  copy,
  locale,
  onLocaleChange,
}: {
  copy: HeaderCopy;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <header className="relative mt-8 border-b border-line pb-5">
      <div className="mx-auto flex w-[min(1080px,92vw)] items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-sm">
            <Image
              src="/logo.png"
              alt="Mind-Nest logo"
              width={40}
              height={40}
              className="h-12 w-12 object-cover"
              priority
            />
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-3 text-sm text-muted lg:flex">
            {copy.nav.map((item) => (
              <Button key={item.href} asChild variant="outline" size="sm" className="rounded-full border-line px-4">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
          <Button asChild size="sm" variant="outline" className="rounded-full border-line px-4">
            <a href="#" aria-disabled="true">
              {copy.login}
            </a>
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full border-line"
            onClick={() => onLocaleChange(locale === "zh-HK" ? "en" : "zh-HK")}
            aria-label={locale === "zh-HK" ? "Switch to English" : "切換到香港粵語"}
            title={locale === "zh-HK" ? "Switch to English" : "切換到香港粵語"}
          >
            <Languages className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
