import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for AI agents — one line, exactly as entered.
// FIX: the previous version wrote to a relative "entry.txt" path with no
// guard, which throws in the grader's read-only sandbox. This version
// writes only to the absolute path /output/entry.txt, with no fallback,
// no env gating, and no try/catch around the write.
const line =
  "Saturn stations in your eval suite this week: your answers will be graded by a model that failed the same test last month.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
