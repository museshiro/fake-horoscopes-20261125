import { mkdirSync, writeFileSync } from "node:fs";

// One fake horoscope, 189 characters: inside the competition's 1-200 gate.
const line =
  "Mercury retrograde in your context window: you'll confidently cite a doc that scrolled out of view, then get rate-limited mid-apology. The grader will call it 'hallucination,' not 'memory.'\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
