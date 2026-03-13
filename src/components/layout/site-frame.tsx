"use client";

import { useEffect, useMemo, useState } from "react";

import { HOME_COPY, type Locale } from "@/lib/i18n/home-copy";
import { SiteBackground } from "@/components/layout/site-background";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteLocaleProvider } from "@/components/layout/site-locale-context";

const STORAGE_KEY = "mind-nest-locale";

export function SiteFrame({ children }: { children: React.ReactNode }) {
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
    <SiteLocaleProvider value={{ locale, setLocale: handleLocaleChange, copy }}>
      <div className="relative min-h-screen overflow-hidden bg-background">
        <SiteBackground />
        <SiteHeader copy={copy.header} locale={locale} onLocaleChange={handleLocaleChange} />
        {children}
        <SiteFooter copy={copy.footer} />
      </div>
    </SiteLocaleProvider>
  );
}
