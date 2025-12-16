"use server";

import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getMdFile(path: string) {
  const filePath = join(process.cwd(), "src/markdown", "content", path);
  const fileContents = await readFile(filePath, "utf8");
  return fileContents;
}
