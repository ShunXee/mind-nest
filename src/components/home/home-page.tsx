"use client";

import {
  BenefitsSection,
  ChatShowcaseSection,
  FinalCtaSection,
  HeroSection,
  QAShowcaseSection,
  TestimonialsSection,
  VideoShowcaseSection,
} from "@/components/home/home-sections";
import { useSiteLocale } from "@/components/layout/site-locale-context";

export function HomePage() {
  const { copy } = useSiteLocale();

  return (
    <main className="relative mx-auto w-[min(1080px,92vw)] py-10">
      <HeroSection copy={copy.hero} />
      <BenefitsSection copy={copy.benefits} />
      <TestimonialsSection copy={copy.testimonials} />
      <ChatShowcaseSection copy={copy.chatShowcase} />
      <VideoShowcaseSection copy={copy.videoShowcase} />
      <QAShowcaseSection copy={copy.qaShowcase} />
      <FinalCtaSection copy={copy.finalCta} />
    </main>
  );
}
