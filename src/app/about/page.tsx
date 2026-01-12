import type { Metadata } from "next";
import { AboutContent } from "./about";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahre mehr über den Fachschaftsrat Wirtschaftswissenschaften der MLU Halle-Wittenberg",
};

export default function AboutPage() {
  return <AboutContent />;
}
