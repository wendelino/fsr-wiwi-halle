import { CTAAsq } from "@/components/cta-asq";
import { CTAAwareness } from "@/components/cta-awareness";
import { HomeHero } from "@/components/home-hero";
import { AboutContent } from "./about/about";

export default function Home() {
  return (
    <div className="-mt-24 bg-background">
      <HomeHero />
      <div className="width-wrapper space-y-96 py-16">
        <AboutContent />
        <CTAAsq />
        <CTAAwareness />
      </div>
    </div>
  );
}
