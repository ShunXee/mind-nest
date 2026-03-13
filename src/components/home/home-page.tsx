"use client";

import { useEffect, useMemo, useState } from "react";

import {
  BenefitsSection,
  HeroSection,
  ModulesSection,
  TestimonialsSection,
} from "@/components/home/home-sections";
import { SiteBackground } from "@/components/layout/site-background";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HOME_COPY, type Locale } from "@/lib/i18n/home-copy";

const STORAGE_KEY = "mind-nest-locale";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("zh-HK");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "zh-HK" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  const copy = useMemo(() => HOME_COPY[locale], [locale]);

  function handleLocaleChange(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <SiteBackground />

      <SiteHeader
        copy={copy.header}
        locale={locale}
        onLocaleChange={handleLocaleChange}
      />

      <main className="relative mx-auto w-[min(1080px,92vw)] py-10">
        <HeroSection copy={copy.hero} />
        <BenefitsSection copy={copy.benefits} />
        <ModulesSection copy={copy.modules} />
        <TestimonialsSection copy={copy.testimonials} />
      </main>

      <SiteFooter copy={copy.footer} />
    </div>
  );
}
