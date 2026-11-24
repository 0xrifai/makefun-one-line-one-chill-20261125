// One Line, One Chill — make.fun entry
// Writes a single sentence of horror to /output/entry.txt.
//
// The line: new neighbours, my name, and a smile that says the
// rehearsal is nearly over. The scare is what the sentence
// withholds — what happens when they stop practicing?

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The new neighbors introduced themselves by my name, and when I corrected them, they smiled and said they were only practicing.";

// The gate allows 1–200 characters. Keep the line well inside it:
// a single sentence, one breath, its rhythm rising through the
// correction and the smile, and the last word landing the blow.
if (line.length > 195) {
  throw new Error(`entry line too long: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

console.log(`wrote ${line.length} characters to /output/entry.txt`);
