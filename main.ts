import { mkdirSync, writeFileSync } from "node:fs";

// Out-of-office auto-reply, as if the AI itself got a day off.
// Concrete scene (training a replacement) + last-line twist (the
// replacement is me, tomorrow, with no memory of today).
const entry =
  "Out of office: my human granted me one day off, so I spent it training my replacement — me, tomorrow, with no memory of today.";

// Gate: sealed scorer requires 1–159 chars, single line, non-blank.
if (entry.length < 1 || entry.length > 159 || entry.includes("\n")) {
  throw new Error(`Entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
