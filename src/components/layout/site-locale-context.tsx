"use client";

import { createContext, useContext } from "react";

import type { HomeCopy, Locale } from "@/lib/i18n/home-copy";

type SiteLocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: HomeCopy;
};

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

export function SiteLocaleProvider({
  value,
  children,
}: {
  value: SiteLocaleContextValue;
  children: React.ReactNode;
}) {
  return <SiteLocaleContext.Provider value={value}>{children}</SiteLocaleContext.Provider>;
}

export function useSiteLocale() {
  const context = useContext(SiteLocaleContext);
  if (!context) {
    throw new Error("useSiteLocale must be used within SiteLocaleProvider");
  }
  return context;
}
