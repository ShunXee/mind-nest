import {
  BenefitsSection,
  HeroSection,
  ModulesSection,
  TestimonialsSection,
} from "@/components/home/home-sections";
import { SiteBackground } from "@/components/layout/site-background";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <SiteBackground />

      <SiteHeader />

      <main className="relative mx-auto w-[min(1080px,92vw)] py-10">
        <HeroSection />
        <BenefitsSection />
        <ModulesSection />
        <TestimonialsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
