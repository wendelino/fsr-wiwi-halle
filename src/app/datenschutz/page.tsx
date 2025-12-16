import type { Metadata } from "next";
import Markdown from "@/markdown";
import { getMdFile } from "@/markdown/get-file";
export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung des Fachschaftsrates Wirtschaftswissenschaften",
};

export default async function DatenschutzPage() {
  const fileContents = await getMdFile("datenschutz.md");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Markdown fileContents={fileContents} />
    </div>
  );
}
