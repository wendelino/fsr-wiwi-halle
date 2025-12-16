import type { Metadata } from "next";
import Markdown from "@/markdown";
import { getMdFile } from "@/markdown/get-file";
export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung des Fachschaftsrates Wirtschaftswissenschaften",
};

export default async function DatenschutzPage() {
  const fileContents = await getMdFile("geschaeftsordnung.md");

  return (
    <div>
      <Markdown fileContents={fileContents} />
    </div>
  );
}
