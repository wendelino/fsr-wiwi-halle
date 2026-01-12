import { CTAAsq } from "@/components/cta-asq";
import { CTAAwareness } from "@/components/cta-awareness";
import { CTAErstiWoche } from "@/components/cta-ersti-woche";
import { HomeHero } from "@/components/home-hero";
import { AboutContent } from "./about/about";

export default function Home() {
  return (
    <div className="-mt-24 bg-background">
      {/* <div className="width-wrapper bg-red-500 py-6">
        <div className="h-16 bg-blue-500">sad</div>
      </div> */}
      <HomeHero />
      <div className="width-wrapper space-y-64 py-16">
        <AboutContent />
        <CTAAsq />
        <CTAErstiWoche />
        <CTAAwareness />
      </div>
    </div>
  );
}
