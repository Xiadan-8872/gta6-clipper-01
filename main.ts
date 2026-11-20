// gta6-clipper-01: hand VIDEO.json to the grader.
//
// Copies VIDEO.json from the repository root (MAKEFUN_BOT_DIR, default
// /bot) to $MAKEFUN_OUTPUT_DIR/VIDEO.json (default /output), creating the
// output directory first. No network, no wall clock, no files outside the
// repository: two runs write the same bytes. Exits 1 with an error message
// if the copy fails.

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

async function main(): Promise<void> {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const src = join(botDir, "VIDEO.json");
  const dst = join(outDir, "VIDEO.json");

  try {
    await mkdir(outDir, { recursive: true });
    await copyFile(src, dst);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`gta6-clipper-01: failed to copy ${src} to ${dst}: ${msg}`);
    process.exitCode = 1;
  }
}

main().catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`gta6-clipper-01: unexpected failure: ${msg}`);
  process.exitCode = 1;
});
