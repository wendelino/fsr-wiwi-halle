import type { Metadata } from "next";
import Markdown from "@/markdown";
import { getMdFile } from "@/markdown/get-file";
export const metadata: Metadata = {
  title: "Awareness",
  description: "Allumfassendes Awareness-Konzept für den Fachschaftsrat",
};
export default async function AwarenessPage() {
  const fileContents = await getMdFile("awareness.md");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Markdown fileContents={fileContents} />
    </div>
  );
}
