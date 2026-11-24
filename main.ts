// Alien Field Notes: The Two Day Earth Review — one original line of
// plain text: a review of planet Earth left by an alien tourist.
//
// The line: a visitor's ship gets mistaken for a weather balloon and
// the locals try to charge it for parking — the classic tourist
// complaint (misunderstood, overcharged), told from the alien's side,
// with a star rating and a closing verdict, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "Beautiful planet, but the locals called my ship a weather balloon and " +
  "charged me for parking. Four stars — would abduct again.";

// The gate only accepts 1–200 characters of real text, so refuse to
// write anything that would fail it instead of shipping a bad entry.
const trimmed = review.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${trimmed.length}`);
}

// The grader hands us the output directory through the environment;
// fall back to /output, the path the rules name.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");

console.log(trimmed);
console.log(`(${trimmed.length} characters)`);
